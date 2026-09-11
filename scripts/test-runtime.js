#!/usr/bin/env node
/* MindPick 런타임 동작 검증 - 실제 HTML + 실제 페이지 JS를 Node에서 실행한다.
 *
 * 실행: node scripts/test-runtime.js
 *
 * scripts/lib/minidom.js 의 소형 DOM 위에서 페이지를 띄우고
 * 사용자가 하는 행동(시작 누르기, 보기 고르기, 뒤로 가기, 공유 누르기)을 그대로 재현한다.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { createPage } = require("./lib/minidom");

const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const SITE = "https://www.mindpick.net";

const TESTS = new Function(`${read("js/tests-data.js")}\nreturn TESTS;`)();
const utils = new Function(
  `${read("js/compare-utils.js")}\nreturn { mpComputeResult, mpResultInfo, mpEncodeAnswers, mpDecodeAnswers };`
)();

/* ---------------------------------------------------------------- 러너 */

let passed = 0;
const failures = [];
let currentGroup = "";
const queue = [];

function group(name) {
  currentGroup = name;
}

/* 검사는 바로 실행하지 않고 큐에 쌓았다가 main() 에서 순서대로 await 한다
 * (비동기 검사와 동기 검사를 같은 방식으로 쓰기 위해서) */
function check(name, fn) {
  queue.push({ group: currentGroup, name, fn });
}

async function runQueue() {
  let lastGroup = null;
  for (const item of queue) {
    if (item.group !== lastGroup) {
      console.log(`\n[${item.group}]`);
      lastGroup = item.group;
    }
    let problems;
    try {
      problems = await item.fn();
    } catch (e) {
      problems = [`예외: ${e && e.stack ? e.stack.split("\n").slice(0, 3).join(" | ") : e}`];
    }
    problems = (problems || []).filter(Boolean);
    if (problems.length === 0) {
      passed++;
      console.log(`  ok   ${item.name}`);
    } else {
      failures.push({ group: item.group, name: item.name, problems });
      console.log(`  FAIL ${item.name}`);
      problems.slice(0, 10).forEach((p) => console.log(`         - ${p}`));
      if (problems.length > 10) console.log(`         ... 외 ${problems.length - 10}건`);
    }
  }
}

/* ------------------------------------------------------- 페이지 부트스트랩 */

/* HTML 안의 <script src="js/..."> 를 선언 순서대로 뽑는다 (로드 순서까지 그대로 재현) */
function localScripts(html) {
  const out = [];
  const re = /<script[^>]+src="((?:\.\/)?js\/[^"]+)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1].split("?")[0].replace(/^\.\//, ""));
  return out;
}

/* 페이지 안의 인라인 <script> 중 window.MP_TEST_ID 같은 설정만 실행 (GTM/광고는 제외) */
function inlineConfigScripts(html) {
  const out = [];
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    const body = m[1];
    if (/window\.MP_[A-Z_]+\s*=/.test(body)) out.push(body);
  }
  return out;
}

/* 페이지를 만들고 스크립트를 순서대로 실행한다.
 *   file    - 저장소 안의 html 파일명
 *   search  - "?id=love" 같은 쿼리스트링
 *   opts.supabase  - window.supabase 스텁 (없으면 미설정 상태 = 실제 배포 기본값)
 *   opts.session   - sessionStorage 초기값 객체
 *   opts.skip      - 실행하지 않을 js 경로 목록
 *   opts.navigator - navigator 를 통째로 교체 (클립보드 없는 인앱 브라우저 재현 등)
 */
function boot(file, search, opts) {
  opts = opts || {};
  const html = read(file);
  const extras = { supabase: opts.supabase, Kakao: opts.kakao };
  // navigator 는 기본 스텁이 있으므로 지정했을 때만 덮어쓴다
  if (opts.navigator) extras.navigator = opts.navigator;
  const page = createPage(html, `${SITE}/${file === "index.html" ? "" : file}${search || ""}`, extras);
  if (opts.session) {
    Object.keys(opts.session).forEach((k) =>
      page.window.sessionStorage.setItem(k, opts.session[k])
    );
  }
  inlineConfigScripts(html).forEach((src) => page.run(src, `${file}#inline`));
  localScripts(html).forEach((js) => {
    if (opts.skip && opts.skip.includes(js)) return;
    page.run(read(js), js);
  });
  return page;
}

/* 마이크로태스크/타이머가 다 돌 때까지 기다린다 */
function settle() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

/* Supabase 를 흉내내는 최소 스텁. 비교 세션을 메모리에 저장한다. */
function fakeSupabase(store) {
  const rows = store || new Map();
  return {
    _rows: rows,
    createClient() {
      return {
        rpc: () => Promise.resolve({ data: null, error: null }),
        from(table) {
          const q = {
            _filter: null,
            select() {
              return q;
            },
            eq(col, val) {
              q._filter = [col, val];
              return q;
            },
            maybeSingle() {
              const [, val] = q._filter || [];
              const row = rows.get(val);
              return Promise.resolve({ data: row || null, error: null });
            },
            insert(row) {
              rows.set(row.code, {
                test_id: row.test_id,
                initiator_answers: row.initiator_answers,
                partner_answers: null,
              });
              return Promise.resolve({ data: null, error: null });
            },
            update(patch) {
              return {
                eq(col, val) {
                  const row = rows.get(val);
                  if (!row) return Promise.resolve({ error: { message: "not found" } });
                  Object.assign(row, patch);
                  return Promise.resolve({ error: null });
                },
              };
            },
            then(res) {
              // select() 결과를 await 하는 경로 (views.js)
              return Promise.resolve({ data: [], error: null }).then(res);
            },
          };
          if (table === "compare_sessions" || table === "test_views") return q;
          return q;
        },
      };
    },
  };
}

/* ================================================== 퀴즈 진행 (quiz.js) */

group("QUIZ 진행 엔진");

