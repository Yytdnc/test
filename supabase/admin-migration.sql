-- 관리자(최고 관리자) 기능 추가 마이그레이션
-- 이미 schema.sql을 실행하셨다면, 이 파일만 SQL Editor에 추가로 붙여넣고 실행하세요.
-- (schema.sql을 처음부터 다시 실행할 필요 없습니다)

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.admins enable row level security;

drop policy if exists "users can check their own admin status" on public.admins;
create policy "users can check their own admin status"
  on public.admins for selectd
  using (auth.uid() = user_id);

-- 게시글: 본인 글이거나, 관리자면 모든 글 삭제 가능
drop policy if exists "users can delete their own posts" on public.posts;
create policy "users can delete their own posts or admins any"
  on public.posts for delete
  using (
    auth.uid() = author_id
    or exists (select 1 from public.admins a where a.user_id = auth.uid())
  );

-- 댓글: 본인 댓글이거나, 관리자면 모든 댓글 삭제 가능
drop policy if exists "users can delete their own comments" on public.comments;
create policy "users can delete their own comments or admins any"
  on public.comments for delete
  using (
    auth.uid() = author_id
    or exists (select 1 from public.admins a where a.user_id = auth.uid())
  );

-- ============================================================
-- 사용 방법
-- 1. community.html 에서 관리자로 쓸 계정으로 먼저 회원가입하세요.
-- 2. Supabase 대시보드 → Authentication → Users 에서 그 계정의 UID(User UID)를 복사하세요.
-- 3. 아래 문장의 UID 부분을 바꿔서 SQL Editor에서 실행하세요:
--
-- insert into public.admins (user_id) values ('여기에-복사한-UID-붙여넣기');
-- ============================================================
