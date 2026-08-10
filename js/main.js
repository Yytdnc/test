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

  function render() {
    const allGrid = document.getElementById("all-test-grid");
    const popularGrid = document.getElementById("popular-test-grid");
    if (allGrid) {
      allGrid.innerHTML = ALL_TESTS.map(cardHTML).join("");
    }
    if (popularGrid) {
      popularGrid.innerHTML = ALL_TESTS.slice(0, 3).map(cardHTML).join("");
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
