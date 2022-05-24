const getTrackUrl = "https://api.spotify.com/v1/tracks/?ids=";
const getPlaylistUrl = "https://api.spotify.com/v1/playlists/";
const tokenUrl =
  "https://jjm8fl3k76.execute-api.us-east-1.amazonaws.com/default/spotify-token";

export const spotifyData = {
  async getToken() {
    const response = await fetch(tokenUrl, { method: "GET" });
    const json = await response.json();

    localStorage.setItem("accessToken", json.access_token);
    localStorage.setItem("expiresIn", new Date().setSeconds(json.expires_in));
  },

  async checkToken() {
    if (localStorage.getItem("accessToken")) {
      if (localStorage.getItem("expiresIn") >= new Date().getTime()) {
        return;
      }
    }
    await this.getToken();
  },

  async search(query) {
    await this.checkToken();

    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist%2Calbum`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    return json;
  },

  async getTrack(id) {
    await this.checkToken();

    const url = getTrackUrl + id;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    return json;
  },

  async getPlaylist(id) {
    await this.checkToken();

    const url = getPlaylistUrl + id;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    return json;
  },
};
