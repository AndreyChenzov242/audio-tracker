import React, { useState, useEffect, useContext } from "react";
import TracksGroup from "../../components/TracksGroup";
import { useSpotifyPlaylist } from "../../hooks/useSpotifyPlaylist";
import { makeSimpleTracksData } from "../../utils/makeSimpleTracksData";
import { TrackListContext } from "../../context";
import { UA_TOP_TRACKS } from "../../constants/playLists";

function MusicPage() {
  const { tracks, name } = useSpotifyPlaylist(UA_TOP_TRACKS);
  const { setTrackList, setCurrentTrack } = useContext(TrackListContext);
  const [simpleTracksData, setSimpleTracksData] = useState();

  useEffect(() => {
    if (tracks) {
      setSimpleTracksData(makeSimpleTracksData(tracks));
      setTrackList(simpleTracksData);
    }
  }, [tracks]);

  return (
    <main className="main-content">
      {simpleTracksData && (
        <TracksGroup
          tracks={simpleTracksData}
          setCurrentTrack={setCurrentTrack}
          title={name}
        />
      )}
    </main>
  );
}

export default MusicPage;
