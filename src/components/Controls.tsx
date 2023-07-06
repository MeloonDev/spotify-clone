import styled from "styled-components";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { LuDownload } from "react-icons/lu";

const ControlsWrapper = styled.div`
  position: sticky;
  padding: 0.5rem;
  top: 0;
  z-index: 1;
  width: 100%;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Arrow = styled.div`
  width: 2rem;
  height: 2rem;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & svg {
    width: 1rem;
    height: 1rem;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const Install = styled.div`
  padding: 0.5rem 1rem;
  background: #000;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Profile = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function Controls() {
  const navigate = useNavigate();

  return (
    <ControlsWrapper>
      <Arrow onClick={() => navigate(-1)}>
        <SlArrowLeft />
      </Arrow>
      <Arrow onClick={() => navigate(+1)}>
        <SlArrowRight />
      </Arrow>
      <Wrapper>
        <Install>
          <LuDownload /> Install App
        </Install>
        <Profile>
          <img src="/images/profile.jpg" alt="profile" />
        </Profile>
      </Wrapper>
    </ControlsWrapper>
  );
}
export default Controls;
