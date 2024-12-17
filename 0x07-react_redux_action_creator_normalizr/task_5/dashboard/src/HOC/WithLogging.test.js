import React from 'react';
import { mount } from 'enzyme';
import withLogging from './WithLogging'
import App from '../App/App';

describe('withLogging HOC', () => {
  let consoleLogSpy;

  // Wrap App component with the HOC
  const WrappedComponent = withLogging(App);

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleLogSpy.mockRestore();
  });

  it('should log the message on mount', () => {
    // Mount the wrapped component
    const wrapper = mount(<WrappedComponent />);

    // Check if the correct message was logged on mount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component App is mounted');
    
    // Clean up
    wrapper.unmount();
  });

  it('should log the message on unmount', () => {
    // Mount and unmount the component
    const wrapper = mount(<WrappedComponent />);
    wrapper.unmount();

    // Check if the correct message was logged on unmount
    expect(consoleLogSpy).toHaveBeenCalledWith('Component App is going to unmount');
  });

  it('should render the wrapped component', () => {
    const wrapper = mount(<WrappedComponent />);
    
    // Ensure that the wrapped component (App) is rendered
    expect(wrapper.find(App).length).toBe(1);
    
    wrapper.unmount();
  });
});
