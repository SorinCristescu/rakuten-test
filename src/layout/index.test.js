import React from 'react';
import { shallow } from 'enzyme';

import Layout from './index';
import toJson from 'enzyme-to-json';

describe('Layout', () => {
  it('should be defined', () => {
    expect(Layout).toBeDefined();
  });

  it('should render correctly', () => {
    const tree = shallow(<Layout />);
    expect(tree).toMatchSnapshot();
  });
});
