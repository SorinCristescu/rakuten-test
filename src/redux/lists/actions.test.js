import mockAxios from '../__moks__/axios.js';
import { configureStore } from 'redux-mock-store';
import { promise } from 'redux-promise-middleware';
import { thunk } from 'redux-thunk';

import {
  getPopularesEnTaquillaList,
  getEstrenosImprescindibleList,
  getTodaLaFamiliaList,
  getEstrenosSpaniolesList,
  getNuestraPreferidasList,
} from './actions';
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

const middlewares = [thunk, promise];
const mockStore = configureStore(middlewares);

describe('Lists Redux Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      lists: {
        loading: true,
        loaded: false,
        movie: null,
        estrenosImprescindiblesMovies: [],
        estrenosSpaniolesMovies: [],
        nuestraPreferidasMovies: [],
        popularesMovies: [],
        todaLaFamiliaMovies: [],
      },
    });
  });

  describe('getPopularesEnTaquillaList action creator', () => {
    it('dispatches GET_MOVIES_POPULARES_SUCCESS action and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
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
        })
      );
      await store.dispatch(getPopularesEnTaquillaList());
      const actions = store.getActions();
      // [
      //   { type: GET_MOVIES_POPULARES_START },
      //   { type: GET_MOVIES_POPULARES_SUCCESS, payload: { data: [Array] } },
      // ];
      expect.assertions(3);
      expect(actions[0].type).toEqual(GET_MOVIES_POPULARES_START);
      expect(actions[1].type).toEqual(GET_MOVIES_POPULARES_SUCCESS);
      expect(actions[1].payload.data[0].name).toEqual(
        'CINEMA - Películas más vistas en Alquiler'
      );
    });
  });
});

describe('getEstrenosImprescindibleList action creator', () => {
  it('dispatches GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
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
      })
    );
    await store.dispatch(getEstrenosImprescindibleList());
    const actions = store.getActions();
    // [
    //   { type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START },
    //   {
    //     type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
    //     payload: { data: [Array] },
    //   },
    // ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START);
    expect(actions[1].type).toEqual(GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual(
      'CINEMA - Películas más vistas en Alquiler'
    );
  });
});

describe('getTodaLaFamiliaList action creator', () => {
  it('dispatches GET_MOVIES_TODALAFAMILIA_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
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
      })
    );
    await store.dispatch(getTodaLaFamiliaList());
    const actions = store.getActions();
    // [
    //   { type: GET_MOVIES_TODALAFAMILIA_START },
    //   { type: GET_MOVIES_TODALAFAMILIA_SUCCESS, payload: { data: [Array] } },
    // ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_TODALAFAMILIA_START);
    expect(actions[1].type).toEqual(GET_MOVIES_TODALAFAMILIA_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual(
      'CINEMA - Películas más vistas en Alquiler'
    );
  });
});

describe('getEstrenosSpaniolesList action creator', () => {
  it('dispatches GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
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
      })
    );
    await store.dispatch(getEstrenosSpaniolesList());
    const actions = store.getActions();
    // [
    //   { type: GET_MOVIES_ESTRENOSESPANIOLES_START },
    //   {
    //     type: GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
    //     payload: { data: [Array] },
    //   },
    // ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_ESTRENOSESPANIOLES_START);
    expect(actions[1].type).toEqual(GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual(
      'CINEMA - Películas más vistas en Alquiler'
    );
  });
});

describe('getNuestraPreferidasList action creator', () => {
  it('dispatches GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
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
      })
    );
    await store.dispatch(getNuestraPreferidasList());
    const actions = store.getActions();
    // [
    //   { type: GET_MOVIES_NUESTRASPREFERIDAS_START },
    //   {
    //     type: GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
    //     payload: { data: [Array] },
    //   },
    // ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_NUESTRASPREFERIDAS_START);
    expect(actions[1].type).toEqual(GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual(
      'CINEMA - Películas más vistas en Alquiler'
    );
  });
});
