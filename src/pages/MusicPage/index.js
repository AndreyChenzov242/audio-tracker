import React, { useState, useEffect, useContext } from "react";
import SongsGroup from "../../components/SongsGroup";
import { useSpotifyPlaylist } from "../../hooks/useSpotifyPlaylist";
import { makeSimpleTracksData } from "../../utils/makeSimpleTracksData";
import Player from "../../components/Player";
import { TrackListContext } from "../../context";

function MusicPage() {
  // const { tracks, albums, artists } = useSpotifyData("astral%20step");
  // const { tracks, albums, artists } = useSpotifyData("капли");
  const { tracks, name } = useSpotifyPlaylist("37i9dQZEVXbNcoJZ65xktI");
  const { setTrackList, setCurrentTrack } = useContext(TrackListContext);
  const [simpleTracksData, setSimpleTracksData] = useState();

  useEffect(() => {
    if (tracks) {
      setSimpleTracksData(makeSimpleTracksData(tracks));
      setTrackList(simpleTracksData);
    }
  }, [tracks]);

  return (
    <main className="main-content__wrapper">
      <div className="main-content">
        {simpleTracksData && (
          <SongsGroup
            songs={simpleTracksData}
            setCurrentTrack={setCurrentTrack}
            title={name}
          />
        )}
      </div>
    </main>
  );
}

export default MusicPage;
