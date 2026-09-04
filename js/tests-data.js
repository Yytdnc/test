/* MindPick 심리테스트 데이터
 * type: "category" (보기마다 유형이 쌓여 가장 많은 유형이 결과) | "score" (보기마다 점수 합산 후 구간 매칭)
 *     | "mbti" (문항마다 axis: [찬성쪽, 반대쪽] 축을 가지며, 5점 리커트 응답 가중치를 축별로 합산)
 */

// MBTI 문항에서 공통으로 쓰는 5점 리커트 척도 (매우 그렇다 ~ 매우 그렇지 않다)
const LIKERT_OPTIONS = [
  { text: "매우 그렇다", value: 2 },
  { text: "그렇다", value: 1 },
  { text: "보통이다", value: 0 },
  { text: "그렇지 않다", value: -1 },
  { text: "매우 그렇지 않다", value: -2 },
];

const TESTS = [
  {
    id: "color",
    tag: "성격",
    title: "나의 성격 컬러 테스트",
    emoji: "🎨",
    tagline: "당신의 마음을 물들이는 색깔은 무엇일까요?",
    type: "category",
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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
    compare: true,
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

  {
    id: "mbti",
    tag: "성격유형",
    title: "나의 MBTI 성격유형 테스트",
    emoji: "🧩",
    tagline: "32개 질문으로 자세히 알아보는 나의 진짜 성격유형",
    type: "mbti",
    compare: true,
    questions: [
      { text: "나는 낯선 사람과도 스스럼없이 대화를 시작하는 편이다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "새로운 모임에 가면 자연스럽게 여러 사람에게 말을 건다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "생각이 많을 때는 다른 사람에게 이야기하면서 정리하는 편이다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "긴 하루를 보내고 나면 사람을 만나야 오히려 에너지가 채워진다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "혼자 있는 시간보다 사람들과 함께 있는 시간이 더 편하다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "모임에서는 여러 사람과 두루두루 이야기하는 편이다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "아이디어가 떠오르면 일단 말하면서 생각을 정리하는 편이다", axis: ["E", "I"], options: LIKERT_OPTIONS },
      { text: "낯선 장소에 가면 사람들에게 먼저 말을 걸며 적응하는 편이다", axis: ["E", "I"], options: LIKERT_OPTIONS },

      { text: "나는 설명을 들을 때 구체적인 예시와 사실을 중요하게 여긴다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 이야기할 때 실제 있었던 일 위주로 말하는 편이다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 새로운 아이디어를 들으면 먼저 현실성부터 따져본다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 여행 계획을 짤 때 실용적인 정보 위주로 준비한다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 검증된 방법을 따르는 것이 더 편하다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 현실적인 이야기에 더 끌리는 편이다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 문제를 해결할 때 과거 경험에서 답을 찾는 편이다", axis: ["S", "N"], options: LIKERT_OPTIONS },
      { text: "나는 '정확히 무슨 일이 있었는지'를 중요하게 여기는 편이다", axis: ["S", "N"], options: LIKERT_OPTIONS },

      { text: "나는 친구가 고민을 말하면 원인과 해결책을 먼저 짚어주는 편이다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 결정을 내릴 때 논리와 효율을 가장 중요하게 여긴다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 비판을 받아도 근거가 맞으면 쉽게 받아들이는 편이다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 갈등 상황에서 옳고 그름을 명확히 하려는 편이다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 원칙과 기준을 지키는 것을 중요하게 여긴다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 친구의 잘못을 보면 솔직하게 지적해주는 편이다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 칭찬을 들으면 그게 사실인지 객관적으로 생각해보는 편이다", axis: ["T", "F"], options: LIKERT_OPTIONS },
      { text: "나는 배려보다 공정함이 더 중요하다고 생각한다", axis: ["T", "F"], options: LIKERT_OPTIONS },

      { text: "나는 여행 갈 때 일정을 미리 다 짜두는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 할 일이 생기면 바로 계획을 세워 처리하는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 책상이나 방을 정리정돈하는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 약속을 잡을 때 날짜와 시간을 명확히 정하는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 새로운 정보가 생겨도 원래 계획을 밀고 나가는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 일을 확실하게 끝맺어야 마음이 편하다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 할 일 목록대로 하루를 움직이는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
      { text: "나는 결정을 빨리 내리고 마음을 놓는 편이다", axis: ["J", "P"], options: LIKERT_OPTIONS },
    ],
    categories: {
      ISTJ: {
        title: "ISTJ – 청렴한 관리자형",
        emoji: "📐",
        desc: "원칙과 신뢰를 최우선으로 여기는 당신. 맡은 일은 끝까지 책임지고 해내는 믿음직한 사람이에요. 가끔은 정해진 방식을 벗어나는 새로운 시도도 즐겨보세요.",
      },
      ISFJ: {
        title: "ISFJ – 헌신적인 수호자형",
        emoji: "🛡️",
        desc: "주변 사람을 조용히 챙기는 다정한 당신. 묵묵한 배려로 곁에 있는 사람들을 편안하게 만들어줘요. 가끔은 본인의 마음도 먼저 챙겨주세요.",
      },
      INFJ: {
        title: "INFJ – 통찰력 있는 옹호자형",
        emoji: "🌙",
        desc: "깊은 생각과 따뜻한 마음을 함께 가진 당신. 사람과 세상을 이해하려는 통찰력이 남달라요. 이상만큼 현실적인 한 걸음도 함께 내디뎌보세요.",
      },
      INTJ: {
        title: "INTJ – 전략적인 설계자형",
        emoji: "♟️",
        desc: "장기적인 그림을 그리고 차근차근 실행하는 당신. 스스로 세운 기준이 뚜렷해 흔들림이 적어요. 가끔은 계획 밖의 우연도 즐겨보세요.",
      },
      ISTP: {
        title: "ISTP – 논리적인 장인형",
        emoji: "🔧",
        desc: "손으로 직접 부딪히며 답을 찾는 실용적인 당신. 위기 상황에서 침착하게 문제를 해결하는 능력이 있어요. 감정을 표현하는 연습도 조금씩 해보세요.",
      },
      ISFP: {
        title: "ISFP – 자유로운 예술가형",
        emoji: "🎨",
        desc: "자신만의 감성으로 세상을 조용히 즐기는 당신. 부드럽지만 확고한 가치관을 가지고 있어요. 그 감성을 더 자주 표현해봐도 좋아요.",
      },
      INFP: {
        title: "INFP – 이상을 좇는 몽상가형",
        emoji: "🌱",
        desc: "깊은 내면 세계와 따뜻한 가치관을 가진 당신. 진심이 통하는 사람과 깊은 관계를 맺는 걸 좋아해요. 생각을 행동으로 옮기는 작은 용기를 더해보세요.",
      },
      INTP: {
        title: "INTP – 호기심 많은 사색가형",
        emoji: "🔭",
        desc: "궁금한 건 끝까지 파고드는 당신. 논리적이고 독창적인 아이디어로 새로운 시각을 제시해요. 가끔은 완벽한 답보다 지금의 결론으로 충분하다는 것도 기억하세요.",
      },
      ESTP: {
        title: "ESTP – 모험을 즐기는 행동가형",
        emoji: "🏍️",
        desc: "지금 이 순간을 온몸으로 즐기는 당신. 빠른 판단력과 실행력으로 어떤 상황에서도 능숙하게 대처해요. 가끔은 멈춰서 다음을 계획하는 시간도 가져보세요.",
      },
      ESFP: {
        title: "ESFP – 자유로운 분위기 메이커형",
        emoji: "🎉",
        desc: "함께 있으면 즐거운 에너지가 넘치는 당신. 순간을 즐길 줄 아는 매력으로 어디서든 인기가 많아요. 가끔은 진지한 계획도 세워보는 게 도움이 될 거예요.",
      },
      ENFP: {
        title: "ENFP – 열정적인 활동가형",
        emoji: "🌟",
        desc: "호기심과 열정이 가득한 당신. 사람과 아이디어에 대한 애정으로 주변에 늘 활력을 불어넣어요. 시작한 일을 끝까지 마무리하는 힘도 길러보세요.",
      },
      ENTP: {
        title: "ENTP – 뜨거운 논쟁을 즐기는 변론가형",
        emoji: "💡",
        desc: "새로운 아이디어와 토론을 즐기는 당신. 기발한 발상으로 늘 신선한 자극을 줘요. 가끔은 상대의 입장에서 한 번 더 생각해보세요.",
      },
      ESTJ: {
        title: "ESTJ – 엄격한 관리자형",
        emoji: "📋",
        desc: "체계적으로 목표를 이끄는 당신. 명확한 기준과 추진력으로 조직을 안정적으로 이끌어가요. 가끔은 정해진 방식 밖의 의견에도 귀 기울여보세요.",
      },
      ESFJ: {
        title: "ESFJ – 사교적인 외교관형",
        emoji: "🤝",
        desc: "주변 사람들을 세심하게 챙기는 당신. 따뜻한 배려로 모두가 편안한 분위기를 만들어줘요. 본인의 욕구도 잊지 말고 표현해보세요.",
      },
      ENFJ: {
        title: "ENFJ – 정의로운 사회운동가형",
        emoji: "🕊️",
        desc: "사람들의 성장을 돕는 데서 보람을 느끼는 당신. 타고난 리더십과 공감 능력으로 주변에 좋은 영향을 줘요. 가끔은 스스로를 위한 시간도 확보하세요.",
      },
      ENTJ: {
        title: "ENTJ – 대담한 통솔자형",
        emoji: "👑",
        desc: "목표를 향해 거침없이 나아가는 당신. 뛰어난 추진력과 결단력으로 사람들을 이끌어요. 가끔은 속도를 늦추고 주변을 돌아보는 여유도 가져보세요.",
      },
    },
  },

  {
    id: "balance-mild",
    tag: "순한맛",
    title: "커플 밸런스게임 순한맛편",
    emoji: "🥛",
    tagline: "가볍고 편안한 일상 취향으로 몸 풀기",
    type: "score",
    compare: true,
    questions: [
      {
        text: "여행 갈 때 나는?",
        options: [
          { text: "계획 세워서 다니는 편", value: 1 },
          { text: "발 닿는 대로 다니는 편", value: 2 },
        ],
      },
      {
        text: "데이트 코스는?",
        options: [
          { text: "조용한 카페", value: 1 },
          { text: "신나는 놀이공원", value: 2 },
        ],
      },
      {
        text: "좋아하는 계절은?",
        options: [
          { text: "선선한 가을", value: 1 },
          { text: "뜨거운 여름", value: 2 },
        ],
      },
      {
        text: "영화 볼 때는?",
        options: [
          { text: "잔잔한 로맨스", value: 1 },
          { text: "자극적인 스릴러", value: 2 },
        ],
      },
      {
        text: "매운 음식은?",
        options: [
          { text: "순한 맛만", value: 1 },
          { text: "매운맛 챌린지", value: 2 },
        ],
      },
      {
        text: "커플룩은?",
        options: [
          { text: "안 입는 편", value: 1 },
          { text: "자주 맞춰 입는 편", value: 2 },
        ],
      },
      {
        text: "선물은?",
        options: [
          { text: "실용적인 선물이 좋다", value: 1 },
          { text: "이벤트 넘치는 서프라이즈가 좋다", value: 2 },
        ],
      },
      {
        text: "연락 스타일은?",
        options: [
          { text: "할 말 있을 때만 연락", value: 1 },
          { text: "하루 종일 붙어서 카톡", value: 2 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 11, title: "찐순한맛형 – 안정 최고", emoji: "🐑", desc: "잔잔하고 편안한 걸 좋아하는 당신, 커플 사이에서도 안정감을 최우선으로 여겨요. 가끔은 소소한 이벤트로 설렘을 더해보세요." },
      { min: 12, max: 16, title: "숨은 액티브형 – 은근 톡톡", emoji: "🎢", desc: "순한맛이라 해도 의외로 톡톡 튀는 선택이 많은 당신! 자극적인 걸 은근히 즐기는 타입일지도 몰라요. 다음 단계인 중간맛에도 도전해보세요." },
    ],
  },

  {
    id: "balance-medium",
    tag: "중간맛",
    title: "커플 밸런스게임 중간맛편",
    emoji: "🍜",
    tagline: "조금 더 솔직해지는 커플 생활 질문들",
    type: "score",
    compare: true,
    questions: [
      {
        text: "기념일은?",
        options: [
          { text: "소소하게 챙긴다", value: 1 },
          { text: "화려하게 챙긴다", value: 2 },
        ],
      },
      {
        text: "다툼 후에는?",
        options: [
          { text: "시간을 두고 화해한다", value: 1 },
          { text: "바로 그 자리에서 풀어야 한다", value: 2 },
        ],
      },
      {
        text: "애정표현은?",
        options: [
          { text: "둘이 있을 때만", value: 1 },
          { text: "SNS에도 대놓고", value: 2 },
        ],
      },
      {
        text: "미래 계획은?",
        options: [
          { text: "그때그때 정한다", value: 1 },
          { text: "미리 구체적으로 얘기한다", value: 2 },
        ],
      },
      {
        text: "친구 모임에는?",
        options: [
          { text: "각자 따로 참석", value: 1 },
          { text: "항상 같이 참석", value: 2 },
        ],
      },
      {
        text: "질투는?",
        options: [
          { text: "거의 안 하는 편", value: 1 },
          { text: "솔직히 좀 하는 편", value: 2 },
        ],
      },
      {
        text: "연애 스타일은?",
        options: [
          { text: "쿨하게, 서로 자유롭게", value: 1 },
          { text: "하나부터 열까지 공유", value: 2 },
        ],
      },
      {
        text: "동거·결혼 이야기는?",
        options: [
          { text: "아직 먼 얘기", value: 1 },
          { text: "진지하게 생각 중", value: 2 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 11, title: "안정 지향 중간맛형", emoji: "🍵", desc: "적당한 거리감 속에서 편안함을 지키는 당신. 커플 사이에서도 각자의 페이스를 존중하는 편이에요. 가끔은 조금 더 적극적으로 표현해보는 것도 좋아요." },
      { min: 12, max: 16, title: "은근 화끈 중간맛형", emoji: "🌤️", desc: "편안함 속에서도 표현할 건 확실히 표현하는 당신. 애정도 질투도 숨기지 않는 솔직한 스타일이에요. 다음 단계인 매운맛도 한번 도전해보세요." },
    ],
  },

  {
    id: "balance-spicy",
    tag: "매운맛",
    title: "커플 밸런스게임 매운맛편",
    emoji: "🌶️",
    tagline: "조금 예민할 수 있는, 솔직한 질문들",
    type: "score",
    compare: true,
    questions: [
      {
        text: "애인 핸드폰을 우연히 본다면?",
        options: [
          { text: "그냥 안 본다", value: 1 },
          { text: "궁금해서 살짝 본다", value: 2 },
        ],
      },
      {
        text: "전 애인과 아직 연락한다면?",
        options: [
          { text: "이해하려 노력한다", value: 1 },
          { text: "솔직히 신경 쓰인다", value: 2 },
        ],
      },
      {
        text: "애인이 이성 친구와 단둘이 밥을 먹는다면?",
        options: [
          { text: "괜찮다", value: 1 },
          { text: "미리 말해줬으면 한다", value: 2 },
        ],
      },
      {
        text: "애인의 SNS 좋아요 목록을 본다면?",
        options: [
          { text: "별생각 없다", value: 1 },
          { text: "누구 건지 궁금하다", value: 2 },
        ],
      },
      {
        text: "연애 중 가장 힘든 건?",
        options: [
          { text: "연락 텀이 뜸해질 때", value: 1 },
          { text: "내 얘기에 공감 못 받을 때", value: 2 },
        ],
      },
      {
        text: "애인의 과거 연애사는?",
        options: [
          { text: "굳이 안 궁금하다", value: 1 },
          { text: "자세히 알고 싶다", value: 2 },
        ],
      },
      {
        text: "애인이 나보다 친구를 먼저 챙긴다면?",
        options: [
          { text: "그럴 수도 있지", value: 1 },
          { text: "서운할 것 같다", value: 2 },
        ],
      },
      {
        text: "장거리 연애를 하게 된다면?",
        options: [
          { text: "믿음으로 버틸 수 있다", value: 1 },
          { text: "솔직히 자신 없다", value: 2 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 11, title: "쿨한 매운맛형", emoji: "😎", desc: "질투나 불안보다 믿음이 앞서는 당신. 상대를 있는 그대로 신뢰하는 여유로운 스타일이에요. 가끔은 솔직한 감정 표현도 관계에 도움이 될 수 있어요." },
      { min: 12, max: 16, title: "찐 매운맛형", emoji: "🌶️", desc: "감정에 솔직하고 신경 쓰이는 건 확실히 신경 쓰는 당신. 애정이 깊은 만큼 예민해지는 지점도 뚜렷해요. 불안한 마음을 대화로 풀어가는 연습을 해보세요." },
    ],
  },

  {
    id: "balance-mala",
    tag: "마라맛",
    title: "커플 밸런스게임 마라맛편",
    emoji: "🔥",
    tagline: "가장 솔직하고 극한의 커플 밸런스 질문들",
    type: "score",
    compare: true,
    questions: [
      {
        text: "다시 태어나도 지금 애인과 만난다 vs 다른 사람과 새로운 사랑을 해본다",
        options: [
          { text: "다시 태어나도 지금 애인", value: 1 },
          { text: "다른 사람과 새로운 사랑", value: 2 },
        ],
      },
      {
        text: "평생 안 싸우지만 설렘 없는 연애 vs 자주 싸우지만 뜨거운 연애",
        options: [
          { text: "안 싸우고 잔잔한 연애", value: 1 },
          { text: "자주 싸워도 뜨거운 연애", value: 2 },
        ],
      },
      {
        text: "애인이 나 몰래 소개팅 자리에 나갔다가 그냥 밥만 먹고 왔다면?",
        options: [
          { text: "이해하고 넘어간다", value: 1 },
          { text: "크게 싸울 것 같다", value: 2 },
        ],
      },
      {
        text: "이상형이 나타난다면?",
        options: [
          { text: "지금 애인이 최고라 흔들리지 않는다", value: 1 },
          { text: "솔직히 잠깐은 흔들릴 것 같다", value: 2 },
        ],
      },
      {
        text: "헤어진다면 그 이유는?",
        options: [
          { text: "자연스럽게 마음이 식어서", value: 1 },
          { text: "큰 사건(배신 등)이 터져서", value: 2 },
        ],
      },
      {
        text: "평생 콩깍지 쓴 채로 사는 것 vs 모든 걸 다 알고 현실적으로 사는 것",
        options: [
          { text: "평생 콩깍지 쓰고 산다", value: 1 },
          { text: "다 알고 현실적으로 산다", value: 2 },
        ],
      },
      {
        text: "애인의 흑역사를 모두 알게 된다면?",
        options: [
          { text: "더 사랑스러워 보인다", value: 1 },
          { text: "솔직히 좀 깨질 것 같다", value: 2 },
        ],
      },
      {
        text: "지금 이 순간 애인에게 가장 확인받고 싶은 건?",
        options: [
          { text: "날 정말 사랑하는지", value: 1 },
          { text: "평생 함께할 건지", value: 2 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 11, title: "낭만 지향 마라맛형", emoji: "🕯️", desc: "극한 상황에서도 지금의 사랑을 믿고 지키려는 당신. 관계에 대한 확신과 낭만이 뚜렷한 스타일이에요. 그 믿음을 가끔은 말로도 표현해주세요." },
      { min: 12, max: 16, title: "현실 직진 마라맛형", emoji: "🔥", desc: "감정도 현실도 끝까지 솔직하게 마주하는 당신. 흔들릴 수 있다는 것도, 힘든 진실도 회피하지 않는 대담한 스타일이에요. 그 솔직함만큼 서로를 다독이는 시간도 챙겨보세요." },
    ],
  },

  {
    id: "socialbattery",
    tag: "성격",
    title: "나의 사회성 배터리 테스트",
    emoji: "🔋",
    tagline: "사람을 만나고 나면 충전될까, 방전될까?",
    type: "score",
    compare: true,
    questions: [
      {
        text: "친구들과 모임이 끝나고 집에 오면?",
        options: [
          { text: "더 놀고 싶어서 아쉽다", value: 4 },
          { text: "적당히 즐거웠다", value: 3 },
          { text: "조용히 쉬고 싶다", value: 2 },
          { text: "혼자만의 시간이 간절하다", value: 1 },
        ],
      },
      {
        text: "주말 약속이 3개나 잡혀있다면?",
        options: [
          { text: "완전 신난다, 알차게 논다", value: 4 },
          { text: "적당히 좋다", value: 3 },
          { text: "하나쯤은 취소하고 싶다", value: 2 },
          { text: "생각만 해도 피곤하다", value: 1 },
        ],
      },
      {
        text: "새로운 사람을 만나는 자리에서 나는?",
        options: [
          { text: "먼저 다가가서 말을 건다", value: 4 },
          { text: "물어보면 편하게 대답한다", value: 3 },
          { text: "필요한 말만 한다", value: 2 },
          { text: "최대한 피하고 싶다", value: 1 },
        ],
      },
      {
        text: "연휴에 딱히 계획이 없다면?",
        options: [
          { text: "바로 사람들을 불러 모은다", value: 4 },
          { text: "누가 부르면 나간다", value: 3 },
          { text: "집에서 혼자 쉬는 게 더 좋다", value: 2 },
          { text: "아무도 안 만나는 게 최고다", value: 1 },
        ],
      },
      {
        text: "회식이나 모임 자리에서 나는?",
        options: [
          { text: "분위기 메이커 역할을 한다", value: 4 },
          { text: "대화에 무난하게 낀다", value: 3 },
          { text: "말수가 점점 줄어든다", value: 2 },
          { text: "빨리 끝나기만 바란다", value: 1 },
        ],
      },
      {
        text: "하루종일 사람을 만나고 나면?",
        options: [
          { text: "오히려 에너지가 더 난다", value: 4 },
          { text: "적당히 피곤하지만 괜찮다", value: 3 },
          { text: "집에 가서 좀 쉬어야 한다", value: 2 },
          { text: "완전히 방전돼서 말도 하기 싫다", value: 1 },
        ],
      },
      {
        text: "전화와 텍스트 중 더 편한 소통 방식은?",
        options: [
          { text: "바로 전화하거나 만난다", value: 4 },
          { text: "영상통화 정도는 괜찮다", value: 3 },
          { text: "텍스트로 하는 게 편하다", value: 2 },
          { text: "가능하면 연락 자체를 줄인다", value: 1 },
        ],
      },
      {
        text: "사람들이 나를 표현한다면?",
        options: [
          { text: "\"어디서든 에너자이저\"", value: 4 },
          { text: "\"무난하게 잘 지내는 사람\"", value: 3 },
          { text: "\"조용한 편\"", value: 2 },
          { text: "\"집순이/집돌이 끝판왕\"", value: 1 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "완전방전 홈바디형", emoji: "🛌", desc: "혼자만의 시간에서 진짜 에너지를 얻는 당신. 사람을 만나는 것도 좋지만 회복하는 시간이 꼭 필요한 타입이에요. 무리하지 않는 페이스를 지켜주세요." },
      { min: 15, max: 20, title: "균형 잡힌 하이브리드형", emoji: "🌗", desc: "사람도 좋고 혼자도 좋은, 상황에 따라 유연하게 충전과 방전을 오가는 당신. 그날그날 컨디션에 맞춰 스스로를 잘 조율하는 편이에요." },
      { min: 21, max: 26, title: "활발한 소셜형", emoji: "🎪", desc: "사람들과 있을 때 에너지가 차오르는 당신. 모임에서 분위기를 살리는 존재예요. 가끔은 혼자만의 휴식도 스스로에게 선물해주세요." },
      { min: 27, max: 32, title: "인싸 오브 인싸", emoji: "🎉", desc: "사람을 만날수록 오히려 힘이 나는 완전 외향형! 어디서든 먼저 다가가고 분위기를 이끄는 타고난 마당발이에요. 가끔은 재충전할 여백도 남겨두세요." },
    ],
  },

  {
    id: "petmatch",
    tag: "라이프",
    title: "나와 잘 맞는 반려동물 테스트",
    emoji: "🐕",
    tagline: "라이프스타일로 알아보는 나의 반려동물 궁합",
    type: "category",
    compare: true,
    questions: [
      {
        text: "퇴근(하교) 후 가장 하고 싶은 건?",
        options: [
          { text: "같이 산책하며 에너지 발산", value: "dog" },
          { text: "조용히 각자의 시간 보내기", value: "cat" },
          { text: "가만히 바라보며 힐링하기", value: "fish" },
          { text: "재잘거리는 소리 들으며 쉬기", value: "bird" },
        ],
      },
      {
        text: "집을 오래 비우는 날이 많다면?",
        options: [
          { text: "최대한 빨리 돌아가려 한다", value: "dog" },
          { text: "크게 걱정 안 한다", value: "cat" },
          { text: "먹이만 잘 챙기면 괜찮다", value: "fish" },
          { text: "짝을 지어 키우면 괜찮다", value: "bird" },
        ],
      },
      {
        text: "나의 애정표현 스타일은?",
        options: [
          { text: "적극적으로 안고 쓰다듬는다", value: "dog" },
          { text: "은근하고 잔잔하게", value: "cat" },
          { text: "눈으로 지켜보는 걸로 충분", value: "fish" },
          { text: "말 걸고 소통하는 걸 좋아한다", value: "bird" },
        ],
      },
      {
        text: "관리(청소, 산책 등)에 들일 수 있는 시간은?",
        options: [
          { text: "매일 산책+관리, 자신 있다", value: "dog" },
          { text: "적당히, 화장실 정도", value: "cat" },
          { text: "정기적인 수질 관리면 충분", value: "fish" },
          { text: "새장 청소, 크게 부담 없다", value: "bird" },
        ],
      },
      {
        text: "나에게 이상적인 주말은?",
        options: [
          { text: "밖에 나가 함께 뛰노는 주말", value: "dog" },
          { text: "집에서 각자 편하게 쉬는 주말", value: "cat" },
          { text: "조용한 공간에서 여유롭게", value: "fish" },
          { text: "소소한 대화와 소리가 있는 주말", value: "bird" },
        ],
      },
      {
        text: "소음이나 활동량에 대한 생각은?",
        options: [
          { text: "활기찬 소음은 오히려 좋다", value: "dog" },
          { text: "조용한 게 최고다", value: "cat" },
          { text: "소음 없는 게 제일 좋다", value: "fish" },
          { text: "적당한 지저귐은 반갑다", value: "bird" },
        ],
      },
      {
        text: "예상치 못한 돌발 행동을 마주하면?",
        options: [
          { text: "그러려니, 오히려 귀엽다", value: "dog" },
          { text: "각자 개성이니 존중한다", value: "cat" },
          { text: "특별히 신경 쓸 일이 적다", value: "fish" },
          { text: "그때그때 대화하듯 반응한다", value: "bird" },
        ],
      },
      {
        text: "나에게 반려동물이란?",
        options: [
          { text: "언제나 곁을 지키는 단짝", value: "dog" },
          { text: "함께 있지만 자유로운 동거인", value: "cat" },
          { text: "바라만 봐도 힐링되는 존재", value: "fish" },
          { text: "소소한 대화 상대", value: "bird" },
        ],
      },
    ],
    categories: {
      dog: {
        title: "강아지 궁합형 – 활동적인 단짝",
        emoji: "🐶",
        desc: "에너지 넘치고 함께하는 시간을 소중히 여기는 당신에겐 산책하고 뛰노는 강아지가 찰떡궁합이에요. 다만 산책과 케어에 꾸준한 시간을 낼 수 있는지 먼저 점검해보세요.",
      },
      cat: {
        title: "고양이 궁합형 – 자유로운 동거인",
        emoji: "🐱",
        desc: "각자의 공간과 시간을 존중하는 당신에게는 독립적인 고양이가 잘 맞아요. 무심한 듯 다가오는 애정표현에서 큰 위로를 받을 거예요.",
      },
      fish: {
        title: "물고기 궁합형 – 잔잔한 힐링러",
        emoji: "🐠",
        desc: "조용하고 안정적인 걸 좋아하는 당신에게는 바라보는 것만으로 힐링되는 어항이 딱이에요. 정기적인 수질 관리만 챙기면 부담 없는 동반자가 되어줄 거예요.",
      },
      bird: {
        title: "새 궁합형 – 소소한 대화상대",
        emoji: "🦜",
        desc: "소소한 소리와 교감을 즐기는 당신에게는 재잘거리는 새가 좋은 친구가 될 수 있어요. 다만 새장 청소와 꾸준한 관심은 잊지 말고 챙겨주세요.",
      },
    },
  },

  {
    id: "fandom",
    tag: "덕질",
    title: "나의 덕질 유형 테스트",
    emoji: "💜",
    tagline: "최애를 대하는 나의 진짜 모습은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "최애가 생기면 가장 먼저 하는 일은?",
        options: [
          { text: "관련 콘텐츠를 밤새 정주행한다", value: "allin" },
          { text: "굿즈부터 알아본다", value: "collector" },
          { text: "조용히 SNS를 팔로우한다", value: "lurker" },
          { text: "팬 커뮤니티부터 찾아 가입한다", value: "social" },
        ],
      },
      {
        text: "덕질 예산이 생기면?",
        options: [
          { text: "굿즈든 콘서트든 아낌없이 쓴다", value: "allin" },
          { text: "한정판, 포토카드 수집에 쓴다", value: "collector" },
          { text: "크게 안 쓰고 눈으로 즐긴다", value: "lurker" },
          { text: "같이 갈 친구들과의 활동에 쓴다", value: "social" },
        ],
      },
      {
        text: "최애의 새 소식이 뜨면?",
        options: [
          { text: "만사 제쳐두고 바로 확인한다", value: "allin" },
          { text: "관련 굿즈 발매 여부부터 본다", value: "collector" },
          { text: "나중에 조용히 챙겨본다", value: "lurker" },
          { text: "커뮤니티에 바로 공유한다", value: "social" },
        ],
      },
      {
        text: "덕질 사실을 주변에?",
        options: [
          { text: "숨김없이 티내고 자랑한다", value: "allin" },
          { text: "물어보면 수집품을 보여준다", value: "collector" },
          { text: "웬만하면 티 안 낸다", value: "lurker" },
          { text: "같이 덕질할 친구를 만든다", value: "social" },
        ],
      },
      {
        text: "콘서트나 팬미팅 티켓팅은?",
        options: [
          { text: "모든 걸 걸고 도전한다", value: "allin" },
          { text: "MD 구매 목적이 더 크다", value: "collector" },
          { text: "되면 좋고 안 되면 만다", value: "lurker" },
          { text: "같이 갈 사람부터 구한다", value: "social" },
        ],
      },
      {
        text: "최애의 콘텐츠를 볼 때 나는?",
        options: [
          { text: "몰입해서 여러 번 반복 시청한다", value: "allin" },
          { text: "캡처하고 자료로 정리한다", value: "collector" },
          { text: "느긋하게 나중에 챙겨본다", value: "lurker" },
          { text: "실시간으로 반응 공유하며 본다", value: "social" },
        ],
      },
      {
        text: "덕질이 주는 가장 큰 의미는?",
        options: [
          { text: "삶의 원동력 그 자체", value: "allin" },
          { text: "나만의 소중한 컬렉션", value: "collector" },
          { text: "일상의 소소한 힐링", value: "lurker" },
          { text: "사람들과 나누는 즐거움", value: "social" },
        ],
      },
      {
        text: "다른 사람이 내 덕질을 물어보면?",
        options: [
          { text: "신나서 몇 시간이고 이야기한다", value: "allin" },
          { text: "수집한 걸 하나씩 보여준다", value: "collector" },
          { text: "간단히 답하고 만다", value: "lurker" },
          { text: "같이 덕질하자고 권한다", value: "social" },
        ],
      },
    ],
    categories: {
      allin: {
        title: "올인 덕후형 – 삶이 곧 덕질",
        emoji: "🔥",
        desc: "최애를 향한 마음이 넘치는 당신은 덕질에 온 힘을 쏟는 타입이에요. 그 열정이 큰 행복을 주지만, 가끔은 스스로를 위한 시간도 챙겨보세요.",
      },
      collector: {
        title: "수집형 덕후 – 소장의 미학",
        emoji: "📦",
        desc: "소중한 것들을 하나씩 모아가는 재미로 덕질하는 당신. 정성스레 쌓아온 컬렉션이 큰 자랑거리예요. 예산 관리도 잊지 말고 챙기세요.",
      },
      lurker: {
        title: "조용한 덕후형 – 마음속 깊은 애정",
        emoji: "🤫",
        desc: "티 내지 않아도 누구보다 진심인 당신. 혼자만의 방식으로 최애를 응원하는 게 편안하죠. 가끔은 같은 마음의 사람들과 나눠보는 것도 즐거울 거예요.",
      },
      social: {
        title: "함께하는 덕후형 – 덕메가 최고",
        emoji: "🤝",
        desc: "좋아하는 마음을 사람들과 나눌 때 더 행복한 당신. 덕질로 만난 인연이 삶의 큰 자산이 될 거예요. 혼자만의 힐링 시간도 잊지 마세요.",
      },
    },
  },

  {
    id: "conflict",
    tag: "관계심리",
    title: "나의 갈등 해결 스타일 테스트",
    emoji: "⚖️",
    tagline: "부딪히는 순간, 진짜 나의 대처법은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "친구와 의견이 부딪히면?",
        options: [
          { text: "바로 내 생각을 솔직히 말한다", value: "confront" },
          { text: "굳이 얘기 안 하고 넘어간다", value: "avoid" },
          { text: "적당한 선에서 맞춘다", value: "compromise" },
          { text: "원인을 차분히 짚어본다", value: "analyze" },
        ],
      },
      {
        text: "갈등 상황에서 나의 감정은?",
        options: [
          { text: "즉각적으로 드러난다", value: "confront" },
          { text: "티 안 내고 속으로만 삭인다", value: "avoid" },
          { text: "적당히 조절하며 대화한다", value: "compromise" },
          { text: "감정보다 상황을 먼저 본다", value: "analyze" },
        ],
      },
      {
        text: "다툰 직후 나는?",
        options: [
          { text: "바로 풀고 넘어가고 싶다", value: "confront" },
          { text: "시간이 지나면 괜찮아진다", value: "avoid" },
          { text: "먼저 손 내밀며 타협점을 찾는다", value: "compromise" },
          { text: "원인부터 정리해보고 대화한다", value: "analyze" },
        ],
      },
      {
        text: "상대가 화를 낸다면?",
        options: [
          { text: "나도 내 입장을 명확히 밝힌다", value: "confront" },
          { text: "일단 자리를 피한다", value: "avoid" },
          { text: "진정시키고 중간점을 찾는다", value: "compromise" },
          { text: "왜 화가 났는지부터 분석한다", value: "analyze" },
        ],
      },
      {
        text: "그룹 내 의견 대립이 생기면?",
        options: [
          { text: "적극적으로 내 의견을 관철한다", value: "confront" },
          { text: "웬만하면 다수 의견을 따른다", value: "avoid" },
          { text: "양쪽 의견을 절충한다", value: "compromise" },
          { text: "장단점을 정리해서 제시한다", value: "analyze" },
        ],
      },
      {
        text: "갈등을 대하는 나의 기본 태도는?",
        options: [
          { text: "피하지 않고 정면 돌파한다", value: "confront" },
          { text: "가능하면 갈등 자체를 피한다", value: "avoid" },
          { text: "서로 win-win할 방법을 찾는다", value: "compromise" },
          { text: "감정보다 논리로 접근한다", value: "analyze" },
        ],
      },
      {
        text: "갈등이 쉽게 해결되지 않으면?",
        options: [
          { text: "될 때까지 계속 이야기한다", value: "confront" },
          { text: "시간에 맡기고 거리를 둔다", value: "avoid" },
          { text: "제3자의 의견을 구한다", value: "compromise" },
          { text: "근본 원인을 계속 찾는다", value: "analyze" },
        ],
      },
      {
        text: "나에게 갈등이란?",
        options: [
          { text: "풀어야 할 숙제, 미루지 않는다", value: "confront" },
          { text: "가능하면 피하고 싶은 것", value: "avoid" },
          { text: "타협으로 풀 수 있는 것", value: "compromise" },
          { text: "이해하면 풀리는 것", value: "analyze" },
        ],
      },
    ],
    categories: {
      confront: {
        title: "직진 해결형 – 정면 돌파",
        emoji: "🎯",
        desc: "갈등을 피하지 않고 바로 부딪혀 해결하는 당신. 솔직함 덕분에 오해가 오래가지 않아요. 다만 상대의 속도도 배려해주는 여유가 필요해요.",
      },
      avoid: {
        title: "평화 우선형 – 시간이 약",
        emoji: "🌫️",
        desc: "갈등 자체를 최소화하려는 당신은 관계의 평화를 소중히 여겨요. 다만 쌓아둔 감정이 터지지 않도록 가끔은 솔직한 표현도 필요해요.",
      },
      compromise: {
        title: "타협형 – 서로 한 발씩",
        emoji: "🤝",
        desc: "양쪽 입장을 모두 헤아리며 중간점을 찾는 당신. 관계를 부드럽게 이어가는 능력이 뛰어나요. 가끔은 본인의 의견도 더 확실히 챙겨보세요.",
      },
      analyze: {
        title: "분석형 – 원인부터 이해",
        emoji: "🔍",
        desc: "감정보다 원인을 먼저 들여다보는 당신. 논리적인 접근으로 갈등의 본질을 잘 짚어내요. 가끔은 분석보다 감정을 먼저 다독여주는 것도 필요해요.",
      },
    },
  },

  {
    id: "idealtype",
    tag: "연애심리",
    title: "나의 이상형 테스트",
    emoji: "💘",
    tagline: "나도 몰랐던 내 이상형의 실체는?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "소개팅에서 가장 먼저 눈에 들어오는 건?",
        options: [
          { text: "다정하게 챙겨주는 말투", value: "warm" },
          { text: "흔들림 없는 편안한 태도", value: "reliable" },
          { text: "재치있는 농담과 텐션", value: "fun" },
          { text: "알 수 없는 묘한 분위기", value: "mystery" },
        ],
      },
      {
        text: "연애할 때 가장 중요하게 생각하는 건?",
        options: [
          { text: "서로 챙기는 따뜻함", value: "warm" },
          { text: "믿고 의지할 수 있는 신뢰", value: "reliable" },
          { text: "함께 있으면 즐거운 케미", value: "fun" },
          { text: "서로를 알아가는 설렘", value: "mystery" },
        ],
      },
      {
        text: "힘든 일이 있을 때 상대가 해줬으면 하는 건?",
        options: [
          { text: "옆에서 다정하게 위로해준다", value: "warm" },
          { text: "묵묵히 곁을 지켜준다", value: "reliable" },
          { text: "웃게 해주는 유머를 던진다", value: "fun" },
          { text: "혼자만의 시간을 존중해준다", value: "mystery" },
        ],
      },
      {
        text: "끌리는 데이트 코스는?",
        options: [
          { text: "감성 카페에서 도란도란", value: "warm" },
          { text: "익숙하고 편안한 단골집", value: "reliable" },
          { text: "액티비티 넘치는 나들이", value: "fun" },
          { text: "낯선 곳으로 즉흥 여행", value: "mystery" },
        ],
      },
      {
        text: "상대의 어떤 모습에 반하나요?",
        options: [
          { text: "나를 세심하게 챙기는 모습", value: "warm" },
          { text: "위기에도 흔들리지 않는 모습", value: "reliable" },
          { text: "텐션을 업 시켜주는 모습", value: "fun" },
          { text: "쉽게 파악되지 않는 모습", value: "mystery" },
        ],
      },
      {
        text: "선호하는 연락 스타일은?",
        options: [
          { text: "자잘한 일상까지 다정하게", value: "warm" },
          { text: "필요할 때 확실하게", value: "reliable" },
          { text: "재밌는 드립이 가득하게", value: "fun" },
          { text: "가끔 툭 던지는 의미심장한 연락", value: "mystery" },
        ],
      },
      {
        text: "이상형에게 듣고 싶은 말은?",
        options: [
          { text: "\"오늘 하루 어땠어? 힘들지 않았어?\"", value: "warm" },
          { text: "\"무슨 일 있어도 내가 있잖아\"", value: "reliable" },
          { text: "\"너랑 있으면 진짜 재밌어\"", value: "fun" },
          { text: "\"너 은근 모르겠단 말이야, 그게 매력이야\"", value: "mystery" },
        ],
      },
    ],
    categories: {
      warm: {
        title: "다정다감형 – 마음을 채워주는 사랑",
        emoji: "🌷",
        desc: "세심하게 챙겨주는 다정함에 마음이 열리는 당신. 사소한 배려 하나에도 크게 감동받아요. 다만 다정함 뒤에 숨은 진심도 함께 봐주세요.",
      },
      reliable: {
        title: "든든한 안정형 – 흔들리지 않는 믿음",
        emoji: "🛡️",
        desc: "화려함보다 믿음직함에 끌리는 당신. 편안하고 안정적인 관계를 만드는 사람이에요. 가끔은 설렘도 놓치지 말고 즐겨보세요.",
      },
      fun: {
        title: "유쾌한 텐션형 – 함께 있으면 즐거운",
        emoji: "🎉",
        desc: "같이 있을 때 즐거운 사람에게 끌리는 당신. 관계에서 웃음과 에너지를 가장 중요하게 여겨요. 가끔은 진지한 대화도 놓치지 마세요.",
      },
      mystery: {
        title: "신비로운 매력형 – 알아갈수록 빠지는",
        emoji: "🌙",
        desc: "쉽게 다 보여주지 않는 매력에 끌리는 당신. 알아가는 과정 자체를 즐기는 사람이에요. 다만 너무 어려운 상대만 좇지는 않도록 균형을 잡아보세요.",
      },
    },
  },

  {
    id: "jealousy",
    tag: "연애심리",
    title: "나의 질투 유형 테스트",
    emoji: "😤",
    tagline: "사랑 앞에서 진짜 내 모습은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "연인이 다른 이성과 톡을 오래 하면?",
        options: [
          { text: "바로 물어본다 \"누구야?\"", value: "direct" },
          { text: "신경쓰이지만 티 내지 않는다", value: "silent" },
          { text: "대수롭지 않게 넘긴다", value: "logical" },
          { text: "계속 신경 쓰이고 불안해진다", value: "anxious" },
        ],
      },
      {
        text: "SNS에 연인이 다른 사람과 찍은 사진이 올라오면?",
        options: [
          { text: "바로 연락해서 물어본다", value: "direct" },
          { text: "마음속으로만 신경쓴다", value: "silent" },
          { text: "그럴 수도 있지 생각한다", value: "logical" },
          { text: "계속 사진을 다시 확인하게 된다", value: "anxious" },
        ],
      },
      {
        text: "질투가 날 때 나의 행동은?",
        options: [
          { text: "솔직하게 감정을 표현한다", value: "direct" },
          { text: "혼자 삭이다가 나중에 티가 난다", value: "silent" },
          { text: "감정보다 상황을 먼저 판단한다", value: "logical" },
          { text: "계속 확인하고 싶어진다", value: "anxious" },
        ],
      },
      {
        text: "연인의 과거 연애 이야기를 들으면?",
        options: [
          { text: "궁금한 건 그냥 물어본다", value: "direct" },
          { text: "듣고 싶지 않지만 참는다", value: "silent" },
          { text: "과거는 과거일 뿐이라고 생각한다", value: "logical" },
          { text: "자꾸 비교하게 된다", value: "anxious" },
        ],
      },
      {
        text: "연인이 친구들과 늦게까지 놀면?",
        options: [
          { text: "언제 오는지 솔직히 물어본다", value: "direct" },
          { text: "서운하지만 말은 안 한다", value: "silent" },
          { text: "각자의 시간을 존중한다", value: "logical" },
          { text: "연락이 안 되면 불안해진다", value: "anxious" },
        ],
      },
      {
        text: "질투를 표현하는 나만의 방식은?",
        options: [
          { text: "직접적으로 말한다", value: "direct" },
          { text: "은근한 말투로 티를 낸다", value: "silent" },
          { text: "표현하지 않는 편이다", value: "logical" },
          { text: "서운함이나 눈물로 표현된다", value: "anxious" },
        ],
      },
      {
        text: "연인이 나를 안심시켜줄 때 필요한 건?",
        options: [
          { text: "명확한 설명", value: "direct" },
          { text: "시간이 지나면 자연히 풀린다", value: "silent" },
          { text: "별로 필요하지 않다", value: "logical" },
          { text: "꾸준한 애정 표현", value: "anxious" },
        ],
      },
    ],
    categories: {
      direct: {
        title: "직진 표현형 – 솔직하게 확인하는",
        emoji: "🔥",
        desc: "질투가 나면 숨기지 않고 바로 표현하는 당신. 오해를 오래 끌지 않는 게 장점이에요. 다만 상대가 놀라지 않게 말투는 조금 부드럽게!",
      },
      silent: {
        title: "조용한 삭임형 – 속으로 삼키는",
        emoji: "🌫️",
        desc: "질투가 나도 겉으로는 티를 잘 안 내는 당신. 상대를 배려하는 마음이지만, 쌓아두면 마음이 힘들어져요. 가끔은 솔직하게 표현해보세요.",
      },
      logical: {
        title: "쿨한 이성형 – 질투에 잘 흔들리지 않는",
        emoji: "😎",
        desc: "감정보다 상황을 먼저 보는 당신은 질투에 크게 휘둘리지 않아요. 안정적인 연애를 하는 편이지만, 가끔은 솔직한 감정 표현도 관계에 도움이 돼요.",
      },
      anxious: {
        title: "불안 증폭형 – 사랑이 큰 만큼 불안도 큰",
        emoji: "💭",
        desc: "좋아하는 마음이 큰 만큼 불안도 쉽게 커지는 당신. 그만큼 진심으로 사랑하고 있다는 뜻이에요. 스스로 안정감을 채우는 연습을 함께 해보세요.",
      },
    },
  },

  {
    id: "defense",
    tag: "성격",
    title: "나의 방어기제 테스트",
    emoji: "🧩",
    tagline: "힘든 순간, 나도 모르게 나오는 마음의 습관은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "실수했을 때 나의 첫 반응은?",
        options: [
          { text: "\"그럴 수도 있지\" 하며 이유를 찾는다", value: "rationalize" },
          { text: "그 상황 자체를 피하고 싶다", value: "avoidance" },
          { text: "농담으로 넘기려 한다", value: "humor" },
          { text: "남 탓부터 하게 된다", value: "projection" },
        ],
      },
      {
        text: "스트레스 받는 상황이 생기면?",
        options: [
          { text: "논리적으로 이유를 설명하려 한다", value: "rationalize" },
          { text: "아예 그 자리를 벗어난다", value: "avoidance" },
          { text: "웃음으로 분위기를 바꾼다", value: "humor" },
          { text: "다른 사람이나 상황 탓을 한다", value: "projection" },
        ],
      },
      {
        text: "비판을 들었을 때?",
        options: [
          { text: "나름의 근거를 대며 설명한다", value: "rationalize" },
          { text: "그 얘기를 더 이상 하고 싶지 않다", value: "avoidance" },
          { text: "가볍게 웃어넘긴다", value: "humor" },
          { text: "상대도 똑같다고 반박한다", value: "projection" },
        ],
      },
      {
        text: "갈등 상황을 마주하면?",
        options: [
          { text: "상황을 분석해서 납득하려 한다", value: "rationalize" },
          { text: "일단 피하고 나중에 생각한다", value: "avoidance" },
          { text: "유머로 긴장을 풀려고 한다", value: "humor" },
          { text: "내 잘못보다 상대 잘못이 크다고 느낀다", value: "projection" },
        ],
      },
      {
        text: "실패했을 때 스스로에게 하는 말은?",
        options: [
          { text: "\"이번엔 상황이 안 좋았을 뿐이야\"", value: "rationalize" },
          { text: "\"그냥 신경 안 쓸래\"", value: "avoidance" },
          { text: "\"웃자 웃자, 다음에 잘하면 되지\"", value: "humor" },
          { text: "\"저것 때문에 이렇게 된 거야\"", value: "projection" },
        ],
      },
      {
        text: "불안한 감정이 들 때 나는?",
        options: [
          { text: "이유를 찾아 스스로를 설득한다", value: "rationalize" },
          { text: "그 감정을 마주하기보다 다른 데 집중한다", value: "avoidance" },
          { text: "농담처럼 가볍게 표현한다", value: "humor" },
          { text: "원인을 외부에서 찾는다", value: "projection" },
        ],
      },
      {
        text: "화가 났을 때 나의 모습은?",
        options: [
          { text: "화난 이유를 조목조목 설명한다", value: "rationalize" },
          { text: "자리를 피해 진정할 시간을 갖는다", value: "avoidance" },
          { text: "실없는 농담으로 풀어본다", value: "humor" },
          { text: "\"너 때문이잖아\"라는 생각이 먼저 든다", value: "projection" },
        ],
      },
    ],
    categories: {
      rationalize: {
        title: "합리화형 – 이유를 찾아 마음을 다독이는",
        emoji: "🧩",
        desc: "힘든 상황도 나름의 이유를 찾아 이해하려는 당신. 스스로를 다독이는 힘이 있어요. 가끔은 이유를 찾기보다 감정을 그대로 느껴보는 것도 좋아요.",
      },
      avoidance: {
        title: "회피형 – 일단 거리를 두는",
        emoji: "🚪",
        desc: "불편한 상황에서 한 발 물러나 숨을 고르는 당신. 나쁜 게 아니라 스스로를 지키는 방법이에요. 다만 너무 오래 피하지만 말고 천천히 마주해보세요.",
      },
      humor: {
        title: "유머형 – 웃음으로 넘기는",
        emoji: "😂",
        desc: "힘든 순간도 유머로 가볍게 넘기는 당신. 분위기를 밝게 만드는 재주가 있어요. 가끔은 웃음 뒤에 숨은 진짜 감정도 들여다봐주세요.",
      },
      projection: {
        title: "투사형 – 원인을 밖에서 찾는",
        emoji: "🪞",
        desc: "힘든 감정을 외부에서 원인을 찾아 해소하는 당신. 스스로를 보호하려는 자연스러운 반응이에요. 가끔은 내 마음 안쪽도 한 번씩 들여다보면 더 편안해질 거예요.",
      },
    },
  },

  {
    id: "perfectionist",
    tag: "힐링",
    title: "나의 완벽주의 지수 테스트",
    emoji: "📐",
    tagline: "나는 얼마나 나 자신에게 엄격할까요?",
    type: "score",
    compare: true,
    questions: [
      {
        text: "일을 시작하기 전에 나는?",
        options: [
          { text: "대략적인 계획만 세운다", value: 1 },
          { text: "어느 정도 계획을 세운다", value: 2 },
          { text: "세세하게 다 계획해둔다", value: 3 },
          { text: "완벽한 계획이 아니면 시작을 못한다", value: 4 },
        ],
      },
      {
        text: "작은 실수를 했을 때?",
        options: [
          { text: "대수롭지 않게 넘긴다", value: 1 },
          { text: "잠깐 신경쓰이지만 넘긴다", value: 2 },
          { text: "계속 마음에 걸린다", value: 3 },
          { text: "밤새 곱씹게 된다", value: 4 },
        ],
      },
      {
        text: "마감 기한 앞두고 결과물이 마음에 안 들면?",
        options: [
          { text: "그냥 제출한다", value: 1 },
          { text: "조금만 다듬고 제출한다", value: 2 },
          { text: "시간을 늘려서라도 고친다", value: 3 },
          { text: "완벽해질 때까지 미룬다", value: 4 },
        ],
      },
      {
        text: "남에게 일을 맡길 때?",
        options: [
          { text: "편하게 맡긴다", value: 1 },
          { text: "대체로 믿고 맡긴다", value: 2 },
          { text: "맡기고도 계속 신경쓰인다", value: 3 },
          { text: "차라리 내가 다 하는 게 편하다", value: 4 },
        ],
      },
      {
        text: "계획이 틀어지면?",
        options: [
          { text: "유연하게 바꾼다", value: 1 },
          { text: "조금 당황하지만 적응한다", value: 2 },
          { text: "스트레스를 꽤 받는다", value: 3 },
          { text: "크게 무너지는 기분이 든다", value: 4 },
        ],
      },
      {
        text: "목표를 100% 달성하지 못하면?",
        options: [
          { text: "그래도 잘했다고 생각한다", value: 1 },
          { text: "아쉽지만 넘어간다", value: 2 },
          { text: "실패했다고 느낀다", value: 3 },
          { text: "자신을 심하게 탓한다", value: 4 },
        ],
      },
      {
        text: "남들이 보는 나의 결과물에 대해?",
        options: [
          { text: "크게 신경쓰지 않는다", value: 1 },
          { text: "어느 정도 신경쓴다", value: 2 },
          { text: "평가가 계속 신경쓰인다", value: 3 },
          { text: "완벽해 보여야만 마음이 편하다", value: 4 },
        ],
      },
      {
        text: "하루 일과를 마치고 드는 생각은?",
        options: [
          { text: "\"오늘도 수고했다\"", value: 1 },
          { text: "\"그럭저럭 괜찮았다\"", value: 2 },
          { text: "\"더 잘할 수 있었는데\"", value: 3 },
          { text: "\"오늘도 부족했다\"", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "여유형 완벽주의 – 널널함이 강점", emoji: "🌼", desc: "기준은 있지만 스스로를 몰아붙이지 않는 편안한 완벽주의예요. 지금의 여유로운 태도를 잘 유지해보세요." },
      { min: 15, max: 20, title: "균형잡힌 완벽주의 – 적당한 기준", emoji: "⚖️", desc: "높은 기준과 나를 향한 관대함 사이에서 균형을 잘 잡고 있어요. 가끔은 스스로를 조금 더 칭찬해주세요." },
      { min: 21, max: 26, title: "고강도 완벽주의 – 스스로에게 엄격한", emoji: "🔥", desc: "기준이 높고 책임감도 강해서 좋은 결과를 만들어내지만, 그만큼 스스로를 많이 몰아붙이고 있어요. '이 정도면 충분하다'는 말을 자신에게도 자주 해주세요." },
      { min: 27, max: 32, title: "번아웃 위험 완벽주의 – 너무 애쓰고 있는", emoji: "🚨", desc: "완벽해야 한다는 부담이 마음을 많이 지치게 하고 있어요. 결과보다 지금의 나를 먼저 돌보는 시간이 꼭 필요해요. 힘들다면 주변이나 전문가의 도움을 받는 것도 좋은 방법이에요." },
    ],
  },

  {
    id: "sns",
    tag: "라이프",
    title: "나의 SNS 성향 테스트",
    emoji: "📱",
    tagline: "피드 속 진짜 내 모습은 어떤 유형일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "SNS를 켜면 제일 먼저 하는 행동은?",
        options: [
          { text: "내 이야기부터 올린다", value: "sharer" },
          { text: "남들 피드부터 구경한다", value: "lurker" },
          { text: "저장할 만한 콘텐츠부터 찾는다", value: "curator" },
          { text: "댓글이나 DM부터 확인한다", value: "connector" },
        ],
      },
      {
        text: "맛집에 가면?",
        options: [
          { text: "바로 스토리에 올린다", value: "sharer" },
          { text: "사진만 찍고 안 올린다", value: "lurker" },
          { text: "나중에 예쁘게 편집해서 올린다", value: "curator" },
          { text: "같이 간 사람과 태그하며 올린다", value: "connector" },
        ],
      },
      {
        text: "팔로워 수보다 나에게 중요한 건?",
        options: [
          { text: "얼마나 자주 올리느냐", value: "sharer" },
          { text: "남의 게시물 보는 재미", value: "lurker" },
          { text: "피드의 통일감", value: "curator" },
          { text: "사람들과의 소통", value: "connector" },
        ],
      },
      {
        text: "SNS에서 시간을 가장 많이 쓰는 곳은?",
        options: [
          { text: "내 게시물 관리", value: "sharer" },
          { text: "남의 피드 둘러보기", value: "lurker" },
          { text: "저장한 게시물 정리", value: "curator" },
          { text: "댓글 달고 답장하기", value: "connector" },
        ],
      },
      {
        text: "게시물 올릴 때 가장 고민하는 건?",
        options: [
          { text: "얼마나 빨리 올릴지", value: "sharer" },
          { text: "올릴지 말지", value: "lurker" },
          { text: "어떤 필터, 어떤 배치로 올릴지", value: "curator" },
          { text: "누구랑 태그할지", value: "connector" },
        ],
      },
      {
        text: "알림이 울리면?",
        options: [
          { text: "내 게시물 반응인지 바로 확인한다", value: "sharer" },
          { text: "크게 신경 쓰지 않는다", value: "lurker" },
          { text: "저장·좋아요한 계정 알림만 확인한다", value: "curator" },
          { text: "댓글이나 DM부터 반갑게 확인한다", value: "connector" },
        ],
      },
      {
        text: "나에게 SNS란?",
        options: [
          { text: "나를 표현하는 공간", value: "sharer" },
          { text: "정보를 얻는 창구", value: "lurker" },
          { text: "취향을 기록하는 공간", value: "curator" },
          { text: "사람들과 이어지는 공간", value: "connector" },
        ],
      },
    ],
    categories: {
      sharer: {
        title: "공유왕형 – 일상을 부지런히 남기는",
        emoji: "📸",
        desc: "일상 하나하나를 부지런히 기록하고 공유하는 당신. 소소한 순간도 특별하게 만드는 힘이 있어요. 가끔은 올리지 않고 그 순간 자체를 온전히 즐겨보세요.",
      },
      lurker: {
        title: "눈팅형 – 조용히 지켜보는",
        emoji: "👀",
        desc: "직접 올리기보다 구경하는 게 편한 당신. 정보를 얻고 트렌드를 읽는 눈이 밝아요. 가끔은 나의 이야기도 살짝 꺼내보는 것도 재밌을 거예요.",
      },
      curator: {
        title: "큐레이터형 – 취향을 정갈하게 담는",
        emoji: "🗂️",
        desc: "피드 하나하나에 취향과 정성을 담는 당신. 보는 사람도 기분 좋아지는 감각을 가졌어요. 가끔은 완벽하지 않은 순간도 편하게 올려보세요.",
      },
      connector: {
        title: "소통왕형 – 사람과 이어지는 게 즐거운",
        emoji: "💬",
        desc: "게시물보다 사람과의 대화가 즐거운 당신. 댓글과 DM으로 관계를 넓혀가는 힘이 있어요. 온라인만큼 오프라인 만남도 챙겨보세요.",
      },
    },
  },

  {
    id: "chronotype",
    tag: "라이프",
    title: "나의 아침형-저녁형 테스트",
    emoji: "🌅",
    tagline: "나는 아침형 인간일까, 저녁형 인간일까?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "가장 집중이 잘 되는 시간은?",
        options: [
          { text: "이른 아침, 해 뜨기 전", value: "morning" },
          { text: "다들 잠든 늦은 밤", value: "night" },
          { text: "딱히 정해진 시간은 없다", value: "flexible" },
        ],
      },
      {
        text: "알람 없이 눈이 떠지는 시간은?",
        options: [
          { text: "새벽~아침 일찍", value: "morning" },
          { text: "해가 중천에 뜬 뒤", value: "night" },
          { text: "그날그날 다르다", value: "flexible" },
        ],
      },
      {
        text: "주말 늦잠을 잔다면?",
        options: [
          { text: "그래도 평소처럼 일찍 깬다", value: "morning" },
          { text: "오후까지 늘어지게 잔다", value: "night" },
          { text: "평소보다 한두 시간 정도만", value: "flexible" },
        ],
      },
      {
        text: "저녁 약속이 늦게까지 이어지면?",
        options: [
          { text: "피곤해서 빨리 집에 가고 싶다", value: "morning" },
          { text: "오히려 그때부터 텐션이 오른다", value: "night" },
          { text: "상황 봐서 맞춘다", value: "flexible" },
        ],
      },
      {
        text: "중요한 일을 준비하는 타이밍은?",
        options: [
          { text: "전날 일찍 자고 아침에 마무리", value: "morning" },
          { text: "밤새워서라도 끝까지 붙잡는다", value: "night" },
          { text: "여유 있게 미리미리 나눠서", value: "flexible" },
        ],
      },
      {
        text: "커피를 마신다면 주로 언제?",
        options: [
          { text: "하루를 시작하는 아침에", value: "morning" },
          { text: "밤에 마셔도 잠은 잘 온다", value: "night" },
          { text: "필요할 때만 그때그때", value: "flexible" },
        ],
      },
      {
        text: "나의 하루 중 가장 생산적인 시간대는?",
        options: [
          { text: "오전", value: "morning" },
          { text: "밤~새벽", value: "night" },
          { text: "오후, 애매하게 걸쳐서", value: "flexible" },
        ],
      },
      {
        text: "친구들이 나를 표현한다면?",
        options: [
          { text: "일찍 자고 일찍 일어나는 부지런형", value: "morning" },
          { text: "밤에 더 빛나는 올빼미형", value: "night" },
          { text: "그때그때 리듬 타는 유동형", value: "flexible" },
        ],
      },
    ],
    categories: {
      morning: {
        title: "아침형 인간 – 얼리버드",
        emoji: "🌅",
        desc: "해가 뜨면 몸도 마음도 자연스럽게 깨어나는 당신. 오전 시간에 가장 맑은 정신으로 중요한 일들을 척척 해내요. 다만 밤 늦은 일정이 잡히면 컨디션이 급격히 떨어지니, 저녁 약속은 적당한 선에서 조절하는 게 좋아요.",
      },
      night: {
        title: "저녁형 인간 – 올빼미족",
        emoji: "🦉",
        desc: "해가 지고 나서야 진짜 컨디션이 올라오는 당신. 조용한 밤 시간에 집중력과 창의력이 폭발해요. 다만 아침 일정 앞에서는 유독 힘들어하니, 전날 최소한의 수면 시간은 꼭 확보해두세요.",
      },
      flexible: {
        title: "유동형 인간 – 리듬 조율러",
        emoji: "🌗",
        desc: "정해진 리듬보다 그날그날 컨디션에 맞춰 움직이는 당신. 상황에 따라 아침형도 저녁형도 될 수 있는 유연함이 강점이에요. 다만 일정한 루틴이 없으면 생체 리듬이 쉽게 흐트러질 수 있으니, 최소한의 기상·취침 시간은 지켜보세요.",
      },
    },
  },

  {
    id: "leadership",
    tag: "직장생활",
    title: "나의 리더십 스타일 테스트",
    emoji: "🧭",
    tagline: "팀을 이끌 때 진짜 나의 모습은 어떤 리더일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새 프로젝트를 맡았을 때 가장 먼저 하는 것은?",
        options: [
          { text: "팀에게 큰 그림과 목표를 그려서 보여준다", value: "vision" },
          { text: "팀원 개개인의 강점부터 파악한다", value: "coach" },
          { text: "역할과 마감을 명확하게 배분한다", value: "commander" },
          { text: "팀원들이 필요한 게 뭔지 먼저 물어본다", value: "servant" },
        ],
      },
      {
        text: "팀원이 실수를 했을 때?",
        options: [
          { text: "큰 그림에서 벗어나지 않게 방향을 다시 잡아준다", value: "vision" },
          { text: "스스로 깨닫도록 질문을 던진다", value: "coach" },
          { text: "정확히 무엇이 잘못됐는지 짚어준다", value: "commander" },
          { text: "내가 도와줄 부분이 있는지 먼저 챙긴다", value: "servant" },
        ],
      },
      {
        text: "회의를 이끌 때 나의 모습은?",
        options: [
          { text: "큰 비전과 방향성을 계속 상기시킨다", value: "vision" },
          { text: "다양한 의견을 이끌어내는 질문을 던진다", value: "coach" },
          { text: "결론과 액션 아이템을 빠르게 정리한다", value: "commander" },
          { text: "모두가 편하게 말할 수 있는 분위기를 만든다", value: "servant" },
        ],
      },
      {
        text: "팀원이 힘들어 보이면?",
        options: [
          { text: "큰 목표를 다시 상기시켜 동기를 준다", value: "vision" },
          { text: "어떤 성장 포인트가 있을지 함께 고민한다", value: "coach" },
          { text: "업무량을 조정해서 빠르게 해결해준다", value: "commander" },
          { text: "가장 먼저 괜찮은지 마음을 살핀다", value: "servant" },
        ],
      },
      {
        text: "의사결정이 필요한 순간에는?",
        options: [
          { text: "장기적으로 옳은 방향을 우선한다", value: "vision" },
          { text: "팀원들의 의견을 모아 함께 결정한다", value: "coach" },
          { text: "신속하고 단호하게 결정한다", value: "commander" },
          { text: "팀에 가장 도움이 되는 쪽을 고른다", value: "servant" },
        ],
      },
      {
        text: "나의 성과보다 더 신경 쓰이는 것은?",
        options: [
          { text: "팀이 같은 방향을 보고 있는지", value: "vision" },
          { text: "팀원 각자가 성장하고 있는지", value: "coach" },
          { text: "목표한 결과를 제때 냈는지", value: "commander" },
          { text: "팀원들이 편안하게 일하고 있는지", value: "servant" },
        ],
      },
      {
        text: "새로운 팀원이 합류하면?",
        options: [
          { text: "우리 팀이 그리는 큰 비전부터 공유한다", value: "vision" },
          { text: "하나씩 배워갈 수 있게 옆에서 코칭한다", value: "coach" },
          { text: "업무 프로세스와 기준을 명확히 알려준다", value: "commander" },
          { text: "잘 적응할 수 있게 세심하게 챙긴다", value: "servant" },
        ],
      },
      {
        text: "동료들이 나를 평가한다면?",
        options: [
          { text: "\"큰 그림을 보여주는 사람\"", value: "vision" },
          { text: "\"성장하게 도와주는 사람\"", value: "coach" },
          { text: "\"확실하게 이끄는 사람\"", value: "commander" },
          { text: "\"묵묵히 뒤에서 챙겨주는 사람\"", value: "servant" },
        ],
      },
    ],
    categories: {
      vision: {
        title: "비전형 리더 – 방향을 그리는 사람",
        emoji: "🧭",
        desc: "큰 그림을 그리고 팀이 나아갈 방향을 명확히 제시하는 당신. 팀원들에게 영감을 주고 같은 곳을 바라보게 만드는 힘이 있어요. 다만 눈앞의 디테일을 놓칠 수 있으니, 실행 단계에서는 팀원들의 현실적인 의견도 잘 챙겨 들어보세요.",
      },
      coach: {
        title: "코치형 리더 – 성장을 이끄는 사람",
        emoji: "🌱",
        desc: "팀원 한 명 한 명의 성장에 진심인 당신. 질문과 피드백으로 스스로 답을 찾도록 돕는 능력이 탁월해요. 다만 시간이 촉박한 상황에서는 코칭보다 빠른 결정이 필요할 때도 있다는 걸 기억하세요.",
      },
      commander: {
        title: "지휘형 리더 – 확실하게 이끄는 사람",
        emoji: "🎯",
        desc: "명확한 기준과 빠른 결단력으로 팀을 이끄는 당신. 목표 달성과 실행력에서 믿음직한 리더예요. 다만 팀원들의 의견을 듣는 시간을 조금 더 늘리면 팀의 몰입도가 한층 높아질 거예요.",
      },
      servant: {
        title: "서번트형 리더 – 뒤에서 챙기는 사람",
        emoji: "🤲",
        desc: "팀원들이 편하게 일할 수 있도록 뒤에서 든든히 받쳐주는 당신. 사람을 먼저 생각하는 리더십으로 깊은 신뢰를 얻어요. 다만 때로는 앞장서서 결정하고 이끄는 역할도 필요하다는 걸 잊지 마세요.",
      },
    },
  },

  {
    id: "emotion",
    tag: "성격심리",
    title: "나의 감정표현 유형 테스트",
    emoji: "🎭",
    tagline: "감정을 느낄 때, 나는 어떻게 표현하는 사람일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "기쁜 일이 생기면 나는?",
        options: [
          { text: "바로 티가 나게 신나한다", value: "expressive" },
          { text: "속으로 좋아하고 잘 안 드러낸다", value: "reserved" },
          { text: "왜 좋은 일인지 차분히 생각해본다", value: "rational" },
          { text: "주변 사람과 함께 기쁨을 나누고 싶어한다", value: "empathic" },
        ],
      },
      {
        text: "속상한 일이 있을 때?",
        options: [
          { text: "바로 표정과 말에 드러난다", value: "expressive" },
          { text: "혼자 삭이고 티 내지 않는다", value: "reserved" },
          { text: "원인을 분석하며 감정을 정리한다", value: "rational" },
          { text: "누군가에게 털어놓고 위로받고 싶다", value: "empathic" },
        ],
      },
      {
        text: "친구가 슬픈 이야기를 하면?",
        options: [
          { text: "같이 눈물이 날 만큼 감정이입한다", value: "expressive" },
          { text: "묵묵히 옆에서 들어준다", value: "reserved" },
          { text: "문제를 해결할 방법을 같이 생각한다", value: "rational" },
          { text: "그 마음이 어떤지 깊이 공감해준다", value: "empathic" },
        ],
      },
      {
        text: "화가 났을 때 나는?",
        options: [
          { text: "바로 표현하고 금방 푼다", value: "expressive" },
          { text: "오래 담아두고 잘 안 푼다", value: "reserved" },
          { text: "화난 이유를 논리적으로 설명한다", value: "rational" },
          { text: "화보다 서운함이 먼저 앞선다", value: "empathic" },
        ],
      },
      {
        text: "감동적인 영화나 이야기를 보면?",
        options: [
          { text: "눈물이 많고 리액션이 크다", value: "expressive" },
          { text: "마음속으로만 깊이 느낀다", value: "reserved" },
          { text: "스토리의 구조나 메시지를 분석한다", value: "rational" },
          { text: "등장인물의 감정에 깊이 몰입한다", value: "empathic" },
        ],
      },
      {
        text: "나의 감정을 남에게 표현하는 방식은?",
        options: [
          { text: "말과 행동으로 확실하게 드러낸다", value: "expressive" },
          { text: "굳이 말하지 않아도 알아주길 바란다", value: "reserved" },
          { text: "상황을 정리해서 조리 있게 설명한다", value: "rational" },
          { text: "상대의 반응을 살피며 조심스레 표현한다", value: "empathic" },
        ],
      },
      {
        text: "사람들이 나를 표현한다면?",
        options: [
          { text: "\"감정이 얼굴에 다 드러나는 사람\"", value: "expressive" },
          { text: "\"속을 잘 모르겠는 사람\"", value: "reserved" },
          { text: "\"침착하고 이성적인 사람\"", value: "rational" },
          { text: "\"공감을 잘해주는 사람\"", value: "empathic" },
        ],
      },
      {
        text: "스트레스를 해소하는 방식은?",
        options: [
          { text: "소리 지르거나 울면서 감정을 쏟아낸다", value: "expressive" },
          { text: "혼자 조용히 시간을 보내며 삭인다", value: "reserved" },
          { text: "원인을 분석하고 해결책을 찾는다", value: "rational" },
          { text: "누군가와 대화하며 마음을 나눈다", value: "empathic" },
        ],
      },
    ],
    categories: {
      expressive: {
        title: "표현형 – 감정에 솔직한 사람",
        emoji: "🎨",
        desc: "기쁨도 슬픔도 숨기지 않고 솔직하게 표현하는 당신. 감정이 살아있어서 주변 사람들도 당신의 진심을 쉽게 느껴요. 다만 순간의 감정에 휩쓸려 후회할 말이 나올 수 있으니, 한 박자 쉬고 표현하는 연습도 도움이 돼요.",
      },
      reserved: {
        title: "신중형 – 속으로 깊이 느끼는 사람",
        emoji: "🌙",
        desc: "감정을 잘 드러내지 않지만 속으로는 누구보다 깊이 느끼는 당신. 차분하고 안정적인 인상을 주지만, 주변 사람들은 가끔 당신의 진심을 몰라 답답해할 수 있어요. 가끔은 작은 감정이라도 표현해보세요.",
      },
      rational: {
        title: "이성형 – 감정도 분석하는 사람",
        emoji: "🧠",
        desc: "감정이 생기면 그 원인과 이유를 먼저 들여다보는 당신. 침착하게 상황을 정리하는 능력이 뛰어나요. 다만 지나치게 분석하다 감정 자체를 놓칠 수 있으니, 가끔은 그냥 느끼는 대로 두는 것도 필요해요.",
      },
      empathic: {
        title: "공감형 – 함께 느끼는 사람",
        emoji: "🤝",
        desc: "내 감정만큼 상대의 감정에도 깊이 공감하는 당신. 사람들이 마음을 터놓고 싶어하는 존재예요. 다만 타인의 감정에 너무 몰입해 지칠 수 있으니, 나의 감정을 먼저 챙기는 것도 잊지 마세요.",
      },
    },
  },

  {
    id: "cafe",
    tag: "라이프",
    title: "나의 카페 주문 스타일 테스트",
    emoji: "☕",
    tagline: "카페에서 주문하는 방식만 봐도 알 수 있는 나의 성격",
    type: "category",
    compare: true,
    questions: [
      {
        text: "카페에 들어가면 나는?",
        options: [
          { text: "늘 마시던 아메리카노를 바로 주문한다", value: "classic" },
          { text: "디저트 메뉴부터 살펴본다", value: "sweet" },
          { text: "신메뉴가 있는지부터 확인한다", value: "trend" },
          { text: "옵션을 하나하나 커스텀해서 주문한다", value: "custom" },
        ],
      },
      {
        text: "새로운 카페에 가면?",
        options: [
          { text: "시그니처보다 무난한 메뉴를 고른다", value: "classic" },
          { text: "제일 달아 보이는 메뉴를 고른다", value: "sweet" },
          { text: "SNS에서 화제였던 메뉴를 찾는다", value: "trend" },
          { text: "나만의 조합으로 주문할 수 있는지 물어본다", value: "custom" },
        ],
      },
      {
        text: "주문할 때 직원에게 요청하는 것은?",
        options: [
          { text: "거의 없다, 기본 그대로", value: "classic" },
          { text: "시럽이나 휘핑을 추가해달라고 한다", value: "sweet" },
          { text: "요즘 제일 잘 나가는 메뉴를 추천받는다", value: "trend" },
          { text: "얼음 양, 샷 추가 등 세세하게 요청한다", value: "custom" },
        ],
      },
      {
        text: "친구가 카페 메뉴를 고민하면?",
        options: [
          { text: "실패 없는 무난한 메뉴를 추천한다", value: "classic" },
          { text: "제일 달콤한 디저트류를 추천한다", value: "sweet" },
          { text: "요즘 유행하는 신메뉴를 추천한다", value: "trend" },
          { text: "취향에 맞게 커스텀하는 법을 알려준다", value: "custom" },
        ],
      },
      {
        text: "카페 대기줄이 길면?",
        options: [
          { text: "그냥 무난하게 아무거나 시킨다", value: "classic" },
          { text: "디저트라도 하나 건져야 한다는 생각뿐", value: "sweet" },
          { text: "그래도 신메뉴는 꼭 맛본다", value: "trend" },
          { text: "줄이 길어도 원하는 옵션은 꼭 요청한다", value: "custom" },
        ],
      },
      {
        text: "집에서 커피를 마신다면?",
        options: [
          { text: "믹스커피나 아메리카노로 심플하게", value: "classic" },
          { text: "달달한 라떼나 초코음료로", value: "sweet" },
          { text: "요즘 유행하는 레시피를 따라 만든다", value: "trend" },
          { text: "원두, 우유 비율까지 직접 맞춰서", value: "custom" },
        ],
      },
      {
        text: "카페 메뉴판을 볼 때 가장 먼저 보는 것은?",
        options: [
          { text: "늘 마시던 메뉴가 있는지", value: "classic" },
          { text: "디저트나 달콤한 음료 코너", value: "sweet" },
          { text: "새로 나온 시즌 메뉴", value: "trend" },
          { text: "커스텀 옵션이 뭐가 있는지", value: "custom" },
        ],
      },
      {
        text: "사람들이 내 커피 취향을 표현한다면?",
        options: [
          { text: "\"군더더기 없이 심플한 취향\"", value: "classic" },
          { text: "\"디저트 없인 못 사는 단맛 러버\"", value: "sweet" },
          { text: "\"늘 최신 유행을 아는 트렌드세터\"", value: "trend" },
          { text: "\"나만의 방식이 확실한 사람\"", value: "custom" },
        ],
      },
    ],
    categories: {
      classic: {
        title: "클래식파 – 아메리카노 한 잔이면 충분",
        emoji: "☕",
        desc: "화려한 것보다 늘 마시던 익숙한 맛이 편안한 당신. 자신만의 확고한 취향이 있고, 유행에 쉽게 흔들리지 않는 편이에요. 가끔은 새로운 메뉴에 도전해보는 것도 소소한 재미가 될 거예요.",
      },
      sweet: {
        title: "디저트파 – 단맛이 곧 행복",
        emoji: "🍰",
        desc: "카페는 곧 디저트 타임인 당신에게 달콤함은 하루의 힐링이에요. 소소한 것에서 행복을 찾는 감각이 뛰어나죠. 당 섭취는 적당히 조절하는 것도 잊지 마세요.",
      },
      trend: {
        title: "트렌드파 – 유행은 내가 먼저",
        emoji: "✨",
        desc: "새로운 메뉴, 새로운 유행을 누구보다 빠르게 캐치하는 당신. 남들보다 한발 앞서가는 감각이 매력이에요. 가끔은 익숙한 메뉴에서 편안함을 느껴보는 것도 좋아요.",
      },
      custom: {
        title: "커스텀파 – 취향은 내가 만든다",
        emoji: "🎛️",
        desc: "정해진 메뉴보다 나만의 조합을 만드는 게 더 즐거운 당신. 뚜렷한 취향과 디테일을 챙기는 섬세함이 있어요. 가끔은 그냥 메뉴판 그대로 편하게 주문해보는 것도 색다른 즐거움이 될 거예요.",
      },
    },
  },

  {
    id: "gamer",
    tag: "밈",
    title: "나의 게임 캐릭터 유형 테스트",
    emoji: "🎮",
    tagline: "게임 속 나는 딜러, 탱커, 힐러, 서포터 중 어떤 역할일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "팀 게임을 할 때 나의 역할은?",
        options: [
          { text: "앞장서서 공격하고 화력을 낸다", value: "dealer" },
          { text: "맨 앞에서 맞으며 팀을 지킨다", value: "tank" },
          { text: "팀원 상태를 살피며 회복시킨다", value: "healer" },
          { text: "버프, 아이템 등으로 팀을 보조한다", value: "support" },
        ],
      },
      {
        text: "위기 상황이 오면?",
        options: [
          { text: "최대한 빠르게 적을 처치하려 한다", value: "dealer" },
          { text: "몸으로 막아서며 버틴다", value: "tank" },
          { text: "팀원들을 살리는 데 집중한다", value: "healer" },
          { text: "상황을 보조할 방법을 찾는다", value: "support" },
        ],
      },
      {
        text: "게임에서 가장 짜릿한 순간은?",
        options: [
          { text: "큰 데미지로 적을 처치할 때", value: "dealer" },
          { text: "위험한 공격을 대신 막아낼 때", value: "tank" },
          { text: "죽어가는 팀원을 살려낼 때", value: "healer" },
          { text: "결정적인 버프로 승기를 잡을 때", value: "support" },
        ],
      },
      {
        text: "팀원이 위험에 처하면?",
        options: [
          { text: "빠르게 적을 처리해서 상황을 끝낸다", value: "dealer" },
          { text: "몸으로 막아서서 시간을 번다", value: "tank" },
          { text: "즉시 회복 스킬을 사용한다", value: "healer" },
          { text: "보호막이나 이동기로 도와준다", value: "support" },
        ],
      },
      {
        text: "캐릭터를 고를 때 중시하는 것은?",
        options: [
          { text: "강력한 공격력", value: "dealer" },
          { text: "높은 방어력과 체력", value: "tank" },
          { text: "회복과 생존 지원 능력", value: "healer" },
          { text: "팀에 도움 되는 유틸리티 스킬", value: "support" },
        ],
      },
      {
        text: "게임이 잘 안 풀릴 때 나는?",
        options: [
          { text: "더 공격적으로 몰아붙인다", value: "dealer" },
          { text: "묵묵히 버티며 팀을 지킨다", value: "tank" },
          { text: "팀 전체 컨디션부터 챙긴다", value: "healer" },
          { text: "상황을 보조하며 흐름을 바꾸려 한다", value: "support" },
        ],
      },
      {
        text: "팀원들이 나에게 기대하는 것은?",
        options: [
          { text: "확실한 딜, 승부를 끝내는 한 방", value: "dealer" },
          { text: "든든하게 버텨주는 존재감", value: "tank" },
          { text: "팀을 살리는 회복력", value: "healer" },
          { text: "눈에 띄지 않아도 꼭 필요한 도움", value: "support" },
        ],
      },
      {
        text: "현실에서도 나는 어떤 사람에 가까운가?",
        options: [
          { text: "확실한 성과로 앞장서는 사람", value: "dealer" },
          { text: "힘든 일도 묵묵히 버텨내는 사람", value: "tank" },
          { text: "지친 사람을 챙기고 회복시키는 사람", value: "healer" },
          { text: "티 안 나게 뒤에서 도와주는 사람", value: "support" },
        ],
      },
    ],
    categories: {
      dealer: {
        title: "딜러형 – 화력을 책임지는 사람",
        emoji: "⚔️",
        desc: "확실한 성과로 승부를 끝내는 당신. 목표를 향해 거침없이 나아가는 추진력이 최대 강점이에요. 다만 혼자 앞서 나가다 팀과 호흡이 어긋날 수 있으니, 주변과 속도를 맞추는 것도 챙겨보세요.",
      },
      tank: {
        title: "탱커형 – 앞에서 지켜주는 사람",
        emoji: "🛡️",
        desc: "힘든 순간에도 묵묵히 버티며 자리를 지키는 당신. 팀에게 든든한 존재감을 주는 사람이에요. 다만 혼자 다 막아내려다 지칠 수 있으니, 가끔은 뒤로 물러나 쉬어가는 것도 필요해요.",
      },
      healer: {
        title: "힐러형 – 회복을 책임지는 사람",
        emoji: "💚",
        desc: "지친 사람을 알아보고 먼저 챙기는 당신. 곁에 있는 사람들을 회복시키는 따뜻한 힘을 가졌어요. 다만 남을 챙기다 정작 자신의 회복은 뒷전이 되기 쉬우니, 스스로를 돌보는 시간도 꼭 챙기세요.",
      },
      support: {
        title: "서포터형 – 티 안 나게 돕는 사람",
        emoji: "✨",
        desc: "눈에 띄지 않아도 꼭 필요한 순간에 힘이 되어주는 당신. 팀 전체의 흐름을 바꾸는 숨은 주역이에요. 다만 공을 드러내지 않다 보니 존재감이 가려질 수 있으니, 가끔은 자신의 기여도 당당히 표현해보세요.",
      },
    },
  },

  {
    id: "lovelanguage",
    tag: "연애심리",
    title: "5가지 사랑의 언어 테스트",
    emoji: "💌",
    tagline: "내가 사랑을 느끼고 표현하는 방식은 어떤 언어일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "연인에게 사랑받고 있다고 가장 크게 느낄 때는?",
        options: [
          { text: "\"고맙다\", \"잘했다\" 같은 말을 들을 때", value: "words" },
          { text: "온전히 둘만의 시간을 보낼 때", value: "time" },
          { text: "나를 생각하며 준비한 선물을 받을 때", value: "gifts" },
          { text: "나 대신 귀찮은 일을 해줄 때", value: "service" },
          { text: "손을 잡거나 안아줄 때", value: "touch" },
        ],
      },
      {
        text: "연인에게 사랑을 표현하는 나만의 방식은?",
        options: [
          { text: "좋은 말을 자주 해준다", value: "words" },
          { text: "시간을 내서 함께 있으려 한다", value: "time" },
          { text: "선물이나 깜짝 이벤트를 준비한다", value: "gifts" },
          { text: "필요한 걸 먼저 챙겨서 해준다", value: "service" },
          { text: "스킨십으로 애정을 표현한다", value: "touch" },
        ],
      },
      {
        text: "서운함을 가장 크게 느끼는 순간은?",
        options: [
          { text: "칭찬이나 인정의 말이 없을 때", value: "words" },
          { text: "같이 있어도 각자 딴짓을 할 때", value: "time" },
          { text: "기념일에 선물이 없을 때", value: "gifts" },
          { text: "부탁해도 도와주지 않을 때", value: "service" },
          { text: "스킨십에 소극적일 때", value: "touch" },
        ],
      },
      {
        text: "힘든 하루를 보낸 연인에게 나는?",
        options: [
          { text: "위로와 칭찬의 말을 건넨다", value: "words" },
          { text: "옆에서 시간을 함께 보내준다", value: "time" },
          { text: "좋아하는 걸 사다 준다", value: "gifts" },
          { text: "대신 할 일을 처리해준다", value: "service" },
          { text: "꼭 안아준다", value: "touch" },
        ],
      },
      {
        text: "이상적인 기념일은?",
        options: [
          { text: "진심 어린 편지나 말 한마디", value: "words" },
          { text: "방해받지 않는 온전한 데이트", value: "time" },
          { text: "정성스럽게 고른 선물", value: "gifts" },
          { text: "서로를 위해 뭔가를 해주는 하루", value: "service" },
          { text: "꼭 붙어있는 스킨십 가득한 하루", value: "touch" },
        ],
      },
      {
        text: "연인이 바빠서 연락이 뜸하면?",
        options: [
          { text: "그래도 따뜻한 말 한마디면 괜찮다", value: "words" },
          { text: "짧더라도 함께 있는 시간이 아쉽다", value: "time" },
          { text: "작은 선물이라도 챙겨주면 좋겠다", value: "gifts" },
          { text: "사소한 걸 챙겨주면 마음이 풀린다", value: "service" },
          { text: "만나면 꼭 안아주길 바란다", value: "touch" },
        ],
      },
      {
        text: "친구들에게 애정을 표현할 때도?",
        options: [
          { text: "칭찬과 격려의 말을 자주 한다", value: "words" },
          { text: "시간을 내서 자주 만난다", value: "time" },
          { text: "작은 선물을 자주 챙긴다", value: "gifts" },
          { text: "도움이 필요할 때 발 벗고 나선다", value: "service" },
          { text: "스킨십(하이파이브, 포옹)이 자연스럽다", value: "touch" },
        ],
      },
      {
        text: "나에게 최고의 사랑 표현은?",
        options: [
          { text: "\"너라서 고마워\"라는 말", value: "words" },
          { text: "아무것도 안 해도 함께 있는 시간", value: "time" },
          { text: "마음이 담긴 선물", value: "gifts" },
          { text: "필요할 때 곁에서 도와주는 것", value: "service" },
          { text: "따뜻한 포옹 한 번", value: "touch" },
        ],
      },
    ],
    categories: {
      words: {
        title: "인정하는 말형 – 말 한마디의 힘을 아는 사람",
        emoji: "💬",
        desc: "따뜻한 말 한마디에 사랑을 느끼는 당신. 칭찬과 감사의 표현이 관계를 채우는 가장 큰 힘이에요. 연인에게도 마음을 말로 자주 표현해보세요. 듣고 싶은 말을 먼저 해주는 것도 좋은 방법이에요.",
      },
      time: {
        title: "함께하는 시간형 – 온전한 순간이 소중한 사람",
        emoji: "⏳",
        desc: "같이 보내는 시간 자체가 사랑의 증거인 당신. 짧아도 온전히 집중하는 시간이 무엇보다 소중해요. 바쁘더라도 서로에게 온전히 집중하는 시간을 꼭 만들어보세요.",
      },
      gifts: {
        title: "선물형 – 마음이 담긴 물건으로 느끼는 사람",
        emoji: "🎁",
        desc: "정성이 담긴 선물에서 사랑을 느끼는 당신. 값비싼 것보다 '나를 생각했다'는 마음 자체가 중요해요. 작더라도 마음을 담은 선물을 주고받는 걸 즐겨보세요.",
      },
      service: {
        title: "봉사형 – 행동으로 느끼는 사람",
        emoji: "🤲",
        desc: "말보다 행동으로 보여주는 사랑이 와닿는 당신. 상대가 나를 위해 무언가를 해줄 때 가장 큰 사랑을 느껴요. 서로를 위해 작은 일을 대신 해주는 습관을 만들어보세요.",
      },
      touch: {
        title: "스킨십형 – 손끝으로 느끼는 사람",
        emoji: "🤗",
        desc: "포옹이나 손길 같은 스킨십에서 안정감을 느끼는 당신. 신체적 접촉이 곧 사랑의 언어예요. 말이 서툴러도 다정한 스킨십으로 마음을 전해보세요.",
      },
    },
  },

  {
    id: "selfesteem",
    tag: "힐링",
    title: "나의 자존감 테스트",
    emoji: "🌟",
    tagline: "지금 내 마음의 자존감은 얼마나 단단할까요?",
    type: "score",
    compare: true,
    questions: [
      {
        text: "실수를 했을 때 나는?",
        options: [
          { text: "\"역시 난 안 돼\" 라고 자책한다", value: 1 },
          { text: "한동안 마음이 무겁다", value: 2 },
          { text: "그럴 수도 있지 하고 넘긴다", value: 3 },
          { text: "다음엔 더 잘할 수 있다고 생각한다", value: 4 },
        ],
      },
      {
        text: "거울 속 내 모습을 보면?",
        options: [
          { text: "마음에 안 드는 부분만 보인다", value: 1 },
          { text: "좋은 점보다 부족한 점이 먼저 보인다", value: 2 },
          { text: "그냥저냥 괜찮다고 생각한다", value: 3 },
          { text: "나름 마음에 드는 부분이 많다", value: 4 },
        ],
      },
      {
        text: "누군가 나를 칭찬하면?",
        options: [
          { text: "괜히 부담스럽고 믿기지 않는다", value: 1 },
          { text: "예의상 하는 말 같다", value: 2 },
          { text: "고맙게 받아들인다", value: 3 },
          { text: "자연스럽게 인정하고 기뻐한다", value: 4 },
        ],
      },
      {
        text: "남과 나를 비교하게 될 때?",
        options: [
          { text: "늘 내가 부족하다고 느낀다", value: 1 },
          { text: "자주 위축된다", value: 2 },
          { text: "가끔 신경 쓰이지만 곧 잊는다", value: 3 },
          { text: "각자의 길이 다르다고 생각한다", value: 4 },
        ],
      },
      {
        text: "거절을 해야 할 때 나는?",
        options: [
          { text: "미움받을까 봐 거의 못 한다", value: 1 },
          { text: "하고 나서도 계속 신경 쓰인다", value: 2 },
          { text: "조심스럽지만 필요하면 한다", value: 3 },
          { text: "내 기준이 있으면 편하게 거절한다", value: 4 },
        ],
      },
      {
        text: "실패를 경험하면?",
        options: [
          { text: "내 가치 자체가 부정당한 것 같다", value: 1 },
          { text: "오래도록 자신감을 잃는다", value: 2 },
          { text: "속상하지만 곧 털어낸다", value: 3 },
          { text: "배울 점을 찾고 다시 시도한다", value: 4 },
        ],
      },
      {
        text: "혼자 있는 시간에 드는 생각은?",
        options: [
          { text: "내가 잘 살고 있는지 불안하다", value: 1 },
          { text: "남들과 비교하며 초조해진다", value: 2 },
          { text: "그럭저럭 편안하다", value: 3 },
          { text: "온전히 나를 채우는 시간이라 좋다", value: 4 },
        ],
      },
      {
        text: "나 자신에게 해주고 싶은 말은?",
        options: [
          { text: "왜 이렇게밖에 못하냐는 말", value: 1 },
          { text: "좀 더 노력하라는 말", value: 2 },
          { text: "지금도 나쁘지 않다는 말", value: 3 },
          { text: "있는 그대로 충분하다는 말", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "자존감 충전이 필요해요", emoji: "🌱", desc: "요즘 스스로에게 유독 엄격했던 것 같아요. 나의 가치는 성과나 남의 시선으로 결정되지 않는다는 걸 기억해주세요. 작은 성취도 스스로 인정해주는 연습부터 시작해보세요." },
      { min: 15, max: 20, title: "자존감이 흔들리는 시기예요", emoji: "🌤️", desc: "괜찮을 때도 있지만 작은 일에 쉽게 흔들리는 편이에요. 남과 비교하기보다 어제의 나와 비교하는 습관을 들여보면 마음이 한결 편해질 거예요." },
      { min: 21, max: 26, title: "안정적인 자존감을 가지고 있어요", emoji: "🌻", desc: "대체로 나 자신을 잘 받아들이는 편이에요. 가끔 흔들려도 금방 중심을 되찾는 힘이 있어요. 지금의 균형 잡힌 마음가짐을 잘 유지해보세요." },
      { min: 27, max: 32, title: "단단한 자존감의 소유자예요", emoji: "🌳", desc: "나 자신을 있는 그대로 존중하고 인정할 줄 아는 당신. 실패나 비교에도 크게 흔들리지 않는 단단한 마음을 가졌어요. 그 여유를 주변 사람들에게도 나눠주세요." },
    ],
  },

  {
    id: "productivity",
    tag: "자기계발",
    title: "나의 갓생 지수 테스트",
    emoji: "📈",
    tagline: "요즘 내 하루, 얼마나 알차게 채워지고 있을까요?",
    type: "score",
    compare: true,
    questions: [
      {
        text: "아침에 일어나면 가장 먼저 하는 것은?",
        options: [
          { text: "눈뜨자마자 휴대폰부터 본다", value: 1 },
          { text: "조금 미적대다 겨우 일어난다", value: 2 },
          { text: "정해진 루틴대로 움직인다", value: 3 },
          { text: "계획한 목표부터 떠올린다", value: 4 },
        ],
      },
      {
        text: "하루 일과를 계획하는 편인가요?",
        options: [
          { text: "거의 즉흥적으로 움직인다", value: 1 },
          { text: "머릿속으로만 대충 생각한다", value: 2 },
          { text: "간단하게라도 적어둔다", value: 3 },
          { text: "시간 단위로 꼼꼼히 계획한다", value: 4 },
        ],
      },
      {
        text: "운동이나 자기관리는?",
        options: [
          { text: "거의 하지 않는다", value: 1 },
          { text: "마음만 먹고 잘 안 된다", value: 2 },
          { text: "가끔이라도 챙기려 한다", value: 3 },
          { text: "꾸준한 루틴으로 자리 잡았다", value: 4 },
        ],
      },
      {
        text: "목표를 세울 때 나는?",
        options: [
          { text: "목표 자체를 잘 안 세운다", value: 1 },
          { text: "세워도 금방 흐지부지된다", value: 2 },
          { text: "작은 목표는 곧잘 지킨다", value: 3 },
          { text: "장단기 목표를 나눠서 실천한다", value: 4 },
        ],
      },
      {
        text: "잠자리에 들기 전 하루를 돌아보면?",
        options: [
          { text: "오늘 뭘 했는지 기억이 안 난다", value: 1 },
          { text: "시간을 허비한 것 같아 아쉽다", value: 2 },
          { text: "나름 할 일은 했다고 느낀다", value: 3 },
          { text: "뿌듯한 마음으로 하루를 마무리한다", value: 4 },
        ],
      },
      {
        text: "새로운 습관을 만들 때 나는?",
        options: [
          { text: "시도조차 잘 안 한다", value: 1 },
          { text: "며칠 하다 포기한다", value: 2 },
          { text: "조금씩이라도 이어간다", value: 3 },
          { text: "꾸준히 기록하며 습관화한다", value: 4 },
        ],
      },
      {
        text: "시간 관리 앱이나 다이어리 사용은?",
        options: [
          { text: "전혀 쓰지 않는다", value: 1 },
          { text: "받아만 놓고 안 쓴다", value: 2 },
          { text: "가끔 필요할 때 쓴다", value: 3 },
          { text: "매일 습관처럼 활용한다", value: 4 },
        ],
      },
      {
        text: "스스로의 하루를 점수로 매긴다면?",
        options: [
          { text: "늘 낮은 점수를 준다", value: 1 },
          { text: "평균 이하라고 느낀다", value: 2 },
          { text: "평균은 한다고 생각한다", value: 3 },
          { text: "꽤 만족스러운 점수를 준다", value: 4 },
        ],
      },
    ],
    scoreRanges: [
      { min: 8, max: 14, title: "충전이 필요한 널브러짐형", emoji: "🛌", desc: "요즘 하루하루가 유독 늘어지는 편이에요. 무리해서 갓생을 살기보다, 딱 하나만 작은 루틴을 만들어보는 것부터 시작해보세요. 작은 성공이 다음 동력이 될 거예요." },
      { min: 15, max: 20, title: "느슨한 시작형", emoji: "🌱", desc: "마음은 있지만 실천이 아직 서툰 편이에요. 거창한 계획보다 5분짜리 작은 습관 하나를 꾸준히 이어가 보세요. 완벽보다 꾸준함이 먼저예요." },
      { min: 21, max: 26, title: "꾸준한 루틴형", emoji: "📅", desc: "나름의 루틴을 가지고 하루하루를 채워가는 당신. 계획한 것들을 착실히 해내는 편이에요. 가끔은 무리하지 않고 쉬어가는 여유도 챙겨보세요." },
      { min: 27, max: 32, title: "완전 갓생러", emoji: "🏆", desc: "계획하고, 실천하고, 기록까지 하는 완벽한 갓생 루틴을 가진 당신. 스스로를 성장시키는 힘이 대단해요. 가끔은 계획 없이 쉬어가는 하루도 소중하다는 걸 잊지 마세요." },
    ],
  },

  {
    id: "moviegenre",
    tag: "취향",
    title: "나의 인생 영화 장르 테스트",
    emoji: "🎬",
    tagline: "내 삶을 영화로 만든다면 어떤 장르일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "주말에 보고 싶은 영화 장르는?",
        options: [
          { text: "설레는 로맨스", value: "romance" },
          { text: "빵빵 터지는 코미디", value: "comedy" },
          { text: "손에 땀을 쥐는 액션", value: "action" },
          { text: "마음을 울리는 드라마", value: "drama" },
        ],
      },
      {
        text: "인생에서 가장 중요한 가치는?",
        options: [
          { text: "사랑과 감정", value: "romance" },
          { text: "즐거움과 유머", value: "comedy" },
          { text: "도전과 성취", value: "action" },
          { text: "의미와 성장", value: "drama" },
        ],
      },
      {
        text: "스트레스를 풀 때 나는?",
        options: [
          { text: "좋아하는 사람과 시간을 보낸다", value: "romance" },
          { text: "실컷 웃고 떠든다", value: "comedy" },
          { text: "몸을 움직이며 발산한다", value: "action" },
          { text: "조용히 생각을 정리한다", value: "drama" },
        ],
      },
      {
        text: "친구들 사이에서 나의 포지션은?",
        options: [
          { text: "연애 상담을 도맡는 편", value: "romance" },
          { text: "분위기를 띄우는 개그 담당", value: "comedy" },
          { text: "뭐든 앞장서서 이끄는 편", value: "action" },
          { text: "진지한 고민을 들어주는 편", value: "drama" },
        ],
      },
      {
        text: "인생의 위기가 닥치면?",
        options: [
          { text: "사랑하는 사람을 먼저 떠올린다", value: "romance" },
          { text: "웃음으로 이겨내려 한다", value: "comedy" },
          { text: "정면으로 부딪혀 돌파한다", value: "action" },
          { text: "깊이 성찰하며 답을 찾는다", value: "drama" },
        ],
      },
      {
        text: "좋아하는 이야기의 결말은?",
        options: [
          { text: "해피엔딩 사랑 이야기", value: "romance" },
          { text: "유쾌하게 웃으며 끝나는 이야기", value: "comedy" },
          { text: "짜릿한 승리로 끝나는 이야기", value: "action" },
          { text: "여운이 남는 감동적인 이야기", value: "drama" },
        ],
      },
      {
        text: "나를 한 단어로 표현한다면?",
        options: [
          { text: "다정함", value: "romance" },
          { text: "유쾌함", value: "comedy" },
          { text: "열정", value: "action" },
          { text: "진솔함", value: "drama" },
        ],
      },
      {
        text: "인생 최고의 순간은 언제였나?",
        options: [
          { text: "누군가와 사랑에 빠졌을 때", value: "romance" },
          { text: "사람들과 배꼽 잡고 웃었을 때", value: "comedy" },
          { text: "큰 도전에 성공했을 때", value: "action" },
          { text: "진짜 나를 발견했을 때", value: "drama" },
        ],
      },
    ],
    categories: {
      romance: {
        title: "로맨스 – 사랑이 이끄는 인생",
        emoji: "💕",
        desc: "관계와 감정을 소중히 여기는 당신의 인생은 설렘 가득한 로맨스 영화 같아요. 사람과의 깊은 연결에서 삶의 의미를 찾는 편이에요. 가끔은 나 혼자만의 서사도 소중히 여겨보세요.",
      },
      comedy: {
        title: "코미디 – 웃음이 넘치는 인생",
        emoji: "😂",
        desc: "어떤 상황에서도 유머를 잃지 않는 당신의 인생은 유쾌한 코미디 영화 같아요. 주변 사람들에게 웃음을 주는 힘을 가졌어요. 가끔은 진지한 순간도 피하지 말고 마주해보세요.",
      },
      action: {
        title: "액션 – 도전으로 가득한 인생",
        emoji: "💥",
        desc: "끊임없이 도전하고 부딪히는 당신의 인생은 짜릿한 액션 영화 같아요. 목표를 향해 거침없이 나아가는 추진력이 매력이에요. 가끔은 잠시 멈춰 숨을 고르는 것도 필요해요.",
      },
      drama: {
        title: "휴먼드라마 – 성장으로 채워진 인생",
        emoji: "🎭",
        desc: "깊이 고민하고 성찰하며 나아가는 당신의 인생은 잔잔한 감동을 주는 드라마 같아요. 진솔함으로 사람들의 마음을 움직여요. 가끔은 가볍게 즐기는 순간도 스스로에게 허락해주세요.",
      },
    },
  },

  {
    id: "energytype",
    tag: "관계심리",
    title: "나의 관계 에너지 유형 테스트",
    emoji: "🔋",
    tagline: "관계 속에서 나는 에너지를 주는 사람일까, 채우는 사람일까?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "친구와 만나고 집에 돌아오면?",
        options: [
          { text: "뿌듯하지만 살짝 지친다", value: "giver" },
          { text: "에너지가 오히려 채워진다", value: "taker" },
          { text: "적당히 좋고 적당히 피곤하다", value: "balanced" },
        ],
      },
      {
        text: "모임에서 나의 역할은?",
        options: [
          { text: "분위기를 챙기고 사람들을 살핀다", value: "giver" },
          { text: "자연스럽게 대접받고 힘을 얻는다", value: "taker" },
          { text: "상황에 따라 주기도 받기도 한다", value: "balanced" },
        ],
      },
      {
        text: "힘든 친구의 이야기를 들을 때?",
        options: [
          { text: "내 감정보다 상대를 먼저 살핀다", value: "giver" },
          { text: "들어주는 게 버겁게 느껴질 때가 있다", value: "taker" },
          { text: "공감하되 적당한 선을 지킨다", value: "balanced" },
        ],
      },
      {
        text: "관계에서 지칠 때 나는?",
        options: [
          { text: "그래도 상대를 먼저 챙긴다", value: "giver" },
          { text: "내가 채워질 때까지 거리를 둔다", value: "taker" },
          { text: "스스로를 먼저 돌본 후 다시 다가간다", value: "balanced" },
        ],
      },
      {
        text: "부탁을 받으면 나는?",
        options: [
          { text: "웬만하면 다 들어주려 한다", value: "giver" },
          { text: "내키지 않으면 잘 거절한다", value: "taker" },
          { text: "상황을 보고 적당히 조율한다", value: "balanced" },
        ],
      },
      {
        text: "사람들이 나를 찾는 이유는?",
        options: [
          { text: "이야기를 잘 들어주고 챙겨줘서", value: "giver" },
          { text: "함께 있으면 즐겁고 힘이 나서", value: "taker" },
          { text: "편안하고 균형 잡힌 사람이라서", value: "balanced" },
        ],
      },
      {
        text: "연애나 우정에서 나는?",
        options: [
          { text: "늘 더 많이 주는 편인 것 같다", value: "giver" },
          { text: "받는 것에 더 익숙한 편이다", value: "taker" },
          { text: "주고받는 게 비교적 균형 잡혀있다", value: "balanced" },
        ],
      },
      {
        text: "관계에서 가장 중요한 건?",
        options: [
          { text: "상대를 챙기고 배려하는 마음", value: "giver" },
          { text: "나에게 힘이 되어주는 관계", value: "taker" },
          { text: "서로에게 도움이 되는 균형", value: "balanced" },
        ],
      },
    ],
    categories: {
      giver: {
        title: "기버형 – 먼저 채워주는 사람",
        emoji: "🌷",
        desc: "관계 속에서 늘 먼저 챙기고 배려하는 당신. 곁에 있는 사람들에게 큰 힘이 되어주는 존재예요. 다만 계속 주기만 하면 쉽게 지칠 수 있으니, 나를 채워주는 관계도 곁에 두는 게 중요해요.",
      },
      taker: {
        title: "테이커형 – 에너지를 채우는 사람",
        emoji: "🔋",
        desc: "관계에서 자연스럽게 힘을 얻고 채워지는 당신. 좋은 에너지를 받아들이는 데 능숙해요. 가끔은 상대에게도 먼저 마음을 써주는 연습을 해보면 관계가 더 풍성해질 거예요.",
      },
      balanced: {
        title: "밸런스형 – 주고받음이 균형 잡힌 사람",
        emoji: "⚖️",
        desc: "관계 속에서 주는 것과 받는 것의 균형을 잘 맞추는 당신. 건강하고 지속 가능한 관계를 만드는 힘이 있어요. 지금처럼 스스로를 먼저 살피는 균형 감각을 잘 유지해보세요.",
      },
    },
  },

  {
    id: "fashion",
    tag: "패션",
    title: "나의 패션 스타일 테스트",
    emoji: "👗",
    tagline: "옷장만 봐도 알 수 있는 진짜 나의 스타일은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "옷을 고를 때 가장 중요하게 생각하는 것은?",
        options: [
          { text: "편안함과 활동성", value: "casual" },
          { text: "깔끔한 핏과 정돈된 느낌", value: "minimal" },
          { text: "남들과 다른 개성", value: "street" },
          { text: "부드럽고 여성스러운 느낌", value: "romantic" },
        ],
      },
      {
        text: "옷장을 열어보면 가장 많은 아이템은?",
        options: [
          { text: "후드티, 맨투맨", value: "casual" },
          { text: "무채색 셔츠와 슬랙스", value: "minimal" },
          { text: "그래픽 티셔츠, 볼캡", value: "street" },
          { text: "플라워 원피스, 블라우스", value: "romantic" },
        ],
      },
      {
        text: "쇼핑할 때 나는?",
        options: [
          { text: "편하게 걸칠 수 있는 옷 위주로 고른다", value: "casual" },
          { text: "핏과 소재를 꼼꼼히 따진다", value: "minimal" },
          { text: "한정판이나 특이한 아이템에 끌린다", value: "street" },
          { text: "예쁘고 러블리한 디자인에 끌린다", value: "romantic" },
        ],
      },
      {
        text: "데이트할 때 즐겨 입는 스타일은?",
        options: [
          { text: "청바지에 편한 티셔츠", value: "casual" },
          { text: "깔끔한 셋업이나 니트", value: "minimal" },
          { text: "트렌디한 레이어드 룩", value: "street" },
          { text: "원피스나 스커트", value: "romantic" },
        ],
      },
      {
        text: "좋아하는 신발 스타일은?",
        options: [
          { text: "운동화, 스니커즈", value: "casual" },
          { text: "심플한 로퍼나 단화", value: "minimal" },
          { text: "볼드한 디자인의 하이탑", value: "street" },
          { text: "리본이나 플랫슈즈", value: "romantic" },
        ],
      },
      {
        text: "액세서리에 대한 나의 생각은?",
        options: [
          { text: "거의 안 하는 편이다", value: "casual" },
          { text: "미니멀한 아이템 한두 개만", value: "minimal" },
          { text: "체인, 볼캡 등으로 포인트를 준다", value: "street" },
          { text: "귀걸이, 목걸이로 러블리하게", value: "romantic" },
        ],
      },
      {
        text: "친구들이 내 스타일을 표현한다면?",
        options: [
          { text: "편안하고 자연스러운", value: "casual" },
          { text: "깔끔하고 세련된", value: "minimal" },
          { text: "개성 있고 힙한", value: "street" },
          { text: "여리여리하고 사랑스러운", value: "romantic" },
        ],
      },
      {
        text: "옷을 살 때 가장 많이 찾는 색은?",
        options: [
          { text: "무난한 데님, 그레이", value: "casual" },
          { text: "블랙, 화이트, 베이지", value: "minimal" },
          { text: "비비드하거나 강렬한 컬러", value: "street" },
          { text: "파스텔톤, 핑크 계열", value: "romantic" },
        ],
      },
    ],
    categories: {
      casual: {
        title: "캐주얼 – 편안함이 진짜 스타일",
        emoji: "👕",
        desc: "편안함과 자연스러움을 가장 중요하게 생각하는 당신. 꾸미지 않아도 매력이 넘치는 자유로운 감각을 지녔어요. 가끔은 포인트 아이템 하나로 새로운 분위기를 내보는 것도 즐거운 변화가 될 거예요.",
      },
      minimal: {
        title: "미니멀 – 심플함 속의 세련미",
        emoji: "🤍",
        desc: "군더더기 없는 깔끔함을 추구하는 당신은 어디서나 정돈된 인상을 남겨요. 소재와 핏을 세심하게 챙기는 안목이 진짜 강점이죠. 가끔은 과감한 컬러나 아이템으로 포인트를 줘보는 것도 새로운 매력이 될 수 있어요.",
      },
      street: {
        title: "스트리트 – 나만의 개성 폭발",
        emoji: "🧢",
        desc: "트렌드를 앞서가며 자신만의 개성을 뚜렷하게 표현하는 당신. 남들과 다른 아이템을 두려움 없이 소화하는 자신감이 매력이에요. 가끔은 힘을 뺀 심플한 룩도 시도해보면 스타일의 폭이 더 넓어질 거예요.",
      },
      romantic: {
        title: "로맨틱 – 사랑스러운 무드메이커",
        emoji: "🌸",
        desc: "부드럽고 여성스러운 무드로 주변을 사랑스럽게 물들이는 당신. 디테일 하나하나에서 섬세한 감성이 묻어나요. 가끔은 러프한 아이템을 매치해 보면 반전 매력을 보여줄 수 있을 거예요.",
      },
    },
  },

  {
    id: "gift",
    tag: "선물",
    title: "나의 선물 스타일 테스트",
    emoji: "🎁",
    tagline: "선물 고르는 방식에 진짜 성격이 담겨있어요",
    type: "category",
    compare: true,
    questions: [
      {
        text: "선물을 고를 때 가장 먼저 생각하는 것은?",
        options: [
          { text: "그 사람과의 추억이나 의미", value: "thoughtful" },
          { text: "평소에 필요하다고 했던 것", value: "practical" },
          { text: "어떻게 하면 더 감동적으로 전달할지", value: "event" },
          { text: "예산은 상관없이 최고로 좋은 것", value: "flex" },
        ],
      },
      {
        text: "생일 선물을 준비하는 기간은?",
        options: [
          { text: "몇 주 전부터 의미를 고민한다", value: "thoughtful" },
          { text: "필요한 거 물어보고 바로 산다", value: "practical" },
          { text: "깜짝 이벤트를 몰래 기획한다", value: "event" },
          { text: "예산 크게 잡고 통 크게 지른다", value: "flex" },
        ],
      },
      {
        text: "선물과 함께 챙기는 것은?",
        options: [
          { text: "손편지나 진심 담은 메시지", value: "thoughtful" },
          { text: "교환 가능하게 영수증도 함께", value: "practical" },
          { text: "풍선, 케이크 같은 이벤트 소품", value: "event" },
          { text: "포장부터 고급스럽게", value: "flex" },
        ],
      },
      {
        text: "선물 예산을 정할 때 나는?",
        options: [
          { text: "가격보다 마음이 중요하다고 생각한다", value: "thoughtful" },
          { text: "합리적인 선에서 고민한다", value: "practical" },
          { text: "분위기 연출 비용까지 고려한다", value: "event" },
          { text: "예산 제한 없이 통 크게 쓴다", value: "flex" },
        ],
      },
      {
        text: "상대가 선물을 받고 가장 좋아했으면 하는 포인트는?",
        options: [
          { text: "'나를 이렇게까지 생각해줬구나' 하는 마음", value: "thoughtful" },
          { text: "'진짜 필요했던 거였어' 하는 반응", value: "practical" },
          { text: "'완전 깜짝 놀랐잖아' 하는 반응", value: "event" },
          { text: "'이걸 나한테?!' 하는 놀란 반응", value: "flex" },
        ],
      },
      {
        text: "친구가 선물 취향을 모르겠다고 하면 나의 조언은?",
        options: [
          { text: "평소 관심사를 잘 관찰해보라고 한다", value: "thoughtful" },
          { text: "위시리스트를 물어보라고 한다", value: "practical" },
          { text: "서프라이즈로 감동을 주라고 한다", value: "event" },
          { text: "그냥 비싼 걸로 사면 다 좋아한다고 한다", value: "flex" },
        ],
      },
      {
        text: "선물을 받았을 때 나는?",
        options: [
          { text: "의미를 곱씹으며 오래 간직한다", value: "thoughtful" },
          { text: "바로 유용하게 쓴다", value: "practical" },
          { text: "이벤트 자체가 기억에 남는다", value: "event" },
          { text: "가격이나 브랜드에 눈이 먼저 간다", value: "flex" },
        ],
      },
      {
        text: "커플이나 친구 사이 선물에서 가장 중요한 건?",
        options: [
          { text: "진심이 담긴 스토리", value: "thoughtful" },
          { text: "실생활에 도움이 되는 것", value: "practical" },
          { text: "잊지 못할 순간을 만드는 것", value: "event" },
          { text: "화끈하게 통 크게 쏘는 것", value: "flex" },
        ],
      },
    ],
    categories: {
      thoughtful: {
        title: "감동파 – 마음을 전하는 선물",
        emoji: "💌",
        desc: "선물 하나에도 상대와의 추억과 진심을 담아내는 당신. 받는 사람이 감동할 만큼 세심한 배려가 느껴져요. 가끔은 부담 갖지 말고 가볍게 선물해보는 것도 좋아요.",
      },
      practical: {
        title: "실용파 – 꼭 필요한 걸 챙기는",
        emoji: "🧰",
        desc: "겉치레보다 상대에게 실제로 도움이 되는 걸 챙기는 당신. 현실적인 센스 덕분에 늘 만족도 높은 선물을 골라요. 가끔은 짧은 편지 한 장을 더해보면 감동이 배가 될 거예요.",
      },
      event: {
        title: "이벤트파 – 서프라이즈 장인",
        emoji: "🎉",
        desc: "깜짝 이벤트와 분위기 연출로 특별한 순간을 만드는 당신. 준비 과정 자체를 즐기는 로맨티스트예요. 가끔은 힘을 빼고 소소하게 선물하는 것도 관계에 여유를 줄 수 있어요.",
      },
      flex: {
        title: "플렉스파 – 통 크게 쏘는 스타일",
        emoji: "💎",
        desc: "마음을 표현할 때는 화끈하게, 아낌없이 쏘는 당신. 통 큰 선물로 상대를 확실하게 감동시켜요. 가끔은 작은 정성이 담긴 선물도 큰 울림을 줄 수 있다는 걸 기억해보세요.",
      },
    },
  },

  {
    id: "learningstyle",
    tag: "자기계발",
    title: "나의 학습 스타일 테스트",
    emoji: "📚",
    tagline: "나에게 딱 맞는 공부법, 알고 있나요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새로운 내용을 배울 때 가장 잘 이해되는 방법은?",
        options: [
          { text: "그림이나 도표로 보여줄 때", value: "visual" },
          { text: "설명을 직접 들을 때", value: "auditory" },
          { text: "글로 정리된 자료를 읽을 때", value: "reading" },
          { text: "직접 해보면서 몸으로 익힐 때", value: "kinesthetic" },
        ],
      },
      {
        text: "수업이나 강의를 들을 때 나의 필기 스타일은?",
        options: [
          { text: "색깔펜과 화살표로 구조도를 그린다", value: "visual" },
          { text: "필기보다 귀로 듣는 데 집중한다", value: "auditory" },
          { text: "문장으로 꼼꼼하게 받아 적는다", value: "reading" },
          { text: "필기는 대충 하고 실습 시간을 기다린다", value: "kinesthetic" },
        ],
      },
      {
        text: "낯선 길을 찾아갈 때 나는?",
        options: [
          { text: "지도를 눈으로 보며 이동한다", value: "visual" },
          { text: "사람들에게 물어보며 이동한다", value: "auditory" },
          { text: "글로 된 안내문을 찾아 읽는다", value: "reading" },
          { text: "일단 걸어보며 감으로 찾는다", value: "kinesthetic" },
        ],
      },
      {
        text: "새 가전제품을 샀을 때 나는?",
        options: [
          { text: "그림 설명서부터 살펴본다", value: "visual" },
          { text: "유튜브 설명 영상을 틀어놓고 듣는다", value: "auditory" },
          { text: "설명서 글을 처음부터 끝까지 읽는다", value: "reading" },
          { text: "일단 버튼을 눌러보며 익힌다", value: "kinesthetic" },
        ],
      },
      {
        text: "시험 공부할 때 가장 효과적인 방법은?",
        options: [
          { text: "마인드맵이나 표로 정리한다", value: "visual" },
          { text: "소리 내어 읽거나 녹음해서 듣는다", value: "auditory" },
          { text: "요약 노트를 반복해서 읽는다", value: "reading" },
          { text: "문제를 직접 풀어보며 익힌다", value: "kinesthetic" },
        ],
      },
      {
        text: "친구에게 무언가를 설명할 때 나는?",
        options: [
          { text: "그림을 그려가며 설명한다", value: "visual" },
          { text: "말로 차근차근 설명한다", value: "auditory" },
          { text: "관련 자료를 찾아서 보여준다", value: "reading" },
          { text: "직접 해보라고 시켜본다", value: "kinesthetic" },
        ],
      },
      {
        text: "가장 오래 기억에 남는 학습 경험은?",
        options: [
          { text: "인상 깊었던 이미지나 영상", value: "visual" },
          { text: "흥미로웠던 강의나 대화", value: "auditory" },
          { text: "감명 깊게 읽은 글", value: "reading" },
          { text: "직접 몸으로 부딪혀본 경험", value: "kinesthetic" },
        ],
      },
      {
        text: "집중이 잘 안 될 때 나는?",
        options: [
          { text: "도표나 색으로 내용을 재정리한다", value: "visual" },
          { text: "소리 내어 읽거나 누군가와 이야기한다", value: "auditory" },
          { text: "조용히 앉아 글을 다시 읽는다", value: "reading" },
          { text: "자리에서 일어나 움직이며 다시 시도한다", value: "kinesthetic" },
        ],
      },
    ],
    categories: {
      visual: {
        title: "시각형 – 눈으로 익히는 학습자",
        emoji: "🎨",
        desc: "그림, 색, 구조도로 정보를 정리할 때 가장 잘 이해하는 당신. 복잡한 내용도 이미지로 바꾸면 금방 감이 잡히는 편이에요. 가끔은 소리 내어 말하거나 글로 옮겨보면 기억이 더 오래갈 거예요.",
      },
      auditory: {
        title: "청각형 – 귀로 배우는 학습자",
        emoji: "🎧",
        desc: "설명을 듣거나 대화하면서 이해가 쏙쏙 되는 당신. 강의나 토론 속에서 몰입도가 특히 높아지는 편이에요. 가끔은 핵심을 간단히 메모해두면 나중에 다시 떠올리기 훨씬 편해질 거예요.",
      },
      reading: {
        title: "읽기형 – 글로 정리하는 학습자",
        emoji: "📖",
        desc: "차분히 글을 읽고 정리하면서 지식을 쌓아가는 당신. 스스로 요약하고 되짚어보는 힘이 큰 강점이에요. 가끔은 소리 내어 읽거나 그림으로 바꿔보면 이해가 한층 깊어질 거예요.",
      },
      kinesthetic: {
        title: "활동형 – 몸으로 익히는 학습자",
        emoji: "🏃",
        desc: "직접 해보고 부딪혀보면서 가장 확실하게 배우는 당신. 이론보다 실전에서 감을 빨리 잡는 타입이에요. 가끔은 잠깐 멈춰서 핵심 내용을 글로 정리해보면 배운 걸 더 오래 간직할 수 있을 거예요.",
      },
    },
  },

  {
    id: "decision",
    tag: "성격심리",
    title: "나의 선택 유형 테스트",
    emoji: "🧭",
    tagline: "인생의 갈림길, 당신은 어떻게 결정하나요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "카페에서 메뉴를 고를 때 나는?",
        options: [
          { text: "딱 봐도 맛있어 보이는 걸 바로 고른다", value: "intuition" },
          { text: "리뷰와 별점을 꼼꼼히 비교해본다", value: "analysis" },
          { text: "먹어본 적 있는 안전한 메뉴를 고른다", value: "caution" },
          { text: "옆 사람이 뭐 시키는지 먼저 물어본다", value: "depend" },
        ],
      },
      {
        text: "큰돈 들여 물건을 살 때 나는?",
        options: [
          { text: "마음에 확 꽂히면 바로 지른다", value: "intuition" },
          { text: "여러 제품을 비교하고 스펙을 따진다", value: "analysis" },
          { text: "며칠이고 고민하다 결정한다", value: "caution" },
          { text: "주변에 뭐가 좋은지 물어보고 산다", value: "depend" },
        ],
      },
      {
        text: "새 학기나 새 직장처럼 중요한 선택을 앞두고 나는?",
        options: [
          { text: "느낌이 좋은 쪽으로 마음이 기운다", value: "intuition" },
          { text: "장단점을 표로 정리해본다", value: "analysis" },
          { text: "최대한 정보를 모으고 늦게 결정한다", value: "caution" },
          { text: "가까운 사람의 조언에 많이 좌우된다", value: "depend" },
        ],
      },
      {
        text: "친구와 영화를 고를 때 나는?",
        options: [
          { text: "포스터나 제목 느낌으로 바로 고른다", value: "intuition" },
          { text: "평점과 줄거리를 검색해본다", value: "analysis" },
          { text: "안 봐서 후회 없을 확실한 걸 고른다", value: "caution" },
          { text: "친구가 보고 싶다는 걸 따라간다", value: "depend" },
        ],
      },
      {
        text: "여행 일정을 짤 때 나는?",
        options: [
          { text: "가서 끌리는 대로 움직인다", value: "intuition" },
          { text: "동선과 시간을 촘촘히 계산한다", value: "analysis" },
          { text: "후기 좋은 코스로만 다닌다", value: "caution" },
          { text: "동행자가 원하는 일정에 맞춘다", value: "depend" },
        ],
      },
      {
        text: "옷을 고를 때 나는?",
        options: [
          { text: "입어보고 느낌 오면 바로 산다", value: "intuition" },
          { text: "코디를 미리 머릿속으로 그려본다", value: "analysis" },
          { text: "무난하게 오래 입을 것 위주로 고른다", value: "caution" },
          { text: "다른 사람 의견을 들어보고 정한다", value: "depend" },
        ],
      },
      {
        text: "결정을 내린 후 나는?",
        options: [
          { text: "웬만하면 잘 안 돌아본다", value: "intuition" },
          { text: "결과를 따져보고 다음에 반영한다", value: "analysis" },
          { text: "혹시 더 나은 선택이 있었는지 계속 생각한다", value: "caution" },
          { text: "주변 반응을 보고 안심하거나 불안해한다", value: "depend" },
        ],
      },
      {
        text: "갑자기 계획이 틀어지면 나는?",
        options: [
          { text: "그때그때 새로 정하면 되지!", value: "intuition" },
          { text: "대안을 빠르게 다시 계산한다", value: "analysis" },
          { text: "일단 멈추고 신중하게 재검토한다", value: "caution" },
          { text: "같이 있는 사람과 상의해서 정한다", value: "depend" },
        ],
      },
    ],
    categories: {
      intuition: {
        title: "직감형 – 순간의 촉을 믿는 사람",
        emoji: "⚡",
        desc: "당신은 복잡하게 재기보다 마음이 이끄는 대로 빠르게 결정하는 편이에요. 그 순발력 덕분에 기회를 놓치지 않고 스트레스도 덜 받죠. 가끔은 중요한 선택 앞에서 한 박자 쉬며 정보를 점검해보는 것도 도움이 될 거예요.",
      },
      analysis: {
        title: "분석형 – 근거로 판단하는 전략가",
        emoji: "📊",
        desc: "당신은 감보다 데이터와 논리를 믿고 차근차근 비교한 뒤 결정하는 사람이에요. 덕분에 후회 없는 선택을 할 확률이 높고 주변에서도 신뢰를 받아요. 다만 너무 오래 재다가 타이밍을 놓치지 않도록 스스로 마감 시간을 정해보세요.",
      },
      caution: {
        title: "신중형 – 돌다리도 두드리는 사람",
        emoji: "🐢",
        desc: "당신은 실수를 줄이기 위해 충분히 고민하고 안전한 선택을 선호하는 편이에요. 그 신중함 덕분에 큰 위험은 잘 피해가지만, 고민이 길어지면 오히려 지치기 쉬워요. 결정에 '마감 시한'을 정해두면 한결 가벼워질 거예요.",
      },
      depend: {
        title: "의존형 – 함께 결정하는 조율자",
        emoji: "🤝",
        desc: "당신은 주변 사람의 의견을 소중히 여기고 함께 결정할 때 더 확신을 갖는 편이에요. 그 덕분에 관계 속에서 균형 잡힌 선택을 잘 해내죠. 가끔은 온전히 내 마음의 소리에 귀 기울여 스스로 결정해보는 연습도 해보세요.",
      },
    },
  },

  {
    id: "interior",
    tag: "라이프",
    title: "나의 인테리어 취향 테스트",
    emoji: "🛋️",
    tagline: "내 방을 보면 알 수 있는 진짜 나의 취향은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새 집으로 이사한다면 가장 먼저 사고 싶은 가구는?",
        options: [
          { text: "깔끔한 화이트 소파", value: "minimal" },
          { text: "튼튼한 원목 테이블", value: "natural" },
          { text: "세월이 느껴지는 앤틱 서랍장", value: "vintage" },
          { text: "폭신한 러그와 쿠션", value: "cozy" },
        ],
      },
      {
        text: "방을 꾸밀 때 가장 중요하게 생각하는 것은?",
        options: [
          { text: "불필요한 물건은 최소화", value: "minimal" },
          { text: "자연 소재가 주는 편안함", value: "natural" },
          { text: "나만의 개성과 스토리", value: "vintage" },
          { text: "아늑하고 따뜻한 분위기", value: "cozy" },
        ],
      },
      {
        text: "좋아하는 색감 조합은?",
        options: [
          { text: "화이트와 그레이", value: "minimal" },
          { text: "베이지와 우드톤", value: "natural" },
          { text: "짙은 브라운과 골드", value: "vintage" },
          { text: "파스텔톤과 웜톤 조명", value: "cozy" },
        ],
      },
      {
        text: "인테리어 소품을 고를 때 나는?",
        options: [
          { text: "있는 듯 없는 듯 심플한 디자인을 고른다", value: "minimal" },
          { text: "식물이나 라탄 소재 소품을 고른다", value: "natural" },
          { text: "벼룩시장에서 오래된 물건을 찾는다", value: "vintage" },
          { text: "캔들이나 담요 같은 감성 소품을 고른다", value: "cozy" },
        ],
      },
      {
        text: "조명을 고를 때 나는?",
        options: [
          { text: "매립등처럼 깔끔한 조명을 선호한다", value: "minimal" },
          { text: "은은한 우드 스탠드 조명을 선호한다", value: "natural" },
          { text: "클래식한 샹들리에 느낌을 선호한다", value: "vintage" },
          { text: "노란빛 무드등을 여러 개 켜둔다", value: "cozy" },
        ],
      },
      {
        text: "SNS에서 저장해두는 인테리어 사진은?",
        options: [
          { text: "군더더기 없는 화이트 톤의 집", value: "minimal" },
          { text: "초록 식물이 가득한 집", value: "natural" },
          { text: "유럽 감성이 느껴지는 빈티지 룸", value: "vintage" },
          { text: "이불 속처럼 포근한 침실", value: "cozy" },
        ],
      },
      {
        text: "손님이 온다면 가장 자신 있게 보여주고 싶은 공간은?",
        options: [
          { text: "정돈된 미니멀 거실", value: "minimal" },
          { text: "식물로 꾸민 베란다", value: "natural" },
          { text: "소장품이 진열된 책장", value: "vintage" },
          { text: "폭신한 침대와 조명이 있는 방", value: "cozy" },
        ],
      },
      {
        text: "이상적인 주말 집콕 분위기는?",
        options: [
          { text: "깔끔하게 정리하고 여유롭게 보내기", value: "minimal" },
          { text: "창문 열고 식물 돌보며 바람 쐬기", value: "natural" },
          { text: "좋아하는 LP나 오래된 책 읽기", value: "vintage" },
          { text: "이불 덮고 영화 보며 뒹굴기", value: "cozy" },
        ],
      },
    ],
    categories: {
      minimal: {
        title: "미니멀 심플형 – 군더더기 없는 공간",
        emoji: "🤍",
        desc: "불필요한 것은 덜어내고 꼭 필요한 것만 남기는 당신은 깔끔하고 정돈된 공간에서 안정감을 느껴요. 심플한 감각이 돋보이는 만큼, 가끔은 포인트가 되는 소품 하나로 공간에 온기를 더해보세요.",
      },
      natural: {
        title: "내추럴 우드형 – 자연을 담은 공간",
        emoji: "🌿",
        desc: "식물과 원목처럼 자연스러운 소재를 곁에 둘 때 마음이 편안해지는 당신. 살아있는 느낌을 주는 공간을 만드는 감각이 뛰어나요. 가끔은 식물 돌보는 수고로움도 즐거움으로 받아들여보세요.",
      },
      vintage: {
        title: "빈티지 앤틱형 – 이야기가 담긴 공간",
        emoji: "🕰️",
        desc: "시간이 쌓인 물건에서 특별한 매력을 발견하는 당신은 남다른 취향과 안목을 가졌어요. 나만의 개성이 담긴 공간을 만들 줄 알죠. 가끔은 새로운 스타일도 과감히 시도해보세요.",
      },
      cozy: {
        title: "아늑한 무드형 – 포근함이 가득한 공간",
        emoji: "🕯️",
        desc: "따뜻한 조명과 포근한 패브릭으로 마음까지 편안해지는 공간을 만드는 당신. 집이 곧 힐링 공간이 되는 타입이에요. 가끔은 환기와 정리로 공간에 산뜻함도 더해보세요.",
      },
    },
  },

  {
    id: "humor",
    tag: "유머",
    title: "나의 유머 스타일 테스트",
    emoji: "😂",
    tagline: "나만의 웃음 포인트, 어떤 유머로 사람들을 웃길까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "친구들 모임에서 나는 주로?",
        options: [
          { text: "재치있는 드립으로 분위기를 띄운다", value: "wit" },
          { text: "아재개그로 신음소리를 유발한다", value: "dad" },
          { text: "다들 공감하는 일상 얘기로 웃긴다", value: "relatable" },
          { text: "몸짓과 표정으로 다같이 빵 터트린다", value: "slapstick" },
        ],
      },
      {
        text: "웃긴 이야기를 할 때 나의 스타일은?",
        options: [
          { text: "예상 못한 반전으로 웃긴다", value: "wit" },
          { text: "말장난과 라임을 활용한다", value: "dad" },
          { text: "다들 겪어본 일을 실감나게 묘사한다", value: "relatable" },
          { text: "그 상황을 몸으로 재연한다", value: "slapstick" },
        ],
      },
      {
        text: "개그 프로그램을 볼 때 가장 웃긴 코너는?",
        options: [
          { text: "순발력 있는 애드리브가 돋보이는 콩트", value: "wit" },
          { text: "말장난 가득한 아재개그 코너", value: "dad" },
          { text: "일상 공감 개그 코너", value: "relatable" },
          { text: "몸을 던지는 몸개그 코너", value: "slapstick" },
        ],
      },
      {
        text: "어색한 분위기를 풀어야 할 때 나는?",
        options: [
          { text: "재치있는 한마디를 던진다", value: "wit" },
          { text: "썰렁한 아재개그를 던진다", value: "dad" },
          { text: "다들 공감할만한 얘기를 꺼낸다", value: "relatable" },
          { text: "우스꽝스러운 행동을 한다", value: "slapstick" },
        ],
      },
      {
        text: "친구가 실수했을 때 나의 반응은?",
        options: [
          { text: "순간적으로 재치있게 놀린다", value: "wit" },
          { text: "상황에 맞는 말장난을 던진다", value: "dad" },
          { text: "\"나도 그런 적 있어\" 하며 공감한다", value: "relatable" },
          { text: "같이 오버해서 리액션한다", value: "slapstick" },
        ],
      },
      {
        text: "내가 웃길 때 주변 반응은?",
        options: [
          { text: "\"어떻게 그런 생각을 했어?\" 하며 감탄한다", value: "wit" },
          { text: "\"아 진짜...\" 하면서도 웃는다", value: "dad" },
          { text: "\"완전 내 얘기잖아\" 하며 공감한다", value: "relatable" },
          { text: "표정과 행동을 보고 그냥 빵 터진다", value: "slapstick" },
        ],
      },
      {
        text: "나만의 웃음 무기는?",
        options: [
          { text: "촌철살인 같은 말센스", value: "wit" },
          { text: "끝없이 나오는 아재개그 드립", value: "dad" },
          { text: "공감가는 관찰력", value: "relatable" },
          { text: "과장된 표정과 몸짓", value: "slapstick" },
        ],
      },
      {
        text: "유머 감각을 한마디로 표현한다면?",
        options: [
          { text: "센스있는 재치꾼", value: "wit" },
          { text: "사랑스러운 아재개그러", value: "dad" },
          { text: "모두의 공감 요정", value: "relatable" },
          { text: "흥 넘치는 분위기 메이커", value: "slapstick" },
        ],
      },
    ],
    categories: {
      wit: {
        title: "위트형 – 센스 넘치는 재치꾼",
        emoji: "✨",
        desc: "예상치 못한 타이밍에 툭 던지는 한마디로 좌중을 웃게 만드는 당신은 타고난 위트의 소유자예요. 순발력 있는 말센스 덕분에 어디서든 분위기 메이커로 인정받죠. 가끔은 너무 빠른 드립에 상대가 못 따라올 수 있으니, 상대의 리액션도 살펴가며 여유를 더해보세요.",
      },
      dad: {
        title: "아재개그형 – 사랑스러운 개그 장인",
        emoji: "😆",
        desc: "듣는 순간 낯이 찌푸려지지만 어느새 웃게 만드는 아재개그, 그게 바로 당신의 시그니처예요. 뻔한 줄 알면서도 자꾸 기대하게 되는 사랑스러운 개그 장인이죠. 가끔은 타이밍을 살짝 늦춰서 상대가 예상할 틈을 주는 것도 재미있을 거예요.",
      },
      relatable: {
        title: "공감개그형 – 모두의 웃음 요정",
        emoji: "🥹",
        desc: "누구나 겪어봤을 법한 일상을 콕 집어내는 공감 개그로 웃음을 주는 당신. 섬세한 관찰력 덕분에 이야기를 들으면 다들 고개를 끄덕이게 되죠. 가끔은 사소한 디테일에 상상력을 살짝 더해보면 이야기가 더 풍성해질 거예요.",
      },
      slapstick: {
        title: "몸개그형 – 흥 넘치는 분위기 메이커",
        emoji: "🤸",
        desc: "표정과 몸짓 하나로 순식간에 분위기를 뒤집는 당신은 타고난 흥부자예요. 말보다 행동으로 보여주는 유머 감각 덕분에 모임에 활기가 넘치죠. 가끔은 에너지를 조절하며 상대의 리듬에도 맞춰보면 더 즐거운 시간이 될 거예요.",
      },
    },
  },

  {
    id: "plant",
    tag: "라이프",
    title: "나의 반려식물 집사 유형 테스트",
    emoji: "🪴",
    tagline: "당신은 어떤 스타일의 식물집사인가요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새 식물을 데려오기 전 나는?",
        options: [
          { text: "종류와 키우는 법을 꼼꼼히 검색한다", value: "perfectionist" },
          { text: "일단 예뻐 보이면 데려온다", value: "emotional" },
          { text: "정해둔 루틴에 맞춰 시기를 고른다", value: "diligent" },
          { text: "그냥 눈에 들어오면 산다", value: "freestyle" },
        ],
      },
      {
        text: "물 주는 주기는?",
        options: [
          { text: "캘린더에 적어두고 꼭 지킨다", value: "diligent" },
          { text: "흙 상태를 보고 그때그때 준다", value: "freestyle" },
          { text: "혹시 과습될까 매번 검색해본다", value: "perfectionist" },
          { text: "기분 내킬 때 듬뿍 준다", value: "emotional" },
        ],
      },
      {
        text: "식물 잎이 조금 시들었을 때 나는?",
        options: [
          { text: "바로 원인을 찾아 조치한다", value: "diligent" },
          { text: "며칠 지켜보다 괜찮아지겠지 한다", value: "freestyle" },
          { text: "인터넷에 사진 올려 원인을 물어본다", value: "perfectionist" },
          { text: "괜히 마음이 짠해서 말을 걸어준다", value: "emotional" },
        ],
      },
      {
        text: "식물을 데려오는 곳은 주로?",
        options: [
          { text: "전문 식물샵에서 상담받고 고른다", value: "perfectionist" },
          { text: "꽃집을 지나다 마음에 들면 바로", value: "emotional" },
          { text: "관리하기 쉬운 걸로 화원에서 고른다", value: "diligent" },
          { text: "지인에게 나눔 받는 경우가 많다", value: "freestyle" },
        ],
      },
      {
        text: "여행을 갈 때 식물은?",
        options: [
          { text: "자동 급수 장치까지 준비한다", value: "perfectionist" },
          { text: "이웃이나 가족에게 부탁해둔다", value: "diligent" },
          { text: "며칠쯤이야 괜찮겠지 한다", value: "freestyle" },
          { text: "다녀와서 반갑게 인사부터 건넨다", value: "emotional" },
        ],
      },
      {
        text: "식물에게 이름을 붙이는 편인가요?",
        options: [
          { text: "이름도 짓고 말도 자주 건다", value: "emotional" },
          { text: "특별히 이름은 안 짓는다", value: "freestyle" },
          { text: "종류와 구입일을 기록해둔다", value: "diligent" },
          { text: "성장 일지를 앱으로 관리한다", value: "perfectionist" },
        ],
      },
      {
        text: "분갈이를 해야 할 타이밍이 되면?",
        options: [
          { text: "시기와 화분 크기를 계산해 진행한다", value: "perfectionist" },
          { text: "필요하다 싶으면 바로 해준다", value: "diligent" },
          { text: "미루다가 뿌리가 꽉 차서야 한다", value: "freestyle" },
          { text: "예쁜 새 화분 고르는 게 더 설렌다", value: "emotional" },
        ],
      },
      {
        text: "집에 있는 식물이 잘 자랐을 때 드는 생각은?",
        options: [
          { text: "역시 계획대로 관리한 보람이 있다", value: "diligent" },
          { text: "얘도 다 지 알아서 크는구나", value: "freestyle" },
          { text: "혹시 더 좋은 환경은 없을까 고민한다", value: "perfectionist" },
          { text: "너무 뿌듯해서 사진을 백 장 찍는다", value: "emotional" },
        ],
      },
    ],
    categories: {
      diligent: {
        title: "성실한 정원사형",
        emoji: "🌱",
        desc: "정해진 루틴과 꾸준한 관심으로 식물을 알뜰하게 돌보는 당신은 타고난 성실한 정원사예요. 덕분에 집안의 초록이들이 건강하고 안정적으로 자라나죠. 가끔은 계획을 잠시 내려놓고 식물이 자라는 모습 자체를 여유롭게 즐겨보는 것도 좋아요.",
      },
      freestyle: {
        title: "자유방임 힐링형",
        emoji: "🍃",
        desc: "느긋하고 여유로운 마음으로 식물을 대하는 당신은 스트레스 없이 초록이와 함께하는 편안한 집사예요. 자연스러운 리듬을 믿는 태도 덕분에 식물도 사람도 편안하죠. 가끔은 물 주는 날 정도는 살짝 체크해두면 더 튼튼하게 키울 수 있을 거예요.",
      },
      perfectionist: {
        title: "꼼꼼한 연구형 집사",
        emoji: "🔍",
        desc: "식물 하나하나의 특성을 꼼꼼히 공부하고 세심하게 챙기는 당신은 믿음직한 연구형 집사예요. 덕분에 웬만한 문제는 미리 예방하고 빠르게 해결하죠. 가끔은 너무 완벽하게 하려는 마음을 내려놓고 작은 실수도 괜찮다고 여겨보세요.",
      },
      emotional: {
        title: "감성 충만 애정형",
        emoji: "💚",
        desc: "식물 하나하나에 이름을 붙이고 마음을 나누는 당신은 애정이 가득한 감성 집사예요. 진심 어린 관심 덕분에 식물도 당신의 온기를 느끼고 잘 자라날 거예요. 가끔은 감정만큼이나 실용적인 관리 팁도 함께 챙겨보면 더 좋겠어요.",
      },
    },
  },

  {
    id: "procrastination",
    tag: "미루기",
    title: "나의 미루기 유형 테스트",
    emoji: "⏰",
    tagline: "할 일은 쌓여있는데... 나는 어떤 스타일로 미룰까?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "해야 할 일이 생기면 나는?",
        options: [
          { text: "마감 직전까지 일단 미뤄둔다", value: "deadline" },
          { text: "완벽하게 할 자신이 없으면 시작을 늦춘다", value: "perfect" },
          { text: "일단 딴짓부터 좀 하고 시작한다", value: "distract" },
          { text: "계획표부터 꼼꼼하게 짠다", value: "plan" },
        ],
      },
      {
        text: "과제나 업무 마감이 일주일 남았을 때 나는?",
        options: [
          { text: "마지막 이틀 전부터 슬슬 시작한다", value: "deadline" },
          { text: "어떻게 해야 완벽할지 계속 고민만 한다", value: "perfect" },
          { text: "다른 재밌는 일들에 먼저 눈이 간다", value: "distract" },
          { text: "일정표에 세부 계획을 세운다", value: "plan" },
        ],
      },
      {
        text: "집중이 안 될 때 나는?",
        options: [
          { text: "괜찮아, 마감 임박하면 집중된다", value: "deadline" },
          { text: "이 정도로는 부족한 것 같아 손이 안 간다", value: "perfect" },
          { text: "SNS나 유튜브를 켠다", value: "distract" },
          { text: "다시 할 일 목록을 정리해본다", value: "plan" },
        ],
      },
      {
        text: "새로운 프로젝트를 시작할 때 가장 먼저 하는 일은?",
        options: [
          { text: "일단 미뤄두고 나중에 몰아서 한다", value: "deadline" },
          { text: "완벽한 시작을 위해 자료 조사부터 오래 한다", value: "perfect" },
          { text: "관련 없는 재밌는 걸 먼저 찾아본다", value: "distract" },
          { text: "전체 계획과 일정부터 세운다", value: "plan" },
        ],
      },
      {
        text: "주변 사람이 \"그거 언제 할 거야?\"라고 물으면?",
        options: [
          { text: "\"아직 시간 있어\"라고 답한다", value: "deadline" },
          { text: "\"제대로 준비되면 할게\"라고 답한다", value: "perfect" },
          { text: "\"어? 맞다 깜빡했다\"라고 답한다", value: "distract" },
          { text: "\"계획은 다 세워놨어\"라고 답한다", value: "plan" },
        ],
      },
      {
        text: "미룬 일이 결국 발등에 불이 떨어졌을 때 나는?",
        options: [
          { text: "오히려 이때 최고의 집중력이 나온다", value: "deadline" },
          { text: "그제야 눈높이를 낮추고 시작한다", value: "perfect" },
          { text: "그제야 딴짓을 멈추고 정신을 차린다", value: "distract" },
          { text: "세워둔 계획대로 빠르게 실행한다", value: "plan" },
        ],
      },
      {
        text: "할 일을 미루는 나 자신을 보면 드는 생각은?",
        options: [
          { text: "압박감이 있어야 움직이는 스타일인 듯", value: "deadline" },
          { text: "잘하고 싶은 마음이 커서 그런 것 같다", value: "perfect" },
          { text: "재밌는 게 너무 많아서 그런 것 같다", value: "distract" },
          { text: "계획 세우는 것만으로 만족했나 싶다", value: "plan" },
        ],
      },
      {
        text: "이상적인 하루 마무리는?",
        options: [
          { text: "아슬아슬하게라도 끝냈다는 짜릿함", value: "deadline" },
          { text: "완성도 높게 마무리했다는 뿌듯함", value: "perfect" },
          { text: "재밌는 것도 하고 할 일도 어찌어찌 끝낸 하루", value: "distract" },
          { text: "계획한 대로 하나씩 지워나간 하루", value: "plan" },
        ],
      },
    ],
    categories: {
      deadline: {
        title: "마감 임박형 – 압박감이 있어야 움직이는 사람",
        emoji: "⏰",
        desc: "당신은 마감이 코앞에 닥쳐야 비로소 엔진이 켜지는 벼락치기의 달인이에요. 오히려 시간이 넉넉하면 집중이 잘 안 되고, 긴장감 속에서 몰입하는 편이죠. 가끔은 스스로 작은 마감을 미리 정해두면 마음의 여유와 완성도를 동시에 챙길 수 있을 거예요.",
      },
      perfect: {
        title: "완벽주의 회피형 – 잘하고 싶어서 미루는 사람",
        emoji: "🎯",
        desc: "당신은 대충 하느니 안 하는 게 낫다고 생각할 만큼 결과물에 대한 기준이 높은 사람이에요. 완벽하게 해내고 싶은 마음이 크다 보니 오히려 시작 자체를 미루게 되는 거죠. 처음부터 완벽할 필요는 없다는 걸 기억하고, 일단 60점짜리로 시작해보는 연습을 해보세요.",
      },
      distract: {
        title: "딴짓 유발형 – 재미있는 일부터 하는 사람",
        emoji: "🎮",
        desc: "당신은 해야 할 일을 앞에 두고도 눈앞의 재미있는 것에 먼저 손이 가는 편이에요. 그만큼 호기심이 많고 순간을 즐길 줄 아는 사람이라 주변에서 유쾌하다는 말을 자주 듣죠. 할 일을 눈에 잘 띄는 곳에 적어두고 재미 요소를 살짝 섞어보면 시작이 한결 쉬워질 거예요.",
      },
      plan: {
        title: "계획만 완벽형 – 세우는 것으로 만족하는 사람",
        emoji: "📝",
        desc: "당신은 할 일 목록과 계획표를 짜는 데는 진심인 사람이에요. 체계적으로 정리하는 능력 덕분에 무엇을 해야 할지는 늘 명확하게 알고 있죠. 다만 계획 세우기에서 멈추지 않도록, 목록의 첫 번째 항목만이라도 바로 시작해보는 습관을 들여보세요.",
      },
    },
  },

  {
    id: "music",
    tag: "취향",
    title: "나의 음악 취향 유형 테스트",
    emoji: "🎧",
    tagline: "플레이리스트만 봐도 알 수 있는 나의 음악 감성은?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새로운 음악을 찾을 때 나는?",
        options: [
          { text: "요즘 내 기분과 맞는 노래를 찾는다", value: "mood" },
          { text: "신나고 텐션 오르는 노래부터 찾는다", value: "energy" },
          { text: "아무도 모르는 숨은 명곡을 찾아 헤맨다", value: "explore" },
          { text: "예전에 듣던 노래부터 다시 듣는다", value: "nostalgia" },
        ],
      },
      {
        text: "내 플레이리스트에 이름을 짓는다면?",
        options: [
          { text: "\"오늘의 기분\"", value: "mood" },
          { text: "\"무조건 신나는 노래\"", value: "energy" },
          { text: "\"아무튼 새로운 것들\"", value: "explore" },
          { text: "\"그때 그 시절\"", value: "nostalgia" },
        ],
      },
      {
        text: "노래를 들을 때 가장 먼저 귀에 들어오는 건?",
        options: [
          { text: "가사 한 줄 한 줄", value: "mood" },
          { text: "비트와 리듬감", value: "energy" },
          { text: "낯선 사운드나 편곡", value: "explore" },
          { text: "익숙한 멜로디", value: "nostalgia" },
        ],
      },
      {
        text: "좋아하는 노래가 생기면 나는?",
        options: [
          { text: "가사를 곱씹으며 여러 번 듣는다", value: "mood" },
          { text: "볼륨 높여놓고 신나게 따라 부른다", value: "energy" },
          { text: "그 가수의 다른 곡들까지 다 찾아 듣는다", value: "explore" },
          { text: "예전에 좋아하던 노래와 비교하며 듣는다", value: "nostalgia" },
        ],
      },
      {
        text: "힘든 하루를 보낸 날 듣는 음악은?",
        options: [
          { text: "내 마음을 대신 말해주는 듯한 노래", value: "mood" },
          { text: "스트레스를 날려버릴 신나는 노래", value: "energy" },
          { text: "아직 안 들어본 새 플레이리스트", value: "explore" },
          { text: "옛날에 위로받았던 익숙한 노래", value: "nostalgia" },
        ],
      },
      {
        text: "노래방에 가면 나는?",
        options: [
          { text: "감정 잡고 발라드를 부른다", value: "mood" },
          { text: "신나는 댄스곡으로 분위기를 띄운다", value: "energy" },
          { text: "남들이 잘 모르는 노래를 선곡한다", value: "explore" },
          { text: "학창 시절 인기곡을 부른다", value: "nostalgia" },
        ],
      },
      {
        text: "친구가 \"요즘 뭐 들어?\"라고 물으면?",
        options: [
          { text: "\"요즘 내 감정이랑 딱 맞는 노래 있어\"", value: "mood" },
          { text: "\"완전 신나는 노래! 같이 들어볼래?\"", value: "energy" },
          { text: "\"이거 완전 숨은 명곡인데 아무도 몰라\"", value: "explore" },
          { text: "\"예전 노래 다시 듣고 있어\"", value: "nostalgia" },
        ],
      },
      {
        text: "나에게 음악이란?",
        options: [
          { text: "마음을 알아주는 친구", value: "mood" },
          { text: "에너지를 채워주는 연료", value: "energy" },
          { text: "끝없는 탐험의 세계", value: "explore" },
          { text: "추억을 소환하는 타임머신", value: "nostalgia" },
        ],
      },
    ],
    categories: {
      mood: {
        title: "감성 몰입형 – 가사에 마음을 담는 사람",
        emoji: "💭",
        desc: "당신은 노래 속 가사 한 줄에 마음이 움직이는 사람이에요. 멜로디보다 이야기에 먼저 공감하고, 음악을 통해 감정을 정리하는 편이죠. 가끔은 신나는 노래로 기분을 환기하는 시간도 함께 가져보세요.",
      },
      energy: {
        title: "텐션 부스터형 – 리듬으로 에너지를 채우는 사람",
        emoji: "⚡",
        desc: "당신에게 음악은 무엇보다 강력한 에너지 충전기예요. 신나는 비트를 들으면 저절로 몸이 들썩이고, 지친 하루도 노래 한 곡이면 금세 회복되곤 하죠. 가끔은 잔잔한 곡으로 마음을 차분히 가라앉히는 시간도 가져보세요.",
      },
      explore: {
        title: "탐험가형 – 새로운 사운드를 찾아다니는 사람",
        emoji: "🧭",
        desc: "당신은 남들이 모르는 좋은 노래를 발견했을 때 가장 짜릿함을 느끼는 사람이에요. 익숙한 인기곡보다 새로운 아티스트와 낯선 장르에 늘 귀가 열려 있죠. 좋아하는 곡을 주변 사람들과 나누면 그 즐거움이 배가 될 거예요.",
      },
      nostalgia: {
        title: "추억 소환형 – 익숙한 멜로디에 위로받는 사람",
        emoji: "📼",
        desc: "당신에게 음악은 그 시절의 순간들을 고스란히 불러오는 타임머신이에요. 익숙한 멜로디 하나로 그때의 감정과 사람들이 떠오르곤 하죠. 가끔은 새로운 노래에도 마음을 열어보면 또 다른 추억이 쌓일 거예요.",
      },
    },
  },

  {
    id: "talkstyle",
    tag: "성격심리",
    title: "나의 말투 유형 테스트",
    emoji: "🗣️",
    tagline: "대화 속에서 드러나는 나의 말투는 어떤 유형일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "친구가 고민을 털어놓을 때 나는?",
        options: [
          { text: "문제의 핵심부터 콕 짚어준다", value: "direct" },
          { text: "힘들었겠다며 마음부터 다독인다", value: "warm" },
          { text: "분위기를 풀어주려고 농담을 섞는다", value: "witty" },
          { text: "일단 끝까지 조용히 들어준다", value: "reserved" },
        ],
      },
      {
        text: "대화 중 내 생각과 다른 말을 들으면?",
        options: [
          { text: "바로 다른 생각이라고 말한다", value: "direct" },
          { text: "상대 입장도 이해하려 노력한다", value: "warm" },
          { text: "웃으며 넘기고 나중에 이야기한다", value: "witty" },
          { text: "속으로 생각하다 조심스럽게 꺼낸다", value: "reserved" },
        ],
      },
      {
        text: "단체 대화방에서 나는?",
        options: [
          { text: "필요한 말만 짧고 명확하게 한다", value: "direct" },
          { text: "다른 사람 말에 리액션을 잘 해준다", value: "warm" },
          { text: "드립이나 짤로 분위기를 띄운다", value: "witty" },
          { text: "대체로 지켜보다가 가끔 말한다", value: "reserved" },
        ],
      },
      {
        text: "누군가에게 부탁을 해야 할 때?",
        options: [
          { text: "용건부터 바로 말한다", value: "direct" },
          { text: "미안한 마음을 먼저 표현한다", value: "warm" },
          { text: "농담처럼 가볍게 운을 뗀다", value: "witty" },
          { text: "어떻게 말할지 여러 번 고민한다", value: "reserved" },
        ],
      },
      {
        text: "내 말투에 대해 주변에서 자주 하는 말은?",
        options: [
          { text: "\"너무 팩폭이야\"", value: "direct" },
          { text: "\"말이 참 따뜻해\"", value: "warm" },
          { text: "\"너랑 있으면 안 웃을 수가 없어\"", value: "witty" },
          { text: "\"말 한마디 한마디가 신중해\"", value: "reserved" },
        ],
      },
      {
        text: "화가 났을 때 나는?",
        options: [
          { text: "감정을 숨기지 않고 바로 표현한다", value: "direct" },
          { text: "상처 줄까 봐 최대한 부드럽게 말한다", value: "warm" },
          { text: "농담으로 넘기려 애쓴다", value: "witty" },
          { text: "일단 말을 아끼고 시간을 둔다", value: "reserved" },
        ],
      },
      {
        text: "발표나 프레젠테이션을 할 때?",
        options: [
          { text: "결론부터 명확하게 전달한다", value: "direct" },
          { text: "듣는 사람 반응을 살피며 말한다", value: "warm" },
          { text: "적절한 유머로 긴장을 풀어준다", value: "witty" },
          { text: "준비한 대로 차분히 말한다", value: "reserved" },
        ],
      },
      {
        text: "나에게 대화란?",
        options: [
          { text: "정확한 정보를 주고받는 것", value: "direct" },
          { text: "서로의 마음을 나누는 것", value: "warm" },
          { text: "즐겁게 웃을 수 있는 시간", value: "witty" },
          { text: "신중하게 쌓아가는 신뢰", value: "reserved" },
        ],
      },
    ],
    categories: {
      direct: {
        title: "직설형 – 핵심을 콕 짚어 말하는",
        emoji: "🎯",
        desc: "당신은 돌려 말하지 않고 하고 싶은 말을 명확하게 전달하는 사람이에요. 덕분에 대화가 빠르고 시원하게 흘러가죠. 가끔은 상대의 마음이 다치지 않도록 표현에 쿠션을 더해보는 것도 좋아요.",
      },
      warm: {
        title: "다정형 – 마음부터 살피는",
        emoji: "🫶",
        desc: "당신은 말 한마디에도 상대의 마음을 먼저 헤아리는 사람이에요. 함께 대화하는 사람을 편안하게 만들어주는 힘이 있죠. 가끔은 당신의 솔직한 생각도 조금 더 표현해보세요.",
      },
      witty: {
        title: "위트형 – 분위기를 살리는",
        emoji: "😄",
        desc: "당신은 유머 감각으로 대화의 분위기를 밝게 만드는 사람이에요. 함께 있으면 지루할 틈이 없다는 말을 자주 듣죠. 가끔은 진지한 순간엔 농담을 잠시 내려놓아도 좋아요.",
      },
      reserved: {
        title: "신중형 – 한 마디도 곱씹어 말하는",
        emoji: "🤫",
        desc: "당신은 말을 꺼내기 전에 신중하게 생각을 정리하는 사람이에요. 그래서 당신의 말에는 무게와 신뢰가 실리죠. 가끔은 생각을 다 정리하기 전에도 편하게 먼저 말해보세요.",
      },
    },
  },

  {
    id: "organizing",
    tag: "정리",
    title: "나의 정리정돈 유형 테스트",
    emoji: "🧹",
    tagline: "내 방, 내 책상만 봐도 알 수 있는 진짜 정리 스타일",
    type: "category",
    compare: true,
    questions: [
      {
        text: "책상 위 상태는 보통 어떤가요?",
        options: [
          { text: "필요한 것만 딱 올려져 있다", value: "minimal" },
          { text: "겉은 깔끔한데 서랍 열면 아수라장", value: "surface" },
          { text: "라벨 붙인 정리함이 줄지어 있다", value: "storage" },
          { text: "이것저것 늘어놓아도 나름 편하다", value: "freestyle" },
        ],
      },
      {
        text: "옷장을 정리할 때 나는?",
        options: [
          { text: "안 입는 옷은 바로 버리거나 나눔한다", value: "minimal" },
          { text: "보이는 곳만 걸어두고 나머진 몰아넣는다", value: "surface" },
          { text: "계절별, 색깔별로 칸을 나눠 정리한다", value: "storage" },
          { text: "그냥 손에 잡히는 대로 넣는다", value: "freestyle" },
        ],
      },
      {
        text: "새 물건을 살 때 나의 원칙은?",
        options: [
          { text: "하나 사면 하나는 버린다", value: "minimal" },
          { text: "예쁘면 일단 사고 정리는 나중에", value: "surface" },
          { text: "수납 공간부터 확인하고 산다", value: "storage" },
          { text: "필요하면 그냥 산다, 정리는 별생각 없다", value: "freestyle" },
        ],
      },
      {
        text: "손님이 갑자기 온다고 하면?",
        options: [
          { text: "평소에도 깔끔해서 크게 걱정 없다", value: "minimal" },
          { text: "눈에 보이는 곳만 빛의 속도로 치운다", value: "surface" },
          { text: "정리함 뚜껑만 닫으면 끝, 이미 다 제자리다", value: "storage" },
          { text: "그냥 대충 치우고 손님 눈치를 본다", value: "freestyle" },
        ],
      },
      {
        text: "여행 짐을 쌀 때 나는?",
        options: [
          { text: "체크리스트로 딱 필요한 것만 챙긴다", value: "minimal" },
          { text: "일단 캐리어에 다 넣고 본다", value: "surface" },
          { text: "파우치, 압축팩으로 종류별 분류", value: "storage" },
          { text: "출발 직전에 몰아서 대충 싼다", value: "freestyle" },
        ],
      },
      {
        text: "물건을 어디 뒀는지 기억이 안 날 때?",
        options: [
          { text: "애초에 물건 수가 적어서 금방 찾는다", value: "minimal" },
          { text: "분명 어딘가 쌓아뒀는데 못 찾는다", value: "surface" },
          { text: "정리해둔 위치가 명확해서 바로 찾는다", value: "storage" },
          { text: "찾다가 포기하고 새로 산다", value: "freestyle" },
        ],
      },
      {
        text: "정리정돈에 대한 나의 생각은?",
        options: [
          { text: "적게 소유하는 게 최고의 정리다", value: "minimal" },
          { text: "정리는 보여주기용이어도 괜찮다", value: "surface" },
          { text: "정리 도구, 수납템 모으는 게 취미다", value: "storage" },
          { text: "어지러워도 내 물건이 어딨는지는 나만 안다", value: "freestyle" },
        ],
      },
      {
        text: "이상적인 방을 한마디로 표현하면?",
        options: [
          { text: "텅 빈 듯 깔끔한 공간", value: "minimal" },
          { text: "보기엔 예쁜데 자세히 보면 애매한 공간", value: "surface" },
          { text: "칸칸이 각 잡힌 정리의 정석", value: "storage" },
          { text: "어수선해도 내 손길이 느껴지는 공간", value: "freestyle" },
        ],
      },
    ],
    categories: {
      minimal: {
        title: "미니멀리스트형 – 비움의 미학",
        emoji: "🤍",
        desc: "불필요한 물건을 과감히 덜어내는 당신은 진짜 정리의 고수예요. 적게 가질수록 마음도 가벼워진다는 걸 아는 사람이죠. 가끔은 추억이 담긴 물건 한두 개쯤은 남겨두는 여유도 좋아요.",
      },
      surface: {
        title: "겉정리형 – 보이는 게 반이다",
        emoji: "🎭",
        desc: "손님 앞에서는 완벽하게 정돈된 모습을 보여주는 센스가 있는 당신. 급할 때 순발력 있게 공간을 정리하는 능력이 탁월해요. 가끔은 서랍 속까지 한 번씩 비워보면 마음도 한결 개운해질 거예요.",
      },
      storage: {
        title: "수납마스터형 – 정리 도구는 나의 힘",
        emoji: "📦",
        desc: "칸칸이 이름표를 붙이고 체계를 세우는 당신은 진짜 정리 장인이에요. 어디에 뭐가 있는지 훤히 꿰고 있어 효율적인 하루를 보내죠. 가끔은 완벽한 시스템 없이도 괜찮다는 여유를 가져보세요.",
      },
      freestyle: {
        title: "자유로운 영혼형 – 어지러움 속의 질서",
        emoji: "🌀",
        desc: "정리보다 하고 싶은 일에 집중하는 당신만의 자유로운 리듬이 있어요. 남들 눈엔 어수선해도 당신만의 동선과 감각으로 잘 지내는 편이죠. 가끔 5분만 투자해 눈에 띄는 곳부터 정리해보면 기분 전환에 좋을 거예요.",
      },
    },
  },

  {
    id: "firstimpression",
    tag: "인상",
    title: "나의 첫인상 유형 테스트",
    emoji: "🌟",
    tagline: "사람들은 나를 처음 봤을 때 어떤 느낌을 받을까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "새로운 모임에 처음 갔을 때 나는?",
        options: [
          { text: "조용히 상황부터 관찰한다", value: "cool" },
          { text: "먼저 다가가 인사를 건넨다", value: "warm" },
          { text: "굳이 나서지 않고 여운을 남긴다", value: "mystery" },
          { text: "텐션을 올려 분위기를 띄운다", value: "bright" },
        ],
      },
      {
        text: "처음 만난 사람과 대화할 때 내 표정은?",
        options: [
          { text: "무표정에 가까운 편", value: "cool" },
          { text: "잘 웃고 리액션이 큰 편", value: "warm" },
          { text: "살짝 미소만 짓는 편", value: "mystery" },
          { text: "표정이 계속 바뀌며 생동감 있다", value: "bright" },
        ],
      },
      {
        text: "평소 옷차림 스타일은?",
        options: [
          { text: "깔끔한 무채색 위주", value: "cool" },
          { text: "편안하고 부드러운 톤", value: "warm" },
          { text: "포인트 하나로 존재감 있는 스타일", value: "mystery" },
          { text: "눈에 띄는 컬러나 아이템", value: "bright" },
        ],
      },
      {
        text: "낯선 사람이 말을 걸어오면?",
        options: [
          { text: "필요한 말만 짧게 답한다", value: "cool" },
          { text: "반갑게 맞장구치며 대화를 이어간다", value: "warm" },
          { text: "짧게 답하고 묘한 여지를 남긴다", value: "mystery" },
          { text: "신나서 이것저것 물어본다", value: "bright" },
        ],
      },
      {
        text: "친구들이 나를 표현할 때 자주 하는 말은?",
        options: [
          { text: "\"차갑진 않은데 다가가기 어려워\"", value: "cool" },
          { text: "\"편하고 따뜻해\"", value: "warm" },
          { text: "\"속을 잘 모르겠어\"", value: "mystery" },
          { text: "\"에너지가 넘쳐\"", value: "bright" },
        ],
      },
      {
        text: "단체 사진을 찍을 때 나는?",
        options: [
          { text: "무난하고 자연스러운 포즈", value: "cool" },
          { text: "옆 사람 챙기며 다정하게", value: "warm" },
          { text: "살짝 다른 포즈로 존재감 있게", value: "mystery" },
          { text: "제일 크게 리액션하며 웃는다", value: "bright" },
        ],
      },
      {
        text: "첫 만남 후 상대가 나에게 느낄 감정은?",
        options: [
          { text: "괜히 어려운 사람 같다", value: "cool" },
          { text: "또 만나고 싶다", value: "warm" },
          { text: "좀 더 알고 싶다", value: "mystery" },
          { text: "재밌는 사람이다", value: "bright" },
        ],
      },
      {
        text: "새로운 자리에서 나의 목소리 톤은?",
        options: [
          { text: "낮고 차분한 편", value: "cool" },
          { text: "부드럽고 편안한 톤", value: "warm" },
          { text: "낮은 톤으로 은근한 매력", value: "mystery" },
          { text: "높고 활기찬 톤", value: "bright" },
        ],
      },
    ],
    categories: {
      cool: {
        title: "시크한 도시형 – 쿨함이 매력",
        emoji: "🕶️",
        desc: "처음 보면 다가가기 조심스러운 도시적인 분위기를 풍기는 당신. 감정을 크게 드러내지 않아 신뢰감 있고 프로페셔널해 보여요. 친해지면 반전 매력이 크니, 가끔은 먼저 살짝 미소를 건네보는 것도 좋아요.",
      },
      warm: {
        title: "다정한 옆집형 – 편안함이 매력",
        emoji: "🤗",
        desc: "누구에게나 편안하고 다정한 인상을 주는 당신은 처음 만나도 이야기 나누기 쉬운 사람이에요. 배려심 많은 태도 덕분에 금방 마음을 여는 상대가 많죠. 가끔은 본인의 이야기도 먼저 꺼내보는 용기를 내보세요.",
      },
      mystery: {
        title: "신비로운 매력형 – 여운이 매력",
        emoji: "🌙",
        desc: "속을 다 보여주지 않는 묘한 분위기로 상대의 궁금증을 자아내는 당신. 은은한 존재감만으로도 사람들의 시선을 끄는 힘이 있어요. 가끔은 마음을 조금 더 열어 보여주면 관계가 더 깊어질 거예요.",
      },
      bright: {
        title: "발랄한 텐션형 – 에너지가 매력",
        emoji: "✨",
        desc: "밝고 활기찬 에너지로 분위기를 순식간에 띄우는 당신. 어디서든 먼저 웃어주는 모습에 사람들도 덩달아 편해져요. 가끔은 차분히 상대의 속도에 맞춰주는 여유도 챙겨보세요.",
      },
    },
  },

  {
    id: "workout",
    tag: "건강",
    title: "나의 운동 스타일 테스트",
    emoji: "🏋️",
    tagline: "당신에게 딱 맞는 운동 방식은 무엇일까요?",
    type: "category",
    compare: true,
    questions: [
      {
        text: "운동을 시작하기로 마음먹었다면, 가장 먼저 하는 일은?",
        options: [
          { text: "헬스장부터 등록한다", value: "gym" },
          { text: "요가원이나 필라테스 학원을 알아본다", value: "yoga" },
          { text: "러닝화부터 장만한다", value: "running" },
          { text: "유튜브 홈트 영상을 찾아본다", value: "hometraining" },
        ],
      },
      {
        text: "운동할 때 가장 중요하게 생각하는 건?",
        options: [
          { text: "근력과 몸의 변화", value: "gym" },
          { text: "호흡과 마음의 안정", value: "yoga" },
          { text: "상쾌한 기분과 지구력", value: "running" },
          { text: "편안함과 자유로움", value: "hometraining" },
        ],
      },
      {
        text: "운동 갈 때 챙기는 필수템은?",
        options: [
          { text: "프로틴 쉐이커", value: "gym" },
          { text: "요가매트와 편한 옷", value: "yoga" },
          { text: "이어폰과 물병", value: "running" },
          { text: "매트 하나면 충분", value: "hometraining" },
        ],
      },
      {
        text: "운동 중 가장 뿌듯한 순간은?",
        options: [
          { text: "무게를 늘렸을 때", value: "gym" },
          { text: "동작이 유연해졌을 때", value: "yoga" },
          { text: "기록이 단축됐을 때", value: "running" },
          { text: "오늘도 꾸준히 했다는 것 자체", value: "hometraining" },
        ],
      },
      {
        text: "친구가 같이 운동하자고 하면 나는?",
        options: [
          { text: "같이 헬스장 가자고 한다", value: "gym" },
          { text: "필라테스 원데이클래스를 추천한다", value: "yoga" },
          { text: "공원에서 같이 러닝하자고 한다", value: "running" },
          { text: "각자 집에서 하고 인증샷을 공유하자고 한다", value: "hometraining" },
        ],
      },
      {
        text: "나의 운동복 스타일은?",
        options: [
          { text: "탱크탑에 트레이닝 벨트", value: "gym" },
          { text: "레깅스에 편한 크롭탑", value: "yoga" },
          { text: "기능성 러닝복", value: "running" },
          { text: "그냥 편한 트레이닝복", value: "hometraining" },
        ],
      },
      {
        text: "비 오는 날의 운동 계획은?",
        options: [
          { text: "그래도 헬스장은 실내니까 간다", value: "gym" },
          { text: "실내 요가로 대체한다", value: "yoga" },
          { text: "러닝머신으로 대체하거나 쉰다", value: "running" },
          { text: "집에서 홈트로 해결한다", value: "hometraining" },
        ],
      },
      {
        text: "운동 후 나에게 주는 보상은?",
        options: [
          { text: "든든한 단백질 보충식", value: "gym" },
          { text: "따뜻한 차 한 잔과 스트레칭", value: "yoga" },
          { text: "시원한 샤워와 완주의 뿌듯함", value: "running" },
          { text: "소파에 누워 좋아하는 영상 보기", value: "hometraining" },
        ],
      },
    ],
    categories: {
      gym: {
        title: "헬스 마니아형 – 근력이 곧 자신감",
        emoji: "💪",
        desc: "목표를 세우고 꾸준히 무게를 늘려가는 걸 즐기는 당신. 눈에 보이는 변화와 성취감이 운동을 지속하는 원동력이에요. 가끔은 무리한 목표보다 몸이 보내는 신호에 귀 기울이는 여유도 챙겨보세요.",
      },
      yoga: {
        title: "요가·필라테스형 – 몸과 마음의 균형",
        emoji: "🧘",
        desc: "격렬함보다는 호흡과 자세에 집중하며 몸과 마음을 함께 다스리는 당신. 유연함과 안정감을 중요하게 여기는 편이에요. 가끔은 심박수를 살짝 올리는 활동도 더해보면 균형이 한층 더 좋아질 거예요.",
      },
      running: {
        title: "러닝·아웃도어형 – 야외에서 채우는 에너지",
        emoji: "🏃",
        desc: "탁 트인 공간에서 몸을 움직일 때 진짜 활력을 느끼는 당신. 조금씩 나아지는 기록을 보며 성취감을 얻는 편이에요. 날씨가 안 좋은 날을 위한 실내 대체 루틴도 하나쯤 마련해두면 좋아요.",
      },
      hometraining: {
        title: "홈트·자유러형 – 내 공간에서 편하게",
        emoji: "🏠",
        desc: "시간과 장소에 얽매이지 않고 내 페이스대로 몸을 움직이는 걸 좋아하는 당신. 부담 없이 꾸준히 이어가는 게 최대 강점이에요. 가끔은 새로운 루틴이나 운동을 시도해보면 색다른 재미를 느낄 수 있을 거예요.",
      },
    },
  },
];
