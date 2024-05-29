// 3002을 포트 번호로 지니는 서버를 생성해주세요!!
// 서버 접속 시 '서버 접속 성공' 출력

const http = require("http"); // http 모듈 생성

// url : 주소 값에 있는 쿼리스트링 문자열을 객체 형식으로 변환 모듈
const url = require("url");

http.createServer(function(request, response){ // function(req,res)로 써도 동일하게 적용됨! => 순서가 중요!

    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

    // request : 요청 정보
    console.log('✨서버 접속 성공✨');

    // request.url : 쿼리스트링으로 보낸 데이터를 문자열로 꺼내오겠다!!
    console.log(request.url); // 문자열로 꺼내오기 때문에 바로 사용 X

    console.log(url.parse(request.url, true));
    // 쿼리스트링으로 보낸 문자열을 객체 형식으로 변환하겠습니다
    // url.parse(request.url, true) --> 쿼리스트링 부분만 사용하겠습니다
    let query = url.parse(request.url, true).query; // parse 에 있는 url 이라는 문자열을 변환(객체로)해서 사용하겠다

    // query -> {data : 123}
    console.log(query.data); // '123' 이라는 data를 가져오겠다!

    response.end();

}).listen(3002);