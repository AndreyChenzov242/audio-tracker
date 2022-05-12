const AUTH_TOKEN =
  "BQBbGOTQwtvWR66zJx4nKpw53IVMHv0v_qp4wBK4RSscONNVXbxWP2O3jWgAxveKoirWD_-9jE3fFK_AoNm_wCU_RuEDpF50WkGLmMdSyUeLxADdkdlPEr_VFSRIeX4sahDsj7D-9ZM4DfAw8P_nEu2525nqRush1QpSp8SQP0LWYrBG";
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
