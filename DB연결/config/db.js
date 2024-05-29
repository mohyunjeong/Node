// config : 설정

// DB의 연결 정보를 담당 -> 실제 DB를 연결하는 역할
// 모듈 설치 -> mysql2(npm i mysql2)

const mysql = require("mysql2");

let conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    port : 3306,
    database : "nodejs"
}); // 객체 형태

// 실제 연결정보를 가지고 연결하겠다!
conn.connect(); // conn 객체

module.exports = conn; // 수출하기