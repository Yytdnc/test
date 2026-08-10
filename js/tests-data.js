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
];
