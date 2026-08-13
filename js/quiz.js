/* quiz.html: 테스트 진행 엔진 */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = params.get("id");
  const fromParam = params.get("from");
  const test = ALL_TESTS.find((t) => t.id === testId);

  const introEl = document.getElementById("quiz-intro");
  const questionEl = document.getElementById("quiz-question");
  const notFoundEl = document.getElementById("quiz-not-found");

  if (!test) {
    if (notFoundEl) notFoundEl.style.display = "block";
    return;
  }

  if (window.mpRecordTestView) {
    window.mpRecordTestView(test.id);
  }

  const partnerAnswers =
    test.compare && fromParam ? mpDecodeAnswers(fromParam) : null;
  const isPartnerValid =
    Array.isArray(partnerAnswers) && partnerAnswers.length === test.questions.length;

  document.title = `${test.title} | MindPick`;

  // Intro
  introEl.querySelector(".big-emoji").textContent = test.emoji;
  introEl.querySelector("h1").textContent = test.title;
  introEl.querySelector(".tagline").textContent = isPartnerValid
    ? "상대방이 보낸 테스트예요! 답변을 마치면 서로의 결과를 비교해볼 수 있어요 💑"
    : test.tagline;
  introEl.querySelector(".q-count").textContent = `질문 ${test.questions.length}개`;
  const estMinutes = Math.max(1, Math.round((test.questions.length * 6) / 60));
  introEl.querySelector(".q-time").textContent = `약 ${estMinutes}분 소요`;

  if (isPartnerValid) {
    const badge = document.createElement("div");
    badge.className = "compare-invite-badge";
    badge.textContent = "💑 커플 비교 모드";
    introEl.insertBefore(badge, introEl.querySelector(".big-emoji"));
  }

  const answers = [];
  let currentIndex = 0;

  function startQuiz() {
    introEl.style.display = "none";
    questionEl.style.display = "block";
    renderQuestion();
  }

  function renderQuestion() {
    const q = test.questions[currentIndex];
    const progress = Math.round((currentIndex / test.questions.length) * 100);

    questionEl.querySelector(".progress-fill").style.width = progress + "%";
    questionEl.querySelector(".q-step").textContent = `${currentIndex + 1} / ${test.questions.length}`;
    questionEl.querySelector("h2").textContent = q.text;

    const list = questionEl.querySelector(".option-list");
    list.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.textContent = opt.text;
      btn.addEventListener("click", () => selectOption(opt.value));
      list.appendChild(btn);
    });
  }

  function selectOption(value) {
    answers.push(value);
    currentIndex++;
    if (currentIndex >= test.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function goBack() {
    if (currentIndex === 0) return;
    currentIndex--;
    answers.pop();
    renderQuestion();
  }

  function computeResult() {
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

  function finishQuiz() {
    const result = computeResult();
    sessionStorage.setItem(
      "mindpick_result",
      JSON.stringify({ testId: test.id, answers, ...result })
    );
    if (isPartnerValid) {
      location.href = `compare.html?id=${test.id}&from=${encodeURIComponent(fromParam)}`;
    } else {
      location.href = `result.html?id=${test.id}`;
    }
  }

  introEl.querySelector(".start-btn").addEventListener("click", startQuiz);
  questionEl.querySelector(".back-btn").addEventListener("click", goBack);
})();
