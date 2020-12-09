import React from 'react';
import NotFound from '../../components/NotFound';
import {shallow} from 'enzyme';

test('render NotFound page', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
})