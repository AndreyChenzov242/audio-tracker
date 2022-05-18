import React from "react";
import { emptyImage } from "../../../constants/images";
import "./styles.scss";

function AlbumCard(props) {
  const { album } = props;

  const year = album.release_date.slice(0, 4);

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
      <div className="album-card__description">
        {year + " • " + album.total_tracks + " tracks"}
      </div>
    </div>
  );
}

export default AlbumCard;
