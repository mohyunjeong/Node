// post 방식으로 데이터를 출력
// 서버 생성, 포트 공통

const http = require("http");
// post 방식의 body 데이터를 객체 형태로 변형 모듈
const qs = require("querystring");

http.createServer((req, res) => {

    // post 방식은 데이터가 body에 담겨서 넘어온다.
    // 패킷화 -> 조각조각 넘어온다. => 보안 때문에!
    // 1. 패킷화된 데이터를 하나의 변수에 합쳐주기!
    // 2. 변수를 개체로 변환

    // 패킷화된 데이터를 하나로 합치는 작업
    let body = "" // 전역 변수
    req.on("data", (data) => { // req.on("Click")과 동일, data : 매개변수
        body += data // body = data 를 사용하면 대입연산자라 마지막 값만 들어감
    }) // on : 어떤 기능을 만들어 주겠다!

    // 데이터를 객체 형태로 변환
    req.on("end", () => { // body가 전역변수이기 때문에 매개변수를 선언해 주지 않아도 된다
        let data = qs.parse(body)
        res.write("<table border='1'>");
        for (let i = 1; i < 10; i++) {
            res.write(`
                <tr>
                    <td>${data.num} * ${i} = ${data.num * i}</td>
                </tr>
            `)
        }
        res.write("</table>");
        res.end();
    })

}).listen(3008);