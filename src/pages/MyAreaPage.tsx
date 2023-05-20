import React from "react";
import styled from "styled-components";
import Menus from "../components/Menus";

const MyAreaPage = () => {
  return (
    <>
      <Menus />
      <Container>MyAreaPage</Container>
    </>
  );
};

export default MyAreaPage;

const Container = styled.div`
  position: relative;
  top: 10vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 7px;
  overflow-y: auto;
`;
