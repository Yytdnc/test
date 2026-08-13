/* 커플/친구 답변 비교 기능에서 공통으로 쓰는 헬퍼 함수들
 * quiz.html, result.html, compare.html 에서 공통으로 로드됨 */

function mpEncodeAnswers(answers) {
  try {
    const json = JSON.stringify(answers);
    const b64 = btoa(unescape(encodeURIComponent(json)));
    return encodeURIComponent(b64);
  } catch (e) {
    return "";
  }
}

function mpDecodeAnswers(b64) {
  try {
    const json = decodeURIComponent(escape(atob(b64)));
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : null;
  } catch (e) {
    return null;
  }
}

function mpComputeResult(test, answers) {
  if (test.type === "category") {
    const counts = {};
    answers.forEach((v) => {
      counts[v] = (counts[v] || 0) + 1;
    });
    let best = null;
    let bestCount = -1;
    Object.keys(test.categories).forEach((key) => {
      const c = counts[key] || 0;
      if (c > bestCount) {
        bestCount = c;
        best = key;
      }
    });
    return { resultKey: best };
  }
  if (test.type === "score") {
    const total = answers.reduce((sum, v) => sum + v, 0);
    return { score: total };
  }
  if (test.type === "mbti") {
    const totals = {};
    test.questions.forEach((q, i) => {
      if (!q.axis) return;
      const key = q.axis[0] + q.axis[1];
      totals[key] = (totals[key] || 0) + (answers[i] || 0);
    });
    const resultKey = ["EI", "SN", "TF", "JP"]
      .map((key) => ((totals[key] || 0) >= 0 ? key[0] : key[1]))
      .join("");
    return { resultKey };
  }
  return {};
}

function mpResultInfo(test, result) {
  if (test.type === "category" || test.type === "mbti") return test.categories[result.resultKey];
  if (test.type === "score") {
    return test.scoreRanges.find((r) => result.score >= r.min && result.score <= r.max);
  }
  return null;
}

/* 링크 공유: Web Share API -> 클립보드 복사 -> (둘 다 막힌 인앱 브라우저 등에서는) 직접 복사 창
 * 각 단계가 조용히 실패해도 다음 단계로 넘어가도록 해서, 모바일 인앱 브라우저 등에서
 * "버튼을 눌러도 아무 반응이 없는" 상황을 방지한다. onCopied는 클립보드 복사 성공 시에만 호출. */
function mpShareLink(url, title, onCopied) {
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => mpShareFallback(url, onCopied));
    return;
  }
  mpShareFallback(url, onCopied);
}

/* 테스트/결과별로 <title>과 메타 설명, OG/트위터 태그를 갱신한다 (SEO + 공유 미리보기용) */
function mpSetMeta(title, description) {
  document.title = title;
  const setContent = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  };
  setContent('meta[name="description"]', description);
  setContent('meta[property="og:title"]', title);
  setContent('meta[property="og:description"]', description);
  setContent('meta[name="twitter:title"]', title);
  setContent('meta[name="twitter:description"]', description);
}

function mpShareFallback(url, onCopied) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        if (onCopied) onCopied();
      })
      .catch(() => {
        window.prompt("아래 링크를 복사해서 공유해주세요 📋", url);
      });
    return;
  }
  window.prompt("아래 링크를 복사해서 공유해주세요 📋", url);
}
