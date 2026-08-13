  -- 커플/친구 비교하기 세션 저장 마이그레이션
  -- 이미 다른 마이그레이션을 실행하셨다면, 이 파일만 SQL Editor에 추가로 붙여넣고 실행하세요.
  --
  -- 목적: 지금까지는 상대방의 답변이 URL/세션에만 잠깐 남아있어서, 상대방이 테스트를
  -- 마친 뒤 시간이 지나거나 다른 기기에서 확인하려 하면 "결과를 찾을 수 없어요"가 떴습니다.
  -- 이 테이블에 두 사람의 답변을 저장해두면 나중에 언제든 같은 링크로 다시 확인할 수 있습니다.

  create table if not exists public.compare_sessions (
    code text primary key,
    test_id text not null,
    initiator_answers jsonb not null,
    partner_answers jsonb,
    created_at timestamptz not null default now()
  );

  alter table public.compare_sessions enable row level security;

  drop policy if exists "compare sessions are viewable by everyone" on public.compare_sessions;
  create policy "compare sessions are viewable by everyone"
    on public.compare_sessions for select
    using (true);

  drop policy if exists "anyone can create a compare session" on public.compare_sessions;
  create policy "anyone can create a compare session"
    on public.compare_sessions for insert
    with check (true);

  -- 상대방 답변은 딱 한 번만 채워 넣을 수 있도록 제한 (이미 채워진 세션은 수정 불가)
  drop policy if exists "partner can fill in their answers once" on public.compare_sessions;
  create policy "partner can fill in their answers once"
    on public.compare_sessions for update
    using (partner_answers is null)
    with check (true);
