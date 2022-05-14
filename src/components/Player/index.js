import { useEffect, useState, useContext, useRef } from "react";
import { useAudio } from "../../hooks/useAudio";
import { MdSkipNext, MdPlayArrow, MdPause } from "react-icons/md";
import ReactIcon from "../ReactIcon";
import "./styles.scss";
import { TrackListContext } from "../../context";

const Player = (props) => {
  const { trackList } = useContext(TrackListContext);
  const [playing, setPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const isTextMuted = props.textMuted;
  const textMuted = isTextMuted ? "text-muted" : "";

  const audioRef = useRef(null);
  const audioSrc = useRef(null);

  const stopPlaying = () => {
    setPlaying(false);
  };

  useEffect(() => {
    if (!trackList) return;
    audioRef.current.addEventListener("ended", stopPlaying);

    return () => {
      audioRef.current.removeEventListener("ended", stopPlaying);
    };
  }, [audioSrc]);

  const play = () => {
    audioSrc.current.src = trackList[activeTrackIndex].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const playNext = () => {
    pause();
    setPlaying(true);
    if (trackList.length == activeTrackIndex + 1) {
      audioSrc.current.src = trackList[0].preview_url;
      audioRef.current.load();
      audioRef.current.play();
      setActiveTrackIndex(0);
      return;
    }
    audioSrc.current.src = trackList[activeTrackIndex + 1].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setActiveTrackIndex(activeTrackIndex + 1);
  };

  const playPrev = () => {
    pause();
    setPlaying(true);
    if (activeTrackIndex == 0) {
      audioSrc.current.src = trackList[trackList.length - 1].preview_url;
      audioRef.current.load();
      audioRef.current.play();
      setActiveTrackIndex(trackList.length - 1);
      return;
    }
    audioSrc.current.src = trackList[activeTrackIndex - 1].preview_url;
    audioRef.current.load();
    audioRef.current.play();
    setActiveTrackIndex(activeTrackIndex - 1);
  };

  if (!trackList) {
    return;
  }

  return (
    <div className={`player ${textMuted}`}>
      <audio ref={audioRef}>
        <source ref={audioSrc} />
      </audio>

      <div className="player__image-wrapper">
        <img
          src={trackList[activeTrackIndex].album.images[1].url}
          alt="track image"
        />
      </div>
      <div className="player__title">
        <div className="player__track-name">
          {trackList[activeTrackIndex].name}
        </div>
        <div className="player__artist">
          {trackList[activeTrackIndex].artists
            .map((artist) => {
              return artist.name;
            })
            .join(", ")}
        </div>
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
