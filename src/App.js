// 문법을 배웠으면 어디다가 쓸지 생각을해봐라.
import React from 'react';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { data } from './utils/data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Main } from './pages/Main.js';
import { Detail } from './pages/Detail.js';
import { About } from './pages/About.js';
import { NotFound } from './pages/NotFound.js';
import { Event } from './pages/Event.js';

// 페이지 이동버튼을 만들고 싶으면 Link 태그를 사용해야 한다.

function App() {
  const [shoes] = useState(data);

  const navigate = useNavigate();
  // useNavigate라는 hook을 사용하면 페이지 이동을 할 수 있다.
  // useNavigate 안에 페이지 이동을 도와주는 함수가 들어있다고 생각하자.

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            SPAM
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/detail">
              상세페이지
            </Nav.Link> */}
            {/* <Nav.Link as={Link} to="/about">
              어바웃페이지
            </Nav.Link> */}

            {/** 페이지 이동에는 여러가지 방법 들이 있다. */}
            {/** navigate(-1)은 뒤로가기 이고 navigate(1)은 앞으로 한 페이지 가달라는 것이다. */}
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              정보
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              이벤트
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">메인페이지</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">어바웃페이지</Link> */}
      <Routes>
        <Route path="/" element={<Main shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>

        {/** nested Router의 장점은
         * 1. 중복되는 라우터를 줄일 수 있다.
         * 2. 라우터를 중첩해서 사용할 수 있다.
         * 3. 라우터를 중첩해서 사용할 때, 부모 라우터에는 element를 넣지 않는다.
         * 4. 부모 라우터에는 Outlet을 넣어준다.
         * 5. Outlet은 자식 라우터들이 렌더링 되는 곳이다.
         */}

        {/** 그래서 nested routes 언제씀?
         * -> 여러 유사한 페이지 필요할 때 (거의 차이가 없을 때)
         * 편리하게 일부만 UI갈아치울 수 있을 듯
         * 모달창도 가능함.
         * 이런식으로 ui만들면 뒤로가기 버튼 이용가능 + 페이지 이동이 쉬움 ( ui 스위치 조작 쉬움 )
         */}

        <Route path="/about" element={<About />}>
          {/** 부모 안에 자식을 보여준다. */}
          <Route path="member" element={<p>멤버임</p>} />
          <Route path="location" element={<p>위치정보임</p>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        <Route path="*" element={<NotFound />} />
        {/* <Route /> */}
      </Routes>
    </div>
  );
}

export default App;
