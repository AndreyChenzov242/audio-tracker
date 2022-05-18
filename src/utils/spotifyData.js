const AUTH_TOKEN =
  "BQDmckLV0lEYHaTsEV_Hv1EY8BIcy--VQze7JE5dhwu3dQnZ9nDVqqoIYyl7YkUtYu8pJv2q1hCxdCytAdWTNcp5_hBDomv2n_pnowQXxqL61hEPHtRa848SYwbOGF7GFQpfhYVDjOrDvVLnMIeERfRGD5jCQRFlH-_poAbG55YYt7lGEei5aajIXiEJyA";
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
