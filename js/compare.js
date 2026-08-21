/* compare.html: 두 사람의 답변을 나란히 비교 (Supabase에 저장된 비교 세션 사용) */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = params.get("id");
  const code = params.get("code");
  const asPartner = params.get("as") === "partner";
  const test = ALL_TESTS.find((t) => t.id === testId);

  const notFoundEl = document.getElementById("compare-not-found");
  const waitingEl = document.getElementById("compare-waiting");
  const contentEl = document.getElementById("compare-content");

  function showNotFound() {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (waitingEl) waitingEl.style.display = "none";
    if (contentEl) contentEl.style.display = "none";
  }

  function showWaiting() {
    if (notFoundEl) notFoundEl.style.display = "none";
    if (waitingEl) waitingEl.style.display = "block";
    if (contentEl) contentEl.style.display = "none";
  }

  if (!test || !test.compare || !code || !window.mpFetchCompareSession) {
    showNotFound();
    return;
  }

  window.mpFetchCompareSession(code).then((session) => {
    if (!session || session.testId !== test.id) {
      showNotFound();
      return;
    }
    const myAnswers = asPartner ? session.partnerAnswers : session.initiatorAnswers;
    const partnerAnswers = asPartner ? session.initiatorAnswers : session.partnerAnswers;

    if (!Array.isArray(myAnswers) || myAnswers.length !== test.questions.length) {
      showNotFound();
      return;
    }
    if (!Array.isArray(partnerAnswers) || partnerAnswers.length !== test.questions.length) {
      showWaiting();
      return;
    }

    renderCompare(myAnswers, partnerAnswers);
  });

  function renderCompare(myAnswers, partnerAnswers) {
    if (notFoundEl) notFoundEl.style.display = "none";
    if (waitingEl) waitingEl.style.display = "none";
    if (contentEl) contentEl.style.display = "block";

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
      mpShareLink(location.href, document.title, () => {
        shareBtn.textContent = "링크가 복사되었어요!";
        setTimeout(() => (shareBtn.textContent = "이 비교 결과 공유하기"), 1800);
      });
    });

    mpSetupKakaoButton(document.getElementById("kakao-share-btn"), () => ({
      title: `${percent}% 일치! ${test.title} 커플 비교`,
      description: `나는 ${myInfo.title}, 상대는 ${partnerInfo.title} — ${matchMsg}`,
      url: location.href,
      buttonTitle: "나도 비교해보기",
    }));
  }
})();
