import React from 'react';
import { shallow } from 'enzyme';
import Movie from './index';

describe('Movie', () => {
  it('should be defined', () => {
    expect(Movie).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Movie />);
    expect(tree).toMatchSnapshot();
  });
});
