/* admin.html: 퀴즈 빌더 + GitHub Contents API 저장 */
(function () {
  const CONFIG_KEY = "mindpick_admin_config";
  const FILE_PATH = "js/custom-tests.js";

  const els = {
    owner: document.getElementById("cfg-owner"),
    repo: document.getElementById("cfg-repo"),
    branch: document.getElementById("cfg-branch"),
    token: document.getElementById("cfg-token"),
    loadBtn: document.getElementById("cfg-load-btn"),
    cfgStatus: document.getElementById("cfg-status"),

    savedList: document.getElementById("saved-list"),

    id: document.getElementById("q-id"),
    tag: document.getElementById("q-tag"),
    title: document.getElementById("q-title"),
    emoji: document.getElementById("q-emoji"),
    tagline: document.getElementById("q-tagline"),
    type: document.getElementById("q-type"),

    categoriesWrap: document.getElementById("categories-wrap"),
    categoriesList: document.getElementById("categories-list"),
    addCategoryBtn: document.getElementById("add-category-btn"),

    rangesWrap: document.getElementById("ranges-wrap"),
    rangesList: document.getElementById("ranges-list"),
    addRangeBtn: document.getElementById("add-range-btn"),

    questionsList: document.getElementById("questions-list"),
    addQuestionBtn: document.getElementById("add-question-btn"),

    resetBtn: document.getElementById("reset-btn"),
    exportBtn: document.getElementById("export-btn"),
    saveBtn: document.getElementById("save-btn"),
    exportOutput: document.getElementById("export-output"),
    saveStatus: document.getElementById("save-status"),

    preview: document.getElementById("preview-card"),
  };

  function blankState() {
    return {
      id: "",
      tag: "",
      title: "",
      emoji: "",
      tagline: "",
      type: "category",
      categories: [{ key: "a", title: "", emoji: "", desc: "" }],
      scoreRanges: [{ min: 8, max: 14, title: "", emoji: "", desc: "" }],
      questions: [
        { text: "", options: [{ text: "", value: "a" }, { text: "", value: "a" }] },
      ],
    };
  }

  let state = blankState();
  let editingOriginalId = null; // 기존 항목을 수정 중이면 원래 id

  // ---------- 설정(owner/repo/branch/token) ----------
  function loadConfig() {
    try {
      return JSON.parse(localStorage.getItem(CONFIG_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveConfig() {
    const cfg = {
      owner: els.owner.value.trim(),
      repo: els.repo.value.trim(),
      branch: els.branch.value.trim() || "main",
      token: els.token.value.trim(),
    };
    localStorage.setItem(CONFIG_KEY, JSON.stringify(cfg));
    return cfg;
  }
  (function initConfig() {
    const cfg = loadConfig();
    els.owner.value = cfg.owner || "";
    els.repo.value = cfg.repo || "";
    els.branch.value = cfg.branch || "main";
    els.token.value = cfg.token || "";
  })();

  function apiBase(cfg) {
    return `https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${FILE_PATH}`;
  }

  function utf8ToB64(str) {
    const bytes = new TextEncoder().encode(str);
    let bin = "";
    bytes.forEach((b) => (bin += String.fromCharCode(b)));
    return btoa(bin);
  }
  function b64ToUtf8(b64) {
    const bin = atob(b64);
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8").decode(bytes);
  }

  function parseCustomTestsSource(text) {
    const start = text.indexOf("[");
    const end = text.lastIndexOf("]");
    if (start === -1 || end === -1) {
      throw new Error("custom-tests.js 형식을 해석할 수 없어요.");
    }
    return JSON.parse(text.slice(start, end + 1));
  }
  function serializeCustomTests(arr) {
    return `/* 관리자 페이지(admin.html)에서 추가한 테스트가 여기 저장됩니다.\n * 이 파일은 admin.html이 GitHub API로 직접 덮어씁니다. 직접 수정해도 되지만\n * 형식은 tests-data.js의 TESTS 항목과 동일해야 합니다. */\nconst CUSTOM_TESTS = ${JSON.stringify(arr, null, 2)};\n`;
  }

  async function fetchRemote(cfg) {
    const res = await fetch(`${apiBase(cfg)}?ref=${encodeURIComponent(cfg.branch)}`, {
      headers: {
        Authorization: `token ${cfg.token}`,
        Accept: "application/vnd.github+json",
      },
    });
    if (res.status === 404) {
      return { array: [], sha: null };
    }
    if (!res.ok) {
      throw new Error(`GitHub 조회 실패 (${res.status}). owner/repo/branch/토큰을 확인해주세요.`);
    }
    const data = await res.json();
    const text = b64ToUtf8(data.content.replace(/\n/g, ""));
    return { array: parseCustomTestsSource(text), sha: data.sha };
  }

  async function pushRemote(cfg, array, sha, message) {
    const body = {
      message,
      content: utf8ToB64(serializeCustomTests(array)),
      branch: cfg.branch,
    };
    if (sha) body.sha = sha;
    const res = await fetch(apiBase(cfg), {
      method: "PUT",
      headers: {
        Authorization: `token ${cfg.token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(`GitHub 저장 실패 (${res.status}): ${err.message || "알 수 없는 오류"}`);
    }
    return res.json();
  }

  function setStatus(el, kind, msg) {
    el.className = "status-msg " + kind;
    el.textContent = msg;
  }

  let remoteCache = null; // { array, sha }

  els.loadBtn.addEventListener("click", async () => {
    const cfg = saveConfig();
    if (!cfg.owner || !cfg.repo || !cfg.token) {
      setStatus(els.cfgStatus, "err", "owner / repo / 토큰을 모두 입력해주세요.");
      return;
    }
    setStatus(els.cfgStatus, "info", "GitHub에서 불러오는 중...");
    try {
      remoteCache = await fetchRemote(cfg);
      setStatus(els.cfgStatus, "ok", `연결 성공! 저장된 커스텀 테스트 ${remoteCache.array.length}개를 불러왔어요.`);
      renderSavedList();
    } catch (e) {
      setStatus(els.cfgStatus, "err", e.message);
    }
  });

  function renderSavedList() {
    const arr = remoteCache ? remoteCache.array : typeof CUSTOM_TESTS !== "undefined" ? CUSTOM_TESTS : [];
    if (!arr.length) {
      els.savedList.innerHTML = `<p class="hint" style="margin:0;">${remoteCache ? "아직 추가된 커스텀 테스트가 없어요." : "설정을 저장하고 'GitHub에서 불러오기'를 눌러주세요. (아래 목록은 로컬 파일 기준 참고용입니다)"}</p>`;
      return;
    }
    els.savedList.innerHTML = arr
      .map(
        (t) => `
        <div class="saved-item" data-id="${t.id}">
          <span class="name">${t.emoji || "🧩"} ${t.title} <span style="color:var(--text-soft); font-weight:400;">(${t.id})</span></span>
          <span class="actions">
            <button type="button" class="mini-btn edit-btn">수정</button>
            <button type="button" class="mini-btn danger delete-btn">삭제</button>
          </span>
        </div>`
      )
      .join("");

    els.savedList.querySelectorAll(".edit-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.closest(".saved-item").dataset.id;
        const test = arr.find((t) => t.id === id);
        if (test) loadIntoForm(test);
      });
    });
    els.savedList.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.closest(".saved-item").dataset.id;
        if (!confirm(`"${id}" 테스트를 정말 삭제할까요? GitHub에 바로 반영됩니다.`)) return;
        const cfg = loadConfig();
        try {
          if (!remoteCache) remoteCache = await fetchRemote(cfg);
          const next = remoteCache.array.filter((t) => t.id !== id);
          const result = await pushRemote(cfg, next, remoteCache.sha, `Delete quiz: ${id}`);
          remoteCache = { array: next, sha: result.content.sha };
          setStatus(els.cfgStatus, "ok", `"${id}" 테스트를 삭제하고 GitHub에 반영했어요.`);
          renderSavedList();
        } catch (e) {
          setStatus(els.cfgStatus, "err", e.message);
        }
      });
    });
  }

  function loadIntoForm(test) {
    editingOriginalId = test.id;
    state = JSON.parse(JSON.stringify(test));
    if (state.type === "category" && !state.categories) state.categories = [];
    if (state.type === "score" && !state.scoreRanges) state.scoreRanges = [];
    renderAll();
    window.scrollTo({ top: document.getElementById("builder-panel").offsetTop - 20, behavior: "smooth" });
  }

  // ---------- 폼 렌더링 ----------
  function renderAll() {
    els.id.value = state.id;
    els.tag.value = state.tag;
    els.title.value = state.title;
    els.emoji.value = state.emoji;
    els.tagline.value = state.tagline;
    els.type.value = state.type;
    renderTypeSections();
    renderCategories();
    renderRanges();
    renderQuestions();
    renderPreview();
  }

  function renderTypeSections() {
    els.categoriesWrap.style.display = state.type === "category" ? "block" : "none";
    els.rangesWrap.style.display = state.type === "score" ? "block" : "none";
  }

  function categoryOptionsHTML(selected) {
    return state.categories
      .map((c) => `<option value="${c.key}" ${c.key === selected ? "selected" : ""}>${c.key || "(빈 키)"}</option>`)
      .join("");
  }

  function renderCategories() {
    els.categoriesList.innerHTML = state.categories
      .map(
        (c, i) => `
      <div class="list-block" data-i="${i}">
        <div class="list-block-head">
          <strong>유형 ${i + 1}</strong>
          <button type="button" class="mini-btn danger cat-remove">삭제</button>
        </div>
        <div class="row3">
          <div class="field"><label>키(영문)</label><input type="text" class="cat-key" value="${c.key}" placeholder="예: dog"/></div>
          <div class="field"><label>이모지</label><input type="text" class="cat-emoji" value="${c.emoji}" placeholder="🐶"/></div>
          <div class="field"><label>제목</label><input type="text" class="cat-title" value="${c.title}" placeholder="강아지상"/></div>
        </div>
        <div class="field"><label>설명</label><textarea class="cat-desc" rows="2">${c.desc}</textarea></div>
      </div>`
      )
      .join("");

    els.categoriesList.querySelectorAll(".list-block").forEach((block) => {
      const i = Number(block.dataset.i);
      block.querySelector(".cat-key").addEventListener("input", (e) => {
        state.categories[i].key = e.target.value.trim();
        renderQuestions();
        renderPreview();
      });
      block.querySelector(".cat-emoji").addEventListener("input", (e) => { state.categories[i].emoji = e.target.value; renderPreview(); });
      block.querySelector(".cat-title").addEventListener("input", (e) => { state.categories[i].title = e.target.value; renderPreview(); });
      block.querySelector(".cat-desc").addEventListener("input", (e) => { state.categories[i].desc = e.target.value; });
      block.querySelector(".cat-remove").addEventListener("click", () => {
        state.categories.splice(i, 1);
        renderCategories();
        renderQuestions();
        renderPreview();
      });
    });
  }
  els.addCategoryBtn.addEventListener("click", () => {
    state.categories.push({ key: "", title: "", emoji: "", desc: "" });
    renderCategories();
  });

  function renderRanges() {
    els.rangesList.innerHTML = state.scoreRanges
      .map(
        (r, i) => `
      <div class="list-block" data-i="${i}">
        <div class="list-block-head">
          <strong>구간 ${i + 1}</strong>
          <button type="button" class="mini-btn danger range-remove">삭제</button>
        </div>
        <div class="row3">
          <div class="field"><label>최소 점수</label><input type="number" class="range-min" value="${r.min}"/></div>
          <div class="field"><label>최대 점수</label><input type="number" class="range-max" value="${r.max}"/></div>
          <div class="field"><label>이모지</label><input type="text" class="range-emoji" value="${r.emoji}"/></div>
        </div>
        <div class="field"><label>제목</label><input type="text" class="range-title" value="${r.title}"/></div>
        <div class="field"><label>설명</label><textarea class="range-desc" rows="2">${r.desc}</textarea></div>
      </div>`
      )
      .join("");

    els.rangesList.querySelectorAll(".list-block").forEach((block) => {
      const i = Number(block.dataset.i);
      block.querySelector(".range-min").addEventListener("input", (e) => { state.scoreRanges[i].min = Number(e.target.value); });
      block.querySelector(".range-max").addEventListener("input", (e) => { state.scoreRanges[i].max = Number(e.target.value); });
      block.querySelector(".range-emoji").addEventListener("input", (e) => { state.scoreRanges[i].emoji = e.target.value; renderPreview(); });
      block.querySelector(".range-title").addEventListener("input", (e) => { state.scoreRanges[i].title = e.target.value; renderPreview(); });
      block.querySelector(".range-desc").addEventListener("input", (e) => { state.scoreRanges[i].desc = e.target.value; });
      block.querySelector(".range-remove").addEventListener("click", () => {
        state.scoreRanges.splice(i, 1);
        renderRanges();
      });
    });
  }
  els.addRangeBtn.addEventListener("click", () => {
    state.scoreRanges.push({ min: 0, max: 0, title: "", emoji: "", desc: "" });
    renderRanges();
  });

  function renderQuestions() {
    els.questionsList.innerHTML = state.questions
      .map((q, qi) => {
        const optionsHTML = q.options
          .map((opt, oi) => {
            const valueField =
              state.type === "category"
                ? `<select class="opt-value" data-qi="${qi}" data-oi="${oi}">${categoryOptionsHTML(opt.value)}</select>`
                : `<input type="number" class="opt-value" data-qi="${qi}" data-oi="${oi}" value="${opt.value}" />`;
            return `
            <div class="option-row">
              <input type="text" class="opt-text" data-qi="${qi}" data-oi="${oi}" value="${opt.text}" placeholder="보기 내용" />
              ${valueField}
              <button type="button" class="mini-btn danger opt-remove" data-qi="${qi}" data-oi="${oi}">삭제</button>
            </div>`;
          })
          .join("");
        return `
        <div class="list-block" data-qi="${qi}">
          <div class="list-block-head">
            <strong>질문 ${qi + 1}</strong>
            <button type="button" class="mini-btn danger q-remove" data-qi="${qi}">질문 삭제</button>
          </div>
          <div class="field"><label>질문 내용</label><input type="text" class="q-text" data-qi="${qi}" value="${q.text}" placeholder="예: 주말 아침, 눈을 뜨자마자 드는 생각은?"/></div>
          <div class="field"><label>보기 (2~4개 권장)</label>${optionsHTML}</div>
          <button type="button" class="add-btn opt-add" data-qi="${qi}">+ 보기 추가</button>
        </div>`;
      })
      .join("");

    els.questionsList.querySelectorAll(".q-text").forEach((input) => {
      input.addEventListener("input", (e) => {
        state.questions[Number(e.target.dataset.qi)].text = e.target.value;
      });
    });
    els.questionsList.querySelectorAll(".opt-text").forEach((input) => {
      input.addEventListener("input", (e) => {
        const { qi, oi } = e.target.dataset;
        state.questions[qi].options[oi].text = e.target.value;
      });
    });
    els.questionsList.querySelectorAll(".opt-value").forEach((input) => {
      input.addEventListener("input", (e) => {
        const { qi, oi } = e.target.dataset;
        const v = state.type === "score" ? Number(e.target.value) : e.target.value;
        state.questions[qi].options[oi].value = v;
      });
    });
    els.questionsList.querySelectorAll(".opt-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const { qi, oi } = e.target.dataset;
        state.questions[qi].options.splice(oi, 1);
        renderQuestions();
      });
    });
    els.questionsList.querySelectorAll(".opt-add").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const qi = e.target.dataset.qi;
        const defaultVal = state.type === "category" ? (state.categories[0] ? state.categories[0].key : "") : 1;
        state.questions[qi].options.push({ text: "", value: defaultVal });
        renderQuestions();
      });
    });
    els.questionsList.querySelectorAll(".q-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        state.questions.splice(Number(e.target.dataset.qi), 1);
        renderQuestions();
      });
    });
  }
  els.addQuestionBtn.addEventListener("click", () => {
    const defaultVal = state.type === "category" ? (state.categories[0] ? state.categories[0].key : "") : 1;
    state.questions.push({ text: "", options: [{ text: "", value: defaultVal }, { text: "", value: defaultVal }] });
    renderQuestions();
  });

  // ---------- 기본 필드 바인딩 ----------
  els.id.addEventListener("input", (e) => { state.id = e.target.value.trim(); });
  els.tag.addEventListener("input", (e) => { state.tag = e.target.value; renderPreview(); });
  els.title.addEventListener("input", (e) => {
    state.title = e.target.value;
    if (!editingOriginalId && !state.id) {
      els.id.value = slugify(e.target.value);
      state.id = els.id.value;
    }
    renderPreview();
  });
  els.emoji.addEventListener("input", (e) => { state.emoji = e.target.value; renderPreview(); });
  els.tagline.addEventListener("input", (e) => { state.tagline = e.target.value; renderPreview(); });
  els.type.addEventListener("change", (e) => {
    state.type = e.target.value;
    renderTypeSections();
    renderQuestions();
  });

  function slugify(text) {
    const base = text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return (base || "custom") + "-" + Math.random().toString(36).slice(2, 6);
  }

  function renderPreview() {
    els.preview.innerHTML = `
      <div class="thumb">${state.emoji || "🧩"}</div>
      <span class="tag">${state.tag || "태그"}</span>
      <h3>${state.title || "테스트 제목"}</h3>
      <p>${state.tagline || "한 줄 소개가 여기 표시됩니다."}</p>
    `;
  }

  // ---------- 검증 ----------
  function validate() {
    const errors = [];
    if (!/^[a-z0-9-]+$/.test(state.id)) errors.push("ID는 영문 소문자/숫자/하이픈만 사용할 수 있어요.");
    if (typeof TESTS !== "undefined" && TESTS.some((t) => t.id === state.id)) {
      errors.push("이 ID는 기본 제공 테스트에서 이미 사용 중이에요. 다른 ID를 입력해주세요.");
    }
    if (!state.title.trim()) errors.push("제목을 입력해주세요.");
    if (!state.emoji.trim()) errors.push("이모지를 입력해주세요.");
    if (!state.tagline.trim()) errors.push("한 줄 소개를 입력해주세요.");
    if (state.questions.length < 1) errors.push("질문을 1개 이상 추가해주세요.");
    state.questions.forEach((q, i) => {
      if (!q.text.trim()) errors.push(`질문 ${i + 1}의 내용을 입력해주세요.`);
      if (q.options.length < 2) errors.push(`질문 ${i + 1}은 보기가 2개 이상이어야 해요.`);
      q.options.forEach((o) => {
        if (!o.text.trim()) errors.push(`질문 ${i + 1}에 빈 보기가 있어요.`);
      });
    });
    if (state.type === "category") {
      if (state.categories.length < 2) errors.push("결과 유형을 2개 이상 정의해주세요.");
      const keys = state.categories.map((c) => c.key);
      if (new Set(keys).size !== keys.length) errors.push("결과 유형 키가 중복돼요.");
      state.categories.forEach((c) => {
        if (!c.key || !c.title.trim() || !c.desc.trim()) errors.push("결과 유형의 키/제목/설명을 모두 입력해주세요.");
      });
    } else {
      if (state.scoreRanges.length < 1) errors.push("점수 구간을 1개 이상 추가해주세요.");
      state.scoreRanges.forEach((r) => {
        if (!r.title.trim() || !r.desc.trim()) errors.push("점수 구간의 제목/설명을 모두 입력해주세요.");
        if (r.min > r.max) errors.push("점수 구간의 최소값이 최대값보다 클 수 없어요.");
      });
    }
    return errors;
  }

  function buildTestObject() {
    const obj = {
      id: state.id,
      tag: state.tag,
      title: state.title,
      emoji: state.emoji,
      tagline: state.tagline,
      type: state.type,
      questions: state.questions.map((q) => ({
        text: q.text,
        options: q.options.map((o) => ({ text: o.text, value: o.value })),
      })),
    };
    if (state.type === "category") {
      obj.categories = {};
      state.categories.forEach((c) => {
        obj.categories[c.key] = { title: c.title, emoji: c.emoji, desc: c.desc };
      });
    } else {
      obj.scoreRanges = state.scoreRanges.map((r) => ({ min: r.min, max: r.max, title: r.title, emoji: r.emoji, desc: r.desc }));
    }
    return obj;
  }

  els.resetBtn.addEventListener("click", () => {
    if (!confirm("작성 중인 내용을 초기화할까요?")) return;
    state = blankState();
    editingOriginalId = null;
    els.exportOutput.style.display = "none";
    renderAll();
  });

  els.exportBtn.addEventListener("click", () => {
    const errors = validate();
    if (errors.length) {
      alert("입력을 확인해주세요:\n\n" + errors.join("\n"));
      return;
    }
    const obj = buildTestObject();
    els.exportOutput.style.display = "block";
    els.exportOutput.textContent = JSON.stringify(obj, null, 2);
  });

  els.saveBtn.addEventListener("click", async () => {
    const errors = validate();
    if (errors.length) {
      alert("입력을 확인해주세요:\n\n" + errors.join("\n"));
      return;
    }
    const cfg = loadConfig();
    if (!cfg.owner || !cfg.repo || !cfg.token) {
      setStatus(els.saveStatus, "err", "먼저 위쪽 GitHub 설정을 입력하고 '불러오기'를 눌러주세요.");
      return;
    }
    setStatus(els.saveStatus, "info", "GitHub에 저장하는 중...");
    try {
      if (!remoteCache) remoteCache = await fetchRemote(cfg);
      const obj = buildTestObject();
      const list = remoteCache.array.slice();
      const targetId = editingOriginalId || obj.id;
      const idx = list.findIndex((t) => t.id === targetId);
      if (editingOriginalId && editingOriginalId !== obj.id) {
        // id가 바뀐 경우: 기존 항목 제거 후 새 id로 추가
        if (idx !== -1) list.splice(idx, 1);
        list.push(obj);
      } else if (idx !== -1) {
        list[idx] = obj;
      } else {
        list.push(obj);
      }
      const result = await pushRemote(cfg, list, remoteCache.sha, `${idx !== -1 ? "Update" : "Add"} quiz: ${obj.title} (${obj.id})`);
      remoteCache = { array: list, sha: result.content.sha };
      editingOriginalId = obj.id;
      setStatus(els.saveStatus, "ok", `저장 완료! GitHub Pages 배포가 끝나면 quiz.html?id=${obj.id} 에서 확인할 수 있어요. (배포까지 1~2분 소요)`);
      renderSavedList();
    } catch (e) {
      setStatus(els.saveStatus, "err", e.message);
    }
  });

  renderAll();
  renderSavedList();
})();
