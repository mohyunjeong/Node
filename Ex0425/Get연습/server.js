/*
    서버는 반드시 구조를 이해해야 한다.
    서버의 필수 요소는 1) 서버 생성 2) 포트 지정
    1. 서버 생성 모듈 -> http
    2. get 방식 데이터 변형 -> url
*/

const http = require("http"); // const : 상수(변하지 않는 수)
const url = require("url");

http.createServer((req,res) => { // call back 함수 : 함수 안에 함수가 있는 것(어떤 기능을 호출 했을 때 안에 새로운 기능이 있는 것)

    // 프론트 페이지에서 넘겨준 num을 활용해서 구구단을 출력
    // console.log(req.url); // 프론트 페이지에서 넘겨준 모든 데이터는 req 안에 있음
    
    // url 속에 있는 데이터를 접근할 수 있게 객체 변환!
    // res = req.getMaxListeners(페이지)
    // res.text -> 문자 형태의 데이터
    // basename(res.text, "lxml") 과 동일한 형태
    let data = url.parse(req.url, true).query
    console.log(data);

    // 반복하지 않는 것을 먼저 생성!
    // 테이블 태그 생성
    res.write("<table border='1'>") // 응답하겠다! -> response
        for (let i = 1; i < 10; i++) { // 출력 할 때 1부터 9까지 출력해야 하기 때문에 i를 1부터 시작
            res.write(`
                <tr>
                    <td>${data.num} * ${i} = ${data.num * i}</td>
                </tr>
            `)
        } // ${} : 템플릿 문법, $ : 변수, $() : 제이쿼리
    res.write("</table>");

    res.end(); // 이 문장이 없다면 계속 뱅글뱅글 돌게 됨

}).listen(3007) // 사용자가 3007번을 들어오게 되면 가장 먼저 실행됨

// 서버 사이드 렌더링 : 페이지에서 만든 서버가 돌아가는 것

// 클라이언트 사이드 렌더링 : 프론트에서 만든 서버가 돌아가는 것 -> react

// get 방식에서는 데이터가 url을 통해서 넘어온다.
// url 모듈을 활용해서 컴퓨터가 이해할 수 있게 변형
// 응답할 때는 res 객체를 활용한다.
// 페이지 자체를 서버가 만드는 행위 -> 서버 사이드 렌더링