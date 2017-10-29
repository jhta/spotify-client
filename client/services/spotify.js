import qs from 'querystring';
import { getToken } from '../../utils/auth';

const API_URI = 'https://api.spotify.com/v1';

const SEARCH_URI = `/search`;

const setHeaders = token => ({
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const buildURL = (uri = '', query = {}) =>
  `${API_URI}${uri}?${qs.stringify(query)}`;

const parseResponse = response => response.ok ?
  response.json()
  :
  Promise.reject(new Error(`Error status: ${response.error}`));


export const searchSongs = (songName = '') => fetch(
    buildURL(SEARCH_URI, { q: encodeURI(songName), limit: 10, type: 'track' }),
    setHeaders(getToken())
  )
  .then(res => parseResponse(res))
  .then(({ tracks }) => tracks)
  .catch(error => error);

