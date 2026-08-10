-- 커뮤니티 v2 (카테고리 태그 필터 + 좋아요) 마이그레이션
-- schema.sql, admin-migration.sql을 이미 실행하셨다면, 이 파일만 추가로 SQL Editor에서 실행하세요.

-- 게시글 카테고리 (필터용: free/qna/share)
alter table public.posts
  add column if not exists category text not null default 'free';

-- 좋아요
create table if not exists public.likes (
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id)
);

alter table public.likes enable row level security;

drop policy if exists "likes are viewable by everyone" on public.likes;
create policy "likes are viewable by everyone"
  on public.likes for select
  using (true);

drop policy if exists "users can like as themselves" on public.likes;
create policy "users can like as themselves"
  on public.likes for insert
  with check (auth.uid() = user_id);

drop policy if exists "users can remove their own like" on public.likes;
create policy "users can remove their own like"
  on public.likes for delete
  using (auth.uid() = user_id);
