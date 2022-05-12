import React, { useState, useEffect } from "react";
import { spotifyData } from "../utils/spotifyData";

export function useSpotifyPlaylist(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responce = await spotifyData.getPlaylist(id);
      setData(responce);
    }
    fetchData();
  }, [id]);

  return data;
}
