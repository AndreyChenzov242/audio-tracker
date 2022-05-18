import React, { useEffect, useRef } from "react";

import "./styles.scss";
import TrackCard from "./TrackCard";

function TracksGroup(props) {
  const { tracks, title, setCurrentTrack, columnCount } = props;
  const containerRef = useRef();

  useEffect(() => {
    if (columnCount) {
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columnCount + ", minmax(100px, 230px))";
    }
  }, [columnCount]);

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
