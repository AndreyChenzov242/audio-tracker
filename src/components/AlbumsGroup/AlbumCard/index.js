import React, { useEffect, useRef } from "react";
import ReactIcon from "../../ReactIcon";
import { emptyImage } from "../../../constants/images";
import "./styles.scss";

function AlbumCard(props) {
  const { album, cardWidth, setCardWidth } = props;

  // const ref = useRef(null);

  // useEffect(() => {
  //   console.log("width", ref.current.offsetWidth);
  // }, [ref.current.offsetWidth]);

  return (
    <div className="album-card">
      <div className="album-card__image-wrapper">
        <img
          className="album-card__image"
          src={album.images[1]?.url || emptyImage}
          alt="album image"
        />
      </div>
      <div className="album-card__name">{album.name}</div>
      <div className="album-card__description">album</div>
    </div>
  );
}

export default AlbumCard;
