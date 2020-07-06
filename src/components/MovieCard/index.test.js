import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './index';

describe('MovieCard', () => {
  it('should be defined', () => {
    expect(MovieCard).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<MovieCard />);
    expect(tree).toMatchSnapshot();
  });
});
