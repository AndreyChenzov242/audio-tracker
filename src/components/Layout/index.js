import React, { useState, useRef, useEffect } from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { TrackListContext } from "../../context";
import Player from "../Player";
import { useResize } from "../../hooks/useResize";

import "./styles.scss";

function Layout() {
  const [isTextMuted, setIsTextMuted] = useState(false);
  const [isActiveNavbar, setIsActiveNavbar] = useState(false);
  const [trackList, setTrackList] = useState();
  const [currentTrack, setCurrentTrack] = useState();
  const [search, setSearch] = useState();
  const [columnCount, setColumnCount] = useState();
  const contentRef = useRef();
  const wrapperRef = useRef();
  const { width: contentWidth } = useResize(contentRef);
  const { width: wrapperWidth } = useResize(wrapperRef);

  useEffect(() => {
    setColumnCount(Math.floor((contentWidth - 64) / 170));
  }, [contentWidth]);

  useEffect(() => {
    if (wrapperWidth < 992) {
      setIsTextMuted(false);
    }
  }, [wrapperWidth]);

  function toggleIsTextMuted() {
    setIsTextMuted(!isTextMuted);
  }

  function toggleIsActiveNavbar() {
    setIsActiveNavbar(!isActiveNavbar);
  }

  function turnOffNavbar() {
    setIsActiveNavbar(false);
  }

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [isTextMuted]);

  return (
    <>
      <Header
        isTextMuted={isTextMuted}
        toggleIsTextMuted={toggleIsTextMuted}
        setSearch={setSearch}
        toggleIsActiveNavbar={toggleIsActiveNavbar}
        turnOffNavbar={turnOffNavbar}
      />
      <div className="content-wrapper" ref={wrapperRef}>
        <Navbar
          isTextMuted={isTextMuted}
          isActiveNavbar={isActiveNavbar}
          turnOffNavbar={turnOffNavbar}
        />
        <TrackListContext.Provider
          value={{
            trackList,
            setTrackList,
            currentTrack,
            setCurrentTrack,
            search,
            columnCount,
            wrapperWidth,
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
