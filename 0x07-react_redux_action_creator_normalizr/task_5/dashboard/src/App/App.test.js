import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

describe('App component tests', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });

  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find(Notifications).length).toBe(1);
  });

  it('should call logOut and alert when Control and h keys are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const component = shallow(<App logOut={logOutMock} />);
    
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
  });

  it('should render Header component', () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toBe(1);
  });

  it('should render Footer component', () => {
    const component = shallow(<App />);
    expect(component.find(Footer).length).toBe(1);
  });

  it('should render Login component when isLoggedIn is false', () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.find(Login).length).toBe(1);
    expect(component.find(CourseList).length).toBe(0);
  });

  it('should render CourseList component when isLoggedIn is true', () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.find(Login).length).toBe(0);
    expect(component.find(CourseList).length).toBe(1);
  });

  it('should render BodySectionWithMarginBottom component', () => {
    const component = shallow(<App />);
    expect(component.find(BodySectionWithMarginBottom).length).toBe(2);
  });

  it('should have default state for displayDrawer as false', () => {
    const component = shallow(<App />);
    expect(component.state('displayDrawer')).toBe(false);
  });

  it('should update state to true when handleDisplayDrawer is called', () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    expect(component.state('displayDrawer')).toBe(true);
  });

  it('should update state to false when handleHideDrawer is called', () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer(); // First set it to true
    component.instance().handleHideDrawer();
    expect(component.state('displayDrawer')).toBe(false);
  });

  it('should update state when markNotificationAsRead is called', () => {
    const component = shallow(<App />);
    const instance = component.instance();
    const initialNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: "<strong>Urgent requirement</strong>" },
    ];
    component.setState({ listNotifications: initialNotifications });

    instance.markNotificationAsRead(2);
    expect(component.state('listNotifications')).toEqual([
      { id: 1, type: "default", value: "New course available" },
      { id: 3, type: "urgent", html: "<strong>Urgent requirement</strong>" },
    ]);
  });

  afterAll(() => {
    // Clean up the mock
    delete global.document;
  });
});