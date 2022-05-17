import React from "react";

import "./styles.scss";
import TrackCard from "./TrackCard";

function TracksGroup(props) {
  const { tracks, title, setCurrentTrack } = props;

  return (
    <div className="tracks">
      <div className="title">{title}</div>
      <div className="tracks-container">
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
