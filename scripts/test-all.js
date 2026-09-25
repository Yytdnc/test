#!/usr/bin/env node
/* MindPick 전 기능 자가 검증 스위트 (의존성 없음)
 *
 * 실행: node scripts/test-all.js
 *
 * 검사 범위
 *  [DATA]  tests-data.js 무결성 - 필수 필드, 도달 불가능한 결과, 점수 구간 커버리지
 *  [LOGIC] 결과 계산 엔진 - 전 조합 스윕, 인코딩 왕복, 중복 구현 간 드리프트
 *  [BUILD] quiz-*.html / tests.html / index.html 이 현재 데이터로 재생성한 것과 같은지
 *  [LINK]  로컬 링크/스크립트 경로, sitemap, canonical, noindex, 메타태그
 *  [DOM]   JS가 참조하는 #id / .class 가 그 JS를 로드하는 페이지에 실제로 있는지
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://www.mindpick.net";

/* ---------------------------------------------------------------- 러너 */

let passed = 0;
const failures = [];
let currentGroup = "";

function group(name) {
  currentGroup = name;
}

function check(name, fn) {
  let problems;
  try {
    problems = fn();
  } catch (e) {
    problems = [`예외 발생: ${e && e.stack ? e.stack.split("\n")[0] : e}`];
  }
  problems = (problems || []).filter(Boolean);
  if (problems.length === 0) {
    passed++;
    console.log(`  ok   ${name}`);
  } else {
    failures.push({ group: currentGroup, name, problems });
    console.log(`  FAIL ${name}`);
    problems.slice(0, 12).forEach((p) => console.log(`         - ${p}`));
    if (problems.length > 12) console.log(`         ... 외 ${problems.length - 12}건`);
  }
}

/* ------------------------------------------------------------ 파일 로드 */

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));

const testsDataSrc = read("js/tests-data.js");
const TESTS = new Function(`${testsDataSrc}\nreturn TESTS;`)();
const { CORE_TEST_IDS } = require("./core-tests.js");

const compareUtilsSrc = read("js/compare-utils.js");
const utils = new Function(
  `${compareUtilsSrc}\nreturn { mpComputeResult, mpResultInfo, mpEncodeAnswers, mpDecodeAnswers };`
)();

const HTML_FILES = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".html"))
  .sort();

const htmlSrc = {};
HTML_FILES.forEach((f) => (htmlSrc[f] = read(f)));

/* 점수형 테스트가 낼 수 있는 최소/최대 총점 */
function scoreBounds(test) {
  let min = 0;
  let max = 0;
  test.questions.forEach((q) => {
    const vals = q.options.map((o) => o.value);
    min += Math.min.apply(null, vals);
    max += Math.max.apply(null, vals);
  });
  return { min, max };
}

/* 테스트별 결과 항목(카테고리/점수구간)을 공통 형태로 */
function resultEntries(test) {
  if (test.type === "score") {
    return (test.scoreRanges || []).map((r, i) => ({ key: `range#${i}`, value: r }));
  }
  return Object.keys(test.categories || {}).map((k) => ({ key: k, value: test.categories[k] }));
}

/* ============================================================== [DATA] */

group("DATA");
console.log("\n[DATA] 테스트 데이터 무결성");

check("테스트 ID가 유일하고 형식이 올바르다", () => {
  const problems = [];
  const seen = new Set();
  TESTS.forEach((t) => {
    if (seen.has(t.id)) problems.push(`ID 중복: ${t.id}`);
    seen.add(t.id);
    if (!/^[a-z0-9-]+$/.test(t.id || "")) problems.push(`ID 형식 오류: ${JSON.stringify(t.id)}`);
  });
  return problems;
});

check("모든 테스트에 필수 필드가 채워져 있다", () => {
  const required = ["id", "tag", "title", "emoji", "tagline", "type", "intro", "insight"];
  const problems = [];
  TESTS.forEach((t) => {
    required.forEach((f) => {
      if (typeof t[f] !== "string" || t[f].trim() === "") {
        problems.push(`${t.id}: ${f} 누락/빈값`);
      }
    });
    if (!["category", "score", "mbti"].includes(t.type)) {
      problems.push(`${t.id}: 알 수 없는 type=${t.type}`);
    }
  });
  return problems;
});

