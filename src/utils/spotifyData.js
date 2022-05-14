const AUTH_TOKEN =
  "BQC2SwmbKfdjhzvj6b0xmkufXURfwzGg08jaisWdzMM1y5-r0RTfSKFY4FlefmhCZNi6xbJeZl0sbRkRvLEDva4hcxPFE9GH21OKFJaMWdcYjSr0I9Rv5BCHbwWyDzFx4kI3bNPzjEX3JcHvjvk__nYHjtUxMySfEWZuETf1YLAS5FG-NrGeey_vTJfFdg";
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
