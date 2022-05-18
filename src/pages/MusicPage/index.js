import React, { useState, useEffect, useContext } from "react";
import TracksGroup from "../../components/TracksGroup";
import { useSpotifyPlaylist } from "../../hooks/useSpotifyPlaylist";
import { makeSimpleTracksData } from "../../utils/makeSimpleTracksData";
import { TrackListContext } from "../../context";

function MusicPage(props) {
  const { playList } = props;
  const { tracks, name } = useSpotifyPlaylist(playList);
  const { setTrackList, setCurrentTrack, columnCount } =
    useContext(TrackListContext);
  const [simpleTracksData, setSimpleTracksData] = useState();

  useEffect(() => {
    if (tracks) {
      setSimpleTracksData(makeSimpleTracksData(tracks));
    }
  }, [tracks]);

  useEffect(() => {
    if (simpleTracksData) {
      setTrackList(simpleTracksData);
    }
  }, [simpleTracksData]);

  return (
    <main className="main-content">
      {simpleTracksData && (
        <TracksGroup
          tracks={simpleTracksData}
          setCurrentTrack={setCurrentTrack}
          title={name}
          columnCount={columnCount}
        />
      )}
    </main>
  );
}

export default MusicPage;
