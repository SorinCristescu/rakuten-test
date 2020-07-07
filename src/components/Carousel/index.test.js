import React from 'react';

import { shallow } from 'enzyme';

import Carousel from './index';

describe('My Carousel Component', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      list: {
        data: {
          contents: {
            data: [
              {
                duration: 119,
                id: 'adu',
                images: {
                  artwork:
                    'https://images-3.wuaki.tv/system/artworks/126374/master/adu-1590104150.jpeg',
                },
                title: 'Adú',
                year: 2020,
              },
            ],
            id: 'populares-en-taquilla',
            name: 'CINEMA - Películas más vistas en Alquiler',
          },
        },
      },
    };
    const wrapper = shallow(<Carousel {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Carousel />);
    expect(tree).toMatchSnapshot();
  });
});
