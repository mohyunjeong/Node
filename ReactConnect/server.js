// npm i express 실행!

/*
    기존 Node 수업 때는 app.js 라는 파일을 사용했지만, React 에서도 App.js 라는 파일을 사용하기 때문에 수업에 혼선을 줄 수 있어서 server.js 라는 이름으로 진행
*/

const express = require('express');
const app = express();
const router = require('./routes/router');
const path = require('path');
const cors = require('cors');

// CORS 오류를 방지하기 위한 모듈 -> cors 를 설치
app.use(cors());

// 넘어온 데이터 사용 (post 방식)
app.use(express.urlencoded({extended : true}))

// 넘어온 데이터를 json 형태로 사용
app.use(express.json());

/** project TIP!
 * 1) CORS 오류 -> cors 설정 안한 거
 * 2) 데이터는 넘어오는데 undefined? => url encoded 설정
 * 3) undefined 은 아닌데 텅 빈 채로? => json 처리
 * 4) 정말로 다~ 썼는데 안된다? 순서 문제
*/

// 정적인 파일 사용
app.use(express.static(path.join(__dirname, "react-project", "build")));
app.set('port', process.env.PORT || 3017);

app.use(router); // router를 사용하겠다

// 포트번호 확인하기!
app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'waiting...');
});

// split terminal -> 터미널 분리

// React Project 생성해서 Node 메인 페이지 등록하기
// npx create-react-app react-project
// React connect 폴더로 가서 nodemon server.js
// split terminal 누르고
// cd react-project => npm start
// ctrl + c => npm run build(bulid는 수정될 때마다 해줘야함!)