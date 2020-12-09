import {LoginPage} from '../../components/LoginPage';
import React from 'react';
import {shallow} from 'enzyme';

let startLogin, history, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<LoginPage startLogin = {startLogin} history = {history}/>);
})

test('render Login page', () => {
    expect(wrapper).toMatchSnapshot();
})

test('call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});