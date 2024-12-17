import React from 'react';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('NotificationItem component', () => {
  it('renders the correct html with dummy props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('.notification-item').length).toBe(1);
    expect(wrapper.find('.default').length).toBe(1);
    expect(wrapper.text()).toBe('test');
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={markAsReadSpy} />);

    // Simulate a click on the component
    wrapper.find('.notification-item').simulate('click');

    // Check if the spy was called with the correct ID
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});