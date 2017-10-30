import { handleActions } from 'redux-actions';

const defaultState = {
  tracks: [],
  isLoading: false,
  error: null
};

const reducer = handleActions({
  SEARCH_TRACK: (state, { payload }) => ({
    ...state,
    isLoading: true
  }),

  SEARCH_TRACK_SUCCESS: (state, { payload: { tracks } }) => ({
    ...state,
    tracks: tracks,
    isLoading: false
  }),

  SEARCH_TRACK_ERROR: (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })
}, defaultState);

export default reducer;
