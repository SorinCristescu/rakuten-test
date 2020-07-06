import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
