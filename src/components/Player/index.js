import { useEffect, useState, useContext, useRef } from "react";
import { MdSkipNext, MdPlayArrow, MdPause } from "react-icons/md";
import { TrackListContext } from "../../context";
import { emptyImage } from "../../constants/images";
import ReactIcon from "../ReactIcon";
import "./styles.scss";

const Player = (props) => {
  const { trackList } = useContext(TrackListContext);
  const [playing, setPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const { currentTrack } = props;

  const audioRef = useRef();
  const audioSrc = useRef();

  const [currentTrackList, setCurrentTrackList] = useState();

  useEffect(() => {
    if (currentTrack && trackList) {
      pause();
      setPlaying(true);
      audioSrc.current.src = currentTrack;
      audioRef.current.load();
      audioRef.current.play();
      console.log(trackList);
      setActiveTrackIndex(
        trackList.findIndex((track) => track.preview_url == currentTrack)
      );
      setCurrentTrackList(trackList);
    }
  }, [currentTrack]);

  useEffect(() => {
    if (!currentTrackList) {
      setCurrentTrackList(trackList);
    }
  }, [trackList]);

  useEffect(() => {
    const stopPlaying = () => {
      setPlaying(false);
    };

    audioRef.current.addEventListener("ended", stopPlaying);

    return () => {
      audioRef.current.removeEventListener("ended", stopPlaying);
    };
  }, []);

  const play = () => {
    if (!currentTrackList) return;
    audioSrc.current.src = currentTrackList[activeTrackIndex].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const playNext = () => {
    if (!currentTrackList) return;
    setPlaying(true);
    if (currentTrackList.length == activeTrackIndex + 1) {
      audioSrc.current.src = currentTrackList[0].preview_url;
      audioRef.current.load();
      audioRef.current.play();
      setActiveTrackIndex(0);
      return;
    }
    audioSrc.current.src = currentTrackList[activeTrackIndex + 1].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setActiveTrackIndex(activeTrackIndex + 1);
  };

  const playPrev = () => {
    if (!currentTrackList) return;
    setPlaying(true);
    if (activeTrackIndex == 0) {
      audioSrc.current.src =
        currentTrackList[currentTrackList.length - 1].preview_url;
      audioRef.current.load();
      audioRef.current.play();
      setActiveTrackIndex(currentTrackList.length - 1);
      return;
    }
    audioSrc.current.src = currentTrackList[activeTrackIndex - 1].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setActiveTrackIndex(activeTrackIndex - 1);
  };

  const artist =
    currentTrackList?.[activeTrackIndex]?.artists
      .map((artist) => {
        return artist.name;
      })
      .join(", ") || "untitled";
  return (
    <div className={`player`}>
      <audio ref={audioRef}>
        <source ref={audioSrc} />
      </audio>

      <div className="player__image-wrapper">
        <img
          src={
            currentTrackList?.[activeTrackIndex]?.album.images[0].url ||
            emptyImage
          }
          alt="track image"
        />
      </div>
      <div className="player__title">
        <div className="player__track-name">
          {currentTrackList?.[activeTrackIndex]?.name || "untitled"}
        </div>
        <div className="player__artist">{artist}</div>
      </div>
      <div className="player__button-wrapper">
        <button
          className="player__button player__button--prev"
          onClick={() => playPrev()}
        >
          <ReactIcon size="xxl">
            <MdSkipNext />
          </ReactIcon>
        </button>

        {playing ? (
          <button className="player__button" onClick={() => pause()}>
            <ReactIcon size="xxl">
              <MdPause />
            </ReactIcon>
          </button>
        ) : (
          <button className="player__button" onClick={() => play()}>
            <ReactIcon size="xxl">
              <MdPlayArrow />
            </ReactIcon>
          </button>
        )}
        <button className="player__button" onClick={() => playNext()}>
          <ReactIcon size="xxl">
            <MdSkipNext />
          </ReactIcon>
        </button>
      </div>
    </div>
  );
};

export default Player;
