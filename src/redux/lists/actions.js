import axios from 'axios';

import {
  GET_MOVIES_LATEST_START,
  GET_MOVIES_LATEST_SUCCESS,
  GET_MOVIES_LATEST_FAIL,
} from './types';

// Fetch latest movies list.
export const getMoviesLatest = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_LATEST_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/latest?api_key=${process.env.TMDB_API_KEY}`
    );
    dispatch({
      type: GET_MOVIES_LATEST_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_LATEST_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};
