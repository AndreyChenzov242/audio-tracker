import React, { useState, useEffect, useContext } from "react";
import { useSpotifyPlaylist } from "../../hooks/useSpotifyPlaylist";
import { makeSimpleTracksData } from "../../utils/makeSimpleTracksData";
import { TrackListContext } from "../../context";
import TracksGroup from "../../components/TracksGroup";
import Loader from "../../components/Loader";

function MusicPage(props) {
  const { playList } = props;
  const { tracks, name } = useSpotifyPlaylist(playList);
  const { setTrackList, setCurrentTrack, columnCount, windowWidth } =
    useContext(TrackListContext);
  const [simpleTracksData, setSimpleTracksData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (tracks) {
      setSimpleTracksData(makeSimpleTracksData(tracks));
      setIsLoaded(true);
    }
  }, [tracks]);

  useEffect(() => {
    if (simpleTracksData) {
      setTrackList(simpleTracksData);
    }
  }, [simpleTracksData, setTrackList]);

  if (!isLoaded) {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <main className="main-content">
      {simpleTracksData && (
        <TracksGroup
          tracks={simpleTracksData}
          setCurrentTrack={setCurrentTrack}
          title={name}
          columnCount={columnCount}
          width={windowWidth}
        />
      )}
    </main>
  );
}

export default MusicPage;
