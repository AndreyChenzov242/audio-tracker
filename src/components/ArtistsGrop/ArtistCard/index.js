import React from "react";
import { emptyImage } from "../../../constants/images";
import "./styles.scss";

function ArtistCard(props) {
  const { artist } = props;

  return (
    <div className="artist-card">
      <div className="artist-card__image-wrapper">
        <img
          className="artist-card__image"
          src={artist.images[1]?.url || emptyImage}
          alt="artist"
        />
      </div>
      <div className="artist-card__name">{artist.name}</div>
      <div className="artist-card__description">artist</div>
    </div>
  );
}

export default ArtistCard;
