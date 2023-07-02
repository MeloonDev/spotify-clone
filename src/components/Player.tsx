import { useRef, useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import {
  BsFillPlayFill,
  BsPauseFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsShuffle,
  BsRepeat,
  BsHeart,
} from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";
import { MdPictureInPictureAlt } from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";
import {
  PiDevicesBold,
  PiArrowsOutSimpleBold,
  PiQueueBold,
} from "react-icons/pi";
import { BiVolumeFull, BiVolumeMute } from "react-icons/bi";
import { songs } from "../data/data";

const PlayerWrapper = styled.div`
  position: relative;
  padding-left: 0.5rem;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const SongInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AlbumCover = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  border-radius: 4px;
  background-color: #b2b2b2;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &.clicked {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    left: 0;
    width: 16.5rem;
    height: 16.5rem;
  }
`;

const AlbumCoverButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  outline: none;
  background-color: #000;
  border-radius: 50%;
  visibility: hidden;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${AlbumCover}:hover & {
    visibility: visible;
  }

  &:hover {
    opacity: 0.8;
  }

  & svg {
    width: 1rem;
    height: 1rem;
    color: #fff;
  }
`;

const SongDetails = styled.div`
  margin-left: 1rem;
  margin-right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.4rem;
`;

const SongTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SongArtist = styled.p`
  font-size: 0.6rem;
  color: #b2b2b2;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const SongButton = styled.button`
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  & svg {
    width: 1.1rem;
    height: 1.1rem;
    color: #b2b2b2;
  }

  &:hover svg {
    color: #fff;
  }
`;

const SongPlayer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SongControls = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  & svg {
    width: 1.3rem;
    height: 1.3rem;
    color: #b2b2b2;
  }

  &:hover svg {
    color: #fff;
  }
`;

const PlayButton = styled.button`
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.9);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Timeline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #b2b2b2;
`;

const SongCurrentTime = styled.p`
  font-size: 0.68rem;
`;

const ProgressBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background-color: #4d4d4d;
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: -400px 0 0 400px #fff;
  }

  &:hover::-webkit-slider-thumb {
    background-color: #fff;
    box-shadow: -400px 0 0 400px #1ed760;
  }
`;

const SongDuration = styled.p`
  font-size: 0.68rem;
`;

const SongTools = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SongVolume = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #b2b2b2;

  & svg {
    width: 1.1rem;
    height: 1.1rem;
    color: #b2b2b2;
    cursor: pointer;
  }

  & svg:hover {
    color: #fff;
  }
`;

const SongVolumeBar = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 4px;
  background-color: #4d4d4d;
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: -400px 0 0 400px #fff;
  }

  &:hover::-webkit-slider-thumb {
    background-color: #fff;
    box-shadow: -400px 0 0 400px #1ed760;
  }
`;

function Player() {
  const [clicked, setClicked] = useState(false);

  const audio = useRef<null | HTMLAudioElement>(null);
  const [currentSong, setCurrentSong] = useState(
    songs[3]
    // {title: "Title",
    // artist: "Artist",
    // path: "",
    // cover: "",}
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const [elapsedTime, setElapsedTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds =
      Math.floor(time % 60) < 10
        ? `0${Math.floor(time % 60)}`
        : Math.floor(time % 60);

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    if (!audio.current) return;
    audio.current.volume = volume;

    if (mute) {
      setVolume(0);
    } else {
      audio.current.volume = volume;
    }

    if (volume === 0 && !mute) {
      setVolume(0.5);
    }
  }, [mute, volume]);

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const duration = audio.current?.duration;
        const elapsed = audio.current?.currentTime;

        if (!duration || !elapsed) return;
        setRemainingTime(duration);
        setElapsedTime(elapsed);

        if (elapsed === duration) {
          setIsPlaying(false);
        }
      }, 100);
    }
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audio.current) return;
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerWrapper>
      <audio ref={audio} src={currentSong.path} />
      <SongInfo>
        <AlbumCover
          className={clicked ? "clicked" : ""}
          style={{
            backgroundImage: `url(${currentSong.cover})`,
          }}
        >
          <AlbumCoverButton
            onClick={() => {
              setClicked(!clicked);
            }}
            style={{
              transform: clicked ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <SlArrowUp />
          </AlbumCoverButton>
        </AlbumCover>
        <SongDetails>
          <SongTitle>{currentSong.title}</SongTitle>
          <SongArtist>{currentSong.artist}</SongArtist>
        </SongDetails>
        <SongButton>
          <BsHeart />
        </SongButton>
        <SongButton>
          <MdPictureInPictureAlt />
        </SongButton>
      </SongInfo>
      <SongPlayer>
        <SongControls>
          <Button>
            <BsShuffle />
          </Button>
          <Button>
            <BsFillSkipStartFill />
          </Button>
          <PlayButton
            onClick={() => {
              togglePlay();
            }}
          >
            {isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
          </PlayButton>
          <Button>
            <BsFillSkipEndFill />
          </Button>
          <Button>
            <BsRepeat />
          </Button>
        </SongControls>
        <Timeline>
          <SongCurrentTime>{formatTime(elapsedTime)}</SongCurrentTime>
          <ProgressBar
            type="range"
            min="0"
            max={remainingTime}
            value={elapsedTime}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (!audio.current) return;
              audio.current.currentTime = Number(e.target.value);
            }}
          ></ProgressBar>
          <SongDuration>{formatTime(remainingTime)}</SongDuration>
        </Timeline>
      </SongPlayer>
      <SongTools>
        <SongButton>
          <TbMicrophone2 />
        </SongButton>
        <SongButton>
          <PiQueueBold />
        </SongButton>
        <SongButton>
          <PiDevicesBold />
        </SongButton>
        <SongVolume>
          {mute ? (
            <BiVolumeMute
              onClick={() => {
                setMute(!mute);
              }}
            />
          ) : (
            <BiVolumeFull onClick={() => setMute(!mute)} />
          )}
          <SongVolumeBar
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setVolume(parseInt(e.target.value) / 100);
              if (parseInt(e.target.value) != 0) setMute(false);
              else setMute(true);
            }}
          />
        </SongVolume>
        <SongButton>
          <PiArrowsOutSimpleBold />
        </SongButton>
      </SongTools>
    </PlayerWrapper>
  );
}
export default Player;
