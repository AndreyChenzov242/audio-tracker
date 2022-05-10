import React, { useState, useEffect } from "react";
import SongsGroup from "../../components/SongsGroup";
import { useSpotifyData } from "../../hooks/useSpotifyData";
import { useAsync } from "react-async";

function MusicPage() {
  const { tracks, albums, artists } = useSpotifyData("eminem");

  console.log(tracks);

  return (
    <main className="main-content__wrapper">
      <div className="main-content">
        {tracks && <SongsGroup songs={tracks.items} />}
      </div>
    </main>
  );
}

export default MusicPage;

// if (tracks) {
//   console.log(tracks);
// }
