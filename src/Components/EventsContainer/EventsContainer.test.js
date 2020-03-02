import React from 'react';
import EventsContainer from './EventsContainer';
import { shallow } from 'enzyme';
import { mockEvents } from '../../mockData'

describe('EventsContainer', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<EventsContainer events={mockEvents}/>);

    expect(wrapper).toMatchSnapshot();
  });
});