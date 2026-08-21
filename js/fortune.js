/* fortune.html: 12지신(띠)을 고르면 오늘 날짜 기준으로 매일 바뀌는
 * 오늘의 운세(총운/애정운/금전운/오늘의 조언 + 행운의 색/숫자/시간)를 보여준다 */
(function () {
  const pickerSection = document.getElementById("fortune-picker-section");
  const resultSection = document.getElementById("fortune-result-section");

  function hashString(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function mulberry32(seed) {
    let a = seed;
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  const ZODIAC = [
    { id: "rat", emoji: "🐭", name: "쥐띠", trait: "영리하고 눈치가 빠른 쥐띠. 기회를 포착하는 감각이 남다른 편이에요." },
    { id: "ox", emoji: "🐮", name: "소띠", trait: "성실하고 우직한 소띠. 꾸준함이 결국 빛을 보는 타입이에요." },
    { id: "tiger", emoji: "🐯", name: "호랑이띠", trait: "추진력 있고 당당한 호랑이띠. 결단력이 필요한 순간에 강해요." },
    { id: "rabbit", emoji: "🐰", name: "토끼띠", trait: "섬세하고 조화를 중시하는 토끼띠. 관계 속에서 빛나는 편이에요." },
    { id: "dragon", emoji: "🐲", name: "용띠", trait: "카리스마 있고 스케일이 큰 용띠. 큰 그림을 그리는 데 강해요." },
    { id: "snake", emoji: "🐍", name: "뱀띠", trait: "신중하고 통찰력 있는 뱀띠. 겉보다 속이 훨씬 깊은 편이에요." },
    { id: "horse", emoji: "🐴", name: "말띠", trait: "자유롭고 에너지 넘치는 말띠. 움직일 때 컨디션이 오르는 편이에요." },
    { id: "goat", emoji: "🐑", name: "양띠", trait: "다정하고 예술적 감각이 있는 양띠. 분위기를 편안하게 만드는 힘이 있어요." },
    { id: "monkey", emoji: "🐵", name: "원숭이띠", trait: "재치 있고 순발력 좋은 원숭이띠. 위기 대처 능력이 뛰어나요." },
    { id: "rooster", emoji: "🐔", name: "닭띠", trait: "부지런하고 자기 관리에 철저한 닭띠. 계획한 대로 착실히 해내는 편이에요." },
    { id: "dog", emoji: "🐶", name: "개띠", trait: "의리 있고 정직한 개띠. 신뢰를 바탕으로 관계를 쌓는 타입이에요." },
    { id: "pig", emoji: "🐷", name: "돼지띠", trait: "너그럽고 낙천적인 돼지띠. 여유로운 마음이 복을 부르는 편이에요." },
  ];

  const POOLS = {
    overall: [
      "차분히 준비해온 일이 서서히 빛을 발하는 하루예요.",
      "예상치 못한 좋은 소식이 들려올 수 있으니 기대해도 좋아요.",
      "평소보다 컨디션이 좋아 무엇을 해도 잘 풀리는 흐름이에요.",
      "작은 실수 하나가 마음에 걸릴 수 있지만 크게 번지지는 않아요.",
      "누군가의 도움으로 막혔던 일이 술술 풀리는 하루예요.",
      "혼자보다 함께할 때 더 좋은 결과를 만드는 하루예요.",
      "서두르기보다 한 박자 쉬어가는 게 유리한 흐름이에요.",
      "새로운 시도를 해보기에 나쁘지 않은 타이밍이에요.",
      "평범해 보여도 알고 보면 알찬 하루가 될 거예요.",
      "마음먹은 대로 일이 진행되며 성취감을 느낄 수 있어요.",
    ],
    love: [
      "짝사랑 중이라면 오늘 작은 신호를 놓치지 마세요.",
      "연인과의 대화 속에서 서로를 더 깊이 이해하게 돼요.",
      "솔직한 감정 표현이 관계를 한층 가깝게 만들어줘요.",
      "괜한 자존심 때문에 마음을 숨기지 않는 게 좋아요.",
      "새로운 인연이 뜻밖의 자리에서 시작될 수 있어요.",
      "다툼이 있었다면 오늘이 화해하기 좋은 타이밍이에요.",
      "혼자만의 시간을 즐기는 것도 좋은 선택이 되는 하루예요.",
      "상대의 작은 배려에 마음이 따뜻해지는 하루예요.",
      "너무 조급하게 다가가기보다 자연스러운 흐름을 즐겨보세요.",
      "고백이나 데이트 신청을 하기에 나쁘지 않은 하루예요.",
    ],
    money: [
      "예상치 못한 지출이 생길 수 있으니 큰 결제는 한 번 더 확인하세요.",
      "작지만 반가운 수입이 생길 가능성이 있어요.",
      "충동구매 욕구가 커지는 하루, 장바구니에 하루만 담아두세요.",
      "투자나 재테크 관련 정보를 얻기 좋은 하루예요.",
      "빌려준 돈이나 미뤄뒀던 정산이 해결될 수 있어요.",
      "돈보다 사람에게 마음을 쓰는 게 더 큰 이득이 되는 하루예요.",
      "계획적인 소비가 마음의 여유까지 가져다줄 거예요.",
      "생각지 못한 곳에서 절약할 방법을 발견하게 돼요.",
      "무리한 지출보다는 저축을 늘리기 좋은 타이밍이에요.",
      "실속 있는 선택이 나중에 큰 도움이 되는 하루예요.",
    ],
    advice: [
      "오늘은 평소보다 한 박자 여유를 갖고 움직여보세요.",
      "말보다 행동으로 진심을 보여주면 더 잘 통하는 날이에요.",
      "작은 일에 예민해지기보다 크게 웃어넘기는 여유를 가져보세요.",
      "주변 사람의 조언을 귀담아들으면 도움이 될 거예요.",
      "무리한 약속보다 내 컨디션을 먼저 챙기는 게 좋아요.",
      "미뤄뒀던 일을 오늘 마무리하면 홀가분해질 거예요.",
      "낯선 시도를 두려워하지 말고 한 걸음 내디뎌 보세요.",
      "감정적인 결정보다 차분한 판단이 필요한 하루예요.",
      "고마운 마음은 아끼지 말고 표현해보세요.",
      "완벽하지 않아도 괜찮다는 걸 스스로에게 말해주세요.",
    ],
    color: ["레드", "오렌지", "옐로우", "그린", "블루", "네이비", "퍼플", "핑크", "화이트", "골드"],
    time: [
      "아침 7시~9시",
      "오전 10시~12시",
      "점심시간 전후",
      "오후 2시~4시",
      "해질녘",
      "저녁 6시~8시",
      "밤 9시 이후",
      "자정 무렵",
    ],
  };

  function todayStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function pick(rng, pool) {
    return pool[Math.floor(rng() * pool.length)];
  }

  function computeFortune(zodiacId, dateStr) {
    const seed = hashString(`${zodiacId}|${dateStr}`);
    const rng = mulberry32(seed);
    return {
      overall: pick(rng, POOLS.overall),
      love: pick(rng, POOLS.love),
      money: pick(rng, POOLS.money),
      advice: pick(rng, POOLS.advice),
      luckyColor: pick(rng, POOLS.color),
      luckyTime: pick(rng, POOLS.time),
      luckyNumber: Math.floor(rng() * 9) + 1,
    };
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function formatDateKo(dateStr) {
    const [y, m, d] = dateStr.split("-");
    return `${y}년 ${Number(m)}월 ${Number(d)}일`;
  }

  function renderFortuneHTML(zodiac, dateStr) {
    const f = computeFortune(zodiac.id, dateStr);
    return `
      <div class="result-card">
        <div class="r-emoji">${zodiac.emoji}</div>
        <div class="r-eyebrow">${formatDateKo(dateStr)} · ${zodiac.name} 오늘의 운세</div>
        <span class="saju-badge">${escapeHtml(zodiac.trait)}</span>
        <h1>오늘의 총운</h1>
        <p>${escapeHtml(f.overall)}</p>
      </div>

      <div class="saju-lucky">
        <span>🎨 행운의 색: ${f.luckyColor}</span>
        <span>🔢 행운의 숫자: ${f.luckyNumber}</span>
        <span>⏰ 행운의 시간대: ${f.luckyTime}</span>
      </div>

      <div class="saju-detail-grid">
        <div class="saju-detail-card">
          <h3>💘 애정운</h3>
          <p>${escapeHtml(f.love)}</p>
        </div>
        <div class="saju-detail-card">
          <h3>💰 금전운</h3>
          <p>${escapeHtml(f.money)}</p>
        </div>
        <div class="saju-detail-card" style="grid-column: 1 / -1;">
          <h3>💡 오늘의 조언</h3>
          <p>${escapeHtml(f.advice)}</p>
        </div>
      </div>

      <div class="result-actions">
        <button type="button" id="fortune-back-btn" class="button ghost" style="flex:1;">다른 띠 보기</button>
        <button type="button" id="fortune-share-btn" class="button primary" style="flex:1;">🔗 오늘의 운세 공유하기</button>
      </div>
    `;
  }

  function showFortune(zodiacId) {
    const zodiac = ZODIAC.find((z) => z.id === zodiacId);
    if (!zodiac) return;
    const dateStr = todayStr();

    resultSection.innerHTML = renderFortuneHTML(zodiac, dateStr);
    pickerSection.style.display = "none";
    resultSection.style.display = "block";

    const titleText = `${zodiac.name} 오늘의 운세 (${formatDateKo(dateStr)}) | MindPick`;
    const descText = `${formatDateKo(dateStr)} ${zodiac.name}의 오늘의 총운, 애정운, 금전운과 행운의 색·숫자·시간을 확인해보세요.`;
    if (window.mpSetMeta) mpSetMeta(titleText, descText);
    else document.title = titleText;

    history.replaceState(null, "", `?z=${zodiac.id}`);

    document.getElementById("fortune-back-btn").addEventListener("click", () => {
      resultSection.style.display = "none";
      pickerSection.style.display = "block";
      history.replaceState(null, "", location.pathname);
    });

    document.getElementById("fortune-share-btn").addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const url = `${location.origin}/fortune.html?z=${zodiac.id}`;
      const shareText = `${zodiac.name} 오늘의 운세: ${zodiac.emoji} ${f_overall_for_share(zodiac, dateStr)}\n내 띠 운세도 확인해보기 👉`;
      mpShareLink(url, shareText, () => {
        btn.textContent = "링크가 복사되었어요!";
        setTimeout(() => (btn.textContent = "🔗 오늘의 운세 공유하기"), 1800);
      });
    });
  }

  function f_overall_for_share(zodiac, dateStr) {
    return computeFortune(zodiac.id, dateStr).overall;
  }

  document.querySelectorAll(".zodiac-btn").forEach((btn) => {
    btn.addEventListener("click", () => showFortune(btn.dataset.zodiac));
  });

  const params = new URLSearchParams(location.search);
  const zParam = params.get("z");
  if (zParam && ZODIAC.some((z) => z.id === zParam)) {
    showFortune(zParam);
  }
})();
