/*
    프론트에서 get 방식으로 보낸 데이터를 처리해주는 서버
*/

const express = require("express");
const app = express(); // express를 사용하기 위해 app 이라는 미들웨어 생성

// post 방식에서는 미들웨어에 post 데이터를 해석하라고 기능을 더해줘야 한다!
// 필수로 등록해줘야 한다! -> qs 모듈과 같은 역할
// 꺼내올때는 req.body -> 데이터가 저장
// app.get() / app.post() -> get 방식과 post 방식 각각 
app.use(express.urlencoded({extended : true})); // querystring 모듈을 사용해줘!

app.get("/", (req, res) => {
    // express에서 get 방식 데이터를 불러오는 방법
    // req.query -> 넘어온 데이터가 객체화 되어서 출력
    let data = req.query // = url.parse(req.url, true).query
    console.log(data);
})

app.post("/", (req, res) => {
    let data = req.body;
    console.log("post 데이터", data);
})

app.listen(3012);