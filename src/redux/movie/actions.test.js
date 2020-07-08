import mockAxios from '../__moks__/axios.js';
import { configureStore } from 'redux-mock-store';
import { promise } from 'redux-promise-middleware';
import { thunk } from 'redux-thunk';
import { getMovieById, getTrailerById } from './actions';
import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_TRAILER_BY_ID_START,
  GET_TRAILER_BY_ID_SUCCESS,
} from './types';

const middlewares = [thunk, promise];
const mockStore = configureStore(middlewares);

describe('Movie & Trailer Redux Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movie: {},
    });
  });

  describe('getMovieById action creator', () => {
    it('dispatches GET_MOVIE_BY_ID_SUCCESS action and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{ id: 1, title: 'Adú' }],
        })
      );
      await store.dispatch(getMovieById());
      const actions = store.getActions();
      // [
      //   { type: GET_MOVIE_BY_ID_START },
      //   { type: GET_MOVIE_BY_ID_SUCCESS, payload: { data: [Array] } },
      // ];
      expect.assertions(3);
      expect(actions[0].type).toEqual(GET_MOVIE_BY_ID_START);
      expect(actions[1].type).toEqual(GET_MOVIE_BY_ID_SUCCESS);
      expect(actions[1].payload.data[0].name).toEqual('Adú');
    });
  });
});

describe('getTrailerById action creator', () => {
  it('dispatches GET_MOVIE_BY_ID_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, title: 'Adú' }],
      })
    );
    await store.dispatch(getTrailerById());
    const actions = store.getActions();
    // [
    //   { type: GET_TRAILER_BY_ID_START },
    //   { type: GET_TRAILER_BY_ID_SUCCESS, payload: { data: [Array] } },
    // ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_TRAILER_BY_ID_START);
    expect(actions[1].type).toEqual(GET_TRAILER_BY_ID_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual('Adú');
  });
});
