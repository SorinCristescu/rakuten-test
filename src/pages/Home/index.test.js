import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

describe('Home', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Home />);
    expect(tree).toMatchSnapshot();
  });
});
