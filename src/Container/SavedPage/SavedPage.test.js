import React from 'react';
import { SavedPage, mapStateToProps } from './SavedPage';
import { shallow } from 'enzyme';
import { mockEvents } from '../../mockData'

describe('SavedPage', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<SavedPage savedEvents={mockEvents}/>);

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