import React from 'react';
import { Header, mapStateToProps } from './Header';
import { shallow } from 'enzyme';
import { mockEvents } from '../../mockData'


describe('Header', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<Header savedEvents={mockEvents} />);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with savedEvents', () => {
      mockState = {savedEvents: mockEvents}

      const expected = {savedEvents: mockEvents}
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })
});