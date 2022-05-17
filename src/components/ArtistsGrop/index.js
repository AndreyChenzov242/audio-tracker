import React, { useState, useEffect, useRef } from "react";
import ArtistCard from "./ArtistCard";
import { useResize } from "../../hooks/useResize";
import "./styles.scss";

function ArtistsGroup(props) {
  const { artists, title } = props;
  const [columns, setColumns] = useState();
  const containerRef = useRef();
  const { width } = useResize(containerRef);
  const [artistsStack, setArtistsStack] = useState();

  useEffect(() => {
    setColumns(Math.floor(width / 180));
  }, [width]);

  useEffect(() => {
    if (columns) {
      setArtistsStack(artists.slice(0, columns));
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columns + ", minmax(100px, 230px))";
    }
  }, [columns]);

  useEffect(() => {
    if (artistsStack) {
      setArtistsStack(artists.slice(0, columns));
    }
  }, [artists]);

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
