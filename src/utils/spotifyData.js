const getTrackUrl = "https://api.spotify.com/v1/tracks/?ids=";
const getPlaylistUrl = "https://api.spotify.com/v1/playlists/";

export const spotifyData = {
  async auth() {
    const url =
      "https://jjm8fl3k76.execute-api.us-east-1.amazonaws.com/default/spotify-token";
    let response = await fetch(url, { method: "GET" });

    const json = await response.json();

    localStorage.setItem("access_token", json.access_token);
  },

  async search(query) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist%2Calbum`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  },

  async getTrack(id) {
    const url = getTrackUrl + id;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  },

  async getPlaylist(id) {
    const url = getPlaylistUrl + id;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  },
};
