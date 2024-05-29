const http = require("http");
const fs = require("fs").promises;

http.createServer(async(req, res) => {
    // 작업
    // 만약에 요청에서 들어온 경로가 -> soccer 라면 -> soccer.html 리턴
    // 만약에 요청에서 들어온 경로가 -> baseball 라면 -> baseball.html 리턴
    console.log(req.url);

    // 실습 
    // req.url 값이 /soccer 랑 같다면 soccer.html 리턴
    // req.url 값이 /baseball 랑 같다면 baseball.html 리턴
    let data = "" // 유지보수가 용이하기 때문에 코드를 간결화 해야함
    if (req.url == '/soccer') {
        data = await fs.readFile("./soccer.html")
    } else if (req.url == '/baseball') {
        data = await fs.readFile("./baseball.html")
    }
    res.write(data)
    res.end()

}).listen(3010);