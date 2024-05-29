// http 모듈 : 클라이언트에서 서버로 요청을 보내고 서버는 요청의 내용을 읽고 처리한 뒤 응답
console.log("첫 노드 실행");

// node 기반으로 BackEnd 서버 만들기

// require(모듈이름); : Nodejs에서 제공하는 모듈을 가져오는 명령어

// require : 모듈을 가져오는 기능
// http 모듈 : 클라이언트에서 요청을 받고 응답해주는(요청을 처리한다) 서버의 기본 모듈
const http = require("http") // http 모듈 사용

// http.createServer : 서버 생성(클라이언트에서 접근할 수 있게끔 서버를 만들어 준다)
http.createServer(function(request, response){ // call back 함수 : 특정 함수 안에서 호출되여 실행 되어지는 함수
    // request : 요청(클라이언트 -> 서버) 정보
    // response : 응답(서버 -> 클라이언트)

    // 요청 정보 확인
    let ip = request.connection.remoteAddress // 요청을 받은 주소 값을 확인
    console.log(ip)

    // 실습 문제(ip로 문구 다르게 띄우기)
    if (ip == "::ffff:192.168.219.59") {
        console.log('이반석님 환영합니다🎉')
    } else if (ip == "::ffff:192.168.219.46") {
        console.log('선생님 환영합니다')
    } else {
        console.log('손님 환영합니다')
    }

    console.log('서버 실행 중 입니다') // 서버 영역이기 때문에 콘솔에 뜨지 않음!

    // 200 -> 정상 응답
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    response.write("<h1>응답성공</h1>")

    response.end(); // 여기까지 응답을 마무리 하겠다!!

}).listen(3001); // .listen(3001) : port번호 설정 (사용자의 요청 대기시작)

// URL : 해당하는 주소로 컴퓨터 서버에 접근하겠습니다!(요청을 보내겠습니다)

// url 주소(동일한 주소임)
// http://localhost:3001
// http://127.0.0.1:3001
// http://192.168.219.52:3001

// http : 프로토콜
// ip : 내 컴퓨터 주소(localhost)
// Port : nodejs 작업을 할 수 있는 방