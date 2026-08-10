/* TESTS(기본 제공) + CUSTOM_TESTS(admin.html에서 추가) 를 합쳐서 사용 */
const ALL_TESTS = TESTS.concat(
  typeof CUSTOM_TESTS !== "undefined" ? CUSTOM_TESTS : []
);
