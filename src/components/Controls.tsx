import { useState, useEffect } from "react";
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

  @media (max-width: 1000px) {
    padding: 1rem 0.5rem;
  }
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
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 10rem;
  background: #282828;
  border-radius: 0.5rem;
  color: #cacaca;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 16px 24px #0000004c, 0 6px 8px #00000033;

  & ul {
    list-style: none;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    & li {
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 5px;
    }

    & li:nth-last-of-type(1) {
      border: 1px solid #4b4b4b;
    }

    & li:hover {
      color: #fff;
      background: #4b4b4b;
    }
  }
`;

function Controls() {
  const [profileMenuOpened, setProfileMenuOpened] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target) {
        setProfileMenuOpened(false);
      }
    };

    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  });

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
        <Profile
          onClick={() => {
            setProfileMenuOpened(!profileMenuOpened);
          }}
        >
          <img src="/images/profile.jpg" alt="profile" />
          <ProfileMenu
            style={{
              display: profileMenuOpened ? "block" : "none",
            }}
          >
            <ul>
              <li>Account</li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Log out</li>
            </ul>
          </ProfileMenu>
        </Profile>
      </Wrapper>
    </ControlsWrapper>
  );
}
export default Controls;
