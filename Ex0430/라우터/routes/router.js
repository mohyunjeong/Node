// router : 이정표(가는 길을 알려줌).

// 라우터의 역할만 담당
// app.js -> 메인 서버의 역할
// router.js -> 경로에 관련된 모든 업무를 담당

const express = require("express");
const router = express.Router();

// 라우터를 활용할 때는 파일의 경로를 수정해주는 경우가 많다.
// 경로를 담당하는 모듈
const path = require("path");

router.get("/", (req, res) => {
    // res.sendFile(__dirname + "../public/main.html"); // dirname 이 있기 때문에 routes안에 public을 찾고 있음!
    // path.join("매개변수", "매개변수", "매개변수") -> 입력 받은 매개변수로 경로 제작!
    // 매개변수로 ".." 들어가면 -> 폴더를 한 번 나오겠다.
    res.sendFile(path.join(__dirname, "..", "public", "main.html"));
})

router.get("/baseball", (req, res) => {
    // res.sendFile(__dirname + "/public/baseball.html");
    res.sendFile(path.join(__dirname, "..", "public", "baseball.html"));
})

router.get("/soccer", (req, res) => {
    // res.sendFile(__dirname + "/public/soccer.html");
    res.sendFile(path.join(__dirname, "..", "public", "soccer.html"));
})

/* 
    모든 파일에서 해당 코드를 사용할 수 있게 코드를 작성
    반드시 모듈의 마지막에 작성
    모듈명은 반드시 파일명과 같게 작성할 것! -> 누구나 알아볼 수 있게!
*/
module.exports = router;