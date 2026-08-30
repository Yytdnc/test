#!/usr/bin/env node
/* js/tests-data.js 의 TESTS 배열을 읽어서 다음을 생성한다.
 *  1) 테스트별 정적 랜딩 페이지 quiz-<id>.html
 *  2) 전체 테스트 목록 페이지 tests.html
 *  3) index.html 안의 정적 테스트 카드 목록 (BUILD:ALL_TESTS 마커 사이)
 *
 * 목적:
 *  - quiz.html?id=... 은 <title>/<meta description>이 항상 동일해서 검색엔진이 테스트별로
 *    구분하기 어려웠음. 테스트마다 실제 title/description/canonical/OG 태그가 다른 정적 HTML 생성.
 *  - 문항/결과 설명이 전부 JS로만 주입돼서 자바스크립트를 실행하지 않는 크롤러에게는
 *    페이지가 거의 빈 껍데기로 보였음. 각 페이지에 문항 목록과 결과 유형 설명을
 *    정적 HTML(<article class="quiz-article">)로 박아 넣어 실제 읽을거리를 제공한다.
 *
 * 사용법: node scripts/build-quiz-pages.js
 * js/tests-data.js를 수정한 뒤(테스트 추가/수정)에는 반드시 다시 실행해서 재생성해야 한다.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://www.mindpick.net";
const ASSET_VER = "15";

const testsDataSrc = fs.readFileSync(path.join(ROOT, "js/tests-data.js"), "utf8");
const TESTS = new Function(`${testsDataSrc}\nreturn TESTS;`)();

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function estMinutesOf(test) {
  return Math.max(1, Math.round((test.questions.length * 6) / 60));
}

/* 결과 유형 목록을 { emoji, title, desc } 배열로 정규화한다. */
function resultTypesOf(test) {
  if (test.type === "score" && Array.isArray(test.scoreRanges)) {
    return test.scoreRanges.map((r) => ({ emoji: r.emoji, title: r.title, desc: r.desc }));
  }
  if (test.categories && typeof test.categories === "object") {
    return Object.keys(test.categories).map((k) => {
      const c = test.categories[k];
      return { emoji: c.emoji, title: c.title, desc: c.desc };
    });
  }
  return [];
}

/* 자바스크립트 없이도 읽을 수 있는 본문 아티클. */
function articleHtml(test) {
  const results = resultTypesOf(test);
  const qCount = test.questions.length;
  const estMinutes = estMinutesOf(test);
  const tagline = String(test.tagline).replace(/[.?!\s]+$/, "");

  const resultLine =
    test.type === "score"
      ? `응답 점수에 따라 ${results.length}가지 결과 중 하나로 나와요.`
      : `${results.length}가지 유형 중 나와 가장 가까운 결과를 알려줘요.`;

  const intro =
    `${test.title}는 '${tagline}'를 주제로 한 ${escapeHtml(test.tag)} 심리테스트예요. ` +
    `${qCount}개의 일상 상황 질문에 답하면 평소에는 잘 드러나지 않던 나의 성향을 짧게 정리해서 보여줘요.`;

  const howto =
    `문항은 모두 ${qCount}개이고 약 ${estMinutes}분이면 끝나요. ${resultLine} ` +
    `회원가입이나 이름·이메일 같은 개인정보 입력 없이 바로 시작할 수 있고, ` +
    `선택한 답변은 서버에 저장되지 않고 브라우저에만 잠시 보관돼요.`;

  const resultBlocks = results
    .map(
      (r) =>
        `      <div class="result-type">\n` +
        `        <h3>${escapeHtml(r.emoji || "")} ${escapeHtml(r.title || "")}</h3>\n` +
        `        <p>${escapeHtml(r.desc || "")}</p>\n` +
        `      </div>`
    )
    .join("\n");

  const questionItems = test.questions
    .map((q) => `        <li>${escapeHtml(q.text)}</li>`)
    .join("\n");

  return `  <article class="quiz-article">
    <h2>이 테스트는?</h2>
    <p>${escapeHtml(intro)}</p>
    <p>${escapeHtml(howto)}</p>

    <h2>이런 결과가 나와요</h2>
${resultBlocks}

    <h2>질문 미리보기</h2>
    <ol>
${questionItems}
    </ol>

    <p class="article-note">본 테스트는 재미로 즐기는 콘텐츠이며 과학적·심리학적 근거가 없습니다. 결과는 참고용으로만 봐주세요.</p>
  </article>`;
}

