# MindPick — 심리테스트 사이트

poomang.com 스타일을 참고한 심리테스트 사이트입니다. 순수 정적 HTML/CSS/JS로 만들어져 있어 별도 서버 없이 GitHub Pages로 바로 배포할 수 있습니다.

## 구성

```
index.html          홈 (테스트 목록)
quiz.html           테스트 진행 (?id=테스트ID)
result.html         결과 페이지
compare.html         커플/친구 답변 비교 결과 페이지
admin.html           관리자 로그인 게이트 (아이디/비밀번호 입력, 실제 보안 아님)
privacy.html         개인정보처리방침 (애드센스 승인에 필요)
css/style.css        디자인
css/admin.css        관리자 페이지 전용 스타일
js/tests-data.js     테스트 문항/결과 데이터 (여기만 수정하면 테스트 추가/수정 가능)
js/main.js           홈 화면 카드 렌더링
js/quiz.js           질문 진행 및 채점 엔진
js/result.js         결과 표시 + 커플 비교 링크 생성
js/compare.js         커플 비교 결과 계산/표시
js/compare-utils.js  답변 인코딩/디코딩, 채점 로직 (quiz/result/compare 공용)
js/admin.js           관리자 로그인 게이트 로직
```

현재 테스트 10종: 성격 컬러, 동물상, 연애 스타일, 정신연령, 스트레스 지수, 애착유형, 음식 취향, 여행 스타일, 전생, 인터넷 밈 캐릭터.

### 새 테스트 추가하는 법
`js/tests-data.js`의 `TESTS` 배열에 항목을 하나 추가하면 홈/퀴즈/결과 페이지에 자동으로 반영됩니다. `type: "category"`(유형 판정) 또는 `type: "score"`(점수 구간 판정) 중 선택. 테스트 객체에 `compare: true`를 추가하면 결과 페이지에 "커플/친구와 비교하기" 공유 링크 기능이 자동으로 활성화됩니다 (URL에 답변을 인코딩해서 전달하는 방식이라 별도 서버/DB가 필요 없습니다).

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
