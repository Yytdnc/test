/* admin.html: 간단한 로그인 게이트
 * 주의: 정적 사이트라 이 로그인은 진짜 보안이 아니라 단순 접근 차단용이에요.
 * 소스코드를 보면 아이디/비밀번호가 그대로 드러나니, 민감한 데이터는 여기 두지 마세요. */
(function () {
  const ADMIN_ID = "admin";
  const ADMIN_PW = "test";
  const AUTH_KEY = "mindpick_admin_auth";

  const loginPanel = document.getElementById("login-panel");
  const adminPanel = document.getElementById("admin-panel");
  const idInput = document.getElementById("login-id");
  const pwInput = document.getElementById("login-pw");
  const loginBtn = document.getElementById("login-btn");
  const loginStatus = document.getElementById("login-status");
  const logoutBtn = document.getElementById("logout-btn");

  function showAdmin() {
    loginPanel.style.display = "none";
    adminPanel.style.display = "block";
  }

  function showLogin() {
    loginPanel.style.display = "block";
    adminPanel.style.display = "none";
  }

  function tryLogin() {
    if (idInput.value === ADMIN_ID && pwInput.value === ADMIN_PW) {
      sessionStorage.setItem(AUTH_KEY, "1");
      loginStatus.className = "status-msg";
      showAdmin();
    } else {
      loginStatus.textContent = "아이디 또는 비밀번호가 올바르지 않아요.";
      loginStatus.className = "status-msg err";
    }
  }

  loginBtn.addEventListener("click", tryLogin);
  pwInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryLogin();
  });

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem(AUTH_KEY);
      idInput.value = "";
      pwInput.value = "";
      showLogin();
    });
  }

  if (sessionStorage.getItem(AUTH_KEY) === "1") {
    showAdmin();
  }
})();
