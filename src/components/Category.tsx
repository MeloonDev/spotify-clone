import styled from "styled-components";
import { songs } from "../data/data";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import type { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setIsPlaying } from "../store/isPlayingSlice";
import { setCurrentSong } from "../store/currenSongSlice";

const CategoryTitle = styled.h2`
  width: 100%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

const CategorySongs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
`;

const Song = styled.div`
  flex: 1;
  padding: 0.8rem;
  background: #181818;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #2a2a2a;
  }
`;

const SongImage = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const PlayButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 3rem;
  height: 3rem;
  border: none;
  outline: none;
  border-radius: 50%;
  background: #1ed760;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;

  &.playing {
    opacity: 1;
    transform: translateY(0);
  }

  ${Song}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 1.9rem;
    height: 1.9rem;
  }
`;

const SongTitle = styled.h3`
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

const SongArtist = styled.p`
  width: 100%;
  color: #a4a4a4;
  font-size: 0.7rem;
  font-weight: 500;
  text-align: left;
`;

type CategoryProps = {
  category: string;
};

function Category({ category }: CategoryProps) {
  const isPlaying = useSelector((state: RootState) => state.isPlaying.value);
  const currentSongIndex = useSelector(
    (state: RootState) => state.currenSong.value
  );
  const dispatch = useDispatch();

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategorySongs>
        {songs.map((song) => (
          <Song key={song.title}>
            <SongImage style={{ backgroundImage: `url(${song.cover})` }}>
              <PlayButton
                className={
                  isPlaying && song.index === currentSongIndex ? "playing" : ""
                }
                onClick={() => {
                  dispatch(setCurrentSong(song.index));
                  dispatch(setIsPlaying(!isPlaying));
                }}
              >
                {isPlaying && song.index === currentSongIndex ? (
                  <BsPauseFill />
                ) : (
                  <BsFillPlayFill />
                )}
              </PlayButton>
            </SongImage>
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
          </Song>
        ))}
      </CategorySongs>
    </>
  );
}
export default Category;
