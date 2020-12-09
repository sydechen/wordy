import {shallow} from 'enzyme';
import React from 'react';
import {Header} from '../../components/Header';
import toJSON from 'enzyme-to-json';

let startLogout, history, wrapper;

beforeEach(() => {
    startLogout = jest.fn();
    history = {push:jest.fn()};
    wrapper = shallow(<Header startLogout = {startLogout} history = {history}/>);
})

test('render Header', () => {
    expect(wrapper).toMatchSnapshot();
})

test('call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});