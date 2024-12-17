import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component tests', () => {
  let wrapper;

  describe('With CourseList Empty', () => {
    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(3);
      expect(wrapper.find(CourseListRow).at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(wrapper.find(CourseListRow).at(1).prop('textFirstCell')).toEqual('Course name');
      expect(wrapper.find(CourseListRow).at(1).prop('textSecondCell')).toEqual('Credit');
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('No course available yet');
    });
  });

  describe('With CourseList containing elements', () => {
    beforeEach(() => {
      const listCourses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ];
      wrapper = shallow(<CourseList listCourses={listCourses} />);
    });

    it('renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
      expect(wrapper.find(CourseListRow).at(0).prop('textFirstCell')).toEqual('Available courses');
      expect(wrapper.find(CourseListRow).at(1).prop('textFirstCell')).toEqual('Course name');
      expect(wrapper.find(CourseListRow).at(1).prop('textSecondCell')).toEqual('Credit');
      expect(wrapper.find(CourseListRow).at(2).prop('textFirstCell')).toEqual('ES6');
      expect(wrapper.find(CourseListRow).at(2).prop('textSecondCell')).toEqual('60');
      expect(wrapper.find(CourseListRow).at(3).prop('textFirstCell')).toEqual('Webpack');
      expect(wrapper.find(CourseListRow).at(3).prop('textSecondCell')).toEqual('20');
      expect(wrapper.find(CourseListRow).at(4).prop('textFirstCell')).toEqual('React');
      expect(wrapper.find(CourseListRow).at(4).prop('textSecondCell')).toEqual('40');
    });
  });
});