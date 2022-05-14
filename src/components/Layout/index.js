import React, { useState } from "react";

import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import "./styles.scss";
import { TrackListContext } from "../../context";
import Player from "../Player";

function Layout() {
  const [textMuted, setTextMuted] = useState(false);

  const [trackList, setTrackList] = useState();

  const [correntTrack, setCurrentTrack] = useState();

  function toggleTextMuted() {
    setTextMuted(!textMuted);
  }

  return (
    <>
      <Header textMuted={textMuted} toggleTextMuted={toggleTextMuted} />
      <div className="content-wrapper">
        <Navbar textMuted={textMuted} />
        <TrackListContext.Provider
          value={{ trackList, setTrackList, correntTrack, setCurrentTrack }}
        >
          <Outlet />
          <Player textMuted={textMuted} correntTrack={correntTrack} />
        </TrackListContext.Provider>
      </div>
    </>
  );
}

export default Layout;
