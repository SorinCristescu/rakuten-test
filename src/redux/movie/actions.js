import axios from 'axios';

import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAIL,
} from './types';

// Fetch latest movies list.
export const getMovieById = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIE_BY_ID_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/latest?api_key=${process.env.TMDB_API_KEY}`
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
