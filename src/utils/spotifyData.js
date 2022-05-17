const AUTH_TOKEN =
  "BQArY9OBzMVWMvm0wCLHzxKu4mS_r2kp81Xv5hAKrx_5l5eXYGlsCr1Y8ZI_V49SMXgt03dFbDgqUB4Rf5ilM8xe1rc8dvAVdoWObTSZmjgyXiFNQeerts1H8LHzIb3RtIcoG4pQYUyAENf7QFT0i_mNY57-GQ9Hn3fLxQzhKDfQj6nMS-0Vf767U-9MFw";
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
