//  nodemon app.js : 껐다 켰다 안하고 자동으로 업데이트 됨!
// Libaray : 함수들을 모아둔 것
// Framework(프레임워크) : 응용 프로그램이나 소프트웨어의 솔루션 개발을 수월하게 하기 위해 제공된 소프트웨어 환경

// Node.js를 위한 Web Framework : Node.js를 위한 빠르고 개방적이며 간결한 웹 어플리케이션 프레임워크

/*
    Express 프레임워크
    - 기존 Node로만 개발했던 코드를 훨씬 간결하고, 유지보수 하기 편하게 사용하는 프레임워크
    - Node.js 기술을 그대로 다 사용이 가능
    - 역할은 서버라는 건 공통
    1) 서버를 생성
    2) 포트번호를 지정
*/

// 서버를 생성하기 위해서 express 모듈을 호출
const express = require("express"); // express 안에 다(node에서 했던 것들) 포함
// 미들웨어 -> 모든 요청과 응답을 한 군데에서 통제하는 역할 -> 메인 서버의 역할
const app = express(); // express에 있는 모든 역할을 app이 실행하게!(메인서버)

// 정적인 파일(이미지, 자바스크립트, css 등)들을 미들웨어 등록
// app.use(express.static(__dirname)); // 정적인 파일을 들어올려면 이 경로를 탐색해!
// 정적인 파일들은 public 폴더에 관리 (js, css, html, img ...)
app.use(express.static("public"));

// 서버를 생성
app.get("/", (req, res) => { // "/" : 기본 경로 , 응답 : res

    console.log("서버 생성");
    // res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"}); // writeHead : 눈에 보이지 않는 정보를 만들겠다
    // res.write("<h1>서버가 만들어졌습니다</h1>");

    // res.end();

    // write VS send
    // write 
    // - 컨텐츠헤드 작성 -> 인코딩 / end를 반드시 작성 / 여러줄을 보낼 수 있다.
    // send
    // - end, write, head를 하나에 묶어서 사용(따로 명시하지 않아도 됨) / 여러줄을 보낼 수 없다 -> 템플릿으로 여러줄 전송
    // res.send(`<h1>보내진 페이지</h1><h1>보내진 페이지</h1>`) // `(템플릿)

    // html 파일을 전송하는 방법
    // res.sendFile("index.html") // 상대경로로 작성하면 오류 발생!
    // express는 파일을 불러 드릴 때 반드시 절대 경로를 작성
    // 주의점! 사용자마다 절대 경로가 다르기 때문에 알아서 변할 수 있도록 작업
    // __dirname -> 컴퓨터의 현재 작업중인 폴더의 절대 경로를 알아오는 키워드
    // res.sendFile("C:/Users/smhrd/OneDrive - Chonnam National University/바탕 화면/NodeStudy/Ex0429/01기초/index.html") // 절대 경로로 출력
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html"); // '/'가 없으면 오류! -> 경로이기 때문에 /가 필요함!

})

// 포트를 지정
// 포트 지정은 반드시 페이지 최하단에 작성
app.listen(3011);