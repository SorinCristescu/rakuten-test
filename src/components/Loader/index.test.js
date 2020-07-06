import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
  it('should be defined', () => {
    expect(Loader).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Loader />);
    expect(tree).toMatchSnapshot();
  });
});
