import React, { useEffect, useState, useRef } from "react";
import AlbumCard from "./AlbumCard";
import { useResize } from "../../hooks/useResize";
import "./styles.scss";

function AlbumsGroup(props) {
  const { albums, title } = props;
  const [columns, setColumns] = useState();
  const containerRef = useRef();
  const { width } = useResize(containerRef);
  const [albumsStack, setAlbumsStack] = useState();

  useEffect(() => {
    setColumns(Math.floor(width / 180));
  }, [width]);

  useEffect(() => {
    if (columns) {
      setAlbumsStack(albums.slice(0, columns));
      containerRef.current.style.gridTemplateColumns =
        "repeat(" + columns + ", minmax(100px, 230px))";
    }
  }, [columns]);

  useEffect(() => {
    if (albumsStack) {
      setAlbumsStack(albums.slice(0, columns));
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
