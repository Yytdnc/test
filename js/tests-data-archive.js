/* MindPick 보관용 테스트 데이터 (비공개)
 * 콘텐츠 템플릿 반복 문제 + 페이지 수 축소를 위해 사이트에서 제외한 32개 테스트를
 * 여기로 옮겨 보관한다. 이 파일은 어떤 HTML에서도 <script src>로 로드하지 않으므로
 * 실제 사이트에는 반영되지 않는다 (index.html/tests.html/quiz-<id>.html 미생성, sitemap 미포함).
 * 나중에 문구를 다시 다듬어서 되살리고 싶으면 이 중 필요한 항목을 js/tests-data.js의
 * TESTS 배열로 옮기고 scripts/build-quiz-pages.js를 다시 실행하면 된다.
 * 이관 시점: 2026-09-06, AdSense 재승인 준비(콘텐츠 축소) 작업 중.
 */
const TESTS_ARCHIVE = [
  {
    "id": "color",
    "tag": "성격",
    "title": "나의 성격 컬러 테스트",
    "emoji": "🎨",
    "tagline": "당신의 마음을 물들이는 색깔은 무엇일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "주말 아침, 눈을 뜨자마자 드는 생각은?",
        "options": [
          {
            "text": "오늘은 뭘 하고 놀지!",
            "value": "red"
          },
          {
            "text": "오늘 할 일부터 정리해야지",
            "value": "blue"
          },
          {
            "text": "일단 더 잘래...",
            "value": "yellow"
          },
          {
            "text": "다들 뭐 하고 있으려나?",
            "value": "green"
          }
        ]
      },
      {
        "text": "친구들과 여행 계획을 짤 때 나는?",
        "options": [
          {
            "text": "재밌는 액티비티부터 찾는다",
            "value": "red"
          },
          {
            "text": "일정과 예산을 꼼꼼히 짠다",
            "value": "blue"
          },
          {
            "text": "가서 정하지 뭐~",
            "value": "yellow"
          },
          {
            "text": "다들 좋다는 곳으로 맞춘다",
            "value": "green"
          }
        ]
      },
      {
        "text": "새로운 프로젝트를 맡았을 때",
        "options": [
          {
            "text": "일단 뛰어들어서 시작한다",
            "value": "red"
          },
          {
            "text": "계획부터 꼼꼼히 세운다",
            "value": "blue"
          },
          {
            "text": "분위기 봐가며 천천히",
            "value": "yellow"
          },
          {
            "text": "팀원들과 먼저 상의한다",
            "value": "green"
          }
        ]
      },
      {
        "text": "의견 충돌이 생기면 나는?",
        "options": [
          {
            "text": "하고 싶은 말은 바로 한다",
            "value": "red"
          },
          {
            "text": "논리적으로 정리해서 말한다",
            "value": "blue"
          },
          {
            "text": "웬만하면 그냥 넘어간다",
            "value": "yellow"
          },
          {
            "text": "상대 입장을 먼저 헤아린다",
            "value": "green"
          }
        ]
      },
      {
        "text": "옷장을 열어보면 대체로?",
        "options": [
          {
            "text": "눈에 띄는 색이 많다",
            "value": "red"
          },
          {
            "text": "깔끔한 무채색 위주다",
            "value": "blue"
          },
          {
            "text": "그냥 편한 옷들이다",
            "value": "yellow"
          },
          {
            "text": "따뜻한 파스텔톤이 많다",
            "value": "green"
          }
        ]
      },
      {
        "text": "스트레스가 쌓이면 나는?",
        "options": [
          {
            "text": "몸을 움직인다 (운동, 춤)",
            "value": "red"
          },
          {
            "text": "혼자 생각을 정리한다",
            "value": "blue"
          },
          {
            "text": "그냥 눕는다",
            "value": "yellow"
          },
          {
            "text": "사람 만나서 수다를 떤다",
            "value": "green"
          }
        ]
      },
      {
        "text": "회의 중 아이디어가 떠오르면?",
        "options": [
          {
            "text": "바로 손 들고 말한다",
            "value": "red"
          },
          {
            "text": "순서를 기다렸다 말한다",
            "value": "blue"
          },
          {
            "text": "굳이 말 안 해도 괜찮다",
            "value": "yellow"
          },
          {
            "text": "다른 사람 의견부터 듣는다",
            "value": "green"
          }
        ]
      },
      {
        "text": "내 방을 한마디로 표현한다면?",
        "options": [
          {
            "text": "활기찬 놀이터",
            "value": "red"
          },
          {
            "text": "정돈된 사무실",
            "value": "blue"
          },
          {
            "text": "포근한 이불 속",
            "value": "yellow"
          },
          {
            "text": "아늑한 카페",
            "value": "green"
          }
        ]
      }
    ],
    "categories": {
      "red": {
        "title": "레드 – 열정 폭발형",
        "emoji": "🔴",
        "desc": "에너지 넘치고 즉흥적인 당신은 어디서든 분위기 메이커! 하고 싶은 일은 일단 시작하고 보는 실행력이 최대 강점이에요. 가끔은 숨 고르는 여유도 챙겨보세요."
      },
      "blue": {
        "title": "블루 – 신중한 전략가형",
        "emoji": "🔵",
        "desc": "계획적이고 분석적인 당신은 믿고 맡길 수 있는 사람이에요. 무슨 일이든 흔들림 없이 차근차근 해내죠. 가끔은 계획 없이 즉흥적으로 움직여보는 것도 좋아요."
      },
      "yellow": {
        "title": "옐로우 – 자유로운 영혼형",
        "emoji": "🟡",
        "desc": "느긋하고 유연한 당신은 어떤 상황에서도 크게 흔들리지 않는 편안함을 지녔어요. 스트레스에 강하지만, 가끔은 조금 더 적극적으로 나서보는 것도 좋겠어요."
      },
      "green": {
        "title": "그린 – 따뜻한 조율자형",
        "emoji": "🟢",
        "desc": "배려심 많고 평화를 사랑하는 당신은 주변 사람들을 편안하게 만드는 재주가 있어요. 다만 본인의 마음을 더 자주 표현하는 연습도 필요해요."
      }
    }
  },
  {
    "id": "animal",
    "tag": "동물상",
    "title": "나와 닮은 동물상 테스트",
    "emoji": "🐾",
    "tagline": "당신 안에 숨어있는 동물 캐릭터를 찾아보세요",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "낯선 모임에 초대받았을 때 나는?",
        "options": [
          {
            "text": "먼저 다가가서 인사한다",
            "value": "dog"
          },
          {
            "text": "분위기를 살피며 거리를 둔다",
            "value": "cat"
          },
          {
            "text": "눈치껏 필요한 사람에게만 다가간다",
            "value": "fox"
          },
          {
            "text": "구석에서 편하게 관찰한다",
            "value": "bear"
          }
        ]
      },
      {
        "text": "친구가 힘들다고 연락이 왔을 때?",
        "options": [
          {
            "text": "바로 달려가서 옆에 있어준다",
            "value": "dog"
          },
          {
            "text": "필요할 때 조용히 도와준다",
            "value": "cat"
          },
          {
            "text": "현실적인 해결책을 제시한다",
            "value": "fox"
          },
          {
            "text": "묵묵히 이야기를 들어준다",
            "value": "bear"
          }
        ]
      },
      {
        "text": "칭찬을 받았을 때 반응은?",
        "options": [
          {
            "text": "표정에 바로 드러난다 (신남)",
            "value": "dog"
          },
          {
            "text": "속으로만 좋아하고 티 안 낸다",
            "value": "cat"
          },
          {
            "text": "겸손하게 받아치며 여유롭게 넘긴다",
            "value": "fox"
          },
          {
            "text": "쑥스러워서 어쩔 줄 모른다",
            "value": "bear"
          }
        ]
      },
      {
        "text": "일할 때 나의 스타일은?",
        "options": [
          {
            "text": "팀원들과 에너지 넘치게",
            "value": "dog"
          },
          {
            "text": "혼자 집중해서 처리",
            "value": "cat"
          },
          {
            "text": "효율적으로 요령있게",
            "value": "fox"
          },
          {
            "text": "묵묵하고 꾸준하게",
            "value": "bear"
          }
        ]
      },
      {
        "text": "연애할 때 나는?",
        "options": [
          {
            "text": "애정 표현을 아낌없이 한다",
            "value": "dog"
          },
          {
            "text": "은근하고 담백하게 표현한다",
            "value": "cat"
          },
          {
            "text": "밀당을 즐기는 편이다",
            "value": "fox"
          },
          {
            "text": "우직하게 한 사람만 바라본다",
            "value": "bear"
          }
        ]
      },
      {
        "text": "주말에 가장 하고 싶은 것은?",
        "options": [
          {
            "text": "사람들과 왁자지껄 모임",
            "value": "dog"
          },
          {
            "text": "혼자만의 조용한 시간",
            "value": "cat"
          },
          {
            "text": "새로운 곳으로 여행/탐험",
            "value": "fox"
          },
          {
            "text": "집에서 뒹굴며 휴식",
            "value": "bear"
          }
        ]
      },
      {
        "text": "화가 났을 때 나는?",
        "options": [
          {
            "text": "바로 표현하고 금방 푼다",
            "value": "dog"
          },
          {
            "text": "티 안 내고 조용히 삭힌다",
            "value": "cat"
          },
          {
            "text": "차분하게 논리로 짚는다",
            "value": "fox"
          },
          {
            "text": "속으로 오래 담아둔다",
            "value": "bear"
          }
        ]
      },
      {
        "text": "사람들이 나를 표현할 때 자주 쓰는 말은?",
        "options": [
          {
            "text": "붙임성 좋고 다정하다",
            "value": "dog"
          },
          {
            "text": "차분하고 신비롭다",
            "value": "cat"
          },
          {
            "text": "영리하고 눈치가 빠르다",
            "value": "fox"
          },
          {
            "text": "듬직하고 믿음직하다",
            "value": "bear"
          }
        ]
      }
    ],
    "categories": {
      "dog": {
        "title": "강아지상 – 사랑둥이",
        "emoji": "🐶",
        "desc": "표현이 솔직하고 다정한 당신 곁에는 늘 사람이 끊이지 않아요. 감정을 숨기지 않는 매력이 있지만, 가끔은 혼자만의 시간도 챙겨주세요."
      },
      "cat": {
        "title": "고양이상 – 은은한 매력",
        "emoji": "🐱",
        "desc": "차분하고 신비로운 분위기의 당신은 알수록 매력적인 사람이에요. 곁을 잘 안 주는 편이지만 한 번 마음을 열면 누구보다 깊게 챙기죠."
      },
      "fox": {
        "title": "여우상 – 영리한 전략가",
        "emoji": "🦊",
        "desc": "눈치가 빠르고 상황 판단이 뛰어난 당신! 어디서든 손해 보지 않는 영리함을 가졌어요. 그 재치로 주변 사람들을 즐겁게 만들죠."
      },
      "bear": {
        "title": "곰상 – 듬직한 버팀목",
        "emoji": "🐻",
        "desc": "우직하고 믿음직한 당신은 주변 사람들의 든든한 버팀목이에요. 표현은 서툴러도 진심은 누구보다 깊은 사람이에요."
      }
    }
  },
  {
    "id": "mentalage",
    "tag": "재미",
    "title": "나의 정신연령 테스트",
    "emoji": "🎂",
    "tagline": "실제 나이 말고, 마음 나이는 몇 살일까요?",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "친구와 약속을 잡을 때 나는?",
        "options": [
          {
            "text": "즉흥적으로 바로 나간다",
            "value": 1
          },
          {
            "text": "당일에 계획을 짠다",
            "value": 2
          },
          {
            "text": "며칠 전부터 준비한다",
            "value": 3
          },
          {
            "text": "일정표에 미리 적어둔다",
            "value": 4
          }
        ]
      },
      {
        "text": "새로운 유행이 생기면?",
        "options": [
          {
            "text": "제일 먼저 따라 해본다",
            "value": 1
          },
          {
            "text": "재밌어 보이면 시도한다",
            "value": 2
          },
          {
            "text": "굳이 따라갈 필요를 못 느낀다",
            "value": 3
          },
          {
            "text": "이해가 잘 안 된다",
            "value": 4
          }
        ]
      },
      {
        "text": "돈 관리 스타일은?",
        "options": [
          {
            "text": "있으면 있는 대로 쓴다",
            "value": 1
          },
          {
            "text": "그때그때 상황 봐서",
            "value": 2
          },
          {
            "text": "가계부를 쓰며 관리한다",
            "value": 3
          },
          {
            "text": "저축과 투자 계획이 뚜렷하다",
            "value": 4
          }
        ]
      },
      {
        "text": "주말에 더 끌리는 활동은?",
        "options": [
          {
            "text": "액티비티, 클럽, 축제",
            "value": 1
          },
          {
            "text": "친구들과 카페, 맛집 탐방",
            "value": 2
          },
          {
            "text": "전시, 산책, 독서",
            "value": 3
          },
          {
            "text": "집 정리, 텃밭, 다도",
            "value": 4
          }
        ]
      },
      {
        "text": "고민이 생겼을 때?",
        "options": [
          {
            "text": "일단 부딪혀 보며 해결한다",
            "value": 1
          },
          {
            "text": "친구에게 털어놓는다",
            "value": 2
          },
          {
            "text": "혼자 차분히 정리해본다",
            "value": 3
          },
          {
            "text": "장단점을 표로 정리해 분석한다",
            "value": 4
          }
        ]
      },
      {
        "text": "좋아하는 콘텐츠 취향은?",
        "options": [
          {
            "text": "최신 유행 챌린지/밈",
            "value": 1
          },
          {
            "text": "예능, 드라마",
            "value": 2
          },
          {
            "text": "다큐멘터리, 시사교양",
            "value": 3
          },
          {
            "text": "뉴스, 경제 프로그램",
            "value": 4
          }
        ]
      },
      {
        "text": "선물을 받고 싶다면?",
        "options": [
          {
            "text": "재밌는 굿즈나 소품",
            "value": 1
          },
          {
            "text": "예쁜 옷이나 액세서리",
            "value": 2
          },
          {
            "text": "실용적인 생활용품",
            "value": 3
          },
          {
            "text": "건강식품이나 안마기",
            "value": 4
          }
        ]
      },
      {
        "text": "요즘 가장 큰 관심사는?",
        "options": [
          {
            "text": "재밌는 거 찾아다니기",
            "value": 1
          },
          {
            "text": "연애, 인간관계",
            "value": 2
          },
          {
            "text": "자기계발, 커리어",
            "value": 3
          },
          {
            "text": "건강, 노후 준비",
            "value": 4
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 14,
        "title": "10대 감성 만렙",
        "emoji": "🍭",
        "desc": "무엇이든 즉흥적이고 에너지 넘치는 당신! 세상 모든 게 재밌고 신나는 10대 감성을 가지고 있어요. 그 순수한 호기심을 오래오래 간직하세요."
      },
      {
        "min": 15,
        "max": 20,
        "title": "20대 초반 감성",
        "emoji": "🎧",
        "desc": "유행에 민감하고 사람 만나는 걸 좋아하는 당신. 하고 싶은 게 많고 도전을 두려워하지 않는 청춘의 마음을 가지고 있어요."
      },
      {
        "min": 21,
        "max": 26,
        "title": "30대 어른 감성",
        "emoji": "☕",
        "desc": "안정과 자기계발 사이에서 균형을 잘 잡는 당신. 차분하지만 여전히 새로운 것에 열려있는 성숙한 마음을 가지고 있어요."
      },
      {
        "min": 27,
        "max": 32,
        "title": "인생 선배 감성",
        "emoji": "🍵",
        "desc": "여유롭고 신중한 당신은 이미 많은 걸 겪어본 듯한 통찰력을 지녔어요. 주변 사람들이 조언을 구하러 오는 든든한 존재죠."
      }
    ]
  },
  {
    "id": "stress",
    "tag": "힐링",
    "title": "나의 스트레스 지수 테스트",
    "emoji": "🌿",
    "tagline": "요즘 내 마음, 얼마나 지쳐있을까요?",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "요즘 잠은 잘 자나요?",
        "options": [
          {
            "text": "눕자마자 푹 잔다",
            "value": 1
          },
          {
            "text": "가끔 뒤척인다",
            "value": 2
          },
          {
            "text": "자주 뒤척이고 깬다",
            "value": 3
          },
          {
            "text": "거의 매일 잠들기 힘들다",
            "value": 4
          }
        ]
      },
      {
        "text": "작은 일에도 짜증이 나나요?",
        "options": [
          {
            "text": "거의 없다",
            "value": 1
          },
          {
            "text": "가끔 그렇다",
            "value": 2
          },
          {
            "text": "자주 그렇다",
            "value": 3
          },
          {
            "text": "거의 매일 그렇다",
            "value": 4
          }
        ]
      },
      {
        "text": "식욕은 평소와 비교해서?",
        "options": [
          {
            "text": "평소와 비슷하다",
            "value": 1
          },
          {
            "text": "조금 줄거나 늘었다",
            "value": 2
          },
          {
            "text": "꽤 많이 변했다",
            "value": 3
          },
          {
            "text": "거의 없거나 폭식한다",
            "value": 4
          }
        ]
      },
      {
        "text": "혼자만의 시간이 있나요?",
        "options": [
          {
            "text": "충분히 있다",
            "value": 1
          },
          {
            "text": "가끔 있다",
            "value": 2
          },
          {
            "text": "거의 없다",
            "value": 3
          },
          {
            "text": "전혀 없다",
            "value": 4
          }
        ]
      },
      {
        "text": "몸이 자주 피곤하거나 아픈가요?",
        "options": [
          {
            "text": "거의 없다",
            "value": 1
          },
          {
            "text": "가끔 그렇다",
            "value": 2
          },
          {
            "text": "자주 그렇다",
            "value": 3
          },
          {
            "text": "매일 그렇다",
            "value": 4
          }
        ]
      },
      {
        "text": "집중이 잘 안 될 때가 있나요?",
        "options": [
          {
            "text": "거의 없다",
            "value": 1
          },
          {
            "text": "가끔 그렇다",
            "value": 2
          },
          {
            "text": "자주 그렇다",
            "value": 3
          },
          {
            "text": "일이 손에 안 잡힌다",
            "value": 4
          }
        ]
      },
      {
        "text": "요즘 웃는 일이?",
        "options": [
          {
            "text": "많다",
            "value": 1
          },
          {
            "text": "보통이다",
            "value": 2
          },
          {
            "text": "적은 편이다",
            "value": 3
          },
          {
            "text": "거의 없다",
            "value": 4
          }
        ]
      },
      {
        "text": "할 일이 쌓여있다고 느끼나요?",
        "options": [
          {
            "text": "여유롭게 처리 중이다",
            "value": 1
          },
          {
            "text": "조금 밀려있다",
            "value": 2
          },
          {
            "text": "많이 밀려있다",
            "value": 3
          },
          {
            "text": "감당이 안 될 정도다",
            "value": 4
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 14,
        "title": "여유만렙 – 평온 지수",
        "emoji": "🌤️",
        "desc": "마음이 꽤 편안한 상태예요. 지금의 좋은 루틴과 여유를 잘 유지해보세요. 가끔은 작은 변화를 주는 것도 활력이 될 수 있어요."
      },
      {
        "min": 15,
        "max": 20,
        "title": "보통 – 관리가 필요해요",
        "emoji": "🌥️",
        "desc": "약간의 피로가 쌓여있는 상태예요. 짧은 산책이나 충분한 수면처럼 작은 휴식을 꾸준히 챙겨보세요."
      },
      {
        "min": 21,
        "max": 26,
        "title": "주의 – 마음이 지쳐있어요",
        "emoji": "🌧️",
        "desc": "스트레스가 꽤 쌓여있는 상태예요. 하루 중 온전히 나만을 위한 시간을 꼭 마련하고, 주변에 마음을 나눠보세요."
      },
      {
        "min": 27,
        "max": 32,
        "title": "경고 – 충분한 휴식이 필요해요",
        "emoji": "⛈️",
        "desc": "몸과 마음이 많이 지쳐있는 상태로 보여요. 혼자 견디기보다 가까운 사람과 이야기하거나, 필요하다면 전문가의 도움을 받는 것도 좋은 방법이에요."
      }
    ]
  },
  {
    "id": "food",
    "tag": "음식",
    "title": "나의 음식 취향 테스트",
    "emoji": "🍽️",
    "tagline": "당신의 진짜 입맛은 어떤 스타일일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "회식 메뉴를 내가 고를 수 있다면?",
        "options": [
          {
            "text": "마라탕이나 불닭처럼 매콤한 메뉴",
            "value": "spicy"
          },
          {
            "text": "고기 무제한 메뉴",
            "value": "meat"
          },
          {
            "text": "샐러드바나 건강식당",
            "value": "light"
          },
          {
            "text": "디저트 뷔페",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "배달앱을 켰을 때 가장 먼저 검색하는 건?",
        "options": [
          {
            "text": "'매운맛' 필터부터 켠다",
            "value": "spicy"
          },
          {
            "text": "고기, 치킨류",
            "value": "meat"
          },
          {
            "text": "샐러드, 포케",
            "value": "light"
          },
          {
            "text": "케이크, 빙수",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "스트레스 받을 때 당기는 음식은?",
        "options": [
          {
            "text": "불닭볶음면",
            "value": "spicy"
          },
          {
            "text": "삼겹살, 스테이크",
            "value": "meat"
          },
          {
            "text": "과일, 요거트",
            "value": "light"
          },
          {
            "text": "초콜릿, 아이스크림",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "여행지에서 꼭 먹어봐야 하는 음식은?",
        "options": [
          {
            "text": "현지의 매운 향신료 요리",
            "value": "spicy"
          },
          {
            "text": "그 지역 명물 고기 요리",
            "value": "meat"
          },
          {
            "text": "신선한 채소·해산물 요리",
            "value": "light"
          },
          {
            "text": "유명한 디저트나 빵집",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "매운맛 단계를 고를 수 있다면 나는?",
        "options": [
          {
            "text": "가장 매운 단계에 도전한다",
            "value": "spicy"
          },
          {
            "text": "매운 건 별로, 고기나 더 먹는다",
            "value": "meat"
          },
          {
            "text": "순한 맛으로 무난하게",
            "value": "light"
          },
          {
            "text": "애초에 매운 것보다 단 게 좋다",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "카페에 가면 주로 주문하는 건?",
        "options": [
          {
            "text": "매콤한 스낵류",
            "value": "spicy"
          },
          {
            "text": "든든한 샌드위치·브런치",
            "value": "meat"
          },
          {
            "text": "그린 스무디나 샐러드",
            "value": "light"
          },
          {
            "text": "조각 케이크와 달달한 음료",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "냉장고를 열었을 때 항상 있는 재료는?",
        "options": [
          {
            "text": "청양고추, 핫소스",
            "value": "spicy"
          },
          {
            "text": "고기, 계란",
            "value": "meat"
          },
          {
            "text": "채소, 두부",
            "value": "light"
          },
          {
            "text": "초콜릿, 아이스크림",
            "value": "dessert"
          }
        ]
      },
      {
        "text": "나에게 완벽한 한 끼란?",
        "options": [
          {
            "text": "땀 나게 매운 한 그릇",
            "value": "spicy"
          },
          {
            "text": "고기가 듬뿍 든 든든한 한 상",
            "value": "meat"
          },
          {
            "text": "가볍고 신선한 건강식",
            "value": "light"
          },
          {
            "text": "메인보다 디저트가 진짜 주인공",
            "value": "dessert"
          }
        ]
      }
    ],
    "categories": {
      "spicy": {
        "title": "화끈 매운맛파 – 자극적인 짜릿함",
        "emoji": "🌶️",
        "desc": "화끈하고 짜릿한 매운맛이 있어야 스트레스가 풀리는 당신! 자극적인 걸 즐기는 만큼 도전정신도 강해요. 가끔은 위장을 위해 순한 음식도 챙겨주세요."
      },
      "meat": {
        "title": "든든 고기파 – 포만감이 최고",
        "emoji": "🍖",
        "desc": "배부르고 든든해야 진짜 잘 먹었다고 느끼는 당신. 확실한 포만감을 주는 메뉴를 좋아해요. 야채도 곁들여 먹으면 더 좋겠죠?"
      },
      "light": {
        "title": "건강 담백파 – 가볍고 신선하게",
        "emoji": "🥗",
        "desc": "몸이 가벼워야 마음도 편한 당신은 신선하고 담백한 음식을 선호해요. 자기관리에 신경 쓰는 편이지만, 가끔은 맛있는 것도 마음껏 즐겨보세요."
      },
      "dessert": {
        "title": "달콤 디저트파 – 인생은 단짠단짠",
        "emoji": "🍰",
        "desc": "메인 메뉴보다 디저트가 더 중요한 당신에게 하루의 행복은 달콤함에서 와요. 단 걸 먹을 때 스트레스가 풀리는 타입이지만 당 섭취는 적당히!"
      }
    }
  },
  {
    "id": "travel",
    "tag": "여행",
    "title": "나의 여행 스타일 테스트",
    "emoji": "✈️",
    "tagline": "떠나는 방식만 봐도 알 수 있는 진짜 나의 모습",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "여행 계획을 짤 때 나는?",
        "options": [
          {
            "text": "시간표까지 짜서 완벽하게 준비한다",
            "value": "plan"
          },
          {
            "text": "비행기표만 끊고 나머진 가서 정한다",
            "value": "spontaneous"
          },
          {
            "text": "숙소 위주로 느긋하게 정한다",
            "value": "relax"
          },
          {
            "text": "액티비티 예약부터 알아본다",
            "value": "active"
          }
        ]
      },
      {
        "text": "여행지에 도착하면 제일 먼저 하는 건?",
        "options": [
          {
            "text": "미리 짜둔 코스대로 출발",
            "value": "plan"
          },
          {
            "text": "발길 닿는 대로 걷는다",
            "value": "spontaneous"
          },
          {
            "text": "숙소에서 여유롭게 쉰다",
            "value": "relax"
          },
          {
            "text": "액티비티 센터부터 찾는다",
            "value": "active"
          }
        ]
      },
      {
        "text": "여행 중 예상치 못한 일이 생기면?",
        "options": [
          {
            "text": "당황스럽지만 바로 대안을 짠다",
            "value": "plan"
          },
          {
            "text": "오히려 재밌는 이벤트라고 생각한다",
            "value": "spontaneous"
          },
          {
            "text": "그냥 흘러가는 대로 받아들인다",
            "value": "relax"
          },
          {
            "text": "몸으로 부딪히며 해결한다",
            "value": "active"
          }
        ]
      },
      {
        "text": "여행 사진첩을 보면 대체로?",
        "options": [
          {
            "text": "명소별로 각 잡고 찍은 사진들",
            "value": "plan"
          },
          {
            "text": "즉흥적으로 찍은 웃긴 사진들",
            "value": "spontaneous"
          },
          {
            "text": "노을, 풍경 위주의 힐링샷",
            "value": "relax"
          },
          {
            "text": "액티비티하며 찍은 역동적인 사진",
            "value": "active"
          }
        ]
      },
      {
        "text": "이상적인 여행 동반자는?",
        "options": [
          {
            "text": "계획을 함께 짜줄 사람",
            "value": "plan"
          },
          {
            "text": "어디로 튈지 모르는 자유로운 사람",
            "value": "spontaneous"
          },
          {
            "text": "말 없이도 편안한 사람",
            "value": "relax"
          },
          {
            "text": "체력 좋고 뭐든 같이 도전할 사람",
            "value": "active"
          }
        ]
      },
      {
        "text": "여행 예산을 짤 때는?",
        "options": [
          {
            "text": "항목별로 세세하게 계산한다",
            "value": "plan"
          },
          {
            "text": "일단 쓰고 본다",
            "value": "spontaneous"
          },
          {
            "text": "숙소에 가장 많이 투자한다",
            "value": "relax"
          },
          {
            "text": "액티비티·체험에 아낌없이 쓴다",
            "value": "active"
          }
        ]
      },
      {
        "text": "낯선 도시에서 길을 잃으면?",
        "options": [
          {
            "text": "미리 저장해둔 지도로 바로 해결한다",
            "value": "plan"
          },
          {
            "text": "그냥 헤매는 것도 여행이라 생각한다",
            "value": "spontaneous"
          },
          {
            "text": "근처 카페에서 쉬며 생각한다",
            "value": "relax"
          },
          {
            "text": "지나가는 사람에게 물어보며 모험처럼 즐긴다",
            "value": "active"
          }
        ]
      },
      {
        "text": "나에게 완벽한 여행이란?",
        "options": [
          {
            "text": "계획한 대로 완벽하게 끝난 여행",
            "value": "plan"
          },
          {
            "text": "예상 밖의 순간들로 가득한 여행",
            "value": "spontaneous"
          },
          {
            "text": "아무것도 안 하고 푹 쉰 여행",
            "value": "relax"
          },
          {
            "text": "몸이 부서져라 놀았던 여행",
            "value": "active"
          }
        ]
      }
    ],
    "categories": {
      "plan": {
        "title": "완벽 계획형 – 여행은 준비부터 즐거움",
        "emoji": "🗺️",
        "desc": "꼼꼼하게 세운 계획 덕분에 여행 중 시행착오가 적은 당신. 알찬 일정을 소화하는 능력이 뛰어나요. 가끔은 계획을 내려놓고 즉흥적인 순간도 즐겨보세요."
      },
      "spontaneous": {
        "title": "즉흥 방랑형 – 발길 닿는 대로",
        "emoji": "🎒",
        "desc": "정해진 것 없이 흘러가는 여행에서 진짜 매력을 느끼는 당신. 예상치 못한 순간들이 최고의 추억이 되곤 해요. 최소한의 안전장치는 챙겨두는 게 좋아요."
      },
      "relax": {
        "title": "힐링 여유형 – 쉼이 곧 여행",
        "emoji": "🌅",
        "desc": "빡빡한 일정보다 여유로운 휴식이 진짜 여행이라고 생각하는 당신. 몸과 마음을 충전하는 시간을 소중히 여겨요. 가끔은 새로운 도전도 재충전이 될 수 있어요."
      },
      "active": {
        "title": "액티비티 탐험형 – 몸으로 즐기는 여행",
        "emoji": "🏄",
        "desc": "가만히 있기보다 직접 부딪히며 체험해야 여행이 실감 나는 당신. 에너지 넘치는 모험을 즐길 줄 알아요. 체력 관리도 여행 준비물 중 하나라는 걸 잊지 마세요."
      }
    }
  },
  {
    "id": "pastlife",
    "tag": "판타지",
    "title": "나의 전생 테스트",
    "emoji": "🔮",
    "tagline": "재미로 알아보는 나의 전생은 어떤 모습이었을까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "어릴 때부터 유독 끌렸던 것은?",
        "options": [
          {
            "text": "화려한 궁전, 왕관 같은 것들",
            "value": "royal"
          },
          {
            "text": "그림, 음악, 시 같은 예술",
            "value": "artist"
          },
          {
            "text": "검, 갑옷, 전쟁 이야기",
            "value": "warrior"
          },
          {
            "text": "지도, 낯선 나라 이야기",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "꿈에서 자주 나타나는 배경은?",
        "options": [
          {
            "text": "웅장한 성이나 궁궐",
            "value": "royal"
          },
          {
            "text": "조용한 작업실이나 무대",
            "value": "artist"
          },
          {
            "text": "전쟁터나 훈련장",
            "value": "warrior"
          },
          {
            "text": "바다, 사막 같은 낯선 풍경",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "사람들과 있을 때 나의 역할은?",
        "options": [
          {
            "text": "자연스럽게 중심에 서서 이끈다",
            "value": "royal"
          },
          {
            "text": "분위기를 감성적으로 채운다",
            "value": "artist"
          },
          {
            "text": "위기 상황에서 앞장선다",
            "value": "warrior"
          },
          {
            "text": "새로운 이야기와 정보를 물어다 준다",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "갑자기 큰돈이 생긴다면?",
        "options": [
          {
            "text": "품격 있는 물건에 투자한다",
            "value": "royal"
          },
          {
            "text": "작품 활동, 예술에 쓴다",
            "value": "artist"
          },
          {
            "text": "몸을 단련하는 데 쓴다",
            "value": "warrior"
          },
          {
            "text": "바로 여행 티켓을 끊는다",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "스트레스를 풀 때 나는?",
        "options": [
          {
            "text": "품위 있게 혼자만의 시간을 갖는다",
            "value": "royal"
          },
          {
            "text": "글을 쓰거나 그림을 그린다",
            "value": "artist"
          },
          {
            "text": "몸을 움직이며 땀을 뺀다",
            "value": "warrior"
          },
          {
            "text": "훌쩍 어디론가 떠난다",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "골동품 시장에서 눈길이 가는 물건은?",
        "options": [
          {
            "text": "화려한 장신구나 왕관 모양 소품",
            "value": "royal"
          },
          {
            "text": "오래된 악기나 그림",
            "value": "artist"
          },
          {
            "text": "낡은 칼이나 갑옷",
            "value": "warrior"
          },
          {
            "text": "이국적인 지도나 나침반",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "사람들이 나를 표현한다면?",
        "options": [
          {
            "text": "품격 있고 카리스마 있는 사람",
            "value": "royal"
          },
          {
            "text": "감성적이고 독특한 사람",
            "value": "artist"
          },
          {
            "text": "용감하고 의리 있는 사람",
            "value": "warrior"
          },
          {
            "text": "자유롭고 호기심 많은 사람",
            "value": "wanderer"
          }
        ]
      },
      {
        "text": "만약 과거로 돌아간다면 살고 싶은 삶은?",
        "options": [
          {
            "text": "궁전에서 나라를 다스리는 삶",
            "value": "royal"
          },
          {
            "text": "예술로 이름을 남기는 삶",
            "value": "artist"
          },
          {
            "text": "명예를 지키며 싸우는 삶",
            "value": "warrior"
          },
          {
            "text": "세계 곳곳을 누비는 상인의 삶",
            "value": "wanderer"
          }
        ]
      }
    ],
    "categories": {
      "royal": {
        "title": "왕족 – 우아한 통치자의 전생",
        "emoji": "👑",
        "desc": "타고난 카리스마와 품격을 지닌 당신. 전생에 사람들을 이끄는 자리에 있었을지도 몰라요. 지금도 무리 속에서 자연스럽게 중심이 되는 편이죠."
      },
      "artist": {
        "title": "예술가 – 시대를 앞서간 창작자의 전생",
        "emoji": "🎨",
        "desc": "감성이 풍부하고 표현력이 남다른 당신. 전생에 그림이나 음악으로 사람들의 마음을 움직였을지도 몰라요. 지금도 독특한 시선으로 세상을 바라봐요."
      },
      "warrior": {
        "title": "무사 – 명예를 지킨 전사의 전생",
        "emoji": "⚔️",
        "desc": "의리 있고 용감한 당신. 전생에 소중한 것을 지키기 위해 앞장섰을지도 몰라요. 지금도 위기 상황에서 믿음직한 사람으로 통해요."
      },
      "wanderer": {
        "title": "방랑 상인 – 세상을 누빈 자유인의 전생",
        "emoji": "🧭",
        "desc": "호기심 많고 자유로운 영혼을 가진 당신. 전생에 세계 곳곳을 누비며 새로운 것들을 발견했을지도 몰라요. 지금도 낯선 곳에 대한 설렘이 남다르죠."
      }
    }
  },
  {
    "id": "meme",
    "tag": "밈",
    "title": "나의 인터넷 밈 캐릭터 테스트",
    "emoji": "📱",
    "tagline": "단톡방·SNS 속 나는 어떤 캐릭터일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "단톡방에 웃긴 짤이 올라오면 나는?",
        "options": [
          {
            "text": "ㅋㅋㅋㅋㅋ 바로 폭풍 리액션",
            "value": "hype"
          },
          {
            "text": "속으로 웃지만 그냥 읽는다",
            "value": "lurker"
          },
          {
            "text": "더 웃긴 짤로 바로 받아친다",
            "value": "trendsetter"
          },
          {
            "text": "짧고 임팩트 있는 한마디만 던진다",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "새로운 유행어가 생기면?",
        "options": [
          {
            "text": "바로 써먹으면서 신나한다",
            "value": "hype"
          },
          {
            "text": "남들 쓰는 거 보고 나서야 안다",
            "value": "lurker"
          },
          {
            "text": "내가 먼저 퍼뜨리는 편이다",
            "value": "trendsetter"
          },
          {
            "text": "알아도 굳이 잘 안 쓴다",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "단체 사진을 찍을 때 나는?",
        "options": [
          {
            "text": "제일 과한 포즈를 잡는다",
            "value": "hype"
          },
          {
            "text": "뒤쪽에서 조용히 서 있는다",
            "value": "lurker"
          },
          {
            "text": "컨셉을 제안하고 이끈다",
            "value": "trendsetter"
          },
          {
            "text": "무표정으로 그냥 서 있는다",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "SNS 스토리를 올릴 때는?",
        "options": [
          {
            "text": "하루에도 여러 번 올린다",
            "value": "hype"
          },
          {
            "text": "거의 안 올리고 남의 것만 본다",
            "value": "lurker"
          },
          {
            "text": "트렌디한 포맷을 제일 먼저 시도한다",
            "value": "trendsetter"
          },
          {
            "text": "어쩌다 한 번, 짧고 심플하게",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "친구가 실수로 웃긴 짓을 하면?",
        "options": [
          {
            "text": "크게 웃으며 바로 놀린다",
            "value": "hype"
          },
          {
            "text": "속으로만 빵 터진다",
            "value": "lurker"
          },
          {
            "text": "그 순간을 바로 밈으로 만든다",
            "value": "trendsetter"
          },
          {
            "text": "'그럴 줄 알았다'는 표정만 짓는다",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "모임에서 침묵이 흐르면?",
        "options": [
          {
            "text": "먼저 나서서 분위기를 띄운다",
            "value": "hype"
          },
          {
            "text": "그냥 가만히 있는다",
            "value": "lurker"
          },
          {
            "text": "재밌는 이야깃거리를 꺼낸다",
            "value": "trendsetter"
          },
          {
            "text": "짧은 드립 하나 던지고 다시 조용해진다",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "이모티콘을 고를 때 나는?",
        "options": [
          {
            "text": "감정 과장된 이모티콘 총출동",
            "value": "hype"
          },
          {
            "text": "기본 이모티콘 하나로 끝",
            "value": "lurker"
          },
          {
            "text": "최신 유행 이모티콘부터 산다",
            "value": "trendsetter"
          },
          {
            "text": "뼈 있는 드립 이모티콘 선호",
            "value": "deadpan"
          }
        ]
      },
      {
        "text": "친구들이 생각하는 나는?",
        "options": [
          {
            "text": "있으면 시끌벅적, 에너자이저",
            "value": "hype"
          },
          {
            "text": "조용하지만 다 지켜보고 있는 사람",
            "value": "lurker"
          },
          {
            "text": "늘 새로운 걸 제일 먼저 아는 사람",
            "value": "trendsetter"
          },
          {
            "text": "말은 없지만 할 말은 다 하는 사람",
            "value": "deadpan"
          }
        ]
      }
    ],
    "categories": {
      "hype": {
        "title": "리액션 대장형 – 텐션이 국룰",
        "emoji": "🎉",
        "desc": "언제나 에너지 넘치는 리액션으로 분위기를 살리는 당신. 있는 것만으로도 모임이 즐거워져요. 가끔은 리액션 없이 조용히 듣는 것도 매력이에요."
      },
      "lurker": {
        "title": "눈팅 관찰형 – 조용히 다 보고 있다",
        "emoji": "👀",
        "desc": "말은 적어도 대화의 흐름을 놓치지 않는 당신. 조용하지만 은근히 존재감 있는 타입이에요. 가끔은 먼저 말을 걸어보는 것도 좋아요."
      },
      "trendsetter": {
        "title": "밈 제조기형 – 유행은 내가 만든다",
        "emoji": "🔥",
        "desc": "누구보다 빠르게 유행을 캐치하고 만들어내는 당신. 센스 있는 드립으로 대화방의 분위기 메이커예요. 가끔은 트렌드 없이도 편하게 쉬어가세요."
      },
      "deadpan": {
        "title": "무심 드립형 – 말은 없어도 임팩트는 확실히",
        "emoji": "😏",
        "desc": "말수는 적지만 한마디가 늘 웃긴 당신. 무심한 듯 던지는 드립이 진짜 매력이에요. 가끔은 리액션을 조금 더 크게 해줘도 상대가 좋아할 거예요."
      }
    }
  },
  {
    "id": "worktype",
    "tag": "직장생활",
    "title": "나의 업무 스타일 테스트",
    "emoji": "💼",
    "tagline": "회사에서, 학교에서 진짜 내 모습은 어떤 스타일일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "새 프로젝트가 주어지면?",
        "options": [
          {
            "text": "계획부터 세운다",
            "value": "plan"
          },
          {
            "text": "일단 시작하고 본다",
            "value": "speed"
          },
          {
            "text": "팀원들과 역할부터 나눈다",
            "value": "team"
          },
          {
            "text": "세부사항부터 꼼꼼히 파악한다",
            "value": "detail"
          }
        ]
      },
      {
        "text": "마감이 촉박할 때 나는?",
        "options": [
          {
            "text": "일정을 재조정한다",
            "value": "plan"
          },
          {
            "text": "속도를 끌어올려 몰아친다",
            "value": "speed"
          },
          {
            "text": "도움을 요청해 나눈다",
            "value": "team"
          },
          {
            "text": "그래도 퀄리티를 지키려 애쓴다",
            "value": "detail"
          }
        ]
      },
      {
        "text": "회의에서 나의 역할은?",
        "options": [
          {
            "text": "안건과 순서를 정리한다",
            "value": "plan"
          },
          {
            "text": "빠르게 결론을 낸다",
            "value": "speed"
          },
          {
            "text": "의견을 모으고 조율한다",
            "value": "team"
          },
          {
            "text": "놓친 부분을 짚어준다",
            "value": "detail"
          }
        ]
      },
      {
        "text": "실수를 발견하면?",
        "options": [
          {
            "text": "재발 방지 계획을 세운다",
            "value": "plan"
          },
          {
            "text": "바로 수정하고 넘어간다",
            "value": "speed"
          },
          {
            "text": "팀에 공유하고 함께 해결한다",
            "value": "team"
          },
          {
            "text": "원인을 끝까지 파고든다",
            "value": "detail"
          }
        ]
      },
      {
        "text": "이상적인 업무 환경은?",
        "options": [
          {
            "text": "체계적인 프로세스가 있는 곳",
            "value": "plan"
          },
          {
            "text": "빠르게 실행할 수 있는 곳",
            "value": "speed"
          },
          {
            "text": "소통이 활발한 곳",
            "value": "team"
          },
          {
            "text": "꼼꼼함을 인정해주는 곳",
            "value": "detail"
          }
        ]
      },
      {
        "text": "업무 툴을 고를 때 중요한 건?",
        "options": [
          {
            "text": "일정 관리 기능",
            "value": "plan"
          },
          {
            "text": "빠른 실행 속도",
            "value": "speed"
          },
          {
            "text": "협업 기능",
            "value": "team"
          },
          {
            "text": "정확한 기록 기능",
            "value": "detail"
          }
        ]
      },
      {
        "text": "번아웃이 올 것 같을 때 나는?",
        "options": [
          {
            "text": "계획을 다시 세워 정리한다",
            "value": "plan"
          },
          {
            "text": "더 몰아붙여서 끝낸다",
            "value": "speed"
          },
          {
            "text": "동료에게 털어놓는다",
            "value": "team"
          },
          {
            "text": "원인을 분석한다",
            "value": "detail"
          }
        ]
      },
      {
        "text": "동료가 나를 평가한다면?",
        "options": [
          {
            "text": "\"체계적인 사람\"",
            "value": "plan"
          },
          {
            "text": "\"일 처리가 빠른 사람\"",
            "value": "speed"
          },
          {
            "text": "\"함께 일하기 좋은 사람\"",
            "value": "team"
          },
          {
            "text": "\"꼼꼼하고 믿음직한 사람\"",
            "value": "detail"
          }
        ]
      }
    ],
    "categories": {
      "plan": {
        "title": "계획형 – 체계적인 전략가",
        "emoji": "📋",
        "desc": "무엇이든 계획을 세워야 마음이 놓이는 당신. 예측 가능한 프로세스 안에서 최고의 효율을 만들어내요. 가끔은 계획 밖의 변수도 유연하게 받아들여보세요."
      },
      "speed": {
        "title": "속도형 – 일단 해내는 실행러",
        "emoji": "⚡",
        "desc": "고민보다 실행이 빠른 당신은 어디서든 추진력 있는 사람으로 통해요. 속도만큼 중요한 디테일도 놓치지 않도록 한 번씩 점검해보세요."
      },
      "team": {
        "title": "협업형 – 함께라서 빛나는 사람",
        "emoji": "🤝",
        "desc": "혼자보다 함께할 때 더 큰 힘을 발휘하는 당신. 사람들과의 소통 속에서 최선의 결과를 만들어내요. 가끔은 혼자만의 판단도 믿어보세요."
      },
      "detail": {
        "title": "디테일형 – 완벽을 추구하는 장인",
        "emoji": "🔍",
        "desc": "작은 것 하나도 허투루 넘기지 않는 당신 덕분에 결과물의 완성도가 높아져요. 가끔은 완벽보다 속도가 필요한 순간도 있다는 걸 기억하세요."
      }
    }
  },
  {
    "id": "money",
    "tag": "재테크",
    "title": "나의 소비 습관 테스트",
    "emoji": "💰",
    "tagline": "월급이 통장을 스칠 때, 진짜 내 소비 스타일은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "월급(용돈)이 들어오면 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "저축부터 이체한다",
            "value": "save"
          },
          {
            "text": "갖고 싶었던 걸 지른다",
            "value": "flex"
          },
          {
            "text": "예산을 짜서 분배한다",
            "value": "plan"
          },
          {
            "text": "딱히 계획 없이 쓴다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "친구가 좋은 물건을 추천하면?",
        "options": [
          {
            "text": "필요한지 한참 고민한다",
            "value": "save"
          },
          {
            "text": "바로 산다",
            "value": "flex"
          },
          {
            "text": "예산에 맞는지 확인한다",
            "value": "plan"
          },
          {
            "text": "일단 장바구니에 담아둔다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "세일 기간이 되면?",
        "options": [
          {
            "text": "꼭 필요한 것만 산다",
            "value": "save"
          },
          {
            "text": "이 기회에 왕창 산다",
            "value": "flex"
          },
          {
            "text": "미리 리스트를 짜서 산다",
            "value": "plan"
          },
          {
            "text": "눈에 띄는 대로 담는다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "소비 기록(가계부)은?",
        "options": [
          {
            "text": "안 쓰는 게 목표라 딱히 안 챙긴다",
            "value": "save"
          },
          {
            "text": "딱히 신경 안 쓴다",
            "value": "flex"
          },
          {
            "text": "매달 정리하며 관리한다",
            "value": "plan"
          },
          {
            "text": "쓰다가 흐지부지된다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "여행을 갈 때 예산은?",
        "options": [
          {
            "text": "최대한 아껴서 다녀온다",
            "value": "save"
          },
          {
            "text": "이번엔 제대로 즐긴다",
            "value": "flex"
          },
          {
            "text": "항목별로 세세하게 계획한다",
            "value": "plan"
          },
          {
            "text": "가서 상황 보고 쓴다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "갖고 싶은 게 생기면?",
        "options": [
          {
            "text": "정말 필요한지 며칠 고민한다",
            "value": "save"
          },
          {
            "text": "나에게 주는 선물이라 생각하고 산다",
            "value": "flex"
          },
          {
            "text": "예산에 여유가 있는지 확인한다",
            "value": "plan"
          },
          {
            "text": "그 순간 못 참고 산다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "주변 사람들이 보는 나의 소비 스타일은?",
        "options": [
          {
            "text": "\"절약왕\"",
            "value": "save"
          },
          {
            "text": "\"플렉스 부자\"",
            "value": "flex"
          },
          {
            "text": "\"계획적인 사람\"",
            "value": "plan"
          },
          {
            "text": "\"지르고 보는 사람\"",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "돈에 대한 나의 철학은?",
        "options": [
          {
            "text": "안 쓰는 게 버는 것",
            "value": "save"
          },
          {
            "text": "있을 때 즐기자",
            "value": "flex"
          },
          {
            "text": "계획적으로 모으고 쓰자",
            "value": "plan"
          },
          {
            "text": "하고 싶은 건 일단 하고 본다",
            "value": "impulse"
          }
        ]
      }
    ],
    "categories": {
      "save": {
        "title": "알뜰형 – 티끌 모아 태산",
        "emoji": "🐿️",
        "desc": "필요한 것과 원하는 것을 구분할 줄 아는 당신. 꾸준한 절약 습관이 미래의 큰 자산이 될 거예요. 가끔은 스스로에게 작은 보상도 허락해주세요."
      },
      "flex": {
        "title": "플렉스형 – 인생은 한 번뿐",
        "emoji": "💸",
        "desc": "지금 이 순간의 행복을 중요하게 여기는 당신. 아낌없이 쓰는 만큼 만족감도 크죠. 미래를 위한 최소한의 저축도 함께 챙겨보세요."
      },
      "plan": {
        "title": "계획형 – 가계부의 정석",
        "emoji": "📊",
        "desc": "예산과 목표가 뚜렷한 당신은 돈 관리에서도 믿음직한 사람이에요. 계획적인 소비 덕분에 흔들림이 적죠. 가끔은 계획 없는 즉흥적 소비도 즐거움이 될 수 있어요."
      },
      "impulse": {
        "title": "충동형 – 지르고 후회, 그래도 또 지른다",
        "emoji": "🛍️",
        "desc": "마음이 끌리면 바로 행동에 옮기는 당신. 순간의 만족은 크지만 통장은 늘 아쉬울 수 있어요. 큰 지출 전엔 하루만 참아보는 습관을 들여보세요."
      }
    }
  },
  {
    "id": "friendship",
    "tag": "관계",
    "title": "우정 속 나의 역할 테스트",
    "emoji": "👯",
    "tagline": "친구들 사이에서 나는 어떤 존재일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "모임 약속을 잡을 때 나는?",
        "options": [
          {
            "text": "날짜와 장소를 먼저 제안한다",
            "value": "leader"
          },
          {
            "text": "다른 사람 의견에 맞춘다",
            "value": "supporter"
          },
          {
            "text": "다들 편한 시간을 조율한다",
            "value": "peacemaker"
          },
          {
            "text": "편한 친구랑 먼저 정한다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "친구가 고민을 털어놓으면?",
        "options": [
          {
            "text": "해결책을 적극적으로 제시한다",
            "value": "leader"
          },
          {
            "text": "옆에서 묵묵히 들어준다",
            "value": "supporter"
          },
          {
            "text": "감정을 다독이며 중재한다",
            "value": "peacemaker"
          },
          {
            "text": "같이 맞장구치며 공감한다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "친구들 사이 다툼이 생기면?",
        "options": [
          {
            "text": "상황을 정리하고 나선다",
            "value": "leader"
          },
          {
            "text": "힘든 쪽을 먼저 챙긴다",
            "value": "supporter"
          },
          {
            "text": "중간에서 화해를 시킨다",
            "value": "peacemaker"
          },
          {
            "text": "그냥 눈치껏 지켜본다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "여행 계획을 짤 때 나는?",
        "options": [
          {
            "text": "코스와 일정을 주도한다",
            "value": "leader"
          },
          {
            "text": "필요한 걸 챙기고 서포트한다",
            "value": "supporter"
          },
          {
            "text": "다들 만족하는 방향으로 조율한다",
            "value": "peacemaker"
          },
          {
            "text": "재밌으면 다 좋다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "친구가 새로운 도전을 한다면?",
        "options": [
          {
            "text": "방향을 제시해준다",
            "value": "leader"
          },
          {
            "text": "필요한 걸 옆에서 도와준다",
            "value": "supporter"
          },
          {
            "text": "응원하며 균형을 잡아준다",
            "value": "peacemaker"
          },
          {
            "text": "누구보다 먼저 응원한다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "단톡방에서 나의 포지션은?",
        "options": [
          {
            "text": "대화를 이끈다",
            "value": "leader"
          },
          {
            "text": "필요할 때 도움을 준다",
            "value": "supporter"
          },
          {
            "text": "분위기를 부드럽게 만든다",
            "value": "peacemaker"
          },
          {
            "text": "편하게 아무 말이나 한다",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "친구들이 나를 찾는 이유는?",
        "options": [
          {
            "text": "결정을 잘 내려서",
            "value": "leader"
          },
          {
            "text": "늘 챙겨줘서",
            "value": "supporter"
          },
          {
            "text": "이야기를 잘 들어줘서",
            "value": "peacemaker"
          },
          {
            "text": "편하고 재밌어서",
            "value": "bestie"
          }
        ]
      },
      {
        "text": "나에게 우정이란?",
        "options": [
          {
            "text": "함께 성장하는 것",
            "value": "leader"
          },
          {
            "text": "서로 힘이 되어주는 것",
            "value": "supporter"
          },
          {
            "text": "서로를 이해하는 것",
            "value": "peacemaker"
          },
          {
            "text": "편안하게 있는 그대로인 것",
            "value": "bestie"
          }
        ]
      }
    ],
    "categories": {
      "leader": {
        "title": "리더형 – 모임의 중심",
        "emoji": "🎤",
        "desc": "자연스럽게 모임을 이끄는 당신. 결단력 있는 모습 덕분에 친구들이 믿고 따라와요. 가끔은 다른 사람에게 주도권을 넘겨보는 것도 좋아요."
      },
      "supporter": {
        "title": "서포터형 – 든든한 조력자",
        "emoji": "🛟",
        "desc": "필요한 순간 옆에서 힘이 되어주는 당신. 친구들에게 없어서는 안 될 존재예요. 가끔은 스스로를 위한 도움도 받아보세요."
      },
      "peacemaker": {
        "title": "조율자형 – 갈등을 푸는 평화주의자",
        "emoji": "🕊️",
        "desc": "모두가 편안하도록 균형을 맞추는 당신. 관계 속 갈등을 지혜롭게 풀어내는 능력이 있어요. 본인의 감정도 잊지 말고 챙겨주세요."
      },
      "bestie": {
        "title": "절친형 – 편안함 그 자체",
        "emoji": "🍯",
        "desc": "함께 있으면 편하고 즐거운 당신. 꾸밈없는 모습 그대로가 친구들에게 큰 위로가 돼요. 가끔은 조금 더 적극적으로 나서보는 것도 좋아요."
      }
    }
  },
  {
    "id": "talent",
    "tag": "자기계발",
    "title": "나의 숨은 재능 테스트",
    "emoji": "✨",
    "tagline": "아직 발견하지 못한 나만의 재능은 무엇일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "새로운 문제를 마주하면?",
        "options": [
          {
            "text": "기발한 아이디어부터 떠올린다",
            "value": "creative"
          },
          {
            "text": "데이터와 근거를 먼저 찾는다",
            "value": "analytic"
          },
          {
            "text": "팀을 모아 방향을 정한다",
            "value": "leadership"
          },
          {
            "text": "관련된 사람들 입장을 먼저 헤아린다",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "어릴 때 유독 잘했던 것은?",
        "options": [
          {
            "text": "그림, 글쓰기, 만들기",
            "value": "creative"
          },
          {
            "text": "퍼즐, 수학, 논리 게임",
            "value": "analytic"
          },
          {
            "text": "반장, 조장 같은 역할",
            "value": "leadership"
          },
          {
            "text": "친구 고민 들어주기",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "칭찬을 자주 듣는 부분은?",
        "options": [
          {
            "text": "\"아이디어가 참신하다\"",
            "value": "creative"
          },
          {
            "text": "\"설명을 논리적으로 잘한다\"",
            "value": "analytic"
          },
          {
            "text": "\"믿고 따라가게 된다\"",
            "value": "leadership"
          },
          {
            "text": "\"이야기가 잘 통한다\"",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "여가 시간에 끌리는 활동은?",
        "options": [
          {
            "text": "그림 그리기, 글쓰기, 만들기",
            "value": "creative"
          },
          {
            "text": "퍼즐, 전략 게임, 독서",
            "value": "analytic"
          },
          {
            "text": "사람들과 모임 주최하기",
            "value": "leadership"
          },
          {
            "text": "친구와 깊은 대화 나누기",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "문제가 안 풀릴 때 나는?",
        "options": [
          {
            "text": "완전히 새로운 방식으로 접근한다",
            "value": "creative"
          },
          {
            "text": "원인을 하나씩 분석한다",
            "value": "analytic"
          },
          {
            "text": "다른 사람의 힘을 모은다",
            "value": "leadership"
          },
          {
            "text": "잠시 감정을 정리하고 다시 본다",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "그룹 과제에서 자연스럽게 맡는 역할은?",
        "options": [
          {
            "text": "아이디어 담당",
            "value": "creative"
          },
          {
            "text": "자료 조사·분석 담당",
            "value": "analytic"
          },
          {
            "text": "총괄·발표 담당",
            "value": "leadership"
          },
          {
            "text": "조율·분위기 담당",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "사람들이 나에게 조언을 구할 때는?",
        "options": [
          {
            "text": "색다른 시각이 필요할 때",
            "value": "creative"
          },
          {
            "text": "객관적인 판단이 필요할 때",
            "value": "analytic"
          },
          {
            "text": "결정을 내려야 할 때",
            "value": "leadership"
          },
          {
            "text": "마음의 위로가 필요할 때",
            "value": "empathy"
          }
        ]
      },
      {
        "text": "나의 강점을 한 단어로 표현하면?",
        "options": [
          {
            "text": "상상력",
            "value": "creative"
          },
          {
            "text": "통찰력",
            "value": "analytic"
          },
          {
            "text": "추진력",
            "value": "leadership"
          },
          {
            "text": "공감력",
            "value": "empathy"
          }
        ]
      }
    ],
    "categories": {
      "creative": {
        "title": "창의형 – 무에서 유를 만드는 사람",
        "emoji": "🎨",
        "desc": "남들이 생각 못 한 아이디어를 떠올리는 당신. 상상력이 재능의 핵심이에요. 그 아이디어를 실현시키는 꾸준함을 더하면 완벽해질 거예요."
      },
      "analytic": {
        "title": "분석형 – 논리로 답을 찾는 사람",
        "emoji": "🧠",
        "desc": "복잡한 문제도 차분히 분석해 답을 찾아내는 당신. 통찰력이 뛰어난 재능을 가졌어요. 가끔은 논리를 넘어선 직관도 믿어보세요."
      },
      "leadership": {
        "title": "리더십형 – 사람을 이끄는 사람",
        "emoji": "🚩",
        "desc": "사람들을 모으고 방향을 제시하는 힘을 가진 당신. 자연스러운 리더십이 재능이에요. 팀원들의 목소리에 귀 기울이는 것도 잊지 마세요."
      },
      "empathy": {
        "title": "공감형 – 마음을 읽는 사람",
        "emoji": "💗",
        "desc": "타인의 마음을 잘 헤아리는 당신. 사람을 이해하는 재능이 관계 속에서 빛을 발해요. 본인의 마음도 잘 챙기는 연습을 해보세요."
      }
    }
  },
  {
    "id": "season",
    "tag": "감성",
    "title": "나와 어울리는 계절 테스트",
    "emoji": "🍃",
    "tagline": "당신의 분위기를 닮은 계절은 무엇일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "나를 표현하는 색깔은?",
        "options": [
          {
            "text": "연한 파스텔톤",
            "value": "spring"
          },
          {
            "text": "쨍한 원색",
            "value": "summer"
          },
          {
            "text": "따뜻한 갈색·주황",
            "value": "autumn"
          },
          {
            "text": "차분한 흰색·회색",
            "value": "winter"
          }
        ]
      },
      {
        "text": "좋아하는 날씨는?",
        "options": [
          {
            "text": "따뜻하고 화창한 날",
            "value": "spring"
          },
          {
            "text": "뜨겁고 활기찬 날",
            "value": "summer"
          },
          {
            "text": "선선하고 차분한 날",
            "value": "autumn"
          },
          {
            "text": "춥고 고요한 날",
            "value": "winter"
          }
        ]
      },
      {
        "text": "선호하는 분위기의 카페는?",
        "options": [
          {
            "text": "꽃과 파스텔 소품이 있는 곳",
            "value": "spring"
          },
          {
            "text": "시원하고 트렌디한 곳",
            "value": "summer"
          },
          {
            "text": "감성적인 조명의 빈티지 카페",
            "value": "autumn"
          },
          {
            "text": "미니멀하고 조용한 곳",
            "value": "winter"
          }
        ]
      },
      {
        "text": "친구들이 나에게 느끼는 첫인상은?",
        "options": [
          {
            "text": "밝고 상큼하다",
            "value": "spring"
          },
          {
            "text": "에너지 넘치고 화끈하다",
            "value": "summer"
          },
          {
            "text": "차분하고 감성적이다",
            "value": "autumn"
          },
          {
            "text": "신비롭고 차갑게 느껴진다",
            "value": "winter"
          }
        ]
      },
      {
        "text": "스트레스 해소법은?",
        "options": [
          {
            "text": "산책하며 꽃 구경",
            "value": "spring"
          },
          {
            "text": "신나게 놀거나 운동",
            "value": "summer"
          },
          {
            "text": "음악 들으며 혼자 사색",
            "value": "autumn"
          },
          {
            "text": "조용히 방에서 휴식",
            "value": "winter"
          }
        ]
      },
      {
        "text": "좋아하는 음악 분위기는?",
        "options": [
          {
            "text": "밝고 경쾌한 팝",
            "value": "spring"
          },
          {
            "text": "신나는 댄스, 여름 노래",
            "value": "summer"
          },
          {
            "text": "잔잔한 발라드, 재즈",
            "value": "autumn"
          },
          {
            "text": "차분한 피아노, 클래식",
            "value": "winter"
          }
        ]
      },
      {
        "text": "옷을 고를 때 선호하는 스타일은?",
        "options": [
          {
            "text": "화사하고 사랑스러운 스타일",
            "value": "spring"
          },
          {
            "text": "시원하고 대담한 스타일",
            "value": "summer"
          },
          {
            "text": "따뜻하고 클래식한 스타일",
            "value": "autumn"
          },
          {
            "text": "심플하고 시크한 스타일",
            "value": "winter"
          }
        ]
      },
      {
        "text": "나에게 어울리는 감성 한마디는?",
        "options": [
          {
            "text": "설렘 가득한 시작",
            "value": "spring"
          },
          {
            "text": "뜨거운 열정",
            "value": "summer"
          },
          {
            "text": "깊어지는 사색",
            "value": "autumn"
          },
          {
            "text": "고요한 여백",
            "value": "winter"
          }
        ]
      }
    ],
    "categories": {
      "spring": {
        "title": "봄 – 설렘 가득한 새싹",
        "emoji": "🌸",
        "desc": "밝고 사랑스러운 에너지를 가진 당신. 함께 있으면 마음이 몽글몽글해지는 봄 같은 사람이에요. 새로운 시작을 두려워하지 않는 점이 매력이죠."
      },
      "summer": {
        "title": "여름 – 뜨거운 에너지",
        "emoji": "☀️",
        "desc": "누구보다 열정적이고 화끈한 당신. 함께 있으면 에너지가 전염되는 여름 같은 사람이에요. 가끔은 그 열정을 식히는 휴식도 필요해요."
      },
      "autumn": {
        "title": "가을 – 깊어지는 감성",
        "emoji": "🍁",
        "desc": "생각이 깊고 감성이 풍부한 당신. 잔잔하지만 여운이 오래 남는 가을 같은 사람이에요. 그 감성을 표현하는 데 조금 더 용기를 내보세요."
      },
      "winter": {
        "title": "겨울 – 고요한 신비로움",
        "emoji": "❄️",
        "desc": "차분하고 신비로운 분위기를 가진 당신. 알아갈수록 매력적인 겨울 같은 사람이에요. 마음을 조금 더 자주 열어 보이는 것도 좋아요."
      }
    }
  },
  {
    "id": "balance-mild",
    "tag": "순한맛",
    "title": "커플 밸런스게임 순한맛편",
    "emoji": "🥛",
    "tagline": "가볍고 편안한 일상 취향으로 몸 풀기",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "여행 갈 때 나는?",
        "options": [
          {
            "text": "계획 세워서 다니는 편",
            "value": 1
          },
          {
            "text": "발 닿는 대로 다니는 편",
            "value": 2
          }
        ]
      },
      {
        "text": "데이트 코스는?",
        "options": [
          {
            "text": "조용한 카페",
            "value": 1
          },
          {
            "text": "신나는 놀이공원",
            "value": 2
          }
        ]
      },
      {
        "text": "좋아하는 계절은?",
        "options": [
          {
            "text": "선선한 가을",
            "value": 1
          },
          {
            "text": "뜨거운 여름",
            "value": 2
          }
        ]
      },
      {
        "text": "영화 볼 때는?",
        "options": [
          {
            "text": "잔잔한 로맨스",
            "value": 1
          },
          {
            "text": "자극적인 스릴러",
            "value": 2
          }
        ]
      },
      {
        "text": "매운 음식은?",
        "options": [
          {
            "text": "순한 맛만",
            "value": 1
          },
          {
            "text": "매운맛 챌린지",
            "value": 2
          }
        ]
      },
      {
        "text": "커플룩은?",
        "options": [
          {
            "text": "안 입는 편",
            "value": 1
          },
          {
            "text": "자주 맞춰 입는 편",
            "value": 2
          }
        ]
      },
      {
        "text": "선물은?",
        "options": [
          {
            "text": "실용적인 선물이 좋다",
            "value": 1
          },
          {
            "text": "이벤트 넘치는 서프라이즈가 좋다",
            "value": 2
          }
        ]
      },
      {
        "text": "연락 스타일은?",
        "options": [
          {
            "text": "할 말 있을 때만 연락",
            "value": 1
          },
          {
            "text": "하루 종일 붙어서 카톡",
            "value": 2
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 11,
        "title": "찐순한맛형 – 안정 최고",
        "emoji": "🐑",
        "desc": "잔잔하고 편안한 걸 좋아하는 당신, 커플 사이에서도 안정감을 최우선으로 여겨요. 가끔은 소소한 이벤트로 설렘을 더해보세요."
      },
      {
        "min": 12,
        "max": 16,
        "title": "숨은 액티브형 – 은근 톡톡",
        "emoji": "🎢",
        "desc": "순한맛이라 해도 의외로 톡톡 튀는 선택이 많은 당신! 자극적인 걸 은근히 즐기는 타입일지도 몰라요. 다음 단계인 중간맛에도 도전해보세요."
      }
    ]
  },
  {
    "id": "balance-medium",
    "tag": "중간맛",
    "title": "커플 밸런스게임 중간맛편",
    "emoji": "🍜",
    "tagline": "조금 더 솔직해지는 커플 생활 질문들",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "기념일은?",
        "options": [
          {
            "text": "소소하게 챙긴다",
            "value": 1
          },
          {
            "text": "화려하게 챙긴다",
            "value": 2
          }
        ]
      },
      {
        "text": "다툼 후에는?",
        "options": [
          {
            "text": "시간을 두고 화해한다",
            "value": 1
          },
          {
            "text": "바로 그 자리에서 풀어야 한다",
            "value": 2
          }
        ]
      },
      {
        "text": "애정표현은?",
        "options": [
          {
            "text": "둘이 있을 때만",
            "value": 1
          },
          {
            "text": "SNS에도 대놓고",
            "value": 2
          }
        ]
      },
      {
        "text": "미래 계획은?",
        "options": [
          {
            "text": "그때그때 정한다",
            "value": 1
          },
          {
            "text": "미리 구체적으로 얘기한다",
            "value": 2
          }
        ]
      },
      {
        "text": "친구 모임에는?",
        "options": [
          {
            "text": "각자 따로 참석",
            "value": 1
          },
          {
            "text": "항상 같이 참석",
            "value": 2
          }
        ]
      },
      {
        "text": "질투는?",
        "options": [
          {
            "text": "거의 안 하는 편",
            "value": 1
          },
          {
            "text": "솔직히 좀 하는 편",
            "value": 2
          }
        ]
      },
      {
        "text": "연애 스타일은?",
        "options": [
          {
            "text": "쿨하게, 서로 자유롭게",
            "value": 1
          },
          {
            "text": "하나부터 열까지 공유",
            "value": 2
          }
        ]
      },
      {
        "text": "동거·결혼 이야기는?",
        "options": [
          {
            "text": "아직 먼 얘기",
            "value": 1
          },
          {
            "text": "진지하게 생각 중",
            "value": 2
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 11,
        "title": "안정 지향 중간맛형",
        "emoji": "🍵",
        "desc": "적당한 거리감 속에서 편안함을 지키는 당신. 커플 사이에서도 각자의 페이스를 존중하는 편이에요. 가끔은 조금 더 적극적으로 표현해보는 것도 좋아요."
      },
      {
        "min": 12,
        "max": 16,
        "title": "은근 화끈 중간맛형",
        "emoji": "🌤️",
        "desc": "편안함 속에서도 표현할 건 확실히 표현하는 당신. 애정도 질투도 숨기지 않는 솔직한 스타일이에요. 다음 단계인 매운맛도 한번 도전해보세요."
      }
    ]
  },
  {
    "id": "balance-spicy",
    "tag": "매운맛",
    "title": "커플 밸런스게임 매운맛편",
    "emoji": "🌶️",
    "tagline": "조금 예민할 수 있는, 솔직한 질문들",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "애인 핸드폰을 우연히 본다면?",
        "options": [
          {
            "text": "그냥 안 본다",
            "value": 1
          },
          {
            "text": "궁금해서 살짝 본다",
            "value": 2
          }
        ]
      },
      {
        "text": "전 애인과 아직 연락한다면?",
        "options": [
          {
            "text": "이해하려 노력한다",
            "value": 1
          },
          {
            "text": "솔직히 신경 쓰인다",
            "value": 2
          }
        ]
      },
      {
        "text": "애인이 이성 친구와 단둘이 밥을 먹는다면?",
        "options": [
          {
            "text": "괜찮다",
            "value": 1
          },
          {
            "text": "미리 말해줬으면 한다",
            "value": 2
          }
        ]
      },
      {
        "text": "애인의 SNS 좋아요 목록을 본다면?",
        "options": [
          {
            "text": "별생각 없다",
            "value": 1
          },
          {
            "text": "누구 건지 궁금하다",
            "value": 2
          }
        ]
      },
      {
        "text": "연애 중 가장 힘든 건?",
        "options": [
          {
            "text": "연락 텀이 뜸해질 때",
            "value": 1
          },
          {
            "text": "내 얘기에 공감 못 받을 때",
            "value": 2
          }
        ]
      },
      {
        "text": "애인의 과거 연애사는?",
        "options": [
          {
            "text": "굳이 안 궁금하다",
            "value": 1
          },
          {
            "text": "자세히 알고 싶다",
            "value": 2
          }
        ]
      },
      {
        "text": "애인이 나보다 친구를 먼저 챙긴다면?",
        "options": [
          {
            "text": "그럴 수도 있지",
            "value": 1
          },
          {
            "text": "서운할 것 같다",
            "value": 2
          }
        ]
      },
      {
        "text": "장거리 연애를 하게 된다면?",
        "options": [
          {
            "text": "믿음으로 버틸 수 있다",
            "value": 1
          },
          {
            "text": "솔직히 자신 없다",
            "value": 2
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 11,
        "title": "쿨한 매운맛형",
        "emoji": "😎",
        "desc": "질투나 불안보다 믿음이 앞서는 당신. 상대를 있는 그대로 신뢰하는 여유로운 스타일이에요. 가끔은 솔직한 감정 표현도 관계에 도움이 될 수 있어요."
      },
      {
        "min": 12,
        "max": 16,
        "title": "찐 매운맛형",
        "emoji": "🌶️",
        "desc": "감정에 솔직하고 신경 쓰이는 건 확실히 신경 쓰는 당신. 애정이 깊은 만큼 예민해지는 지점도 뚜렷해요. 불안한 마음을 대화로 풀어가는 연습을 해보세요."
      }
    ]
  },
  {
    "id": "petmatch",
    "tag": "라이프",
    "title": "나와 잘 맞는 반려동물 테스트",
    "emoji": "🐕",
    "tagline": "라이프스타일로 알아보는 나의 반려동물 궁합",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "퇴근(하교) 후 가장 하고 싶은 건?",
        "options": [
          {
            "text": "같이 산책하며 에너지 발산",
            "value": "dog"
          },
          {
            "text": "조용히 각자의 시간 보내기",
            "value": "cat"
          },
          {
            "text": "가만히 바라보며 힐링하기",
            "value": "fish"
          },
          {
            "text": "재잘거리는 소리 들으며 쉬기",
            "value": "bird"
          }
        ]
      },
      {
        "text": "집을 오래 비우는 날이 많다면?",
        "options": [
          {
            "text": "최대한 빨리 돌아가려 한다",
            "value": "dog"
          },
          {
            "text": "크게 걱정 안 한다",
            "value": "cat"
          },
          {
            "text": "먹이만 잘 챙기면 괜찮다",
            "value": "fish"
          },
          {
            "text": "짝을 지어 키우면 괜찮다",
            "value": "bird"
          }
        ]
      },
      {
        "text": "나의 애정표현 스타일은?",
        "options": [
          {
            "text": "적극적으로 안고 쓰다듬는다",
            "value": "dog"
          },
          {
            "text": "은근하고 잔잔하게",
            "value": "cat"
          },
          {
            "text": "눈으로 지켜보는 걸로 충분",
            "value": "fish"
          },
          {
            "text": "말 걸고 소통하는 걸 좋아한다",
            "value": "bird"
          }
        ]
      },
      {
        "text": "관리(청소, 산책 등)에 들일 수 있는 시간은?",
        "options": [
          {
            "text": "매일 산책+관리, 자신 있다",
            "value": "dog"
          },
          {
            "text": "적당히, 화장실 정도",
            "value": "cat"
          },
          {
            "text": "정기적인 수질 관리면 충분",
            "value": "fish"
          },
          {
            "text": "새장 청소, 크게 부담 없다",
            "value": "bird"
          }
        ]
      },
      {
        "text": "나에게 이상적인 주말은?",
        "options": [
          {
            "text": "밖에 나가 함께 뛰노는 주말",
            "value": "dog"
          },
          {
            "text": "집에서 각자 편하게 쉬는 주말",
            "value": "cat"
          },
          {
            "text": "조용한 공간에서 여유롭게",
            "value": "fish"
          },
          {
            "text": "소소한 대화와 소리가 있는 주말",
            "value": "bird"
          }
        ]
      },
      {
        "text": "소음이나 활동량에 대한 생각은?",
        "options": [
          {
            "text": "활기찬 소음은 오히려 좋다",
            "value": "dog"
          },
          {
            "text": "조용한 게 최고다",
            "value": "cat"
          },
          {
            "text": "소음 없는 게 제일 좋다",
            "value": "fish"
          },
          {
            "text": "적당한 지저귐은 반갑다",
            "value": "bird"
          }
        ]
      },
      {
        "text": "예상치 못한 돌발 행동을 마주하면?",
        "options": [
          {
            "text": "그러려니, 오히려 귀엽다",
            "value": "dog"
          },
          {
            "text": "각자 개성이니 존중한다",
            "value": "cat"
          },
          {
            "text": "특별히 신경 쓸 일이 적다",
            "value": "fish"
          },
          {
            "text": "그때그때 대화하듯 반응한다",
            "value": "bird"
          }
        ]
      },
      {
        "text": "나에게 반려동물이란?",
        "options": [
          {
            "text": "언제나 곁을 지키는 단짝",
            "value": "dog"
          },
          {
            "text": "함께 있지만 자유로운 동거인",
            "value": "cat"
          },
          {
            "text": "바라만 봐도 힐링되는 존재",
            "value": "fish"
          },
          {
            "text": "소소한 대화 상대",
            "value": "bird"
          }
        ]
      }
    ],
    "categories": {
      "dog": {
        "title": "강아지 궁합형 – 활동적인 단짝",
        "emoji": "🐶",
        "desc": "에너지 넘치고 함께하는 시간을 소중히 여기는 당신에겐 산책하고 뛰노는 강아지가 찰떡궁합이에요. 다만 산책과 케어에 꾸준한 시간을 낼 수 있는지 먼저 점검해보세요."
      },
      "cat": {
        "title": "고양이 궁합형 – 자유로운 동거인",
        "emoji": "🐱",
        "desc": "각자의 공간과 시간을 존중하는 당신에게는 독립적인 고양이가 잘 맞아요. 무심한 듯 다가오는 애정표현에서 큰 위로를 받을 거예요."
      },
      "fish": {
        "title": "물고기 궁합형 – 잔잔한 힐링러",
        "emoji": "🐠",
        "desc": "조용하고 안정적인 걸 좋아하는 당신에게는 바라보는 것만으로 힐링되는 어항이 딱이에요. 정기적인 수질 관리만 챙기면 부담 없는 동반자가 되어줄 거예요."
      },
      "bird": {
        "title": "새 궁합형 – 소소한 대화상대",
        "emoji": "🦜",
        "desc": "소소한 소리와 교감을 즐기는 당신에게는 재잘거리는 새가 좋은 친구가 될 수 있어요. 다만 새장 청소와 꾸준한 관심은 잊지 말고 챙겨주세요."
      }
    }
  },
  {
    "id": "fandom",
    "tag": "덕질",
    "title": "나의 덕질 유형 테스트",
    "emoji": "💜",
    "tagline": "최애를 대하는 나의 진짜 모습은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "최애가 생기면 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "관련 콘텐츠를 밤새 정주행한다",
            "value": "allin"
          },
          {
            "text": "굿즈부터 알아본다",
            "value": "collector"
          },
          {
            "text": "조용히 SNS를 팔로우한다",
            "value": "lurker"
          },
          {
            "text": "팬 커뮤니티부터 찾아 가입한다",
            "value": "social"
          }
        ]
      },
      {
        "text": "덕질 예산이 생기면?",
        "options": [
          {
            "text": "굿즈든 콘서트든 아낌없이 쓴다",
            "value": "allin"
          },
          {
            "text": "한정판, 포토카드 수집에 쓴다",
            "value": "collector"
          },
          {
            "text": "크게 안 쓰고 눈으로 즐긴다",
            "value": "lurker"
          },
          {
            "text": "같이 갈 친구들과의 활동에 쓴다",
            "value": "social"
          }
        ]
      },
      {
        "text": "최애의 새 소식이 뜨면?",
        "options": [
          {
            "text": "만사 제쳐두고 바로 확인한다",
            "value": "allin"
          },
          {
            "text": "관련 굿즈 발매 여부부터 본다",
            "value": "collector"
          },
          {
            "text": "나중에 조용히 챙겨본다",
            "value": "lurker"
          },
          {
            "text": "커뮤니티에 바로 공유한다",
            "value": "social"
          }
        ]
      },
      {
        "text": "덕질 사실을 주변에?",
        "options": [
          {
            "text": "숨김없이 티내고 자랑한다",
            "value": "allin"
          },
          {
            "text": "물어보면 수집품을 보여준다",
            "value": "collector"
          },
          {
            "text": "웬만하면 티 안 낸다",
            "value": "lurker"
          },
          {
            "text": "같이 덕질할 친구를 만든다",
            "value": "social"
          }
        ]
      },
      {
        "text": "콘서트나 팬미팅 티켓팅은?",
        "options": [
          {
            "text": "모든 걸 걸고 도전한다",
            "value": "allin"
          },
          {
            "text": "MD 구매 목적이 더 크다",
            "value": "collector"
          },
          {
            "text": "되면 좋고 안 되면 만다",
            "value": "lurker"
          },
          {
            "text": "같이 갈 사람부터 구한다",
            "value": "social"
          }
        ]
      },
      {
        "text": "최애의 콘텐츠를 볼 때 나는?",
        "options": [
          {
            "text": "몰입해서 여러 번 반복 시청한다",
            "value": "allin"
          },
          {
            "text": "캡처하고 자료로 정리한다",
            "value": "collector"
          },
          {
            "text": "느긋하게 나중에 챙겨본다",
            "value": "lurker"
          },
          {
            "text": "실시간으로 반응 공유하며 본다",
            "value": "social"
          }
        ]
      },
      {
        "text": "덕질이 주는 가장 큰 의미는?",
        "options": [
          {
            "text": "삶의 원동력 그 자체",
            "value": "allin"
          },
          {
            "text": "나만의 소중한 컬렉션",
            "value": "collector"
          },
          {
            "text": "일상의 소소한 힐링",
            "value": "lurker"
          },
          {
            "text": "사람들과 나누는 즐거움",
            "value": "social"
          }
        ]
      },
      {
        "text": "다른 사람이 내 덕질을 물어보면?",
        "options": [
          {
            "text": "신나서 몇 시간이고 이야기한다",
            "value": "allin"
          },
          {
            "text": "수집한 걸 하나씩 보여준다",
            "value": "collector"
          },
          {
            "text": "간단히 답하고 만다",
            "value": "lurker"
          },
          {
            "text": "같이 덕질하자고 권한다",
            "value": "social"
          }
        ]
      }
    ],
    "categories": {
      "allin": {
        "title": "올인 덕후형 – 삶이 곧 덕질",
        "emoji": "🔥",
        "desc": "최애를 향한 마음이 넘치는 당신은 덕질에 온 힘을 쏟는 타입이에요. 그 열정이 큰 행복을 주지만, 가끔은 스스로를 위한 시간도 챙겨보세요."
      },
      "collector": {
        "title": "수집형 덕후 – 소장의 미학",
        "emoji": "📦",
        "desc": "소중한 것들을 하나씩 모아가는 재미로 덕질하는 당신. 정성스레 쌓아온 컬렉션이 큰 자랑거리예요. 예산 관리도 잊지 말고 챙기세요."
      },
      "lurker": {
        "title": "조용한 덕후형 – 마음속 깊은 애정",
        "emoji": "🤫",
        "desc": "티 내지 않아도 누구보다 진심인 당신. 혼자만의 방식으로 최애를 응원하는 게 편안하죠. 가끔은 같은 마음의 사람들과 나눠보는 것도 즐거울 거예요."
      },
      "social": {
        "title": "함께하는 덕후형 – 덕메가 최고",
        "emoji": "🤝",
        "desc": "좋아하는 마음을 사람들과 나눌 때 더 행복한 당신. 덕질로 만난 인연이 삶의 큰 자산이 될 거예요. 혼자만의 힐링 시간도 잊지 마세요."
      }
    }
  },
  {
    "id": "idealtype",
    "tag": "연애심리",
    "title": "나의 이상형 테스트",
    "emoji": "💘",
    "tagline": "나도 몰랐던 내 이상형의 실체는?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "소개팅에서 가장 먼저 눈에 들어오는 건?",
        "options": [
          {
            "text": "다정하게 챙겨주는 말투",
            "value": "warm"
          },
          {
            "text": "흔들림 없는 편안한 태도",
            "value": "reliable"
          },
          {
            "text": "재치있는 농담과 텐션",
            "value": "fun"
          },
          {
            "text": "알 수 없는 묘한 분위기",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "연애할 때 가장 중요하게 생각하는 건?",
        "options": [
          {
            "text": "서로 챙기는 따뜻함",
            "value": "warm"
          },
          {
            "text": "믿고 의지할 수 있는 신뢰",
            "value": "reliable"
          },
          {
            "text": "함께 있으면 즐거운 케미",
            "value": "fun"
          },
          {
            "text": "서로를 알아가는 설렘",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "힘든 일이 있을 때 상대가 해줬으면 하는 건?",
        "options": [
          {
            "text": "옆에서 다정하게 위로해준다",
            "value": "warm"
          },
          {
            "text": "묵묵히 곁을 지켜준다",
            "value": "reliable"
          },
          {
            "text": "웃게 해주는 유머를 던진다",
            "value": "fun"
          },
          {
            "text": "혼자만의 시간을 존중해준다",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "끌리는 데이트 코스는?",
        "options": [
          {
            "text": "감성 카페에서 도란도란",
            "value": "warm"
          },
          {
            "text": "익숙하고 편안한 단골집",
            "value": "reliable"
          },
          {
            "text": "액티비티 넘치는 나들이",
            "value": "fun"
          },
          {
            "text": "낯선 곳으로 즉흥 여행",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "상대의 어떤 모습에 반하나요?",
        "options": [
          {
            "text": "나를 세심하게 챙기는 모습",
            "value": "warm"
          },
          {
            "text": "위기에도 흔들리지 않는 모습",
            "value": "reliable"
          },
          {
            "text": "텐션을 업 시켜주는 모습",
            "value": "fun"
          },
          {
            "text": "쉽게 파악되지 않는 모습",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "선호하는 연락 스타일은?",
        "options": [
          {
            "text": "자잘한 일상까지 다정하게",
            "value": "warm"
          },
          {
            "text": "필요할 때 확실하게",
            "value": "reliable"
          },
          {
            "text": "재밌는 드립이 가득하게",
            "value": "fun"
          },
          {
            "text": "가끔 툭 던지는 의미심장한 연락",
            "value": "mystery"
          }
        ]
      },
      {
        "text": "이상형에게 듣고 싶은 말은?",
        "options": [
          {
            "text": "\"오늘 하루 어땠어? 힘들지 않았어?\"",
            "value": "warm"
          },
          {
            "text": "\"무슨 일 있어도 내가 있잖아\"",
            "value": "reliable"
          },
          {
            "text": "\"너랑 있으면 진짜 재밌어\"",
            "value": "fun"
          },
          {
            "text": "\"너 은근 모르겠단 말이야, 그게 매력이야\"",
            "value": "mystery"
          }
        ]
      }
    ],
    "categories": {
      "warm": {
        "title": "다정다감형 – 마음을 채워주는 사랑",
        "emoji": "🌷",
        "desc": "세심하게 챙겨주는 다정함에 마음이 열리는 당신. 사소한 배려 하나에도 크게 감동받아요. 다만 다정함 뒤에 숨은 진심도 함께 봐주세요."
      },
      "reliable": {
        "title": "든든한 안정형 – 흔들리지 않는 믿음",
        "emoji": "🛡️",
        "desc": "화려함보다 믿음직함에 끌리는 당신. 편안하고 안정적인 관계를 만드는 사람이에요. 가끔은 설렘도 놓치지 말고 즐겨보세요."
      },
      "fun": {
        "title": "유쾌한 텐션형 – 함께 있으면 즐거운",
        "emoji": "🎉",
        "desc": "같이 있을 때 즐거운 사람에게 끌리는 당신. 관계에서 웃음과 에너지를 가장 중요하게 여겨요. 가끔은 진지한 대화도 놓치지 마세요."
      },
      "mystery": {
        "title": "신비로운 매력형 – 알아갈수록 빠지는",
        "emoji": "🌙",
        "desc": "쉽게 다 보여주지 않는 매력에 끌리는 당신. 알아가는 과정 자체를 즐기는 사람이에요. 다만 너무 어려운 상대만 좇지는 않도록 균형을 잡아보세요."
      }
    }
  },
  {
    "id": "jealousy",
    "tag": "연애심리",
    "title": "나의 질투 유형 테스트",
    "emoji": "😤",
    "tagline": "사랑 앞에서 진짜 내 모습은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "연인이 다른 이성과 톡을 오래 하면?",
        "options": [
          {
            "text": "바로 물어본다 \"누구야?\"",
            "value": "direct"
          },
          {
            "text": "신경쓰이지만 티 내지 않는다",
            "value": "silent"
          },
          {
            "text": "대수롭지 않게 넘긴다",
            "value": "logical"
          },
          {
            "text": "계속 신경 쓰이고 불안해진다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "SNS에 연인이 다른 사람과 찍은 사진이 올라오면?",
        "options": [
          {
            "text": "바로 연락해서 물어본다",
            "value": "direct"
          },
          {
            "text": "마음속으로만 신경쓴다",
            "value": "silent"
          },
          {
            "text": "그럴 수도 있지 생각한다",
            "value": "logical"
          },
          {
            "text": "계속 사진을 다시 확인하게 된다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "질투가 날 때 나의 행동은?",
        "options": [
          {
            "text": "솔직하게 감정을 표현한다",
            "value": "direct"
          },
          {
            "text": "혼자 삭이다가 나중에 티가 난다",
            "value": "silent"
          },
          {
            "text": "감정보다 상황을 먼저 판단한다",
            "value": "logical"
          },
          {
            "text": "계속 확인하고 싶어진다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "연인의 과거 연애 이야기를 들으면?",
        "options": [
          {
            "text": "궁금한 건 그냥 물어본다",
            "value": "direct"
          },
          {
            "text": "듣고 싶지 않지만 참는다",
            "value": "silent"
          },
          {
            "text": "과거는 과거일 뿐이라고 생각한다",
            "value": "logical"
          },
          {
            "text": "자꾸 비교하게 된다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "연인이 친구들과 늦게까지 놀면?",
        "options": [
          {
            "text": "언제 오는지 솔직히 물어본다",
            "value": "direct"
          },
          {
            "text": "서운하지만 말은 안 한다",
            "value": "silent"
          },
          {
            "text": "각자의 시간을 존중한다",
            "value": "logical"
          },
          {
            "text": "연락이 안 되면 불안해진다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "질투를 표현하는 나만의 방식은?",
        "options": [
          {
            "text": "직접적으로 말한다",
            "value": "direct"
          },
          {
            "text": "은근한 말투로 티를 낸다",
            "value": "silent"
          },
          {
            "text": "표현하지 않는 편이다",
            "value": "logical"
          },
          {
            "text": "서운함이나 눈물로 표현된다",
            "value": "anxious"
          }
        ]
      },
      {
        "text": "연인이 나를 안심시켜줄 때 필요한 건?",
        "options": [
          {
            "text": "명확한 설명",
            "value": "direct"
          },
          {
            "text": "시간이 지나면 자연히 풀린다",
            "value": "silent"
          },
          {
            "text": "별로 필요하지 않다",
            "value": "logical"
          },
          {
            "text": "꾸준한 애정 표현",
            "value": "anxious"
          }
        ]
      }
    ],
    "categories": {
      "direct": {
        "title": "직진 표현형 – 솔직하게 확인하는",
        "emoji": "🔥",
        "desc": "질투가 나면 숨기지 않고 바로 표현하는 당신. 오해를 오래 끌지 않는 게 장점이에요. 다만 상대가 놀라지 않게 말투는 조금 부드럽게!"
      },
      "silent": {
        "title": "조용한 삭임형 – 속으로 삼키는",
        "emoji": "🌫️",
        "desc": "질투가 나도 겉으로는 티를 잘 안 내는 당신. 상대를 배려하는 마음이지만, 쌓아두면 마음이 힘들어져요. 가끔은 솔직하게 표현해보세요."
      },
      "logical": {
        "title": "쿨한 이성형 – 질투에 잘 흔들리지 않는",
        "emoji": "😎",
        "desc": "감정보다 상황을 먼저 보는 당신은 질투에 크게 휘둘리지 않아요. 안정적인 연애를 하는 편이지만, 가끔은 솔직한 감정 표현도 관계에 도움이 돼요."
      },
      "anxious": {
        "title": "불안 증폭형 – 사랑이 큰 만큼 불안도 큰",
        "emoji": "💭",
        "desc": "좋아하는 마음이 큰 만큼 불안도 쉽게 커지는 당신. 그만큼 진심으로 사랑하고 있다는 뜻이에요. 스스로 안정감을 채우는 연습을 함께 해보세요."
      }
    }
  },
  {
    "id": "sns",
    "tag": "라이프",
    "title": "나의 SNS 성향 테스트",
    "emoji": "📱",
    "tagline": "피드 속 진짜 내 모습은 어떤 유형일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "SNS를 켜면 제일 먼저 하는 행동은?",
        "options": [
          {
            "text": "내 이야기부터 올린다",
            "value": "sharer"
          },
          {
            "text": "남들 피드부터 구경한다",
            "value": "lurker"
          },
          {
            "text": "저장할 만한 콘텐츠부터 찾는다",
            "value": "curator"
          },
          {
            "text": "댓글이나 DM부터 확인한다",
            "value": "connector"
          }
        ]
      },
      {
        "text": "맛집에 가면?",
        "options": [
          {
            "text": "바로 스토리에 올린다",
            "value": "sharer"
          },
          {
            "text": "사진만 찍고 안 올린다",
            "value": "lurker"
          },
          {
            "text": "나중에 예쁘게 편집해서 올린다",
            "value": "curator"
          },
          {
            "text": "같이 간 사람과 태그하며 올린다",
            "value": "connector"
          }
        ]
      },
      {
        "text": "팔로워 수보다 나에게 중요한 건?",
        "options": [
          {
            "text": "얼마나 자주 올리느냐",
            "value": "sharer"
          },
          {
            "text": "남의 게시물 보는 재미",
            "value": "lurker"
          },
          {
            "text": "피드의 통일감",
            "value": "curator"
          },
          {
            "text": "사람들과의 소통",
            "value": "connector"
          }
        ]
      },
      {
        "text": "SNS에서 시간을 가장 많이 쓰는 곳은?",
        "options": [
          {
            "text": "내 게시물 관리",
            "value": "sharer"
          },
          {
            "text": "남의 피드 둘러보기",
            "value": "lurker"
          },
          {
            "text": "저장한 게시물 정리",
            "value": "curator"
          },
          {
            "text": "댓글 달고 답장하기",
            "value": "connector"
          }
        ]
      },
      {
        "text": "게시물 올릴 때 가장 고민하는 건?",
        "options": [
          {
            "text": "얼마나 빨리 올릴지",
            "value": "sharer"
          },
          {
            "text": "올릴지 말지",
            "value": "lurker"
          },
          {
            "text": "어떤 필터, 어떤 배치로 올릴지",
            "value": "curator"
          },
          {
            "text": "누구랑 태그할지",
            "value": "connector"
          }
        ]
      },
      {
        "text": "알림이 울리면?",
        "options": [
          {
            "text": "내 게시물 반응인지 바로 확인한다",
            "value": "sharer"
          },
          {
            "text": "크게 신경 쓰지 않는다",
            "value": "lurker"
          },
          {
            "text": "저장·좋아요한 계정 알림만 확인한다",
            "value": "curator"
          },
          {
            "text": "댓글이나 DM부터 반갑게 확인한다",
            "value": "connector"
          }
        ]
      },
      {
        "text": "나에게 SNS란?",
        "options": [
          {
            "text": "나를 표현하는 공간",
            "value": "sharer"
          },
          {
            "text": "정보를 얻는 창구",
            "value": "lurker"
          },
          {
            "text": "취향을 기록하는 공간",
            "value": "curator"
          },
          {
            "text": "사람들과 이어지는 공간",
            "value": "connector"
          }
        ]
      }
    ],
    "categories": {
      "sharer": {
        "title": "공유왕형 – 일상을 부지런히 남기는",
        "emoji": "📸",
        "desc": "일상 하나하나를 부지런히 기록하고 공유하는 당신. 소소한 순간도 특별하게 만드는 힘이 있어요. 가끔은 올리지 않고 그 순간 자체를 온전히 즐겨보세요."
      },
      "lurker": {
        "title": "눈팅형 – 조용히 지켜보는",
        "emoji": "👀",
        "desc": "직접 올리기보다 구경하는 게 편한 당신. 정보를 얻고 트렌드를 읽는 눈이 밝아요. 가끔은 나의 이야기도 살짝 꺼내보는 것도 재밌을 거예요."
      },
      "curator": {
        "title": "큐레이터형 – 취향을 정갈하게 담는",
        "emoji": "🗂️",
        "desc": "피드 하나하나에 취향과 정성을 담는 당신. 보는 사람도 기분 좋아지는 감각을 가졌어요. 가끔은 완벽하지 않은 순간도 편하게 올려보세요."
      },
      "connector": {
        "title": "소통왕형 – 사람과 이어지는 게 즐거운",
        "emoji": "💬",
        "desc": "게시물보다 사람과의 대화가 즐거운 당신. 댓글과 DM으로 관계를 넓혀가는 힘이 있어요. 온라인만큼 오프라인 만남도 챙겨보세요."
      }
    }
  },
  {
    "id": "emotion",
    "tag": "성격심리",
    "title": "나의 감정표현 유형 테스트",
    "emoji": "🎭",
    "tagline": "감정을 느낄 때, 나는 어떻게 표현하는 사람일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "기쁜 일이 생기면 나는?",
        "options": [
          {
            "text": "바로 티가 나게 신나한다",
            "value": "expressive"
          },
          {
            "text": "속으로 좋아하고 잘 안 드러낸다",
            "value": "reserved"
          },
          {
            "text": "왜 좋은 일인지 차분히 생각해본다",
            "value": "rational"
          },
          {
            "text": "주변 사람과 함께 기쁨을 나누고 싶어한다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "속상한 일이 있을 때?",
        "options": [
          {
            "text": "바로 표정과 말에 드러난다",
            "value": "expressive"
          },
          {
            "text": "혼자 삭이고 티 내지 않는다",
            "value": "reserved"
          },
          {
            "text": "원인을 분석하며 감정을 정리한다",
            "value": "rational"
          },
          {
            "text": "누군가에게 털어놓고 위로받고 싶다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "친구가 슬픈 이야기를 하면?",
        "options": [
          {
            "text": "같이 눈물이 날 만큼 감정이입한다",
            "value": "expressive"
          },
          {
            "text": "묵묵히 옆에서 들어준다",
            "value": "reserved"
          },
          {
            "text": "문제를 해결할 방법을 같이 생각한다",
            "value": "rational"
          },
          {
            "text": "그 마음이 어떤지 깊이 공감해준다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "화가 났을 때 나는?",
        "options": [
          {
            "text": "바로 표현하고 금방 푼다",
            "value": "expressive"
          },
          {
            "text": "오래 담아두고 잘 안 푼다",
            "value": "reserved"
          },
          {
            "text": "화난 이유를 논리적으로 설명한다",
            "value": "rational"
          },
          {
            "text": "화보다 서운함이 먼저 앞선다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "감동적인 영화나 이야기를 보면?",
        "options": [
          {
            "text": "눈물이 많고 리액션이 크다",
            "value": "expressive"
          },
          {
            "text": "마음속으로만 깊이 느낀다",
            "value": "reserved"
          },
          {
            "text": "스토리의 구조나 메시지를 분석한다",
            "value": "rational"
          },
          {
            "text": "등장인물의 감정에 깊이 몰입한다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "나의 감정을 남에게 표현하는 방식은?",
        "options": [
          {
            "text": "말과 행동으로 확실하게 드러낸다",
            "value": "expressive"
          },
          {
            "text": "굳이 말하지 않아도 알아주길 바란다",
            "value": "reserved"
          },
          {
            "text": "상황을 정리해서 조리 있게 설명한다",
            "value": "rational"
          },
          {
            "text": "상대의 반응을 살피며 조심스레 표현한다",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "사람들이 나를 표현한다면?",
        "options": [
          {
            "text": "\"감정이 얼굴에 다 드러나는 사람\"",
            "value": "expressive"
          },
          {
            "text": "\"속을 잘 모르겠는 사람\"",
            "value": "reserved"
          },
          {
            "text": "\"침착하고 이성적인 사람\"",
            "value": "rational"
          },
          {
            "text": "\"공감을 잘해주는 사람\"",
            "value": "empathic"
          }
        ]
      },
      {
        "text": "스트레스를 해소하는 방식은?",
        "options": [
          {
            "text": "소리 지르거나 울면서 감정을 쏟아낸다",
            "value": "expressive"
          },
          {
            "text": "혼자 조용히 시간을 보내며 삭인다",
            "value": "reserved"
          },
          {
            "text": "원인을 분석하고 해결책을 찾는다",
            "value": "rational"
          },
          {
            "text": "누군가와 대화하며 마음을 나눈다",
            "value": "empathic"
          }
        ]
      }
    ],
    "categories": {
      "expressive": {
        "title": "표현형 – 감정에 솔직한 사람",
        "emoji": "🎨",
        "desc": "기쁨도 슬픔도 숨기지 않고 솔직하게 표현하는 당신. 감정이 살아있어서 주변 사람들도 당신의 진심을 쉽게 느껴요. 다만 순간의 감정에 휩쓸려 후회할 말이 나올 수 있으니, 한 박자 쉬고 표현하는 연습도 도움이 돼요."
      },
      "reserved": {
        "title": "신중형 – 속으로 깊이 느끼는 사람",
        "emoji": "🌙",
        "desc": "감정을 잘 드러내지 않지만 속으로는 누구보다 깊이 느끼는 당신. 차분하고 안정적인 인상을 주지만, 주변 사람들은 가끔 당신의 진심을 몰라 답답해할 수 있어요. 가끔은 작은 감정이라도 표현해보세요."
      },
      "rational": {
        "title": "이성형 – 감정도 분석하는 사람",
        "emoji": "🧠",
        "desc": "감정이 생기면 그 원인과 이유를 먼저 들여다보는 당신. 침착하게 상황을 정리하는 능력이 뛰어나요. 다만 지나치게 분석하다 감정 자체를 놓칠 수 있으니, 가끔은 그냥 느끼는 대로 두는 것도 필요해요."
      },
      "empathic": {
        "title": "공감형 – 함께 느끼는 사람",
        "emoji": "🤝",
        "desc": "내 감정만큼 상대의 감정에도 깊이 공감하는 당신. 사람들이 마음을 터놓고 싶어하는 존재예요. 다만 타인의 감정에 너무 몰입해 지칠 수 있으니, 나의 감정을 먼저 챙기는 것도 잊지 마세요."
      }
    }
  },
  {
    "id": "cafe",
    "tag": "라이프",
    "title": "나의 카페 주문 스타일 테스트",
    "emoji": "☕",
    "tagline": "카페에서 주문하는 방식만 봐도 알 수 있는 나의 성격",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "카페에 들어가면 나는?",
        "options": [
          {
            "text": "늘 마시던 아메리카노를 바로 주문한다",
            "value": "classic"
          },
          {
            "text": "디저트 메뉴부터 살펴본다",
            "value": "sweet"
          },
          {
            "text": "신메뉴가 있는지부터 확인한다",
            "value": "trend"
          },
          {
            "text": "옵션을 하나하나 커스텀해서 주문한다",
            "value": "custom"
          }
        ]
      },
      {
        "text": "새로운 카페에 가면?",
        "options": [
          {
            "text": "시그니처보다 무난한 메뉴를 고른다",
            "value": "classic"
          },
          {
            "text": "제일 달아 보이는 메뉴를 고른다",
            "value": "sweet"
          },
          {
            "text": "SNS에서 화제였던 메뉴를 찾는다",
            "value": "trend"
          },
          {
            "text": "나만의 조합으로 주문할 수 있는지 물어본다",
            "value": "custom"
          }
        ]
      },
      {
        "text": "주문할 때 직원에게 요청하는 것은?",
        "options": [
          {
            "text": "거의 없다, 기본 그대로",
            "value": "classic"
          },
          {
            "text": "시럽이나 휘핑을 추가해달라고 한다",
            "value": "sweet"
          },
          {
            "text": "요즘 제일 잘 나가는 메뉴를 추천받는다",
            "value": "trend"
          },
          {
            "text": "얼음 양, 샷 추가 등 세세하게 요청한다",
            "value": "custom"
          }
        ]
      },
      {
        "text": "친구가 카페 메뉴를 고민하면?",
        "options": [
          {
            "text": "실패 없는 무난한 메뉴를 추천한다",
            "value": "classic"
          },
          {
            "text": "제일 달콤한 디저트류를 추천한다",
            "value": "sweet"
          },
          {
            "text": "요즘 유행하는 신메뉴를 추천한다",
            "value": "trend"
          },
          {
            "text": "취향에 맞게 커스텀하는 법을 알려준다",
            "value": "custom"
          }
        ]
      },
      {
        "text": "카페 대기줄이 길면?",
        "options": [
          {
            "text": "그냥 무난하게 아무거나 시킨다",
            "value": "classic"
          },
          {
            "text": "디저트라도 하나 건져야 한다는 생각뿐",
            "value": "sweet"
          },
          {
            "text": "그래도 신메뉴는 꼭 맛본다",
            "value": "trend"
          },
          {
            "text": "줄이 길어도 원하는 옵션은 꼭 요청한다",
            "value": "custom"
          }
        ]
      },
      {
        "text": "집에서 커피를 마신다면?",
        "options": [
          {
            "text": "믹스커피나 아메리카노로 심플하게",
            "value": "classic"
          },
          {
            "text": "달달한 라떼나 초코음료로",
            "value": "sweet"
          },
          {
            "text": "요즘 유행하는 레시피를 따라 만든다",
            "value": "trend"
          },
          {
            "text": "원두, 우유 비율까지 직접 맞춰서",
            "value": "custom"
          }
        ]
      },
      {
        "text": "카페 메뉴판을 볼 때 가장 먼저 보는 것은?",
        "options": [
          {
            "text": "늘 마시던 메뉴가 있는지",
            "value": "classic"
          },
          {
            "text": "디저트나 달콤한 음료 코너",
            "value": "sweet"
          },
          {
            "text": "새로 나온 시즌 메뉴",
            "value": "trend"
          },
          {
            "text": "커스텀 옵션이 뭐가 있는지",
            "value": "custom"
          }
        ]
      },
      {
        "text": "사람들이 내 커피 취향을 표현한다면?",
        "options": [
          {
            "text": "\"군더더기 없이 심플한 취향\"",
            "value": "classic"
          },
          {
            "text": "\"디저트 없인 못 사는 단맛 러버\"",
            "value": "sweet"
          },
          {
            "text": "\"늘 최신 유행을 아는 트렌드세터\"",
            "value": "trend"
          },
          {
            "text": "\"나만의 방식이 확실한 사람\"",
            "value": "custom"
          }
        ]
      }
    ],
    "categories": {
      "classic": {
        "title": "클래식파 – 아메리카노 한 잔이면 충분",
        "emoji": "☕",
        "desc": "화려한 것보다 늘 마시던 익숙한 맛이 편안한 당신. 자신만의 확고한 취향이 있고, 유행에 쉽게 흔들리지 않는 편이에요. 가끔은 새로운 메뉴에 도전해보는 것도 소소한 재미가 될 거예요."
      },
      "sweet": {
        "title": "디저트파 – 단맛이 곧 행복",
        "emoji": "🍰",
        "desc": "카페는 곧 디저트 타임인 당신에게 달콤함은 하루의 힐링이에요. 소소한 것에서 행복을 찾는 감각이 뛰어나죠. 당 섭취는 적당히 조절하는 것도 잊지 마세요."
      },
      "trend": {
        "title": "트렌드파 – 유행은 내가 먼저",
        "emoji": "✨",
        "desc": "새로운 메뉴, 새로운 유행을 누구보다 빠르게 캐치하는 당신. 남들보다 한발 앞서가는 감각이 매력이에요. 가끔은 익숙한 메뉴에서 편안함을 느껴보는 것도 좋아요."
      },
      "custom": {
        "title": "커스텀파 – 취향은 내가 만든다",
        "emoji": "🎛️",
        "desc": "정해진 메뉴보다 나만의 조합을 만드는 게 더 즐거운 당신. 뚜렷한 취향과 디테일을 챙기는 섬세함이 있어요. 가끔은 그냥 메뉴판 그대로 편하게 주문해보는 것도 색다른 즐거움이 될 거예요."
      }
    }
  },
  {
    "id": "gamer",
    "tag": "밈",
    "title": "나의 게임 캐릭터 유형 테스트",
    "emoji": "🎮",
    "tagline": "게임 속 나는 딜러, 탱커, 힐러, 서포터 중 어떤 역할일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "팀 게임을 할 때 나의 역할은?",
        "options": [
          {
            "text": "앞장서서 공격하고 화력을 낸다",
            "value": "dealer"
          },
          {
            "text": "맨 앞에서 맞으며 팀을 지킨다",
            "value": "tank"
          },
          {
            "text": "팀원 상태를 살피며 회복시킨다",
            "value": "healer"
          },
          {
            "text": "버프, 아이템 등으로 팀을 보조한다",
            "value": "support"
          }
        ]
      },
      {
        "text": "위기 상황이 오면?",
        "options": [
          {
            "text": "최대한 빠르게 적을 처치하려 한다",
            "value": "dealer"
          },
          {
            "text": "몸으로 막아서며 버틴다",
            "value": "tank"
          },
          {
            "text": "팀원들을 살리는 데 집중한다",
            "value": "healer"
          },
          {
            "text": "상황을 보조할 방법을 찾는다",
            "value": "support"
          }
        ]
      },
      {
        "text": "게임에서 가장 짜릿한 순간은?",
        "options": [
          {
            "text": "큰 데미지로 적을 처치할 때",
            "value": "dealer"
          },
          {
            "text": "위험한 공격을 대신 막아낼 때",
            "value": "tank"
          },
          {
            "text": "죽어가는 팀원을 살려낼 때",
            "value": "healer"
          },
          {
            "text": "결정적인 버프로 승기를 잡을 때",
            "value": "support"
          }
        ]
      },
      {
        "text": "팀원이 위험에 처하면?",
        "options": [
          {
            "text": "빠르게 적을 처리해서 상황을 끝낸다",
            "value": "dealer"
          },
          {
            "text": "몸으로 막아서서 시간을 번다",
            "value": "tank"
          },
          {
            "text": "즉시 회복 스킬을 사용한다",
            "value": "healer"
          },
          {
            "text": "보호막이나 이동기로 도와준다",
            "value": "support"
          }
        ]
      },
      {
        "text": "캐릭터를 고를 때 중시하는 것은?",
        "options": [
          {
            "text": "강력한 공격력",
            "value": "dealer"
          },
          {
            "text": "높은 방어력과 체력",
            "value": "tank"
          },
          {
            "text": "회복과 생존 지원 능력",
            "value": "healer"
          },
          {
            "text": "팀에 도움 되는 유틸리티 스킬",
            "value": "support"
          }
        ]
      },
      {
        "text": "게임이 잘 안 풀릴 때 나는?",
        "options": [
          {
            "text": "더 공격적으로 몰아붙인다",
            "value": "dealer"
          },
          {
            "text": "묵묵히 버티며 팀을 지킨다",
            "value": "tank"
          },
          {
            "text": "팀 전체 컨디션부터 챙긴다",
            "value": "healer"
          },
          {
            "text": "상황을 보조하며 흐름을 바꾸려 한다",
            "value": "support"
          }
        ]
      },
      {
        "text": "팀원들이 나에게 기대하는 것은?",
        "options": [
          {
            "text": "확실한 딜, 승부를 끝내는 한 방",
            "value": "dealer"
          },
          {
            "text": "든든하게 버텨주는 존재감",
            "value": "tank"
          },
          {
            "text": "팀을 살리는 회복력",
            "value": "healer"
          },
          {
            "text": "눈에 띄지 않아도 꼭 필요한 도움",
            "value": "support"
          }
        ]
      },
      {
        "text": "현실에서도 나는 어떤 사람에 가까운가?",
        "options": [
          {
            "text": "확실한 성과로 앞장서는 사람",
            "value": "dealer"
          },
          {
            "text": "힘든 일도 묵묵히 버텨내는 사람",
            "value": "tank"
          },
          {
            "text": "지친 사람을 챙기고 회복시키는 사람",
            "value": "healer"
          },
          {
            "text": "티 안 나게 뒤에서 도와주는 사람",
            "value": "support"
          }
        ]
      }
    ],
    "categories": {
      "dealer": {
        "title": "딜러형 – 화력을 책임지는 사람",
        "emoji": "⚔️",
        "desc": "확실한 성과로 승부를 끝내는 당신. 목표를 향해 거침없이 나아가는 추진력이 최대 강점이에요. 다만 혼자 앞서 나가다 팀과 호흡이 어긋날 수 있으니, 주변과 속도를 맞추는 것도 챙겨보세요."
      },
      "tank": {
        "title": "탱커형 – 앞에서 지켜주는 사람",
        "emoji": "🛡️",
        "desc": "힘든 순간에도 묵묵히 버티며 자리를 지키는 당신. 팀에게 든든한 존재감을 주는 사람이에요. 다만 혼자 다 막아내려다 지칠 수 있으니, 가끔은 뒤로 물러나 쉬어가는 것도 필요해요."
      },
      "healer": {
        "title": "힐러형 – 회복을 책임지는 사람",
        "emoji": "💚",
        "desc": "지친 사람을 알아보고 먼저 챙기는 당신. 곁에 있는 사람들을 회복시키는 따뜻한 힘을 가졌어요. 다만 남을 챙기다 정작 자신의 회복은 뒷전이 되기 쉬우니, 스스로를 돌보는 시간도 꼭 챙기세요."
      },
      "support": {
        "title": "서포터형 – 티 안 나게 돕는 사람",
        "emoji": "✨",
        "desc": "눈에 띄지 않아도 꼭 필요한 순간에 힘이 되어주는 당신. 팀 전체의 흐름을 바꾸는 숨은 주역이에요. 다만 공을 드러내지 않다 보니 존재감이 가려질 수 있으니, 가끔은 자신의 기여도 당당히 표현해보세요."
      }
    }
  },
  {
    "id": "productivity",
    "tag": "자기계발",
    "title": "나의 갓생 지수 테스트",
    "emoji": "📈",
    "tagline": "요즘 내 하루, 얼마나 알차게 채워지고 있을까요?",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "아침에 일어나면 가장 먼저 하는 것은?",
        "options": [
          {
            "text": "눈뜨자마자 휴대폰부터 본다",
            "value": 1
          },
          {
            "text": "조금 미적대다 겨우 일어난다",
            "value": 2
          },
          {
            "text": "정해진 루틴대로 움직인다",
            "value": 3
          },
          {
            "text": "계획한 목표부터 떠올린다",
            "value": 4
          }
        ]
      },
      {
        "text": "하루 일과를 계획하는 편인가요?",
        "options": [
          {
            "text": "거의 즉흥적으로 움직인다",
            "value": 1
          },
          {
            "text": "머릿속으로만 대충 생각한다",
            "value": 2
          },
          {
            "text": "간단하게라도 적어둔다",
            "value": 3
          },
          {
            "text": "시간 단위로 꼼꼼히 계획한다",
            "value": 4
          }
        ]
      },
      {
        "text": "운동이나 자기관리는?",
        "options": [
          {
            "text": "거의 하지 않는다",
            "value": 1
          },
          {
            "text": "마음만 먹고 잘 안 된다",
            "value": 2
          },
          {
            "text": "가끔이라도 챙기려 한다",
            "value": 3
          },
          {
            "text": "꾸준한 루틴으로 자리 잡았다",
            "value": 4
          }
        ]
      },
      {
        "text": "목표를 세울 때 나는?",
        "options": [
          {
            "text": "목표 자체를 잘 안 세운다",
            "value": 1
          },
          {
            "text": "세워도 금방 흐지부지된다",
            "value": 2
          },
          {
            "text": "작은 목표는 곧잘 지킨다",
            "value": 3
          },
          {
            "text": "장단기 목표를 나눠서 실천한다",
            "value": 4
          }
        ]
      },
      {
        "text": "잠자리에 들기 전 하루를 돌아보면?",
        "options": [
          {
            "text": "오늘 뭘 했는지 기억이 안 난다",
            "value": 1
          },
          {
            "text": "시간을 허비한 것 같아 아쉽다",
            "value": 2
          },
          {
            "text": "나름 할 일은 했다고 느낀다",
            "value": 3
          },
          {
            "text": "뿌듯한 마음으로 하루를 마무리한다",
            "value": 4
          }
        ]
      },
      {
        "text": "새로운 습관을 만들 때 나는?",
        "options": [
          {
            "text": "시도조차 잘 안 한다",
            "value": 1
          },
          {
            "text": "며칠 하다 포기한다",
            "value": 2
          },
          {
            "text": "조금씩이라도 이어간다",
            "value": 3
          },
          {
            "text": "꾸준히 기록하며 습관화한다",
            "value": 4
          }
        ]
      },
      {
        "text": "시간 관리 앱이나 다이어리 사용은?",
        "options": [
          {
            "text": "전혀 쓰지 않는다",
            "value": 1
          },
          {
            "text": "받아만 놓고 안 쓴다",
            "value": 2
          },
          {
            "text": "가끔 필요할 때 쓴다",
            "value": 3
          },
          {
            "text": "매일 습관처럼 활용한다",
            "value": 4
          }
        ]
      },
      {
        "text": "스스로의 하루를 점수로 매긴다면?",
        "options": [
          {
            "text": "늘 낮은 점수를 준다",
            "value": 1
          },
          {
            "text": "평균 이하라고 느낀다",
            "value": 2
          },
          {
            "text": "평균은 한다고 생각한다",
            "value": 3
          },
          {
            "text": "꽤 만족스러운 점수를 준다",
            "value": 4
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 14,
        "title": "충전이 필요한 널브러짐형",
        "emoji": "🛌",
        "desc": "요즘 하루하루가 유독 늘어지는 편이에요. 무리해서 갓생을 살기보다, 딱 하나만 작은 루틴을 만들어보는 것부터 시작해보세요. 작은 성공이 다음 동력이 될 거예요."
      },
      {
        "min": 15,
        "max": 20,
        "title": "느슨한 시작형",
        "emoji": "🌱",
        "desc": "마음은 있지만 실천이 아직 서툰 편이에요. 거창한 계획보다 5분짜리 작은 습관 하나를 꾸준히 이어가 보세요. 완벽보다 꾸준함이 먼저예요."
      },
      {
        "min": 21,
        "max": 26,
        "title": "꾸준한 루틴형",
        "emoji": "📅",
        "desc": "나름의 루틴을 가지고 하루하루를 채워가는 당신. 계획한 것들을 착실히 해내는 편이에요. 가끔은 무리하지 않고 쉬어가는 여유도 챙겨보세요."
      },
      {
        "min": 27,
        "max": 32,
        "title": "완전 갓생러",
        "emoji": "🏆",
        "desc": "계획하고, 실천하고, 기록까지 하는 완벽한 갓생 루틴을 가진 당신. 스스로를 성장시키는 힘이 대단해요. 가끔은 계획 없이 쉬어가는 하루도 소중하다는 걸 잊지 마세요."
      }
    ]
  },
  {
    "id": "moviegenre",
    "tag": "취향",
    "title": "나의 인생 영화 장르 테스트",
    "emoji": "🎬",
    "tagline": "내 삶을 영화로 만든다면 어떤 장르일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "주말에 보고 싶은 영화 장르는?",
        "options": [
          {
            "text": "설레는 로맨스",
            "value": "romance"
          },
          {
            "text": "빵빵 터지는 코미디",
            "value": "comedy"
          },
          {
            "text": "손에 땀을 쥐는 액션",
            "value": "action"
          },
          {
            "text": "마음을 울리는 드라마",
            "value": "drama"
          }
        ]
      },
      {
        "text": "인생에서 가장 중요한 가치는?",
        "options": [
          {
            "text": "사랑과 감정",
            "value": "romance"
          },
          {
            "text": "즐거움과 유머",
            "value": "comedy"
          },
          {
            "text": "도전과 성취",
            "value": "action"
          },
          {
            "text": "의미와 성장",
            "value": "drama"
          }
        ]
      },
      {
        "text": "스트레스를 풀 때 나는?",
        "options": [
          {
            "text": "좋아하는 사람과 시간을 보낸다",
            "value": "romance"
          },
          {
            "text": "실컷 웃고 떠든다",
            "value": "comedy"
          },
          {
            "text": "몸을 움직이며 발산한다",
            "value": "action"
          },
          {
            "text": "조용히 생각을 정리한다",
            "value": "drama"
          }
        ]
      },
      {
        "text": "친구들 사이에서 나의 포지션은?",
        "options": [
          {
            "text": "연애 상담을 도맡는 편",
            "value": "romance"
          },
          {
            "text": "분위기를 띄우는 개그 담당",
            "value": "comedy"
          },
          {
            "text": "뭐든 앞장서서 이끄는 편",
            "value": "action"
          },
          {
            "text": "진지한 고민을 들어주는 편",
            "value": "drama"
          }
        ]
      },
      {
        "text": "인생의 위기가 닥치면?",
        "options": [
          {
            "text": "사랑하는 사람을 먼저 떠올린다",
            "value": "romance"
          },
          {
            "text": "웃음으로 이겨내려 한다",
            "value": "comedy"
          },
          {
            "text": "정면으로 부딪혀 돌파한다",
            "value": "action"
          },
          {
            "text": "깊이 성찰하며 답을 찾는다",
            "value": "drama"
          }
        ]
      },
      {
        "text": "좋아하는 이야기의 결말은?",
        "options": [
          {
            "text": "해피엔딩 사랑 이야기",
            "value": "romance"
          },
          {
            "text": "유쾌하게 웃으며 끝나는 이야기",
            "value": "comedy"
          },
          {
            "text": "짜릿한 승리로 끝나는 이야기",
            "value": "action"
          },
          {
            "text": "여운이 남는 감동적인 이야기",
            "value": "drama"
          }
        ]
      },
      {
        "text": "나를 한 단어로 표현한다면?",
        "options": [
          {
            "text": "다정함",
            "value": "romance"
          },
          {
            "text": "유쾌함",
            "value": "comedy"
          },
          {
            "text": "열정",
            "value": "action"
          },
          {
            "text": "진솔함",
            "value": "drama"
          }
        ]
      },
      {
        "text": "인생 최고의 순간은 언제였나?",
        "options": [
          {
            "text": "누군가와 사랑에 빠졌을 때",
            "value": "romance"
          },
          {
            "text": "사람들과 배꼽 잡고 웃었을 때",
            "value": "comedy"
          },
          {
            "text": "큰 도전에 성공했을 때",
            "value": "action"
          },
          {
            "text": "진짜 나를 발견했을 때",
            "value": "drama"
          }
        ]
      }
    ],
    "categories": {
      "romance": {
        "title": "로맨스 – 사랑이 이끄는 인생",
        "emoji": "💕",
        "desc": "관계와 감정을 소중히 여기는 당신의 인생은 설렘 가득한 로맨스 영화 같아요. 사람과의 깊은 연결에서 삶의 의미를 찾는 편이에요. 가끔은 나 혼자만의 서사도 소중히 여겨보세요."
      },
      "comedy": {
        "title": "코미디 – 웃음이 넘치는 인생",
        "emoji": "😂",
        "desc": "어떤 상황에서도 유머를 잃지 않는 당신의 인생은 유쾌한 코미디 영화 같아요. 주변 사람들에게 웃음을 주는 힘을 가졌어요. 가끔은 진지한 순간도 피하지 말고 마주해보세요."
      },
      "action": {
        "title": "액션 – 도전으로 가득한 인생",
        "emoji": "💥",
        "desc": "끊임없이 도전하고 부딪히는 당신의 인생은 짜릿한 액션 영화 같아요. 목표를 향해 거침없이 나아가는 추진력이 매력이에요. 가끔은 잠시 멈춰 숨을 고르는 것도 필요해요."
      },
      "drama": {
        "title": "휴먼드라마 – 성장으로 채워진 인생",
        "emoji": "🎭",
        "desc": "깊이 고민하고 성찰하며 나아가는 당신의 인생은 잔잔한 감동을 주는 드라마 같아요. 진솔함으로 사람들의 마음을 움직여요. 가끔은 가볍게 즐기는 순간도 스스로에게 허락해주세요."
      }
    }
  },
  {
    "id": "energytype",
    "tag": "관계심리",
    "title": "나의 관계 에너지 유형 테스트",
    "emoji": "🔋",
    "tagline": "관계 속에서 나는 에너지를 주는 사람일까, 채우는 사람일까?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "친구와 만나고 집에 돌아오면?",
        "options": [
          {
            "text": "뿌듯하지만 살짝 지친다",
            "value": "giver"
          },
          {
            "text": "에너지가 오히려 채워진다",
            "value": "taker"
          },
          {
            "text": "적당히 좋고 적당히 피곤하다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "모임에서 나의 역할은?",
        "options": [
          {
            "text": "분위기를 챙기고 사람들을 살핀다",
            "value": "giver"
          },
          {
            "text": "자연스럽게 대접받고 힘을 얻는다",
            "value": "taker"
          },
          {
            "text": "상황에 따라 주기도 받기도 한다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "힘든 친구의 이야기를 들을 때?",
        "options": [
          {
            "text": "내 감정보다 상대를 먼저 살핀다",
            "value": "giver"
          },
          {
            "text": "들어주는 게 버겁게 느껴질 때가 있다",
            "value": "taker"
          },
          {
            "text": "공감하되 적당한 선을 지킨다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "관계에서 지칠 때 나는?",
        "options": [
          {
            "text": "그래도 상대를 먼저 챙긴다",
            "value": "giver"
          },
          {
            "text": "내가 채워질 때까지 거리를 둔다",
            "value": "taker"
          },
          {
            "text": "스스로를 먼저 돌본 후 다시 다가간다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "부탁을 받으면 나는?",
        "options": [
          {
            "text": "웬만하면 다 들어주려 한다",
            "value": "giver"
          },
          {
            "text": "내키지 않으면 잘 거절한다",
            "value": "taker"
          },
          {
            "text": "상황을 보고 적당히 조율한다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "사람들이 나를 찾는 이유는?",
        "options": [
          {
            "text": "이야기를 잘 들어주고 챙겨줘서",
            "value": "giver"
          },
          {
            "text": "함께 있으면 즐겁고 힘이 나서",
            "value": "taker"
          },
          {
            "text": "편안하고 균형 잡힌 사람이라서",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "연애나 우정에서 나는?",
        "options": [
          {
            "text": "늘 더 많이 주는 편인 것 같다",
            "value": "giver"
          },
          {
            "text": "받는 것에 더 익숙한 편이다",
            "value": "taker"
          },
          {
            "text": "주고받는 게 비교적 균형 잡혀있다",
            "value": "balanced"
          }
        ]
      },
      {
        "text": "관계에서 가장 중요한 건?",
        "options": [
          {
            "text": "상대를 챙기고 배려하는 마음",
            "value": "giver"
          },
          {
            "text": "나에게 힘이 되어주는 관계",
            "value": "taker"
          },
          {
            "text": "서로에게 도움이 되는 균형",
            "value": "balanced"
          }
        ]
      }
    ],
    "categories": {
      "giver": {
        "title": "기버형 – 먼저 채워주는 사람",
        "emoji": "🌷",
        "desc": "관계 속에서 늘 먼저 챙기고 배려하는 당신. 곁에 있는 사람들에게 큰 힘이 되어주는 존재예요. 다만 계속 주기만 하면 쉽게 지칠 수 있으니, 나를 채워주는 관계도 곁에 두는 게 중요해요."
      },
      "taker": {
        "title": "테이커형 – 에너지를 채우는 사람",
        "emoji": "🔋",
        "desc": "관계에서 자연스럽게 힘을 얻고 채워지는 당신. 좋은 에너지를 받아들이는 데 능숙해요. 가끔은 상대에게도 먼저 마음을 써주는 연습을 해보면 관계가 더 풍성해질 거예요."
      },
      "balanced": {
        "title": "밸런스형 – 주고받음이 균형 잡힌 사람",
        "emoji": "⚖️",
        "desc": "관계 속에서 주는 것과 받는 것의 균형을 잘 맞추는 당신. 건강하고 지속 가능한 관계를 만드는 힘이 있어요. 지금처럼 스스로를 먼저 살피는 균형 감각을 잘 유지해보세요."
      }
    }
  },
  {
    "id": "fashion",
    "tag": "패션",
    "title": "나의 패션 스타일 테스트",
    "emoji": "👗",
    "tagline": "옷장만 봐도 알 수 있는 진짜 나의 스타일은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "옷을 고를 때 가장 중요하게 생각하는 것은?",
        "options": [
          {
            "text": "편안함과 활동성",
            "value": "casual"
          },
          {
            "text": "깔끔한 핏과 정돈된 느낌",
            "value": "minimal"
          },
          {
            "text": "남들과 다른 개성",
            "value": "street"
          },
          {
            "text": "부드럽고 여성스러운 느낌",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "옷장을 열어보면 가장 많은 아이템은?",
        "options": [
          {
            "text": "후드티, 맨투맨",
            "value": "casual"
          },
          {
            "text": "무채색 셔츠와 슬랙스",
            "value": "minimal"
          },
          {
            "text": "그래픽 티셔츠, 볼캡",
            "value": "street"
          },
          {
            "text": "플라워 원피스, 블라우스",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "쇼핑할 때 나는?",
        "options": [
          {
            "text": "편하게 걸칠 수 있는 옷 위주로 고른다",
            "value": "casual"
          },
          {
            "text": "핏과 소재를 꼼꼼히 따진다",
            "value": "minimal"
          },
          {
            "text": "한정판이나 특이한 아이템에 끌린다",
            "value": "street"
          },
          {
            "text": "예쁘고 러블리한 디자인에 끌린다",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "데이트할 때 즐겨 입는 스타일은?",
        "options": [
          {
            "text": "청바지에 편한 티셔츠",
            "value": "casual"
          },
          {
            "text": "깔끔한 셋업이나 니트",
            "value": "minimal"
          },
          {
            "text": "트렌디한 레이어드 룩",
            "value": "street"
          },
          {
            "text": "원피스나 스커트",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "좋아하는 신발 스타일은?",
        "options": [
          {
            "text": "운동화, 스니커즈",
            "value": "casual"
          },
          {
            "text": "심플한 로퍼나 단화",
            "value": "minimal"
          },
          {
            "text": "볼드한 디자인의 하이탑",
            "value": "street"
          },
          {
            "text": "리본이나 플랫슈즈",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "액세서리에 대한 나의 생각은?",
        "options": [
          {
            "text": "거의 안 하는 편이다",
            "value": "casual"
          },
          {
            "text": "미니멀한 아이템 한두 개만",
            "value": "minimal"
          },
          {
            "text": "체인, 볼캡 등으로 포인트를 준다",
            "value": "street"
          },
          {
            "text": "귀걸이, 목걸이로 러블리하게",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "친구들이 내 스타일을 표현한다면?",
        "options": [
          {
            "text": "편안하고 자연스러운",
            "value": "casual"
          },
          {
            "text": "깔끔하고 세련된",
            "value": "minimal"
          },
          {
            "text": "개성 있고 힙한",
            "value": "street"
          },
          {
            "text": "여리여리하고 사랑스러운",
            "value": "romantic"
          }
        ]
      },
      {
        "text": "옷을 살 때 가장 많이 찾는 색은?",
        "options": [
          {
            "text": "무난한 데님, 그레이",
            "value": "casual"
          },
          {
            "text": "블랙, 화이트, 베이지",
            "value": "minimal"
          },
          {
            "text": "비비드하거나 강렬한 컬러",
            "value": "street"
          },
          {
            "text": "파스텔톤, 핑크 계열",
            "value": "romantic"
          }
        ]
      }
    ],
    "categories": {
      "casual": {
        "title": "캐주얼 – 편안함이 진짜 스타일",
        "emoji": "👕",
        "desc": "편안함과 자연스러움을 가장 중요하게 생각하는 당신. 꾸미지 않아도 매력이 넘치는 자유로운 감각을 지녔어요. 가끔은 포인트 아이템 하나로 새로운 분위기를 내보는 것도 즐거운 변화가 될 거예요."
      },
      "minimal": {
        "title": "미니멀 – 심플함 속의 세련미",
        "emoji": "🤍",
        "desc": "군더더기 없는 깔끔함을 추구하는 당신은 어디서나 정돈된 인상을 남겨요. 소재와 핏을 세심하게 챙기는 안목이 진짜 강점이죠. 가끔은 과감한 컬러나 아이템으로 포인트를 줘보는 것도 새로운 매력이 될 수 있어요."
      },
      "street": {
        "title": "스트리트 – 나만의 개성 폭발",
        "emoji": "🧢",
        "desc": "트렌드를 앞서가며 자신만의 개성을 뚜렷하게 표현하는 당신. 남들과 다른 아이템을 두려움 없이 소화하는 자신감이 매력이에요. 가끔은 힘을 뺀 심플한 룩도 시도해보면 스타일의 폭이 더 넓어질 거예요."
      },
      "romantic": {
        "title": "로맨틱 – 사랑스러운 무드메이커",
        "emoji": "🌸",
        "desc": "부드럽고 여성스러운 무드로 주변을 사랑스럽게 물들이는 당신. 디테일 하나하나에서 섬세한 감성이 묻어나요. 가끔은 러프한 아이템을 매치해 보면 반전 매력을 보여줄 수 있을 거예요."
      }
    }
  },
  {
    "id": "gift",
    "tag": "선물",
    "title": "나의 선물 스타일 테스트",
    "emoji": "🎁",
    "tagline": "선물 고르는 방식에 진짜 성격이 담겨있어요",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "선물을 고를 때 가장 먼저 생각하는 것은?",
        "options": [
          {
            "text": "그 사람과의 추억이나 의미",
            "value": "thoughtful"
          },
          {
            "text": "평소에 필요하다고 했던 것",
            "value": "practical"
          },
          {
            "text": "어떻게 하면 더 감동적으로 전달할지",
            "value": "event"
          },
          {
            "text": "예산은 상관없이 최고로 좋은 것",
            "value": "flex"
          }
        ]
      },
      {
        "text": "생일 선물을 준비하는 기간은?",
        "options": [
          {
            "text": "몇 주 전부터 의미를 고민한다",
            "value": "thoughtful"
          },
          {
            "text": "필요한 거 물어보고 바로 산다",
            "value": "practical"
          },
          {
            "text": "깜짝 이벤트를 몰래 기획한다",
            "value": "event"
          },
          {
            "text": "예산 크게 잡고 통 크게 지른다",
            "value": "flex"
          }
        ]
      },
      {
        "text": "선물과 함께 챙기는 것은?",
        "options": [
          {
            "text": "손편지나 진심 담은 메시지",
            "value": "thoughtful"
          },
          {
            "text": "교환 가능하게 영수증도 함께",
            "value": "practical"
          },
          {
            "text": "풍선, 케이크 같은 이벤트 소품",
            "value": "event"
          },
          {
            "text": "포장부터 고급스럽게",
            "value": "flex"
          }
        ]
      },
      {
        "text": "선물 예산을 정할 때 나는?",
        "options": [
          {
            "text": "가격보다 마음이 중요하다고 생각한다",
            "value": "thoughtful"
          },
          {
            "text": "합리적인 선에서 고민한다",
            "value": "practical"
          },
          {
            "text": "분위기 연출 비용까지 고려한다",
            "value": "event"
          },
          {
            "text": "예산 제한 없이 통 크게 쓴다",
            "value": "flex"
          }
        ]
      },
      {
        "text": "상대가 선물을 받고 가장 좋아했으면 하는 포인트는?",
        "options": [
          {
            "text": "'나를 이렇게까지 생각해줬구나' 하는 마음",
            "value": "thoughtful"
          },
          {
            "text": "'진짜 필요했던 거였어' 하는 반응",
            "value": "practical"
          },
          {
            "text": "'완전 깜짝 놀랐잖아' 하는 반응",
            "value": "event"
          },
          {
            "text": "'이걸 나한테?!' 하는 놀란 반응",
            "value": "flex"
          }
        ]
      },
      {
        "text": "친구가 선물 취향을 모르겠다고 하면 나의 조언은?",
        "options": [
          {
            "text": "평소 관심사를 잘 관찰해보라고 한다",
            "value": "thoughtful"
          },
          {
            "text": "위시리스트를 물어보라고 한다",
            "value": "practical"
          },
          {
            "text": "서프라이즈로 감동을 주라고 한다",
            "value": "event"
          },
          {
            "text": "그냥 비싼 걸로 사면 다 좋아한다고 한다",
            "value": "flex"
          }
        ]
      },
      {
        "text": "선물을 받았을 때 나는?",
        "options": [
          {
            "text": "의미를 곱씹으며 오래 간직한다",
            "value": "thoughtful"
          },
          {
            "text": "바로 유용하게 쓴다",
            "value": "practical"
          },
          {
            "text": "이벤트 자체가 기억에 남는다",
            "value": "event"
          },
          {
            "text": "가격이나 브랜드에 눈이 먼저 간다",
            "value": "flex"
          }
        ]
      },
      {
        "text": "커플이나 친구 사이 선물에서 가장 중요한 건?",
        "options": [
          {
            "text": "진심이 담긴 스토리",
            "value": "thoughtful"
          },
          {
            "text": "실생활에 도움이 되는 것",
            "value": "practical"
          },
          {
            "text": "잊지 못할 순간을 만드는 것",
            "value": "event"
          },
          {
            "text": "화끈하게 통 크게 쏘는 것",
            "value": "flex"
          }
        ]
      }
    ],
    "categories": {
      "thoughtful": {
        "title": "감동파 – 마음을 전하는 선물",
        "emoji": "💌",
        "desc": "선물 하나에도 상대와의 추억과 진심을 담아내는 당신. 받는 사람이 감동할 만큼 세심한 배려가 느껴져요. 가끔은 부담 갖지 말고 가볍게 선물해보는 것도 좋아요."
      },
      "practical": {
        "title": "실용파 – 꼭 필요한 걸 챙기는",
        "emoji": "🧰",
        "desc": "겉치레보다 상대에게 실제로 도움이 되는 걸 챙기는 당신. 현실적인 센스 덕분에 늘 만족도 높은 선물을 골라요. 가끔은 짧은 편지 한 장을 더해보면 감동이 배가 될 거예요."
      },
      "event": {
        "title": "이벤트파 – 서프라이즈 장인",
        "emoji": "🎉",
        "desc": "깜짝 이벤트와 분위기 연출로 특별한 순간을 만드는 당신. 준비 과정 자체를 즐기는 로맨티스트예요. 가끔은 힘을 빼고 소소하게 선물하는 것도 관계에 여유를 줄 수 있어요."
      },
      "flex": {
        "title": "플렉스파 – 통 크게 쏘는 스타일",
        "emoji": "💎",
        "desc": "마음을 표현할 때는 화끈하게, 아낌없이 쏘는 당신. 통 큰 선물로 상대를 확실하게 감동시켜요. 가끔은 작은 정성이 담긴 선물도 큰 울림을 줄 수 있다는 걸 기억해보세요."
      }
    }
  },
  {
    "id": "decision",
    "tag": "성격심리",
    "title": "나의 선택 유형 테스트",
    "emoji": "🧭",
    "tagline": "인생의 갈림길, 당신은 어떻게 결정하나요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "카페에서 메뉴를 고를 때 나는?",
        "options": [
          {
            "text": "딱 봐도 맛있어 보이는 걸 바로 고른다",
            "value": "intuition"
          },
          {
            "text": "리뷰와 별점을 꼼꼼히 비교해본다",
            "value": "analysis"
          },
          {
            "text": "먹어본 적 있는 안전한 메뉴를 고른다",
            "value": "caution"
          },
          {
            "text": "옆 사람이 뭐 시키는지 먼저 물어본다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "큰돈 들여 물건을 살 때 나는?",
        "options": [
          {
            "text": "마음에 확 꽂히면 바로 지른다",
            "value": "intuition"
          },
          {
            "text": "여러 제품을 비교하고 스펙을 따진다",
            "value": "analysis"
          },
          {
            "text": "며칠이고 고민하다 결정한다",
            "value": "caution"
          },
          {
            "text": "주변에 뭐가 좋은지 물어보고 산다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "새 학기나 새 직장처럼 중요한 선택을 앞두고 나는?",
        "options": [
          {
            "text": "느낌이 좋은 쪽으로 마음이 기운다",
            "value": "intuition"
          },
          {
            "text": "장단점을 표로 정리해본다",
            "value": "analysis"
          },
          {
            "text": "최대한 정보를 모으고 늦게 결정한다",
            "value": "caution"
          },
          {
            "text": "가까운 사람의 조언에 많이 좌우된다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "친구와 영화를 고를 때 나는?",
        "options": [
          {
            "text": "포스터나 제목 느낌으로 바로 고른다",
            "value": "intuition"
          },
          {
            "text": "평점과 줄거리를 검색해본다",
            "value": "analysis"
          },
          {
            "text": "안 봐서 후회 없을 확실한 걸 고른다",
            "value": "caution"
          },
          {
            "text": "친구가 보고 싶다는 걸 따라간다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "여행 일정을 짤 때 나는?",
        "options": [
          {
            "text": "가서 끌리는 대로 움직인다",
            "value": "intuition"
          },
          {
            "text": "동선과 시간을 촘촘히 계산한다",
            "value": "analysis"
          },
          {
            "text": "후기 좋은 코스로만 다닌다",
            "value": "caution"
          },
          {
            "text": "동행자가 원하는 일정에 맞춘다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "옷을 고를 때 나는?",
        "options": [
          {
            "text": "입어보고 느낌 오면 바로 산다",
            "value": "intuition"
          },
          {
            "text": "코디를 미리 머릿속으로 그려본다",
            "value": "analysis"
          },
          {
            "text": "무난하게 오래 입을 것 위주로 고른다",
            "value": "caution"
          },
          {
            "text": "다른 사람 의견을 들어보고 정한다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "결정을 내린 후 나는?",
        "options": [
          {
            "text": "웬만하면 잘 안 돌아본다",
            "value": "intuition"
          },
          {
            "text": "결과를 따져보고 다음에 반영한다",
            "value": "analysis"
          },
          {
            "text": "혹시 더 나은 선택이 있었는지 계속 생각한다",
            "value": "caution"
          },
          {
            "text": "주변 반응을 보고 안심하거나 불안해한다",
            "value": "depend"
          }
        ]
      },
      {
        "text": "갑자기 계획이 틀어지면 나는?",
        "options": [
          {
            "text": "그때그때 새로 정하면 되지!",
            "value": "intuition"
          },
          {
            "text": "대안을 빠르게 다시 계산한다",
            "value": "analysis"
          },
          {
            "text": "일단 멈추고 신중하게 재검토한다",
            "value": "caution"
          },
          {
            "text": "같이 있는 사람과 상의해서 정한다",
            "value": "depend"
          }
        ]
      }
    ],
    "categories": {
      "intuition": {
        "title": "직감형 – 순간의 촉을 믿는 사람",
        "emoji": "⚡",
        "desc": "당신은 복잡하게 재기보다 마음이 이끄는 대로 빠르게 결정하는 편이에요. 그 순발력 덕분에 기회를 놓치지 않고 스트레스도 덜 받죠. 가끔은 중요한 선택 앞에서 한 박자 쉬며 정보를 점검해보는 것도 도움이 될 거예요."
      },
      "analysis": {
        "title": "분석형 – 근거로 판단하는 전략가",
        "emoji": "📊",
        "desc": "당신은 감보다 데이터와 논리를 믿고 차근차근 비교한 뒤 결정하는 사람이에요. 덕분에 후회 없는 선택을 할 확률이 높고 주변에서도 신뢰를 받아요. 다만 너무 오래 재다가 타이밍을 놓치지 않도록 스스로 마감 시간을 정해보세요."
      },
      "caution": {
        "title": "신중형 – 돌다리도 두드리는 사람",
        "emoji": "🐢",
        "desc": "당신은 실수를 줄이기 위해 충분히 고민하고 안전한 선택을 선호하는 편이에요. 그 신중함 덕분에 큰 위험은 잘 피해가지만, 고민이 길어지면 오히려 지치기 쉬워요. 결정에 '마감 시한'을 정해두면 한결 가벼워질 거예요."
      },
      "depend": {
        "title": "의존형 – 함께 결정하는 조율자",
        "emoji": "🤝",
        "desc": "당신은 주변 사람의 의견을 소중히 여기고 함께 결정할 때 더 확신을 갖는 편이에요. 그 덕분에 관계 속에서 균형 잡힌 선택을 잘 해내죠. 가끔은 온전히 내 마음의 소리에 귀 기울여 스스로 결정해보는 연습도 해보세요."
      }
    }
  },
  {
    "id": "interior",
    "tag": "라이프",
    "title": "나의 인테리어 취향 테스트",
    "emoji": "🛋️",
    "tagline": "내 방을 보면 알 수 있는 진짜 나의 취향은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "새 집으로 이사한다면 가장 먼저 사고 싶은 가구는?",
        "options": [
          {
            "text": "깔끔한 화이트 소파",
            "value": "minimal"
          },
          {
            "text": "튼튼한 원목 테이블",
            "value": "natural"
          },
          {
            "text": "세월이 느껴지는 앤틱 서랍장",
            "value": "vintage"
          },
          {
            "text": "폭신한 러그와 쿠션",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "방을 꾸밀 때 가장 중요하게 생각하는 것은?",
        "options": [
          {
            "text": "불필요한 물건은 최소화",
            "value": "minimal"
          },
          {
            "text": "자연 소재가 주는 편안함",
            "value": "natural"
          },
          {
            "text": "나만의 개성과 스토리",
            "value": "vintage"
          },
          {
            "text": "아늑하고 따뜻한 분위기",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "좋아하는 색감 조합은?",
        "options": [
          {
            "text": "화이트와 그레이",
            "value": "minimal"
          },
          {
            "text": "베이지와 우드톤",
            "value": "natural"
          },
          {
            "text": "짙은 브라운과 골드",
            "value": "vintage"
          },
          {
            "text": "파스텔톤과 웜톤 조명",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "인테리어 소품을 고를 때 나는?",
        "options": [
          {
            "text": "있는 듯 없는 듯 심플한 디자인을 고른다",
            "value": "minimal"
          },
          {
            "text": "식물이나 라탄 소재 소품을 고른다",
            "value": "natural"
          },
          {
            "text": "벼룩시장에서 오래된 물건을 찾는다",
            "value": "vintage"
          },
          {
            "text": "캔들이나 담요 같은 감성 소품을 고른다",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "조명을 고를 때 나는?",
        "options": [
          {
            "text": "매립등처럼 깔끔한 조명을 선호한다",
            "value": "minimal"
          },
          {
            "text": "은은한 우드 스탠드 조명을 선호한다",
            "value": "natural"
          },
          {
            "text": "클래식한 샹들리에 느낌을 선호한다",
            "value": "vintage"
          },
          {
            "text": "노란빛 무드등을 여러 개 켜둔다",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "SNS에서 저장해두는 인테리어 사진은?",
        "options": [
          {
            "text": "군더더기 없는 화이트 톤의 집",
            "value": "minimal"
          },
          {
            "text": "초록 식물이 가득한 집",
            "value": "natural"
          },
          {
            "text": "유럽 감성이 느껴지는 빈티지 룸",
            "value": "vintage"
          },
          {
            "text": "이불 속처럼 포근한 침실",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "손님이 온다면 가장 자신 있게 보여주고 싶은 공간은?",
        "options": [
          {
            "text": "정돈된 미니멀 거실",
            "value": "minimal"
          },
          {
            "text": "식물로 꾸민 베란다",
            "value": "natural"
          },
          {
            "text": "소장품이 진열된 책장",
            "value": "vintage"
          },
          {
            "text": "폭신한 침대와 조명이 있는 방",
            "value": "cozy"
          }
        ]
      },
      {
        "text": "이상적인 주말 집콕 분위기는?",
        "options": [
          {
            "text": "깔끔하게 정리하고 여유롭게 보내기",
            "value": "minimal"
          },
          {
            "text": "창문 열고 식물 돌보며 바람 쐬기",
            "value": "natural"
          },
          {
            "text": "좋아하는 LP나 오래된 책 읽기",
            "value": "vintage"
          },
          {
            "text": "이불 덮고 영화 보며 뒹굴기",
            "value": "cozy"
          }
        ]
      }
    ],
    "categories": {
      "minimal": {
        "title": "미니멀 심플형 – 군더더기 없는 공간",
        "emoji": "🤍",
        "desc": "불필요한 것은 덜어내고 꼭 필요한 것만 남기는 당신은 깔끔하고 정돈된 공간에서 안정감을 느껴요. 심플한 감각이 돋보이는 만큼, 가끔은 포인트가 되는 소품 하나로 공간에 온기를 더해보세요."
      },
      "natural": {
        "title": "내추럴 우드형 – 자연을 담은 공간",
        "emoji": "🌿",
        "desc": "식물과 원목처럼 자연스러운 소재를 곁에 둘 때 마음이 편안해지는 당신. 살아있는 느낌을 주는 공간을 만드는 감각이 뛰어나요. 가끔은 식물 돌보는 수고로움도 즐거움으로 받아들여보세요."
      },
      "vintage": {
        "title": "빈티지 앤틱형 – 이야기가 담긴 공간",
        "emoji": "🕰️",
        "desc": "시간이 쌓인 물건에서 특별한 매력을 발견하는 당신은 남다른 취향과 안목을 가졌어요. 나만의 개성이 담긴 공간을 만들 줄 알죠. 가끔은 새로운 스타일도 과감히 시도해보세요."
      },
      "cozy": {
        "title": "아늑한 무드형 – 포근함이 가득한 공간",
        "emoji": "🕯️",
        "desc": "따뜻한 조명과 포근한 패브릭으로 마음까지 편안해지는 공간을 만드는 당신. 집이 곧 힐링 공간이 되는 타입이에요. 가끔은 환기와 정리로 공간에 산뜻함도 더해보세요."
      }
    }
  },
  {
    "id": "plant",
    "tag": "라이프",
    "title": "나의 반려식물 집사 유형 테스트",
    "emoji": "🪴",
    "tagline": "당신은 어떤 스타일의 식물집사인가요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "새 식물을 데려오기 전 나는?",
        "options": [
          {
            "text": "종류와 키우는 법을 꼼꼼히 검색한다",
            "value": "perfectionist"
          },
          {
            "text": "일단 예뻐 보이면 데려온다",
            "value": "emotional"
          },
          {
            "text": "정해둔 루틴에 맞춰 시기를 고른다",
            "value": "diligent"
          },
          {
            "text": "그냥 눈에 들어오면 산다",
            "value": "freestyle"
          }
        ]
      },
      {
        "text": "물 주는 주기는?",
        "options": [
          {
            "text": "캘린더에 적어두고 꼭 지킨다",
            "value": "diligent"
          },
          {
            "text": "흙 상태를 보고 그때그때 준다",
            "value": "freestyle"
          },
          {
            "text": "혹시 과습될까 매번 검색해본다",
            "value": "perfectionist"
          },
          {
            "text": "기분 내킬 때 듬뿍 준다",
            "value": "emotional"
          }
        ]
      },
      {
        "text": "식물 잎이 조금 시들었을 때 나는?",
        "options": [
          {
            "text": "바로 원인을 찾아 조치한다",
            "value": "diligent"
          },
          {
            "text": "며칠 지켜보다 괜찮아지겠지 한다",
            "value": "freestyle"
          },
          {
            "text": "인터넷에 사진 올려 원인을 물어본다",
            "value": "perfectionist"
          },
          {
            "text": "괜히 마음이 짠해서 말을 걸어준다",
            "value": "emotional"
          }
        ]
      },
      {
        "text": "식물을 데려오는 곳은 주로?",
        "options": [
          {
            "text": "전문 식물샵에서 상담받고 고른다",
            "value": "perfectionist"
          },
          {
            "text": "꽃집을 지나다 마음에 들면 바로",
            "value": "emotional"
          },
          {
            "text": "관리하기 쉬운 걸로 화원에서 고른다",
            "value": "diligent"
          },
          {
            "text": "지인에게 나눔 받는 경우가 많다",
            "value": "freestyle"
          }
        ]
      },
      {
        "text": "여행을 갈 때 식물은?",
        "options": [
          {
            "text": "자동 급수 장치까지 준비한다",
            "value": "perfectionist"
          },
          {
            "text": "이웃이나 가족에게 부탁해둔다",
            "value": "diligent"
          },
          {
            "text": "며칠쯤이야 괜찮겠지 한다",
            "value": "freestyle"
          },
          {
            "text": "다녀와서 반갑게 인사부터 건넨다",
            "value": "emotional"
          }
        ]
      },
      {
        "text": "식물에게 이름을 붙이는 편인가요?",
        "options": [
          {
            "text": "이름도 짓고 말도 자주 건다",
            "value": "emotional"
          },
          {
            "text": "특별히 이름은 안 짓는다",
            "value": "freestyle"
          },
          {
            "text": "종류와 구입일을 기록해둔다",
            "value": "diligent"
          },
          {
            "text": "성장 일지를 앱으로 관리한다",
            "value": "perfectionist"
          }
        ]
      },
      {
        "text": "분갈이를 해야 할 타이밍이 되면?",
        "options": [
          {
            "text": "시기와 화분 크기를 계산해 진행한다",
            "value": "perfectionist"
          },
          {
            "text": "필요하다 싶으면 바로 해준다",
            "value": "diligent"
          },
          {
            "text": "미루다가 뿌리가 꽉 차서야 한다",
            "value": "freestyle"
          },
          {
            "text": "예쁜 새 화분 고르는 게 더 설렌다",
            "value": "emotional"
          }
        ]
      },
      {
        "text": "집에 있는 식물이 잘 자랐을 때 드는 생각은?",
        "options": [
          {
            "text": "역시 계획대로 관리한 보람이 있다",
            "value": "diligent"
          },
          {
            "text": "얘도 다 지 알아서 크는구나",
            "value": "freestyle"
          },
          {
            "text": "혹시 더 좋은 환경은 없을까 고민한다",
            "value": "perfectionist"
          },
          {
            "text": "너무 뿌듯해서 사진을 백 장 찍는다",
            "value": "emotional"
          }
        ]
      }
    ],
    "categories": {
      "diligent": {
        "title": "성실한 정원사형",
        "emoji": "🌱",
        "desc": "정해진 루틴과 꾸준한 관심으로 식물을 알뜰하게 돌보는 당신은 타고난 성실한 정원사예요. 덕분에 집안의 초록이들이 건강하고 안정적으로 자라나죠. 가끔은 계획을 잠시 내려놓고 식물이 자라는 모습 자체를 여유롭게 즐겨보는 것도 좋아요."
      },
      "freestyle": {
        "title": "자유방임 힐링형",
        "emoji": "🍃",
        "desc": "느긋하고 여유로운 마음으로 식물을 대하는 당신은 스트레스 없이 초록이와 함께하는 편안한 집사예요. 자연스러운 리듬을 믿는 태도 덕분에 식물도 사람도 편안하죠. 가끔은 물 주는 날 정도는 살짝 체크해두면 더 튼튼하게 키울 수 있을 거예요."
      },
      "perfectionist": {
        "title": "꼼꼼한 연구형 집사",
        "emoji": "🔍",
        "desc": "식물 하나하나의 특성을 꼼꼼히 공부하고 세심하게 챙기는 당신은 믿음직한 연구형 집사예요. 덕분에 웬만한 문제는 미리 예방하고 빠르게 해결하죠. 가끔은 너무 완벽하게 하려는 마음을 내려놓고 작은 실수도 괜찮다고 여겨보세요."
      },
      "emotional": {
        "title": "감성 충만 애정형",
        "emoji": "💚",
        "desc": "식물 하나하나에 이름을 붙이고 마음을 나누는 당신은 애정이 가득한 감성 집사예요. 진심 어린 관심 덕분에 식물도 당신의 온기를 느끼고 잘 자라날 거예요. 가끔은 감정만큼이나 실용적인 관리 팁도 함께 챙겨보면 더 좋겠어요."
      }
    }
  },
  {
    "id": "moneytype",
    "tag": "소비심리",
    "title": "나의 소비 스타일 테스트",
    "emoji": "💸",
    "tagline": "돈을 쓸 때 진짜 내 마음은 어떤 모습일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "월급(용돈)이 들어오면 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "예산을 항목별로 나눠서 정리한다",
            "value": "planner"
          },
          {
            "text": "그동안 참았던 걸 바로 결제한다",
            "value": "flex"
          },
          {
            "text": "힘들었던 나에게 작은 선물부터 산다",
            "value": "emotional"
          },
          {
            "text": "가격 비교부터 하고 필요한 걸 산다",
            "value": "value"
          }
        ]
      },
      {
        "text": "쇼핑몰에서 마음에 드는 옷을 발견하면?",
        "options": [
          {
            "text": "예산 안에 들어오는지부터 계산한다",
            "value": "planner"
          },
          {
            "text": "입어보고 마음에 들면 바로 결제한다",
            "value": "flex"
          },
          {
            "text": "오늘 기분이 안 좋아서 위안 삼아 산다",
            "value": "emotional"
          },
          {
            "text": "비슷한 다른 상품과 가격을 비교해본다",
            "value": "value"
          }
        ]
      },
      {
        "text": "갖고 싶은 물건이 예산을 초과하면?",
        "options": [
          {
            "text": "다음 달 예산에 반영해서 계획적으로 모은다",
            "value": "planner"
          },
          {
            "text": "할부나 카드로 일단 지르고 본다",
            "value": "flex"
          },
          {
            "text": "기분 전환이 필요하니 그냥 산다",
            "value": "emotional"
          },
          {
            "text": "세일 기간이나 중고를 기다린다",
            "value": "value"
          }
        ]
      },
      {
        "text": "친구가 새로 산 물건을 자랑하면?",
        "options": [
          {
            "text": "나도 예산에 여유가 생기면 사야지 계획한다",
            "value": "planner"
          },
          {
            "text": "나도 질 수 없다는 생각에 바로 검색해본다",
            "value": "flex"
          },
          {
            "text": "괜히 기분이 처져서 나도 뭔가 사고 싶어진다",
            "value": "emotional"
          },
          {
            "text": "정말 필요한 물건인지부터 따져본다",
            "value": "value"
          }
        ]
      },
      {
        "text": "스트레스 받는 날엔?",
        "options": [
          {
            "text": "미리 정해둔 취미 예산 안에서 해소한다",
            "value": "planner"
          },
          {
            "text": "오늘만큼은 나를 위해 크게 쓴다",
            "value": "flex"
          },
          {
            "text": "장바구니에 담아둔 걸 결제하며 기분을 푼다",
            "value": "emotional"
          },
          {
            "text": "돈 쓰는 것보다 다른 방법으로 푼다",
            "value": "value"
          }
        ]
      },
      {
        "text": "기념일(생일, 승진 등) 선물이나 나를 위한 소비는?",
        "options": [
          {
            "text": "미리 예산을 정해두고 그 안에서 고른다",
            "value": "planner"
          },
          {
            "text": "평소 갖고 싶었던 걸 과감하게 지른다",
            "value": "flex"
          },
          {
            "text": "그날 기분에 따라 즉흥적으로 정한다",
            "value": "emotional"
          },
          {
            "text": "가성비 좋은 걸로 알차게 준비한다",
            "value": "value"
          }
        ]
      },
      {
        "text": "온라인 쇼핑 장바구니 속 물건들은?",
        "options": [
          {
            "text": "예산에 맞춰 필요한 순서대로 결제한다",
            "value": "planner"
          },
          {
            "text": "마음에 드는 건 다 결제 버튼을 누른다",
            "value": "flex"
          },
          {
            "text": "기분 따라 담았다 뺐다를 반복한다",
            "value": "emotional"
          },
          {
            "text": "할인 알림이 뜰 때까지 기다린다",
            "value": "value"
          }
        ]
      },
      {
        "text": "소비를 마치고 나서 드는 생각은?",
        "options": [
          {
            "text": "계획대로 썼다는 뿌듯함이 든다",
            "value": "planner"
          },
          {
            "text": "그 순간 만족했으니 후회는 없다",
            "value": "flex"
          },
          {
            "text": "살 때는 행복한데 나중에 후회가 밀려올 때도 있다",
            "value": "emotional"
          },
          {
            "text": "잘 비교해서 알뜰하게 샀다는 만족감이 든다",
            "value": "value"
          }
        ]
      }
    ],
    "categories": {
      "planner": {
        "title": "계획형 소비자 – 예산의 달인",
        "emoji": "📊",
        "desc": "당신은 돈을 쓰기 전에 항상 계획부터 세우는 사람이에요. 예산 안에서 움직이니 통장 잔고에 크게 놀랄 일이 없고, 주변에서도 '돈 관리 잘한다'는 말을 자주 듣죠. 다만 너무 계획에만 갇히면 가끔 찾아오는 소소한 즐거움을 놓칠 수 있으니, 한 달에 한 번쯤은 예산 밖의 작은 사치도 스스로에게 허락해보세요."
      },
      "flex": {
        "title": "플렉스형 소비자 – 지를 땐 화끈하게",
        "emoji": "💳",
        "desc": "당신은 마음에 드는 게 있으면 망설이지 않고 지르는 사람이에요. 하고 싶은 걸 미루지 않고 스스로에게 아낌없이 투자할 줄 아는 자신감이 매력이죠. 다만 순간의 만족이 나중에 카드값 걱정으로 돌아올 수 있으니, 지르기 전에 딱 하루만 담아두는 습관을 들여보세요."
      },
      "emotional": {
        "title": "감성형 소비자 – 마음이 이끄는 대로",
        "emoji": "🛍️",
        "desc": "당신에게 쇼핑은 물건을 사는 것 이상으로 기분을 다스리는 방법이에요. 스트레스받을 때 작은 소비로 마음을 다독일 줄 아는 섬세한 사람이지만, 감정이 가라앉고 나면 '이걸 왜 샀지' 싶은 순간도 종종 찾아와요. 결제 버튼을 누르기 전에 잠깐 심호흡을 하고, 지금 필요한 게 물건인지 위로인지 한 번만 더 물어보세요."
      },
      "value": {
        "title": "실속형 소비자 – 알뜰한 협상가",
        "emoji": "🧮",
        "desc": "당신은 같은 돈으로도 최대한 알차게 쓰는 방법을 아는 사람이에요. 비교하고 따져보는 습관 덕분에 후회 없는 소비를 하는 편이라 주변에서 쇼핑 조언을 구하러 올 때도 많죠. 다만 아끼는 데만 집중하다 가끔은 스스로에게 인색해질 수 있으니, 정말 원하는 것 앞에서는 가격표 대신 마음의 만족도를 먼저 살펴보세요."
      }
    },
    "intro": "월급날부터 쇼핑 장바구니까지, 돈 쓰는 습관에는 나도 몰랐던 마음이 숨어있어요. 8가지 질문으로 나의 소비 스타일을 알아보세요.",
    "insight": "소비 스타일에는 정답이 없지만, 내 패턴을 알면 돈과 더 건강한 관계를 맺을 수 있어요. 계획형이라면 가끔의 일탈을, 플렉스형이라면 하루의 여유를, 감성형이라면 잠깐의 심호흡을, 실속형이라면 스스로에 대한 투자를 잊지 마세요."
  },
  {
    "id": "spending",
    "tag": "소비심리",
    "title": "나의 소비 습관 테스트",
    "emoji": "💳",
    "tagline": "돈을 쓰는 방식에서 드러나는 진짜 나의 성향은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "월급이 들어오면 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "갖고 싶었던 걸 바로 지른다",
            "value": "flex"
          },
          {
            "text": "저축할 돈을 먼저 떼어 놓는다",
            "value": "saver"
          },
          {
            "text": "예산을 세워 쓸 곳을 정리한다",
            "value": "planner"
          },
          {
            "text": "일단 두고 그때그때 쓴다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "쇼핑몰 장바구니에 물건을 담는 기준은?",
        "options": [
          {
            "text": "남들 눈에 좋아 보이는 것",
            "value": "flex"
          },
          {
            "text": "할인하거나 꼭 필요한 것",
            "value": "saver"
          },
          {
            "text": "미리 찾아보고 비교한 것",
            "value": "planner"
          },
          {
            "text": "그 순간 마음에 든 것",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "친구들과의 모임에서 밥값을 낼 때 나는?",
        "options": [
          {
            "text": "기분 좋게 먼저 쏜다",
            "value": "flex"
          },
          {
            "text": "더치페이로 깔끔하게 나눈다",
            "value": "saver"
          },
          {
            "text": "다음엔 누가 낼지 미리 계산한다",
            "value": "planner"
          },
          {
            "text": "그날 분위기 따라 그냥 낸다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "가계부나 소비 내역을 확인하는 빈도는?",
        "options": [
          {
            "text": "거의 안 본다, 쓰고 싶을 때 쓴다",
            "value": "flex"
          },
          {
            "text": "하루도 빠짐없이 꼼꼼히 체크한다",
            "value": "saver"
          },
          {
            "text": "월 단위로 계획과 비교해본다",
            "value": "planner"
          },
          {
            "text": "생각날 때만 가끔 들여다본다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "큰맘 먹고 사고 싶은 물건이 생기면?",
        "options": [
          {
            "text": "고민 없이 바로 결제한다",
            "value": "flex"
          },
          {
            "text": "정말 필요한지 몇 번이나 되묻는다",
            "value": "saver"
          },
          {
            "text": "리뷰와 가격을 비교하며 적당한 시점을 기다린다",
            "value": "planner"
          },
          {
            "text": "눈에 들어온 그날 바로 지른다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "세일이나 할인 소식을 보면?",
        "options": [
          {
            "text": "평소 안 사던 것도 끌린다",
            "value": "flex"
          },
          {
            "text": "필요했던 걸 싸게 살 기회다",
            "value": "saver"
          },
          {
            "text": "장바구니 리스트와 비교해본다",
            "value": "planner"
          },
          {
            "text": "일단 구경하다 충동적으로 담는다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "여행이나 특별한 날을 준비할 때 지출 방식은?",
        "options": [
          {
            "text": "이번만큼은 아낌없이 쓴다",
            "value": "flex"
          },
          {
            "text": "최대한 저렴하게 다닐 방법을 찾는다",
            "value": "saver"
          },
          {
            "text": "예산을 미리 짜고 그 안에서 쓴다",
            "value": "planner"
          },
          {
            "text": "그날 기분 따라 즉흥적으로 쓴다",
            "value": "impulse"
          }
        ]
      },
      {
        "text": "통장 잔고를 보고 드는 생각은?",
        "options": [
          {
            "text": "다시 벌면 되니 크게 신경 안 쓴다",
            "value": "flex"
          },
          {
            "text": "숫자가 쌓이는 걸 볼 때 뿌듯하다",
            "value": "saver"
          },
          {
            "text": "계획한 만큼 남았는지부터 확인한다",
            "value": "planner"
          },
          {
            "text": "생각보다 줄어 있어 깜짝 놀란다",
            "value": "impulse"
          }
        ]
      }
    ],
    "categories": {
      "flex": {
        "title": "플렉스형 – 지금을 위해 쓰는 사람",
        "emoji": "💸",
        "desc": "당신은 돈을 쌓아두기보다 원하는 순간에 과감하게 쓰는 사람이에요. 그만큼 하고 싶은 걸 미루지 않고 지금의 행복을 챙기는 힘이 있죠. 다만 통장을 스치는 돈이 많아질 수 있으니, 한 달에 한 번쯤은 지출 내역을 가볍게 훑어보는 습관을 들여보세요."
      },
      "saver": {
        "title": "알짜 저축형 – 모으는 게 재미있는 사람",
        "emoji": "🐷",
        "desc": "당신은 작은 지출도 신중하게 따지며 꾸준히 모아가는 사람이에요. 통장에 숫자가 쌓이는 걸 보는 게 큰 즐거움이라 미래에 대한 안정감이 든든하죠. 다만 너무 아끼기만 하면 지칠 수 있으니, 가끔은 스스로를 위한 작은 소비도 허락해보세요."
      },
      "planner": {
        "title": "계획 소비형 – 비교하고 따져보는 사람",
        "emoji": "📊",
        "desc": "당신은 예산을 세우고 그 안에서 합리적으로 쓰는 걸 좋아하는 사람이에요. 충동적으로 돈을 쓰는 일이 적어 돈 관리에 있어서는 믿음직한 편이죠. 다만 비교하고 따지는 데 시간을 너무 많이 쓰고 있다면, 가끔은 직감을 믿고 빠르게 결정해보는 것도 괜찮아요."
      },
      "impulse": {
        "title": "즉흥 소비형 – 기분 따라 움직이는 사람",
        "emoji": "🎈",
        "desc": "당신은 그 순간의 감정과 분위기에 솔직하게 반응하며 소비하는 사람이에요. 망설임 없이 마음이 가는 대로 행동하는 자유로움이 매력이죠. 다만 나중에 지출을 보고 놀라는 일이 잦다면, 결제 전에 딱 10분만 기다려보는 나만의 규칙을 만들어보세요."
      }
    },
    "intro": "같은 돈도 사람마다 쓰는 방식은 다 다르죠. 8가지 질문으로 나의 소비 성향이 어떤 유형에 가까운지 확인해보세요.",
    "insight": "소비 습관에는 정답이 없어요. 다만 내 유형을 알아두면 과소비나 과한 절약으로 치닫기 전에 스스로 균형을 잡기가 훨씬 쉬워져요. 오늘의 결과를 보고 나에게 맞는 작은 습관 하나만 더해보세요."
  },
  {
    "id": "empathy",
    "tag": "공감력",
    "title": "나의 공감능력 테스트",
    "emoji": "💞",
    "tagline": "다른 사람의 마음을 얼마나 깊이 이해하고 공감할 수 있을까요?",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "친구가 울면서 전화했을 때 나는?",
        "options": [
          {
            "text": "같이 눈물이 날 것 같다",
            "value": 1
          },
          {
            "text": "마음이 아파서 위로해준다",
            "value": 2
          },
          {
            "text": "차분히 상황을 들어본다",
            "value": 3
          },
          {
            "text": "빨리 해결 방법부터 찾는다",
            "value": 4
          }
        ]
      },
      {
        "text": "영화나 드라마를 볼 때 나는?",
        "options": [
          {
            "text": "주인공 감정에 완전히 몰입한다",
            "value": 1
          },
          {
            "text": "슬픈 장면에서 눈물이 날 때가 많다",
            "value": 2
          },
          {
            "text": "이야기 전개에 더 집중하는 편이다",
            "value": 3
          },
          {
            "text": "별다른 감정 동요 없이 본다",
            "value": 4
          }
        ]
      },
      {
        "text": "타인의 실수를 보면?",
        "options": [
          {
            "text": "그 사람 마음이 얼마나 불편할지 먼저 생각난다",
            "value": 1
          },
          {
            "text": "안쓰러운 마음이 든다",
            "value": 2
          },
          {
            "text": "왜 그랬는지 이유가 궁금하다",
            "value": 3
          },
          {
            "text": "내 일이 아니니 크게 신경 쓰지 않는다",
            "value": 4
          }
        ]
      },
      {
        "text": "낯선 사람이 길에서 넘어지는 걸 보면?",
        "options": [
          {
            "text": "바로 다가가서 괜찮은지 살핀다",
            "value": 1
          },
          {
            "text": "걱정되는 마음이 들지만 머뭇거린다",
            "value": 2
          },
          {
            "text": "누군가 도와주겠지 생각한다",
            "value": 3
          },
          {
            "text": "대수롭지 않게 지나간다",
            "value": 4
          }
        ]
      },
      {
        "text": "친구와 의견이 다를 때 나는?",
        "options": [
          {
            "text": "상대 입장에서 왜 그렇게 생각하는지 먼저 이해하려 한다",
            "value": 1
          },
          {
            "text": "내 생각을 말하기 전에 상대 말을 끝까지 듣는다",
            "value": 2
          },
          {
            "text": "내 의견을 분명히 먼저 전달한다",
            "value": 3
          },
          {
            "text": "굳이 맞출 필요 없다고 생각한다",
            "value": 4
          }
        ]
      },
      {
        "text": "뉴스에서 안타까운 사연을 보면?",
        "options": [
          {
            "text": "마음이 쓰여서 하루 종일 생각난다",
            "value": 1
          },
          {
            "text": "잠깐이지만 마음이 무거워진다",
            "value": 2
          },
          {
            "text": "안타깝다고 느끼고 넘어간다",
            "value": 3
          },
          {
            "text": "나와 상관없는 일이라 금방 잊는다",
            "value": 4
          }
        ]
      },
      {
        "text": "상대방의 표정이나 말투가 평소와 다르면?",
        "options": [
          {
            "text": "바로 알아채고 무슨 일 있는지 물어본다",
            "value": 1
          },
          {
            "text": "신경 쓰이지만 먼저 묻지는 않는다",
            "value": 2
          },
          {
            "text": "시간이 지나면 자연히 알게 된다고 생각한다",
            "value": 3
          },
          {
            "text": "잘 눈치채지 못하는 편이다",
            "value": 4
          }
        ]
      },
      {
        "text": "누군가 나에게 고민을 털어놓을 때 나는?",
        "options": [
          {
            "text": "내 일처럼 느껴져서 같이 고민한다",
            "value": 1
          },
          {
            "text": "진지하게 들어주고 공감해준다",
            "value": 2
          },
          {
            "text": "들어주되 적당히 거리를 둔다",
            "value": 3
          },
          {
            "text": "빨리 끝내고 싶은 마음이 든다",
            "value": 4
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 14,
        "title": "공감 만렙형 – 마음을 깊이 느끼는 사람",
        "emoji": "💞",
        "desc": "다른 사람의 감정을 내 일처럼 느끼는 섬세한 마음을 가졌어요. 주변 사람들이 기댈 수 있는 존재로 여겨지지만, 그만큼 타인의 감정에 쉽게 휩쓸려 지칠 수도 있어요. 공감하는 만큼 나를 위한 감정 충전 시간도 꼭 챙겨주세요."
      },
      {
        "min": 15,
        "max": 20,
        "title": "따뜻한 균형형 – 공감과 거리의 균형을 아는 사람",
        "emoji": "🤝",
        "desc": "상대의 마음을 헤아리면서도 적당한 거리를 유지할 줄 아는 사람이에요. 감정에 휩쓸리지 않으면서도 따뜻하게 곁을 지켜줄 수 있어서 관계가 안정적으로 오래가는 편이에요. 가끔은 조금 더 깊이 마음을 표현해봐도 좋아요."
      },
      {
        "min": 21,
        "max": 26,
        "title": "담백한 현실형 – 상황을 먼저 보는 사람",
        "emoji": "🧭",
        "desc": "감정보다 상황과 맥락을 먼저 살피는 침착한 사람이에요. 덕분에 흔들리지 않고 문제를 객관적으로 풀어낼 수 있지만, 상대는 가끔 위로보다 해결책이 먼저 나와 서운해할 수 있어요. 말보다 먼저 가만히 들어주는 연습을 해보세요."
      },
      {
        "min": 27,
        "max": 32,
        "title": "쿨한 독립형 – 감정보다 사실에 집중하는 사람",
        "emoji": "🧊",
        "desc": "타인의 감정에 쉽게 휘둘리지 않는 단단한 사람이에요. 덕분에 위기 상황에서도 침착함을 유지할 수 있지만, 가까운 사람은 가끔 내 마음을 잘 모르는 것 같다고 느낄 수 있어요. 상대의 감정에 한 번 더 관심을 가져보는 것만으로도 관계가 더 깊어질 거예요."
      }
    ],
    "intro": "누군가의 마음을 읽어내는 능력은 사람마다 다르게 발달해요. 8가지 질문으로 내 공감력이 어느 정도인지 확인해보세요.",
    "insight": "공감력은 타고나는 것이 아니라 연습으로 더 깊어질 수 있는 능력이에요. 오늘 결과를 참고해서, 가까운 사람의 감정을 한 번 더 들여다보는 연습을 해보면 관계가 한층 편안해질 거예요."
  },
  {
    "id": "travelstyle",
    "tag": "여행",
    "title": "나의 여행 스타일 테스트",
    "emoji": "✈️",
    "tagline": "여행지에서 드러나는 진짜 내 모습은 어떤 스타일일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "여행 계획을 세울 때 나는?",
        "options": [
          {
            "text": "출발 전에 일정표를 꼼꼼하게 짜둔다",
            "value": "plan"
          },
          {
            "text": "숙소만 정하고 나머지는 그때그때 정한다",
            "value": "free"
          },
          {
            "text": "맛집과 호캉스 리스트부터 채운다",
            "value": "luxury"
          },
          {
            "text": "액티비티와 체험 프로그램부터 찾아본다",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "여행지에 도착해서 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "미리 짜둔 동선대로 이동한다",
            "value": "plan"
          },
          {
            "text": "일단 동네를 정처 없이 걸어본다",
            "value": "free"
          },
          {
            "text": "숙소에 짐을 풀고 여유를 즐긴다",
            "value": "luxury"
          },
          {
            "text": "지도를 보며 모험할 코스를 찾는다",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "여행 중 예상치 못한 일이 생기면?",
        "options": [
          {
            "text": "대체 계획(플랜 B)을 바로 꺼낸다",
            "value": "plan"
          },
          {
            "text": "오히려 재미있는 변수라고 생각한다",
            "value": "free"
          },
          {
            "text": "불편하지 않게 조용히 해결한다",
            "value": "luxury"
          },
          {
            "text": "더 신나는 도전으로 받아들인다",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "여행 사진첩을 보면 가장 많이 찍힌 건?",
        "options": [
          {
            "text": "체크리스트처럼 남긴 관광지 인증샷",
            "value": "plan"
          },
          {
            "text": "우연히 마주친 골목과 사람들",
            "value": "free"
          },
          {
            "text": "예쁜 카페와 플레이팅 사진",
            "value": "luxury"
          },
          {
            "text": "액티비티 하는 역동적인 순간들",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "같이 가는 일행에게 자주 하는 말은?",
        "options": [
          {
            "text": "이거 다음엔 여기 가야 해, 시간 체크하자",
            "value": "plan"
          },
          {
            "text": "일단 가보고 정하자",
            "value": "free"
          },
          {
            "text": "오늘은 좀 쉬었다 가자",
            "value": "luxury"
          },
          {
            "text": "저거 한번 해보자!",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "여행 예산을 쓰는 방식은?",
        "options": [
          {
            "text": "항목별로 미리 정해두고 그 안에서 쓴다",
            "value": "plan"
          },
          {
            "text": "크게 신경 안 쓰고 그때 기분대로 쓴다",
            "value": "free"
          },
          {
            "text": "숙소와 음식에 아낌없이 투자한다",
            "value": "luxury"
          },
          {
            "text": "체험·액티비티에 가장 많이 쓴다",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "여행에서 돌아온 후 가장 뿌듯한 건?",
        "options": [
          {
            "text": "계획한 걸 다 해냈다는 성취감",
            "value": "plan"
          },
          {
            "text": "예상 못한 즐거운 추억이 많다는 것",
            "value": "free"
          },
          {
            "text": "푹 쉬고 재충전했다는 것",
            "value": "luxury"
          },
          {
            "text": "새로운 걸 도전해봤다는 것",
            "value": "adventure"
          }
        ]
      },
      {
        "text": "이상적인 여행 메이트는?",
        "options": [
          {
            "text": "시간 약속을 잘 지키는 사람",
            "value": "plan"
          },
          {
            "text": "계획 없이도 잘 맞춰주는 사람",
            "value": "free"
          },
          {
            "text": "함께 여유를 즐길 줄 아는 사람",
            "value": "luxury"
          },
          {
            "text": "뭐든 같이 도전해줄 사람",
            "value": "adventure"
          }
        ]
      }
    ],
    "categories": {
      "plan": {
        "title": "계획형 – 완벽한 일정표 여행자",
        "emoji": "📝",
        "desc": "여행도 하나의 프로젝트처럼 꼼꼼히 준비하는 사람이에요. 덕분에 시간 낭비 없이 알찬 일정을 소화하고, 함께 가는 사람들도 든든하게 여행을 즐길 수 있어요. 다만 계획이 틀어졌을 때 너무 아쉬워하지 말고, 가끔은 일정표를 접어두고 즉흥적인 순간도 받아들여보세요."
      },
      "free": {
        "title": "즉흥형 – 발길 닿는 대로 여행자",
        "emoji": "🎈",
        "desc": "정해진 틀보다 그 순간의 기분과 우연을 즐길 줄 아는 사람이에요. 그래서 남들이 못 보는 숨은 장소나 뜻밖의 인연을 만나는 행운이 자주 따라와요. 다만 숙소나 교통편처럼 꼭 필요한 부분은 최소한만 미리 정해두면 여행이 훨씬 편해질 거예요."
      },
      "luxury": {
        "title": "힐링형 – 여유로운 럭셔리 여행자",
        "emoji": "🛏️",
        "desc": "바쁜 일상에서 벗어나 제대로 쉬는 법을 아는 사람이에요. 좋은 숙소와 맛있는 음식으로 스스로를 아낄 줄 알아서, 여행에서 돌아오면 확실히 재충전된 기분을 느껴요. 가끔은 계획 없이 동네를 걸어보는 것도 색다른 힐링이 될 수 있어요."
      },
      "adventure": {
        "title": "모험형 – 짜릿한 액티비티 여행자",
        "emoji": "🧭",
        "desc": "새로운 도전과 짜릿한 경험을 여행의 목적으로 삼는 사람이에요. 몸으로 부딪히며 얻는 생생한 추억 덕분에 여행 하나하나가 특별한 이야기가 돼요. 다만 가끔은 아무것도 안 하고 가만히 쉬는 시간도 일정에 넣어보세요."
      }
    },
    "intro": "짐을 싸는 순간부터 이미 여행은 시작돼요. 8가지 질문으로 여행지에서 드러나는 나의 진짜 스타일을 확인해보세요.",
    "insight": "여행 스타일은 함께 가는 사람과 비교해보면 더 재미있어요. 서로 다른 스타일이 만났을 때 어디서 부딪히고 어디서 잘 맞춰갈 수 있는지 미리 알아두면, 다음 여행이 훨씬 편해질 거예요."
  },
  {
    "id": "nunchi",
    "tag": "눈치",
    "title": "나의 눈치력 테스트",
    "emoji": "📡",
    "tagline": "그 상황, 너는 눈치챘어? 8가지 질문으로 알아보는 나의 눈치력",
    "type": "score",
    "compare": true,
    "questions": [
      {
        "text": "회의(수업) 중 갑자기 분위기가 싸늘해졌을 때 나는?",
        "options": [
          {
            "text": "바로 알아채고 자연스럽게 화제를 돌린다",
            "value": 1
          },
          {
            "text": "뭔가 이상한 건 알지만 가만히 있는다",
            "value": 2
          },
          {
            "text": "다들 조용해지고 나서야 뒤늦게 깨닫는다",
            "value": 3
          },
          {
            "text": "전혀 눈치채지 못하고 하던 얘기를 계속한다",
            "value": 4
          }
        ]
      },
      {
        "text": "친구가 말끝을 흐리며 '아니 그냥... 됐어'라고 하면?",
        "options": [
          {
            "text": "서운한 게 있다는 걸 바로 알아챈다",
            "value": 1
          },
          {
            "text": "신경 쓰이지만 먼저 묻기는 망설여진다",
            "value": 2
          },
          {
            "text": "진짜 괜찮은 줄 알고 그냥 넘어간다",
            "value": 3
          },
          {
            "text": "무슨 말인지도 모르고 화제를 바꾼다",
            "value": 4
          }
        ]
      },
      {
        "text": "모임에서 한 사람이 분위기와 상관없이 혼자 계속 말할 때?",
        "options": [
          {
            "text": "자연스럽게 다른 주제나 사람에게 대화를 넘긴다",
            "value": 1
          },
          {
            "text": "슬슬 지루해지는 걸 느끼지만 그냥 듣는다",
            "value": 2
          },
          {
            "text": "다른 사람들 표정이 굳은 뒤에야 알아챈다",
            "value": 3
          },
          {
            "text": "전혀 못 느끼고 계속 맞장구친다",
            "value": 4
          }
        ]
      },
      {
        "text": "상사(선배)가 평소와 다르게 말이 없고 표정이 굳어 있으면?",
        "options": [
          {
            "text": "바로 눈치채고 조심스럽게 행동한다",
            "value": 1
          },
          {
            "text": "뭔가 있나 싶지만 평소처럼 행동한다",
            "value": 2
          },
          {
            "text": "나중에 다른 사람이 알려줘서야 안다",
            "value": 3
          },
          {
            "text": "전혀 눈치채지 못한다",
            "value": 4
          }
        ]
      },
      {
        "text": "단체 채팅방에서 내 메시지에만 한참 반응이 없을 때?",
        "options": [
          {
            "text": "타이밍이 안 좋았나보다 하고 자연스럽게 넘긴다",
            "value": 1
          },
          {
            "text": "괜히 신경 쓰여서 한 번 더 들여다본다",
            "value": 2
          },
          {
            "text": "왜 답이 없지 싶어 계속 생각난다",
            "value": 3
          },
          {
            "text": "신경도 안 쓰고 계속 메시지를 보낸다",
            "value": 4
          }
        ]
      },
      {
        "text": "식당 직원이 바빠 보이는데 주문한 음식이 늦게 나올 때?",
        "options": [
          {
            "text": "바쁜 상황을 알아채고 느긋하게 기다린다",
            "value": 1
          },
          {
            "text": "신경은 쓰이지만 별다른 행동은 안 한다",
            "value": 2
          },
          {
            "text": "그냥 많이 늦는다고만 생각한다",
            "value": 3
          },
          {
            "text": "상황은 신경 쓰지 않고 빨리 달라고 재촉한다",
            "value": 4
          }
        ]
      },
      {
        "text": "연인(친구)의 대답이 평소보다 짧고 톤이 가라앉아 있으면?",
        "options": [
          {
            "text": "바로 무슨 일 있냐고 물어본다",
            "value": 1
          },
          {
            "text": "신경 쓰이지만 먼저 말 걸진 않는다",
            "value": 2
          },
          {
            "text": "시간이 좀 지나서야 이상하다고 느낀다",
            "value": 3
          },
          {
            "text": "평소와 다르다는 걸 전혀 못 느낀다",
            "value": 4
          }
        ]
      },
      {
        "text": "내가 한 말에 상대방 표정이 살짝 굳었을 때?",
        "options": [
          {
            "text": "바로 알아채고 다음 말을 조심스럽게 고른다",
            "value": 1
          },
          {
            "text": "뭔가 이상함을 느끼지만 그냥 넘어간다",
            "value": 2
          },
          {
            "text": "한참 지나서야 '아까 그 말 때문인가' 싶다",
            "value": 3
          },
          {
            "text": "전혀 눈치채지 못하고 계속 같은 식으로 말한다",
            "value": 4
          }
        ]
      }
    ],
    "scoreRanges": [
      {
        "min": 8,
        "max": 14,
        "title": "눈치 만렙 – 분위기 읽기의 고수",
        "emoji": "📡",
        "desc": "당신은 미세한 표정 변화나 말투만으로도 상황을 바로 읽어내는 사람이에요. 그 덕분에 주변 사람들은 당신과 있으면 편안하다고 느끼고, 갈등이 커지기 전에 먼저 분위기를 풀어주는 역할을 하죠. 다만 늘 남을 살피느라 정작 내 감정은 뒤로 미루기 쉬우니, 가끔은 내 기분부터 먼저 들여다보는 시간도 챙겨보세요."
      },
      {
        "min": 15,
        "max": 20,
        "title": "센스 있는 관찰자형 – 알아채는 눈치파",
        "emoji": "👀",
        "desc": "분위기나 신호를 꽤 잘 알아채는 편이지만, 알아챈 걸 바로 행동으로 옮기기보다 한 박자 쉬었다 움직이는 타입이에요. 신중한 성격 덕분에 실수는 적지만, 망설이는 사이에 타이밍을 놓칠 때도 있어요. 눈치챈 순간 떠오른 첫 느낌을 조금 더 믿고 바로 움직여보세요."
      },
      {
        "min": 21,
        "max": 26,
        "title": "마이페이스형 – 내 할 일에 집중하는 사람",
        "emoji": "🌳",
        "desc": "주변 분위기에 쉽게 휘둘리지 않고 자기 할 일과 리듬에 집중하는 사람이에요. 덕분에 눈치 보느라 지치는 일은 적지만, 가끔은 상대가 보내는 작은 신호를 놓쳐 오해가 생기기도 해요. 대화할 때 상대방의 표정이나 말투를 한 번 더 살펴보는 습관을 들이면 관계가 한결 편해질 거예요."
      },
      {
        "min": 27,
        "max": 32,
        "title": "해맑음 그 자체 – 눈치보다 솔직함이 매력",
        "emoji": "🌞",
        "desc": "복잡한 눈치싸움보다 눈앞의 대화와 순간에 솔직하게 집중하는 사람이에요. 꾸밈없고 편견 없는 태도 덕분에 사람들이 당신 앞에서는 긴장을 풀고 편하게 대하죠. 다만 가끔은 상대의 표정이 평소와 다르진 않은지 한 번 더 살펴보는 여유를 가져보면 더 좋은 관계를 만들 수 있어요."
      }
    ],
    "intro": "눈치가 빠르다는 건 타고난 감각일까요, 경험에서 쌓이는 능력일까요? 8가지 상황으로 지금 나의 눈치력을 점검해보세요.",
    "insight": "눈치가 빠른 사람도 가끔은 남 눈치 그만 보고 쉬어가는 연습이 필요하고, 눈치가 느긋한 사람도 작은 신호 하나만 더 챙기면 관계가 훨씬 편해질 수 있어요. 오늘 하루는 대화 상대의 표정과 말투를 한 번 더 살펴보는 연습을 해보는 것도 좋아요."
  },
  {
    "id": "boundary",
    "tag": "관계",
    "title": "나의 '선 긋기' 유형 테스트",
    "emoji": "🚧",
    "tagline": "인간관계에서 나는 선을 얼마나 잘 긋는 편일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "친구가 부담스러운 부탁을 해올 때 나는?",
        "options": [
          {
            "text": "단호하게 어렵다고 말한다",
            "value": "firm"
          },
          {
            "text": "미안해하며 조심스럽게 거절한다",
            "value": "polite"
          },
          {
            "text": "불편해도 일단 들어준다",
            "value": "open"
          },
          {
            "text": "아예 연락을 피해버린다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "누군가 내 시간이나 공간을 침범하는 것 같으면?",
        "options": [
          {
            "text": "바로 선을 긋고 이야기한다",
            "value": "firm"
          },
          {
            "text": "속으로만 불편해하고 티는 안 낸다",
            "value": "polite"
          },
          {
            "text": "그냥 참고 넘어간다",
            "value": "open"
          },
          {
            "text": "그 사람과 거리를 둬버린다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "회사나 모임에서 내 몫이 아닌 일이 자꾸 넘어오면?",
        "options": [
          {
            "text": "\"이건 제 일이 아니에요\"라고 분명히 말한다",
            "value": "firm"
          },
          {
            "text": "눈치를 보다 결국 떠안는다",
            "value": "polite"
          },
          {
            "text": "거부감 없이 그냥 해준다",
            "value": "open"
          },
          {
            "text": "다음부터 그 사람 부탁은 못 들은 척한다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "가까운 사람이 나의 사생활을 캐물을 때?",
        "options": [
          {
            "text": "\"그건 말하고 싶지 않아\"라고 솔직히 말한다",
            "value": "firm"
          },
          {
            "text": "둘러대며 슬쩍 대답을 피한다",
            "value": "polite"
          },
          {
            "text": "숨기는 것 없이 다 이야기해준다",
            "value": "open"
          },
          {
            "text": "그 질문 자체에 입을 닫아버린다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "원하지 않는 역할(총무, 발표 등)을 맡게 될 분위기면?",
        "options": [
          {
            "text": "미리 못한다고 선을 그어둔다",
            "value": "firm"
          },
          {
            "text": "분위기상 떠밀려 맡게 된다",
            "value": "polite"
          },
          {
            "text": "필요하면 내가 먼저 자원한다",
            "value": "open"
          },
          {
            "text": "그런 자리는 애초에 가지 않는다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "내가 정한 원칙(예: 늦은 연락 안 받기)을 누가 자꾸 어기면?",
        "options": [
          {
            "text": "원칙을 다시 분명히 설명하고 지킨다",
            "value": "firm"
          },
          {
            "text": "한 번은 그냥 넘어가 준다",
            "value": "polite"
          },
          {
            "text": "상황을 보고 유연하게 맞춰준다",
            "value": "open"
          },
          {
            "text": "그 사람과는 조용히 선을 그어버린다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "친한 사람이 선을 넘는 장난이나 말을 할 때?",
        "options": [
          {
            "text": "그 자리에서 바로 기분을 말한다",
            "value": "firm"
          },
          {
            "text": "웃어넘기지만 속으로는 상한다",
            "value": "polite"
          },
          {
            "text": "별일 아니라며 넘긴다",
            "value": "open"
          },
          {
            "text": "이후로 그 사람을 조금씩 멀리한다",
            "value": "wall"
          }
        ]
      },
      {
        "text": "나에게 건강한 관계를 위해 가장 중요한 것은?",
        "options": [
          {
            "text": "서로 지킬 선을 분명히 하는 것",
            "value": "firm"
          },
          {
            "text": "상대가 서운하지 않게 맞춰주는 것",
            "value": "polite"
          },
          {
            "text": "마음을 열고 넓게 품어주는 것",
            "value": "open"
          },
          {
            "text": "애초에 너무 깊이 얽히지 않는 것",
            "value": "wall"
          }
        ]
      }
    ],
    "categories": {
      "firm": {
        "title": "단단한 선긋기형",
        "emoji": "🧭",
        "desc": "나에게 편안한 것과 불편한 것을 스스로 잘 알고, 필요할 땐 솔직하게 표현할 수 있는 사람이에요. 그 덕분에 관계에서 쉽게 지치지 않고 나를 잘 지켜내는 편이죠. 가끔은 상대의 상황도 한 번 더 헤아려주는 유연함을 더하면, 관계가 한층 편안해질 거예요."
      },
      "polite": {
        "title": "조심스러운 선긋기형",
        "emoji": "🫣",
        "desc": "상대를 배려하는 마음이 커서 거절이 쉽지 않지만, 마음속에는 분명한 자신의 기준을 가지고 있는 사람이에요. 그 배려심 덕분에 주변 사람들이 나와 있을 때 편안함을 느껴요. 서운한 마음을 조금씩 말로 꺼내는 연습을 더하면, 혼자 쌓아두는 마음의 짐이 가벼워질 거예요."
      },
      "open": {
        "title": "마음이 넓은 오픈형",
        "emoji": "🤗",
        "desc": "사람들에게 쉽게 마음을 열고 넓게 품어주는 따뜻한 사람이에요. 그 포용력 덕분에 관계가 편안하고 깊어지기 쉽죠. 나를 위한 작은 선 하나쯤은 남겨두는 연습을 더하면, 그 따뜻함을 지치지 않고 오래 지켜갈 수 있을 거예요."
      },
      "wall": {
        "title": "거리두기형",
        "emoji": "🧱",
        "desc": "불편한 상황에서 한 발 물러나며 스스로를 지키는 데 익숙한 사람이에요. 그 덕분에 쉽게 상처받지 않고 평온을 유지할 수 있어요. 믿을 수 있는 사람에게 작은 선부터 조금씩 보여주는 연습을 하면, 더 깊은 관계도 편하게 누릴 수 있을 거예요."
      }
    },
    "intro": "거절도 어렵고, 선 넘는 사람에게 할 말도 떠오르지 않을 때가 있죠. 8가지 질문으로 인간관계 속에서 나는 선을 어떻게 긋는 사람인지 확인해보세요.",
    "insight": "선을 긋는다는 건 상대를 밀어내는 게 아니라, 나와 관계를 모두 지키기 위한 방법이에요. 결과를 본 뒤에는 이번 주, 누구에게 어떤 선 하나를 분명히 해보고 싶은지 떠올려보세요."
  },
  {
    "id": "spendingtype",
    "tag": "소비심리",
    "title": "나의 소비 유형 테스트",
    "emoji": "💸",
    "tagline": "돈 앞에서 진짜 드러나는 나의 소비 스타일은?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "월급(용돈)이 들어오면 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "평소 갖고 싶던 걸 바로 지른다",
            "value": "flex"
          },
          {
            "text": "일부를 적금이나 저축 통장에 넣는다",
            "value": "thrifty"
          },
          {
            "text": "예산을 짜고 항목별로 나눠둔다",
            "value": "planner"
          },
          {
            "text": "의미 있는 곳에 쓸 돈부터 떼어둔다",
            "value": "value"
          }
        ]
      },
      {
        "text": "쇼핑할 때 나의 모습은?",
        "options": [
          {
            "text": "마음에 들면 가격은 크게 안 본다",
            "value": "flex"
          },
          {
            "text": "할인·적립을 꼼꼼히 비교한다",
            "value": "thrifty"
          },
          {
            "text": "미리 정한 목록 안에서만 산다",
            "value": "planner"
          },
          {
            "text": "오래 쓸 수 있는지, 가치가 있는지 따진다",
            "value": "value"
          }
        ]
      },
      {
        "text": "친구들과 모임에서 돈 쓰는 스타일은?",
        "options": [
          {
            "text": "분위기 내려고 먼저 계산하는 편",
            "value": "flex"
          },
          {
            "text": "더치페이로 깔끔하게 나눈다",
            "value": "thrifty"
          },
          {
            "text": "미리 예산을 정해두고 그 안에서 쓴다",
            "value": "planner"
          },
          {
            "text": "좋은 경험이면 아끼지 않고 쓴다",
            "value": "value"
          }
        ]
      },
      {
        "text": "갖고 싶은 물건이 생기면?",
        "options": [
          {
            "text": "바로 결제한다",
            "value": "flex"
          },
          {
            "text": "더 싸게 살 방법부터 찾아본다",
            "value": "thrifty"
          },
          {
            "text": "예산에 맞는지 계산해본 뒤 산다",
            "value": "planner"
          },
          {
            "text": "정말 필요한지, 오래 쓸지부터 고민한다",
            "value": "value"
          }
        ]
      },
      {
        "text": "카드값(지출) 내역을 확인할 때 드는 생각은?",
        "options": [
          {
            "text": "그만큼 즐겼으니 후회는 없다",
            "value": "flex"
          },
          {
            "text": "더 줄일 데가 없는지 점검한다",
            "value": "thrifty"
          },
          {
            "text": "예산대로 썼는지 맞춰본다",
            "value": "planner"
          },
          {
            "text": "값어치 있게 썼는지 돌아본다",
            "value": "value"
          }
        ]
      },
      {
        "text": "여행 갈 때 소비 스타일은?",
        "options": [
          {
            "text": "숙소·맛집 등 좋은 건 아낌없이 쓴다",
            "value": "flex"
          },
          {
            "text": "최대한 저렴하게 다니는 방법을 찾는다",
            "value": "thrifty"
          },
          {
            "text": "예산을 미리 짜고 그 안에서만 쓴다",
            "value": "planner"
          },
          {
            "text": "돈보다 그 경험이 주는 의미를 더 본다",
            "value": "value"
          }
        ]
      },
      {
        "text": "주변에서 나를 보고 하는 말은?",
        "options": [
          {
            "text": "화려하고 통이 크다",
            "value": "flex"
          },
          {
            "text": "알뜰하고 계산이 빠르다",
            "value": "thrifty"
          },
          {
            "text": "돈 관리가 철저하다",
            "value": "planner"
          },
          {
            "text": "자기만의 소비 기준이 확실하다",
            "value": "value"
          }
        ]
      },
      {
        "text": "돈에 대해 가장 중요하게 생각하는 가치는?",
        "options": [
          {
            "text": "지금 이 순간의 만족",
            "value": "flex"
          },
          {
            "text": "안 쓰고 모으는 안정감",
            "value": "thrifty"
          },
          {
            "text": "계획대로 흘러가는 통제감",
            "value": "planner"
          },
          {
            "text": "내 삶에 의미 있는 곳에 쓰는 것",
            "value": "value"
          }
        ]
      }
    ],
    "categories": {
      "flex": {
        "title": "플렉스형 – 지금을 즐기는 소비파",
        "emoji": "💳",
        "desc": "지금 이 순간의 만족을 소중히 여기는 사람이에요. 나에게 주는 보상을 아끼지 않는 마음 덕분에 일상에 생기와 즐거움이 끊이지 않죠. 가끔은 통장을 한 번씩 들여다보며 다음 달의 나에게도 여유를 남겨주는 습관을 만들어보세요."
      },
      "thrifty": {
        "title": "알짜형 – 똑똑하게 아끼는 절약파",
        "emoji": "🐷",
        "desc": "작은 돈도 허투루 쓰지 않는 알짜 소비자예요. 할인과 적립을 꼼꼼히 챙기는 습관 덕분에 또래보다 안정적인 자산을 모아가고 있을 가능성이 높아요. 가끔은 너무 아끼기만 하지 말고, 나를 위한 작은 소비에도 마음을 열어보세요."
      },
      "planner": {
        "title": "계획형 – 예산을 지키는 신중파",
        "emoji": "📊",
        "desc": "지출 하나하나에 분명한 기준과 계획이 있는 사람이에요. 예산을 세우고 그 안에서 움직이는 습관 덕분에 큰 돈 걱정 없이 안정적인 생활을 이어갈 수 있어요. 다만 계획에 없던 작은 즐거움에도 가끔은 여유를 허락해주세요."
      },
      "value": {
        "title": "가치소비형 – 의미에 투자하는 소비파",
        "emoji": "🌱",
        "desc": "가격보다 의미와 가치를 먼저 보는 사람이에요. 남들 눈엔 사소해 보여도 나에게 중요한 것이라면 아끼지 않는 확고한 기준이 있어서 후회 없는 소비를 하는 편이에요. 가끔은 그 기준을 가계부에도 적용해 전체 지출의 흐름도 함께 점검해보세요."
      }
    },
    "intro": "지갑을 여는 순간, 사람마다 전혀 다른 얼굴이 드러나요. 8가지 질문으로 돈 앞에서 진짜 내 모습이 어떤 소비 유형인지 확인해보세요.",
    "insight": "소비 유형은 수입이나 상황에 따라 조금씩 달라지기도 해요. 지금 결과를 하나의 참고로 삼아, 내 소비에서 지키고 싶은 부분과 조금 바꿔보고 싶은 부분을 함께 생각해보는 시간을 가져보세요."
  },
  {
    "id": "sayno",
    "tag": "관계심리",
    "title": "나의 거절 스타일 테스트",
    "emoji": "✋",
    "tagline": "부탁 앞에서 나는 Yes와 No, 어느 쪽에 더 가까울까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "친구가 갑자기 '지금 좀 도와줄 수 있어?'라고 물으면?",
        "options": [
          {
            "text": "바로 가서 도와준다",
            "value": "yes"
          },
          {
            "text": "일단 무슨 일인지 물어보고 고민한다",
            "value": "think"
          },
          {
            "text": "내 상황을 보고 가능하면 돕는다",
            "value": "balance"
          },
          {
            "text": "지금은 안 된다고 바로 말한다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "하기 싫은 부탁을 받았을 때 가장 먼저 드는 생각은?",
        "options": [
          {
            "text": "그래도 거절하면 상대가 서운하겠지",
            "value": "yes"
          },
          {
            "text": "어떻게 말해야 덜 서운할까 고민된다",
            "value": "think"
          },
          {
            "text": "내가 할 수 있는 선까지만 말해야겠다",
            "value": "balance"
          },
          {
            "text": "못 하는 건 못 한다고 말하면 된다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "주말 약속이 있는데 상사(선배)가 갑자기 일을 부탁하면?",
        "options": [
          {
            "text": "약속을 미루고 일단 해준다",
            "value": "yes"
          },
          {
            "text": "곤란하지만 바로 말 못 하고 눈치를 본다",
            "value": "think"
          },
          {
            "text": "일부만 처리해주고 나머지는 다음에 하겠다고 한다",
            "value": "balance"
          },
          {
            "text": "선약이 있어서 어렵다고 바로 말한다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "누군가에게 거절의 말을 전한 후 내 마음은?",
        "options": [
          {
            "text": "거절한 게 계속 마음에 걸린다",
            "value": "yes"
          },
          {
            "text": "상대가 어떻게 받아들였을지 계속 신경 쓰인다",
            "value": "think"
          },
          {
            "text": "필요한 선택이었으니 금방 잊는다",
            "value": "balance"
          },
          {
            "text": "할 말을 했으니 개운하다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "돈을 빌려달라는 부탁을 받으면?",
        "options": [
          {
            "text": "힘들어도 빌려주는 쪽을 택한다",
            "value": "yes"
          },
          {
            "text": "거절하면 관계가 어색해질까 봐 고민한다",
            "value": "think"
          },
          {
            "text": "줄 수 있는 만큼만 선을 정해 돕는다",
            "value": "balance"
          },
          {
            "text": "원칙대로 어렵다고 분명히 말한다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "단체 채팅방에서 내가 원치 않는 일정이 정해지면?",
        "options": [
          {
            "text": "불편해도 맞춰서 참여한다",
            "value": "yes"
          },
          {
            "text": "속으로는 불편하지만 일단 알겠다고 한다",
            "value": "think"
          },
          {
            "text": "내 사정을 짧게 알리고 조율해본다",
            "value": "balance"
          },
          {
            "text": "참석이 어렵다고 바로 의견을 남긴다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "'너라면 괜찮지?'라는 말을 들으면?",
        "options": [
          {
            "text": "기대에 부응하고 싶어서 승낙한다",
            "value": "yes"
          },
          {
            "text": "부담스러워도 티 내지 못한다",
            "value": "think"
          },
          {
            "text": "가능한 부분과 어려운 부분을 나눠 말한다",
            "value": "balance"
          },
          {
            "text": "괜찮지 않으면 괜찮지 않다고 말한다",
            "value": "firm"
          }
        ]
      },
      {
        "text": "거절을 잘하는 사람을 보면 드는 생각은?",
        "options": [
          {
            "text": "나도 저렇게 되고 싶지만 쉽지 않다",
            "value": "yes"
          },
          {
            "text": "부럽지만 나는 눈치가 더 보인다",
            "value": "think"
          },
          {
            "text": "적절한 균형을 아는 사람 같다",
            "value": "balance"
          },
          {
            "text": "나도 비슷하게 분명히 말하는 편이다",
            "value": "firm"
          }
        ]
      }
    ],
    "categories": {
      "yes": {
        "title": "다정한 수용형 – 마음 먼저 주는 사람",
        "emoji": "💛",
        "desc": "상대의 부탁을 들으면 거절보다 돕고 싶은 마음이 먼저 드는 사람이에요. 그 다정함 덕분에 주변 사람들이 편하게 도움을 청하고 믿고 의지하게 되죠. 다만 내 몫까지 다 떠안다 보면 지치기 쉬우니, 가끔은 '지금은 어려울 것 같아'라고 솔직하게 말하는 연습도 해보세요."
      },
      "think": {
        "title": "신중한 눈치형 – 분위기부터 살피는 사람",
        "emoji": "👀",
        "desc": "거절하기 전에 상대 기분과 상황을 먼저 헤아리는 사람이에요. 섬세한 눈치 덕분에 관계에서 큰 마찰이 적지만, 정작 내 생각을 말할 타이밍을 놓쳐 혼자 마음을 끓일 때도 있어요. 생각이 정리되면 하루 안에는 답을 전해보는 습관을 들여보세요."
      },
      "balance": {
        "title": "균형 잡힌 조율형 – 상황 따라 현명하게",
        "emoji": "⚖️",
        "desc": "상황과 관계에 따라 수락과 거절을 유연하게 오가는 사람이에요. 무조건 다 받아주지도, 무조건 밀어내지도 않는 균형감이 관계를 오래, 건강하게 유지하는 힘이 돼요. 가끔 애매한 순간엔 조금 더 빠르게 결정해도 괜찮아요."
      },
      "firm": {
        "title": "단호한 직진형 – 분명하게 말하는 사람",
        "emoji": "🙅",
        "desc": "내 시간과 마음의 한계를 분명히 알고 그걸 말로 표현할 줄 아는 사람이에요. 덕분에 불필요한 부탁에 끌려다니지 않고 내 할 일에 집중할 수 있어요. 가까운 사이에는 거절 뒤에 짧게라도 이유를 덧붙이면 오해를 줄일 수 있어요."
      }
    },
    "intro": "거절 한마디가 유난히 어려운 순간들이 있죠. 8가지 상황으로 지금 내가 부탁 앞에서 어떤 선택을 하는 사람인지 알아봐요.",
    "insight": "거절을 잘 못한다고 해서 성격이 약한 게 아니라, 관계를 소중히 여기는 마음이 큰 것일 수도 있어요. 중요한 건 모든 부탁에 Yes 하지 않아도 관계가 무너지지 않는다는 걸 몸으로 익혀가는 과정이에요."
  },
  {
    "id": "travelstyle-2",
    "tag": "여행",
    "title": "나의 여행 스타일 테스트",
    "emoji": "✈️",
    "tagline": "떠날 때 진짜 나의 모습은 어떤 여행자일까요?",
    "type": "category",
    "compare": true,
    "questions": [
      {
        "text": "여행 계획을 세울 때 나는?",
        "options": [
          {
            "text": "시간표까지 꼼꼼히 짜둔다",
            "value": "plan"
          },
          {
            "text": "그 자리에서 즉흥적으로 정한다",
            "value": "adventure"
          },
          {
            "text": "최소한의 일정만 알아둔다",
            "value": "relax"
          },
          {
            "text": "가보고 싶은 장소 위주로 느슨하게 짠다",
            "value": "culture"
          }
        ]
      },
      {
        "text": "여행지에 도착해서 가장 먼저 하는 일은?",
        "options": [
          {
            "text": "숙소에서 짐 정리하고 일정을 체크한다",
            "value": "plan"
          },
          {
            "text": "밖으로 나가 돌아다니며 탐색한다",
            "value": "adventure"
          },
          {
            "text": "숙소에서 푹 쉬며 여유를 즐긴다",
            "value": "relax"
          },
          {
            "text": "근처 맛집이나 카페부터 찾아본다",
            "value": "culture"
          }
        ]
      },
      {
        "text": "낯선 길에서 길을 잃으면?",
        "options": [
          {
            "text": "미리 저장한 지도로 바로 해결한다",
            "value": "plan"
          },
          {
            "text": "오히려 새로운 걸 발견한 기분이다",
            "value": "adventure"
          },
          {
            "text": "아무 데서나 앉아서 쉬었다 간다",
            "value": "relax"
          },
          {
            "text": "지나가는 사람들과 풍경을 구경한다",
            "value": "culture"
          }
        ]
      },
      {
        "text": "여행 중 가장 기대되는 순간은?",
        "options": [
          {
            "text": "계획한 일정을 하나씩 완수할 때",
            "value": "plan"
          },
          {
            "text": "예상 못한 새로운 경험을 할 때",
            "value": "adventure"
          },
          {
            "text": "아무것도 안 하고 멍하니 쉴 때",
            "value": "relax"
          },
          {
            "text": "현지 문화와 사람을 느낄 때",
            "value": "culture"
          }
        ]
      },
      {
        "text": "여행 짐을 쌀 때 나는?",
        "options": [
          {
            "text": "체크리스트대로 빠짐없이 챙긴다",
            "value": "plan"
          },
          {
            "text": "가서 필요한 거 사면 된다는 마음으로 가볍게 챙긴다",
            "value": "adventure"
          },
          {
            "text": "편한 옷과 쉴 준비물 위주로 챙긴다",
            "value": "relax"
          },
          {
            "text": "사진 찍을 장비나 기록할 노트를 챙긴다",
            "value": "culture"
          }
        ]
      },
      {
        "text": "동행이 갑자기 일정을 바꾸자고 하면?",
        "options": [
          {
            "text": "계획이 틀어져서 조금 불편하다",
            "value": "plan"
          },
          {
            "text": "재밌겠다며 바로 따라간다",
            "value": "adventure"
          },
          {
            "text": "어느 쪽이든 쉴 수 있으면 상관없다",
            "value": "relax"
          },
          {
            "text": "새로운 이야기가 생기겠다며 반긴다",
            "value": "culture"
          }
        ]
      },
      {
        "text": "여행에서 돌아온 후 가장 남는 것은?",
        "options": [
          {
            "text": "알차게 다 돌아봤다는 성취감",
            "value": "plan"
          },
          {
            "text": "예상 밖의 짜릿했던 순간들",
            "value": "adventure"
          },
          {
            "text": "몸과 마음이 충전된 느낌",
            "value": "relax"
          },
          {
            "text": "사진과 기록으로 남은 추억들",
            "value": "culture"
          }
        ]
      },
      {
        "text": "다음 여행지를 고를 때 가장 중요한 기준은?",
        "options": [
          {
            "text": "효율적으로 많이 볼 수 있는 곳",
            "value": "plan"
          },
          {
            "text": "아직 안 가본 새로운 곳",
            "value": "adventure"
          },
          {
            "text": "편히 쉴 수 있는 곳",
            "value": "relax"
          },
          {
            "text": "특별한 경험과 이야기가 있는 곳",
            "value": "culture"
          }
        ]
      }
    ],
    "categories": {
      "plan": {
        "title": "계획형 여행자 – 완벽한 일정표 마스터",
        "emoji": "🗺️",
        "desc": "여행 전부터 이미 설레는 사람이에요. 꼼꼼하게 짜둔 일정 덕분에 시간 낭비 없이 알차게 여행지를 누릴 수 있어요. 가끔은 일정표를 잠시 내려놓고 예상치 못한 순간에 몸을 맡겨보는 것도 여행의 또 다른 재미가 될 거예요."
      },
      "adventure": {
        "title": "모험형 여행자 – 즉흥 탐험가",
        "emoji": "🧭",
        "desc": "정해진 길보다 낯선 골목에서 더 반짝이는 사람이에요. 계획에 없던 상황도 웃으며 즐길 줄 아는 유연함이 여행을 특별하게 만들어줘요. 다만 최소한의 안전 정보는 미리 챙겨두면 그 모험이 더 안심되고 오래 기억될 거예요."
      },
      "relax": {
        "title": "힐링형 여행자 – 느긋한 휴양러",
        "emoji": "🌴",
        "desc": "여행의 목적을 '쉼'에 두는 사람이에요. 바쁘게 돌아다니지 않아도 그 시간 자체로 충분히 재충전되는 자신만의 리듬을 알고 있어요. 가끔 숙소 밖으로 나가 가벼운 산책이라도 해보면 쉼의 만족감이 한층 더 커질 거예요."
      },
      "culture": {
        "title": "감성형 여행자 – 경험 수집가",
        "emoji": "📸",
        "desc": "눈앞의 장면과 분위기를 마음에 담아두는 사람이에요. 유명한 명소보다 그 순간의 느낌과 사람들과의 교감을 더 소중히 여기는 섬세함이 있어요. 기록만큼 그 순간을 있는 그대로 느끼는 시간도 잊지 말고 가져보세요."
      }
    },
    "intro": "떠나는 방식만 봐도 그 사람의 성향이 보인다고 하죠. 8가지 상황으로 당신이 어떤 여행자인지 확인해보세요.",
    "insight": "여행 스타일은 함께 가는 사람, 그날의 기분에 따라 조금씩 달라지기도 해요. 동행과 함께 테스트해보고 서로 다른 스타일이 만났을 때 어떻게 맞춰가면 좋을지 미리 이야기해보는 것도 좋은 방법이에요."
  }
];