/* 한 테스트를 끝까지 풀고, 중간 상태를 전부 확인한다 */
function playQuiz(test, chooseIndex) {
  const page = boot(`quiz-${test.id}.html`, "");
  const problems = [];
  const doc = page.document;

  const intro = doc.getElementById("quiz-intro");
  const question = doc.getElementById("quiz-question");

  if (intro.querySelector("h1").textContent !== test.title)
    problems.push(`${test.id}: 인트로 제목이 "${intro.querySelector("h1").textContent}"`);
  if (intro.querySelector(".big-emoji").textContent !== test.emoji)
    problems.push(`${test.id}: 인트로 이모지 불일치`);
  const qCount = intro.querySelector(".q-count").textContent;
  if (qCount !== `질문 ${test.questions.length}개`)
    problems.push(`${test.id}: 문항 수 표시가 "${qCount}"`);
  if (doc.title !== `${test.title} | MindPick`)
    problems.push(`${test.id}: document.title 이 "${doc.title}"`);

  if (question.style.display !== "none" && intro.style.display === "none")
    problems.push(`${test.id}: 시작 전인데 질문 화면이 보임`);

  intro.querySelector(".start-btn").click();
  if (intro.style.display !== "none") problems.push(`${test.id}: 시작 후 인트로가 안 숨겨짐`);
  if (question.style.display !== "block") problems.push(`${test.id}: 시작 후 질문 화면이 안 보임`);

  const chosen = [];
  for (let i = 0; i < test.questions.length; i++) {
    const q = test.questions[i];
    const step = question.querySelector(".q-step").textContent;
    if (step !== `${i + 1} / ${test.questions.length}`)
      problems.push(`${test.id} Q${i + 1}: 진행 표시가 "${step}"`);
    if (question.querySelector("h2").textContent !== q.text)
      problems.push(`${test.id} Q${i + 1}: 질문 문구 불일치`);

    const btns = question.querySelector(".option-list").children;
    if (btns.length !== q.options.length) {
      problems.push(`${test.id} Q${i + 1}: 보기 버튼 ${btns.length}개 (데이터는 ${q.options.length}개)`);
      break;
    }
    q.options.forEach((o, j) => {
      if (btns[j].textContent !== o.text)
        problems.push(`${test.id} Q${i + 1}-${j + 1}: 버튼 문구 불일치`);
    });

    const pick = chooseIndex(i, q);
    chosen.push(q.options[pick].value);
    btns[pick].click();
    // 모바일 더블탭 방어: 화면이 바뀐 직후 같은 자리를 또 눌러도 답이 추가되면 안 된다
    btns[pick].click();
    // 입력 잠금(INPUT_LOCK_MS)을 풀어 다음 문항으로 정상 진행시킨다
    page.flushTimers();
  }

  return { page, problems, chosen };
}

check("26개 테스트를 처음부터 끝까지 풀 수 있다 (첫 보기 선택)", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const r = playQuiz(t, () => 0);
    problems.push(...r.problems);
  });
  return problems;
});

check("26개 테스트를 다른 답변 경로로도 풀 수 있다 (보기 순환 선택)", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const r = playQuiz(t, (i, q) => i % q.options.length);
    problems.push(...r.problems);
  });
  return problems;
});

check("마지막 문항 후 result.html 로 이동하고 세션에 결과가 저장된다", async () => {
  const problems = [];
  for (const t of TESTS) {
    const r = playQuiz(t, (i, q) => i % q.options.length);
    await settle();
    const url = r.page.redirects[r.page.redirects.length - 1];
    if (url !== `result.html?id=${t.id}`)
      problems.push(`${t.id}: 이동한 주소가 ${JSON.stringify(url)}`);

    const raw = r.page.window.sessionStorage.getItem("mindpick_result");
    if (!raw) {
      problems.push(`${t.id}: sessionStorage 에 결과가 없음`);
      continue;
    }
    const saved = JSON.parse(raw);
    if (saved.testId !== t.id) problems.push(`${t.id}: 저장된 testId 가 ${saved.testId}`);
    if (saved.answers.length !== t.questions.length)
      problems.push(`${t.id}: 저장된 답변이 ${saved.answers.length}개 (문항 ${t.questions.length}개)`);
    if (JSON.stringify(saved.answers) !== JSON.stringify(r.chosen))
      problems.push(`${t.id}: 저장된 답변이 실제 누른 것과 다름 (더블탭 중복 저장 의심)`);

    const expected = utils.mpComputeResult(t, r.chosen);
    Object.keys(expected).forEach((k) => {
      if (saved[k] !== expected[k])
        problems.push(`${t.id}: 저장된 ${k} 가 ${saved[k]} (기대값 ${expected[k]})`);
    });
  }
  return problems;
});

check("뒤로 가기 버튼이 직전 답변을 취소한다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    if (t.questions.length < 3) return;
    const page = boot(`quiz-${t.id}.html`, "");
    const intro = page.byId("quiz-intro");
    const question = page.byId("quiz-question");
    intro.querySelector(".start-btn").click();

    const opts = () => question.querySelector(".option-list").children;
    const tap = (el) => {
      el.click();
      page.flushTimers();
    };
    tap(opts()[0]); // Q1 답변 -> Q2
    tap(opts()[0]); // Q2 답변 -> Q3
    if (question.querySelector(".q-step").textContent !== `3 / ${t.questions.length}`)
      problems.push(`${t.id}: 2문항 답한 뒤 3번 문항이 아님`);

    tap(question.querySelector(".back-btn"));
    if (question.querySelector(".q-step").textContent !== `2 / ${t.questions.length}`)
      problems.push(`${t.id}: 뒤로 가기 후 2번 문항이 아님`);
    if (question.querySelector("h2").textContent !== t.questions[1].text)
      problems.push(`${t.id}: 뒤로 가기 후 질문 문구가 2번 문항이 아님`);

    // 첫 문항에서 뒤로 가기를 눌러도 아무 일도 일어나면 안 된다
    tap(question.querySelector(".back-btn"));
    tap(question.querySelector(".back-btn"));
    tap(question.querySelector(".back-btn"));
    if (question.querySelector(".q-step").textContent !== `1 / ${t.questions.length}`)
      problems.push(`${t.id}: 첫 문항에서 뒤로 가기가 범위를 벗어남`);
  });
  return problems;
});

