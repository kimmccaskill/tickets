import React from 'react';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { shallow } from 'enzyme';
import { mockEvent,mockEvents } from '../../mockData'
import { setUpcoming } from '../../Actions';


describe('Home', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with upcomingEvents', () => {
      mockState = {upcomingEvents: mockEvents}

      const expected = {upcomingEvents: mockEvents}
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the dispatch(setUpcoming) action when called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setUpcoming(mockEvents);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setUpcoming(mockEvents);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});