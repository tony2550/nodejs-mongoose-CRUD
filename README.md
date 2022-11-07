# nodejs-mongoose-CRUD

## Project Stack

- nodejs
- [Express](https://expressjs.com/ko/)
- MongoDB
- Mongoose
- nodemon
- dotenv

## Run Script

### `npm start`

개발모드 서버 시작 명령어

### `npm test`

node test 명령어

### `npm run start-server`

node 서버 시작 명령어

## 폴더 구조

```bash
├── app
├── router
├── utils
│   ├── empty2
├── app.js
└── package.json
```

## 커밋 컨벤션 사용법

1. `git commit` 입력
2. 터미널에 템플릿 파일이 자동으로 뜨게 됩니다. (vi 에디터)
3. 키보드 `i` 키 눌러서 내용 수정
4. 작성이 완료되면 `esc` 누르고 `:wq!` 누르고 `enter`

```bash
################ 제목
# <타입> : <제목> 의 형식으로 제목을 아래 공백줄에 작성
# 제목은 50자 이내 / 변경사항에 "왜" , "무엇을" 명확히 작성 / 끝에 마침표 금지
# 예) feat : 메인화면 검색 입력창 기능 추가

# 바로 아래 공백은 지우지 마세요

################ 본문
# 본문(구체적인 내용)을 아랫줄에 작성
# 여러 줄의 메시지를 작성할 땐 "-"로 구분 (한 줄은 72자 이내)

################ 꼬릿말
# 꼬릿말(footer)을 아랫줄에 작성 (현재 커밋과 관련된 이슈 트래커 등)
# 예) 이슈 #7

################ <타입> 예시
## feat : 새로운 기능 추가
## fix : 버그 수정
## docs : 문서 수정
## test : 테스트 코드 추가
## refact : 코드 리팩토링
## style : 코드 의미에 영향을 주지 않는 변경사항
## chore : 빌드 부분 혹은 패키지 매니저 수정사항
###################
```
