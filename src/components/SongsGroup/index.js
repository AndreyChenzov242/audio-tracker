import React from "react";
import ReactIcon from "../ReactIcon";
import { MdPlayArrow } from "react-icons/md";

import "./styles.scss";

function SongsGroup(props) {
  const { songs, title, setCurrentTrack } = props;

  return (
    <div className="songs">
      <h2 className="songs__title">{title}</h2>
      <div className="music-card">
        {songs.map((song, index) => (
          <div className="music-card__item" key={index}>
            <div className="music-card__image-wrapper">
              <div className="music-card__image-overlay">
                <button onClick={() => setCurrentTrack(song.preview_url)}>
                  <ReactIcon size="xxxl">
                    <MdPlayArrow />
                  </ReactIcon>
                </button>
              </div>
              <img
                className="music-card__image"
                src={
                  song.album?.images[1].url || song.track.album.images[1].url
                }
                alt="song image"
              />
            </div>
            <div className="music-card__name">
              {song.name || song.track.name}
            </div>
            <div className="music-card__description">
              {song.artists
                .map((artist) => {
                  return artist.name;
                })
                .join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongsGroup;
