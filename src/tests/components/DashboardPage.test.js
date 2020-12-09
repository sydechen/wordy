import React from 'react';
import DashboardPage from '../../components/DashboardPage';
import {shallow} from 'enzyme';

test('render dashboard', () => {
    const wrapper = shallow(<DashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})