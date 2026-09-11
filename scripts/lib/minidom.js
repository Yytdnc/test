/* 아주 작은 DOM 구현 - MindPick 페이지 스크립트를 Node에서 실제로 실행해보기 위한 것.
 * 브라우저를 완전히 흉내내지 않는다. 이 사이트의 JS가 실제로 쓰는 기능만 구현한다:
 *   getElementById / querySelector(All) / createElement / appendChild / insertBefore
 *   textContent / innerHTML / style / className / classList / dataset / value / checked
 *   addEventListener + click() / dispatch()
 * 외부 의존성 없음 (node:vm 만 사용).
 */
"use strict";

const vm = require("vm");

const VOID_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

const RAW_TAGS = new Set(["script", "style", "textarea", "title"]);

function parseAttrs(str) {
  const attrs = {};
  const re = /([\w:.-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;
  let m;
  while ((m = re.exec(str || ""))) {
    const name = m[1].toLowerCase();
    attrs[name] = m[2] !== undefined ? m[2] : m[3] !== undefined ? m[3] : m[4] !== undefined ? m[4] : "";
  }
  return attrs;
}

function decodeEntities(s) {
  return String(s)
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

class MPText {
  constructor(text) {
    this.nodeType = 3;
    this.data = text;
    this.parentNode = null;
  }
  get textContent() {
    return this.data;
  }
}

class MPElement {
  constructor(tagName, attrs, doc) {
    this.nodeType = 1;
    this.tagName = String(tagName).toUpperCase();
    this.ownerDocument = doc;
    this.parentNode = null;
    this.childNodes = [];
    this.attributes = attrs || {};
    this.style = makeStyle(this.attributes.style);
    this._listeners = Object.create(null);
    this.disabled = false;
    this.checked = this.attributes.checked !== undefined;
    this.value = this.attributes.value !== undefined ? this.attributes.value : "";
    this.dataset = {};
    Object.keys(this.attributes).forEach((k) => {
      if (k.startsWith("data-")) {
        this.dataset[k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = this.attributes[k];
      }
    });
  }

  /* ---- 속성 ---- */
  get id() {
    return this.attributes.id || "";
  }
  set id(v) {
    this.attributes.id = v;
  }
  get className() {
    return this.attributes.class || "";
  }
  set className(v) {
    this.attributes.class = v;
  }
  get type() {
    return this.attributes.type || "";
  }
  set type(v) {
    this.attributes.type = v;
  }
  get href() {
    return this.attributes.href || "";
  }
  set href(v) {
    this.attributes.href = v;
  }
  get src() {
    return this.attributes.src || "";
  }
  get classList() {
    const el = this;
    const list = () => (el.attributes.class || "").split(/\s+/).filter(Boolean);
    return {
      contains: (c) => list().includes(c),
      add: (c) => {
        const l = list();
        if (!l.includes(c)) el.attributes.class = l.concat(c).join(" ");
      },
      remove: (c) => {
        el.attributes.class = list().filter((x) => x !== c).join(" ");
      },
      toggle: (c) => {
        list().includes(c) ? el.classList.remove(c) : el.classList.add(c);
      },
    };
  }
  setAttribute(name, value) {
    this.attributes[String(name).toLowerCase()] = String(value);
  }
  getAttribute(name) {
    const v = this.attributes[String(name).toLowerCase()];
    return v === undefined ? null : v;
  }
  hasAttribute(name) {
    return this.attributes[String(name).toLowerCase()] !== undefined;
  }
  removeAttribute(name) {
    delete this.attributes[String(name).toLowerCase()];
  }

  /* ---- 트리 ---- */
  get children() {
    return this.childNodes.filter((n) => n.nodeType === 1);
  }
  get firstElementChild() {
    return this.children[0] || null;
  }
  appendChild(node) {
    if (node.parentNode) node.parentNode.removeChild(node);
    node.parentNode = this;
    this.childNodes.push(node);
    this._rawHtml = undefined;
    return node;
  }
  insertBefore(node, ref) {
    if (node.parentNode) node.parentNode.removeChild(node);
    node.parentNode = this;
    const i = ref ? this.childNodes.indexOf(ref) : -1;
    if (i === -1) this.childNodes.push(node);
    else this.childNodes.splice(i, 0, node);
    this._rawHtml = undefined;
    return node;
  }
  removeChild(node) {
    const i = this.childNodes.indexOf(node);
    if (i !== -1) this.childNodes.splice(i, 1);
    node.parentNode = null;
    this._rawHtml = undefined;
    return node;
  }
  remove() {
    if (this.parentNode) this.parentNode.removeChild(this);
  }

  /* ---- 내용 ---- */
  get textContent() {
    return this.childNodes.map((n) => n.textContent).join("");
  }
  set textContent(v) {
    this.childNodes = [];
    if (v !== "" && v !== null && v !== undefined) this.appendChild(new MPText(String(v)));
  }
  set innerHTML(html) {
    this.childNodes = [];
    parseInto(String(html), this, this.ownerDocument);
    // parseInto 안의 appendChild 가 캐시를 지우므로 반드시 파싱 뒤에 넣는다
    this._rawHtml = String(html);
  }
  get innerHTML() {
    return this._rawHtml !== undefined ? this._rawHtml : serialize(this);
  }

  /* ---- 선택자 ---- */
  querySelector(sel) {
    return querySelectorAll(this, sel, true)[0] || null;
  }
  querySelectorAll(sel) {
    return querySelectorAll(this, sel, false);
  }

  /* ---- 이벤트 ---- */
  addEventListener(type, fn) {
    (this._listeners[type] || (this._listeners[type] = [])).push(fn);
  }
  removeEventListener(type, fn) {
    const l = this._listeners[type];
    if (l) this._listeners[type] = l.filter((f) => f !== fn);
  }
  dispatch(type, extra) {
    const ev = Object.assign(
      { type, target: this, currentTarget: this, preventDefault() {}, stopPropagation() {} },
      extra || {}
    );
    (this._listeners[type] || []).slice().forEach((fn) => fn.call(this, ev));
    return ev;
  }
  click() {
    return this.dispatch("click");
  }
  focus() {}
  scrollIntoView() {}
  getBoundingClientRect() {
    return { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 };
  }
}

function makeStyle(cssText) {
  const style = {};
  String(cssText || "")
    .split(";")
    .forEach((d) => {
      const i = d.indexOf(":");
      if (i === -1) return;
      const prop = d.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      if (prop) style[prop] = d.slice(i + 1).trim();
    });
  style.setProperty = function (p, v) {
    style[p.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = v;
  };
  return style;
}

function serialize(el) {
  return el.childNodes
    .map((n) => (n.nodeType === 3 ? n.data : `<${n.tagName.toLowerCase()}>${serialize(n)}</${n.tagName.toLowerCase()}>`))
    .join("");
}

/* ------------------------------------------------------------- 선택자 */

function parseSelector(sel) {
  // "tag#id.cls[attr=\"v\"]" 형태 하나만 지원 (자손 결합자 없음)
  const m = String(sel).trim().match(
    /^([a-zA-Z][\w-]*)?((?:[#.][\w-]+)*)((?:\[[^\]]+\])*)$/
  );
  if (!m) return null;
  const tag = m[1] ? m[1].toUpperCase() : null;
  const ids = [];
  const classes = [];
  (m[2] || "").replace(/([#.])([\w-]+)/g, (_, k, v) => {
    (k === "#" ? ids : classes).push(v);
    return "";
  });
  const attrs = [];
  (m[3] || "").replace(/\[([\w:-]+)(?:([~^$*|]?=)"?([^\]"]*)"?)?\]/g, (_, name, op, val) => {
    attrs.push({ name: name.toLowerCase(), op, val });
    return "";
  });
  return { tag, ids, classes, attrs };
}

function matches(el, parsed) {
  if (el.nodeType !== 1) return false;
  if (parsed.tag && el.tagName !== parsed.tag) return false;
  if (parsed.ids.some((id) => el.id !== id)) return false;
  const cls = (el.attributes.class || "").split(/\s+/).filter(Boolean);
  if (parsed.classes.some((c) => !cls.includes(c))) return false;
  return parsed.attrs.every((a) => {
    const v = el.attributes[a.name];
    if (v === undefined) return false;
    if (!a.op) return true;
    if (a.op === "=") return v === a.val;
    if (a.op === "^=") return v.startsWith(a.val);
    if (a.op === "$=") return v.endsWith(a.val);
    if (a.op === "*=") return v.includes(a.val);
    return true;
  });
}

function querySelectorAll(root, sel, firstOnly) {
  // "a b c" 같은 자손 결합자를 지원한다 (">" 등 다른 결합자는 쓰지 않으므로 미지원)
  const groups = String(sel)
    .split(",")
    .map((s) => s.trim().split(/\s+/).map(parseSelector))
    .filter((parts) => parts.length && parts.every(Boolean));
  if (groups.length === 0) {
    throw new Error(`minidom: 지원하지 않는 선택자입니다: ${sel}`);
  }

  // el 이 parts 를 만족하는지: 마지막 조각은 el 자신, 나머지는 조상에서 순서대로 찾는다
  function matchChain(el, parts) {
    if (!matches(el, parts[parts.length - 1])) return false;
    let pi = parts.length - 2;
    let node = el.parentNode;
    while (pi >= 0 && node && node !== root.parentNode) {
      if (node.nodeType === 1 && matches(node, parts[pi])) pi--;
      node = node.parentNode;
    }
    return pi < 0;
  }

  const out = [];
  let done = false;
  (function walk(node) {
    for (const child of node.childNodes) {
      if (done) return;
      if (child.nodeType !== 1) continue;
      if (groups.some((parts) => matchChain(child, parts))) {
        out.push(child);
        if (firstOnly) {
          done = true;
          return;
        }
      }
      walk(child);
    }
  })(root);
  return out;
}

/* --------------------------------------------------------------- 파서 */

const TAG_RE =
  /<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<!(?:doctype|DOCTYPE)[^>]*>|<\/([a-zA-Z][\w:-]*)\s*>|<([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;

function parseInto(html, root, doc) {
  const stack = [root];
  const top = () => stack[stack.length - 1];
  let last = 0;
  let m;
  TAG_RE.lastIndex = 0;

  while ((m = TAG_RE.exec(html))) {
    if (m.index > last) {
      const text = html.slice(last, m.index);
      if (text.trim()) top().appendChild(new MPText(decodeEntities(text)));
    }
    last = TAG_RE.lastIndex;

    const [full, closeTag, openTag, attrStr, selfClose] = m;
    if (full.startsWith("<!")) continue;

    if (closeTag) {
      const name = closeTag.toUpperCase();
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tagName === name) {
          stack.length = i;
          break;
        }
      }
      continue;
    }

    const name = openTag.toLowerCase();
    const el = new MPElement(name, parseAttrs(attrStr), doc);
    top().appendChild(el);

    if (VOID_TAGS.has(name) || selfClose === "/") continue;

    if (RAW_TAGS.has(name)) {
      // 원시 텍스트 태그: 대응하는 닫는 태그까지 통째로 텍스트로 넣는다
      const closeRe = new RegExp(`</${name}\\s*>`, "i");
      const rest = html.slice(last);
      const cm = rest.match(closeRe);
      const raw = cm ? rest.slice(0, cm.index) : rest;
      if (raw) el.appendChild(new MPText(raw));
      el._rawText = raw;
      last = last + raw.length + (cm ? cm[0].length : 0);
      TAG_RE.lastIndex = last;
      continue;
    }

    stack.push(el);
  }

  if (last < html.length) {
    const text = html.slice(last);
    if (text.trim()) top().appendChild(new MPText(decodeEntities(text)));
  }
  return root;
}

/* ------------------------------------------------------------- 문서 */

class MPDocument {
  constructor(html) {
    this.nodeType = 9;
    this.childNodes = [];
    this.title = "";
    this.readyState = "loading";
    this._listeners = Object.create(null);
    this.ownerDocument = this;
    parseInto(html, this, this);
    this.documentElement = this.querySelector("html") || this;
    this.head = this.querySelector("head") || this.documentElement;
    this.body = this.querySelector("body") || this.documentElement;
    const t = this.querySelector("title");
    if (t) this.title = t.textContent;
  }
  createElement(tag) {
    return new MPElement(tag, {}, this);
  }
  createTextNode(t) {
    return new MPText(String(t));
  }
  getElementById(id) {
    return querySelectorAll(this, `#${id}`, true)[0] || null;
  }
  querySelector(sel) {
    return querySelectorAll(this, sel, true)[0] || null;
  }
  querySelectorAll(sel) {
    return querySelectorAll(this, sel, false);
  }
  appendChild(node) {
    node.parentNode = this;
    this.childNodes.push(node);
    return node;
  }
  removeChild(node) {
    const i = this.childNodes.indexOf(node);
    if (i !== -1) this.childNodes.splice(i, 1);
    return node;
  }
  addEventListener(type, fn) {
    (this._listeners[type] || (this._listeners[type] = [])).push(fn);
  }
  removeEventListener(type, fn) {
    const l = this._listeners[type];
    if (l) this._listeners[type] = l.filter((f) => f !== fn);
  }
  fire(type) {
    this.readyState = "complete";
    (this._listeners[type] || []).slice().forEach((fn) => fn.call(this, { type, target: this }));
  }
}

/* --------------------------------------------------------- 페이지 환경 */

function makeStorage() {
  const data = new Map();
  return {
    getItem: (k) => (data.has(String(k)) ? data.get(String(k)) : null),
    setItem: (k, v) => data.set(String(k), String(v)),
    removeItem: (k) => data.delete(String(k)),
    clear: () => data.clear(),
    get length() {
      return data.size;
    },
    key: (i) => Array.from(data.keys())[i] ?? null,
  };
}

/* 페이지 하나를 만든다.
 *   html   - 문서 HTML
 *   url    - 이 페이지의 주소 (location.search/pathname/origin 계산용)
 *   extras - 컨텍스트에 추가로 넣을 전역 (Supabase 스텁 등)
 */
function createPage(html, url, extras) {
  const u = new URL(url);
  const doc = new MPDocument(html);

  const redirects = [];
  const consoleErrors = [];
  const clipboardWrites = [];
  const prompts = [];

  const location = {
    get href() {
      return u.href;
    },
    set href(v) {
      redirects.push(String(v));
    },
    assign(v) {
      redirects.push(String(v));
    },
    replace(v) {
      redirects.push(String(v));
    },
    reload() {},
    get origin() {
      return u.origin;
    },
    get pathname() {
      return u.pathname;
    },
    get search() {
      return u.search;
    },
    get hash() {
      return u.hash;
    },
    get host() {
      return u.host;
    },
    get hostname() {
      return u.hostname;
    },
    get protocol() {
      return u.protocol;
    },
    toString() {
      return u.href;
    },
  };

  const historyCalls = [];

  // 가상 타이머: 실제로 기다리지 않고 flushTimers() 로 시간을 넘긴다
  let timerSeq = 0;
  const timers = new Map();
  function addTimer(fn, ms) {
    const id = ++timerSeq;
    timers.set(id, { fn, ms: Number(ms) || 0, seq: id });
    return id;
  }
  function flushTimers(maxRuns) {
    let runs = 0;
    const limit = maxRuns || 1000;
    while (timers.size && runs < limit) {
      const next = Array.from(timers.values()).sort((a, b) => a.ms - b.ms || a.seq - b.seq)[0];
      timers.delete(next.seq);
      try {
        next.fn();
      } catch (e) {
        consoleErrors.push("timer: " + (e && e.message));
      }
      runs++;
    }
    return runs;
  }

  const sandbox = {
    document: doc,
    location,
    history: {
      replaceState: (s, t, url2) => historyCalls.push(["replaceState", url2]),
      pushState: (s, t, url2) => historyCalls.push(["pushState", url2]),
      back: () => historyCalls.push(["back"]),
    },
    navigator: {
      userAgent: "minidom",
      // 실제 https 브라우저에는 클립보드 API가 있다. 없는 환경(인앱 브라우저 등)을
      // 재현하려면 createPage 의 extras 로 navigator 를 통째로 덮어쓰면 된다.
      clipboard: {
        writeText: (t) => {
          clipboardWrites.push(String(t));
          return Promise.resolve();
        },
      },
      share: undefined,
    },
    sessionStorage: makeStorage(),
    localStorage: makeStorage(),
    URLSearchParams,
    URL,
    Promise,
    setTimeout: addTimer,
    clearTimeout: (id) => timers.delete(id),
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: (fn) => addTimer(fn, 0),
    btoa: (s) => Buffer.from(s, "binary").toString("base64"),
    atob: (s) => Buffer.from(s, "base64").toString("binary"),
    alert: () => {},
    prompt: (msg, value) => {
      prompts.push([msg, value]);
      return null;
    },
    confirm: () => true,
    fetch: () => Promise.reject(new Error("network disabled in tests")),
    console: {
      log: () => {},
      warn: () => {},
      info: () => {},
      debug: () => {},
      error: (...a) => consoleErrors.push(a.map(String).join(" ")),
    },
    dataLayer: [],
    gtag: () => {},
  };
  Object.assign(sandbox, extras || {});
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;

  const ctx = vm.createContext(sandbox);

  return {
    document: doc,
    window: sandbox,
    location,
    redirects,
    historyCalls,
    consoleErrors,
    clipboardWrites,
    prompts,
    /* 페이지가 예약해둔 setTimeout 을 지연 시간 순서대로 전부 실행한다 */
    flushTimers,
    pendingTimers: () => timers.size,
    /* 스크립트 소스를 이 페이지 컨텍스트에서 실행 (const 선언이 이후 스크립트에도 보인다) */
    run(src, filename) {
      vm.runInContext(src, ctx, { filename: filename || "inline" });
    },
    $(sel) {
      return doc.querySelector(sel);
    },
    $$(sel) {
      return doc.querySelectorAll(sel);
    },
    byId(id) {
      return doc.getElementById(id);
    },
    fireReady() {
      doc.fire("DOMContentLoaded");
    },
  };
}

module.exports = { createPage, MPDocument, MPElement, MPText, parseInto };
