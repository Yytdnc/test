/* community.html: Supabase 기반 간단 커뮤니티 (회원가입/로그인/글쓰기) */
(function () {
  const configWarning = document.getElementById("config-warning");
  const authBox = document.getElementById("auth-box");

  const isConfigured =
    typeof SUPABASE_URL === "string" &&
    typeof SUPABASE_ANON_KEY === "string" &&
    !SUPABASE_URL.startsWith("YOUR_") &&
    !SUPABASE_ANON_KEY.startsWith("YOUR_");

  if (!isConfigured) {
    if (configWarning) configWarning.style.display = "block";
    return;
  }

  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  if (authBox) authBox.style.display = "block";

  const loggedOutEl = document.getElementById("auth-logged-out");
  const loggedInEl = document.getElementById("auth-logged-in");
  const nicknameEl = document.getElementById("auth-nickname");
  const writeBox = document.getElementById("write-box");
  const authStatus = document.getElementById("auth-status");
  const postStatus = document.getElementById("post-status");

  let currentUser = null;

  // 로그인/회원가입 탭 전환
  document.querySelectorAll(".auth-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".auth-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      document.getElementById("tab-login").style.display = tab === "login" ? "block" : "none";
      document.getElementById("tab-signup").style.display = tab === "signup" ? "block" : "none";
      authStatus.className = "status-msg";
    });
  });

  function setAuthStatus(msg, type) {
    authStatus.textContent = msg;
    authStatus.className = "status-msg " + (type || "info");
  }

  function nicknameOf(user) {
    if (!user) return "";
    return (user.user_metadata && (user.user_metadata.nickname || user.user_metadata.name)) || user.email;
  }

  function renderAuthState(user) {
    currentUser = user;
    if (user) {
      loggedOutEl.style.display = "none";
      loggedInEl.style.display = "block";
      nicknameEl.textContent = nicknameOf(user);
      writeBox.style.display = "block";
    } else {
      loggedOutEl.style.display = "block";
      loggedInEl.style.display = "none";
      writeBox.style.display = "none";
    }
    renderPosts();
  }

  sb.auth.getUser().then(({ data }) => renderAuthState(data.user || null));
  sb.auth.onAuthStateChange((_event, session) => {
    renderAuthState(session ? session.user : null);
  });

  document.getElementById("signup-submit-btn").addEventListener("click", async () => {
    const nickname = document.getElementById("signup-nickname").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    if (!nickname || !email || password.length < 6) {
      setAuthStatus("닉네임, 이메일, 6자 이상 비밀번호를 모두 입력해주세요.", "err");
      return;
    }
    const { error } = await sb.auth.signUp({
      email,
      password,
      options: { data: { nickname } },
    });
    if (error) {
      setAuthStatus(error.message, "err");
    } else {
      setAuthStatus("가입 완료! 이메일 인증이 필요할 수 있어요. 인증 후 로그인해주세요.", "ok");
    }
  });

  document.getElementById("login-submit-btn").addEventListener("click", async () => {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) setAuthStatus(error.message, "err");
  });

  document.getElementById("google-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "google" });
  });

  document.getElementById("kakao-login-btn").addEventListener("click", () => {
    sb.auth.signInWithOAuth({ provider: "kakao" });
  });

  document.getElementById("logout-btn").addEventListener("click", () => {
    sb.auth.signOut();
  });

  document.getElementById("post-submit-btn").addEventListener("click", async () => {
    if (!currentUser) return;
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
    if (!title || !content) {
      postStatus.textContent = "제목과 내용을 입력해주세요.";
      postStatus.className = "status-msg err";
      return;
    }
    const { error } = await sb.from("posts").insert({
      author_id: currentUser.id,
      author_name: nicknameOf(currentUser),
      title,
      content,
    });
    if (error) {
      postStatus.textContent = error.message;
      postStatus.className = "status-msg err";
    } else {
      document.getElementById("post-title").value = "";
      document.getElementById("post-content").value = "";
      postStatus.className = "status-msg";
      renderPosts();
    }
  });

  async function renderPosts() {
    const listEl = document.getElementById("post-list");
    const emptyEl = document.getElementById("post-empty");
    const { data, error } = await sb
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      listEl.innerHTML = "";
      emptyEl.textContent = "글을 불러오지 못했어요: " + error.message;
      emptyEl.style.display = "block";
      return;
    }

    if (!data || data.length === 0) {
      listEl.innerHTML = "";
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    listEl.innerHTML = data
      .map((post) => {
        const date = new Date(post.created_at).toLocaleDateString("ko-KR");
        const canDelete = currentUser && currentUser.id === post.author_id;
        return `
          <article class="post-card" data-id="${post.id}">
            <div class="post-head">
              <span class="post-author">${escapeHTML(post.author_name)}</span>
              <span class="post-date">${date}</span>
            </div>
            <h3 class="post-title">${escapeHTML(post.title)}</h3>
            <p class="post-content">${escapeHTML(post.content)}</p>
            ${canDelete ? '<button type="button" class="mini-btn danger post-delete-btn">삭제</button>' : ""}
          </article>
        `;
      })
      .join("");

    listEl.querySelectorAll(".post-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.closest(".post-card").dataset.id;
        await sb.from("posts").delete().eq("id", id);
        renderPosts();
      });
    });
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
