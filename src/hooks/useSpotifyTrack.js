import { useState, useEffect } from "react";
import { spotifyData } from "../utils/spotifyData";

export function useSpotifyTrack(id) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const responce = await spotifyData.getTrack(id);
      setData(responce);
    }
    fetchData();
  }, [id]);

  return data;
}
