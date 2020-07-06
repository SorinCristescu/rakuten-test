import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  GET_TRAILER_BY_ID_START,
  GET_TRAILER_BY_ID_SUCCESS,
  GET_TRAILER_BY_ID_FAIL,
} from './types';

const initialState = {
  errorCode: null,
  loading: false,
  loaded: false,
  movie: null,
  trailer: null,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIE_BY_ID_START:
      return {
        ...state,
        loading: true,
        loaded: false,
        movie: null,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        movie: payload,
      };
    case GET_MOVIE_BY_ID_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
        loaded: false,
      };
    case GET_TRAILER_BY_ID_START:
      return {
        ...state,
        loading: true,
        loaded: false,
        trailer: null,
      };
    case GET_TRAILER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        trailer: payload,
      };
    case GET_TRAILER_BY_ID_FAIL:
      return {
        ...state,
        errorCode: payload,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;
