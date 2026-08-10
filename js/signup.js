/* signup.html: 이메일/비밀번호 회원가입 + 구글/카카오 소셜 로그인 */
(function () {
  const configWarning = document.getElementById("config-warning");
  const authCard = document.getElementById("auth-card");

  const isConfigured =
    typeof SUPABASE_URL === "string" &&
    typeof SUPABASE_ANON_KEY === "string" &&
    !SUPABASE_URL.startsWith("YOUR_") &&
    !SUPABASE_ANON_KEY.startsWith("YOUR_");

  if (!isConfigured) {
    if (configWarning) configWarning.style.display = "block";
    if (authCard) authCard.style.display = "none";
    return;
  }

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const statusEl = document.getElementById("signup-status");

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "status-msg " + (type || "info");
  }

  function communityUrl() {
    const next = new URLSearchParams(location.search).get("next");
    return new URL("community.html" + (next || ""), location.href).href;
  }

  const nextParam = new URLSearchParams(location.search).get("next");
  if (nextParam) {
    const switchLink = document.querySelector(".auth-switch a");
    if (switchLink) switchLink.href = "login.html?next=" + encodeURIComponent(nextParam);
  }

  sb.auth.getUser().then(({ data }) => {
    if (data.user) location.href = communityUrl();
  });

  document.getElementById("signup-submit-btn").addEventListener("click", async () => {
    const nickname = document.getElementById("signup-nickname").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    if (!nickname || !email || password.length < 6) {
      setStatus("닉네임, 이메일, 6자 이상 비밀번호를 모두 입력해주세요.", "err");
      return;
    }
    const { data, error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { nickname } },
    });
    if (error) {
      setStatus(error.message, "err");
      return;
    }
    if (data.session) {
      location.href = communityUrl();
    } else {
      setStatus("가입 완료! 이메일 인증이 필요할 수 있어요. 메일함을 확인한 뒤 로그인해주세요.", "ok");
    }
  });

  document.getElementById("google-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: communityUrl() } });
  });

  document.getElementById("kakao-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "kakao", options: { redirectTo: communityUrl() } });
  });
})();
