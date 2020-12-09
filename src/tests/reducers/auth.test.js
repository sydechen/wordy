import authReducer from '../../reducers/auth';

test('log in', () => {
    const action = {
        type: 'LOGIN',
        uid: 12345
    }
    const state = authReducer({}, action);
    expect(state).toEqual({uid: 12345});
});

test('log out', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid:54321}, action);
    expect(state).toEqual({});
});