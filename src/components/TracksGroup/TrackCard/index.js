import React from "react";
import ReactIcon from "../../ReactIcon";
import { MdPlayArrow } from "react-icons/md";
import "./styles.scss";

function TrackCard(props) {
  const { track, setCurrentTrack } = props;

  const trackArtists = track.artists
    .map((artist) => {
      return artist.name;
    })
    .join(", ");

  return (
    <div className="track-card">
      <div className="track-card__image-wrapper">
        <div className="track-card__image-overlay">
          {track.preview_url && (
            <button
              className="overlay"
              onClick={() => setCurrentTrack(track.preview_url)}
            >
              <ReactIcon size="xxxl">
                <MdPlayArrow />
              </ReactIcon>
            </button>
          )}
          {!track.preview_url && (
            <div className="overlay">
              Preview is not available for this track
            </div>
          )}
        </div>
        <img
          className="track-card__image"
          src={track.album?.images[1].url || track.track.album.images[1].url}
          alt="track"
        />
      </div>
      <div className="track-card__text">
        <div className="track-card__name">{track.name || track.track.name}</div>
        <div className="track-card__description">{trackArtists}</div>
      </div>
      {track.preview_url && (
        <button
          className="play-button"
          onClick={() => setCurrentTrack(track.preview_url)}
        >
          <ReactIcon size="xxxl" color={"grey"}>
            <MdPlayArrow />
          </ReactIcon>
        </button>
      )}
    </div>
  );
}

export default TrackCard;
