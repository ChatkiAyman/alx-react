import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe('CourseListRow component', () => {
    it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(1);
        expect(th.prop('colSpan')).toEqual(2);
        expect(th.text()).toEqual('Header');
    });

    it('renders two cells when isHeader is true and textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(2);
        expect(th.at(0).text()).toEqual('Header1');
        expect(th.at(1).text()).toEqual('Header2');
    });
    it('renders two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell1" textSecondCell="Cell2" />);
        const tr = wrapper.find('tr');
        const td = wrapper.find('td');
        expect(tr).toHaveLength(1);
        expect(td).toHaveLength(2);
        expect(td.at(0).text()).toEqual('Cell1');
        expect(td.at(1).text()).toEqual('Cell2');
    });

    it('renders one td element with colspan = 2 when isHeader is false and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell" />);
        const td = wrapper.find('td');
        expect(td).toHaveLength(2);
        expect(td.at(0).text()).toEqual('Cell');
        expect(td.at(1).text()).toEqual('');
    });
});