import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background: #2a2a2a;
`;

const BottomLinks = styled.div`
  padding: 3rem 0;
  width: 100%;
  color: #9e9e9e;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & a {
    color: #9e9e9e;
    text-decoration: none;
  }

  & a:hover {
    text-decoration: underline;
    color: #fff;
  }

  & p {
    flex: 1;
    text-align: right;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <Underline />
      <BottomLinks>
        <a href="#">Legal</a>
        <a href="#">Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Settings</a>
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
        <p>© 2023 Spotify AB</p>
      </BottomLinks>
    </FooterWrapper>
  );
}
export default Footer;
