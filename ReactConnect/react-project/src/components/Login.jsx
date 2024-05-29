import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from '../axios';

const Login = () => {

    // Login 문제

    // 1) (React) Login.jsx 에서 id, password 를 입력 => 함수 이름은 handleLogin 
    // 2) (React) handleLogin 실행 시, state 로 관리 (onChange) 
    // 3) (React->Node) id, password를 -> Back-End "/handlelogin" 으로 전송 
    // 4) (Node -> DB) handlelogin에서 받아온 id, password를 DB에 조회 
    // 5) (DB) 조회했을 때, 만약 있는 경우 Front-End 응답 
    // => 응답할 때 단순 result : success 가 아니라, 회원 정보를 보낼 거임 
    // => 이 때, 비밀번호는 안보낼거임 
    // => sql 문 작성할 때 select * (X) select id, nick (O) 

    // 6) (Front-End) 넘어온 데이터가 있다면, 로그인 성공 O, 넘어온 데이터가 없으면 로그인 실패 
    //     => 성공 ? Main으로 (새로고침O) 
    // => 실패 ? 다시한번 로그인 페이지 새로고침

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('handle Login Function', id, pw);

        axios.post('/handlelogin', {
            id : id,
            pw : pw
        })
        .then((res) => {
            console.log(res.data)

            if (res.data.id) { // id가 존재한다면!
                alert(`환영합니다.`);

                // 로그인 시, 세션에 객체를 저장
                sessionStorage.setItem('user', JSON.stringify(res.data));

                window.location.href = "/";
            } else {
                alert('아이디 혹은 비밀번호를 다시 입력해주세요.');
                window.location.href = "/login";
            }
        })
    };

  return (
    <div className='container'>
        <h4>로그인</h4>
        <div className='formBox'>
            <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicID">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter id"
                    onChange={(e) => {
                        setId(e.target.value)
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPw(e.target.value)
                    }}
                />
            </Form.Group>

            <div className="d-grid gap-2">
                <Button variant="danger" type="submit">
                    로그인
                </Button>
            </div>
        </Form>
        </div>
    </div>
  )
}

export default Login