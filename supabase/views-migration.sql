-- 테스트 조회수 기능 마이그레이션
-- 이미 schema.sql을 실행하셨다면, 이 파일만 SQL Editor에 추가로 붙여넣고 실행하세요.

create table if not exists public.test_views (
  test_id text primary key,
  views bigint not null default 0
);

alter table public.test_views enable row level security;

drop policy if exists "test views are viewable by everyone" on public.test_views;
create policy "test views are viewable by everyone"
  on public.test_views for select
  using (true);

-- 조회수 증가는 테이블 직접 수정 대신 이 함수로만 허용합니다 (RLS로 임의 조작 방지).
create or replace function public.increment_test_view(p_test_id text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.test_views (test_id, views)
  values (p_test_id, 1)
  on conflict (test_id) do update set views = public.test_views.views + 1;
end;
$$;

grant execute on function public.increment_test_view(text) to anon, authenticated;
