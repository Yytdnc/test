/* 커플/친구 비교하기: 답변을 Supabase에 저장해서, 상대방이 나중에 답하거나
 * 다른 기기/시간에 다시 열어도 "결과를 찾을 수 없어요"가 뜨지 않게 한다. */
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

  function genCode() {
    return (
      Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 6)
    );
  }

  // 비교 세션 생성: 내 답변을 저장하고 공유용 코드를 돌려준다. 실패 시 null.
  window.mpCreateCompareSession = function (testId, answers) {
    const sb = getClient();
    if (!sb) return Promise.resolve(null);
    const code = genCode();
    return Promise.resolve(
      sb.from("compare_sessions").insert({
        code,
        test_id: testId,
        initiator_answers: answers,
      })
    )
      .then(({ error }) => (error ? null : code))
      .catch(() => null);
  };

  // 상대방 답변을 세션에 채워 넣는다 (이미 채워져 있으면 정책상 거부됨). 성공 여부 반환.
  window.mpSubmitPartnerAnswers = function (code, answers) {
    const sb = getClient();
    if (!sb) return Promise.resolve(false);
    return Promise.resolve(
      sb.from("compare_sessions").update({ partner_answers: answers }).eq("code", code)
    )
      .then(({ error }) => !error)
      .catch(() => false);
  };

  // 세션 조회: { testId, initiatorAnswers, partnerAnswers } 또는 null (없거나 실패)
  window.mpFetchCompareSession = function (code) {
    const sb = getClient();
    if (!sb) return Promise.resolve(null);
    return Promise.resolve(
      sb
        .from("compare_sessions")
        .select("test_id, initiator_answers, partner_answers")
        .eq("code", code)
        .maybeSingle()
    )
      .then(({ data, error }) => {
        if (error || !data) return null;
        return {
          testId: data.test_id,
          initiatorAnswers: data.initiator_answers,
          partnerAnswers: data.partner_answers,
        };
      })
      .catch(() => null);
  };
})();
