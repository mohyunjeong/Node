const http = require('http')

const qs = require('querystring')

http.createServer(function(request, response){
    
    let body = "";

    request.on("data", function(data) {
        body += data
        console.log(body);
    })

    request.on('end', function(){
        response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
        
        let postData = qs.parse(body);
        console.log(postData);

        let avg = (parseInt(postData.html) + parseInt(postData.css) +parseInt(postData.html) +parseInt(postData.html)) / 4


        let grade = ''

        if (avg >= 95 && avg <= 100) {
            grade = 'A+'
        } else if (avg >= 94) {
            grade = 'A'
        } else if (avg >= 89) {
            grade = 'B+'
        } else if (avg >= 84) {
            grade = 'B'
        } else if (avg >= 79) {
            grade = 'C'
        } else {
            grade = 'F'
        }

        response.write("name : " + postData.name + "<br>");
        response.write("html : " + postData.html + "<br>");
        response.write("css : " + postData.css + "<br>");
        response.write("nodejs : " + postData.nodejs + "<br>");
        response.write("android : " + postData.android + "<br>");
        response.write("avg : " + avg + "<br>");
        response.write("grade : " + grade);

        response.end();
    })

}).listen(3006);