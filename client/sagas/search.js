import { takeEvery, call, put } from 'redux-saga/effects';
import {
  SEARCH_TRACK
} from '../constants/actions';
import {
  searchTrack as searchTrackAction,
  searchTrackError,
  searchTrackSuccess
} from '../actions/search';
import {
  searchTracks
} from '../services/spotify';

function *searchTrackSaga(action = {}) {
  try {
    const tracks = yield call(searchTracks, action.payload || '');
    yield put(searchTrackSuccess({ tracks }));
  } catch (error) {
    yield put(searchTrackError({ error: error.toString() }))
  }
}

export default function *watchSearchTracks() {
  yield takeEvery(SEARCH_TRACK, searchTrackSaga);
}

