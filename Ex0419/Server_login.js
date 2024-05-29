// 3005 번으로 서버를 만들어 주세요!
// 사용자 입력 ID : smhrd, PW : 123 --> 로그인 성공!
//                                 --> 로그인 실패!

const http = require('http')
const url = require('url')

// querystring 모듈 : post 방식으로 보낸 데이터(문자열)을 객체 형식으로 변환
const qs = require('querystring')

// POST 방식
http.createServer(function(request, response){
    
    let body = "";
    // 1. 요청 데이터 전송 확인
    request.on("data", function(data) {
        // data --> 사용자가 서버로 보낸 데이터
        body += data
        console.log(body);
    })

    // 2. 데이터 파싱(데이터를 다 받아왔다면 사용하기 편하게끔 변환)
    request.on('end', function(){
        let postData = qs.parse(body);
        console.log(postData);

        response.end();
    })

}).listen(3005);

// GET 방식
// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

//     let query = url.parse(request.url,true).query
//     console.log(query)
//     // {id : 'OOO', pw : 'OOOO'}

//     if (query.id == 'smhrd' && query.pw == '123') {
//         // 로그인 성공
//         response.write("로그인 성공! 🎆");
//     } else {
//         // 로그인 실패
//         response.write("로그인 실패! 🎃");
//     }

//     response.end();

// }).listen(3005);