import React from 'react';
import { EventCard, mapStateToProps, mapDispatchToProps } from './EventCard';
import { shallow } from 'enzyme';
import { mockEvent,mockEvents } from '../../mockData'
import { saveEvent, unsaveEvent } from '../../Actions';


describe('EventCard', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<EventCard savedEvents={mockEvents} {...mockEvent} />);

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

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the dispatch(saveEvent) action when called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = saveEvent(mockEvent);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveEvent(mockEvent);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    it('should call dispatch with the dispatch(unsaveEvent) action when called', () => {
      const mockDispatch = jest.fn();
      const mockId = "G5diZpAEi6Nxj"
      const actionToDispatch = unsaveEvent(mockId);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.unsaveEvent(mockId);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});