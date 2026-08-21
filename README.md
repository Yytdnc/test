# MindPick — 심리테스트 사이트

poomang.com 스타일을 참고한 심리테스트 사이트입니다. 순수 정적 HTML/CSS/JS로 만들어져 있어 별도 서버 없이 GitHub Pages로 바로 배포할 수 있습니다.

## 구성

```
index.html            홈 (테스트 목록)
quiz-<id>.html         테스트별 정적 랜딩 페이지 (SEO용, scripts/build-quiz-pages.js로 생성됨)
quiz.html              테스트 진행 엔진 (?id=테스트ID, 구버전 링크용 폴백)
result.html            결과 페이지
compare.html           커플/친구 답변 비교 결과 페이지
saju.html              이름/생년월일/태어난시각 기반 미니 사주 캐릭터 테스트
fortune.html           띠 선택 기반 오늘의 운세 (날짜별로 매일 바뀜)
privacy.html           개인정보처리방침 (애드센스 승인에 필요)
css/style.css          디자인
js/tests-data.js       테스트 문항/결과 데이터 (여기만 수정하면 테스트 추가/수정 가능)
js/main.js             홈 화면 카드 렌더링
js/quiz.js             질문 진행 및 채점 엔진
js/result.js           결과 표시 + 커플 비교 링크 생성
js/compare.js          커플 비교 결과 계산/표시
js/compare-utils.js    답변 인코딩/디코딩, 채점 로직 (quiz/result/compare/saju/fortune 공용)
js/saju.js             saju.html 로직 (물/땅/하늘 기운 계산 + 사주 캐릭터/연애운/금전운/건강운/가족운)
js/fortune.js          fortune.html 로직 (띠 + 오늘 날짜로 매일 바뀌는 운세 계산)
scripts/build-quiz-pages.js  quiz-<id>.html 정적 페이지 생성 스크립트
```

현재 테스트 35종 (`js/tests-data.js`의 `TESTS` 배열 참고).

### 새 테스트 추가하는 법
`js/tests-data.js`의 `TESTS` 배열에 항목을 하나 추가하면 홈/퀴즈/결과 페이지에 자동으로 반영됩니다. `type: "category"`(유형 판정) 또는 `type: "score"`(점수 구간 판정) 중 선택. 테스트 객체에 `compare: true`를 추가하면 결과 페이지에 "커플/친구와 비교하기" 공유 링크 기능이 자동으로 활성화됩니다 (URL에 답변을 인코딩해서 전달하는 방식이라 별도 서버/DB가 필요 없습니다).

추가/수정 후에는 **반드시** 아래 명령으로 테스트별 정적 SEO 페이지를 다시 생성해서 커밋해야 합니다 (GitHub Pages는 빌드 단계 없이 저장소 파일을 그대로 서빙하기 때문에, 생성된 `quiz-<id>.html` 파일도 저장소에 커밋되어 있어야 합니다).

```bash
node scripts/build-quiz-pages.js
```

### 캐시 무효화 (`?v=`)

`www.mindpick.net`은 Cloudflare를 앞단에 두고 있어서, `js/*.js`·`css/*.css` 파일이 배포 후에도 최대 몇 시간 동안 예전 버전으로 캐싱될 수 있습니다 (`Cache-Control: max-age=14400`). 이를 방지하기 위해 모든 `<script src="js/...">`/`<link href="css/...">`에 `?v=1` 같은 버전 쿼리스트링을 붙여뒀습니다.

**`js/` 또는 `css/` 안의 파일을 수정했다면, 아래 두 곳의 버전 번호를 하나 올려주세요** (예: `?v=2` → `?v=3`):
- `index.html`, `quiz.html`, `result.html`, `compare.html`, `saju.html`, `fortune.html`, `privacy.html`의 `?v=` 쿼리스트링
- `scripts/build-quiz-pages.js` 안의 `?v=` 쿼리스트링 (수정 후 `node scripts/build-quiz-pages.js`로 재생성)

버전 번호를 바꾸면 URL 자체가 달라지므로 캐시와 무관하게 최신 파일이 즉시 반영됩니다.

## 로컬 확인

정적 파일이라 아무 웹서버로 열면 됩니다.

```bash
python3 -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

## GitHub Pages 자동 배포

`.github/workflows/deploy.yml`이 `main` 브랜치에 푸시될 때마다 자동으로 GitHub Pages에 배포합니다.

최초 1회, 저장소 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 설정해주세요. 이후에는 `git push`만 하면 자동으로 사이트가 갱신됩니다.

## Codespaces에서 변경사항 자동으로 GitHub에 반영하기

작업 중 파일이 바뀔 때마다 자동으로 commit + push 하고 싶다면 아래 스크립트를 실행하세요.

```bash
./scripts/auto-push.sh
```

- 10초 간격(기본값)으로 변경사항을 감지해 자동 커밋 후 푸시합니다.
- 주기를 바꾸려면 `INTERVAL=30 ./scripts/auto-push.sh` 처럼 실행하세요.
- 터미널을 유지해야 계속 동작하며, 끄고 싶으면 `Ctrl+C`.
- 이 스크립트는 **모든 변경을 그대로 커밋**하므로, 다른 사람과 같이 쓰는 저장소이거나 커밋 메시지를 직접 관리하고 싶다면 사용하지 않는 것을 권장합니다.

## 구글 애드센스 연동

1. [Google AdSense](https://www.google.com/adsense/)에 가입 후 이 사이트(배포된 GitHub Pages 주소)를 등록하고 심사를 신청하세요.
2. 승인되면 발급받는 `ca-pub-XXXXXXXXXXXXXXXX` 값을 아래 두 곳에 반영합니다.
   - 각 HTML `<head>`의 주석 처리된 AdSense 스크립트에서 `ca-pub-XXXXXXXXXXXXXXXX`를 교체하고 주석을 해제
   - `.ad-slot` div들을 실제 `<ins class="adsbygoogle">` 광고 단위 코드로 교체 (AdSense 관리자 페이지에서 광고 단위 생성 후 복사)
3. 저장소 루트에 `ads.txt` 파일을 만들고 AdSense에서 안내하는 내용(`google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`)을 넣어주세요. (예시 `ads.txt` 포함되어 있음, 값만 교체)
4. 애드센스는 실제 콘텐츠와 트래픽이 있어야 승인되는 경우가 많으니, 테스트 문항을 더 채우고 일정 기간 운영 후 신청하는 것을 권장합니다.

## 참고

- 모든 테스트 결과는 재미 콘텐츠이며 과학적 근거가 없다는 문구를 결과 페이지/푸터에 명시했습니다.
- 개인정보처리방침 페이지(`privacy.html`)는 애드센스 심사에 필요하므로 실제 운영 시 연락처 등 내용을 보완하세요.
