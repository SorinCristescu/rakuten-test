import {
  GET_MOVIES_LATEST_START,
  GET_MOVIES_LATEST_SUCCESS,
  GET_MOVIES_LATEST_FAIL,
} from './types';

const initialState = {
  errorCode: null,
  loading: false,
  latestMovies: [],
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
};

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_LATEST_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_LATEST_SUCCESS:
      return {
        ...state,
        loading: false,
        latestMovies: payload,
      };
    case GET_MOVIES_LATEST_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default listsReducer;
