import React from 'react'
import Login from "./Login";
import { shallow } from 'enzyme';


describe('Login component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Login/>);
        expect(wrapper.exists()).toBe(true);
    });
    it('renders 2 input and 2 label', () => {
        const wrapper = shallow(<Login/>);
        const input = wrapper.find('input');
        const label = wrapper.find('label');
        expect(input.length).toBe(2);
        expect(label.length).toBe(2);
    })
});
