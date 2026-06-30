function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.append(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function setupFilters() {
  const filterGroups = document.querySelectorAll(".filters");

  filterGroups.forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    if (!buttons.length) return;

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        const page = group.closest("main");
        const items = page.querySelectorAll("[data-category]");

        buttons.forEach((item) => item.classList.toggle("active", item === button));
        items.forEach((item) => {
          const categories = (item.dataset.category || "").split(" ");
          item.hidden = filter !== "all" && !categories.includes(filter);
        });
      });
    });
  });
}

function setupCoupleCards() {
  const cards = document.querySelectorAll("[data-card]");
  if (!cards.length) return;

  const dialog = document.createElement("div");
  dialog.className = "modal";
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button class="modal-close" type="button" aria-label="닫기">×</button>
      <span class="eyebrow">MindCheck Test</span>
      <h2 id="modalTitle"></h2>
      <p></p>
      <div class="actions">
        <a class="button primary" href="mbti.html">MBTI 검사로 이동</a>
        <button class="button ghost" type="button" data-modal-ok>확인</button>
      </div>
    </div>
  `;
  document.body.append(dialog);

  function close() {
    dialog.hidden = true;
  }

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.matches(".modal-close, [data-modal-ok]")) close();
  });

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.addEventListener("click", () => {
      dialog.querySelector("h2").textContent = card.dataset.title;
      dialog.querySelector("p").textContent = `${card.dataset.description} ${card.dataset.action}`;
      dialog.hidden = false;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

function setupBalanceGame() {
  const cards = document.querySelectorAll("[data-balance]");
  if (!cards.length) return;

  cards.forEach((card) => {
    const id = card.dataset.balance;
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(`mindcheck:balance:${id}`) || "null");
    } catch {
      localStorage.removeItem(`mindcheck:balance:${id}`);
    }
    let counts = saved || { a: Number(card.querySelector('[data-choice="a"] em').textContent.replace("%", "")), b: Number(card.querySelector('[data-choice="b"] em').textContent.replace("%", "")) };
    let selected = localStorage.getItem(`mindcheck:balance-choice:${id}`);

    function render() {
      const total = counts.a + counts.b || 1;
      ["a", "b"].forEach((key) => {
        const option = card.querySelector(`[data-choice="${key}"]`);
        const percent = Math.round((counts[key] / total) * 100);
        option.querySelector("em").textContent = `${percent}%`;
        option.style.setProperty("--bar", `${percent}%`);
        option.classList.toggle("selected", selected === key);
      });
      card.querySelector("button").textContent = selected ? "다시 선택할 수 있어요" : "선택 후 결과 보기";
    }

    ["a", "b"].forEach((key) => {
      const option = card.querySelector(`[data-choice="${key}"]`);
      option.tabIndex = 0;
      option.setAttribute("role", "button");
      option.addEventListener("click", () => {
        if (selected) counts[selected] = Math.max(0, counts[selected] - 1);
        counts[key] += 1;
        selected = key;
        localStorage.setItem(`mindcheck:balance:${id}`, JSON.stringify(counts));
        localStorage.setItem(`mindcheck:balance-choice:${id}`, selected);
        render();
        showToast("선택이 반영되었습니다.");
      });
      option.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          option.click();
        }
      });
    });

    card.querySelector("button").addEventListener("click", () => {
      showToast(selected ? "현재 투표 결과를 확인하세요." : "먼저 둘 중 하나를 선택하세요.");
    });

    render();
  });
}

function setupResultShare() {
  const copy = document.querySelector("[data-copy-result]");
  if (!copy) return;

  copy.addEventListener("click", async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast("결과 링크가 복사되었습니다.");
    } catch {
      showToast(url);
    }
  });
}

setupFilters();
setupCoupleCards();
setupBalanceGame();
setupResultShare();
