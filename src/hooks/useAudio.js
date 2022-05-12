import React, { useState, useEffect } from "react";

export const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  const stopPlaying = () => {
    setPlaying(false);
  };

  useEffect(() => {
    audio.addEventListener("ended", stopPlaying);
    return () => {
      audio.removeEventListener("ended", stopPlaying);
    };
  }, []);

  return [playing, toggle];
};
