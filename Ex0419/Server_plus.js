const http = require("http"); 

// 쿼리스트링 데이터 사용가능 모듈 : url
const url = require("url");

http.createServer(function(request, response){ 
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

    // 첫번째 숫자와 두번째 숫자를 가져오고 싶습니다!!
    // 문자열로 된 쿼리스트링을 객체 형식으로 변환
    console.log(request.url)

    let query = url.parse(request.url, true).query;
    console.log(query)
    // {num1:10, num2:20}

    let num1 = parseInt(query.num1);
    let num2 = parseInt(query.num2);

    let sum = num1 + num2;
    
    // response.write(`${num1} + ${num2} = ${sum}`);
    response.write(num1 + "+" + num2 + "=" + (num1 + num2));

    response.end();
}).listen(3003);

// http://localhost:3003