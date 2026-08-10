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
  quiz_result_emoji text,
  -- 태그 필터: free(자유) / qna(질문) / share(결과공유)
  category text not null default 'free'
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

-- 관리자 (최고 관리자 계정만 여기 추가되며, 모든 글/댓글을 삭제할 수 있음)
create table if not exists public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.admins enable row level security;

create policy "users can check their own admin status"
  on public.admins for select
  using (auth.uid() = user_id);

create policy "users can delete their own posts or admins any"
  on public.posts for delete
  using (
    auth.uid() = author_id
    or exists (select 1 from public.admins a where a.user_id = auth.uid())
  );

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

create policy "users can delete their own comments or admins any"
  on public.comments for delete
  using (
    auth.uid() = author_id
    or exists (select 1 from public.admins a where a.user_id = auth.uid())
  );

-- 좋아요
create table if not exists public.likes (
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (post_id, user_id)
);

alter table public.likes enable row level security;

create policy "likes are viewable by everyone"
  on public.likes for select
  using (true);

create policy "users can like as themselves"
  on public.likes for insert
  with check (auth.uid() = user_id);

create policy "users can remove their own like"
  on public.likes for delete
  using (auth.uid() = user_id);

-- 관리자로 지정하려면 (schema.sql 실행 후):
-- insert into public.admins (user_id) values ('회원가입한 계정의 UID');
