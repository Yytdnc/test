/* result.html: 결과 표시 */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = params.get("id");
  const rParam = params.get("r");
  const test = ALL_TESTS.find((t) => t.id === testId);

  const cardEl = document.getElementById("result-card");
  const notFoundEl = document.getElementById("result-not-found");
  const relatedGrid = document.getElementById("related-test-grid");
  const retryLink = document.getElementById("retry-link");
  const shareBtn = document.getElementById("share-btn");

  let stored = null;
  try {
    stored = JSON.parse(sessionStorage.getItem("mindpick_result") || "null");
  } catch (e) {
    stored = null;
  }

  let answers = null;
  if (stored && stored.testId === testId && Array.isArray(stored.answers)) {
    answers = stored.answers;
  } else if (test && rParam) {
    const decoded = mpDecodeAnswers(rParam);
    if (Array.isArray(decoded) && decoded.length === test.questions.length) {
      answers = decoded;
    }
  }

  if (!test || !answers) {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (cardEl) cardEl.style.display = "none";
    return;
  }

  document.title = `${test.title} 결과 | MindPick`;

  const computed = mpComputeResult(test, answers);
  const resultInfo = mpResultInfo(test, computed);

  if (!resultInfo) {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (cardEl) cardEl.style.display = "none";
    return;
  }

  // 링크로 바로 들어온 경우에도 세션에 저장해 공유/비교 버튼이 계속 동작하게 한다
  sessionStorage.setItem(
    "mindpick_result",
    JSON.stringify({ testId: test.id, answers, ...computed })
  );

  cardEl.querySelector(".r-emoji").textContent = resultInfo.emoji;
  cardEl.querySelector(".r-eyebrow").textContent = test.title;
  cardEl.querySelector("h1").textContent = resultInfo.title;
  cardEl.querySelector("p").textContent = resultInfo.desc;

  retryLink.href = `quiz.html?id=${test.id}`;

  const shareCommunityBtn = document.getElementById("share-community-btn");
  if (shareCommunityBtn) {
    shareCommunityBtn.addEventListener("click", () => {
      const q =
        computed.resultKey !== undefined
          ? `share_result=${encodeURIComponent(computed.resultKey)}`
          : `share_score=${encodeURIComponent(computed.score)}`;
      location.href = `community.html?share_test=${test.id}&${q}`;
    });
  }

  shareBtn.addEventListener("click", () => {
    const url = `${location.origin}${location.pathname}?id=${test.id}&r=${mpEncodeAnswers(answers)}`;
    mpShareLink(url, document.title, () => {
      shareBtn.textContent = "링크가 복사되었어요!";
      setTimeout(() => (shareBtn.textContent = "결과 링크 공유하기"), 1800);
    });
  });

  if (test.compare) {
    const inviteEl = document.getElementById("compare-invite");
    const inviteBtn = document.getElementById("invite-btn");
    const inviteStatus = document.getElementById("invite-status");
    if (inviteEl) inviteEl.style.display = "block";
    if (inviteBtn) {
      inviteBtn.addEventListener("click", () => {
        const encoded = mpEncodeAnswers(answers);
        const url = `${location.origin}${location.pathname.replace(
          "result.html",
          "quiz.html"
        )}?id=${test.id}&from=${encoded}`;
        mpShareLink(url, `${test.title} - 같이 해볼래?`, () => {
          inviteStatus.textContent = "링크가 복사되었어요! 상대방에게 보내보세요.";
          inviteStatus.className = "status-msg ok";
        });
      });
    }
  }

  if (relatedGrid) {
    const pool = ALL_TESTS.filter((t) => t.id !== test.id);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const others = pool.slice(0, 3);
    relatedGrid.innerHTML = others
      .map(
        (t) => `
        <a class="test-card" href="quiz.html?id=${t.id}">
          <div class="thumb">${t.emoji}</div>
          <span class="tag">${t.tag}</span>
          <h3>${t.title}</h3>
          <p>${t.tagline}</p>
        </a>
      `
      )
      .join("");
  }
})();