check("문항과 보기 구조가 올바르다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    if (!Array.isArray(t.questions) || t.questions.length === 0) {
      problems.push(`${t.id}: questions 없음`);
      return;
    }
    t.questions.forEach((q, i) => {
      if (typeof q.text !== "string" || !q.text.trim()) problems.push(`${t.id} Q${i + 1}: text 없음`);
      if (!Array.isArray(q.options) || q.options.length < 2) {
        problems.push(`${t.id} Q${i + 1}: 보기가 2개 미만`);
        return;
      }
      q.options.forEach((o, j) => {
        if (typeof o.text !== "string" || !o.text.trim())
          problems.push(`${t.id} Q${i + 1}-${j + 1}: 보기 text 없음`);
        if (o.value === undefined || o.value === null)
          problems.push(`${t.id} Q${i + 1}-${j + 1}: 보기 value 없음`);
      });
      const texts = q.options.map((o) => o.text);
      if (new Set(texts).size !== texts.length)
        problems.push(`${t.id} Q${i + 1}: 같은 보기 문구가 중복`);
    });
  });
  return problems;
});

check("모든 결과 항목에 title/emoji/desc 가 있다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const entries = resultEntries(t);
    if (entries.length === 0) problems.push(`${t.id}: 결과 항목이 하나도 없음`);
    entries.forEach(({ key, value }) => {
      if (!value) {
        problems.push(`${t.id}/${key}: 결과 객체 없음`);
        return;
      }
      ["title", "emoji", "desc"].forEach((f) => {
        if (typeof value[f] !== "string" || !value[f].trim())
          problems.push(`${t.id}/${key}: ${f} 누락`);
      });
      if (typeof value.desc === "string" && value.desc.trim().length < 30)
        problems.push(`${t.id}/${key}: desc 가 너무 짧음 (${value.desc.trim().length}자)`);
    });
  });
  return problems;
});

check("category형: 모든 보기 값이 실제 카테고리를 가리킨다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "category").forEach((t) => {
    const keys = new Set(Object.keys(t.categories || {}));
    t.questions.forEach((q, i) => {
      q.options.forEach((o, j) => {
        if (!keys.has(o.value))
          problems.push(`${t.id} Q${i + 1}-${j + 1}: value "${o.value}" 에 해당하는 카테고리 없음`);
      });
    });
  });
  return problems;
});

check("category형: 도달할 수 없는 카테고리가 없다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "category").forEach((t) => {
    const used = new Set();
    t.questions.forEach((q) => q.options.forEach((o) => used.add(o.value)));
    Object.keys(t.categories || {}).forEach((k) => {
      if (!used.has(k)) problems.push(`${t.id}: 카테고리 "${k}" 를 고를 수 있는 보기가 없음`);
    });
  });
  return problems;
});

check("score형: 모든 보기 값이 숫자다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "score").forEach((t) => {
    t.questions.forEach((q, i) => {
      q.options.forEach((o, j) => {
        if (typeof o.value !== "number" || !Number.isFinite(o.value))
          problems.push(`${t.id} Q${i + 1}-${j + 1}: value 가 숫자가 아님 (${o.value})`);
      });
    });
  });
  return problems;
});

check("score형: 점수 구간이 가능한 총점 전체를 빈틈/겹침 없이 덮는다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "score").forEach((t) => {
    if (!Array.isArray(t.scoreRanges) || t.scoreRanges.length === 0) {
      problems.push(`${t.id}: scoreRanges 없음`);
      return;
    }
    t.scoreRanges.forEach((r, i) => {
      if (typeof r.min !== "number" || typeof r.max !== "number")
        problems.push(`${t.id} range#${i}: min/max 가 숫자가 아님`);
      else if (r.min > r.max) problems.push(`${t.id} range#${i}: min > max (${r.min} > ${r.max})`);
    });
    const { min, max } = scoreBounds(t);
    for (let s = min; s <= max; s++) {
      const hits = t.scoreRanges.filter((r) => s >= r.min && s <= r.max);
      if (hits.length === 0) problems.push(`${t.id}: 총점 ${s} 를 받는 구간이 없음 (빈틈)`);
      else if (hits.length > 1) problems.push(`${t.id}: 총점 ${s} 가 ${hits.length}개 구간에 중복`);
    }
  });
  return problems;
});