check("뒤로 가서 다시 고르면 최종 결과에 반영된다", async () => {
  const problems = [];
  for (const t of TESTS.slice(0, 8)) {
    const page = boot(`quiz-${t.id}.html`, "");
    const question = page.byId("quiz-question");
    page.byId("quiz-intro").querySelector(".start-btn").click();
    const opts = () => question.querySelector(".option-list").children;

    const tap = (el) => {
      el.click();
      page.flushTimers();
    };
    const chosen = [];
    tap(opts()[0]);
    chosen.push(t.questions[0].options[0].value);
    tap(question.querySelector(".back-btn"));
    chosen.pop();

    for (let i = 0; i < t.questions.length; i++) {
      const last = t.questions[i].options.length - 1;
      chosen.push(t.questions[i].options[last].value);
      tap(opts()[last]);
    }
    await settle();
    const saved = JSON.parse(page.window.sessionStorage.getItem("mindpick_result") || "null");
    if (!saved || JSON.stringify(saved.answers) !== JSON.stringify(chosen))
      problems.push(`${t.id}: 뒤로 간 뒤 다시 고른 답변이 제대로 반영되지 않음`);
  }
  return problems;
});

check("존재하지 않는 테스트 id 는 '찾을 수 없어요' 화면을 보여준다", () => {
  const problems = [];
  const page = boot("quiz.html", "?id=존재하지않는테스트");
  const nf = page.byId("quiz-not-found");
  if (!nf || nf.style.display !== "block") problems.push("quiz-not-found 가 표시되지 않음");
  if (page.consoleErrors.length) problems.push(`콘솔 에러: ${page.consoleErrors[0]}`);
  return problems;
});

/* =================================================== 결과 화면 (result.js) */

group("RESULT 결과 화면");

function resultPage(test, answers, opts) {
  const computed = utils.mpComputeResult(test, answers);
  return boot("result.html", (opts && opts.search) || `?id=${test.id}`, {
    session:
      opts && opts.noSession
        ? undefined
        : {
            mindpick_result: JSON.stringify({ testId: test.id, answers, ...computed }),
          },
    ...opts,
  });
}

check("세션에 저장된 결과로 결과 카드가 정확히 렌더링된다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const answers = t.questions.map((q, i) => q.options[i % q.options.length].value);
    const info = utils.mpResultInfo(t, utils.mpComputeResult(t, answers));
    const page = resultPage(t, answers);
    const card = page.byId("result-card");
    const nf = page.byId("result-not-found");

    if (nf && nf.style.display === "block") {
      problems.push(`${t.id}: 결과를 찾을 수 없다고 나옴`);
      return;
    }
    if (card.querySelector(".r-emoji").textContent !== info.emoji)
      problems.push(`${t.id}: 결과 이모지 불일치`);
    if (card.querySelector(".r-eyebrow").textContent !== t.title)
      problems.push(`${t.id}: 결과 눈썹문구가 테스트 제목이 아님`);
    if (card.querySelector("h1").textContent !== info.title)
      problems.push(`${t.id}: 결과 제목이 "${card.querySelector("h1").textContent}"`);
    if (card.querySelector("p").textContent !== info.desc)
      problems.push(`${t.id}: 결과 설명 불일치`);
    if (page.byId("retry-link").href !== `quiz-${t.id}.html`)
      problems.push(`${t.id}: 다시하기 링크가 ${page.byId("retry-link").href}`);
    if (!doc_title_ok(page.document.title, info.title, t.title))
      problems.push(`${t.id}: 문서 제목이 "${page.document.title}"`);
    if (page.consoleErrors.length) problems.push(`${t.id}: 콘솔 에러 ${page.consoleErrors[0]}`);
  });
  return problems;
});

function doc_title_ok(title, resultTitle, testTitle) {
  return title.includes(resultTitle) && title.includes(testTitle) && title.includes("MindPick");
}

check("결과 링크(?r=)만으로 들어와도 같은 결과가 나온다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const answers = t.questions.map((q, i) => q.options[(i + 1) % q.options.length].value);
    const info = utils.mpResultInfo(t, utils.mpComputeResult(t, answers));
    const r = utils.mpEncodeAnswers(answers);
    const page = boot("result.html", `?id=${t.id}&r=${r}`);
    const card = page.byId("result-card");
    const nf = page.byId("result-not-found");
    if (nf && nf.style.display === "block") {
      problems.push(`${t.id}: 공유 링크로 들어왔는데 결과를 못 찾음`);
      return;
    }
    if (card.querySelector("h1").textContent !== info.title)
      problems.push(`${t.id}: 공유 링크 결과가 다름`);
    // 링크 진입 시에도 세션에 다시 저장돼야 공유/비교 버튼이 계속 동작한다
    const saved = JSON.parse(page.window.sessionStorage.getItem("mindpick_result") || "null");
    if (!saved || saved.testId !== t.id)
      problems.push(`${t.id}: 공유 링크 진입 후 세션에 결과가 저장되지 않음`);
  });
  return problems;
});

check("잘못된 입력에서는 안내 화면을 보여주고 죽지 않는다", () => {
  const problems = [];
  const cases = [
    ["없는 테스트", "?id=nope"],
    ["id 없음", ""],
    ["깨진 r 파라미터", `?id=${TESTS[0].id}&r=%%%broken%%%`],
    ["답변 개수가 안 맞는 r", `?id=${TESTS[0].id}&r=${utils.mpEncodeAnswers(["a"])}`],
    ["다른 테스트의 r", `?id=${TESTS[0].id}&r=${utils.mpEncodeAnswers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])}`],
  ];
  cases.forEach(([label, search]) => {
    let page;
    try {
      page = boot("result.html", search);
    } catch (e) {
      problems.push(`${label}: 예외 발생 - ${e.message}`);
      return;
    }
    const nf = page.byId("result-not-found");
    const card = page.byId("result-card");
    if (!nf || nf.style.display !== "block") problems.push(`${label}: 안내 화면이 안 보임`);
    if (card && card.style.display !== "none") problems.push(`${label}: 결과 카드가 그대로 보임`);
    if (page.consoleErrors.length) problems.push(`${label}: 콘솔 에러 ${page.consoleErrors[0]}`);
  });
  return problems;
});

