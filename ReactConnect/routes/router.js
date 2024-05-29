// DB와 연결 작업

// 모듈 불러오기
const express = require('express');
const router = express.Router();
const conn = require('../config/db'); // DB 모듈
const path = require('path');

// 메인 경로
router.get('/', (req, res) => {
    console.log("누군가 메인페이지에 접근했습니다!");
    res.sendFile(path.join(__dirname, "..", "react-project", "build", "index.html"));
})

// 회원 가입을 담당하는 경로 (기능)
router.post('/handlejoin', (req, res) => {
    console.log('누군가 회원 가입을 희망합니다.', req.body);

    let {id, pw, nick} = req.body;

    // 1. 회원가입을 할 수 있는 쿼리문 작성 - sql
    let sql =`insert into nodejs_member values(?,?,?)`
    // 2. DB에 연결해서 쿼리문을 실행
    conn.query(sql, [req.body.id, req.body.pw, req.body.nick], (err, rows)=>{
        console.log(rows)
        // 3. 만약, DB 에 삽입을 성공했다면 console 창에 회원가입 성공!
        if(rows.affectedRows > 0){
            res.send({result : "success"})
        }
        // 실패했다면 console 창에 회원가입 실패!
        else{
            res.send({result : "fail"})
        }
    })
    // 4. 회원가입 성공했다면 Workbech 로 가서 직접 테이블에 진짜 데이터가 들어갔는지 까지 확인
})

// 로그인을 담당하는 경로 (기능)
router.post("/handlelogin", (req, res) => {
    console.log('handle login router', req.body);

    let {id, pw} = req.body;

    let sql = "select id, nick from nodejs_member where id = ? and pw = ?";
    conn.query(sql, [id, pw], (err, rows) => { 
        console.log('rows', rows[0]);

        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.json({result : 'failed'});
        }
    });
})

module.exports = router;