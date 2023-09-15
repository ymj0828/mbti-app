import styled from "styled-components";
import Start from "./pages/Start";
import Mbti from "./pages/Mbti";
import Show from "./pages/Show";
import { GlobalStyle } from "./components/GlobalStyle";
import { useSelector } from "react-redux";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state)=>state.mbti.page)
  const survey = useSelector((state)=>state.mbti.survey)
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Main>
        {
          page === 0 ? <Start></Start>:(page !== survey.length + 1)?<Mbti></Mbti>:<Show></Show>
        }
      </Main>
    </>
  );
}

export default App;
