import styled from "styled-components";
import Player from "./components/Player";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const Main = styled.main`
    flex: 1;
    display: flex;
    gap: 0.5rem;
  `;

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
