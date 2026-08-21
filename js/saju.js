/* saju.html: 이름/생년월일/태어난시각으로 물·땅·하늘 기운을 계산해 사주 캐릭터와
 * 연애운·금전운·건강운·가족운, 조심할 점/하면 좋은 점까지 보여주는 미니 사주 테스트 */
(function () {
  const formSection = document.getElementById("saju-form-section");
  const resultSection = document.getElementById("saju-result-section");
  const sharedSection = document.getElementById("saju-shared-section");

  const nameInput = document.getElementById("saju-name");
  const dateInput = document.getElementById("saju-date");
  const timeInput = document.getElementById("saju-time");
  const timeUnknown = document.getElementById("saju-time-unknown");
  const submitBtn = document.getElementById("saju-submit-btn");
  const formStatus = document.getElementById("saju-form-status");

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

  function computeSaju(name, dateStr, timeStr) {
    const seed = hashString(`${name.trim()}|${dateStr}|${timeStr || "unknown"}`);
    const rng = mulberry32(seed);
    const raw = [rng() + 0.15, rng() + 0.15, rng() + 0.15];
    const sum = raw[0] + raw[1] + raw[2];
    const water = Math.round((raw[0] / sum) * 100);
    const earth = Math.round((raw[1] / sum) * 100);
    const sky = 100 - water - earth;
    return { water, earth, sky };
  }

  const TYPES = {
    water: {
      key: "water",
      emoji: "🌊",
      character: "찰랑이",
      title: "물의 사주 – 유연한 흐름형",
      summary:
        "상황에 맞춰 자연스럽게 흘러가는 당신. 어떤 환경에서도 유연하게 적응하고, 낯선 사람이나 낯선 자리에서도 부드럽게 잘 어우러지는 재주가 있어요. 다만 흐르는 물처럼 자기 확신이 흐려질 때가 있어서, 가끔은 스스로 방향을 정하고 밀어붙이는 힘도 필요해요.",
      love: "연애할 때는 상대에게 맞춰주는 다정한 스타일이에요. 분위기를 잘 읽고 상대의 기분에 예민하게 반응해서 편안한 사람으로 기억되죠. 다만 너무 맞춰주다 보면 정작 자기 마음은 뒷전이 되기 쉬워요. 마음을 숨기지 않고 먼저 표현하는 연습을 하면 관계가 한층 깊어질 거예요. 짝사랑 중이라면 상대의 작은 반응에 일희일비하기보다 편안한 페이스로 다가가는 게 유리해요.",
      money: "돈이 들어오고 나가는 흐름이 자연스러운 편이라 큰 위기는 적지만, 그만큼 손에 쥔 돈이 스르륵 빠져나가기도 쉬워요. 충동구매보다는 '어쩌다 보니' 새는 소비가 많은 타입이라, 통장을 나누거나 자동이체로 저축 루틴을 만들어두면 도움이 돼요.",
      health: "스트레스를 잘 흘려보내는 편이라 마음의 병은 적지만, 몸은 정직해서 무리하면 바로 티가 나요. 특히 수분·순환계(부종, 소화, 수면)에 신호가 잘 오니 규칙적인 수면 시간과 따뜻한 물을 챙기는 게 좋아요.",
      family: "가족 사이에서는 갈등을 부드럽게 중재하는 역할을 자주 맡아요. 완충 역할을 하다 보니 정작 본인의 감정은 잘 못 챙길 때가 많으니, 가족에게도 가끔은 솔직한 요청을 해보는 연습이 필요해요.",
      cautions: [
        "남의 부탁을 거절 못 해 나를 잃어버리지 않기",
        "돈이 스르륵 새는 걸 막을 저축 루틴 만들기",
        "갈등 상황에서 무조건 참기보다 내 입장도 말하기",
      ],
      dos: [
        "하루 10분이라도 '내가 진짜 원하는 것' 적어보기",
        "믿을 수 있는 사람에게 속마음 먼저 꺼내보기",
        "물을 자주 마시고 스트레칭으로 몸 순환 챙기기",
      ],
      luckyColor: "하늘색 · 네이비",
      luckyItem: "물병 / 파란 액세서리",
      luckyKeyword: "유연함",
    },
    earth: {
      key: "earth",
      emoji: "🏔️",
      character: "든든이",
      title: "땅의 사주 – 든든한 뿌리형",
      summary:
        "흔들림 없이 자신의 자리를 지키는 당신. 신뢰감 있고 안정적이라 주변 사람들이 편하게 기대는 존재예요. 한번 정한 것은 꾸준히 밀고 나가는 뚝심이 있어서 오래 알수록 진가가 드러나는 타입이지만, 변화 앞에서는 유독 몸이 무거워지는 편이라 가끔은 새로운 시도에도 마음을 열어볼 필요가 있어요.",
      love: "한 사람에게 진득하게 마음을 쏟는 스타일이에요. 표현은 서툴러도 행동으로 꾸준히 보여주는 우직한 연애를 하죠. 다만 속도가 느려서 상대가 답답함을 느낄 수 있으니, 마음을 좀 더 자주 말로 표현해주는 게 좋아요. 짝사랑이라면 관계 진전이 느려도 조급해하지 말고 자신의 페이스를 유지하는 게 유리한 타입이에요.",
      money: "계획적으로 모으고 잘 안 쓰는 저축형이에요. 큰 손실 없이 착실하게 자산을 쌓는 편이지만, 너무 아끼기만 하다 좋은 투자·경험의 기회를 놓칠 수 있어요. 정해둔 예산 안에서는 과감하게 써보는 것도 필요해요.",
      health: "기초 체력이 튼튼한 편이지만 한번 무너지면 회복이 느려요. 특히 소화기·근골격계(허리, 어깨)에 무리가 오기 쉬우니 꾸준한 스트레칭과 정기 검진을 챙기세요.",
      family: "가족 안에서 기둥 같은 역할을 해요. 큰일이 생기면 가장 먼저 찾는 사람이 바로 당신이지만, 혼자 다 짊어지려는 습관 때문에 지칠 수 있으니 가족에게도 도움을 요청하는 연습이 필요해요.",
      cautions: [
        "변화가 두려워서 필요한 결정을 미루지 않기",
        "혼자 다 짊어지지 말고 가족·주변에 도움 요청하기",
        "몸이 보내는 작은 신호(피로, 뻐근함) 무시하지 않기",
      ],
      dos: [
        "한 달에 한 번은 새로운 것을 시도해보기 (작은 것도 OK)",
        "마음을 말로 표현하는 연습하기",
        "정기적으로 스트레칭·건강검진 챙기기",
      ],
      luckyColor: "카키 · 브라운",
      luckyItem: "화분 / 원목 소품",
      luckyKeyword: "꾸준함",
    },
    sky: {
      key: "sky",
      emoji: "🌌",
      character: "몽글이",
      title: "하늘의 사주 – 자유로운 이상가형",
      summary:
        "넓은 시야로 크게, 그리고 자유롭게 꿈꾸는 당신. 남다른 발상과 열린 마음으로 주변에 영감을 줘요. 틀에 갇히는 걸 싫어하고 새로운 자극과 사람, 장소에 늘 목말라 있죠. 다만 아이디어가 많은 만큼 마무리가 약해지거나 현실 감각이 흐려질 때가 있어서, 실행 계획을 함께 세워두는 게 좋아요.",
      love: "낭만적이고 자유로운 연애를 추구해요. 틀에 박힌 데이트보다 즉흥적이고 새로운 경험을 함께 나눌 때 매력을 느끼는 타입이죠. 다만 얽매이는 걸 싫어해서 상대가 답답함이나 서운함을 느낄 수 있어요. 연인에게는 '내가 자유로운 만큼 너의 마음도 소중하다'는 걸 자주 표현해주는 게 관계에 도움이 돼요.",
      money: "아이디어와 감으로 기회를 잘 캐치하는 타입이라 예상 밖의 수입이 생기기도 해요. 하지만 계획 없이 쓰는 습관 때문에 큰돈이 순식간에 사라지기도 하니, 큰 지출 전에는 하루 정도 생각할 시간을 갖는 것만으로도 충동을 크게 줄일 수 있어요.",
      health: "머릿속이 늘 바쁜 타입이라 정작 몸을 돌보는 데는 소홀해지기 쉬워요. 불규칙한 수면과 식사가 반복되면 컨디션 기복이 심해질 수 있으니, 최소한의 루틴(기상 시간, 식사 시간)만큼은 지켜주는 게 중요해요.",
      family: "가족들 사이에서는 종종 '자유로운 영혼' 취급을 받아요. 가족의 기대와 자신의 길이 다를 때 부딪히기 쉬운데, 다투기보다는 자신의 생각을 차분히 설명하는 대화가 오해를 줄여줘요.",
      cautions: [
        "벌여놓은 일을 끝까지 마무리하는 습관 들이기",
        "큰 지출 전엔 하루 정도 생각할 시간 갖기",
        "자유를 원하는 만큼 상대의 불안도 헤아려주기",
      ],
      dos: [
        "최소한의 수면·식사 루틴 정해두기",
        "아이디어를 적어두고 하나씩 실행 계획 세우기",
        "가끔은 계획 없이도, 가끔은 계획적으로 균형 잡기",
      ],
      luckyColor: "보라 · 라벤더",
      luckyItem: "다이어리 / 별 모양 소품",
      luckyKeyword: "영감",
    },
    balance: {
      key: "balance",
      emoji: "⚖️",
      character: "균형이",
      title: "삼재 균형형 – 물·땅·하늘의 조화",
      summary:
        "물, 땅, 하늘의 기운이 고르게 어우러진 당신. 때로는 유연하게, 때로는 든든하게, 때로는 자유롭게 상황에 맞춰 균형을 잡는 사람이에요. 한 가지 기운에 치우치지 않아 어떤 자리에서도 무난하게 어우러지는 게 가장 큰 강점이지만, 그만큼 '내 색깔이 뭔지 모르겠다'는 고민에 빠지기도 해요.",
      love: "상황과 상대에 맞춰 유연하게 스타일을 바꿀 줄 아는 밸런스형 연애를 해요. 다정할 때는 다정하게, 쿨할 때는 쿨하게 대처해서 누구와도 무난히 잘 맞는 편이죠. 다만 지나치게 상대에게 맞추다 보면 '진짜 나'를 잃어버릴 수 있으니, 관계 안에서도 스스로의 중심을 잊지 마세요.",
      money: "극단적으로 아끼거나 펑펑 쓰지 않는 안정적인 소비 패턴을 가졌어요. 큰 위기 없이 무난하게 자산을 관리하는 타입이지만, 뚜렷한 목표가 없으면 딱히 늘지도 줄지도 않는 정체 상태에 머물 수 있으니 구체적인 저축·투자 목표를 세워보세요.",
      health: "특별히 약한 부위 없이 전반적으로 무난한 편이지만, 오히려 그래서 몸 관리에 소홀해지기 쉬워요. 큰 이상이 없다고 방심하지 말고 기본적인 운동 루틴을 꾸준히 유지하는 게 장기적으로 가장 큰 도움이 돼요.",
      family: "가족 안에서 균형을 잡는 조율자 역할을 해요. 이 편도 저 편도 아니게 상황을 살피며 중심을 잡아주는 존재라 가족들이 은근히 많이 의지하니, 가끔은 조율자 역할을 내려놓고 자기 편을 확실히 들어도 괜찮아요.",
      cautions: [
        "모두에게 맞추다 '나'를 잃어버리지 않기",
        "뚜렷한 목표 없이 흘러가는 시간 그냥 두지 않기",
        "무난함에 안심해서 건강 관리를 미루지 않기",
      ],
      dos: [
        "나만의 색깔이 뭔지 한 번쯤 진지하게 고민해보기",
        "구체적인 목표(저축, 습관 등) 하나 정해서 실행하기",
        "기본적인 운동·건강 루틴 꾸준히 유지하기",
      ],
      luckyColor: "화이트 · 그레이",
      luckyItem: "손거울 / 다이어리",
      luckyKeyword: "조화",
    },
  };

  function resolveType(water, earth, sky) {
    const max = Math.max(water, earth, sky);
    const min = Math.min(water, earth, sky);
    if (max - min <= 8) return TYPES.balance;
    if (max === water) return TYPES.water;
    if (max === earth) return TYPES.earth;
    return TYPES.sky;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  function listHtml(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function buildResultHTML(name, water, earth, sky, mode) {
    const type = resolveType(water, earth, sky);
    const safeName = escapeHtml(name || "");
    const eyebrow = mode === "shared"
      ? (safeName ? `${safeName}님의 사주 결과` : "사주 결과")
      : (safeName ? `${safeName}님의 사주 캐릭터` : "나의 사주 캐릭터");

    const actionsHtml = mode === "shared"
      ? `
        <div class="result-actions">
          <button type="button" id="saju-try-own-btn" class="button primary block">나도 내 사주 캐릭터 확인하기</button>
        </div>
        <div class="result-actions">
          <button type="button" id="kakao-share-btn" class="button block" style="background:#fee500; color:#3c1e1e;">💬 카카오톡으로 공유하기</button>
        </div>
      `
      : `
        <div class="result-actions">
          <button type="button" id="saju-retry-btn" class="button ghost" style="flex:1;">다시 하기</button>
          <button type="button" id="saju-share-btn" class="button primary" style="flex:1;">🔗 결과 공유하고 친구도 확인해보기</button>
        </div>
        <div class="result-actions">
          <button type="button" id="kakao-share-btn" class="button block" style="background:#fee500; color:#3c1e1e;">💬 카카오톡으로 공유하기</button>
        </div>
      `;

    return `
      <div class="result-card">
        <div class="r-emoji">${type.emoji}</div>
        <div class="r-eyebrow">${eyebrow}</div>
        <span class="saju-badge">캐릭터 · ${type.character}</span>
        <h1>${type.title}</h1>
        <p>${escapeHtml(type.summary)}</p>
      </div>

      <div class="saju-gauges">
        <div class="saju-gauge-row">
          <div class="saju-gauge-label"><span>🌊 물</span><span class="saju-gauge-pct">${water}%</span></div>
          <div class="saju-gauge-track"><div class="saju-gauge-fill water" style="width:${water}%"></div></div>
        </div>
        <div class="saju-gauge-row">
          <div class="saju-gauge-label"><span>🏔️ 땅</span><span class="saju-gauge-pct">${earth}%</span></div>
          <div class="saju-gauge-track"><div class="saju-gauge-fill earth" style="width:${earth}%"></div></div>
        </div>
        <div class="saju-gauge-row">
          <div class="saju-gauge-label"><span>🌌 하늘</span><span class="saju-gauge-pct">${sky}%</span></div>
          <div class="saju-gauge-track"><div class="saju-gauge-fill sky" style="width:${sky}%"></div></div>
        </div>
      </div>

      <div class="saju-lucky">
        <span>🎨 행운의 색: ${type.luckyColor}</span>
        <span>🍀 행운의 아이템: ${type.luckyItem}</span>
        <span>✨ 키워드: ${type.luckyKeyword}</span>
      </div>

      <h2 class="saju-section-title">💫 세부 운세</h2>
      <div class="saju-detail-grid">
        <div class="saju-detail-card">
          <h3>💘 연애운</h3>
          <p>${escapeHtml(type.love)}</p>
        </div>
        <div class="saju-detail-card">
          <h3>💰 금전운</h3>
          <p>${escapeHtml(type.money)}</p>
        </div>
        <div class="saju-detail-card">
          <h3>🩺 건강운</h3>
          <p>${escapeHtml(type.health)}</p>
        </div>
        <div class="saju-detail-card">
          <h3>👨‍👩‍👧 가족운</h3>
          <p>${escapeHtml(type.family)}</p>
        </div>
      </div>

      <h2 class="saju-section-title">📌 조심할 점 &amp; 이렇게 해보세요</h2>
      <div class="saju-tip-grid">
        <div class="saju-tip-card caution">
          <h3>⚠️ 조심할 점</h3>
          <ul>${listHtml(type.cautions)}</ul>
        </div>
        <div class="saju-tip-card dos">
          <h3>✅ 이렇게 해보세요</h3>
          <ul>${listHtml(type.dos)}</ul>
        </div>
      </div>

      ${actionsHtml}
    `;
  }

  function buildShareUrl(name, water, earth, sky) {
    const params = new URLSearchParams();
    if (name) params.set("n", name);
    params.set("w", water);
    params.set("e", earth);
    params.set("s", sky);
    return `${location.origin}/saju.html?${params.toString()}`;
  }

  timeUnknown.addEventListener("change", () => {
    timeInput.disabled = timeUnknown.checked;
    if (timeUnknown.checked) timeInput.value = "";
  });

  submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const date = dateInput.value;
    const time = timeUnknown.checked ? "" : timeInput.value;

    if (!name) {
      formStatus.textContent = "이름을 입력해주세요.";
      formStatus.className = "status-msg err";
      return;
    }
    if (!date) {
      formStatus.textContent = "생년월일을 입력해주세요.";
      formStatus.className = "status-msg err";
      return;
    }
    formStatus.textContent = "";
    formStatus.className = "status-msg";

    const { water, earth, sky } = computeSaju(name, date, time);
    const type = resolveType(water, earth, sky);
    resultSection.innerHTML = buildResultHTML(name, water, earth, sky, "own");

    const titleText = `${name}님의 사주 - ${type.character}(${type.title}) | MindPick`;
    const descText = `${name}님의 사주 기운은 물 ${water}% · 땅 ${earth}% · 하늘 ${sky}% — ${type.title}. 연애운, 금전운, 건강운, 가족운까지 확인해보세요.`;
    if (window.mpSetMeta) mpSetMeta(titleText, descText);
    else document.title = titleText;

    formSection.style.display = "none";
    sharedSection.style.display = "none";
    resultSection.style.display = "block";

    document.getElementById("saju-retry-btn").addEventListener("click", () => {
      resultSection.style.display = "none";
      sharedSection.style.display = "none";
      formSection.style.display = "block";
    });

    document.getElementById("saju-share-btn").addEventListener("click", (e) => {
      const btn = e.currentTarget;
      const url = buildShareUrl(name, water, earth, sky);
      const shareText = `${name}님의 사주: 물 ${water}% · 땅 ${earth}% · 하늘 ${sky}% — ${type.character}(${type.title})\n너는 어떤 사주 캐릭터일까? 지금 확인해보기 👉`;
      mpShareLink(url, shareText, () => {
        btn.textContent = "링크가 복사되었어요!";
        setTimeout(() => (btn.textContent = "🔗 결과 공유하고 친구도 확인해보기"), 1800);
      });
    });

    mpSetupKakaoButton(document.getElementById("kakao-share-btn"), () => ({
      title: `${name}님의 사주 캐릭터: ${type.character}`,
      description: `${type.title} — 물 ${water}% · 땅 ${earth}% · 하늘 ${sky}%. 너는 어떤 사주 캐릭터일까?`,
      url: buildShareUrl(name, water, earth, sky),
      buttonTitle: "내 사주 캐릭터 확인하기",
    }));
  });

  // 공유 링크로 들어온 경우: 상대방 결과를 먼저 보여주고, 직접 해볼 수 있도록 유도한다
  const params = new URLSearchParams(location.search);
  const w = Number(params.get("w"));
  const e = Number(params.get("e"));
  const s = Number(params.get("s"));
  const sharedName = params.get("n") || "";
  const validShared =
    Number.isFinite(w) &&
    Number.isFinite(e) &&
    Number.isFinite(s) &&
    w >= 0 &&
    e >= 0 &&
    s >= 0 &&
    Math.abs(w + e + s - 100) <= 2;

  if (validShared) {
    const type = resolveType(w, e, s);
    sharedSection.innerHTML = buildResultHTML(sharedName, w, e, s, "shared");

    const titleText = `${sharedName ? sharedName + "님의 " : ""}사주 결과 - ${type.character}(${type.title}) | MindPick`;
    if (window.mpSetMeta) {
      mpSetMeta(titleText, `${type.title}. ${type.summary}`);
    } else {
      document.title = titleText;
    }

    formSection.style.display = "none";
    sharedSection.style.display = "block";

    mpSetupKakaoButton(document.getElementById("kakao-share-btn"), () => ({
      title: `${sharedName ? sharedName + "님의 " : ""}사주 캐릭터: ${type.character}`,
      description: `${type.title} — 물 ${w}% · 땅 ${e}% · 하늘 ${s}%. 너는 어떤 사주 캐릭터일까?`,
      url: buildShareUrl(sharedName, w, e, s),
      buttonTitle: "내 사주 캐릭터 확인하기",
    }));

    document.getElementById("saju-try-own-btn").addEventListener("click", () => {
      sharedSection.style.display = "none";
      formSection.style.display = "block";
      history.replaceState(null, "", "/saju.html");
    });
  }
})();
