import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Search from "./Search";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </ContentWrapper>
  );
}
export default Content;