check("세션 데이터가 깨져 있어도 복구된다", () => {
  const problems = [];
  const t = TESTS[0];
  const answers = t.questions.map((q) => q.options[0].value);
  [
    "not json at all",
    "null",
    '{"testId":"다른테스트","answers":[1,2]}',
    '{"testId":"' + t.id + '","answers":"배열이아님"}',
  ].forEach((bad, i) => {
    const page = boot("result.html", `?id=${t.id}&r=${utils.mpEncodeAnswers(answers)}`, {
      session: { mindpick_result: bad },
    });
    const nf = page.byId("result-not-found");
    if (nf && nf.style.display === "block")
      problems.push(`케이스#${i}: 깨진 세션 때문에 r 파라미터 복구에 실패함`);
    if (page.consoleErrors.length) problems.push(`케이스#${i}: 콘솔 에러 ${page.consoleErrors[0]}`);
  });
  return problems;
});

check("공유 버튼: 클립보드 성공 / 거부 / 미지원 / 네이티브 공유를 모두 버틴다", async () => {
  const problems = [];
  const t = TESTS[0];
  const answers = t.questions.map((q) => q.options[0].value);
  const shareUrl = `${SITE}/result.html?id=${t.id}&r=${utils.mpEncodeAnswers(answers)}`;

  const withNav = (nav) =>
    boot("result.html", `?id=${t.id}`, {
      navigator: nav,
      session: {
        mindpick_result: JSON.stringify({
          testId: t.id,
          answers,
          ...utils.mpComputeResult(t, answers),
        }),
      },
    });

  // 1) 클립보드 복사 성공 -> 버튼 문구가 안내로 바뀌었다가 되돌아온다
  const copied = [];
  const okPage = withNav({
    userAgent: "minidom",
    clipboard: { writeText: (u) => (copied.push(String(u)), Promise.resolve()) },
  });
  const okBtn = okPage.byId("share-btn");
  const before = okBtn.textContent;
  okBtn.click();
  await settle();
  if (copied.length !== 1) problems.push(`복사 성공: writeText 호출 ${copied.length}회`);
  if (copied[0] !== shareUrl) problems.push(`복사 성공: 복사된 주소가 ${copied[0]}`);
  if (okBtn.textContent === before) problems.push("복사 성공: 버튼 문구가 안 바뀜 (피드백 없음)");
  okPage.flushTimers();
  if (okBtn.textContent !== before)
    problems.push(`복사 성공: 잠시 뒤 원래 문구로 안 돌아옴 (${okBtn.textContent})`);

  // 2) 클립보드 권한 거부 -> prompt 로 주소를 직접 보여준다
  const noPage = withNav({
    userAgent: "minidom",
    clipboard: { writeText: () => Promise.reject(new Error("denied")) },
  });
  noPage.byId("share-btn").click();
  await settle();
  await settle();
  if (noPage.prompts.length !== 1) problems.push("복사 거부: 안내 prompt 가 안 뜸");
  else if (noPage.prompts[0][1] !== shareUrl)
    problems.push(`복사 거부: prompt 주소가 ${noPage.prompts[0][1]}`);
  if (noPage.consoleErrors.length) problems.push(`복사 거부: 콘솔 에러 ${noPage.consoleErrors[0]}`);

  // 3) 클립보드 API 자체가 없는 인앱 브라우저
  const oldPage = withNav({ userAgent: "minidom" });
  oldPage.byId("share-btn").click();
  await settle();
  if (oldPage.prompts.length !== 1) problems.push("클립보드 미지원: 안내 prompt 가 안 뜸");
  if (oldPage.consoleErrors.length)
    problems.push(`클립보드 미지원: 콘솔 에러 ${oldPage.consoleErrors[0]}`);

  // 4) 네이티브 공유 시트가 있는 모바일
  const shared = [];
  const navPage = withNav({
    userAgent: "minidom",
    share: (data) => (shared.push(data), Promise.resolve()),
    clipboard: { writeText: () => Promise.resolve() },
  });
  navPage.byId("share-btn").click();
  await settle();
  if (shared.length !== 1) problems.push("네이티브 공유: navigator.share 가 안 불림");
  else if (shared[0].url !== shareUrl)
    problems.push(`네이티브 공유: 주소가 ${shared[0].url}`);
  if (navPage.prompts.length) problems.push("네이티브 공유: 불필요한 prompt 가 떴음");
  return problems;
});

check("함께하기 초대 영역이 compare 테스트에서만 열린다", () => {
  const problems = [];
  [TESTS.find((t) => t.compare), TESTS.find((t) => !t.compare)].forEach((t) => {
    if (!t) return;
    const answers = t.questions.map((q) => q.options[0].value);
    const page = resultPage(t, answers);
    const invite = page.byId("compare-invite");
    if (!invite) return;
    const shown = invite.style.display === "block";
    if (t.compare && !shown) problems.push(`${t.id}: compare 테스트인데 초대 영역이 안 열림`);
    if (!t.compare && shown) problems.push(`${t.id}: compare 아닌데 초대 영역이 열림`);
  });
  return problems;
});

check("추천 테스트 3개가 현재 테스트를 제외하고 채워진다", () => {
  const problems = [];
  TESTS.slice(0, 10).forEach((t) => {
    const answers = t.questions.map((q) => q.options[0].value);
    const page = resultPage(t, answers);
    const grid = page.byId("related-test-grid");
    const cards = grid.children;
    if (cards.length !== 3) problems.push(`${t.id}: 추천 카드가 ${cards.length}개`);
    cards.forEach((c) => {
      if (c.href === `quiz-${t.id}.html`) problems.push(`${t.id}: 추천에 자기 자신이 들어감`);
      if (!/^quiz-[a-z0-9-]+\.html$/.test(c.href)) problems.push(`${t.id}: 추천 링크 형식 오류 ${c.href}`);
    });
  });
  return problems;
});

