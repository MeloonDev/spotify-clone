import styled from "styled-components";
import {
  BiSearch,
  BiSolidSearch,
  BiLibrary,
  BiSolidTrophy,
} from "react-icons/bi";
import { GoHome, GoHomeFill, GoPlus, GoArrowRight } from "react-icons/go";
import { BsHeartFill } from "react-icons/bs";
import { HiTag } from "react-icons/hi";
import { Link } from "react-router-dom";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setActivePage } from "../store/activePageSlice";

const MenuWrapper = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1200px) {
    width: 18rem;
  }

  @media (max-width: 1000px) {
    position: fixed;
    //fix it later
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
  }
`;

const Section = styled.section`
  padding: 1rem 1.2rem;
  background: #121212;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  &.library {
    flex: 1;
  }

  @media (max-width: 1000px) {
    padding: 0.5rem 1rem;
    height: 100%;
    background: linear-gradient(to top, #000 80%, transparent);
    border-radius: 0;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;

    &.library {
      display: none;
    }
  }
`;

const NavButton = styled.div`
  width: 100%;
  background: transparent;
  cursor: pointer;

  &.home {
    margin-bottom: 0.8rem;
  }

  & a {
    text-decoration: none;
    font-size: 0.9rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.9rem;
    transition: color 0.2s ease-in-out;
    color: #a7a7a7;
  }

  &.active a {
    color: #fff;
  }

  &:hover a {
    color: #fff;
  }

  & a svg {
    width: 1.7rem;
    height: 1.7rem;
  }

  @media (max-width: 1000px) {
    width: 5rem;
    height: 100%;

    &.home {
      margin-bottom: 0;
    }

    & a {
      flex-direction: column;
      justify-content: center;
      gap: 0.2rem;
    }
  }
`;

const LibraryButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  color: #a7a7a7;

  &:hover {
    color: #fff;
  }

  & svg {
    width: 1.7rem;
    height: 1.7rem;
  }

  & span {
    flex: 1;
    text-align: left;
  }
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #1a1a1a;
    border-radius: 50%;
  }

  &:active {
    background: #000;
    border-radius: 50%;
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const Tags = styled.div`
  margin-top: 0.6rem;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Tag = styled.div`
  padding: 0.5rem 0.7rem;
  background: #ffffff12;
  border-radius: 10rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #ffffff22;
  }
`;

const Playlists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Playlist = styled.div`
  padding: 0.5rem;
  width: 100%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #ffffff12;
  }
`;

const PlaylistImage = styled.div`
  width: 3rem;
  height: 3rem;
  background: #ffffff12;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaylistInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
`;

const PlaylistName = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
`;

const PlaylistDescription = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: #9e9e9e;
`;

function Menu() {
  const active = useSelector((state: RootState) => state.activePage.value);
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <Section>
        <NavButton
          className={`home ${active === "home" ? "active" : ""}`}
          onClick={() => dispatch(setActivePage("home"))}
        >
          <Link to="/">
            {active === "home" ? <GoHomeFill /> : <GoHome />}Home
          </Link>
        </NavButton>
        <NavButton
          className={`${active === "search" ? "active" : ""}`}
          onClick={() => dispatch(setActivePage("search"))}
        >
          <Link to="/search">
            {active === "search" ? <BiSolidSearch /> : <BiSearch />}Search
          </Link>
        </NavButton>
      </Section>
      <Section className="library">
        <LibraryButton>
          <BiLibrary />
          <span>Your Library</span>
          <Icon>
            <GoPlus />
          </Icon>
          <Icon>
            <GoArrowRight />
          </Icon>
        </LibraryButton>
        <Tags>
          <Tag>Playlists</Tag>
          <Tag>Artists</Tag>
          <Tag>Albums</Tag>
        </Tags>
        <Playlists>
          <Playlist>
            <PlaylistImage
              style={{
                background: `linear-gradient(-45deg,#b4d6db, #4910f3 )`,
              }}
            >
              <BsHeartFill />
            </PlaylistImage>
            <PlaylistInfo>
              <PlaylistName>Liked Songs</PlaylistName>
              <PlaylistDescription>Playlist</PlaylistDescription>
            </PlaylistInfo>
          </Playlist>
          <Playlist>
            <PlaylistImage
              style={{
                background: `linear-gradient(-45deg,#cbdbb4, #f39110 )`,
              }}
            >
              <HiTag />
            </PlaylistImage>
            <PlaylistInfo>
              <PlaylistName>Podcasts</PlaylistName>
              <PlaylistDescription>Playlist</PlaylistDescription>
            </PlaylistInfo>
          </Playlist>
          <Playlist>
            <PlaylistImage
              style={{
                background: `linear-gradient(-45deg,#cd90dd, #f3106b )`,
              }}
            >
              <BiSolidTrophy />
            </PlaylistImage>
            <PlaylistInfo>
              <PlaylistName>Top 50 world</PlaylistName>
              <PlaylistDescription>Playlist</PlaylistDescription>
            </PlaylistInfo>
          </Playlist>
        </Playlists>
      </Section>
    </MenuWrapper>
  );
}
export default Menu;
