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

const initialState = {
  errorCode: null,
  loading: false,
  popularesMovies: [],
  todaLaFamiliaMovies: [],
  estrenosSpaniolesMovies: [],
  nuestraPreferidasMovies: [],
  estrenosImprescindiblesMovies: [],
};

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_POPULARES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_POPULARES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularesMovies: payload,
      };
    case GET_MOVIES_POPULARES_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS:
      return {
        ...state,
        loading: false,
        estrenosImprescindiblesMovies: payload,
      };
    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_TODALAFAMILIA_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_TODALAFAMILIA_SUCCESS:
      return {
        ...state,
        loading: false,
        todaLaFamiliaMovies: payload,
      };
    case GET_MOVIES_TODALAFAMILIA_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_ESTRENOSESPANIOLES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS:
      return {
        ...state,
        loading: false,
        estrenosSpaniolesMovies: payload,
      };
    case GET_MOVIES_ESTRENOSESPANIOLES_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_NUESTRASPREFERIDAS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS:
      return {
        ...state,
        loading: false,
        nuestraPreferidasMovies: payload,
      };
    case GET_MOVIES_NUESTRASPREFERIDAS_FAIL:
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
