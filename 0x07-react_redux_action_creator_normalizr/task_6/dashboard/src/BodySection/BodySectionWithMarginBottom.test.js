import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('should render a BodySection component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        expect(wrapper.find(BodySection).length).toBe(1);
    });

    it('should pass the correct props to BodySection component', () => {
        const wrapper = shallow(
            <BodySectionWithMarginBottom title="test title">
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        const bodySectionProps = wrapper.find(BodySection).props();
        expect(bodySectionProps.title).toBe('test title');
        expect(bodySectionProps.children).toEqual(<p>test children node</p>);
    });
});