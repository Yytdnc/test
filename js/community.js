/* community.html: Supabase 기반 간단 커뮤니티 (회원가입/로그인/글쓰기/댓글/결과공유) */
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
  let isAdmin = false;

  // ---------- 결과 공유(퀴즈 결과 -> 커뮤니티 글) 준비 ----------
  const params = new URLSearchParams(location.search);
  const shareTestId = params.get("share_test");
  let shareMeta = null; // { test_id, result_title, result_emoji }

  if (shareTestId && typeof ALL_TESTS !== "undefined" && typeof mpResultInfo === "function") {
    const shareTest = ALL_TESTS.find((t) => t.id === shareTestId);
    if (shareTest) {
      const shareResultParam = params.get("share_result");
      const shareScoreParam = params.get("share_score");
      const resultObj =
        shareResultParam !== null
          ? { resultKey: shareResultParam }
          : { score: Number(shareScoreParam) };
      const info = mpResultInfo(shareTest, resultObj);
      if (info) {
        shareMeta = { test_id: shareTest.id, result_title: info.title, result_emoji: info.emoji };
        const previewEl = document.getElementById("share-preview");
        if (previewEl) {
          previewEl.style.display = "block";
          previewEl.innerHTML = `<span class="share-preview-emoji">${info.emoji}</span> <strong>${shareTest.title}</strong> 결과: <strong>${info.title}</strong> 공유 중`;
        }
        const titleInput = document.getElementById("post-title");
        const contentInput = document.getElementById("post-content");
        if (titleInput && !titleInput.value) {
          titleInput.value = `${shareTest.title} 결과: ${info.title}`;
        }
        if (contentInput && !contentInput.value) {
          contentInput.value = `${info.desc}\n\n다들 결과 뭐 나왔어요? 👉 quiz.html?id=${shareTest.id}`;
        }
      }
    }
  }

  // ---------- 로그인/회원가입 탭 ----------
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

  async function renderAuthState(user) {
    currentUser = user;
    isAdmin = false;
    if (user) {
      loggedOutEl.style.display = "none";
      loggedInEl.style.display = "block";
      writeBox.style.display = "block";
      const { data: adminRow } = await sb
        .from("admins")
        .select("user_id")
        .eq("user_id", user.id)
        .maybeSingle();
      isAdmin = !!adminRow;
      nicknameEl.textContent = nicknameOf(user) + (isAdmin ? " (관리자)" : "");
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
    const row = {
      author_id: currentUser.id,
      author_name: nicknameOf(currentUser),
      title,
      content,
    };
    if (shareMeta) {
      row.quiz_test_id = shareMeta.test_id;
      row.quiz_result_title = shareMeta.result_title;
      row.quiz_result_emoji = shareMeta.result_emoji;
    }
    const { error } = await sb.from("posts").insert(row);
    if (error) {
      postStatus.textContent = error.message;
      postStatus.className = "status-msg err";
    } else {
      document.getElementById("post-title").value = "";
      document.getElementById("post-content").value = "";
      postStatus.className = "status-msg";
      shareMeta = null;
      const previewEl = document.getElementById("share-preview");
      if (previewEl) previewEl.style.display = "none";
      history.replaceState(null, "", "community.html");
      renderPosts();
    }
  });

  // ---------- 게시글 + 댓글 렌더링 ----------
  async function renderPosts() {
    const listEl = document.getElementById("post-list");
    const emptyEl = document.getElementById("post-empty");
    const { data: posts, error } = await sb
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      listEl.innerHTML = "";
      emptyEl.textContent = "글을 불러오지 못했어요: " + error.message;
      emptyEl.style.display = "block";
      return;
    }

    if (!posts || posts.length === 0) {
      listEl.innerHTML = "";
      emptyEl.style.display = "block";
      return;
    }
    emptyEl.style.display = "none";

    let commentsByPost = {};
    const postIds = posts.map((p) => p.id);
    const { data: comments } = await sb
      .from("comments")
      .select("*")
      .in("post_id", postIds)
      .order("created_at", { ascending: true });
    (comments || []).forEach((c) => {
      (commentsByPost[c.post_id] = commentsByPost[c.post_id] || []).push(c);
    });

    listEl.innerHTML = posts.map((post) => renderPostCard(post, commentsByPost[post.id] || [])).join("");

    listEl.querySelectorAll(".post-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.closest(".post-card").dataset.id;
        await sb.from("posts").delete().eq("id", id);
        renderPosts();
      });
    });

    listEl.querySelectorAll(".comment-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.closest(".comment-item").dataset.id;
        await sb.from("comments").delete().eq("id", id);
        renderPosts();
      });
    });

    listEl.querySelectorAll(".comment-submit-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const card = e.target.closest(".post-card");
        const postId = card.dataset.id;
        const textarea = card.querySelector(".comment-input");
        const content = textarea.value.trim();
        if (!content || !currentUser) return;
        await sb.from("comments").insert({
          post_id: postId,
          author_id: currentUser.id,
          author_name: nicknameOf(currentUser),
          content,
        });
        renderPosts();
      });
    });
  }

  function renderPostCard(post, comments) {
    const date = new Date(post.created_at).toLocaleDateString("ko-KR");
    const canDelete = currentUser && (currentUser.id === post.author_id || isAdmin);
    const shareBadge = post.quiz_test_id
      ? `<a class="post-share-badge" href="quiz.html?id=${post.quiz_test_id}">${post.quiz_result_emoji || ""} ${escapeHTML(post.quiz_result_title || "")} 결과 공유</a>`
      : "";

    const commentsHTML = comments
      .map((c) => {
        const canDeleteComment = currentUser && currentUser.id === c.author_id;
        return `
          <div class="comment-item" data-id="${c.id}">
            <span class="comment-author">${escapeHTML(c.author_name)}</span>
            <span class="comment-content">${escapeHTML(c.content)}</span>
            ${canDeleteComment ? '<button type="button" class="mini-btn danger comment-delete-btn">삭제</button>' : ""}
          </div>
        `;
      })
      .join("");

    const commentForm = currentUser
      ? `
        <div class="comment-form">
          <textarea class="comment-input" rows="1" maxlength="300" placeholder="댓글을 남겨보세요"></textarea>
          <button type="button" class="mini-btn comment-submit-btn">등록</button>
        </div>
      `
      : `<p class="comment-hint">댓글을 쓰려면 로그인해주세요.</p>`;

    return `
      <article class="post-card" data-id="${post.id}">
        <div class="post-head">
          <span class="post-author">${escapeHTML(post.author_name)}</span>
          <span class="post-date">${date}</span>
        </div>
        ${shareBadge}
        <h3 class="post-title">${escapeHTML(post.title)}</h3>
        <p class="post-content">${escapeHTML(post.content)}</p>
        ${canDelete ? '<button type="button" class="mini-btn danger post-delete-btn">글 삭제</button>' : ""}
        <div class="comment-list">${commentsHTML}</div>
        ${commentForm}
      </article>
    `;
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }
})();
