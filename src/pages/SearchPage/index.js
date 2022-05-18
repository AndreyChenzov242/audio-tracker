import React, { useEffect, useContext } from "react";
import TracksGroup from "../../components/TracksGroup";
import { useSpotifyData } from "../../hooks/useSpotifyData";
import { TrackListContext } from "../../context";
import ArtistsGroup from "../../components/ArtistsGrop";
import AlbumsGroup from "../../components/AlbumsGroup";

function SearchPage() {
  const { setTrackList, setCurrentTrack, search, columnCount } =
    useContext(TrackListContext);
  const { tracks, albums, artists } = useSpotifyData(search);

  useEffect(() => {
    if (tracks) {
      setTrackList(tracks.items);
    }
  }, [tracks]);

  return (
    <main className="main-content">
      {!search && <div className="title">Search anything...</div>}

      {artists && artists?.total !== 0 && search && (
        <ArtistsGroup
          artists={artists?.items}
          title={"Artists"}
          columnCount={columnCount}
        />
      )}

      {albums && albums?.total !== 0 && search && (
        <AlbumsGroup
          albums={albums?.items}
          title={"Albums"}
          columnCount={columnCount}
        />
      )}

      {tracks && tracks?.total !== 0 && search && (
        <TracksGroup
          tracks={tracks?.items}
          setCurrentTrack={setCurrentTrack}
          title={"Tracks"}
          columnCount={columnCount}
        />
      )}

      {tracks?.total == 0 &&
        artists?.total == 0 &&
        albums?.total == 0 &&
        search && (
          <div className="no-results">{`No results found for "${search}"`}</div>
        )}
    </main>
  );
}

export default SearchPage;
