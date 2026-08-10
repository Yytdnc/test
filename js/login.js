/* login.html: 이메일/비밀번호 로그인 + 구글/카카오 소셜 로그인 */
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
  const statusEl = document.getElementById("login-status");

  function setStatus(msg, type) {
    statusEl.textContent = msg;
    statusEl.className = "status-msg " + (type || "info");
  }

  function communityUrl() {
    return new URL("community.html", location.href).href;
  }

  sb.auth.getUser().then(({ data }) => {
    if (data.user) location.href = communityUrl();
  });

  document.getElementById("login-submit-btn").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    if (!email || !password) {
      setStatus("이메일과 비밀번호를 입력해주세요.", "err");
      return;
    }
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus(error.message, "err");
    } else {
      location.href = communityUrl();
    }
  });

  document.getElementById("login-password").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("login-submit-btn").click();
  });

  document.getElementById("google-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: communityUrl() } });
  });

  document.getElementById("kakao-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "kakao", options: { redirectTo: communityUrl() } });
  });
})();
