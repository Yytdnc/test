/* community.html: Supabase 기반 커뮤니티 피드 (글쓰기/댓글/좋아요/카테고리 필터/결과공유) */
(function () {
  const configWarning = document.getElementById("config-warning");

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

  const authArea = document.getElementById("auth-area");
  const postListEl = document.getElementById("post-list");
  const postEmptyEl = document.getElementById("post-empty");
  const postStatus = document.getElementById("post-status");
  const composeModal = document.getElementById("compose-modal");
  const fab = document.getElementById("compose-fab");

  let currentUser = null;
  let isAdmin = false;
  let activeCategory = "all";
  let posts = [];
  let commentsByPost = {};
  let likesByPost = {}; // { [postId]: { count, likedByMe } }

  const AVATAR_COLORS = ["bg-[#0058be]", "bg-[#4648d4]", "bg-[#00855b]", "bg-[#b8862f]", "bg-[#ba1a1a]"];
  function avatarColor(id) {
    let h = 0;
    for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  function relativeTime(iso) {
    const diffMs = Date.now() - new Date(iso).getTime();
    const min = Math.floor(diffMs / 60000);
    if (min < 1) return "방금 전";
    if (min < 60) return `${min}분 전`;
    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}시간 전`;
    const day = Math.floor(hr / 24);
    if (day < 7) return `${day}일 전`;
    return new Date(iso).toLocaleDateString("ko-KR");
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function nicknameOf(user) {
    if (!user) return "";
    return (user.user_metadata && (user.user_metadata.nickname || user.user_metadata.name)) || user.email;
  }

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
        shareResultParam !== null ? { resultKey: shareResultParam } : { score: Number(shareScoreParam) };
      const info = mpResultInfo(shareTest, resultObj);
      if (info) {
        shareMeta = { test_id: shareTest.id, result_title: info.title, result_emoji: info.emoji };
        const previewEl = document.getElementById("share-preview");
        if (previewEl) {
          previewEl.style.display = "block";
          previewEl.innerHTML = `${info.emoji} <strong>${escapeHTML(shareTest.title)}</strong> 결과: <strong>${escapeHTML(info.title)}</strong> 공유 중`;
        }
        const titleInput = document.getElementById("post-title");
        const contentInput = document.getElementById("post-content");
        const categorySelect = document.getElementById("post-category");
        if (titleInput && !titleInput.value) titleInput.value = `${shareTest.title} 결과: ${info.title}`;
        if (contentInput && !contentInput.value) {
          contentInput.value = `${info.desc}\n\n다들 결과 뭐 나왔어요? 👉 quiz.html?id=${shareTest.id}`;
        }
        if (categorySelect) categorySelect.value = "share";
      }
    }
  }

  // 비로그인 상태로 공유 링크로 들어온 경우, 로그인/가입 후 다시 돌아올 수 있게 next 파라미터 유지
  function authLinkHref(page) {
    return location.search ? `${page}?next=${encodeURIComponent(location.search)}` : page;
  }

  // ---------- 인증 상태 ----------
  function renderAuthArea() {
    if (currentUser) {
      authArea.innerHTML = `
        <span class="text-label-md text-on-surface-variant hidden sm:inline">${escapeHTML(nicknameOf(currentUser))}${isAdmin ? " (관리자)" : ""}</span>
        <button type="button" id="logout-btn" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low text-on-surface-variant" title="로그아웃">
          <span class="material-symbols-outlined">logout</span>
        </button>
      `;
      document.getElementById("logout-btn").addEventListener("click", () => sb.auth.signOut());
    } else {
      authArea.innerHTML = `
        <a href="${authLinkHref("login.html")}" class="px-sm py-xs text-label-md text-primary font-semibold">로그인</a>
        <a href="${authLinkHref("signup.html")}" class="px-md py-xs bg-primary text-on-primary rounded-full text-label-md font-semibold">가입</a>
      `;
    }
  }

  async function renderAuthState(user) {
    currentUser = user;
    isAdmin = false;
    if (user) {
      const { data: adminRow } = await sb.from("admins").select("user_id").eq("user_id", user.id).maybeSingle();
      isAdmin = !!adminRow;
    }
    renderAuthArea();
    loadFeed();
  }

  sb.auth.getUser().then(({ data }) => renderAuthState(data.user || null));
  sb.auth.onAuthStateChange((_event, session) => renderAuthState(session ? session.user : null));

  // ---------- 카테고리 필터 ----------
  const PILL_ACTIVE = ["bg-primary/10", "text-primary"];
  const PILL_INACTIVE = ["bg-surface-container-high", "text-on-surface-variant"];

  function paintPills() {
    document.querySelectorAll(".pill-btn").forEach((btn) => {
      const active = btn.dataset.category === activeCategory;
      btn.classList.remove(...PILL_ACTIVE, ...PILL_INACTIVE);
      btn.classList.add(...(active ? PILL_ACTIVE : PILL_INACTIVE));
    });
  }
  document.querySelectorAll(".pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      paintPills();
      renderList();
    });
  });
  paintPills();

  // ---------- 컴포즈(글쓰기) 모달 ----------
  function openCompose() {
    if (!currentUser) {
      location.href = authLinkHref("login.html");
      return;
    }
    composeModal.classList.remove("hidden");
  }
  function closeCompose() {
    composeModal.classList.add("hidden");
  }
  fab.addEventListener("click", openCompose);
  document.getElementById("compose-close-btn").addEventListener("click", closeCompose);
  document.getElementById("compose-backdrop").addEventListener("click", closeCompose);
  if (shareMeta) openCompose();

  document.getElementById("post-submit-btn").addEventListener("click", async () => {
    if (!currentUser) return;
    const title = document.getElementById("post-title").value.trim();
    const content = document.getElementById("post-content").value.trim();
    const category = document.getElementById("post-category").value;
    if (!title || !content) {
      postStatus.textContent = "제목과 내용을 입력해주세요.";
      postStatus.className = "text-body-sm mt-sm text-error";
      return;
    }
    const row = { author_id: currentUser.id, author_name: nicknameOf(currentUser), title, content, category };
    if (shareMeta) {
      row.quiz_test_id = shareMeta.test_id;
      row.quiz_result_title = shareMeta.result_title;
      row.quiz_result_emoji = shareMeta.result_emoji;
    }
    const { error } = await sb.from("posts").insert(row);
    if (error) {
      postStatus.textContent = error.message;
      postStatus.className = "text-body-sm mt-sm text-error";
    } else {
      document.getElementById("post-title").value = "";
      document.getElementById("post-content").value = "";
      document.getElementById("post-category").value = "free";
      postStatus.textContent = "";
      shareMeta = null;
      const previewEl = document.getElementById("share-preview");
      if (previewEl) previewEl.style.display = "none";
      history.replaceState(null, "", "community.html");
      closeCompose();
      loadFeed();
    }
  });

  // ---------- 피드 로딩 ----------
  async function loadFeed() {
    const { data, error } = await sb.from("posts").select("*").order("created_at", { ascending: false });
    if (error) {
      postListEl.innerHTML = "";
      postEmptyEl.textContent = "글을 불러오지 못했어요: " + error.message;
      postEmptyEl.style.display = "block";
      return;
    }
    posts = data || [];
    const postIds = posts.map((p) => p.id);
    commentsByPost = {};
    likesByPost = {};

    if (postIds.length) {
      const [{ data: comments }, { data: likes }] = await Promise.all([
        sb.from("comments").select("*").in("post_id", postIds).order("created_at", { ascending: true }),
        sb.from("likes").select("post_id, user_id").in("post_id", postIds),
      ]);
      (comments || []).forEach((c) => {
        (commentsByPost[c.post_id] = commentsByPost[c.post_id] || []).push(c);
      });
      (likes || []).forEach((l) => {
        const entry = (likesByPost[l.post_id] = likesByPost[l.post_id] || { count: 0, likedByMe: false });
        entry.count++;
        if (currentUser && l.user_id === currentUser.id) entry.likedByMe = true;
      });
    }

    renderList();

    if (location.hash.startsWith("#post-")) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function renderList() {
    const filtered = activeCategory === "all" ? posts : posts.filter((p) => p.category === activeCategory);
    if (filtered.length === 0) {
      postListEl.innerHTML = "";
      postEmptyEl.style.display = "block";
      return;
    }
    postEmptyEl.style.display = "none";
    postListEl.innerHTML = filtered
      .map((post) => renderPostCard(post, commentsByPost[post.id] || [], likesByPost[post.id] || { count: 0, likedByMe: false }))
      .join("");
    bindCardEvents();
  }

  function renderPostCard(post, comments, likeInfo) {
    const initial = (post.author_name || "?").trim().charAt(0).toUpperCase();
    const canDelete = currentUser && (currentUser.id === post.author_id || isAdmin);
    const shareBadge = post.quiz_test_id
      ? `<a href="quiz.html?id=${post.quiz_test_id}" class="self-start px-sm py-xs bg-secondary-container/10 text-secondary text-label-sm rounded-full font-semibold">${post.quiz_result_emoji || ""} ${escapeHTML(post.quiz_result_title || "")} 결과 공유</a>`
      : "";

    const commentsHTML = comments
      .map((c) => {
        const canDeleteComment = currentUser && (currentUser.id === c.author_id || isAdmin);
        return `
          <div class="flex items-start gap-xs text-body-sm" data-comment-id="${c.id}">
            <span class="font-semibold text-on-surface flex-shrink-0">${escapeHTML(c.author_name)}</span>
            <span class="text-on-surface-variant flex-1 break-words">${escapeHTML(c.content)}</span>
            ${canDeleteComment ? '<button type="button" class="comment-delete-btn text-on-surface-variant hover:text-error flex-shrink-0"><span class="material-symbols-outlined text-[16px]">close</span></button>' : ""}
          </div>
        `;
      })
      .join("");

    const commentForm = currentUser
      ? `
        <div class="flex gap-xs mt-xs">
          <input type="text" class="comment-input flex-1 px-sm py-xs rounded-lg border border-outline-variant text-body-sm focus:outline-none focus:ring-2 focus:ring-primary/30" maxlength="300" placeholder="댓글을 남겨보세요" />
          <button type="button" class="comment-submit-btn px-md py-xs bg-primary text-on-primary rounded-full text-label-sm font-semibold">등록</button>
        </div>
      `
      : `<p class="text-label-sm text-on-surface-variant">댓글을 쓰려면 <a href="${authLinkHref("login.html")}" class="text-primary font-semibold">로그인</a>해주세요.</p>`;

    return `
      <article id="post-${post.id}" class="scroll-mt-20 bg-surface-container-lowest rounded-xl shadow-[0_4px_16px_rgba(0,88,190,0.05)] border border-outline-variant p-md flex flex-col gap-md" data-id="${post.id}">
        <header class="flex items-center gap-gutter-mobile">
          <div class="w-[48px] h-[48px] rounded-full ${avatarColor(post.author_id)} text-white flex items-center justify-center font-headline-sm font-bold flex-shrink-0">${escapeHTML(initial)}</div>
          <div class="flex flex-col">
            <span class="font-label-md text-label-md text-on-surface font-semibold">${escapeHTML(post.author_name)}</span>
            <span class="font-label-sm text-label-sm text-on-surface-variant">${relativeTime(post.created_at)}</span>
          </div>
        </header>
        ${shareBadge}
        <div class="flex flex-col gap-sm">
          <h2 class="font-headline-sm text-headline-sm font-semibold">${escapeHTML(post.title)}</h2>
          <p class="font-body-md text-body-md text-on-surface-variant line-clamp-3">${escapeHTML(post.content)}</p>
        </div>
        <footer class="flex items-center gap-md sm:gap-lg border-t border-outline-variant pt-sm mt-sm">
          <button type="button" class="like-btn flex items-center gap-xs ${likeInfo.likedByMe ? "text-primary" : "text-on-surface-variant"} hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[20px]" style="font-variation-settings:'FILL' ${likeInfo.likedByMe ? 1 : 0}">thumb_up</span>
            <span class="like-count font-label-md text-label-md">${likeInfo.count}</span>
          </button>
          <button type="button" class="comment-toggle-btn flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
            <span class="font-label-md text-label-md">${comments.length}</span>
          </button>
          <button type="button" class="share-post-btn flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors ml-auto">
            <span class="material-symbols-outlined text-[20px]">share</span>
          </button>
          ${canDelete ? '<button type="button" class="post-delete-btn flex items-center text-on-surface-variant hover:text-error transition-colors"><span class="material-symbols-outlined text-[20px]">delete</span></button>' : ""}
        </footer>
        <div class="comment-section hidden flex flex-col gap-sm pt-sm border-t border-outline-variant">
          ${commentsHTML}
          ${commentForm}
        </div>
      </article>
    `;
  }

  function bindCardEvents() {
    postListEl.querySelectorAll(".like-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.currentTarget.closest("article").dataset.id;
        if (!currentUser) {
          location.href = authLinkHref("login.html");
          return;
        }
        const info = likesByPost[id] || { count: 0, likedByMe: false };
        if (info.likedByMe) {
          await sb.from("likes").delete().eq("post_id", id).eq("user_id", currentUser.id);
        } else {
          await sb.from("likes").insert({ post_id: id, user_id: currentUser.id });
        }
        loadFeed();
      });
    });

    postListEl.querySelectorAll(".comment-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const article = e.currentTarget.closest("article");
        article.querySelector(".comment-section").classList.toggle("hidden");
      });
    });

    postListEl.querySelectorAll(".share-post-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.closest("article").dataset.id;
        const url = `${location.origin}${location.pathname}#post-${id}`;
        if (navigator.share) {
          navigator.share({ url }).catch(() => {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(url);
        }
      });
    });

    postListEl.querySelectorAll(".post-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.currentTarget.closest("article").dataset.id;
        await sb.from("posts").delete().eq("id", id);
        loadFeed();
      });
    });

    postListEl.querySelectorAll(".comment-delete-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.currentTarget.closest("[data-comment-id]").dataset.commentId;
        await sb.from("comments").delete().eq("id", id);
        loadFeed();
      });
    });

    postListEl.querySelectorAll(".comment-submit-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const article = e.currentTarget.closest("article");
        const postId = article.dataset.id;
        const input = article.querySelector(".comment-input");
        const content = input.value.trim();
        if (!content || !currentUser) return;
        await sb.from("comments").insert({
          post_id: postId,
          author_id: currentUser.id,
          author_name: nicknameOf(currentUser),
          content,
        });
        loadFeed();
      });
    });
  }
})();
