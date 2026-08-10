-- MindPick 커뮤니티 게시판 스키마
-- Supabase 대시보드 → SQL Editor 에 붙여넣고 실행하세요.

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  author_id uuid not null references auth.users(id) on delete cascade,
  author_name text not null,
  title text not null,
  content text not null
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);

alter table public.posts enable row level security;

-- 누구나 게시글을 읽을 수 있음 (로그인 없이도 조회 가능)
create policy "posts are viewable by everyone"
  on public.posts for select
  using (true);

-- 로그인한 사용자만 자신의 글을 작성할 수 있음
create policy "users can insert their own posts"
  on public.posts for insert
  with check (auth.uid() = author_id);

-- 본인 글만 수정 가능
create policy "users can update their own posts"
  on public.posts for update
  using (auth.uid() = author_id);

-- 본인 글만 삭제 가능
create policy "users can delete their own posts"
  on public.posts for delete
  using (auth.uid() = author_id);
