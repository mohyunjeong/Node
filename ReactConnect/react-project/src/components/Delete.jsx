import React from 'react'

const Delete = () => {

  /** Delete 실습
   *  - 선행되어야 할 조건 : 로그인
   *    1) Delete.jsx 를 꾸며줄 것
   *      => Login.jsx 를 참고해서 Password 부분, 버튼만
   *    2) Delete.jsx 에서 password를 입력 => pw 라는 state 로 관리 => 변화할 때마다 pw가 바뀌도록 -> useState 사용
   *    3) session 안에 있는 ID 추출
   *      - 참고 : Main.jsx, ButtionList.jsx 를 참고하면 가능
   *    4) back-end "/handledelete" 라우터로 id, pw 전송
   *    5) (Node -> DB) DB 를 삭제 해줄 것
   *      - rows 를 출력해보고, 실제 조건에 부합하는 경우와 아닌 경우를 비교해서 if 문으로 관리
   *      - DB 연결 폴더 -> router.js 가시면 delete 한 실습
   *    6) 삭제 성공 => result : 'success' / 삭제 실패 => result : 'failed'
   *    7) 삭제 성공 시 세션까지 삭제
   *    8) 성공 시 메인으로 이동 / 실패 시 다시 한번 /delete 라우터로 
   */
  return (
    <div>Delete</div>
  )
}

export default Delete