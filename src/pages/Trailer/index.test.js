import React from 'react';
import { shallow } from 'enzyme';
import Trailer from './index';

describe('Trailer', () => {
  it('should be defined', () => {
    expect(Trailer).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Trailer />);
    expect(tree).toMatchSnapshot();
  });
});
