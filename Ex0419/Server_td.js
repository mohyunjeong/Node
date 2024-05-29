const http = require("http");
const url = require("url");

http.createServer(function(request, response){ 
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});

    console.log(request.url);

    // 입력한 열 개수 꺼내오기
    let query = url.parse(request.url, true).query;
    // {colNum : 15}
    console.log(query);

    let data = parseInt(query.data);

    response.write("<table border='1'>");

    for (let i = 1; i <= data; i++) {
        response.write(`<td>${i}</td>`);
    }

    response.write("</table>");
    
    response.end();
}).listen(3004);
