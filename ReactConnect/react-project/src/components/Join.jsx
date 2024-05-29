import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../axios';

const Join = () => {

     /** 
   * 1. 사용자가 '회원가입' 이라는 버튼을 클릭시, handleJoin 이라는 함수를 실행시킬 것 
   * 2. handleJoin 함수 안에 console.log 를 찍어 잘 실행되는지 확인 
   * 3. 사용자가 입력한 아이디는 id라는 state에, 사용자가 입력한 비밀번호는 pw 라는 state에 
   *    사용자가 입력한 닉네임은 nick 이라는 state에 저장할 것 
   *    - 이 때, 우리는 useRef를 이용하지 않고, onChange 함수를 이용한다. 
   * 4. id, pw, nick 을 console.log 에 찍어 확인 
   *    => 캡쳐해서 단톡방에 업로드. 
   */

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [nick, setNick] = useState('');

    const handleJoin = (e) => {
        e.preventDefault();
        console.log('handle join function');

        console.log('✅ ID:', id);
        console.log('✅ Password:', pw);
        console.log('✅ NickName:', nick);

        /** project tip!
         * 데이터를 주고 받을 때 오류가 나는 경우
         * 개발자 도구 -> Network -> 내가 원하는 페이지 클릭 -> payload
         * 지금은 payload 에 데이터가 잘 보내진거 확인! => Back-End 문제
         * 
         * CORS ERROR !
         */

        axios.post('/handlejoin', {
            id : id,
            pw : pw,
            nick : nick
        })
        .then((res) => {
            console.log(res.data)
            if (res.data.result === "success") {
                alert('가입을 축하합니다.');

                // 페이지 이동 할 시점에 데이터 변경이 있다면? 새로고침이 필요하다는 것
                // => useNavigate 는 새로고침 없이 페이지 이동함

                // 단순 페이지 이동일 때 => navigate
                // 로그인, 회원가입이나 특정 기능으로 인해 데이터가 바뀐 상태라면? => location href
                window.location.href = "/";
            }
        })
    };

    return (
        <div className='container'>
            <h4>회원 가입</h4>
            <div className='formBox'>
                <Form onSubmit={handleJoin}>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicID">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter id"
                                onChange={(e) => {
                                    setId(e.target.value)
                                }} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPw(e.target.value)
                            }} />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicNN">
                        <Form.Label>NickName</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter NickName"
                            onChange={(e) => {
                                setNick(e.target.value)
                            }} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button
                            variant="danger"
                            type="button"
                            onClick={handleJoin}>
                            회원가입
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Join;
