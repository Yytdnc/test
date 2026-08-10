-- 관리자(최고 관리자) 기능 추가 마이그레이션
-- 이미 schema.sql을 실행하셨다면, 이 파일만 SQL Editor에 추가로 붙여넣고 실행하세요.
-- (schema.sql을 처음부터 다시 실행할 필요 없습니다)

create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.admins enable row level security;

drop policy if exists "users can check their own admin status" on public.admins;
create policy "users can check their own admin status"
  on public.admins for select
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

-- 관리자로 지정
insert into public.admins (user_id) values ('3a3839f0-f2ef-4516-9219-714bcd142069')
on conflict (user_id) do nothing;
