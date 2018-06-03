import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MainScreen from '../containers/MainScreen';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== '',
});
export default connect(mapStateToProps,
  null)(PrivateRoute);
