/*
    사용자가 서버에 접근 했을 때,
    서버 쪽에서 만든 코드가 아니고, 만들어진 HTML 파일 자체를 보여주기 -> 서버가 매번 코드를 작성하면 양이 한정적이다. -> 가독성 불편

    html 파일을 전송하기 위해서 -> 파일 시스템 모듈(fs) : pm i fs
*/

const http = require("http")
const fs = require("fs").promises // fs 기능을 사용하겠다

http.createServer(async(req, res) => {
    // index.html 파일을 불러와서 사용자에게 보여주기!
    // 오류가 나는 이유
    // 노드 js는 기본적으로 비동기, 싱글스레드 -> 작업이 빨리 끝나는대로 처리
    // 파일 읽는 건 오래 걸리는 작업 -> 쓰는 작업을 먼저 실행
    // 순서를 임의로 변경 -> async(최상위에 선언) await => 세트로 사용(단독으로 사용 불가)
    // async -> 비동기로 처리하겠다! -> 호출해주는 함수 앞에 작성
    // await -> 코드가 종료 될때까지 기다리겠다! -> 기다리는 함수 앞에 작성
    let data = await fs.readFile("./index.html") // ./ : 현재 위치, ../ : 상위 폴더
    res.write(data) // 보여줄거기 때문에 res
    res.end()
}).listen(3009)

// 노드 특징 : 빨리 작업이 끝날 수 있는 것을 먼저 실행(싱글스레드 비동기통신)

// 노드 -> 채팅(카톡)