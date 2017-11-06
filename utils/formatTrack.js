const SEC = 1000;
const MIN = 60000;

export const getArtistString = (artists = []) => artists
  .map(artist => artist.name)
  .join(', ');

export const getImage = (images = [], size = 1) => images ?
  images[size] && images[size].url
  :
  false;

export const getTime = duration => {
  const minutes = Math.floor(duration / MIN);
  const seconds = parseInt((duration - (MIN * minutes)) / SEC);
  return `Duration: ${minutes}:${seconds}`;
};


