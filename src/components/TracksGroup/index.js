import React, { useEffect, useRef } from "react";

import "./styles.scss";
import TrackCard from "./TrackCard";

function TracksGroup(props) {
  const { tracks, title, setCurrentTrack, columnCount, width } = props;
  const containerRef = useRef();

  useEffect(() => {
    if (width < 768) {
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + 1 + ", minmax(0, 1fr))";
      return;
    }
    if (width < 992) {
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + 2 + ", minmax(0, 1fr))";
      return;
    }

    if (columnCount) {
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columnCount + ", minmax(0, 1fr))";
    }
  }, [columnCount, width]);

  return (
    <div className="tracks">
      <div className="title">{title}</div>
      <div className="tracks-container" ref={containerRef}>
        {tracks.map((track, index) => (
          <TrackCard
            track={track}
            key={index}
            setCurrentTrack={setCurrentTrack}
          />
        ))}
      </div>
    </div>
  );
}

export default TracksGroup;
