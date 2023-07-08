import styled from "styled-components";
import Player from "./components/Player";
import Menu from "./components/Menu";
import Content from "./components/Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const Main = styled.main`
  position: relative;
  overflow-y: hidden;
  flex: 1;
  display: flex;
  gap: 0.5rem;
`;

function App() {
  return (
    <Wrapper>
      <Main>
        <Menu />
        <Content />
      </Main>
      <Player />
    </Wrapper>
  );
}

export default App;
