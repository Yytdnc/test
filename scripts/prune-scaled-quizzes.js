#!/usr/bin/env node
/* 핵심 목록(scripts/core-tests.js) 밖의 테스트를 사이트에서 걷어낸다.
 *   - js/tests-data.js 에서 빼서 js/tests-data-archive.js 로 이관
 *   - sitemap.xml 에서 해당 quiz-<id>.html 줄 제거
 * quiz-<id>.html 삭제와 index/tests 재생성은 이어서 도는
 * scripts/build-quiz-pages.js 가 맡는다 (orphan 정리 기능).
 *
 * 왜 필요한가: 외부 스케줄 작업이 매일 00:05 UTC 무렵 "Add 나의 OO 테스트" 커밋으로
 * 양산형 퀴즈를 main 에 계속 밀어넣는다. 그대로 두면 애드센스 거절 원인이었던
 * 양산형 콘텐츠가 다시 불어난다. .github/workflows/deploy.yml 이 push 마다 돌려서
 * 공개 범위를 핵심 16개로 되돌린다.
 *
 * 사용법:
 *   node scripts/prune-scaled-quizzes.js && node scripts/build-quiz-pages.js
 *
 * 삭제가 아니라 이관인 이유: archive 는 어떤 HTML 에서도 <script src> 로 로드하지
 * 않아 사이트에 반영되지 않는다. 나중에 문구를 다듬어 살리고 싶으면 항목을
 * TESTS 배열로 되돌리고 core-tests.js 에 id 를 추가하면 된다.
 */
const fs = require("fs");
const path = require("path");
const { CORE_TEST_IDS } = require("./core-tests.js");

const ROOT = path.join(__dirname, "..");
const DATA = path.join(ROOT, "js/tests-data.js");
const ARCHIVE = path.join(ROOT, "js/tests-data-archive.js");
const SITEMAP = path.join(ROOT, "sitemap.xml");

/* 배열 리터럴을 값으로 읽고, 같은 자리에 다시 써넣을 수 있도록
 * 앞뒤 원문과 개행 스타일을 함께 들고 온다 (tests-data.js 는 CRLF, archive 는 LF). */
function loadArrayLiteral(file, varName) {
  const src = fs.readFileSync(file, "utf8");
  const marker = `const ${varName} = [`;
  const open = src.indexOf(marker);
  if (open === -1) throw new Error(`${file}: '${marker}' 를 찾지 못했습니다`);

  const arrStart = open + marker.length - 1; // '[' 위치
  const rest = src.slice(arrStart);
  const close = rest.search(/\r?\n\];(?![\s\S]*\r?\n\];)/); // 마지막 '];' 줄
  if (close === -1) throw new Error(`${file}: ${varName} 배열의 끝을 찾지 못했습니다`);

  return {
    file,
    value: new Function(`${src}\nreturn ${varName};`)(),
    prologue: src.slice(0, arrStart),
    epilogue: src.slice(arrStart + close + rest.slice(close).indexOf(";") + 1),
    crlf: /\r\n/.test(src),
  };
}

function saveArrayLiteral(lit, nextValue) {
  let body = `${JSON.stringify(nextValue, null, 2)};`;
  if (lit.crlf) body = body.replace(/\n/g, "\r\n");
  fs.writeFileSync(lit.file, lit.prologue + body + lit.epilogue, "utf8");
}

/* sitemap.xml 은 <url> 한 줄에 하나씩이라 줄 단위로 걸러낸다.
 * build-quiz-pages.js 가 sitemap 은 건드리지 않으므로 여기서 맞춰야
 * "sitemap.xml 과 실제 페이지가 일치한다" 검사가 통과한다. */
function pruneSitemap(removedIds) {
  if (!removedIds.length) return 0;
  const src = fs.readFileSync(SITEMAP, "utf8");
  const eol = /\r\n/.test(src) ? "\r\n" : "\n";
  const drop = new Set(removedIds.map((id) => `quiz-${id}.html`));
  const lines = src.split(/\r?\n/);
  const kept = lines.filter((line) => {
    const m = line.match(/<loc>[^<]*\/([^/<]+)<\/loc>/);
    return !(m && drop.has(m[1]));
  });
  if (kept.length === lines.length) return 0;
  fs.writeFileSync(SITEMAP, kept.join(eol), "utf8");
  return lines.length - kept.length;
}

const data = loadArrayLiteral(DATA, "TESTS");
const archive = loadArrayLiteral(ARCHIVE, "TESTS_ARCHIVE");

const core = new Set(CORE_TEST_IDS);
const keep = data.value.filter((t) => core.has(t.id));
const move = data.value.filter((t) => !core.has(t.id));

/* 핵심 목록과 데이터가 어긋난 채로 배포가 나가면 안 된다 */
const missing = CORE_TEST_IDS.filter((id) => !keep.some((t) => t.id === id));
if (missing.length) {
  console.error(`핵심 테스트가 js/tests-data.js 에 없습니다: ${missing.join(", ")}`);
  console.error("core-tests.js 와 tests-data.js 가 어긋났습니다. 손으로 확인이 필요합니다.");
  process.exit(1);
}

if (!move.length) {
  console.log(`이관할 양산형 테스트 없음 (공개 ${keep.length}개 그대로)`);
  process.exit(0);
}

/* archive 에 같은 id 가 이미 있으면(같은 주제를 다시 만들어 넣은 경우)
 * 되살릴 때 충돌하지 않게 뒤에 번호를 붙여 둘 다 보관한다. */
const archivedIds = new Set(archive.value.map((t) => t.id));
const moved = move.map((test) => {
  if (!archivedIds.has(test.id)) {
    archivedIds.add(test.id);
    return { test, archivedAs: test.id };
  }
  let n = 2;
  while (archivedIds.has(`${test.id}-${n}`)) n += 1;
  const archivedAs = `${test.id}-${n}`;
  archivedIds.add(archivedAs);
  return { test: { ...test, id: archivedAs }, archivedAs };
});

saveArrayLiteral(data, keep);
saveArrayLiteral(archive, archive.value.concat(moved.map((m) => m.test)));
const droppedUrls = pruneSitemap(move.map((t) => t.id));

for (const { test, archivedAs } of moved) {
  const renamed = archivedAs === test.id ? "" : ` (id 충돌로 ${archivedAs} 로 보관)`;
  console.log(`archived ${test.title}${renamed}`);
}
console.log(
  `양산형 ${moved.length}개를 archive 로 이관, sitemap ${droppedUrls}줄 제거, 공개 ${keep.length}개 유지`
);
