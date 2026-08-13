/* index.html: 테스트 카드 렌더링 */
(function () {
  function cardHTML(test) {
    return `
      <a class="test-card" href="quiz.html?id=${test.id}">
        <div class="thumb">${test.emoji}</div>
        <span class="tag">${test.tag}</span>
        <h3>${test.title}</h3>
        <p>${test.tagline}</p>
      </a>
    `;
  }

  function renderPopular(list) {
    const popularGrid = document.getElementById("popular-test-grid");
    if (popularGrid) {
      popularGrid.innerHTML = list.slice(0, 3).map(cardHTML).join("");
    }
  }

  function render() {
    const allGrid = document.getElementById("all-test-grid");
    if (allGrid) {
      allGrid.innerHTML = ALL_TESTS.map(cardHTML).join("");
    }

    // 조회수 데이터가 오기 전까지는 기본 순서로 먼저 보여준다
    renderPopular(ALL_TESTS);

    if (window.mpFetchTestViews) {
      window.mpFetchTestViews().then((viewMap) => {
        const ranked = ALL_TESTS.slice().sort(
          (a, b) => (viewMap[b.id] || 0) - (viewMap[a.id] || 0)
        );
        renderPopular(ranked);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