check("mbti형: 축 정의와 16개 유형이 모두 갖춰져 있다", () => {
  const problems = [];
  const AXES = ["EI", "SN", "TF", "JP"];
  TESTS.filter((t) => t.type === "mbti").forEach((t) => {
    t.questions.forEach((q, i) => {
      if (!Array.isArray(q.axis) || q.axis.length !== 2) {
        problems.push(`${t.id} Q${i + 1}: axis 누락/형식 오류`);
        return;
      }
      if (!AXES.includes(q.axis[0] + q.axis[1]))
        problems.push(`${t.id} Q${i + 1}: 알 수 없는 축 ${q.axis.join("")}`);
    });
    AXES.forEach((ax) => {
      const n = t.questions.filter((q) => q.axis && q.axis[0] + q.axis[1] === ax).length;
      if (n === 0) problems.push(`${t.id}: ${ax} 축 문항이 하나도 없음`);
    });
    const combos = [];
    ["E", "I"].forEach((a) =>
      ["S", "N"].forEach((b) =>
        ["T", "F"].forEach((c) => ["J", "P"].forEach((d) => combos.push(a + b + c + d)))
      )
    );
    combos.forEach((k) => {
      if (!t.categories || !t.categories[k]) problems.push(`${t.id}: ${k} 유형 설명 없음`);
    });
  });
  return problems;
});

check("compare 지원 테스트는 비교 렌더가 가능한 형식이다", () => {
  const problems = [];
  // compare.js 는 문항별로 options.find(o => o.value === 답) 으로 보기 문구를 되찾고,
  // mpResultInfo 로 양쪽 결과 카드를 만든다. 그래서 필요한 조건은 두 가지뿐이다.
  TESTS.filter((t) => t.compare).forEach((t) => {
    if (!["category", "score", "mbti"].includes(t.type))
      problems.push(`${t.id}: compare=true 인데 mpResultInfo 가 모르는 type=${t.type}`);
    t.questions.forEach((q, i) => {
      const vals = q.options.map((o) => o.value);
      if (new Set(vals).size !== vals.length)
        problems.push(`${t.id} Q${i + 1}: 보기 값이 중복돼 비교 화면에서 엉뚱한 문구가 나옴`);
    });
  });
  return problems;
});

/* ============================================================= [LOGIC] */

group("LOGIC");
console.log("\n[LOGIC] 결과 계산 엔진");

check("category형: 어떤 답변 조합이든 유효한 결과가 나온다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "category").forEach((t) => {
    // 각 카테고리로 몰아주는 답안 + 회전 답안 + 무작위 답안
    const cases = [];
    Object.keys(t.categories).forEach((k) => {
      cases.push(
        t.questions.map((q) => {
          const hit = q.options.find((o) => o.value === k);
          return (hit || q.options[0]).value;
        })
      );
    });
    cases.push(t.questions.map((q, i) => q.options[i % q.options.length].value));
    for (let n = 0; n < 40; n++) {
      cases.push(t.questions.map((q) => q.options[(n * 7 + q.options.length) % q.options.length].value));
    }
    cases.forEach((answers, ci) => {
      const info = utils.mpResultInfo(t, utils.mpComputeResult(t, answers));
      if (!info || !info.title) problems.push(`${t.id}: case#${ci} 에서 결과를 못 찾음`);
    });
  });
  return problems;
});

check("category형: 한 카테고리로 몰아주면 그 카테고리가 결과로 나온다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "category").forEach((t) => {
    Object.keys(t.categories).forEach((k) => {
      // 해당 카테고리를 고를 수 있는 문항에서만 k 선택
      const answers = t.questions.map((q) => {
        const hit = q.options.find((o) => o.value === k);
        return hit ? hit.value : q.options[0].value;
      });
      const pickable = t.questions.filter((q) => q.options.some((o) => o.value === k)).length;
      if (pickable !== t.questions.length) return; // 전 문항에서 못 고르면 판정 대상 아님
      const got = utils.mpComputeResult(t, answers).resultKey;
      if (got !== k) problems.push(`${t.id}: 전부 "${k}" 를 골랐는데 결과가 "${got}"`);
    });
  });
  return problems;
});

