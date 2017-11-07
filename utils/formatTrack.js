const SEC = 1000;
const MIN = 60000;

/*
 * @function
 *method for parse a names array to string
 @param {Array} artists artists in the song
 @return {String} parsed array to string separate for commas
 */
export const getArtistString = (artists = []) => artists
  .map(artist => artist.name)
  .join(', ');

/*
 * @function
 * method for get the song image url. this get an images array with
 * 3 elements. 0 the smaller, 2 the bigger
 * @param {Array} images array with 3 images
 * @param {Number} size selected size
 * @return {String} image url
 */
export const getImage = (images = [], size = 1) => images ?
  images[size] && images[size].url
  :
  false;

/*
 * @function getTime
 * method for calculate the song duration based on the milisceconds duration
 * @param {Number} duration song duration in miliseconds
 * @return {String} formated time in minutes and seconds. example: '5:45';
 * */
export const getTime = (duration = 0) => {
  const minutes = Math.floor(duration / MIN);
  const seconds = parseInt((duration - (MIN * minutes)) / SEC);
  return `Duration: ${minutes}:${seconds}`;
};


