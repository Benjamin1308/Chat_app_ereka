import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActivityIndicator from 'react-activity-indicator';
import 'react-activity-indicator/src/activityindicator.css';
import Header from '../components/Header';
import InputItem from '../components/InputItem';
import LongButton from '../components/LongButton';
import FBButton from '../components/FBButton';
import loginImg from '../assets/login.jpg';
import { requestLogin } from '../actions/auth';
import '../scss/LoginScreen.scss';

class LoginScreen extends React.Component {
  componentDidUpdate = () => {
    if (this.props.error !== '') this.toastMsg(this.props.error);
  };
  handleUsername = (e) => {
    this.username = e.target.value;
  };
  handlePass = (e) => {
    this.password = e.target.value;
  };
  logIn = (e) => {
    if (!this.username || !this.password) {
      this.toastMsg('Username và password không được để trống');
    } else this.props.logIn(this.username, this.password);
  };
  toastMsg = msg => toast(msg, { autoClose: 2000 });
  render() {
    console.log(this.props.isLoggedIn);
    if (this.props.isLoggedIn) return <Redirect to="/main" />;
    else if (this.props.isLoggingIn) {
      return (
        <ActivityIndicator
          className="loading"
          number={3}
          diameter={40}
          borderWidth={1}
          duration={300}
          activeColor="#66D9EF"
          borderColor="white"
          borderRadius="50%"
        />
      );
    }
    return (
      <div className="loginScreen">
        <Header
          title="Đăng nhập"
          backgroundColor="white"
          color="rgb(48, 49, 55)"
          align="center"
          back="dark"
        />
        <img src={loginImg} className="loginImg" alt="Login img" />
        <form>
          <InputItem
            label="Email/Số điện thoại"
            type="text"
            handleChange={this.handleUsername}
            id="username"
          />
          <InputItem
            label="Mật khẩu"
            type="password"
            handleChange={this.handlePass}
            id="password"
          />
          <div className="remember">
            <input type="checkbox" />
            <span>Ghi nhớ tài khoản</span>
            <br />
          </div>
        </form>
        <LongButton content="Đăng nhập" backgroundColor="rgb(63,81,181)" onClick={this.logIn} />
        <Link to="#">
          <p className="forget">Quên mật khẩu</p>
        </Link>
        <FBButton content="Đăng nhập bằng Facebook" />
        <p className="noAcc">
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
        <ToastContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== '',
  error: state.auth.error,
  isLoggingIn: state.auth.isLoggingIn,
});
const mapDispatchToProps = dispatch => ({
  logIn: (username, password) => dispatch(requestLogin(username, password)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(LoginScreen);
