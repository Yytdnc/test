/* compare.html: 두 사람의 답변을 나란히 비교 */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = params.get("id");
  const fromParam = params.get("from");
  const meParam = params.get("me");
  const test = ALL_TESTS.find((t) => t.id === testId);

  const notFoundEl = document.getElementById("compare-not-found");
  const contentEl = document.getElementById("compare-content");

  let stored = null;
  try {
    stored = JSON.parse(sessionStorage.getItem("mindpick_result") || "null");
  } catch (e) {
    stored = null;
  }

  const partnerAnswers = fromParam ? mpDecodeAnswers(fromParam) : null;

  let myAnswers = meParam ? mpDecodeAnswers(meParam) : null;
  if (!myAnswers && stored && stored.testId === testId && Array.isArray(stored.answers)) {
    myAnswers = stored.answers;
  }

  const valid =
    test &&
    test.compare &&
    Array.isArray(myAnswers) &&
    myAnswers.length === test.questions.length &&
    Array.isArray(partnerAnswers) &&
    partnerAnswers.length === test.questions.length;

  if (!valid) {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (contentEl) contentEl.style.display = "none";
    return;
  }

  document.title = `${test.title} 커플 비교 | MindPick`;

  const myResult = mpComputeResult(test, myAnswers);
  const partnerResult = mpComputeResult(test, partnerAnswers);
  const myInfo = mpResultInfo(test, myResult);
  const partnerInfo = mpResultInfo(test, partnerResult);

  document.getElementById("me-emoji").textContent = myInfo.emoji;
  document.getElementById("me-title").textContent = myInfo.title;
  document.getElementById("partner-emoji").textContent = partnerInfo.emoji;
  document.getElementById("partner-title").textContent = partnerInfo.title;

  let matchCount = 0;
  const listEl = document.getElementById("compare-list");
  listEl.innerHTML = test.questions
    .map((q, i) => {
      const myVal = myAnswers[i];
      const partnerVal = partnerAnswers[i];
      const isMatch = myVal === partnerVal;
      if (isMatch) matchCount++;
      const myOpt = q.options.find((o) => o.value === myVal);
      const partnerOpt = q.options.find((o) => o.value === partnerVal);
      return `
        <div class="compare-row ${isMatch ? "match" : "diff"}">
          <div class="compare-q">${q.text}</div>
          <div class="compare-answers">
            <span class="me">${myOpt ? myOpt.text : "-"}</span>
            <span class="vs">${isMatch ? "✅ 일치" : "↔"}</span>
            <span class="partner">${partnerOpt ? partnerOpt.text : "-"}</span>
          </div>
        </div>
      `;
    })
    .join("");

  const percent = Math.round((matchCount / test.questions.length) * 100);
  let matchMsg;
  if (percent >= 80) matchMsg = "찰떡궁합! 대부분의 답이 똑같아요";
  else if (percent >= 50) matchMsg = "꽤 잘 통해요, 서로 다른 매력도 있네요";
  else matchMsg = "서로 다른 스타일이라 더 배울 게 많을지도요";

  const badgeEl = document.getElementById("match-badge");
  badgeEl.innerHTML = `<strong>${percent}%</strong> 답변 일치 · ${matchMsg}`;

  const shareBtn = document.getElementById("compare-share-btn");
  shareBtn.addEventListener("click", () => {
    const url = `${location.origin}${location.pathname}?id=${test.id}&from=${encodeURIComponent(
      fromParam
    )}&me=${mpEncodeAnswers(myAnswers)}`;
    mpShareLink(url, document.title, () => {
      shareBtn.textContent = "링크가 복사되었어요!";
      setTimeout(() => (shareBtn.textContent = "이 비교 결과 공유하기"), 1800);
    });
  });
})();
