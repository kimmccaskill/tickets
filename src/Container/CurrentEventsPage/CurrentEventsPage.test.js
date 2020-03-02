import React from 'react';
import { CurrentEventsPage, mapStateToProps, mapDispatchToProps } from './CurrentEventsPage';
import { shallow } from 'enzyme';
import { mockEvents } from '../../mockData'
import { setCurrent } from '../../Actions';


describe('CurrentEventsPage', () => {
  let wrapper,mockState
  it('should match the snapshot', () => {
    wrapper = shallow(<CurrentEventsPage currentEvents={mockEvents}/>);

    expect(wrapper).toMatchSnapshot();
  });
  
  describe('mapStateToProps', () => {
    it('should return an object with currentEvents', () => {
      mockState = {currentEvents: mockEvents}

      const expected = {currentEvents: mockEvents}
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the dispatch(setCurrent) action when setCurrent is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCurrent(mockEvents);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCurrent(mockEvents);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
});