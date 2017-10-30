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
  Promise.reject(
    new Error(`${response.status}: ${response.statusText}`)
  );

export const searchTracks = (trackName = '') => fetch(
    buildURL(SEARCH_URI, { q: encodeURI(trackName), limit: 10, type: 'track' }),
    setHeaders(getToken())
  )
  .then(res => parseResponse(res))
  .then(({ tracks }) => tracks.items || []);

