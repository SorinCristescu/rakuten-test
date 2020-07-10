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
  GET_MOVIES_SI_TE_PERDISTE_START,
  GET_MOVIES_SI_TE_PERDISTE_SUCCESS,
  GET_MOVIES_SI_TE_PERDISTE_FAIL,
} from './types';

const initialState = {
  errorCode: null,
  loading: false,
  loadedPopularesMovies: false,
  loadedTodaLaFamiliaMovies: false,
  loadedEstrenosSpaniolesMovies: false,
  loadedEstrenosImprescindiblesMovies: false,
  loadedSiTuPerdisteMovies: false,
  popularesMovies: [],
  todaLaFamiliaMovies: [],
  estrenosSpaniolesMovies: [],
  estrenosImprescindiblesMovies: [],
  siTuPerdisteMovies: [],
};

const listsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES_POPULARES_START:
      return {
        ...state,
        loading: true,
        loadedPopularesMovies: false,
      };
    case GET_MOVIES_POPULARES_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedPopularesMovies: true,
        popularesMovies: payload,
      };
    case GET_MOVIES_POPULARES_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
        loadedPopularesMovies: false,
      };

    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START:
      return {
        ...state,
        loading: true,
        loadedEstrenosImprescindiblesMovies: false,
      };
    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedEstrenosImprescindiblesMovies: true,
        estrenosImprescindiblesMovies: payload,
      };
    case GET_MOVIES_ESTRENOSIMPRESCINDIBLES_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
        loadedEstrenosImprescindiblesMovies: false,
      };

    case GET_MOVIES_TODALAFAMILIA_START:
      return {
        ...state,
        loading: true,
        loadedTodaLaFamiliaMovies: false,
      };
    case GET_MOVIES_TODALAFAMILIA_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedTodaLaFamiliaMovies: true,
        todaLaFamiliaMovies: payload,
      };
    case GET_MOVIES_TODALAFAMILIA_FAIL:
      return {
        ...state,
        loadedTodaLaFamiliaMovies: false,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_ESTRENOSESPANIOLES_START:
      return {
        ...state,
        loading: true,
        loadedEstrenosSpaniolesMovies: false,
      };
    case GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedEstrenosSpaniolesMovies: true,
        estrenosSpaniolesMovies: payload,
      };
    case GET_MOVIES_ESTRENOSESPANIOLES_FAIL:
      return {
        ...state,
        loadedEstrenosSpaniolesMovies: false,
        errorCode: payload,
        loading: false,
      };

    case GET_MOVIES_SI_TE_PERDISTE_START:
      return {
        ...state,
        loadedSiTuPerdisteMovies: false,
        loading: true,
      };
    case GET_MOVIES_SI_TE_PERDISTE_SUCCESS:
      return {
        ...state,
        loading: false,
        loadedSiTuPerdisteMovies: true,
        siTuPerdisteMovies: payload,
      };
    case GET_MOVIES_SI_TE_PERDISTE_FAIL:
      return {
        ...state,
        errorCode: payload,
        loading: false,
        loadedSiTuPerdisteMovies: false,
      };
    default:
      return state;
  }
};

export default listsReducer;
