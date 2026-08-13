/* MindPick 심리테스트 데이터
 * type: "category" (보기마다 유형이 쌓여 가장 많은 유형이 결과) | "score" (보기마다 점수 합산 후 구간 매칭)
 */

const TESTS = [
  {
    id: "color",
    tag: "성격",
    title: "나의 성격 컬러 테스트",
    emoji: "🎨",
    tagline: "당신의 마음을 물들이는 색깔은 무엇일까요?",
    type: "category",
    questions: [
      {
        text: "주말 아침, 눈을 뜨자마자 드는 생각은?",
        options: [
          { text: "오늘은 뭘 하고 놀지!", value: "red" },
          { text: "오늘 할 일부터 정리해야지", value: "blue" },
          { text: "일단 더 잘래...", value: "yellow" },
          { text: "다들 뭐 하고 있으려나?", value: "green" },
        ],
      },
      {
        text: "친구들과 여행 계획을 짤 때 나는?",
        options: [
          { text: "재밌는 액티비티부터 찾는다", value: "red" },
          { text: "일정과 예산을 꼼꼼히 짠다", value: "blue" },
          { text: "가서 정하지 뭐~", value: "yellow" },
          { text: "다들 좋다는 곳으로 맞춘다", value: "green" },
        ],
      },
      {
        text: "새로운 프로젝트를 맡았을 때",
        options: [
          { text: "일단 뛰어들어서 시작한다", value: "red" },
          { text: "계획부터 꼼꼼히 세운다", value: "blue" },
          { text: "분위기 봐가며 천천히", value: "yellow" },
          { text: "팀원들과 먼저 상의한다", value: "green" },
        ],
      },
      {
        text: "의견 충돌이 생기면 나는?",
        options: [
          { text: "하고 싶은 말은 바로 한다", value: "red" },
          { text: "논리적으로 정리해서 말한다", value: "blue" },
          { text: "웬만하면 그냥 넘어간다", value: "yellow" },
          { text: "상대 입장을 먼저 헤아린다", value: "green" },
        ],
      },
      {
        text: "옷장을 열어보면 대체로?",
        options: [
          { text: "눈에 띄는 색이 많다", value: "red" },
          { text: "깔끔한 무채색 위주다", value: "blue" },
          { text: "그냥 편한 옷들이다", value: "yellow" },
          { text: "따뜻한 파스텔톤이 많다", value: "green" },
        ],
      },
      {
        text: "스트레스가 쌓이면 나는?",
        options: [
          { text: "몸을 움직인다 (운동, 춤)", value: "red" },
          { text: "혼자 생각을 정리한다", value: "blue" },
          { text: "그냥 눕는다", value: "yellow" },
          { text: "사람 만나서 수다를 떤다", value: "green" },
        ],
      },
      {
        text: "회의 중 아이디어가 떠오르면?",
        options: [
          { text: "바로 손 들고 말한다", value: "red" },
          { text: "순서를 기다렸다 말한다", value: "blue" },
          { text: "굳이 말 안 해도 괜찮다", value: "yellow" },
          { text: "다른 사람 의견부터 듣는다", value: "green" },
        ],
      },
      {
        text: "내 방을 한마디로 표현한다면?",
        options: [
          { text: "활기찬 놀이터", value: "red" },
          { text: "정돈된 사무실", value: "blue" },
          { text: "포근한 이불 속", value: "yellow" },
          { text: "아늑한 카페", value: "green" },
        ],
      },
    ],
    categories: {
      red: {
        title: "레드 – 열정 폭발형",
        emoji: "🔴",
        desc: "에너지 넘치고 즉흥적인 당신은 어디서든 분위기 메이커! 하고 싶은 일은 일단 시작하고 보는 실행력이 최대 강점이에요. 가끔은 숨 고르는 여유도 챙겨보세요.",
      },
      blue: {
        title: "블루 – 신중한 전략가형",
        emoji: "🔵",
        desc: "계획적이고 분석적인 당신은 믿고 맡길 수 있는 사람이에요. 무슨 일이든 흔들림 없이 차근차근 해내죠. 가끔은 계획 없이 즉흥적으로 움직여보는 것도 좋아요.",
      },
      yellow: {
        title: "옐로우 – 자유로운 영혼형",
        emoji: "🟡",
        desc: "느긋하고 유연한 당신은 어떤 상황에서도 크게 흔들리지 않는 편안함을 지녔어요. 스트레스에 강하지만, 가끔은 조금 더 적극적으로 나서보는 것도 좋겠어요.",
      },
      green: {
        title: "그린 – 따뜻한 조율자형",
        emoji: "🟢",
        desc: "배려심 많고 평화를 사랑하는 당신은 주변 사람들을 편안하게 만드는 재주가 있어요. 다만 본인의 마음을 더 자주 표현하는 연습도 필요해요.",
      },
    },
  },

  {
    id: "animal",
    tag: "동물상",
    title: "나와 닮은 동물상 테스트",
    emoji: "🐾",
    tagline: "당신 안에 숨어있는 동물 캐릭터를 찾아보세요",
    type: "category",
    questions: [
      {
        text: "낯선 모임에 초대받았을 때 나는?",
        options: [
          { text: "먼저 다가가서 인사한다", value: "dog" },
          { text: "분위기를 살피며 거리를 둔다", value: "cat" },
          { text: "눈치껏 필요한 사람에게만 다가간다", value: "fox" },
          { text: "구석에서 편하게 관찰한다", value: "bear" },
        ],
      },
      {
        text: "친구가 힘들다고 연락이 왔을 때?",
        options: [
          { text: "바로 달려가서 옆에 있어준다", value: "dog" },
          { text: "필요할 때 조용히 도와준다", value: "cat" },
          { text: "현실적인 해결책을 제시한다", value: "fox" },
          { text: "묵묵히 이야기를 들어준다", value: "bear" },
        ],
      },
      {
        text: "칭찬을 받았을 때 반응은?",
        options: [
          { text: "표정에 바로 드러난다 (신남)", value: "dog" },
          { text: "속으로만 좋아하고 티 안 낸다", value: "cat" },
          { text: "겸손하게 받아치며 여유롭게 넘긴다", value: "fox" },
          { text: "쑥스러워서 어쩔 줄 모른다", value: "bear" },
        ],
      },
      {
        text: "일할 때 나의 스타일은?",
        options: [
          { text: "팀원들과 에너지 넘치게", value: "dog" },
          { text: "혼자 집중해서 처리", value: "cat" },
          { text: "효율적으로 요령있게", value: "fox" },
          { text: "묵묵하고 꾸준하게", value: "bear" },
        ],
      },
      {
        text: "연애할 때 나는?",
        options: [
          { text: "애정 표현을 아낌없이 한다", value: "dog" },
          { text: "은근하고 담백하게 표현한다", value: "cat" },
          { text: "밀당을 즐기는 편이다", value: "fox" },
          { text: "우직하게 한 사람만 바라본다", value: "bear" },
        ],
      },
      {
        text: "주말에 가장 하고 싶은 것은?",
        options: [
          { text: "사람들과 왁자지껄 모임", value: "dog" },
          { text: "혼자만의 조용한 시간", value: "cat" },
          { text: "새로운 곳으로 여행/탐험", value: "fox" },
          { text: "집에서 뒹굴며 휴식", value: "bear" },
        ],
      },
      {
        text: "화가 났을 때 나는?",
        options: [
          { text: "바로 표현하고 금방 푼다", value: "dog" },
          { text: "티 안 내고 조용히 삭힌다", value: "cat" },
          { text: "차분하게 논리로 짚는다", value: "fox" },
          { text: "속으로 오래 담아둔다", value: "bear" },
        ],
      },
      {
        text: "사람들이 나를 표현할 때 자주 쓰는 말은?",
        options: [
          { text: "붙임성 좋고 다정하다", value: "dog" },
          { text: "차분하고 신비롭다", value: "cat" },
          { text: "영리하고 눈치가 빠르다", value: "fox" },
          { text: "듬직하고 믿음직하다", value: "bear" },
        ],
      },
    ],
    categories: {
      dog: {
        title: "강아지상 – 사랑둥이",
        emoji: "🐶",
        desc: "표현이 솔직하고 다정한 당신 곁에는 늘 사람이 끊이지 않아요. 감정을 숨기지 않는 매력이 있지만, 가끔은 혼자만의 시간도 챙겨주세요.",
      },
      cat: {
        title: "고양이상 – 은은한 매력",
        emoji: "🐱",
        desc: "차분하고 신비로운 분위기의 당신은 알수록 매력적인 사람이에요. 곁을 잘 안 주는 편이지만 한 번 마음을 열면 누구보다 깊게 챙기죠.",
      },
      fox: {
        title: "여우상 – 영리한 전략가",
        emoji: "🦊",
        desc: "눈치가 빠르고 상황 판단이 뛰어난 당신! 어디서든 손해 보지 않는 영리함을 가졌어요. 그 재치로 주변 사람들을 즐겁게 만들죠.",
      },
      bear: {
        title: "곰상 – 듬직한 버팀목",
        emoji: "🐻",
        desc: "우직하고 믿음직한 당신은 주변 사람들의 든든한 버팀목이에요. 표현은 서툴러도 진심은 누구보다 깊은 사람이에요.",
      },
    },
  },

  {
    id: "love",
    tag: "연애",
    title: "나의 연애 스타일 테스트",
    emoji: "💘",
    tagline: "사랑할 때 진짜 나의 모습은 어떤 스타일일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "좋아하는 사람이 생기면 나는?",
        options: [
          { text: "적극적으로 마음을 표현한다", value: "allin" },
          { text: "티 나지 않게 신경 써준다", value: "tsun" },
          { text: "밀당하며 상대 반응을 살핀다", value: "pull" },
          { text: "감정을 차분히 정리하고 다가간다", value: "cool" },
        ],
      },
      {
        text: "연인에게 연락이 뜸하면?",
        options: [
          { text: "무슨 일 있는지 바로 물어본다", value: "allin" },
          { text: "서운하지만 티 안 낸다", value: "tsun" },
          { text: "나도 똑같이 연락을 줄인다", value: "pull" },
          { text: "각자 바쁠 수 있다고 이해한다", value: "cool" },
        ],
      },
      {
        text: "데이트 코스는 주로 누가 정하나요?",
        options: [
          { text: "내가 다 계획해서 준비한다", value: "allin" },
          { text: "물어보면 알려주는 편", value: "tsun" },
          { text: "은근슬쩍 원하는 쪽으로 유도한다", value: "pull" },
          { text: "같이 상의해서 정한다", value: "cool" },
        ],
      },
      {
        text: "다툰 후 화해하는 방식은?",
        options: [
          { text: "내가 먼저 연락해서 푼다", value: "allin" },
          { text: "괜찮은 척하다 결국 못 참고 연락한다", value: "tsun" },
          { text: "상대가 먼저 연락할 때까지 기다린다", value: "pull" },
          { text: "차분히 대화로 원인을 짚는다", value: "cool" },
        ],
      },
      {
        text: "연인이 이성 친구와 친하게 지내면?",
        options: [
          { text: "솔직하게 질투 난다고 말한다", value: "allin" },
          { text: "괜찮은 척하지만 신경 쓰인다", value: "tsun" },
          { text: "나도 다른 친구들과 더 어울린다", value: "pull" },
          { text: "믿음이 있으니 크게 신경 안 쓴다", value: "cool" },
        ],
      },
      {
        text: "커플 SNS, 애정표현에 대한 생각은?",
        options: [
          { text: "적극적으로 올리고 표현한다", value: "allin" },
          { text: "속으로만 애정이 크다", value: "tsun" },
          { text: "가끔 흘리듯 티를 낸다", value: "pull" },
          { text: "굳이 필요성을 못 느낀다", value: "cool" },
        ],
      },
      {
        text: "연인이 힘든 하루를 보냈다고 하면?",
        options: [
          { text: "바로 달려가서 위로해준다", value: "allin" },
          { text: "걱정되지만 무심한 척 챙긴다", value: "tsun" },
          { text: "상황을 지켜보다 필요할 때 나선다", value: "pull" },
          { text: "차분히 이야기를 들어주고 조언한다", value: "cool" },
        ],
      },
      {
        text: "이상형에게 가장 바라는 것은?",
        options: [
          { text: "나만큼 적극적인 애정 표현", value: "allin" },
          { text: "내 마음을 알아주는 눈치", value: "tsun" },
          { text: "밀당의 재미를 아는 사람", value: "pull" },
          { text: "안정적이고 신뢰가는 사람", value: "cool" },
        ],
      },
    ],
    categories: {
      allin: {
        title: "올인형 – 직진 순정파",
        emoji: "🚀",
        desc: "좋아하면 확실하게 표현하는 당신! 사랑 앞에서 누구보다 솔직하고 뜨거워요. 다만 상대의 속도에 맞춰주는 여유도 잊지 마세요.",
      },
      tsun: {
        title: "츤데레형 – 속은 완전 다정",
        emoji: "🌸",
        desc: "겉으로는 무심한 척해도 속으로는 누구보다 상대를 챙기는 당신. 가끔은 솔직한 마음을 표현해보는 것도 관계에 도움이 될 거예요.",
      },
      pull: {
        title: "밀당형 – 전략적 로맨티스트",
        emoji: "🎯",
        desc: "관계의 긴장감을 즐길 줄 아는 당신은 연애를 게임처럼 재밌게 이끌어가요. 다만 상대가 지치지 않도록 진심도 함께 보여주세요.",
      },
      cool: {
        title: "쿨型 – 안정적인 신뢰파",
        emoji: "🧊",
        desc: "감정에 휘둘리지 않고 안정적인 사랑을 하는 당신. 편안함을 주는 연애 스타일이지만, 가끔은 적극적인 표현도 상대에게 필요해요.",
      },
    },
  },

  {
    id: "mentalage",
    tag: "재미",
    title: "나의 정신연령 테스트",
    emoji: "🎂",
    tagline: "실제 나이 말고, 마음 나이는 몇 살일까요?",
    type: "score",
    questions: [
      {
        text: "친구와 약속을 잡을 때 나는?",
        options: [
          { text: "즉흥적으로 바로 나간다", value: 1 },
          { text: "당일에 계획을 짠다", value: 2 },
          { text: "며칠 전부터 준비한다", value: 3 },
          { text: "일정표에 미리 적어둔다", value: 4 },
        ],
      },
      {
        text: "새로운 유행이 생기면?",
        options: [
          { text: "제일 먼저 따라 해본다", value: 1 },
          { text: "재밌어 보이면 시도한다", value: 2 },
          { text: "굳이 따라갈 필요를 못 느낀다", value: 3 },
          { text: "이해가 잘 안 된다", value: 4 },
        ],
      },
      {
        text: "돈 관리 스타일은?",
        options: [
          { text: "있으면 있는 대로 쓴다", value: 1 },
          { text: "그때그때 상황 봐서", value: 2 },
          { text: "가계부를 쓰며 관리한다", value: 3 },
          { text: "저축과 투자 계획이 뚜렷하다", value: 4 },
        ],
      },
      {
        text: "주말에 더 끌리는 활동은?",
        options: [
          { text: "액티비티, 클럽, 축제", value: 1 },
          { text: "친구들과 카페, 맛집 탐방", value: 2 },
          { text: "전시, 산책, 독서", value: 3 },
          { text: "집 정리, 텃밭, 다도", value: 4 },
        ],
      },
      {
        text: "고민이 생겼을 때?",
        options: [
          { text: "일단 부딪혀 보며 해결한다", value: 1 },
          { text: "친구에게 털어놓는다", value: 2 },
          { text: "혼자 차분히 정리해본다", value: 3 },
          { text: "장단점을 표로 정리해 분석한다", value: 4 },
        ],
      },
      {
        text: "좋아하는 콘텐츠 취향은?",
        options: [
          { text: "최신 유행 챌린지/밈", value: 1 },
          { text: "예능, 드라마", value: 2 },
          { text: "다큐멘터리, 시사교양", value: 3 },
          { text: "뉴스, 경제 프로그램", value: 4 },
        ],
      },
      {
        text: "선물을 받고 싶다면?",
        options: [
          { text: "재밌는 굿즈나 소품", value: 1 },
          { text: "예쁜 옷이나 액세서리", value: 2 },
          { text: "실용적인 생활용품", value: 3 },
          { text: "건강식품이나 안마기", value: 4 },
        ],
      },
      {
        text: "요즘 가장 큰 관심사는?",
        options: [
          { text: "재밌는 거 찾아다니기", value: 1 },
          { text: "연애, 인간관계", value: 2 },
          { text: "자기계발, 커리어", value: 3 },
          { text: "건강, 노후 준비", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "10대 감성 만렙", emoji: "🍭", desc: "무엇이든 즉흥적이고 에너지 넘치는 당신! 세상 모든 게 재밌고 신나는 10대 감성을 가지고 있어요. 그 순수한 호기심을 오래오래 간직하세요." },
      { min: 15, max: 20, title: "20대 초반 감성", emoji: "🎧", desc: "유행에 민감하고 사람 만나는 걸 좋아하는 당신. 하고 싶은 게 많고 도전을 두려워하지 않는 청춘의 마음을 가지고 있어요." },
      { min: 21, max: 26, title: "30대 어른 감성", emoji: "☕", desc: "안정과 자기계발 사이에서 균형을 잘 잡는 당신. 차분하지만 여전히 새로운 것에 열려있는 성숙한 마음을 가지고 있어요." },
      { min: 27, max: 32, title: "인생 선배 감성", emoji: "🍵", desc: "여유롭고 신중한 당신은 이미 많은 걸 겪어본 듯한 통찰력을 지녔어요. 주변 사람들이 조언을 구하러 오는 든든한 존재죠." },
    ],
  },

  {
    id: "stress",
    tag: "힐링",
    title: "나의 스트레스 지수 테스트",
    emoji: "🌿",
    tagline: "요즘 내 마음, 얼마나 지쳐있을까요?",
    type: "score",
    questions: [
      {
        text: "요즘 잠은 잘 자나요?",
        options: [
          { text: "눕자마자 푹 잔다", value: 1 },
          { text: "가끔 뒤척인다", value: 2 },
          { text: "자주 뒤척이고 깬다", value: 3 },
          { text: "거의 매일 잠들기 힘들다", value: 4 },
        ],
      },
      {
        text: "작은 일에도 짜증이 나나요?",
        options: [
          { text: "거의 없다", value: 1 },
          { text: "가끔 그렇다", value: 2 },
          { text: "자주 그렇다", value: 3 },
          { text: "거의 매일 그렇다", value: 4 },
        ],
      },
      {
        text: "식욕은 평소와 비교해서?",
        options: [
          { text: "평소와 비슷하다", value: 1 },
          { text: "조금 줄거나 늘었다", value: 2 },
          { text: "꽤 많이 변했다", value: 3 },
          { text: "거의 없거나 폭식한다", value: 4 },
        ],
      },
      {
        text: "혼자만의 시간이 있나요?",
        options: [
          { text: "충분히 있다", value: 1 },
          { text: "가끔 있다", value: 2 },
          { text: "거의 없다", value: 3 },
          { text: "전혀 없다", value: 4 },
        ],
      },
      {
        text: "몸이 자주 피곤하거나 아픈가요?",
        options: [
          { text: "거의 없다", value: 1 },
          { text: "가끔 그렇다", value: 2 },
          { text: "자주 그렇다", value: 3 },
          { text: "매일 그렇다", value: 4 },
        ],
      },
      {
        text: "집중이 잘 안 될 때가 있나요?",
        options: [
          { text: "거의 없다", value: 1 },
          { text: "가끔 그렇다", value: 2 },
          { text: "자주 그렇다", value: 3 },
          { text: "일이 손에 안 잡힌다", value: 4 },
        ],
      },
      {
        text: "요즘 웃는 일이?",
        options: [
          { text: "많다", value: 1 },
          { text: "보통이다", value: 2 },
          { text: "적은 편이다", value: 3 },
          { text: "거의 없다", value: 4 },
        ],
      },
      {
        text: "할 일이 쌓여있다고 느끼나요?",
        options: [
          { text: "여유롭게 처리 중이다", value: 1 },
          { text: "조금 밀려있다", value: 2 },
          { text: "많이 밀려있다", value: 3 },
          { text: "감당이 안 될 정도다", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "여유만렙 – 평온 지수", emoji: "🌤️", desc: "마음이 꽤 편안한 상태예요. 지금의 좋은 루틴과 여유를 잘 유지해보세요. 가끔은 작은 변화를 주는 것도 활력이 될 수 있어요." },
      { min: 15, max: 20, title: "보통 – 관리가 필요해요", emoji: "🌥️", desc: "약간의 피로가 쌓여있는 상태예요. 짧은 산책이나 충분한 수면처럼 작은 휴식을 꾸준히 챙겨보세요." },
      { min: 21, max: 26, title: "주의 – 마음이 지쳐있어요", emoji: "🌧️", desc: "스트레스가 꽤 쌓여있는 상태예요. 하루 중 온전히 나만을 위한 시간을 꼭 마련하고, 주변에 마음을 나눠보세요." },
      { min: 27, max: 32, title: "경고 – 충분한 휴식이 필요해요", emoji: "⛈️", desc: "몸과 마음이 많이 지쳐있는 상태로 보여요. 혼자 견디기보다 가까운 사람과 이야기하거나, 필요하다면 전문가의 도움을 받는 것도 좋은 방법이에요." },
    ],
  },

  {
    id: "attachment",
    tag: "연애심리",
    title: "나의 애착유형 테스트",
    emoji: "🔗",
    tagline: "나는 관계에서 불안형·회피형·안정형 중 어떤 사람일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "연인에게 연락이 평소보다 늦어지면?",
        options: [
          { text: "무슨 일 생긴 건 아닌지 계속 신경 쓰인다", value: "anxious" },
          { text: "오히려 신경 안 쓰이고 내 할 일을 한다", value: "avoidant" },
          { text: "조금 궁금하지만 곧 연락 오겠지 하고 넘긴다", value: "secure" },
        ],
      },
      {
        text: "연인과 사이가 가까워질수록 드는 느낌은?",
        options: [
          { text: "더 가까워지고 싶은데 상대는 아닌 것 같아 불안하다", value: "anxious" },
          { text: "숨이 막히는 느낌이 들어 거리를 두고 싶어진다", value: "avoidant" },
          { text: "편안하고 자연스럽게 느껴진다", value: "secure" },
        ],
      },
      {
        text: "다툰 후 연인이 혼자 생각할 시간을 달라고 하면?",
        options: [
          { text: "관계가 끝나는 건 아닐까 불안해서 계속 연락하고 싶다", value: "anxious" },
          { text: "차라리 잘됐다 싶고 혼자 있는 게 편하다", value: "avoidant" },
          { text: "서운하지만 필요한 시간이라 생각하고 기다린다", value: "secure" },
        ],
      },
      {
        text: "연인에게 서운한 일이 생기면 나는?",
        options: [
          { text: "티가 나거나, 상대 마음을 계속 확인하고 싶어진다", value: "anxious" },
          { text: "굳이 말하지 않고 혼자 삭이거나 거리를 둔다", value: "avoidant" },
          { text: "차분히 마음을 이야기하고 대화로 풀려고 한다", value: "secure" },
        ],
      },
      {
        text: "새로운 사람과 급격히 친해질 때 드는 생각은?",
        options: [
          { text: "이 사람도 날 진심으로 좋아하는 걸까 계속 확인하고 싶다", value: "anxious" },
          { text: "너무 빨리 가까워지는 게 부담스럽다", value: "avoidant" },
          { text: "자연스럽게 마음이 가는 만큼 편하게 받아들인다", value: "secure" },
        ],
      },
      {
        text: "혼자만의 시간과 연인과의 시간, 나에게 더 편한 쪽은?",
        options: [
          { text: "혼자 있으면 연인 생각이 나서 오히려 불안하다", value: "anxious" },
          { text: "혼자만의 시간이 훨씬 편하고 필요하다", value: "avoidant" },
          { text: "둘 다 적당히 균형 있게 좋아한다", value: "secure" },
        ],
      },
      {
        text: "연인이 나에게 실망했다고 말하면?",
        options: [
          { text: "밤새 곱씹으며 관계가 잘못될까 봐 걱정한다", value: "anxious" },
          { text: "굳이 깊게 생각하지 않고 넘기려 한다", value: "avoidant" },
          { text: "이유를 물어보고 개선할 부분을 함께 찾는다", value: "secure" },
        ],
      },
      {
        text: "연애할 때 나를 가장 힘들게 하는 감정은?",
        options: [
          { text: "버림받거나 사랑받지 못할까 봐 느끼는 불안", value: "anxious" },
          { text: "누군가에게 의지해야 한다는 부담감", value: "avoidant" },
          { text: "특별히 힘든 감정은 없는 편이다", value: "secure" },
        ],
      },
      {
        text: "연인과의 미래를 상상하면?",
        options: [
          { text: "설레면서도 혹시 헤어지면 어쩌지 하는 불안이 함께 든다", value: "anxious" },
          { text: "구체적으로 상상하는 게 왠지 부담스럽다", value: "avoidant" },
          { text: "자연스럽고 기대되는 일이라 느낀다", value: "secure" },
        ],
      },
    ],
    categories: {
      anxious: {
        title: "불안형 – 사랑을 확인받고 싶은 마음",
        emoji: "🌊",
        desc: "관계에 진심이라 애정이 넘치지만, 그만큼 사랑받지 못할까 봐 불안한 마음도 커요. 상대의 작은 반응 하나에도 마음이 크게 흔들릴 수 있어요. 스스로 안정감을 채우는 연습과, 불안할 때 바로 확인받기보다 잠시 감정을 가라앉히는 여유가 도움이 될 거예요.",
      },
      avoidant: {
        title: "회피형 – 거리가 있어야 편안한 마음",
        emoji: "🏝️",
        desc: "독립적이고 스스로를 잘 돌보는 당신은 너무 가까워지면 오히려 부담을 느껴요. 감정을 드러내기보다 혼자 정리하는 게 익숙하죠. 가끔은 불편해도 솔직한 감정을 조금씩 표현해보는 것이 관계를 더 깊게 만들어줄 거예요.",
      },
      secure: {
        title: "안정형 – 균형 잡힌 신뢰의 마음",
        emoji: "🌳",
        desc: "나 자신도, 관계도 편안하게 신뢰하는 당신. 갈등이 생겨도 피하지 않고 대화로 풀어가는 힘이 있어요. 상대에게도 안정감을 주는 사람이라, 주변 사람들이 편하게 마음을 여는 경우가 많아요.",
      },
    },
  },

  {
    id: "food",
    tag: "음식",
    title: "나의 음식 취향 테스트",
    emoji: "🍽️",
    tagline: "당신의 진짜 입맛은 어떤 스타일일까요?",
    type: "category",
    questions: [
      {
        text: "회식 메뉴를 내가 고를 수 있다면?",
        options: [
          { text: "마라탕이나 불닭처럼 매콤한 메뉴", value: "spicy" },
          { text: "고기 무제한 메뉴", value: "meat" },
          { text: "샐러드바나 건강식당", value: "light" },
          { text: "디저트 뷔페", value: "dessert" },
        ],
      },
      {
        text: "배달앱을 켰을 때 가장 먼저 검색하는 건?",
        options: [
          { text: "'매운맛' 필터부터 켠다", value: "spicy" },
          { text: "고기, 치킨류", value: "meat" },
          { text: "샐러드, 포케", value: "light" },
          { text: "케이크, 빙수", value: "dessert" },
        ],
      },
      {
        text: "스트레스 받을 때 당기는 음식은?",
        options: [
          { text: "불닭볶음면", value: "spicy" },
          { text: "삼겹살, 스테이크", value: "meat" },
          { text: "과일, 요거트", value: "light" },
          { text: "초콜릿, 아이스크림", value: "dessert" },
        ],
      },
      {
        text: "여행지에서 꼭 먹어봐야 하는 음식은?",
        options: [
          { text: "현지의 매운 향신료 요리", value: "spicy" },
          { text: "그 지역 명물 고기 요리", value: "meat" },
          { text: "신선한 채소·해산물 요리", value: "light" },
          { text: "유명한 디저트나 빵집", value: "dessert" },
        ],
      },
      {
        text: "매운맛 단계를 고를 수 있다면 나는?",
        options: [
          { text: "가장 매운 단계에 도전한다", value: "spicy" },
          { text: "매운 건 별로, 고기나 더 먹는다", value: "meat" },
          { text: "순한 맛으로 무난하게", value: "light" },
          { text: "애초에 매운 것보다 단 게 좋다", value: "dessert" },
        ],
      },
      {
        text: "카페에 가면 주로 주문하는 건?",
        options: [
          { text: "매콤한 스낵류", value: "spicy" },
          { text: "든든한 샌드위치·브런치", value: "meat" },
          { text: "그린 스무디나 샐러드", value: "light" },
          { text: "조각 케이크와 달달한 음료", value: "dessert" },
        ],
      },
      {
        text: "냉장고를 열었을 때 항상 있는 재료는?",
        options: [
          { text: "청양고추, 핫소스", value: "spicy" },
          { text: "고기, 계란", value: "meat" },
          { text: "채소, 두부", value: "light" },
          { text: "초콜릿, 아이스크림", value: "dessert" },
        ],
      },
      {
        text: "나에게 완벽한 한 끼란?",
        options: [
          { text: "땀 나게 매운 한 그릇", value: "spicy" },
          { text: "고기가 듬뿍 든 든든한 한 상", value: "meat" },
          { text: "가볍고 신선한 건강식", value: "light" },
          { text: "메인보다 디저트가 진짜 주인공", value: "dessert" },
        ],
      },
    ],
    categories: {
      spicy: {
        title: "화끈 매운맛파 – 자극적인 짜릿함",
        emoji: "🌶️",
        desc: "화끈하고 짜릿한 매운맛이 있어야 스트레스가 풀리는 당신! 자극적인 걸 즐기는 만큼 도전정신도 강해요. 가끔은 위장을 위해 순한 음식도 챙겨주세요.",
      },
      meat: {
        title: "든든 고기파 – 포만감이 최고",
        emoji: "🍖",
        desc: "배부르고 든든해야 진짜 잘 먹었다고 느끼는 당신. 확실한 포만감을 주는 메뉴를 좋아해요. 야채도 곁들여 먹으면 더 좋겠죠?",
      },
      light: {
        title: "건강 담백파 – 가볍고 신선하게",
        emoji: "🥗",
        desc: "몸이 가벼워야 마음도 편한 당신은 신선하고 담백한 음식을 선호해요. 자기관리에 신경 쓰는 편이지만, 가끔은 맛있는 것도 마음껏 즐겨보세요.",
      },
      dessert: {
        title: "달콤 디저트파 – 인생은 단짠단짠",
        emoji: "🍰",
        desc: "메인 메뉴보다 디저트가 더 중요한 당신에게 하루의 행복은 달콤함에서 와요. 단 걸 먹을 때 스트레스가 풀리는 타입이지만 당 섭취는 적당히!",
      },
    },
  },

  {
    id: "travel",
    tag: "여행",
    title: "나의 여행 스타일 테스트",
    emoji: "✈️",
    tagline: "떠나는 방식만 봐도 알 수 있는 진짜 나의 모습",
    type: "category",
    questions: [
      {
        text: "여행 계획을 짤 때 나는?",
        options: [
          { text: "시간표까지 짜서 완벽하게 준비한다", value: "plan" },
          { text: "비행기표만 끊고 나머진 가서 정한다", value: "spontaneous" },
          { text: "숙소 위주로 느긋하게 정한다", value: "relax" },
          { text: "액티비티 예약부터 알아본다", value: "active" },
        ],
      },
      {
        text: "여행지에 도착하면 제일 먼저 하는 건?",
        options: [
          { text: "미리 짜둔 코스대로 출발", value: "plan" },
          { text: "발길 닿는 대로 걷는다", value: "spontaneous" },
          { text: "숙소에서 여유롭게 쉰다", value: "relax" },
          { text: "액티비티 센터부터 찾는다", value: "active" },
        ],
      },
      {
        text: "여행 중 예상치 못한 일이 생기면?",
        options: [
          { text: "당황스럽지만 바로 대안을 짠다", value: "plan" },
          { text: "오히려 재밌는 이벤트라고 생각한다", value: "spontaneous" },
          { text: "그냥 흘러가는 대로 받아들인다", value: "relax" },
          { text: "몸으로 부딪히며 해결한다", value: "active" },
        ],
      },
      {
        text: "여행 사진첩을 보면 대체로?",
        options: [
          { text: "명소별로 각 잡고 찍은 사진들", value: "plan" },
          { text: "즉흥적으로 찍은 웃긴 사진들", value: "spontaneous" },
          { text: "노을, 풍경 위주의 힐링샷", value: "relax" },
          { text: "액티비티하며 찍은 역동적인 사진", value: "active" },
        ],
      },
      {
        text: "이상적인 여행 동반자는?",
        options: [
          { text: "계획을 함께 짜줄 사람", value: "plan" },
          { text: "어디로 튈지 모르는 자유로운 사람", value: "spontaneous" },
          { text: "말 없이도 편안한 사람", value: "relax" },
          { text: "체력 좋고 뭐든 같이 도전할 사람", value: "active" },
        ],
      },
      {
        text: "여행 예산을 짤 때는?",
        options: [
          { text: "항목별로 세세하게 계산한다", value: "plan" },
          { text: "일단 쓰고 본다", value: "spontaneous" },
          { text: "숙소에 가장 많이 투자한다", value: "relax" },
          { text: "액티비티·체험에 아낌없이 쓴다", value: "active" },
        ],
      },
      {
        text: "낯선 도시에서 길을 잃으면?",
        options: [
          { text: "미리 저장해둔 지도로 바로 해결한다", value: "plan" },
          { text: "그냥 헤매는 것도 여행이라 생각한다", value: "spontaneous" },
          { text: "근처 카페에서 쉬며 생각한다", value: "relax" },
          { text: "지나가는 사람에게 물어보며 모험처럼 즐긴다", value: "active" },
        ],
      },
      {
        text: "나에게 완벽한 여행이란?",
        options: [
          { text: "계획한 대로 완벽하게 끝난 여행", value: "plan" },
          { text: "예상 밖의 순간들로 가득한 여행", value: "spontaneous" },
          { text: "아무것도 안 하고 푹 쉰 여행", value: "relax" },
          { text: "몸이 부서져라 놀았던 여행", value: "active" },
        ],
      },
    ],
    categories: {
      plan: {
        title: "완벽 계획형 – 여행은 준비부터 즐거움",
        emoji: "🗺️",
        desc: "꼼꼼하게 세운 계획 덕분에 여행 중 시행착오가 적은 당신. 알찬 일정을 소화하는 능력이 뛰어나요. 가끔은 계획을 내려놓고 즉흥적인 순간도 즐겨보세요.",
      },
      spontaneous: {
        title: "즉흥 방랑형 – 발길 닿는 대로",
        emoji: "🎒",
        desc: "정해진 것 없이 흘러가는 여행에서 진짜 매력을 느끼는 당신. 예상치 못한 순간들이 최고의 추억이 되곤 해요. 최소한의 안전장치는 챙겨두는 게 좋아요.",
      },
      relax: {
        title: "힐링 여유형 – 쉼이 곧 여행",
        emoji: "🌅",
        desc: "빡빡한 일정보다 여유로운 휴식이 진짜 여행이라고 생각하는 당신. 몸과 마음을 충전하는 시간을 소중히 여겨요. 가끔은 새로운 도전도 재충전이 될 수 있어요.",
      },
      active: {
        title: "액티비티 탐험형 – 몸으로 즐기는 여행",
        emoji: "🏄",
        desc: "가만히 있기보다 직접 부딪히며 체험해야 여행이 실감 나는 당신. 에너지 넘치는 모험을 즐길 줄 알아요. 체력 관리도 여행 준비물 중 하나라는 걸 잊지 마세요.",
      },
    },
  },

  {
    id: "pastlife",
    tag: "판타지",
    title: "나의 전생 테스트",
    emoji: "🔮",
    tagline: "재미로 알아보는 나의 전생은 어떤 모습이었을까요?",
    type: "category",
    questions: [
      {
        text: "어릴 때부터 유독 끌렸던 것은?",
        options: [
          { text: "화려한 궁전, 왕관 같은 것들", value: "royal" },
          { text: "그림, 음악, 시 같은 예술", value: "artist" },
          { text: "검, 갑옷, 전쟁 이야기", value: "warrior" },
          { text: "지도, 낯선 나라 이야기", value: "wanderer" },
        ],
      },
      {
        text: "꿈에서 자주 나타나는 배경은?",
        options: [
          { text: "웅장한 성이나 궁궐", value: "royal" },
          { text: "조용한 작업실이나 무대", value: "artist" },
          { text: "전쟁터나 훈련장", value: "warrior" },
          { text: "바다, 사막 같은 낯선 풍경", value: "wanderer" },
        ],
      },
      {
        text: "사람들과 있을 때 나의 역할은?",
        options: [
          { text: "자연스럽게 중심에 서서 이끈다", value: "royal" },
          { text: "분위기를 감성적으로 채운다", value: "artist" },
          { text: "위기 상황에서 앞장선다", value: "warrior" },
          { text: "새로운 이야기와 정보를 물어다 준다", value: "wanderer" },
        ],
      },
      {
        text: "갑자기 큰돈이 생긴다면?",
        options: [
          { text: "품격 있는 물건에 투자한다", value: "royal" },
          { text: "작품 활동, 예술에 쓴다", value: "artist" },
          { text: "몸을 단련하는 데 쓴다", value: "warrior" },
          { text: "바로 여행 티켓을 끊는다", value: "wanderer" },
        ],
      },
      {
        text: "스트레스를 풀 때 나는?",
        options: [
          { text: "품위 있게 혼자만의 시간을 갖는다", value: "royal" },
          { text: "글을 쓰거나 그림을 그린다", value: "artist" },
          { text: "몸을 움직이며 땀을 뺀다", value: "warrior" },
          { text: "훌쩍 어디론가 떠난다", value: "wanderer" },
        ],
      },
      {
        text: "골동품 시장에서 눈길이 가는 물건은?",
        options: [
          { text: "화려한 장신구나 왕관 모양 소품", value: "royal" },
          { text: "오래된 악기나 그림", value: "artist" },
          { text: "낡은 칼이나 갑옷", value: "warrior" },
          { text: "이국적인 지도나 나침반", value: "wanderer" },
        ],
      },
      {
        text: "사람들이 나를 표현한다면?",
        options: [
          { text: "품격 있고 카리스마 있는 사람", value: "royal" },
          { text: "감성적이고 독특한 사람", value: "artist" },
          { text: "용감하고 의리 있는 사람", value: "warrior" },
          { text: "자유롭고 호기심 많은 사람", value: "wanderer" },
        ],
      },
      {
        text: "만약 과거로 돌아간다면 살고 싶은 삶은?",
        options: [
          { text: "궁전에서 나라를 다스리는 삶", value: "royal" },
          { text: "예술로 이름을 남기는 삶", value: "artist" },
          { text: "명예를 지키며 싸우는 삶", value: "warrior" },
          { text: "세계 곳곳을 누비는 상인의 삶", value: "wanderer" },
        ],
      },
    ],
    categories: {
      royal: {
        title: "왕족 – 우아한 통치자의 전생",
        emoji: "👑",
        desc: "타고난 카리스마와 품격을 지닌 당신. 전생에 사람들을 이끄는 자리에 있었을지도 몰라요. 지금도 무리 속에서 자연스럽게 중심이 되는 편이죠.",
      },
      artist: {
        title: "예술가 – 시대를 앞서간 창작자의 전생",
        emoji: "🎨",
        desc: "감성이 풍부하고 표현력이 남다른 당신. 전생에 그림이나 음악으로 사람들의 마음을 움직였을지도 몰라요. 지금도 독특한 시선으로 세상을 바라봐요.",
      },
      warrior: {
        title: "무사 – 명예를 지킨 전사의 전생",
        emoji: "⚔️",
        desc: "의리 있고 용감한 당신. 전생에 소중한 것을 지키기 위해 앞장섰을지도 몰라요. 지금도 위기 상황에서 믿음직한 사람으로 통해요.",
      },
      wanderer: {
        title: "방랑 상인 – 세상을 누빈 자유인의 전생",
        emoji: "🧭",
        desc: "호기심 많고 자유로운 영혼을 가진 당신. 전생에 세계 곳곳을 누비며 새로운 것들을 발견했을지도 몰라요. 지금도 낯선 곳에 대한 설렘이 남다르죠.",
      },
    },
  },

  {
    id: "meme",
    tag: "밈",
    title: "나의 인터넷 밈 캐릭터 테스트",
    emoji: "📱",
    tagline: "단톡방·SNS 속 나는 어떤 캐릭터일까요?",
    type: "category",
    questions: [
      {
        text: "단톡방에 웃긴 짤이 올라오면 나는?",
        options: [
          { text: "ㅋㅋㅋㅋㅋ 바로 폭풍 리액션", value: "hype" },
          { text: "속으로 웃지만 그냥 읽는다", value: "lurker" },
          { text: "더 웃긴 짤로 바로 받아친다", value: "trendsetter" },
          { text: "짧고 임팩트 있는 한마디만 던진다", value: "deadpan" },
        ],
      },
      {
        text: "새로운 유행어가 생기면?",
        options: [
          { text: "바로 써먹으면서 신나한다", value: "hype" },
          { text: "남들 쓰는 거 보고 나서야 안다", value: "lurker" },
          { text: "내가 먼저 퍼뜨리는 편이다", value: "trendsetter" },
          { text: "알아도 굳이 잘 안 쓴다", value: "deadpan" },
        ],
      },
      {
        text: "단체 사진을 찍을 때 나는?",
        options: [
          { text: "제일 과한 포즈를 잡는다", value: "hype" },
          { text: "뒤쪽에서 조용히 서 있는다", value: "lurker" },
          { text: "컨셉을 제안하고 이끈다", value: "trendsetter" },
          { text: "무표정으로 그냥 서 있는다", value: "deadpan" },
        ],
      },
      {
        text: "SNS 스토리를 올릴 때는?",
        options: [
          { text: "하루에도 여러 번 올린다", value: "hype" },
          { text: "거의 안 올리고 남의 것만 본다", value: "lurker" },
          { text: "트렌디한 포맷을 제일 먼저 시도한다", value: "trendsetter" },
          { text: "어쩌다 한 번, 짧고 심플하게", value: "deadpan" },
        ],
      },
      {
        text: "친구가 실수로 웃긴 짓을 하면?",
        options: [
          { text: "크게 웃으며 바로 놀린다", value: "hype" },
          { text: "속으로만 빵 터진다", value: "lurker" },
          { text: "그 순간을 바로 밈으로 만든다", value: "trendsetter" },
          { text: "'그럴 줄 알았다'는 표정만 짓는다", value: "deadpan" },
        ],
      },
      {
        text: "모임에서 침묵이 흐르면?",
        options: [
          { text: "먼저 나서서 분위기를 띄운다", value: "hype" },
          { text: "그냥 가만히 있는다", value: "lurker" },
          { text: "재밌는 이야깃거리를 꺼낸다", value: "trendsetter" },
          { text: "짧은 드립 하나 던지고 다시 조용해진다", value: "deadpan" },
        ],
      },
      {
        text: "이모티콘을 고를 때 나는?",
        options: [
          { text: "감정 과장된 이모티콘 총출동", value: "hype" },
          { text: "기본 이모티콘 하나로 끝", value: "lurker" },
          { text: "최신 유행 이모티콘부터 산다", value: "trendsetter" },
          { text: "뼈 있는 드립 이모티콘 선호", value: "deadpan" },
        ],
      },
      {
        text: "친구들이 생각하는 나는?",
        options: [
          { text: "있으면 시끌벅적, 에너자이저", value: "hype" },
          { text: "조용하지만 다 지켜보고 있는 사람", value: "lurker" },
          { text: "늘 새로운 걸 제일 먼저 아는 사람", value: "trendsetter" },
          { text: "말은 없지만 할 말은 다 하는 사람", value: "deadpan" },
        ],
      },
    ],
    categories: {
      hype: {
        title: "리액션 대장형 – 텐션이 국룰",
        emoji: "🎉",
        desc: "언제나 에너지 넘치는 리액션으로 분위기를 살리는 당신. 있는 것만으로도 모임이 즐거워져요. 가끔은 리액션 없이 조용히 듣는 것도 매력이에요.",
      },
      lurker: {
        title: "눈팅 관찰형 – 조용히 다 보고 있다",
        emoji: "👀",
        desc: "말은 적어도 대화의 흐름을 놓치지 않는 당신. 조용하지만 은근히 존재감 있는 타입이에요. 가끔은 먼저 말을 걸어보는 것도 좋아요.",
      },
      trendsetter: {
        title: "밈 제조기형 – 유행은 내가 만든다",
        emoji: "🔥",
        desc: "누구보다 빠르게 유행을 캐치하고 만들어내는 당신. 센스 있는 드립으로 대화방의 분위기 메이커예요. 가끔은 트렌드 없이도 편하게 쉬어가세요.",
      },
      deadpan: {
        title: "무심 드립형 – 말은 없어도 임팩트는 확실히",
        emoji: "😏",
        desc: "말수는 적지만 한마디가 늘 웃긴 당신. 무심한 듯 던지는 드립이 진짜 매력이에요. 가끔은 리액션을 조금 더 크게 해줘도 상대가 좋아할 거예요.",
      },
    },
  },

  {
    id: "worktype",
    tag: "직장생활",
    title: "나의 업무 스타일 테스트",
    emoji: "💼",
    tagline: "회사에서, 학교에서 진짜 내 모습은 어떤 스타일일까요?",
    type: "category",
    questions: [
      {
        text: "새 프로젝트가 주어지면?",
        options: [
          { text: "계획부터 세운다", value: "plan" },
          { text: "일단 시작하고 본다", value: "speed" },
          { text: "팀원들과 역할부터 나눈다", value: "team" },
          { text: "세부사항부터 꼼꼼히 파악한다", value: "detail" },
        ],
      },
      {
        text: "마감이 촉박할 때 나는?",
        options: [
          { text: "일정을 재조정한다", value: "plan" },
          { text: "속도를 끌어올려 몰아친다", value: "speed" },
          { text: "도움을 요청해 나눈다", value: "team" },
          { text: "그래도 퀄리티를 지키려 애쓴다", value: "detail" },
        ],
      },
      {
        text: "회의에서 나의 역할은?",
        options: [
          { text: "안건과 순서를 정리한다", value: "plan" },
          { text: "빠르게 결론을 낸다", value: "speed" },
          { text: "의견을 모으고 조율한다", value: "team" },
          { text: "놓친 부분을 짚어준다", value: "detail" },
        ],
      },
      {
        text: "실수를 발견하면?",
        options: [
          { text: "재발 방지 계획을 세운다", value: "plan" },
          { text: "바로 수정하고 넘어간다", value: "speed" },
          { text: "팀에 공유하고 함께 해결한다", value: "team" },
          { text: "원인을 끝까지 파고든다", value: "detail" },
        ],
      },
      {
        text: "이상적인 업무 환경은?",
        options: [
          { text: "체계적인 프로세스가 있는 곳", value: "plan" },
          { text: "빠르게 실행할 수 있는 곳", value: "speed" },
          { text: "소통이 활발한 곳", value: "team" },
          { text: "꼼꼼함을 인정해주는 곳", value: "detail" },
        ],
      },
      {
        text: "업무 툴을 고를 때 중요한 건?",
        options: [
          { text: "일정 관리 기능", value: "plan" },
          { text: "빠른 실행 속도", value: "speed" },
          { text: "협업 기능", value: "team" },
          { text: "정확한 기록 기능", value: "detail" },
        ],
      },
      {
        text: "번아웃이 올 것 같을 때 나는?",
        options: [
          { text: "계획을 다시 세워 정리한다", value: "plan" },
          { text: "더 몰아붙여서 끝낸다", value: "speed" },
          { text: "동료에게 털어놓는다", value: "team" },
          { text: "원인을 분석한다", value: "detail" },
        ],
      },
      {
        text: "동료가 나를 평가한다면?",
        options: [
          { text: "\"체계적인 사람\"", value: "plan" },
          { text: "\"일 처리가 빠른 사람\"", value: "speed" },
          { text: "\"함께 일하기 좋은 사람\"", value: "team" },
          { text: "\"꼼꼼하고 믿음직한 사람\"", value: "detail" },
        ],
      },
    ],
    categories: {
      plan: {
        title: "계획형 – 체계적인 전략가",
        emoji: "📋",
        desc: "무엇이든 계획을 세워야 마음이 놓이는 당신. 예측 가능한 프로세스 안에서 최고의 효율을 만들어내요. 가끔은 계획 밖의 변수도 유연하게 받아들여보세요.",
      },
      speed: {
        title: "속도형 – 일단 해내는 실행러",
        emoji: "⚡",
        desc: "고민보다 실행이 빠른 당신은 어디서든 추진력 있는 사람으로 통해요. 속도만큼 중요한 디테일도 놓치지 않도록 한 번씩 점검해보세요.",
      },
      team: {
        title: "협업형 – 함께라서 빛나는 사람",
        emoji: "🤝",
        desc: "혼자보다 함께할 때 더 큰 힘을 발휘하는 당신. 사람들과의 소통 속에서 최선의 결과를 만들어내요. 가끔은 혼자만의 판단도 믿어보세요.",
      },
      detail: {
        title: "디테일형 – 완벽을 추구하는 장인",
        emoji: "🔍",
        desc: "작은 것 하나도 허투루 넘기지 않는 당신 덕분에 결과물의 완성도가 높아져요. 가끔은 완벽보다 속도가 필요한 순간도 있다는 걸 기억하세요.",
      },
    },
  },

  {
    id: "money",
    tag: "재테크",
    title: "나의 소비 습관 테스트",
    emoji: "💰",
    tagline: "월급이 통장을 스칠 때, 진짜 내 소비 스타일은?",
    type: "category",
    questions: [
      {
        text: "월급(용돈)이 들어오면 가장 먼저 하는 일은?",
        options: [
          { text: "저축부터 이체한다", value: "save" },
          { text: "갖고 싶었던 걸 지른다", value: "flex" },
          { text: "예산을 짜서 분배한다", value: "plan" },
          { text: "딱히 계획 없이 쓴다", value: "impulse" },
        ],
      },
      {
        text: "친구가 좋은 물건을 추천하면?",
        options: [
          { text: "필요한지 한참 고민한다", value: "save" },
          { text: "바로 산다", value: "flex" },
          { text: "예산에 맞는지 확인한다", value: "plan" },
          { text: "일단 장바구니에 담아둔다", value: "impulse" },
        ],
      },
      {
        text: "세일 기간이 되면?",
        options: [
          { text: "꼭 필요한 것만 산다", value: "save" },
          { text: "이 기회에 왕창 산다", value: "flex" },
          { text: "미리 리스트를 짜서 산다", value: "plan" },
          { text: "눈에 띄는 대로 담는다", value: "impulse" },
        ],
      },
      {
        text: "소비 기록(가계부)은?",
        options: [
          { text: "안 쓰는 게 목표라 딱히 안 챙긴다", value: "save" },
          { text: "딱히 신경 안 쓴다", value: "flex" },
          { text: "매달 정리하며 관리한다", value: "plan" },
          { text: "쓰다가 흐지부지된다", value: "impulse" },
        ],
      },
      {
        text: "여행을 갈 때 예산은?",
        options: [
          { text: "최대한 아껴서 다녀온다", value: "save" },
          { text: "이번엔 제대로 즐긴다", value: "flex" },
          { text: "항목별로 세세하게 계획한다", value: "plan" },
          { text: "가서 상황 보고 쓴다", value: "impulse" },
        ],
      },
      {
        text: "갖고 싶은 게 생기면?",
        options: [
          { text: "정말 필요한지 며칠 고민한다", value: "save" },
          { text: "나에게 주는 선물이라 생각하고 산다", value: "flex" },
          { text: "예산에 여유가 있는지 확인한다", value: "plan" },
          { text: "그 순간 못 참고 산다", value: "impulse" },
        ],
      },
      {
        text: "주변 사람들이 보는 나의 소비 스타일은?",
        options: [
          { text: "\"절약왕\"", value: "save" },
          { text: "\"플렉스 부자\"", value: "flex" },
          { text: "\"계획적인 사람\"", value: "plan" },
          { text: "\"지르고 보는 사람\"", value: "impulse" },
        ],
      },
      {
        text: "돈에 대한 나의 철학은?",
        options: [
          { text: "안 쓰는 게 버는 것", value: "save" },
          { text: "있을 때 즐기자", value: "flex" },
          { text: "계획적으로 모으고 쓰자", value: "plan" },
          { text: "하고 싶은 건 일단 하고 본다", value: "impulse" },
        ],
      },
    ],
    categories: {
      save: {
        title: "알뜰형 – 티끌 모아 태산",
        emoji: "🐿️",
        desc: "필요한 것과 원하는 것을 구분할 줄 아는 당신. 꾸준한 절약 습관이 미래의 큰 자산이 될 거예요. 가끔은 스스로에게 작은 보상도 허락해주세요.",
      },
      flex: {
        title: "플렉스형 – 인생은 한 번뿐",
        emoji: "💸",
        desc: "지금 이 순간의 행복을 중요하게 여기는 당신. 아낌없이 쓰는 만큼 만족감도 크죠. 미래를 위한 최소한의 저축도 함께 챙겨보세요.",
      },
      plan: {
        title: "계획형 – 가계부의 정석",
        emoji: "📊",
        desc: "예산과 목표가 뚜렷한 당신은 돈 관리에서도 믿음직한 사람이에요. 계획적인 소비 덕분에 흔들림이 적죠. 가끔은 계획 없는 즉흥적 소비도 즐거움이 될 수 있어요.",
      },
      impulse: {
        title: "충동형 – 지르고 후회, 그래도 또 지른다",
        emoji: "🛍️",
        desc: "마음이 끌리면 바로 행동에 옮기는 당신. 순간의 만족은 크지만 통장은 늘 아쉬울 수 있어요. 큰 지출 전엔 하루만 참아보는 습관을 들여보세요.",
      },
    },
  },

  {
    id: "friendship",
    tag: "관계",
    title: "우정 속 나의 역할 테스트",
    emoji: "👯",
    tagline: "친구들 사이에서 나는 어떤 존재일까요?",
    type: "category",
    questions: [
      {
        text: "모임 약속을 잡을 때 나는?",
        options: [
          { text: "날짜와 장소를 먼저 제안한다", value: "leader" },
          { text: "다른 사람 의견에 맞춘다", value: "supporter" },
          { text: "다들 편한 시간을 조율한다", value: "peacemaker" },
          { text: "편한 친구랑 먼저 정한다", value: "bestie" },
        ],
      },
      {
        text: "친구가 고민을 털어놓으면?",
        options: [
          { text: "해결책을 적극적으로 제시한다", value: "leader" },
          { text: "옆에서 묵묵히 들어준다", value: "supporter" },
          { text: "감정을 다독이며 중재한다", value: "peacemaker" },
          { text: "같이 맞장구치며 공감한다", value: "bestie" },
        ],
      },
      {
        text: "친구들 사이 다툼이 생기면?",
        options: [
          { text: "상황을 정리하고 나선다", value: "leader" },
          { text: "힘든 쪽을 먼저 챙긴다", value: "supporter" },
          { text: "중간에서 화해를 시킨다", value: "peacemaker" },
          { text: "그냥 눈치껏 지켜본다", value: "bestie" },
        ],
      },
      {
        text: "여행 계획을 짤 때 나는?",
        options: [
          { text: "코스와 일정을 주도한다", value: "leader" },
          { text: "필요한 걸 챙기고 서포트한다", value: "supporter" },
          { text: "다들 만족하는 방향으로 조율한다", value: "peacemaker" },
          { text: "재밌으면 다 좋다", value: "bestie" },
        ],
      },
      {
        text: "친구가 새로운 도전을 한다면?",
        options: [
          { text: "방향을 제시해준다", value: "leader" },
          { text: "필요한 걸 옆에서 도와준다", value: "supporter" },
          { text: "응원하며 균형을 잡아준다", value: "peacemaker" },
          { text: "누구보다 먼저 응원한다", value: "bestie" },
        ],
      },
      {
        text: "단톡방에서 나의 포지션은?",
        options: [
          { text: "대화를 이끈다", value: "leader" },
          { text: "필요할 때 도움을 준다", value: "supporter" },
          { text: "분위기를 부드럽게 만든다", value: "peacemaker" },
          { text: "편하게 아무 말이나 한다", value: "bestie" },
        ],
      },
      {
        text: "친구들이 나를 찾는 이유는?",
        options: [
          { text: "결정을 잘 내려서", value: "leader" },
          { text: "늘 챙겨줘서", value: "supporter" },
          { text: "이야기를 잘 들어줘서", value: "peacemaker" },
          { text: "편하고 재밌어서", value: "bestie" },
        ],
      },
      {
        text: "나에게 우정이란?",
        options: [
          { text: "함께 성장하는 것", value: "leader" },
          { text: "서로 힘이 되어주는 것", value: "supporter" },
          { text: "서로를 이해하는 것", value: "peacemaker" },
          { text: "편안하게 있는 그대로인 것", value: "bestie" },
        ],
      },
    ],
    categories: {
      leader: {
        title: "리더형 – 모임의 중심",
        emoji: "🎤",
        desc: "자연스럽게 모임을 이끄는 당신. 결단력 있는 모습 덕분에 친구들이 믿고 따라와요. 가끔은 다른 사람에게 주도권을 넘겨보는 것도 좋아요.",
      },
      supporter: {
        title: "서포터형 – 든든한 조력자",
        emoji: "🛟",
        desc: "필요한 순간 옆에서 힘이 되어주는 당신. 친구들에게 없어서는 안 될 존재예요. 가끔은 스스로를 위한 도움도 받아보세요.",
      },
      peacemaker: {
        title: "조율자형 – 갈등을 푸는 평화주의자",
        emoji: "🕊️",
        desc: "모두가 편안하도록 균형을 맞추는 당신. 관계 속 갈등을 지혜롭게 풀어내는 능력이 있어요. 본인의 감정도 잊지 말고 챙겨주세요.",
      },
      bestie: {
        title: "절친형 – 편안함 그 자체",
        emoji: "🍯",
        desc: "함께 있으면 편하고 즐거운 당신. 꾸밈없는 모습 그대로가 친구들에게 큰 위로가 돼요. 가끔은 조금 더 적극적으로 나서보는 것도 좋아요.",
      },
    },
  },

  {
    id: "talent",
    tag: "자기계발",
    title: "나의 숨은 재능 테스트",
    emoji: "✨",
    tagline: "아직 발견하지 못한 나만의 재능은 무엇일까요?",
    type: "category",
    questions: [
      {
        text: "새로운 문제를 마주하면?",
        options: [
          { text: "기발한 아이디어부터 떠올린다", value: "creative" },
          { text: "데이터와 근거를 먼저 찾는다", value: "analytic" },
          { text: "팀을 모아 방향을 정한다", value: "leadership" },
          { text: "관련된 사람들 입장을 먼저 헤아린다", value: "empathy" },
        ],
      },
      {
        text: "어릴 때 유독 잘했던 것은?",
        options: [
          { text: "그림, 글쓰기, 만들기", value: "creative" },
          { text: "퍼즐, 수학, 논리 게임", value: "analytic" },
          { text: "반장, 조장 같은 역할", value: "leadership" },
          { text: "친구 고민 들어주기", value: "empathy" },
        ],
      },
      {
        text: "칭찬을 자주 듣는 부분은?",
        options: [
          { text: "\"아이디어가 참신하다\"", value: "creative" },
          { text: "\"설명을 논리적으로 잘한다\"", value: "analytic" },
          { text: "\"믿고 따라가게 된다\"", value: "leadership" },
          { text: "\"이야기가 잘 통한다\"", value: "empathy" },
        ],
      },
      {
        text: "여가 시간에 끌리는 활동은?",
        options: [
          { text: "그림 그리기, 글쓰기, 만들기", value: "creative" },
          { text: "퍼즐, 전략 게임, 독서", value: "analytic" },
          { text: "사람들과 모임 주최하기", value: "leadership" },
          { text: "친구와 깊은 대화 나누기", value: "empathy" },
        ],
      },
      {
        text: "문제가 안 풀릴 때 나는?",
        options: [
          { text: "완전히 새로운 방식으로 접근한다", value: "creative" },
          { text: "원인을 하나씩 분석한다", value: "analytic" },
          { text: "다른 사람의 힘을 모은다", value: "leadership" },
          { text: "잠시 감정을 정리하고 다시 본다", value: "empathy" },
        ],
      },
      {
        text: "그룹 과제에서 자연스럽게 맡는 역할은?",
        options: [
          { text: "아이디어 담당", value: "creative" },
          { text: "자료 조사·분석 담당", value: "analytic" },
          { text: "총괄·발표 담당", value: "leadership" },
          { text: "조율·분위기 담당", value: "empathy" },
        ],
      },
      {
        text: "사람들이 나에게 조언을 구할 때는?",
        options: [
          { text: "색다른 시각이 필요할 때", value: "creative" },
          { text: "객관적인 판단이 필요할 때", value: "analytic" },
          { text: "결정을 내려야 할 때", value: "leadership" },
          { text: "마음의 위로가 필요할 때", value: "empathy" },
        ],
      },
      {
        text: "나의 강점을 한 단어로 표현하면?",
        options: [
          { text: "상상력", value: "creative" },
          { text: "통찰력", value: "analytic" },
          { text: "추진력", value: "leadership" },
          { text: "공감력", value: "empathy" },
        ],
      },
    ],
    categories: {
      creative: {
        title: "창의형 – 무에서 유를 만드는 사람",
        emoji: "🎨",
        desc: "남들이 생각 못 한 아이디어를 떠올리는 당신. 상상력이 재능의 핵심이에요. 그 아이디어를 실현시키는 꾸준함을 더하면 완벽해질 거예요.",
      },
      analytic: {
        title: "분석형 – 논리로 답을 찾는 사람",
        emoji: "🧠",
        desc: "복잡한 문제도 차분히 분석해 답을 찾아내는 당신. 통찰력이 뛰어난 재능을 가졌어요. 가끔은 논리를 넘어선 직관도 믿어보세요.",
      },
      leadership: {
        title: "리더십형 – 사람을 이끄는 사람",
        emoji: "🚩",
        desc: "사람들을 모으고 방향을 제시하는 힘을 가진 당신. 자연스러운 리더십이 재능이에요. 팀원들의 목소리에 귀 기울이는 것도 잊지 마세요.",
      },
      empathy: {
        title: "공감형 – 마음을 읽는 사람",
        emoji: "💗",
        desc: "타인의 마음을 잘 헤아리는 당신. 사람을 이해하는 재능이 관계 속에서 빛을 발해요. 본인의 마음도 잘 챙기는 연습을 해보세요.",
      },
    },
  },

  {
    id: "burnout",
    tag: "힐링",
    title: "나의 번아웃 지수 테스트",
    emoji: "🔥",
    tagline: "일과 일상 속에서 지금 나의 에너지는 얼마나 남아있을까요?",
    type: "score",
    questions: [
      {
        text: "요즘 업무(학업) 시작 전 드는 생각은?",
        options: [
          { text: "오늘도 힘내보자", value: 1 },
          { text: "그냥 하는 거지 뭐", value: 2 },
          { text: "하기 싫은 마음이 크다", value: 3 },
          { text: "아무 의욕이 없다", value: 4 },
        ],
      },
      {
        text: "성과에 대한 만족감은?",
        options: [
          { text: "뿌듯하다", value: 1 },
          { text: "그저 그렇다", value: 2 },
          { text: "예전만 못하다", value: 3 },
          { text: "전혀 못 느낀다", value: 4 },
        ],
      },
      {
        text: "동료·친구를 만나는 게?",
        options: [
          { text: "즐겁다", value: 1 },
          { text: "보통이다", value: 2 },
          { text: "부담스러울 때가 많다", value: 3 },
          { text: "만나기 싫다", value: 4 },
        ],
      },
      {
        text: "퇴근(하교) 후 남은 에너지는?",
        options: [
          { text: "여전히 넘친다", value: 1 },
          { text: "적당히 남아있다", value: 2 },
          { text: "거의 없다", value: 3 },
          { text: "방전 상태다", value: 4 },
        ],
      },
      {
        text: "최근 집중력은?",
        options: [
          { text: "평소와 같다", value: 1 },
          { text: "가끔 흐트러진다", value: 2 },
          { text: "자주 흐트러진다", value: 3 },
          { text: "거의 집중이 안 된다", value: 4 },
        ],
      },
      {
        text: "일(공부)에 대한 의미는?",
        options: [
          { text: "여전히 크게 느껴진다", value: 1 },
          { text: "그냥 해야 하니까 한다", value: 2 },
          { text: "예전보다 흐릿해졌다", value: 3 },
          { text: "전혀 느껴지지 않는다", value: 4 },
        ],
      },
      {
        text: "몸 상태는?",
        options: [
          { text: "컨디션이 좋다", value: 1 },
          { text: "가끔 피곤하다", value: 2 },
          { text: "늘 피곤하다", value: 3 },
          { text: "몸이 자주 아프다", value: 4 },
        ],
      },
      {
        text: "쉬는 날엔?",
        options: [
          { text: "하고 싶은 걸 하며 충전한다", value: 1 },
          { text: "대충 쉬긴 한다", value: 2 },
          { text: "쉬어도 회복이 안 된다", value: 3 },
          { text: "쉬는 것조차 버겁다", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "에너지 충만 – 아직 괜찮아요", emoji: "🔋", desc: "지금은 무리 없이 잘 지내고 있는 상태예요. 지금의 페이스와 루틴을 잘 유지해보세요." },
      { min: 15, max: 20, title: "주의 신호 – 슬슬 피로가 쌓여요", emoji: "🪫", desc: "조금씩 지치는 신호가 보여요. 짧은 휴식을 자주 챙기며 페이스를 조절해보세요." },
      { min: 21, max: 26, title: "경고 – 번아웃이 가까워졌어요", emoji: "⚠️", desc: "에너지가 많이 소진된 상태예요. 우선순위를 정리하고 나만의 회복 시간을 꼭 확보하세요." },
      { min: 27, max: 32, title: "위험 – 완전한 휴식이 필요해요", emoji: "🆘", desc: "몸과 마음이 많이 지친 상태로 보여요. 혼자 버티기보다 주변에 도움을 요청하고 충분히 쉬어가세요." },
    ],
  },

  {
    id: "season",
    tag: "감성",
    title: "나와 어울리는 계절 테스트",
    emoji: "🍃",
    tagline: "당신의 분위기를 닮은 계절은 무엇일까요?",
    type: "category",
    questions: [
      {
        text: "나를 표현하는 색깔은?",
        options: [
          { text: "연한 파스텔톤", value: "spring" },
          { text: "쨍한 원색", value: "summer" },
          { text: "따뜻한 갈색·주황", value: "autumn" },
          { text: "차분한 흰색·회색", value: "winter" },
        ],
      },
      {
        text: "좋아하는 날씨는?",
        options: [
          { text: "따뜻하고 화창한 날", value: "spring" },
          { text: "뜨겁고 활기찬 날", value: "summer" },
          { text: "선선하고 차분한 날", value: "autumn" },
          { text: "춥고 고요한 날", value: "winter" },
        ],
      },
      {
        text: "선호하는 분위기의 카페는?",
        options: [
          { text: "꽃과 파스텔 소품이 있는 곳", value: "spring" },
          { text: "시원하고 트렌디한 곳", value: "summer" },
          { text: "감성적인 조명의 빈티지 카페", value: "autumn" },
          { text: "미니멀하고 조용한 곳", value: "winter" },
        ],
      },
      {
        text: "친구들이 나에게 느끼는 첫인상은?",
        options: [
          { text: "밝고 상큼하다", value: "spring" },
          { text: "에너지 넘치고 화끈하다", value: "summer" },
          { text: "차분하고 감성적이다", value: "autumn" },
          { text: "신비롭고 차갑게 느껴진다", value: "winter" },
        ],
      },
      {
        text: "스트레스 해소법은?",
        options: [
          { text: "산책하며 꽃 구경", value: "spring" },
          { text: "신나게 놀거나 운동", value: "summer" },
          { text: "음악 들으며 혼자 사색", value: "autumn" },
          { text: "조용히 방에서 휴식", value: "winter" },
        ],
      },
      {
        text: "좋아하는 음악 분위기는?",
        options: [
          { text: "밝고 경쾌한 팝", value: "spring" },
          { text: "신나는 댄스, 여름 노래", value: "summer" },
          { text: "잔잔한 발라드, 재즈", value: "autumn" },
          { text: "차분한 피아노, 클래식", value: "winter" },
        ],
      },
      {
        text: "옷을 고를 때 선호하는 스타일은?",
        options: [
          { text: "화사하고 사랑스러운 스타일", value: "spring" },
          { text: "시원하고 대담한 스타일", value: "summer" },
          { text: "따뜻하고 클래식한 스타일", value: "autumn" },
          { text: "심플하고 시크한 스타일", value: "winter" },
        ],
      },
      {
        text: "나에게 어울리는 감성 한마디는?",
        options: [
          { text: "설렘 가득한 시작", value: "spring" },
          { text: "뜨거운 열정", value: "summer" },
          { text: "깊어지는 사색", value: "autumn" },
          { text: "고요한 여백", value: "winter" },
        ],
      },
    ],
    categories: {
      spring: {
        title: "봄 – 설렘 가득한 새싹",
        emoji: "🌸",
        desc: "밝고 사랑스러운 에너지를 가진 당신. 함께 있으면 마음이 몽글몽글해지는 봄 같은 사람이에요. 새로운 시작을 두려워하지 않는 점이 매력이죠.",
      },
      summer: {
        title: "여름 – 뜨거운 에너지",
        emoji: "☀️",
        desc: "누구보다 열정적이고 화끈한 당신. 함께 있으면 에너지가 전염되는 여름 같은 사람이에요. 가끔은 그 열정을 식히는 휴식도 필요해요.",
      },
      autumn: {
        title: "가을 – 깊어지는 감성",
        emoji: "🍁",
        desc: "생각이 깊고 감성이 풍부한 당신. 잔잔하지만 여운이 오래 남는 가을 같은 사람이에요. 그 감성을 표현하는 데 조금 더 용기를 내보세요.",
      },
      winter: {
        title: "겨울 – 고요한 신비로움",
        emoji: "❄️",
        desc: "차분하고 신비로운 분위기를 가진 당신. 알아갈수록 매력적인 겨울 같은 사람이에요. 마음을 조금 더 자주 열어 보이는 것도 좋아요.",
      },
    },
  },
];
