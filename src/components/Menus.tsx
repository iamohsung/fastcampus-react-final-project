import React, { useState } from "react";
import styled from "styled-components";

const Menus = () => {
  const sidoNames = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
    "세종",
  ];

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
          {sidoNames.map((sido) => {
            return (
              <option key={sido} value={sido}>
                {sido}
              </option>
            );
          })}
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
