import movieReducer from './reducer';
import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_TRAILER_BY_ID_START,
  GET_TRAILER_BY_ID_SUCCESS,
} from './types';

describe('Movie & Trailer Reducer', () => {
  const initialMockState = {
    errorCode: null,
    loading: false,
    loaded: false,
    movie: null,
    trailer: null,
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = movieReducer(undefined, {});

    expect(reducer).toEqual(initialMockState);
  });

  it('handles GET_MOVIE_BY_ID_START as expected', () => {
    const reducer = movieReducer(initialMockState, {
      type: GET_MOVIE_BY_ID_START,
    });

    expect(reducer).toEqual({
      movie: null,
      trailer: null,
      errorCode: null,
      loading: true,
      loaded: false,
    });
  });

  it('handles GET_MOVIE_BY_ID_SUCCESS as expected', () => {
    const reducer = movieReducer(initialMockState, {
      type: GET_MOVIE_BY_ID_SUCCESS,
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
      movie: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
      trailer: null,
      errorCode: null,
      loading: false,
      loaded: true,
    });
  });

  it('handles GET_TRAILER_BY_ID_START as expected', () => {
    const reducer = movieReducer(initialMockState, {
      type: GET_TRAILER_BY_ID_START,
    });

    expect(reducer).toEqual({
      movie: null,
      trailer: null,
      errorCode: null,
      loading: true,
      loaded: false,
    });
  });

  it('handles GET_TRAILER_BY_ID_SUCCESS as expected', () => {
    const reducer = movieReducer(initialMockState, {
      type: GET_TRAILER_BY_ID_SUCCESS,
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
      trailer: {
        data: [
          {
            id: 1,
            name: 'foo',
          },
        ],
      },
      movie: null,
      errorCode: null,
      loading: false,
      loaded: true,
    });
  });
});
