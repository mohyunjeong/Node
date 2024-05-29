// npm i mysql2 실행!

// mysql2 모듈 설치
const mysql = require('mysql2');

let conn = mysql.createConnection({ // mysql 모듈을 이용해서 연결을 하겠다!
    // 이 정보를 가지고 연결
    host : "localhost",
    user : "root",
    password : "1234",
    port : 3306,
    database : "nodejs"
});

conn.connect(); // 연결 정보를 가지고 connect 해주겠다

// 외부에도 사용하기 위해 수출해주기!(⭐중요⭐)
module.exports = conn;