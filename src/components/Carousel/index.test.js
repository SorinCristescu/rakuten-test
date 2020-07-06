import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Carousel from './index';

const mockStore = configureStore([]);

describe('My Carousel Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });

    component = renderer.create(
      <Provider store={store}>
        <Carousel />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Carousel />);
    expect(tree).toMatchSnapshot();
  });
});
