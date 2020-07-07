import listsReducer from './reducer';
import {
  GET_MOVIES_POPULARES_START,
  GET_MOVIES_POPULARES_SUCCESS,
  GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START,
  GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
  GET_MOVIES_TODALAFAMILIA_START,
  GET_MOVIES_TODALAFAMILIA_SUCCESS,
  GET_MOVIES_ESTRENOSESPANIOLES_START,
  GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
  GET_MOVIES_NUESTRASPREFERIDAS_START,
  GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
} from './types';

describe('listsReducer Reducer', () => {
  const initialState = {
    loading: true,
    loaded: false,
    movie: null,
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = listsReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it('handles GET_MOVIES_POPULARES_START as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_POPULARES_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
      errorCode: null,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      nuestraPreferidasMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
    });
  });

  it('handles GET_MOVIES_POPULARES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_POPULARES_SUCCESS,
      payload: {
        data: [
          {
            id: 'populares-en-taquilla',
            name: 'CINEMA - Películas más vistas en Alquiler',
            contents: {
              data: [
                {
                  duration: 119,
                  highlighted_score: {
                    formatted_amount_of_votes: '212',
                    score: 6.6,
                  },
                  id: 'adu',
                  images: {
                    artwork:
                      'https://images-3.wuaki.tv/system/artworks/126374/master/adu-1590104150.jpeg',
                  },
                  title: 'Adú',
                  year: 2020,
                },
              ],
            },
          },
        ],
      },
    });

    expect(reducer).toEqual({
      popularesMovies: {
        data: [
          {
            id: 'populares-en-taquilla',
            name: 'CINEMA - Películas más vistas en Alquiler',
            contents: {
              data: [
                {
                  duration: 119,
                  highlighted_score: {
                    formatted_amount_of_votes: '212',
                    score: 6.6,
                  },
                  id: 'adu',
                  images: {
                    artwork:
                      'https://images-3.wuaki.tv/system/artworks/126374/master/adu-1590104150.jpeg',
                  },
                  title: 'Adú',
                  year: 2020,
                },
              ],
            },
          },
        ],
      },
      loading: false,
      loaded: true,
      errorCode: null,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      nuestraPreferidasMovies: [],
      todaLaFamiliaMovies: [],
      movie: null,
    });
  });

  it('handles GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
    });

    expect(reducer).toEqual({
      users: [
        {
          id: 1,
          name: 'foo',
        },
      ],
      loading: false,
      error: false,
    });
  });

  it('handles GET_MOVIES_TODALAFAMILIA_START as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_TODALAFAMILIA_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_MOVIES_TODALAFAMILIA_SUCCESS as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_TODALAFAMILIA_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
    });

    expect(reducer).toEqual({
      users: [
        {
          id: 1,
          name: 'foo',
        },
      ],
      loading: false,
      error: false,
    });
  });

  it('handles GET_MOVIES_ESTRENOSESPANIOLES_START as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_ESTRENOSESPANIOLES_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
    });

    expect(reducer).toEqual({
      users: [
        {
          id: 1,
          name: 'foo',
        },
      ],
      loading: false,
      error: false,
    });
  });

  it('handles GET_MOVIES_NUESTRASPREFERIDAS_START as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_NUESTRASPREFERIDAS_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS as expected', () => {
    const reducer = listsReducer(initialState, {
      type: GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
      payload: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
    });

    expect(reducer).toEqual({
      users: [
        {
          id: 1,
          name: 'foo',
        },
      ],
      loading: false,
      error: false,
    });
  });
});
