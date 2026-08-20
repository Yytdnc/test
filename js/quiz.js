/* quiz.html: 테스트 진행 엔진 */
(function () {
  const params = new URLSearchParams(location.search);
  const testId = window.MP_TEST_ID || params.get("id");
  const compareCode = params.get("from");
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

  mpSetMeta(`${test.title} | MindPick`, test.tagline);

  // Intro (기본값 먼저 표시 - 비교 모드 여부는 비동기로 확인 후 반영)
  introEl.querySelector(".big-emoji").textContent = test.emoji;
  introEl.querySelector("h1").textContent = test.title;
  introEl.querySelector(".tagline").textContent = test.tagline;
  introEl.querySelector(".q-count").textContent = `질문 ${test.questions.length}개`;
  const estMinutes = Math.max(1, Math.round((test.questions.length * 6) / 60));
  introEl.querySelector(".q-time").textContent = `약 ${estMinutes}분 소요`;

  let isPartnerValid = false;
  let partnerReady = Promise.resolve();

  if (test.compare && compareCode && window.mpFetchCompareSession) {
    partnerReady = window.mpFetchCompareSession(compareCode).then((session) => {
      if (
        session &&
        session.testId === test.id &&
        Array.isArray(session.initiatorAnswers) &&
        session.initiatorAnswers.length === test.questions.length
      ) {
        isPartnerValid = true;
        introEl.querySelector(".tagline").textContent =
          "상대방이 보낸 테스트예요! 답변을 마치면 서로의 결과를 비교해볼 수 있어요 💑";
        if (!introEl.querySelector(".compare-invite-badge")) {
          const badge = document.createElement("div");
          badge.className = "compare-invite-badge";
          badge.textContent = "💑 커플 비교 모드";
          introEl.insertBefore(badge, introEl.querySelector(".big-emoji"));
        }
      }
    });
  }

  const answers = [];
  let currentIndex = 0;
  let isAnswering = false;

  function startQuiz() {
    introEl.style.display = "none";
    questionEl.style.display = "block";
    renderQuestion();
  }

  function renderQuestion() {
    isAnswering = false;
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
    if (isAnswering) return;
    isAnswering = true;
    answers.push(value);
    currentIndex++;
    if (currentIndex >= test.questions.length) {
      finishQuiz();
    } else {
      renderQuestion();
    }
  }

  function goBack() {
    if (isAnswering || currentIndex === 0) return;
    isAnswering = true;
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
      const totals = {};
      test.questions.forEach((q, i) => {
        if (!q.axis) return;
        const key = q.axis[0] + q.axis[1];
        totals[key] = (totals[key] || 0) + (answers[i] || 0);
      });
      const resultKey = ["EI", "SN", "TF", "JP"]
        .map((key) => ((totals[key] || 0) >= 0 ? key[0] : key[1]))
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
    partnerReady.then(() => {
      if (isPartnerValid && compareCode) {
        const submit = window.mpSubmitPartnerAnswers
          ? window.mpSubmitPartnerAnswers(compareCode, answers)
          : Promise.resolve();
        submit.then(() => {
          location.href = `compare.html?id=${test.id}&code=${compareCode}&as=partner`;
        });
      } else {
        location.href = `result.html?id=${test.id}`;
      }
    });
  }

  introEl.querySelector(".start-btn").addEventListener("click", startQuiz);
  questionEl.querySelector(".back-btn").addEventListener("click", goBack);
})();