/* ================================================ 커플 비교 (compare.js) */

group("COMPARE 커플 비교");

check("초대 -> 상대 응답 -> 비교 화면까지 전체 흐름이 동작한다", async () => {
  const problems = [];
  const t = TESTS.find((x) => x.compare && x.type === "category");
  const store = new Map();
  const sb = fakeSupabase(store);

  // 1) 내가 결과 페이지에서 비교 링크를 만든다
  const myAnswers = t.questions.map((q) => q.options[0].value);
  const resPage = boot("result.html", `?id=${t.id}`, {
    supabase: sb,
    session: {
      mindpick_result: JSON.stringify({
        testId: t.id,
        answers: myAnswers,
        ...utils.mpComputeResult(t, myAnswers),
      }),
    },
  });
  resPage.byId("invite-btn").click();
  await settle();
  await settle();

  if (store.size !== 1) {
    problems.push(`비교 세션이 생성되지 않음 (저장된 세션 ${store.size}개)`);
    return problems;
  }
  const code = Array.from(store.keys())[0];
  const status = resPage.byId("check-status");
  if (!status || !status.innerHTML.includes(code))
    problems.push("확인용 링크 안내에 비교 코드가 들어있지 않음");

  // 2) 상대방이 초대 링크로 퀴즈를 푼다
  const partnerPage = boot(`quiz-${t.id}.html`, `?from=${code}`, { supabase: sb });
  await settle();
  const intro = partnerPage.byId("quiz-intro");
  if (!intro.querySelector(".compare-invite-badge"))
    problems.push("초대 링크로 들어왔는데 커플 비교 모드 배지가 없음");

  intro.querySelector(".start-btn").click();
  const question = partnerPage.byId("quiz-question");
  const partnerAnswers = [];
  for (let i = 0; i < t.questions.length; i++) {
    const btns = question.querySelector(".option-list").children;
    const pick = Math.min(1, btns.length - 1);
    partnerAnswers.push(t.questions[i].options[pick].value);
    btns[pick].click();
    partnerPage.flushTimers();
  }
  await settle();
  await settle();
  await settle();

  const redirect = partnerPage.redirects[partnerPage.redirects.length - 1];
  if (redirect !== `compare.html?id=${t.id}&code=${code}&as=partner`)
    problems.push(`상대방이 비교 화면으로 가지 않음 (${redirect})`);

  // 3) 비교 화면
  const cmpPage = boot("compare.html", `?id=${t.id}&code=${code}&as=partner`, { supabase: sb });
  await settle();
  await settle();

  const content = cmpPage.byId("compare-content");
  if (content.style.display !== "block") {
    problems.push("비교 화면이 열리지 않음");
    return problems;
  }
  const myInfo = utils.mpResultInfo(t, utils.mpComputeResult(t, partnerAnswers));
  const otherInfo = utils.mpResultInfo(t, utils.mpComputeResult(t, myAnswers));
  if (cmpPage.byId("me-title").textContent !== myInfo.title)
    problems.push(`내 결과 제목이 "${cmpPage.byId("me-title").textContent}" (기대 "${myInfo.title}")`);
  if (cmpPage.byId("partner-title").textContent !== otherInfo.title)
    problems.push(`상대 결과 제목이 "${cmpPage.byId("partner-title").textContent}"`);

  const rows = cmpPage.byId("compare-list").children;
  if (rows.length !== t.questions.length)
    problems.push(`비교 행이 ${rows.length}개 (문항 ${t.questions.length}개)`);

  const expectedMatch = Math.round(
    (partnerAnswers.filter((v, i) => v === myAnswers[i]).length / t.questions.length) * 100
  );
  const badge = cmpPage.byId("match-badge").textContent;
  if (!badge.includes(`${expectedMatch}%`))
    problems.push(`일치율 배지가 "${badge}" (기대 ${expectedMatch}%)`);
  return problems;
});

check("상대가 아직 답하지 않으면 '기다리는 중' 화면을 보여준다", async () => {
  const problems = [];
  const t = TESTS.find((x) => x.compare);
  const store = new Map();
  store.set("waitcode", {
    test_id: t.id,
    initiator_answers: t.questions.map((q) => q.options[0].value),
    partner_answers: null,
  });
  const page = boot("compare.html", `?id=${t.id}&code=waitcode&as=initiator`, {
    supabase: fakeSupabase(store),
  });
  await settle();
  await settle();
  if (page.byId("compare-waiting").style.display !== "block")
    problems.push("기다리는 중 화면이 안 보임");
  if (page.byId("compare-content").style.display === "block")
    problems.push("답변이 없는데 비교 내용이 보임");
  return problems;
});

check("잘못된 비교 링크에서는 안내 화면을 보여준다", async () => {
  const problems = [];
  const t = TESTS.find((x) => x.compare);
  const store = new Map();
  store.set("wrongtest", {
    test_id: "다른테스트",
    initiator_answers: [1, 2, 3],
    partner_answers: [1, 2, 3],
  });
  store.set("badlen", {
    test_id: t.id,
    initiator_answers: [1],
    partner_answers: [1],
  });
  const sb = fakeSupabase(store);
  const cases = [
    ["코드 없음", `?id=${t.id}`],
    ["없는 코드", `?id=${t.id}&code=nosuchcode`],
    ["테스트 불일치", `?id=${t.id}&code=wrongtest`],
    ["답변 개수 불일치", `?id=${t.id}&code=badlen`],
    ["없는 테스트", `?id=nope&code=wrongtest`],
  ];
  for (const [label, search] of cases) {
    const page = boot("compare.html", search, { supabase: sb });
    await settle();
    await settle();
    if (page.byId("compare-not-found").style.display !== "block")
      problems.push(`${label}: 안내 화면이 안 보임`);
    if (page.consoleErrors.length) problems.push(`${label}: 콘솔 에러 ${page.consoleErrors[0]}`);
  }
  return problems;
});

