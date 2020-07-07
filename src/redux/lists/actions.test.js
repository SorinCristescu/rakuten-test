import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
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

const mockStore = configureMockStore([thunk, promiseMiddleware()]);

describe('Movie Actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      movie: {},
    });
  });

  describe('getPopularesEnTaquillaList action creator', () => {
    it('dispatches GET_MOVIES_POPULARES_SUCCESS action and returns data on success', async () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
          data: [{ id: 1, name: 'Vasilis' }],
        })
      );
      await store.dispatch(getPopularesEnTaquillaList());
      const actions = store.getActions();
      [
        { type: GET_MOVIES_POPULARES_START },
        { type: GET_MOVIES_POPULARES_SUCCESS, payload: { data: [Array] } },
      ];
      expect.assertions(3);
      expect(actions[0].type).toEqual(GET_MOVIES_POPULARES_START);
      expect(actions[1].type).toEqual(GET_MOVIES_POPULARES_SUCCESS);
      expect(actions[1].payload.data[0].name).toEqual('Vasilis');
    });
  });
});

describe('getEstrenosImprescindibleList action creator', () => {
  it('dispatches GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: 'Vasilis' }],
      })
    );
    await store.dispatch(getEstrenosImprescindibleList());
    const actions = store.getActions();
    [
      { type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START },
      {
        type: GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS,
        payload: { data: [Array] },
      },
    ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_ESTRENOSIMPRESCINDIBLES_START);
    expect(actions[1].type).toEqual(GET_MOVIES_ESTRENOSIMPRESCINDIBLES_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual('Vasilis');
  });
});

describe('getTodaLaFamiliaList action creator', () => {
  it('dispatches GET_MOVIES_TODALAFAMILIA_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: 'Vasilis' }],
      })
    );
    await store.dispatch(getTodaLaFamiliaList());
    const actions = store.getActions();
    [
      { type: GET_MOVIES_TODALAFAMILIA_START },
      { type: GET_MOVIES_TODALAFAMILIA_SUCCESS, payload: { data: [Array] } },
    ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_TODALAFAMILIA_START);
    expect(actions[1].type).toEqual(GET_MOVIES_TODALAFAMILIA_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual('Vasilis');
  });
});

describe('getEstrenosSpaniolesList action creator', () => {
  it('dispatches GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: 'Vasilis' }],
      })
    );
    await store.dispatch(getEstrenosSpaniolesList());
    const actions = store.getActions();
    [
      { type: GET_MOVIES_ESTRENOSESPANIOLES_START },
      {
        type: GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS,
        payload: { data: [Array] },
      },
    ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_ESTRENOSESPANIOLES_START);
    expect(actions[1].type).toEqual(GET_MOVIES_ESTRENOSESPANIOLES_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual('Vasilis');
  });
});

describe('getNuestraPreferidasList action creator', () => {
  it('dispatches GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS action and returns data on success', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: 'Vasilis' }],
      })
    );
    await store.dispatch(getNuestraPreferidasList());
    const actions = store.getActions();
    [
      { type: GET_MOVIES_NUESTRASPREFERIDAS_START },
      {
        type: GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS,
        payload: { data: [Array] },
      },
    ];
    expect.assertions(3);
    expect(actions[0].type).toEqual(GET_MOVIES_NUESTRASPREFERIDAS_START);
    expect(actions[1].type).toEqual(GET_MOVIES_NUESTRASPREFERIDAS_SUCCESS);
    expect(actions[1].payload.data[0].name).toEqual('Vasilis');
  });
});
