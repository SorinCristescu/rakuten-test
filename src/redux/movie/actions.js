import axios from 'axios';

import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
  GET_TRAILER_BY_ID_START,
  GET_TRAILER_BY_ID_SUCCESS,
  GET_TRAILER_BY_ID_FAIL,
} from './types';

// Get movie by ID.
export const getMovieById = (id) => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_BY_ID_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movies/${id}${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIE_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIE_BY_ID_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Get trailer by ID.
export const getTrailerById = (configTrailer) => async (dispatch) => {
  dispatch({
    type: GET_TRAILER_BY_ID_START,
  });
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/me/streamings${process.env.QUERY_PARAMS}`,
      configTrailer
    );
    dispatch({
      type: GET_TRAILER_BY_ID_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRAILER_BY_ID_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};