check("score형: 가능한 모든 총점에서 결과가 나온다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "score").forEach((t) => {
    const { min, max } = scoreBounds(t);
    for (let s = min; s <= max; s++) {
      const info = utils.mpResultInfo(t, { score: s });
      if (!info || !info.title) problems.push(`${t.id}: 총점 ${s} 에서 결과 없음`);
    }
  });
  return problems;
});

check("mbti형: 16개 유형 모두 실제로 산출된다", () => {
  const problems = [];
  TESTS.filter((t) => t.type === "mbti").forEach((t) => {
    const produced = new Set();
    const AXES = ["EI", "SN", "TF", "JP"];
    // 축별로 +/- 를 조합해 16가지를 강제로 만들어본다
    for (let mask = 0; mask < 16; mask++) {
      const answers = t.questions.map((q) => {
        const ai = AXES.indexOf(q.axis[0] + q.axis[1]);
        return mask & (1 << ai) ? 2 : -2;
      });
      const key = utils.mpComputeResult(t, answers).resultKey;
      produced.add(key);
      const info = utils.mpResultInfo(t, { resultKey: key });
      if (!info || !info.title) problems.push(`${t.id}: 유형 ${key} 설명을 못 찾음`);
    }
    if (produced.size !== 16)
      problems.push(`${t.id}: 16개가 아닌 ${produced.size}개 유형만 산출됨`);
  });
  return problems;
});

check("같은 답변은 항상 같은 결과를 낸다 (결정성)", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const answers = t.questions.map((q, i) => q.options[i % q.options.length].value);
    const first = JSON.stringify(utils.mpComputeResult(t, answers));
    for (let n = 0; n < 5; n++) {
      if (JSON.stringify(utils.mpComputeResult(t, answers)) !== first)
        problems.push(`${t.id}: 같은 답변에 결과가 달라짐`);
    }
  });
  return problems;
});

check("결과 링크 인코딩/디코딩이 왕복한다", () => {
  const problems = [];
  const samples = [
    ["allin", "tsun", "cool"],
    [1, 2, 3, 4],
    [-2, -1, 0, 1, 2],
    ["한글값", "특수!@#$%^&*()", "emoji🎧"],
    [],
  ];
  samples.forEach((s) => {
    const back = utils.mpDecodeAnswers(decodeURIComponent(utils.mpEncodeAnswers(s)));
    if (JSON.stringify(back) !== JSON.stringify(s))
      problems.push(`왕복 실패: ${JSON.stringify(s)} -> ${JSON.stringify(back)}`);
  });
  // 깨진 입력에 대해 예외 없이 null
  ["", "!!!!", "not-base64", "YWJj"].forEach((bad) => {
    let r;
    try {
      r = utils.mpDecodeAnswers(bad);
    } catch (e) {
      problems.push(`잘못된 입력 "${bad}" 에서 예외 발생`);
      return;
    }
    if (r !== null && !Array.isArray(r)) problems.push(`잘못된 입력 "${bad}" 가 배열/null 이 아님`);
  });
  // 모든 테스트의 실제 답안으로 왕복
  TESTS.forEach((t) => {
    const answers = t.questions.map((q) => q.options[0].value);
    const back = utils.mpDecodeAnswers(decodeURIComponent(utils.mpEncodeAnswers(answers)));
    if (JSON.stringify(back) !== JSON.stringify(answers))
      problems.push(`${t.id}: 실제 답안 왕복 실패`);
  });
  return problems;
});

check("quiz.js 의 결과 계산이 compare-utils.js 와 동일하다 (중복 구현 드리프트)", () => {
  const quizSrc = read("js/quiz.js");
  const grab = (src, header) => {
    const start = src.indexOf(header);
    if (start === -1) return null;
    let i = src.indexOf("{", start);
    let depth = 0;
    for (let j = i; j < src.length; j++) {
      if (src[j] === "{") depth++;
      else if (src[j] === "}") {
        depth--;
        if (depth === 0) return src.slice(i, j + 1);
      }
    }
    return null;
  };
  const a = grab(quizSrc, "function computeResult(");
  const b = grab(compareUtilsSrc, "function mpComputeResult(");
  if (!a || !b) return ["함수 본문을 찾지 못함 (검사 자체가 낡았을 수 있음)"];
  // quiz.js 는 클로저의 test/answers 를, compare-utils 는 인자를 쓴다. 공백만 정규화해 비교.
  const norm = (s) => s.replace(/\s+/g, " ").trim();
  if (norm(a) !== norm(b))
    return [
      "quiz.js 의 computeResult 와 compare-utils.js 의 mpComputeResult 본문이 다름 " +
        "(둘 중 하나만 고치면 진행 중 결과와 결과 페이지 결과가 갈라짐)",
    ];
  return [];
});

