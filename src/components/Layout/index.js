import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { TrackListContext } from "../../context";
import Player from "../Player";
import { useResize } from "../../hooks/useResize";

import "./styles.scss";

function Layout() {
  const [textMuted, setTextMuted] = useState(false);
  const [trackList, setTrackList] = useState();
  const [currentTrack, setCurrentTrack] = useState();
  const [search, setSearch] = useState();
  const [columnCount, setColumnCount] = useState();

  const contentRef = useRef();
  const { width } = useResize(contentRef);

  useEffect(() => {
    setColumnCount(Math.floor((width - 64) / 180));
  }, [width]);

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
            columnCount,
          }}
        >
          <div className="content" ref={contentRef}>
            <Outlet />
            <Player currentTrack={currentTrack} />
          </div>
        </TrackListContext.Provider>
      </div>
    </>
  );
}

export default Layout;
