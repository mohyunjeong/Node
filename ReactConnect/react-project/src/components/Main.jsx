import React, { useEffect } from 'react'

const Main = () => {

  // React 는 함수형 컴포넌트 => 아무데나 session 불러오면 무한루프
  // 특정 시점에만! 불러와줘야 함 => 화면이 렌더링 된 직후
  // useEffect

  useEffect(() => {
    console.log('session', JSON.parse(sessionStorage.getItem('user')));
  },[])

  return (
    <div>
      {JSON.parse(sessionStorage.getItem('user')) == null
      ? <span>로그인 해주세요</span>
      : <span>{JSON.parse(sessionStorage.getItem('user')).nick}님, 환영합니다.</span>
      }
      {/* {JSON.parse(sessionStorage.getItem('user')).nick}님 환영합니다. */}
    </div>
  )
}

export default Main