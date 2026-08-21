/* index.html: 테스트 카드 렌더링 */
(function () {
  const TAG_COLOR_COUNT = 6;
  function tagColorClass(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return "tag-c" + (h % TAG_COLOR_COUNT);
  }

  // 조회수가 아직 적을 때는 배지를 아예 숨긴다 (초라해 보이는 "👀 3" 대신
  // 트래픽이 쌓여서 이 기준을 넘으면 자동으로 배지가 나타난다)
  const MIN_VIEWS_TO_SHOW = 50;

  function formatViews(n) {
    if (!n || n < MIN_VIEWS_TO_SHOW) return null;
    if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, "") + "만";
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "천";
    return String(n);
  }

  function cardHTML(test) {
    return `
      <a class="test-card" href="quiz-${test.id}.html">
        <div class="thumb">${test.emoji}</div>
        <span class="tag ${tagColorClass(test.id)}">${test.tag}</span>
        <h3>${test.title}</h3>
        <p>${test.tagline}</p>
      </a>
    `;
  }

  function rankBadgeClass(i) {
    if (i === 0) return "rank-badge gold";
    if (i === 1) return "rank-badge silver";
    if (i === 2) return "rank-badge bronze";
    return "rank-badge";
  }

  function rankHTML(test, i, views) {
    const viewsText = formatViews(views);
    return `
      <a class="rank-item" href="quiz-${test.id}.html">
        <span class="${rankBadgeClass(i)}">${i + 1}</span>
        <span class="rank-thumb">${test.emoji}</span>
        <span class="rank-info">
          <span class="rank-tag ${tagColorClass(test.id)}">${test.tag}</span>
          <span class="rank-title">${test.title}</span>
        </span>
        ${viewsText ? `<span class="rank-views">👀 ${viewsText}</span>` : ""}
      </a>
    `;
  }

  function renderPopular(list, viewMap) {
    const popularGrid = document.getElementById("popular-test-grid");
    if (popularGrid) {
      popularGrid.innerHTML = list
        .slice(0, 5)
        .map((t, i) => rankHTML(t, i, viewMap[t.id]))
        .join("");
    }
  }

  function injectItemListSchema() {
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: ALL_TESTS.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${location.origin}/quiz-${t.id}.html`,
        name: t.title,
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function render() {
    const allGrid = document.getElementById("all-test-grid");
    if (allGrid) {
      allGrid.innerHTML = ALL_TESTS.map(cardHTML).join("");
    }

    // 조회수 데이터가 오기 전까지는 기본 순서로 먼저 보여준다
    renderPopular(ALL_TESTS, {});
    injectItemListSchema();

    if (window.mpFetchTestViews) {
      window.mpFetchTestViews().then((viewMap) => {
        const ranked = ALL_TESTS.slice().sort(
          (a, b) => (viewMap[b.id] || 0) - (viewMap[a.id] || 0)
        );
        renderPopular(ranked, viewMap);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
