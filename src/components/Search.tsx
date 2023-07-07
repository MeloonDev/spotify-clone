import styled from "styled-components";
import { playlists } from "../data/data";
import { PlaylistType } from "../types/types";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setActivePage } from "../store/activePageSlice";
import { useEffect } from "react";

const SearchWrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  & h2 {
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const SearchInput = styled.div`
  align-self: flex-start;
  width: 30%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  background: #ffffff12;
  font-size: 0.8rem;
  font-weight: 500;
  color: #aaaaaa;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  &:focus-within {
    background: #ffffff22;
    outline: 2px solid #fff;
    color: #fff;
  }

  &:hover {
    background: #ffffff22;
    color: #fff;
  }

  & svg {
    font-size: 1.2rem;
  }

  & input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    font-weight: 500;
  }
`;

const Playlists = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1.6rem;
`;

const Playlist = styled.div`
  position: relative;
  padding: 1rem;
  min-width: 12rem;
  min-height: 12rem;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  & h3 {
    word-wrap: break-word;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const PlaylistImage = styled.div`
  position: absolute;
  bottom: -0.5rem;
  right: -0.7rem;
  width: 6rem;
  height: 6rem;
  transform: rotate(25deg);

  & img {
    width: 100%;
    height: 100%;
  }
`;

function Search() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("search"));
  }, []);

  return (
    <SearchWrapper>
      <h2>Search</h2>
      <SearchInput>
        <label htmlFor="search">
          <BiSearch />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search for artists, songs, or podcasts"
        />
      </SearchInput>
      <Playlists>
        {playlists.map((playlist: PlaylistType) => (
          <Playlist
            key={playlist.title}
            style={{
              background: playlist.background,
            }}
          >
            <h3>{playlist.title}</h3>
            <PlaylistImage>
              <img src="/images/playlist.jpg" alt="playlist image" />
            </PlaylistImage>
          </Playlist>
        ))}
      </Playlists>
    </SearchWrapper>
  );
}
export default Search;
