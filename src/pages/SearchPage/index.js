import React, { useEffect, useContext } from "react";
import TracksGroup from "../../components/TracksGroup";
import { useSpotifyData } from "../../hooks/useSpotifyData";
import { TrackListContext } from "../../context";
import "./styles.scss";
import ArtistsGroup from "../../components/ArtistsGrop";
import AlbumsGroup from "../../components/AlbumsGroup";

function SearchPage() {
  const { setTrackList, setCurrentTrack, search } =
    useContext(TrackListContext);
  const { tracks, albums, artists } = useSpotifyData(search);

  useEffect(() => {
    if (tracks) {
      setTrackList(tracks.items);
    }
  }, [tracks]);

  console.log("artists", artists);
  console.log("albums", albums);
  console.log("tracks", tracks);

  return (
    <main className="main-content">
      {!search && <div className="title">Search anything...</div>}

      {artists && artists?.total !== 0 && search && (
        <ArtistsGroup artists={artists?.items} title={"Artists"} />
      )}

      {albums && albums?.total !== 0 && search && (
        <AlbumsGroup albums={albums?.items} title={"Albums"} />
      )}

      {tracks && tracks?.total !== 0 && search && (
        <TracksGroup
          tracks={tracks?.items}
          setCurrentTrack={setCurrentTrack}
          title={"Tracks"}
        />
      )}

      {tracks?.total == 0 &&
        artists?.total == 0 &&
        albums?.total == 0 &&
        search &&
        `No results found for "${search}"`}
    </main>
  );
}

export default SearchPage;
