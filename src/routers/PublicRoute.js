import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({isAuthed, component: Component, ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthed ? (
            <Redirect to= '/dashboard' />
        ) : (
            <Component {...props} />        )    
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);