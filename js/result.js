/* result.html: 결과 표시 */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = params.get("id");
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

  if (!test || !stored || stored.testId !== testId) {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (cardEl) cardEl.style.display = "none";
    return;
  }

  document.title = `${test.title} 결과 | MindPick`;

  let resultInfo;
  if (test.type === "category") {
    resultInfo = test.categories[stored.resultKey];
  } else if (test.type === "score") {
    resultInfo = test.scoreRanges.find(
      (r) => stored.score >= r.min && stored.score <= r.max
    );
  }

  if (!resultInfo) {
    if (notFoundEl) notFoundEl.style.display = "block";
    if (cardEl) cardEl.style.display = "none";
    return;
  }

  cardEl.querySelector(".r-emoji").textContent = resultInfo.emoji;
  cardEl.querySelector(".r-eyebrow").textContent = test.title;
  cardEl.querySelector("h1").textContent = resultInfo.title;
  cardEl.querySelector("p").textContent = resultInfo.desc;

  retryLink.href = `quiz.html?id=${test.id}`;

  const shareCommunityBtn = document.getElementById("share-community-btn");
  if (shareCommunityBtn) {
    shareCommunityBtn.addEventListener("click", () => {
      const q =
        stored.resultKey !== undefined
          ? `share_result=${encodeURIComponent(stored.resultKey)}`
          : `share_score=${encodeURIComponent(stored.score)}`;
      location.href = `community.html?share_test=${test.id}&${q}`;
    });
  }

  shareBtn.addEventListener("click", () => {
    const url = location.href;
    if (navigator.share) {
      navigator.share({ title: document.title, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        shareBtn.textContent = "링크가 복사되었어요!";
        setTimeout(() => (shareBtn.textContent = "결과 링크 공유하기"), 1800);
      });
    }
  });

  if (test.compare) {
    const inviteEl = document.getElementById("compare-invite");
    const inviteBtn = document.getElementById("invite-btn");
    const inviteStatus = document.getElementById("invite-status");
    if (inviteEl) inviteEl.style.display = "block";
    if (inviteBtn) {
      inviteBtn.addEventListener("click", () => {
        const encoded = mpEncodeAnswers(stored.answers || []);
        const url = `${location.origin}${location.pathname.replace(
          "result.html",
          "quiz.html"
        )}?id=${test.id}&from=${encoded}`;
        if (navigator.share) {
          navigator.share({ title: `${test.title} - 같이 해볼래?`, url }).catch(() => {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(() => {
            inviteStatus.textContent = "링크가 복사되었어요! 상대방에게 보내보세요.";
            inviteStatus.className = "status-msg ok";
          });
        }
      });
    }
  }

  if (relatedGrid) {
    const others = ALL_TESTS.filter((t) => t.id !== test.id).slice(0, 3);
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