check("Supabase 미설정(기본 배포 상태)에서도 비교 기능이 조용히 비활성된다", async () => {
  const problems = [];
  const t = TESTS.find((x) => x.compare);
  const answers = t.questions.map((q) => q.options[0].value);

  // 결과 페이지에서 초대 버튼을 눌러도 죽지 않고 안내만 바뀌어야 한다
  const resPage = resultPage(t, answers);
  resPage.byId("invite-btn").click();
  await settle();
  await settle();
  if (resPage.consoleErrors.length) problems.push(`result: 콘솔 에러 ${resPage.consoleErrors[0]}`);

  const cmpPage = boot("compare.html", `?id=${t.id}&code=abc`, {});
  await settle();
  if (cmpPage.byId("compare-not-found").style.display !== "block")
    problems.push("compare: 미설정 상태에서 안내 화면이 안 보임");

  // 초대 링크로 퀴즈에 들어와도 일반 모드로 정상 진행돼야 한다
  const quizPage = boot(`quiz-${t.id}.html`, "?from=abc", {});
  await settle();
  quizPage.byId("quiz-intro").querySelector(".start-btn").click();
  const q = quizPage.byId("quiz-question");
  for (let i = 0; i < t.questions.length; i++) {
    q.querySelector(".option-list").children[0].click();
    quizPage.flushTimers();
  }
  await settle();
  await settle();
  const url = quizPage.redirects[quizPage.redirects.length - 1];
  if (url !== `result.html?id=${t.id}`)
    problems.push(`quiz: 미설정인데 이동 주소가 ${JSON.stringify(url)}`);
  return problems;
});

/* ================================================= 오늘의 운세 (fortune.js) */

group("FORTUNE 오늘의 운세");

check("12간지 모두 운세 결과가 렌더링된다", () => {
  const problems = [];
  const page = boot("fortune.html", "");
  const btns = page.$$(".zodiac-btn");
  if (btns.length !== 12) problems.push(`띠 버튼이 ${btns.length}개 (12개여야 함)`);

  btns.forEach((btn) => {
    const id = btn.dataset.zodiac;
    btn.click();
    const result = page.byId("fortune-result-section");
    if (result.style.display !== "block") {
      problems.push(`${id}: 결과 화면이 안 열림`);
      return;
    }
    const card = result.querySelector(".result-card");
    if (!card) {
      problems.push(`${id}: 결과 카드가 없음`);
      return;
    }
    if (!card.querySelector("p").textContent.trim()) problems.push(`${id}: 총운 문구가 비어 있음`);
    ["fortune-back-btn", "fortune-share-btn", "kakao-share-btn"].forEach((bid) => {
      if (!page.byId(bid)) problems.push(`${id}: #${bid} 버튼이 생성되지 않음`);
    });
    const detail = result.querySelectorAll(".saju-detail-card");
    if (detail.length !== 3) problems.push(`${id}: 세부 운세 카드가 ${detail.length}개`);
    page.byId("fortune-back-btn").click();
    if (page.byId("fortune-picker-section").style.display !== "block")
      problems.push(`${id}: 다른 띠 보기로 돌아가지 않음`);
  });
  if (page.consoleErrors.length) problems.push(`콘솔 에러 ${page.consoleErrors[0]}`);
  return problems;
});

check("같은 띠는 같은 날 항상 같은 운세를 보여준다 (결정성)", () => {
  const problems = [];
  const texts = {};
  for (let run = 0; run < 3; run++) {
    const page = boot("fortune.html", "");
    page.$$(".zodiac-btn").forEach((btn) => {
      const id = btn.dataset.zodiac;
      btn.click();
      const body = page.byId("fortune-result-section").querySelector(".result-card p").textContent;
      if (run === 0) texts[id] = body;
      else if (texts[id] !== body) problems.push(`${id}: 실행할 때마다 총운이 달라짐`);
      page.byId("fortune-back-btn").click();
    });
  }
  // 띠마다 결과가 전부 같으면 의미가 없다
  if (new Set(Object.values(texts)).size < 6)
    problems.push(`12개 띠 중 서로 다른 총운이 ${new Set(Object.values(texts)).size}가지뿐`);
  return problems;
});

check("?z= 공유 링크로 바로 해당 띠 운세가 열린다", () => {
  const problems = [];
  ["rat", "tiger", "dragon"].forEach((z) => {
    const page = boot("fortune.html", `?z=${z}`);
    const result = page.byId("fortune-result-section");
    if (result.style.display !== "block") problems.push(`?z=${z}: 결과가 바로 안 열림`);
    if (page.byId("fortune-picker-section").style.display !== "none")
      problems.push(`?z=${z}: 선택 화면이 안 숨겨짐`);
  });
  // 잘못된 값은 무시하고 선택 화면을 보여줘야 한다
  const bad = boot("fortune.html", "?z=없는띠");
  if (bad.byId("fortune-result-section").style.display === "block")
    problems.push("?z=없는띠: 잘못된 값인데 결과가 열림");
  if (bad.consoleErrors.length) problems.push(`콘솔 에러 ${bad.consoleErrors[0]}`);
  return problems;
});

/* ==================================================== 사주 (saju.js) */

group("SAJU 사주 캐릭터");

function fillSaju(page, name, date, time) {
  page.byId("saju-name").value = name;
  page.byId("saju-date").value = date;
  if (time === null) {
    page.byId("saju-time-unknown").checked = true;
    page.byId("saju-time-unknown").dispatch("change");
  } else {
    page.byId("saju-time").value = time;
  }
  page.byId("saju-submit-btn").click();
}

