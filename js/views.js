/* 테스트 조회수 기록/조회 공용 유틸 (Supabase test_views 테이블 사용) */
(function () {
  function isConfigured() {
    return (
      typeof SUPABASE_URL === "string" &&
      typeof SUPABASE_ANON_KEY === "string" &&
      !SUPABASE_URL.startsWith("YOUR_") &&
      !SUPABASE_ANON_KEY.startsWith("YOUR_") &&
      typeof window.supabase !== "undefined"
    );
  }

  function getClient() {
    if (!isConfigured()) return null;
    if (!window._mpSupabase) {
      window._mpSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
    return window._mpSupabase;
  }

  // 특정 테스트의 조회수를 1 증가시킨다 (quiz.html 진입 시 호출)
  window.mpRecordTestView = function (testId) {
    const sb = getClient();
    if (!sb || !testId) return;
    Promise.resolve(sb.rpc("increment_test_view", { p_test_id: testId })).catch(() => {});
  };

  // { [testId]: views } 형태로 전체 조회수를 가져온다. 실패 시 빈 객체.
  window.mpFetchTestViews = function () {
    const sb = getClient();
    if (!sb) return Promise.resolve({});
    return Promise.resolve(sb.from("test_views").select("test_id, views"))
      .then(({ data, error }) => {
        if (error || !data) return {};
        const map = {};
        data.forEach((row) => {
          map[row.test_id] = row.views;
        });
        return map;
      })
      .catch(() => ({}));
  };
})();
