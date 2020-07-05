import axios from 'axios';

import {
  GET_MOVIES_POPULARES_START,
  GET_MOVIES_POPULARES_SUCCESS,
  GET_MOVIES_POPULARES_FAIL,
  GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START,
  GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
  GET_MOVIES_ESTRENOSIMPRESCINDIBLES_FAIL,
  GET_MOVIES_TODALAFAMILIA_START,
  GET_MOVIES_TODALAFAMILIA_SUCCESS,
  GET_MOVIES_TODALAFAMILIA_FAIL,
  GET_MOVIES_ESTRENOSESPANIOLES_START,
  GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
  GET_MOVIES_ESTRENOSESPANIOLES_FAIL,
  GET_MOVIES_NUESTRASPREFERIDAS_START,
  GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
  GET_MOVIES_NUESTRASPREFERIDAS_FAIL,
} from './types';

// Fetch populares movies list.
export const getPopularesEnTaquillaList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_POPULARES_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/lists/populares-en-taquilla${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIES_POPULARES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_POPULARES_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch estrenos imprescindible movies list.
export const getEstrenosImprescindibleList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/lists/estrenos-imprescindibles-en-taquilla${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch toda la familia movies list.
export const getTodaLaFamiliaList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_TODALAFAMILIA_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/lists/estrenos-para-toda-la-familia${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIES_TODALAFAMILIA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_TODALAFAMILIA_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch estrenos spanioles movies list.
export const getEstrenosSpaniolesList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_ESTRENOSESPANIOLES_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/lists/estrenos-espanoles${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_ESTRENOSESPANIOLES_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};

// Fetch nuestra preferidas movies list.
export const getNuestraPreferidasList = () => async (dispatch) => {
  dispatch({
    type: GET_MOVIES_NUESTRASPREFERIDAS_START,
  });
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/lists/nuestras-preferidas-de-la-semana${process.env.QUERY_PARAMS}`
    );
    dispatch({
      type: GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MOVIES_NUESTRASPREFERIDAS_FAIL,
      payload: error.response.data.errorCode,
    });
    console.log(error);
  }
};
