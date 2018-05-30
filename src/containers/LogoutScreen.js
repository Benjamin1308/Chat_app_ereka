import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { connect } from 'react-redux';
import LongButton from '../components/LongButton';
import { logout } from '../actions/auth';

const LogoutScreen = (props) => {
  const logOut = () => {
    props.logout();
    firebase.auth().signOut();
  };
  if (!props.isLoggedIn) return <Redirect to="/login" />;
  return <LongButton content="Đăng xuất" backgroundColor="rgb(63,81,181)" onClick={logOut} />;
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== '',
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(LogoutScreen);
