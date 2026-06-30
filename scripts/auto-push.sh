#!/usr/bin/env bash
set -euo pipefail

REMOTE="${REMOTE:-origin}"
BRANCH="${BRANCH:-$(git branch --show-current)}"
INTERVAL="${INTERVAL:-10}"

if [ -z "$BRANCH" ]; then
  echo "현재 브랜치를 확인할 수 없습니다." >&2
  exit 1
fi

echo "Watching for changes. Remote: $REMOTE, branch: $BRANCH, interval: ${INTERVAL}s"

while true; do
  if [ -n "$(git status --porcelain)" ]; then
    git add -A
    if ! git diff --cached --quiet; then
      git commit -m "Auto update $(date -u +'%Y-%m-%dT%H:%M:%SZ')"
      git push "$REMOTE" "$BRANCH"
    fi
  fi

  sleep "$INTERVAL"
done
