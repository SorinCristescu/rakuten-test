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
  GET_MOVIES_SI_TU_PERDISTE_START,
} from './types';

describe('listsReducer Reducer', () => {
  const initialMockState = {
    errorCode: null,
    loading: false,
    popularesMovies: [],
    todaLaFamiliaMovies: [],
    estrenosSpaniolesMovies: [],
    estrenosImprescindiblesMovies: [],
    siTuPerdisteMovies: [],
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = listsReducer(undefined, {});

    expect(reducer).toEqual(initialMockState);
  });

  it('handles GET_MOVIES_POPULARES_START as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_POPULARES_START,
    });

    expect(reducer).toEqual({
      errorCode: null,
      loading: true,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
    });
  });

  it('handles GET_MOVIES_POPULARES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_POPULARES_SUCCESS,
      payload: [
        {
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
      ],
    });

    expect(reducer).toEqual({
      popularesMovies: [
        {
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
      ],
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      todaLaFamiliaMovies: [],
      errorCode: null,
      loading: false,
    });
  });

  it('handles GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START,
    });

    expect(reducer).toEqual({
      errorCode: null,
      loading: true,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
    });
  });

  it('handles GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
      payload: [
        {
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
      ],
    });

    expect(reducer).toEqual({
      estrenosImprescindiblesMovies: [
        {
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
      ],
      popularesMovies: [],
      estrenosSpaniolesMovies: [],
      todaLaFamiliaMovies: [],
      siTuPerdisteMovies: [],
      errorCode: null,
      loading: false,
    });
  });

  it('handles GET_MOVIES_TODALAFAMILIA_START as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_TODALAFAMILIA_START,
    });

    expect(reducer).toEqual({
      errorCode: null,
      loading: true,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
    });
  });

  it('handles GET_MOVIES_TODALAFAMILIA_SUCCESS as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_TODALAFAMILIA_SUCCESS,
      payload: [
        {
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
      ],
    });

    expect(reducer).toEqual({
      todaLaFamiliaMovies: [
        {
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
      ],
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      errorCode: null,
      loading: false,
    });
  });

  it('handles GET_MOVIES_ESTRENOSESPANIOLES_START as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_ESTRENOSESPANIOLES_START,
    });

    expect(reducer).toEqual({
      errorCode: null,
      loading: true,
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
    });
  });

  it('handles GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
      payload: [
        {
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
      ],
    });

    expect(reducer).toEqual({
      estrenosSpaniolesMovies: [
        {
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
      ],
      estrenosImprescindiblesMovies: [],
      popularesMovies: [],
      siTuPerdisteMovies: [],
      todaLaFamiliaMovies: [],
      errorCode: null,
      loading: false,
    });
  });

  it('handles GET_MOVIES_SI_TU_PERDISTE_START as expected', () => {
    const reducer = listsReducer(initialMockState, {
      type: GET_MOVIES_SI_TU_PERDISTE_START,
    });

    expect(reducer).toEqual({
      estrenosImprescindiblesMovies: [],
      estrenosSpaniolesMovies: [],
      siTuPerdisteMovies: [],
      popularesMovies: [],
      todaLaFamiliaMovies: [],
      errorCode: null,
      loading: false,
    });
  });
});
