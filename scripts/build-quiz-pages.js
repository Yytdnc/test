#!/usr/bin/env node
/* js/tests-data.js 의 TESTS 배열을 읽어서 테스트별 정적 랜딩 페이지(quiz-<id>.html)를 생성한다.
 * 목적: quiz.html?id=... 은 <title>/<meta description>이 항상 동일해서 검색엔진이 테스트별로
 * 구분하기 어려웠음. 테스트마다 실제 title/description/canonical/OG 태그가 다르게 나오는
 * 정적 HTML을 만들어 SEO 색인 품질을 높인다.
 *
 * 사용법: node scripts/build-quiz-pages.js
 * js/tests-data.js를 수정한 뒤(테스트 추가/수정)에는 반드시 다시 실행해서 재생성해야 한다.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://www.mindpick.net";

const testsDataSrc = fs.readFileSync(path.join(ROOT, "js/tests-data.js"), "utf8");
const TESTS = new Function(`${testsDataSrc}\nreturn TESTS;`)();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildPage(test) {
  const title = `${test.title} | MindPick`;
  const description = `${test.tagline} 지금 무료로 테스트해보세요.`;
  const url = `${SITE_URL}/quiz-${test.id}.html`;
  const estMinutes = Math.max(1, Math.round((test.questions.length * 6) / 60));
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const testTitle = escapeHtml(test.title);
  const tagline = escapeHtml(test.tagline);

  const breadcrumbJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: test.title, item: url },
    ],
  });

  return `<!doctype html>
<html lang="ko">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WZW58QPM');</script>
  <!-- End Google Tag Manager -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-WGPS2NMZRY"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-WGPS2NMZRY');
  </script>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${t}</title>
  <meta name="description" content="${d}" />
  <link rel="canonical" href="${url}" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%A7%A0%3C/text%3E%3C/svg%3E" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MindPick" />
  <meta property="og:title" content="${t}" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:image" content="${SITE_URL}/img/og-share.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t}" />
  <meta name="twitter:description" content="${d}" />
  <meta name="twitter:image" content="${SITE_URL}/img/og-share.png" />
  <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css?v=11" />
  <script type="application/ld+json">${breadcrumbJsonLd}</script>

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5113083554519679" crossorigin="anonymous"></script>
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZW58QPM"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <header class="topbar">
    <a class="brand" href="index.html"><span class="logo-emoji">🧠</span>Mind<span class="accent">Pick</span></a>
    <nav>
      <a href="index.html">홈</a>
      <a href="privacy.html">개인정보처리방침</a>
    </nav>
  </header>

  <main class="quiz-shell">
    <div id="quiz-not-found" style="display:none; text-align:center; padding: 60px 0;">
      <p>테스트를 찾을 수 없어요. <a href="index.html" style="color:var(--accent); font-weight:700;">홈으로 돌아가기</a></p>
    </div>

    <section id="quiz-intro" class="quiz-intro">
      <div class="big-emoji">${test.emoji}</div>
      <h1>${testTitle}</h1>
      <p class="tagline">${tagline}</p>
      <div class="meta"><span class="q-count">질문 ${test.questions.length}개</span><span class="q-time">약 ${estMinutes}분 소요</span></div>
      <button class="button primary block start-btn">테스트 시작하기</button>
    </section>

    <section id="quiz-question" style="display:none;">
      <div class="quiz-head">
        <span>MindPick</span>
        <span class="q-step"></span>
      </div>
      <div class="progress-track"><div class="progress-fill"></div></div>
      <div class="question-card">
        <h2></h2>
        <div class="option-list"></div>
      </div>
      <div class="quiz-nav">
        <button class="link-btn back-btn" type="button">이전 질문으로</button>
      </div>
    </section>

  </main>

  <footer>
    <div class="foot-links">
      <a href="index.html">홈</a>
      <a href="privacy.html">개인정보처리방침</a>
    </div>
    <p>© 2026 MindPick. 본 사이트의 테스트는 재미로 즐기는 콘텐츠이며 과학적 근거가 없습니다.</p>
  </footer>

  <script>window.MP_TEST_ID = ${JSON.stringify(test.id)};</script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="js/supabase-config.js?v=11"></script>
  <script src="js/views.js?v=11"></script>
  <script src="js/tests-data.js?v=11"></script>
  <script src="js/custom-tests.js?v=11"></script>
  <script src="js/tests-registry.js?v=11"></script>
  <script src="js/compare-utils.js?v=11"></script>
  <script src="js/compare-session.js?v=11"></script>
  <script src="js/quiz.js?v=11"></script>
</body>
</html>
`;
}

let count = 0;
for (const test of TESTS) {
  const html = buildPage(test);
  fs.writeFileSync(path.join(ROOT, `quiz-${test.id}.html`), html, "utf8");
  count++;
}
console.log(`generated ${count} quiz-*.html pages`);
