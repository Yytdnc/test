/* 사이트에 공개하는 "핵심" 테스트 목록 (단일 출처)
 *
 * 애드센스 반복 거절의 원인은 한 템플릿에서 명사만 바꿔 찍어낸 양산형 퀴즈였다.
 * 2026-09-06 에 48개 -> 16개로 줄이고 이 16개만 사람 손으로 다시 썼다.
 * 여기 없는 id 는 scripts/prune-scaled-quizzes.js 가 js/tests-data-archive.js 로
 * 옮기고, quiz-<id>.html 은 scripts/build-quiz-pages.js 가 지운다.
 *
 * 새 테스트를 정말 공개하려면: 양산형 문구를 벗겨 직접 쓴 뒤 여기에 id 를 추가한다.
 * 이 목록에 추가하지 않는 한 어떤 경로로 들어와도 사이트에 반영되지 않는다.
 */
const CORE_TEST_IDS = [
  "love",
  "attachment",
  "burnout",
  "mbti",
  "balance-mala",
  "socialbattery",
  "conflict",
  "defense",
  "perfectionist",
  "chronotype",
  "leadership",
  "lovelanguage",
  "selfesteem",
  "learningstyle",
  "humor",
  "procrastination",
];

module.exports = { CORE_TEST_IDS };
