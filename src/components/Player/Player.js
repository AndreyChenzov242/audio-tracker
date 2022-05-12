import { useEffect, useState } from "react";
import { useAudio } from "../../hooks/useAudio";
import "./styles.scss";

const Player = (props) => {
  const { trackList } = props;
  const [playing, setPlaying] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [audioPlayer] = useState(
    Array.from(trackList, (track) => new Audio(track.preview_url))
  );

  const play = () => {
    audioPlayer[activeTrackIndex].play();
  };

  const pause = () => {
    audioPlayer[activeTrackIndex].pause();
  };

  const playNext = () => {
    pause();
    if (audioPlayer.length == activeTrackIndex + 1) {
      audioPlayer[0].play();
      setActiveTrackIndex(0);
      return;
    }
    audioPlayer[activeTrackIndex + 1].play();
    setActiveTrackIndex(activeTrackIndex + 1);
  };

  const playPrev = () => {
    pause();
    if (activeTrackIndex == 0) {
      audioPlayer[audioPlayer.length - 1].play();
      setActiveTrackIndex(audioPlayer.length - 1);
      return;
    }
    audioPlayer[activeTrackIndex - 1].play();
    setActiveTrackIndex(activeTrackIndex - 1);
  };

  return (
    <div>
      <button className="button-next" onClick={() => playPrev()}>
        prev
      </button>
      <button
        className="button-play"
        onClick={() => play("4jvw60Iw8LpSRJwy1sOmoB")}
      >
        Play
      </button>
      <button className="button-next" onClick={() => pause()}>
        pause
      </button>
      <button className="button-next" onClick={() => playNext()}>
        next
      </button>
    </div>
  );
};

export default Player;

// const [audio, setAudio] = useState(new Audio());

//   trackList.map((track) => {
//     audioPlayer.push({
//       id: track.id,
//       audio: new Audio(track.preview_url),
//     });
//   });