check("이름/생년월일을 넣으면 사주 결과가 렌더링된다", () => {
  const problems = [];
  const page = boot("saju.html", "");
  fillSaju(page, "홍길동", "1995-03-14", "09:30");
  const result = page.byId("saju-result-section");
  if (result.style.display !== "block") {
    problems.push("결과 화면이 안 열림");
    return problems;
  }
  if (page.byId("saju-form-section").style.display !== "none") problems.push("입력 화면이 안 숨겨짐");
  const card = result.querySelector(".result-card");
  if (!card.querySelector("h1").textContent.trim()) problems.push("결과 제목이 비어 있음");
  if (!card.querySelector(".r-eyebrow").textContent.includes("홍길동"))
    problems.push("결과 상단에 이름이 안 들어감");

  const pcts = result.querySelectorAll(".saju-gauge-pct").map((el) => Number(el.textContent.replace("%", "")));
  if (pcts.length !== 3) problems.push(`게이지가 ${pcts.length}개`);
  const sum = pcts.reduce((a, b) => a + b, 0);
  if (sum !== 100) problems.push(`물/땅/하늘 합계가 ${sum}% (100%여야 함)`);
  if (pcts.some((p) => p < 0 || p > 100)) problems.push(`비율 범위 이탈: ${pcts.join("/")}`);

  ["saju-retry-btn", "saju-share-btn", "kakao-share-btn"].forEach((id) => {
    if (!page.byId(id)) problems.push(`#${id} 버튼이 생성되지 않음`);
  });
  if (result.querySelectorAll(".saju-detail-card").length !== 4)
    problems.push("세부 운세 카드가 4개가 아님");
  if (page.consoleErrors.length) problems.push(`콘솔 에러 ${page.consoleErrors[0]}`);
  return problems;
});

check("입력값 검증이 동작한다 (이름/생년월일 누락)", () => {
  const problems = [];
  const page = boot("saju.html", "");
  page.byId("saju-submit-btn").click();
  let status = page.byId("saju-form-status");
  if (!status.textContent.includes("이름")) problems.push("이름 누락 안내가 안 나옴");
  if (page.byId("saju-result-section").style.display === "block")
    problems.push("이름이 없는데 결과가 나옴");

  page.byId("saju-name").value = "홍길동";
  page.byId("saju-submit-btn").click();
  status = page.byId("saju-form-status");
  if (!status.textContent.includes("생년월일")) problems.push("생년월일 누락 안내가 안 나옴");
  if (page.byId("saju-result-section").style.display === "block")
    problems.push("생년월일이 없는데 결과가 나옴");
  return problems;
});

check("태어난 시간 모름 체크 시 시간 입력이 잠기고 결과는 정상 산출된다", () => {
  const problems = [];
  const page = boot("saju.html", "");
  const timeInput = page.byId("saju-time");
  timeInput.value = "13:00";
  page.byId("saju-time-unknown").checked = true;
  page.byId("saju-time-unknown").dispatch("change");
  if (!timeInput.disabled) problems.push("시간 입력이 비활성화되지 않음");
  if (timeInput.value !== "") problems.push("시간 입력값이 지워지지 않음");

  page.byId("saju-name").value = "김철수";
  page.byId("saju-date").value = "2000-12-01";
  page.byId("saju-submit-btn").click();
  if (page.byId("saju-result-section").style.display !== "block")
    problems.push("시간 모름 상태에서 결과가 안 나옴");
  return problems;
});

check("같은 입력은 항상 같은 결과를, 다른 입력은 다양한 결과를 낸다", () => {
  const problems = [];
  const first = {};
  const titles = new Set();
  const samples = [
    ["홍길동", "1995-03-14", "09:30"],
    ["김영희", "1988-07-22", "18:00"],
    ["이민수", "2001-11-05", ""],
    ["박지은", "1976-01-30", "03:15"],
    ["최우진", "2010-09-09", "12:00"],
    ["정하늘", "1964-05-17", "21:45"],
  ];
  for (let run = 0; run < 2; run++) {
    samples.forEach(([name, date, time], i) => {
      const page = boot("saju.html", "");
      fillSaju(page, name, date, time);
      const t = page.byId("saju-result-section").querySelector(".result-card h1").textContent;
      const g = page
        .byId("saju-result-section")
        .querySelectorAll(".saju-gauge-pct")
        .map((el) => el.textContent)
        .join("/");
      const sig = `${t}|${g}`;
      if (run === 0) {
        first[i] = sig;
        titles.add(t);
      } else if (first[i] !== sig) {
        problems.push(`${name}: 같은 입력인데 결과가 달라짐`);
      }
    });
  }
  if (titles.size < 2) problems.push(`6명을 넣었는데 결과 유형이 ${titles.size}가지뿐`);
  return problems;
});

check("공유 링크(?n=&w=&e=&s=)로 상대 결과를 볼 수 있다", () => {
  const problems = [];
  const page = boot("saju.html", "?n=%ED%99%8D%EA%B8%B8%EB%8F%99&w=50&e=30&s=20");
  const shared = page.byId("saju-shared-section");
  if (shared.style.display !== "block") {
    problems.push("공유 결과 화면이 안 열림");
    return problems;
  }
  if (page.byId("saju-form-section").style.display !== "none") problems.push("입력 화면이 안 숨겨짐");
  if (!shared.querySelector(".r-eyebrow").textContent.includes("홍길동"))
    problems.push("공유 결과에 이름이 안 들어감");
  if (!page.byId("saju-try-own-btn")) problems.push("'나도 해보기' 버튼이 없음");

  // 합이 100이 아닌 값은 무시돼야 한다
  ["?w=10&e=10&s=10", "?w=abc&e=def&s=ghi", "?w=-50&e=100&s=50"].forEach((s) => {
    const bad = boot("saju.html", s);
    if (bad.byId("saju-shared-section").style.display === "block")
      problems.push(`${s}: 잘못된 값인데 공유 결과가 열림`);
  });
  if (page.consoleErrors.length) problems.push(`콘솔 에러 ${page.consoleErrors[0]}`);
  return problems;
});

check("공유 결과에서 '나도 해보기' 후 내 결과의 카카오 버튼이 제대로 연결된다", () => {
  const problems = [];
  const page = boot("saju.html", "?n=%EC%B9%9C%EA%B5%AC&w=50&e=30&s=20");
  page.byId("saju-try-own-btn").click();
  if (page.byId("saju-form-section").style.display !== "block") problems.push("입력 화면으로 안 돌아감");

  fillSaju(page, "나", "1999-09-09", "10:00");
  const resultSection = page.byId("saju-result-section");
  const sharedSection = page.byId("saju-shared-section");
  const kakaoButtons = page.$$("#kakao-share-btn");
  if (kakaoButtons.length > 1) {
    // 같은 id 가 둘 이상 살아 있으면 getElementById 가 엉뚱한 쪽을 잡을 수 있다
    const inResult = resultSection.querySelector("#kakao-share-btn");
    if (page.byId("kakao-share-btn") !== inResult)
      problems.push(
        "내 결과의 카카오 공유 버튼 대신 숨겨진 공유화면의 버튼이 연결됨 (#kakao-share-btn 중복)"
      );
    problems.push(
      `#kakao-share-btn 가 문서에 ${kakaoButtons.length}개 존재 (숨긴 영역의 내용을 비우지 않음)`
    );
    void sharedSection;
  }
  return problems;
});

