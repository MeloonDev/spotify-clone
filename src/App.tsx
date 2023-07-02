import styled from "styled-components";
import Player from "./components/Player";

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
      <Main>main</Main>
      <Player />
    </Wrapper>
  );
}

export default App;
