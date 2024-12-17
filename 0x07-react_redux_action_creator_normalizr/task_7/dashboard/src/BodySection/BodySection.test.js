import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
    it('should render correctly with given title and children', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.find('h2').text()).toEqual('test title');
        expect(wrapper.find('p').text()).toEqual('test children node');
    });

    it('should render one h2 element', () => {
        const wrapper = shallow(<BodySection title="test title" />);
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render correctly the children', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <div className="test-children">test children node</div>
            </BodySection>
        );
        expect(wrapper.find('.test-children').text()).toEqual('test children node');
    });
});