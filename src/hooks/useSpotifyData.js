import { useState, useEffect } from "react";
import { spotifyData } from "../utils/spotifyData";

export function useSpotifyData(query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }
    async function fetchData() {
      const responce = await spotifyData.search(query);
      setData(responce);
    }
    fetchData();
  }, [query]);

  return data;
}
