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
    const counts = {};
    answers.forEach((v) => {
      counts[v] = (counts[v] || 0) + 1;
    });
    const axes = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];
    const resultKey = axes
      .map(([a, b]) => ((counts[a] || 0) >= (counts[b] || 0) ? a : b))
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
