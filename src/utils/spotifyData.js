const AUTH_TOKEN =
  "BQByew7IcknWlYdce8iiD6UyxJO-k7vT_6pfbJswyBX1R34SIqqHGDot6T9B0VO6OhWeixkX6xm3VOpCK6gsy-D1vMhJEICgcX18sUI1_LmTlmgkVckO2UkIMvdBHy597-CIYq2w1pzJQiS0weYNa2W9UcZqO6C-sRd-AVJWbU7AynGX";
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