/* ================================================== 홈 화면 (main.js) */

group("INDEX 홈 화면");

check("홈의 전체 테스트 그리드와 인기 순위가 채워진다", async () => {
  const problems = [];
  const page = boot("index.html", "");
  page.fireReady();
  await settle();

  const all = page.byId("all-test-grid");
  if (all.children.length !== TESTS.length)
    problems.push(`전체 카드가 ${all.children.length}개 (테스트 ${TESTS.length}개)`);
  all.children.forEach((c, i) => {
    if (c.href !== `quiz-${TESTS[i].id}.html`) problems.push(`카드 #${i + 1} 링크가 ${c.href}`);
  });

  const popular = page.byId("popular-test-grid");
  if (popular.children.length !== 5) problems.push(`인기 순위가 ${popular.children.length}개`);

  // 조회수가 적을 때는 배지를 숨긴다
  if (popular.querySelectorAll(".rank-views").length !== 0)
    problems.push("조회수 데이터가 없는데 조회수 배지가 보임");

  const ld = page.document.head.querySelectorAll("script").filter(
    (s) => s.getAttribute("type") === "application/ld+json"
  );
  const itemList = ld.map((s) => s.textContent).find((t) => t.includes('"ItemList"'));
  if (!itemList) problems.push("ItemList 구조화 데이터가 주입되지 않음");
  else {
    const parsed = JSON.parse(itemList);
    if (parsed.itemListElement.length !== TESTS.length)
      problems.push(`ItemList 항목이 ${parsed.itemListElement.length}개`);
  }
  if (page.consoleErrors.length) problems.push(`콘솔 에러 ${page.consoleErrors[0]}`);
  return problems;
});

check("빌드로 심어둔 정적 카드와 JS가 그리는 카드가 같은 테스트를 가리킨다", async () => {
  const problems = [];
  const html = read("index.html");
  const staticLinks = [];
  const gridMatch = html.match(/BUILD:ALL_TESTS[\s\S]*?BUILD:ALL_TESTS/);
  const scope = gridMatch ? gridMatch[0] : html;
  const re = /href="quiz-([a-z0-9-]+)\.html"/g;
  let m;
  while ((m = re.exec(scope))) staticLinks.push(m[1]);

  const page = boot("index.html", "");
  page.fireReady();
  await settle();
  const jsLinks = page
    .byId("all-test-grid")
    .children.map((c) => c.href.replace(/^quiz-|\.html$/g, ""));

  if (staticLinks.length === 0) {
    problems.push("index.html 에 빌드로 심어둔 정적 카드가 없음 (검색엔진이 목록을 못 봄)");
  } else if (JSON.stringify(staticLinks) !== JSON.stringify(jsLinks)) {
    problems.push(
      `정적 카드(${staticLinks.length}개)와 JS 카드(${jsLinks.length}개)의 테스트 목록이 다름`
    );
  }
  return problems;
});

check("조회수가 들어오면 인기 순위가 조회수 순으로 재정렬된다", async () => {
  const problems = [];
  const viewMap = {};
  TESTS.forEach((t, i) => (viewMap[t.id] = (TESTS.length - i) * 100));
  const page = boot("index.html", "", {
    mpFetchTestViews: undefined,
  });
  // views.js 대신 직접 주입해서 정렬 로직만 검증한다
  page.window.mpFetchTestViews = () => Promise.resolve(viewMap);
  page.fireReady();
  await settle();
  await settle();

  const items = page.byId("popular-test-grid").children;
  const order = items.map((a) => a.href.replace(/^quiz-|\.html$/g, ""));
  const expected = TESTS.slice()
    .sort((a, b) => viewMap[b.id] - viewMap[a.id])
    .slice(0, 5)
    .map((t) => t.id);
  if (JSON.stringify(order) !== JSON.stringify(expected))
    problems.push(`순위가 ${order.join(",")} (기대 ${expected.join(",")})`);

  const badges = page.byId("popular-test-grid").querySelectorAll(".rank-views");
  if (badges.length !== 5) problems.push(`조회수 배지가 ${badges.length}개 (5개여야 함)`);
  return problems;
});

/* ==================================================== 기타 정적 페이지 */

group("PAGES 나머지 페이지");

check("모든 페이지가 스크립트 에러 없이 뜬다", async () => {
  const problems = [];
  const files = fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith(".html") && f !== "admin.html")
    .sort();
  for (const f of files) {
    let page;
    try {
      page = boot(f, f.startsWith("quiz-") || f === "index.html" ? "" : "");
    } catch (e) {
      problems.push(`${f}: 로드 중 예외 - ${e.message}`);
      continue;
    }
    try {
      page.fireReady();
    } catch (e) {
      problems.push(`${f}: DOMContentLoaded 처리 중 예외 - ${e.message}`);
    }
    await settle();
    if (page.consoleErrors.length) problems.push(`${f}: 콘솔 에러 ${page.consoleErrors[0]}`);
  }
  return problems;
});

/* ---------------------------------------------------------------- 실행 */

(async function main() {
  await runQueue();
  console.log("\n" + "=".repeat(66));
  if (failures.length === 0) {
    console.log(`전체 통과: ${passed}개 검사 모두 성공`);
    process.exit(0);
  }
  console.log(`통과 ${passed} / 실패 ${failures.length}`);
  failures.forEach((f) => console.log(`  [${f.group}] ${f.name} (${f.problems.length}건)`));
  process.exit(1);
})();
