const AUTH_TOKEN =
  "BQATpyHnVnJ-6XgL3q9m19mBl5Q16f1Adk62VY-sdfhQ_FyS9xwp5axXIfKuHP-BJi92hxech5N51eH7UGgcrCzpGXSm_pVdYCKuIibGBuza6LsLjymy-PbYpJcFzWGVtzdukNHQ2kmHDSjTuJfcPKYzih2bBiYuciSe0o3uDIQw0HpaM50";
const AUTH = "Bearer " + AUTH_TOKEN;
const getTrackUrl = "https://api.spotify.com/v1/tracks/?ids=";
const getPlaylistUrl = "https://api.spotify.com/v1/playlists/";

export const spotifyData = {
  async search(query) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist%2Calbum`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: AUTH,
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
        Authorization: AUTH,
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
        Authorization: AUTH,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  },
};
