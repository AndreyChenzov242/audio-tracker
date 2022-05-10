const AUTH_TOKEN =
  "Bearer BQCPfxqdTLF5Sno4nvsyGISLB_VU9YmYJ7ODRhY76qmVHD3ytA_2bMRPyWPhzKGnEytVnd2vMLR1bRiDAmO9KlT_1WDgbCYsX7OA6JuAwmVAt5vCfdTNEgztLcqWeiCG_2HA1qTLfjnabloClaRiCg8ggNolsHlZ9HM6TPs1_G-Zgg";

export const spotifyData = {
  async search(query) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track%2Cartist%2Calbum`;

    let response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    return json;
  },
};
