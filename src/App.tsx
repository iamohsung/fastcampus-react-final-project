import styled from "styled-components";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MyAreaPage from "./pages/MyAreaPage";
import AllAreaPage from "./pages/AllAreaPage";
import FavoritePage from "./pages/FavoritePage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Container className='App'>
        <Loading />
        <Routes>
          <Route index path='/' element={<MyAreaPage />} />
          <Route path='/all' element={<AllAreaPage />} />
          <Route path='/favorite' element={<FavoritePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Nav />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
