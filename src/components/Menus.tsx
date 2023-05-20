import React, { useState } from "react";
import styled from "styled-components";

const Menus = () => {
  const [selectedSidoName, setSelectedSidoName] = useState("서울");
  const [selectedStationName, setSelectedStationName] = useState("강서구");

  const sidoChangeHandler = (value: string) => {};
  const stationChangeHandler = (value: string) => {};

  return (
    <Container>
      <div>
        시도 선택:
        <br />
        <select
          name='sidoName'
          id='sidoName'
          value={selectedSidoName}
          onChange={(e) => sidoChangeHandler(e.target.value)}
        >
          {}
        </select>
      </div>
      <div>
        구군 선택:
        <br />
        <select
          name='sidoName'
          id='sidoName'
          value={selectedStationName}
          onChange={(e) => stationChangeHandler(e.target.value)}
        >
          {}
        </select>
      </div>
    </Container>
  );
};

export default Menus;

const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  gap: 2px;
  position: fixed;
  top: 0;
  z-index: 3;

  select {
    border: 1px solid rgba(200, 200, 200, 1);
    color: #999;
    font-family: "Nanum Gothic", serif;
    border-radius: 5px;
  }

  div {
    padding: 0 10px;
  }
`;
