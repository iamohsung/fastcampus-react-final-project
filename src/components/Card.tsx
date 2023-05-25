import React from "react";
import styled from "styled-components";

const Card = (props: any) => {
  return (
    <Container>
      <div>
        <p>
          <span className='region-gu-name'>서울</span>
          <span className='region-sido-name'>강서구</span>
        </p>
        <span className='material-symbols-outlined favorite favorite-on'>
          star
        </span>
      </div>
      <div>
        <div>
          <span>좋음</span>
        </div>
      </div>
      <div>
        <br />
        미세먼지 수치: 30
        <br />
        2020-11-11 11:11 기준
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90vw;
  height: 20vh;
  border-radius: 10px;
  background-color: skyblue;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
`;
