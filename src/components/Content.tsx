import styled from "styled-components";
import Footer from "./Footer";

const ContentWrapper = styled.div`
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
      <Footer />
    </ContentWrapper>
  );
}
export default Content;
