-- MindPick 커뮤니티 게시판 스키마
-- Supabase 대시보드 → SQL Editor 에 붙여넣고 실행하세요.

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  author_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null,
  title text not null,
  content text not null,
  -- 심리테스트 결과를 공유한 글이면 채워짐 (일반 글은 null)
  quiz_test_id text,
  quiz_result_title text,
  quiz_result_emoji text
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);

alter table public.posts enable row level security;

create policy "posts are viewable by everyone"
  on public.posts for select
  using (true);

create policy "users can insert their own posts"
  on public.posts for insert
  with check (auth.uid() = author_id);

create policy "users can update their own posts"
  on public.posts for update
  using (auth.uid() = author_id);

create policy "users can delete their own posts"
  on public.posts for delete
  using (auth.uid() = author_id);

-- 댓글
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  post_id uuid not null references public.posts(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null,
  content text not null
);

create index if not exists comments_post_id_idx on public.comments (post_id);

alter table public.comments enable row level security;

create policy "comments are viewable by everyone"
  on public.comments for select
  using (true);

create policy "users can insert their own comments"
  on public.comments for insert
  with check (auth.uid() = author_id);

create policy "users can delete their own comments"
  on public.comments for delete
  using (auth.uid() = author_id);
