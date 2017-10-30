export const getArtistString = (artists = []) => artists
  .map(artist => artist.name)
  .join(', ');

export const getImage = (images = [], size = 1) => images ?
  images[size] && images[size].url
  :
  false;
