import React, { useState, useEffect } from "react";
import SongsGroup from "../../components/SongsGroup";
import { useSpotifyData } from "../../hooks/useSpotifyData";
import { useAsync } from "react-async";
import { useSpotifyPlaylist } from "../../hooks/useSpotifyPlaylist";
import { makeSimpleTracksData } from "../../utils/makeSimpleTracksData";
import Player from "../../components/Player/Player";

function MusicPage() {
  // const { tracks, albums, artists } = useSpotifyData("astral%20step");
  // const { tracks, albums, artists } = useSpotifyData("капли");
  const { tracks, name } = useSpotifyPlaylist("37i9dQZEVXbNcoJZ65xktI");

  let simpleTracksData;

  if (tracks) {
    simpleTracksData = makeSimpleTracksData(tracks);
  }

  return (
    <main className="main-content__wrapper">
      <div className="main-content">
        {tracks && <SongsGroup songs={simpleTracksData.items} title={name} />}
      </div>
      {tracks && <Player trackList={simpleTracksData.items} />}
    </main>
  );
}

export default MusicPage;
