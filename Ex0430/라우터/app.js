// ctrl + ~ : 터미널 열기
// npm i express : express 프레임 워크 생성

const express = require("express"); // 모듈 불러오기
const app = express();

app.get("/", (req, res) => {
    // console.log("서버 생성!");

    // main.html 파일을 호출
    res.sendFile(__dirname + "/public/main.html"); // send : 데이터, sendFile : 파일
})

app.get("/baseball", (req, res) => {
    // baseball.html 파일 호출
    res.sendFile(__dirname + "/public/baseball.html");
})

app.get("/soccer", (req, res) => {
    // soccer.html 파일 호출
    res.sendFile(__dirname + "/public/soccer.html");
})

app.listen(3013);