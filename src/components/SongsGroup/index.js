import React from "react";
import "./styles.scss";

function SongsGroup(props) {
  const { songs } = props.songs;

  if (songs) {
    return (
      <div className="songs">
        <h2 className="songs__title">Discover</h2>
        <div className="music-card">
          {songs.map((song, index) => (
            <div className="music-card__item" key={index}>
              <div className="music-card__image-wrapper">
                <img
                  className="music-card__image"
                  // src={song.img}
                  alt="song image"
                />
              </div>
              <div className="music-card__name">{song.name}</div>
              {/* <div className="music-card__description">{song.description}</div> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return <div>wait</div>;
}

export default SongsGroup;
