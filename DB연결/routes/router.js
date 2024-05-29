// 라우터 제작
// 1) 모듈 호출 -> const express = require("express");
// 2) 모듈 exports -> const router = express.Router();, const path = require("path");
// 3) 라우터 제작 -> module.exports = router;
// exports 한 다음에, 반드시 app require 하고(const router = require("./routes/router")) use 를 통해 등록!(app.use(router);)

const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db"); // 커넥션 객체(연결 정보를 담고 있음)

// 1. 기본경로를 설정 -> 루트 경로
router.get("/", (req, res) => {
    // 사용자가 메인으로 접근하면, main.html 파일을 보여주세요!
    res.sendFile(path.join(__dirname, "..", "public", "main.html"));
})

// 2. 셀렉트 요청이 들어오면 처리해주는 로직
router.get("/select", (req, res) => { // get(조회), post(조작)
    // http://localhost:3016/select

    // DB에 접근해서 데이터를 반환
    let sql = "select * from nodejs_member";
    conn.query(sql, (err, rows) => { // rows : 결과가 담겨있음(가져온 행)
        // err : 통신에 실패 했을 때(서버에 문제, 쿼리문 문법 오류)
        // rows -> DB에 접근해서 실행한 결과를 담아주는 변수
        //          : 실행 결과를 배열로 받아온다
        if (rows.length > 0) {
            // 쿼리가 실행(성공) 되었을 때
            res.send(rows);
        } else {
            // 통신에 성공했지만 데이터를 아무것도 못 가져 왔을 때
            res.send({data : "회원이 존재하지 않습니다"}) // {key:value} 형태로 맞춰줘야함
        }
        // if (rows) {
        //     // 쿼리가 정상적으로 실행 되었을 때
        //     res.send(rows);
        // } else {
        //     // 쿼리가 정상적으로 실행 되지 않았을 때
        // }
        // res.send(rows); // 요청을 돌려줌
    });
})

// // 3. insert router 생성
// // get 방식
// router.get("/insert", (req, res) => {
    
//     // http://localhost:3016/insert?id=id&pw=pw&nick=nick
//     console.log(req.query);
//     // let sql = `insert into nodejs_member values ('${req.query.id}', '${req.query.pw}', '${req.query.nick}');`;
//     let sql = `insert into nodejs_member values (?, ?, ?);`;

//     conn.query(sql, [req.query.id, req.query.pw, req.query.nick], (err, rows) => { // js에는 배열의 크기가 정해져 있지 않다(순서에 맞게끔 적어줘야함)
//         if (rows.affectedRows > 0) {
//             res.send({data : "삽입 성공!"})
//         } else {
//             res.send({data : "삽입 실패!"})
//         }
//     });

//     // http://localhost:3016/insert
//     // let sql = "insert into nodejs_member values ('smhrd','123','Minsu');";
//     // conn.query(sql, (err, rows) => { // conn : 연결 통로, router : 실행 시키는 장소
//     //     // rows : 쿼리문 실행 정보
//     //     // attectedRows : 영향을 받은 행의 갯수
//     //     console.log(rows);
//     //     if (rows.affectedRows > 0) {
//     //         // 삽입 성공!
//     //         res.send({data : "삽입 성공!"})
//     //     } else {
//     //         res.send({data : "삽입 실패!"})
//     //     }
//     // });
// })

// insert router 생성
// insert router post 방식으로 변경
// --> router.post 
router.post('/insert' , (req,res)=>{
    //console.log(req.query)
    //post 방식은 body 영역에 데이터가 담긴다!!
    console.log(req.body)
    let sql =`insert into nodejs_member values(?,?,?)`
    
    conn.query(sql, [req.body.id, req.body.pw, req.body.nick], (err, rows)=>{
        console.log(err)
        //rows : 쿼리문 실행 정보
        //affectedRows : 영향을 받은 행의 갯수
        if(rows.affectedRows>0){
            //삽입 성공!
            res.send({data:"성공!"})
        }
        else{
            //삽입 실패!
            res.send({data:"실패!"})
        }

        console.log(rows)
    })
})

// 4. delete router 생성
router.get("/delete", (req, res) => {
    // http://localhost:3016/delete?id=deleteId
    // req.qury --> {id : deleteId}
    console.log(req.query);
    let sql = `delete from nodejs_member where id = ?;`;

    conn.query(sql, [req.query.id], (err, rows) => { // 데이터를 보내줄 때는 꼭 매개변수를 배열([])로 담아서 보내줘야한다! -> 몇개인지 모르기 때문!
        if(rows.affectedRows>0){
            //삭제 성공
            res.send({data:1})
        }
        else{
            //삭제 실패
            res.send({data:0})
        }
    });

    // // http://localhost:3016/delete
    // let sql = "delete from nodejs_member where id = 'smhrd';";
    // conn.query(sql, (err, rows) => { // err : 쿼리문 자체가 실행시키지 못했을 때
    //     // console.log(err);
    //     // console.log(rows);
    //     if (rows.affectedRows > 0) {
    //         // 삭제 성공
    //         res.send({data : 1});
    //     } else {
    //         // 삭제 실패
    //         res.send({data : 0});
    //     }
    // });
})

module.exports = router;