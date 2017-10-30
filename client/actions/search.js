import { createAction } from 'redux-actions';

import {
  SEARCH_TRACK,
  SEARCH_TRACK_ERROR,
  SEARCH_TRACK_SUCCESS
} from '../constants/actions';

export const searchTrack = createAction(SEARCH_TRACK);

export const searchTrackError = createAction(SEARCH_TRACK_ERROR);

export const searchTrackSuccess = createAction(SEARCH_TRACK_SUCCESS);

