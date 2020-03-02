import React from 'react';
import { SearchPage, mapStateToProps, mapDispatchToProps } from './SearchPage';
import { shallow } from 'enzyme';
import { mockEvent,mockEvents } from '../../mockData'
import { setSearched } from '../../Actions';


describe('SearchPage', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<SearchPage searchedEvents={mockEvents}/>);

    expect(wrapper).toMatchSnapshot();
  });

  // test default state
  // getsearchedevents to be called with keyword
  // handlechange
  // submitform happy and sad path
  
  describe('mapStateToProps', () => {
    it('should return an object with searchedEvents', () => {
      mockState = {searchedEvents: mockEvents}

      const expected = {searchedEvents: mockEvents}
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the dispatch(setSearched) action when called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setSearched(mockEvents);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setSearched(mockEvents);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});