import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Tabs = () => {
  return (
    <Container>
      <SubContainer>
        <Link to='/' style={{ textDecoration: "none" }}>
          <NavTab>
            <span className='material-symbols-outlined nav-icon'>pin_drop</span>
            <span className='nav-name'>내 지역보기</span>
          </NavTab>
        </Link>
        <Link to='/all' style={{ textDecoration: "none" }}>
          <NavTab>
            <span className='material-symbols-outlined nav-icon'>map</span>
            <span className='nav-name'>전체 시도보기</span>
          </NavTab>
        </Link>
        <Link to='/favorite' style={{ textDecoration: "none" }}>
          <NavTab>
            <span className='material-symbols-outlined nav-icon'>Star</span>
            <span className='nav-name'>즐겨찾기</span>
          </NavTab>
        </Link>
      </SubContainer>
    </Container>
  );
};

export default Tabs;

const Container = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 10vh;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #999;
  background-color: white;
  align-items: center;
  pading: 5px;
  z-index: 3;

  span {
    font-size: 1.2rem;
    color: #999;
    font-weight: 600;
    margin-top: 5px;
  }

  .nav-icon {
    font-size: 3rem;
  }

  .nav-name {
    font-size: 1rem;
  }
`;

const SubContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const NavTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  cursor: pointer;
`;
