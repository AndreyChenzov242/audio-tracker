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

  function toggleTextMuted() {
    setTextMuted(!textMuted);
  }

  return (
    <>
      <Header textMuted={textMuted} toggleTextMuted={toggleTextMuted} />
      <div className="content-wrapper">
        <Navbar textMuted={textMuted} />
        <TrackListContext.Provider value={{ trackList, setTrackList }}>
          <Outlet />
          <Player textMuted={textMuted} />
        </TrackListContext.Provider>
      </div>
    </>
  );
}

export default Layout;