/* ============================================================= [BUILD] */

group("BUILD");
console.log("\n[BUILD] 생성 파일 동기화");

check("테스트 목록과 quiz-*.html 파일이 1:1 대응한다", () => {
  const problems = [];
  const ids = new Set(TESTS.map((t) => t.id));

  TESTS.forEach((t) => {
    if (!exists(`quiz-${t.id}.html`)) problems.push(`quiz-${t.id}.html 파일이 없음`);
  });

  HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f)).forEach((f) => {
    const id = f.replace(/^quiz-/, "").replace(/\.html$/, "");
    if (!ids.has(id)) problems.push(`${f} 에 대응하는 테스트 데이터가 없음 (고아 페이지)`);
  });

  return problems;
});

check("애드센스 공개 범위: quiz-*.html 은 핵심 16개만 남겨야 한다", () => {
  const problems = [];
  const keep = new Set(CORE_TEST_IDS);

  HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f)).forEach((f) => {
    const id = f.replace(/^quiz-/, "").replace(/\.html$/, "");
    if (!keep.has(id)) problems.push(`${f}: 핵심 16개 범위를 벗어난 quiz-*.html 이 남아 있음`);
  });

  return problems;
});

check("애드센스 공개 범위: tests-data.js 도 핵심 16개만 담아야 한다", () => {
  /* quiz-*.html 파일만 보는 위 검사로는 부족하다. tests-data.js 는 브라우저가
   * 그대로 읽어서 index/tests 의 카드 그리드를 그리므로, 여기 남아 있으면
   * 정적 페이지가 없어도 목록에는 계속 노출된다.
   * 걸리면: node scripts/prune-scaled-quizzes.js && node scripts/build-quiz-pages.js */
  const keep = new Set(CORE_TEST_IDS);
  const problems = TESTS.filter((t) => !keep.has(t.id)).map(
    (t) => `${t.id}: 핵심 16개 밖의 테스트가 tests-data.js 에 있음 (archive 로 옮겨야 함)`
  );

  CORE_TEST_IDS.forEach((id) => {
    if (!TESTS.some((t) => t.id === id)) problems.push(`${id}: 핵심 테스트인데 tests-data.js 에 없음`);
  });

  return problems;
});

check("생성된 HTML이 현재 tests-data.js 와 동기화되어 있다", () => {
  const targets = HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f)).concat([
    "tests.html",
    "index.html",
  ]);
  const before = {};
  targets.forEach((f) => (before[f] = read(f)));
  try {
    execFileSync(process.execPath, [path.join(ROOT, "scripts/build-quiz-pages.js")], {
      cwd: ROOT,
      stdio: "pipe",
    });
  } catch (e) {
    return [`빌드 스크립트 실행 실패: ${String(e.stderr || e.message).split("\n")[0]}`];
  }
  const drifted = [];
  const after = fs
    .readdirSync(ROOT)
    .filter((f) => /^quiz-.+\.html$/.test(f) || f === "tests.html" || f === "index.html");
  after.forEach((f) => {
    const now = read(f);
    if (before[f] === undefined) {
      drifted.push(`${f}: 빌드로 새로 생겼음 (커밋 안 된 페이지)`);
      return;
    }
    if (before[f] !== now) {
      drifted.push(`${f}: 재생성 결과가 다름 (build-quiz-pages.js 재실행 필요)`);
      fs.writeFileSync(path.join(ROOT, f), before[f]); // 검사로 파일을 바꾸지 않는다
    }
  });
  return drifted;
});

/* ============================================================== [LINK] */

group("LINK");
console.log("\n[LINK] 링크 / SEO 메타");

