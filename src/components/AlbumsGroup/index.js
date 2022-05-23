import React, { useEffect, useState, useRef } from "react";
import AlbumCard from "./AlbumCard";
import "./styles.scss";

function AlbumsGroup(props) {
  const { albums, title, columnCount } = props;
  const containerRef = useRef();
  const [albumsStack, setAlbumsStack] = useState();

  useEffect(() => {
    if (columnCount) {
      setAlbumsStack(albums.slice(0, columnCount));
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columnCount + ", minmax(0, 1fr))";
    }
  }, [columnCount, albums]);

  useEffect(() => {
    if (albumsStack) {
      setAlbumsStack(albums.slice(0, columnCount));
    }
  }, [albums]);

  return (
    <div className="albums">
      <div className="title">{title}</div>
      <div className="albums-container" ref={containerRef}>
        {albumsStack &&
          albumsStack.map((album, index) => (
            <AlbumCard album={album} key={index} />
          ))}
      </div>
    </div>
  );
}

export default AlbumsGroup;