function buildPage(test) {
  const title = `${test.title} | MindPick`;
  const description = `${test.tagline} 지금 무료로 테스트해보세요.`;
  const url = `${SITE_URL}/quiz-${test.id}.html`;
  const estMinutes = estMinutesOf(test);
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
  <link rel="stylesheet" href="css/style.css?v=${ASSET_VER}" />
  <script type="application/ld+json">${breadcrumbJsonLd}</script>

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5113083554519679" crossorigin="anonymous"></script>
  <!-- Google Funding Choices (CMP) -->
  <script async src="https://fundingchoicesmessages.google.com/i/pub-5113083554519679?ers=1"></script>
  <script>(function(){function s(){if(!window.frames.googlefcPresent){if(document.body){var e=document.createElement('iframe');e.style='width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';e.style.display='none';e.name='googlefcPresent';document.body.appendChild(e);}else{setTimeout(s,0);}}}s();})();</script>
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
      <a href="tests.html">전체 테스트</a>
      <a href="about.html">소개</a>
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

${articleHtml(test)}

  <footer>
    <div class="foot-links">
      <a href="index.html">홈</a>
      <a href="tests.html">전체 테스트</a>
      <a href="about.html">소개</a>
      <a href="privacy.html">개인정보처리방침</a>
    </div>
    <p>© 2026 MindPick. 본 사이트의 테스트는 재미로 즐기는 콘텐츠이며 과학적 근거가 없습니다.</p>
  </footer>

  <script>window.MP_TEST_ID = ${JSON.stringify(test.id)};</script>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="js/supabase-config.js?v=${ASSET_VER}"></script>
  <script src="js/views.js?v=${ASSET_VER}"></script>
  <script src="js/tests-data.js?v=${ASSET_VER}"></script>
  <script src="js/custom-tests.js?v=${ASSET_VER}"></script>
  <script src="js/tests-registry.js?v=${ASSET_VER}"></script>
  <script src="js/compare-utils.js?v=${ASSET_VER}"></script>
  <script src="js/compare-session.js?v=${ASSET_VER}"></script>
  <script src="js/quiz.js?v=${ASSET_VER}"></script>
</body>
</html>
`;
}

/* ---------- index.html 정적 카드 목록 주입 ---------- */
function cardHtml(test) {
  return `        <a class="test-card" href="quiz-${test.id}.html">
          <div class="thumb">${test.emoji}</div>
          <span class="tag">${escapeHtml(test.tag)}</span>
          <h3>${escapeHtml(test.title)}</h3>
          <p>${escapeHtml(test.tagline)}</p>
        </a>`;
}

function injectIndexCards() {
  const indexPath = path.join(ROOT, "index.html");
  let html = fs.readFileSync(indexPath, "utf8");
  const start = "<!-- BUILD:ALL_TESTS_START -->";
  const end = "<!-- BUILD:ALL_TESTS_END -->";
  const si = html.indexOf(start);
  const ei = html.indexOf(end);
  if (si === -1 || ei === -1) {
    console.warn("index.html: BUILD:ALL_TESTS 마커를 찾지 못해 정적 카드 주입을 건너뜀");
    return;
  }
  const cards = TESTS.map(cardHtml).join("\n");
  const next =
    html.slice(0, si + start.length) +
    "\n" +
    cards +
    "\n        " +
    html.slice(ei);
  if (next !== html) {
    fs.writeFileSync(indexPath, next, "utf8");
    console.log("index.html: 정적 테스트 카드 주입 완료");
  }
}

/* ---------- tests.html 전체 목록 페이지 ---------- */
function buildTestsPage() {
  const url = `${SITE_URL}/tests.html`;
  const rows = TESTS.map(
    (test) => `      <a class="test-card" href="quiz-${test.id}.html">
        <div class="thumb">${test.emoji}</div>
        <span class="tag">${escapeHtml(test.tag)}</span>
        <h3>${escapeHtml(test.title)}</h3>
        <p>${escapeHtml(test.tagline)}</p>
      </a>`
  ).join("\n");

  const itemListJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TESTS.map((test, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/quiz-${test.id}.html`,
      name: test.title,
    })),
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
  <title>전체 심리테스트 목록 | MindPick</title>
  <meta name="description" content="MindPick의 모든 심리테스트를 한눈에. 성격, 연애, 애착유형, 스트레스, MBTI 등 ${TESTS.length}가지 테스트를 무료로 즐겨보세요." />
  <link rel="canonical" href="${url}" />
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%A7%A0%3C/text%3E%3C/svg%3E" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MindPick" />
  <meta property="og:title" content="전체 심리테스트 목록 | MindPick" />
  <meta property="og:description" content="MindPick의 모든 심리테스트를 한눈에. ${TESTS.length}가지 테스트를 무료로 즐겨보세요." />
  <meta property="og:url" content="${url}" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:image" content="${SITE_URL}/img/og-share.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="전체 심리테스트 목록 | MindPick" />
  <meta name="twitter:description" content="MindPick의 모든 심리테스트를 한눈에." />
  <meta name="twitter:image" content="${SITE_URL}/img/og-share.png" />
  <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css?v=${ASSET_VER}" />
  <script type="application/ld+json">${itemListJsonLd}</script>

  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5113083554519679" crossorigin="anonymous"></script>
  <!-- Google Funding Choices (CMP) -->
  <script async src="https://fundingchoicesmessages.google.com/i/pub-5113083554519679?ers=1"></script>
  <script>(function(){function s(){if(!window.frames.googlefcPresent){if(document.body){var e=document.createElement('iframe');e.style='width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';e.style.display='none';e.name='googlefcPresent';document.body.appendChild(e);}else{setTimeout(s,0);}}}s();})();</script>
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
      <a class="active" href="tests.html">전체 테스트</a>
      <a href="about.html">소개</a>
      <a href="privacy.html">개인정보처리방침</a>
    </nav>
  </header>

  <main>
    <section class="section wrap">
      <div class="section-head">
        <h1>전체 심리테스트</h1>
      </div>
      <p style="color:var(--text-soft); margin: 0 0 20px;">MindPick의 모든 심리테스트 ${TESTS.length}가지예요. 관심 있는 주제를 골라 바로 시작해보세요. 로그인이나 개인정보 입력은 필요하지 않아요.</p>
      <div class="test-grid">
${rows}
      </div>
    </section>
  </main>

  <footer>
    <div class="foot-links">
      <a href="index.html">홈</a>
      <a href="tests.html">전체 테스트</a>
      <a href="about.html">소개</a>
      <a href="privacy.html">개인정보처리방침</a>
    </div>
    <p>© 2026 MindPick. 본 사이트의 테스트는 재미로 즐기는 콘텐츠이며 과학적 근거가 없습니다.</p>
  </footer>
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
fs.writeFileSync(path.join(ROOT, "tests.html"), buildTestsPage(), "utf8");
injectIndexCards();
console.log(`generated ${count} quiz-*.html pages + tests.html`);
