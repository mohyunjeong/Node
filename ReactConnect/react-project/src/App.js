// [REACT] bootstrap 디자인 라이브러리를 React로 사용해보자

import './App.css';
// Bootstrap 사용할 시 import 필수!
// import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonList from './components/ButtonList';
import { Routes, Route, Link } from 'react-router-dom';

import Main from './components/Main';
import Join from './components/Join';
import Login from './components/Login';
import Delete from './components/Delete';
import Select from './components/Select';


function App() {
  return (
    <div className="App">
      <h1>
        <Link to="/">React Main Page</Link>
      </h1>
      <ButtonList></ButtonList>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Join' element={<Join/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Delete' element={<Delete/>}></Route>
        <Route path='/Select' element={<Select/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

// 회원가입, 로그인, 회원탈퇴, 로그아웃, 회원전체검색, 회원 검색, 회원정보수정 

// 1 GROUP - 로그인을 안한경우 :  회원가입, 로그인 
// 2 GROUP - 일반 유저인 경우 :  회원탈퇴, 정보수정, 로그아웃
// 3 GROUP - 관리자인경우 : 회원검색, 회원전체검색 + 2GROUP 

// npm i react-router-dom axios 설치