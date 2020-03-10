import React from 'react';
import { SearchPage, mapStateToProps, mapDispatchToProps } from './SearchPage';
import { shallow } from 'enzyme';
import { mockEvent,mockEvents } from '../../mockData'
import { setSearched } from '../../Actions';


describe('SearchPage', () => {
  let wrapper, mockState
  beforeEach(() => {
    wrapper = shallow(<SearchPage searchedEvents={mockEvents}/>);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start with a default state', () => {
    expect(wrapper.state('keyword')).toEqual('')
    expect(wrapper.state('showError')).toEqual(false)
    expect(wrapper.state('formFilled')).toEqual(false)
  })

  describe('handleChange', () => {
    it('should change state of keyword if form is updated', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'keyword',
          value: 'rock'
        }
      }

      wrapper.instance().handleChange(mockEvent)
      expect(wrapper.state('keyword')).toEqual('rock')
    })
  })

  describe('submitForm', () => {
    it('should run submitForm on click', () => {
      wrapper.instance().submitForm = jest.fn()
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'keyword',
          value: ''
        }
      }
      wrapper.find('.search-btn').simulate('click', mockEvent);
      wrapper.instance().submitForm(mockEvent)
      expect(wrapper.instance().submitForm).toHaveBeenCalledWith(mockEvent)
    })

    it('should run getSearchedEvents on submitForm', () => {
      wrapper.instance().submitForm = jest.fn().mockImplementation(() => wrapper.instance().getSearchedEvents())
      wrapper.instance().getSearchedEvents = jest.fn()
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'keyword',
          value: ''
        }
      }
      wrapper.instance().submitForm(mockEvent)
      expect(wrapper.instance().getSearchedEvents).toHaveBeenCalled()
    })
  })
  
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