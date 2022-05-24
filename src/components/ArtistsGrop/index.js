import React, { useState, useEffect, useRef } from "react";
import ArtistCard from "./ArtistCard";
import "./styles.scss";

function ArtistsGroup(props) {
  const { artists, title, columnCount } = props;
  const containerRef = useRef();
  const [artistsStack, setArtistsStack] = useState();

  useEffect(() => {
    if (columnCount) {
      setArtistsStack(artists.slice(0, columnCount));
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columnCount + ", minmax(0, 1fr))";
    }
  }, [columnCount, artists]);

  useEffect(() => {
    if (artistsStack) {
      setArtistsStack(artists.slice(0, columnCount));
    }
  }, [artists, artistsStack, columnCount]);

  return (
    <div className="artists">
      <div className="title">{title}</div>
      <div className="artists-container" ref={containerRef}>
        {artistsStack &&
          artistsStack.map((artist, index) => (
            <ArtistCard artist={artist} key={index} />
          ))}
      </div>
    </div>
  );
}

export default ArtistsGroup;
