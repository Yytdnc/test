#!/usr/bin/env bash
# 파일 변경을 감지해서 자동으로 커밋 + 푸시하는 스크립트 (Codespaces용)
# 사용법: ./scripts/auto-push.sh
#   REMOTE, BRANCH, INTERVAL 환경변수로 원격/브랜치/주기(초) 조절 가능
set -euo pipefail

REMOTE="${REMOTE:-origin}"
BRANCH="${BRANCH:-$(git branch --show-current)}"
INTERVAL="${INTERVAL:-10}"

if [ -z "$BRANCH" ]; then
  echo "현재 브랜치를 확인할 수 없습니다." >&2
  exit 1
fi

echo "변경 감지 중... remote: $REMOTE, branch: $BRANCH, 주기: ${INTERVAL}s"
echo "종료하려면 Ctrl+C를 누르세요."

while true; do
  if [ -n "$(git status --porcelain)" ]; then
    git add -A
    if ! git diff --cached --quiet; then
      git commit -m "Auto update $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
      git push "$REMOTE" "$BRANCH"
      echo "$(date -u +'%H:%M:%S') 변경사항을 GitHub로 푸시했습니다."
    fi
  fi
  sleep "$INTERVAL"
done
