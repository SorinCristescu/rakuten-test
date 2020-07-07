import movieReducer from './reducer';
import {
  GET_MOVIE_BY_ID_START,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_TRAILER_BY_ID_START,
  GET_TRAILER_BY_ID_SUCCESS,
} from './types';

describe('movieReducer Reducer', () => {
  const initialState = {
    loading: true,
    loaded: false,
    movie: null,
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = movieReducer(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it('handles GET_MOVIE_BY_ID_START as expected', () => {
    const reducer = movieReducer(initialState, { type: GET_MOVIE_BY_ID_START });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_MOVIE_BY_ID_SUCCESS as expected', () => {
    const reducer = movieReducer(initialState, {
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

  it('handles GET_TRAILER_BY_ID_START as expected', () => {
    const reducer = movieReducer(initialState, {
      type: GET_TRAILER_BY_ID_START,
    });

    expect(reducer).toEqual({
      loading: true,
      loaded: false,
      movie: null,
    });
  });

  it('handles GET_TRAILER_BY_ID_SUCCESS as expected', () => {
    const reducer = movieReducer(initialState, {
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
