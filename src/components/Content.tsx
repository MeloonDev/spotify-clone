import styled from "styled-components";
import Footer from "./Footer";
import Home from "./Home";

const ContentWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 1rem 1.5rem;
  background: #121212;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

function Content() {
  return (
    <ContentWrapper>
      <Home />
      <Footer />
    </ContentWrapper>
  );
}
export default Content;