/* href/src 중 외부·앵커·데이터 URI 를 제외한 로컬 경로만 뽑는다 */
function localRefs(html) {
  const out = [];
  const re = /\b(?:href|src)\s*=\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(html))) {
    const v = m[1].trim();
    if (!v) continue;
    if (/^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(v)) continue;
    out.push(v.split("#")[0].split("?")[0]);
  }
  return out;
}

check("모든 로컬 링크와 스크립트/스타일 경로가 실제 파일을 가리킨다", () => {
  const problems = [];
  HTML_FILES.forEach((f) => {
    localRefs(htmlSrc[f]).forEach((ref) => {
      if (!ref) return;
      const target = ref.startsWith("/") ? ref.slice(1) : ref;
      if (!exists(target)) problems.push(`${f} -> ${ref} (파일 없음)`);
    });
  });
  return problems;
});

check("sitemap.xml 과 실제 페이지가 일치한다", () => {
  const problems = [];
  const sitemap = read("sitemap.xml");
  const urls = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/g;
  let m;
  while ((m = re.exec(sitemap))) urls.push(m[1]);

  const listed = new Set();
  urls.forEach((u) => {
    if (!u.startsWith(SITE_URL)) {
      problems.push(`sitemap: 사이트 밖 URL ${u}`);
      return;
    }
    let rel = u.slice(SITE_URL.length).replace(/^\//, "");
    if (rel === "") rel = "index.html";
    listed.add(rel);
    if (!exists(rel)) problems.push(`sitemap: ${u} 에 해당하는 파일 없음`);
  });

  // 색인되어야 하는 정적 페이지가 빠졌는지 (noindex 페이지는 제외)
  HTML_FILES.forEach((f) => {
    if (/noindex/.test(htmlSrc[f])) return;
    const alias = f === "index.html" ? "index.html" : f;
    if (!listed.has(alias)) problems.push(`sitemap 누락: ${f}`);
  });
  return problems;
});

/* 색인하지 않는 동적 페이지. 주소마다 내용이 달라서 고정 canonical/og:url 을 달면 오히려 거짓말이 된다. */
const NOINDEX_PAGES = ["quiz.html", "result.html", "compare.html"];

check("각 페이지의 canonical 이 자기 자신을 가리킨다", () => {
  const problems = [];
  HTML_FILES.filter((f) => !NOINDEX_PAGES.includes(f)).forEach((f) => {
    const m = htmlSrc[f].match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
    if (!m) {
      problems.push(`${f}: canonical 없음`);
      return;
    }
    const expected = f === "index.html" ? `${SITE_URL}/` : `${SITE_URL}/${f}`;
    if (m[1] !== expected) problems.push(`${f}: canonical 이 ${m[1]} (기대값 ${expected})`);
  });
  return problems;
});

check("동적 페이지에 noindex 가 걸려 있다", () => {
  const problems = [];
  ["quiz.html", "result.html", "compare.html"].forEach((f) => {
    if (!exists(f)) {
      problems.push(`${f} 없음`);
      return;
    }
    if (!/<meta\s+name="robots"\s+content="[^"]*noindex/.test(htmlSrc[f]))
      problems.push(`${f}: noindex 메타 없음 (중복 콘텐츠로 색인될 수 있음)`);
  });
  // 반대로 정적 테스트 페이지에는 noindex 가 있으면 안 된다
  HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f)).forEach((f) => {
    if (/noindex/.test(htmlSrc[f])) problems.push(`${f}: 정적 페이지인데 noindex 가 걸려 있음`);
  });
  return problems;
});

check("정적 퀴즈 페이지에 동적 오류 셸이 남아 있지 않다", () => {
  const problems = [];
  HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f)).forEach((f) => {
    if (/quiz-not-found|테스트를 찾을 수 없어요/.test(htmlSrc[f]))
      problems.push(`${f}: 정적 페이지에 동적 오류 셸이 남아 있음`);
  });
  return problems;
});

