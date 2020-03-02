import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});