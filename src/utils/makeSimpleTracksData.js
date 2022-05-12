export const makeSimpleTracksData = (tracks) => {
  let simpleTracksData = {
    items: [],
  };

  for (let i = 0; i < tracks.items.length; i++) {
    simpleTracksData["items"].push({
      name: tracks.items[i].track.name,
      album: {
        images: tracks.items[i].track.album.images,
      },
      artists: tracks.items[i].track.artists,
      preview_url: tracks.items[i].track.preview_url,
      id: tracks.items[i].track.id,
    });
  }

  return simpleTracksData;
};