check("모든 페이지에 title/description/OG 태그가 있다", () => {
  const problems = [];
  HTML_FILES.forEach((f) => {
    const h = htmlSrc[f];
    const title = h.match(/<title>([^<]*)<\/title>/);
    if (!title || !title[1].trim()) problems.push(`${f}: <title> 없음`);
    const desc = h.match(/<meta\s+name="description"\s+content="([^"]*)"/);
    if (!desc || !desc[1].trim()) problems.push(`${f}: meta description 없음`);
    else if (desc[1].trim().length < 20) problems.push(`${f}: description 이 너무 짧음`);
    const need = ["og:title", "og:description", "og:image"];
    if (!NOINDEX_PAGES.includes(f)) need.push("og:url");
    need.forEach((p) => {
      if (!new RegExp(`property="${p}"`).test(h)) problems.push(`${f}: ${p} 없음`);
    });
  });
  return problems;
});

check("ads.txt / robots.txt / CNAME 이 유효하다", () => {
  const problems = [];
  const ads = read("ads.txt").trim();
  if (!/^google\.com,\s*pub-\d+,\s*DIRECT,\s*[0-9a-f]+$/m.test(ads))
    problems.push(`ads.txt 형식이 이상함: ${ads.split("\n")[0]}`);
  const robots = read("robots.txt");
  if (!/Sitemap:\s*\S+sitemap\.xml/i.test(robots)) problems.push("robots.txt 에 Sitemap 줄이 없음");
  const pub = (ads.match(/pub-\d+/) || [])[0];
  if (pub) {
    HTML_FILES.filter((f) => /^quiz-.+\.html$/.test(f) || f === "index.html").forEach((f) => {
      if (htmlSrc[f].includes("adsbygoogle") && !htmlSrc[f].includes(pub))
        problems.push(`${f}: AdSense 스크립트의 pub 번호가 ads.txt(${pub}) 와 다름`);
    });
  }
  return problems;
});

/* =============================================================== [DOM] */

group("DOM");
console.log("\n[DOM] JS <-> HTML 요소 계약");

/* 각 HTML이 로드하는 로컬 js 파일 */
function scriptsOf(html) {
  const out = [];
  const re = /<script[^>]+src="((?:\.\/)?js\/[^"]+)"/g;
  let m;
  while ((m = re.exec(html))) out.push(m[1].split("?")[0].replace(/^\.\//, ""));
  return out;
}

/* JS가 문자열 리터럴로 참조하는 #id / .class 선택자 */
function selectorsOf(src) {
  const ids = new Set();
  const classes = new Set();
  let m;

  const byId = /getElementById\(\s*["'`]([^"'`]+)["'`]\s*\)/g;
  while ((m = byId.exec(src))) ids.add(m[1]);

  const qs = /querySelector(?:All)?\(\s*["']([^"']+)["']\s*\)/g;
  while ((m = qs.exec(src))) {
    const sel = m[1].trim();
    if (/^#[\w-]+$/.test(sel)) ids.add(sel.slice(1));
    else if (/^\.[\w-]+$/.test(sel)) classes.add(sel.slice(1));
    // 태그/속성 선택자(h1, meta[name=...])는 검사 대상에서 제외
  }
  return { ids, classes };
}

/* JS가 런타임에 직접 만들어 붙이는 요소 (HTML에 없는 게 정상) */
const DYNAMIC_OK = new Set([
  "compare-invite-badge",
  "option-btn",
  "test-card",
  "thumb",
  "tag",
  // quiz.js는 notFoundEl이 없어도 안전하게 동작하도록 작성되어 있으므로
  // 정적 quiz-<id>.html에서는 오류 셸을 제거해도 검사에서 통과시킨다.
  "quiz-not-found",
]);

const pageScripts = {};
HTML_FILES.forEach((f) => (pageScripts[f] = scriptsOf(htmlSrc[f])));

check("JS가 참조하는 #id 가 그 JS를 로드하는 페이지에 존재한다", () => {
  const problems = [];
  HTML_FILES.forEach((f) => {
    const htmlIds = new Set();
    let m;
    const re = /\bid="([^"]+)"/g;
    while ((m = re.exec(htmlSrc[f]))) htmlIds.add(m[1]);

    pageScripts[f].forEach((js) => {
      if (!exists(js)) {
        problems.push(`${f}: ${js} 파일이 없음`);
        return;
      }
      const src = read(js);
      const { ids } = selectorsOf(src);
      // 그 JS 가 스스로 만들어 붙이는 id 는 HTML 에 없는 게 정상이다
      const madeHere = new Set();
      let mm;
      const mk = /\bid="([\w-]+)"/g;
      while ((mm = mk.exec(src))) madeHere.add(mm[1]);
      ids.forEach((id) => {
        if (!htmlIds.has(id) && !DYNAMIC_OK.has(id) && !madeHere.has(id))
          problems.push(`${f}: ${js} 가 #${id} 를 찾는데 페이지에도 없고 JS 도 만들지 않음`);
      });
    });
  });
  return problems;
});

