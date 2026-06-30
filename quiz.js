const questions = [
  ["새로운 사람들을 만날 때 기운이 나나요?", "E", "I"],
  ["쉬는 날에는 약속을 잡고 밖에 나가고 싶나요?", "E", "I"],
  ["생각을 말하면서 정리하는 편인가요?", "E", "I"],
  ["정보를 볼 때 구체적인 사실이 먼저 눈에 들어오나요?", "S", "N"],
  ["실행 가능한 방법부터 찾는 편인가요?", "S", "N"],
  ["설명은 단계와 예시가 분명할수록 편한가요?", "S", "N"],
  ["결정할 때 논리와 효율을 우선하나요?", "T", "F"],
  ["피드백은 핵심을 정확히 말하는 편인가요?", "T", "F"],
  ["고민 상담을 들으면 해결책이 먼저 떠오르나요?", "T", "F"],
  ["여행 전 일정과 예약을 미리 정리하나요?", "J", "P"],
  ["마감이 있는 일은 초반부터 차근차근 끝내나요?", "J", "P"],
  ["하루 계획이 예상대로 끝나면 만족감이 큰가요?", "J", "P"]
];

const labels = [
  ["매우 그렇다", 2],
  ["그렇다", 1],
  ["중간이다", 0],
  ["아니다", -1],
  ["매우 아니다", -2]
];

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
};

const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const progressHint = document.querySelector("#progressHint");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

function render() {
  const [text] = questions[state.index];
  const selected = state.answers[state.index];
  const number = String(state.index + 1).padStart(2, "0");
  const percent = ((state.index + 1) / questions.length) * 100;

  questionText.textContent = text;
  progressText.innerHTML = `${number} <span>/ ${questions.length}</span>`;
  progressHint.textContent = state.index > 8 ? "거의 다 왔어요!" : "천천히 골라도 괜찮아요";
  progressBar.style.width = `${percent}%`;
  prevBtn.disabled = state.index === 0;
  nextBtn.disabled = selected === null;
  nextBtn.innerHTML = state.index === questions.length - 1
    ? '결과 보기<span class="material-symbols-outlined">arrow_forward</span>'
    : '다음 질문<span class="material-symbols-outlined">arrow_forward</span>';

  answers.innerHTML = "";
  labels.forEach(([label, value]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = selected === value ? "selected" : "";
    button.innerHTML = `<span>${label}</span><i></i>`;
    button.addEventListener("click", () => {
      state.answers[state.index] = value;
      render();
    });
    answers.append(button);
  });
}

function calculateType() {
  state.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  questions.forEach(([, positive, negative], index) => {
    const value = state.answers[index] || 0;
    if (value >= 0) state.scores[positive] += value || 1;
    if (value < 0) state.scores[negative] += Math.abs(value);
  });

  return [
    state.scores.E >= state.scores.I ? "E" : "I",
    state.scores.S >= state.scores.N ? "S" : "N",
    state.scores.T >= state.scores.F ? "T" : "F",
    state.scores.J >= state.scores.P ? "J" : "P"
  ].join("");
}

prevBtn.addEventListener("click", () => {
  if (state.index > 0) {
    state.index -= 1;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.answers[state.index] === null) return;

  if (state.index === questions.length - 1) {
    const type = calculateType();
    localStorage.setItem("mindcheck:lastResult", JSON.stringify({
      type,
      scores: state.scores,
      answers: state.answers,
      completedAt: new Date().toISOString()
    }));
    window.location.href = `result.html?type=${type}`;
    return;
  }

  state.index += 1;
  render();
});

render();
