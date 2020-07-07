import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './index';
import toJson from 'enzyme-to-json';

describe('MovieCard', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      movie: {
        images_artwork:
          'https://images-3.wuaki.tv/system/artworks/52541/master/senor-dame-paciencia-1558458784.jpeg',
        highlighted_score: {
          formatted_amount_og_score: 100,
          score: 212,
        },
      },
    };
    const wrapper = shallow(<MovieCard {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(MovieCard).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<MovieCard />);
    expect(tree).toMatchSnapshot();
  });
});