check("JS가 참조하는 .class 가 그 JS를 로드하는 페이지에 존재한다", () => {
  const problems = [];
  HTML_FILES.forEach((f) => {
    const htmlClasses = new Set();
    let m;
    const re = /\bclass="([^"]+)"/g;
    while ((m = re.exec(htmlSrc[f]))) m[1].split(/\s+/).forEach((c) => c && htmlClasses.add(c));

    pageScripts[f].forEach((js) => {
      if (!exists(js)) return;
      const { classes } = selectorsOf(read(js));
      classes.forEach((c) => {
        if (!htmlClasses.has(c) && !DYNAMIC_OK.has(c))
          problems.push(`${f}: ${js} 가 .${c} 를 찾는데 페이지에 없음`);
      });
    });
  });
  return problems;
});

check("스크립트 로드 순서가 의존성을 만족한다", () => {
  const problems = [];
  // 정의 -> 사용 순서가 지켜져야 하는 쌍
  const DEPS = [
    ["js/tests-registry.js", "js/tests-data.js"],
    ["js/quiz.js", "js/tests-registry.js"],
    ["js/quiz.js", "js/compare-utils.js"],
    ["js/result.js", "js/tests-registry.js"],
    ["js/result.js", "js/compare-utils.js"],
    ["js/compare.js", "js/tests-registry.js"],
    ["js/compare.js", "js/compare-utils.js"],
    ["js/main.js", "js/tests-registry.js"],
    ["js/views.js", "js/supabase-config.js"],
    ["js/compare-session.js", "js/supabase-config.js"],
  ];
  // compare-utils.js 는 typeof KAKAO_JS_KEY 가드로 보호돼 있어 필수 의존이 아니다.
  // 다만 카카오 공유 버튼을 실제로 둔 페이지는 키를 불러오지 않으면 버튼이 조용히 죽는다.
  HTML_FILES.forEach((f) => {
    if (!/id="kakao-share-btn"/.test(htmlSrc[f])) return;
    if (!pageScripts[f].includes("js/kakao-config.js"))
      problems.push(`${f}: 카카오 공유 버튼이 있는데 js/kakao-config.js 를 안 불러옴`);
  });
  HTML_FILES.forEach((f) => {
    const list = pageScripts[f];
    DEPS.forEach(([user, dep]) => {
      const ui = list.indexOf(user);
      if (ui === -1) return;
      const di = list.indexOf(dep);
      if (di === -1) problems.push(`${f}: ${user} 를 쓰는데 ${dep} 를 안 불러옴`);
      else if (di > ui) problems.push(`${f}: ${dep} 가 ${user} 보다 나중에 로드됨`);
    });
  });
  return problems;
});

check("quiz-*.html 이 자기 테스트 ID를 정확히 넘긴다", () => {
  const problems = [];
  TESTS.forEach((t) => {
    const f = `quiz-${t.id}.html`;
    if (!exists(f)) return;
    const m = htmlSrc[f].match(/window\.MP_TEST_ID\s*=\s*"([^"]+)"/);
    if (!m) problems.push(`${f}: MP_TEST_ID 가 없음 (테스트가 시작되지 않음)`);
    else if (m[1] !== t.id) problems.push(`${f}: MP_TEST_ID 가 "${m[1]}" (기대값 "${t.id}")`);
  });
  return problems;
});

/* ============================================================== 결과 */

console.log("\n" + "=".repeat(66));
if (failures.length === 0) {
  console.log(`전체 통과: ${passed}개 검사 모두 성공`);
  process.exit(0);
}
console.log(`통과 ${passed} / 실패 ${failures.length}`);
failures.forEach((f) => console.log(`  [${f.group}] ${f.name} (${f.problems.length}건)`));
process.exit(1);
