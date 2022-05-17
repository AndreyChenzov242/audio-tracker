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

  const [currentTrack, setCurrentTrack] = useState();

  const [search, setSearch] = useState();

  function toggleTextMuted() {
    setTextMuted(!textMuted);
  }

  return (
    <>
      <Header
        textMuted={textMuted}
        toggleTextMuted={toggleTextMuted}
        setSearch={setSearch}
      />
      <div className="content-wrapper">
        <Navbar textMuted={textMuted} />
        <TrackListContext.Provider
          value={{
            trackList,
            setTrackList,
            currentTrack,
            setCurrentTrack,
            search,
          }}
        >
          <div className="content">
            <Outlet />
            <Player currentTrack={currentTrack} />
          </div>
        </TrackListContext.Provider>
      </div>
    </>
  );
}

export default Layout;
