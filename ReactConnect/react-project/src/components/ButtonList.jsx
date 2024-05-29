import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

const ButtonList = () => {

    const handleLogout = () => { // 프론트에서 처리 가능하기 때문에 백엔드로 빼주지 않음!
        sessionStorage.removeItem('user');

        window.location.href="/";
    }

  return (
    <div className='buttonBox'>

        {JSON.parse(sessionStorage.getItem('user')) == null
        ? 
        <ButtonGroup aria-label="Basic example">
            <Button variant="outline-dark">
                <Link to="/join">회원 가입</Link>
            </Button>
            <Button variant="outline-danger">
                <Link to="/login">로그인</Link>
            </Button>
        </ButtonGroup>
        : 
        <div>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark">
                    <Link to="/delete">회원 탈퇴</Link>
                </Button>
                <Button
                    variant="outline-danger"
                    onClick={handleLogout}>
                    로그아웃
                </Button>
            </ButtonGroup>

            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-dark">
                    <Link to="/select">회원 검색</Link>
                </Button>
                <Button variant="outline-danger">
                    <Link to="/select">회원 전체 검색</Link>
                </Button>
            </ButtonGroup>
        </div>
        }

        

        
    </div>
  )
}

export default ButtonList

// ⭐⭐⭐⭐⭐ 대문자, rafce ⭐⭐⭐⭐⭐
// Join.jsx, Login.jsx, Delete.jsx, Select.jsx, Main.jsx