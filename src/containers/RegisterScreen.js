import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActivityIndicator from 'react-activity-indicator';
import 'react-activity-indicator/src/activityindicator.css';
import { connect } from 'react-redux';
import LongButton from '../components/LongButton';
import FBButton from '../components/FBButton';
import registerImg from '../assets/register.jpg';
import '../scss/FirstScreen.scss';
import Header from '../components/Header';
import '../scss/RegisterScreen.scss';
import InputItem from '../components/InputItem';
import { requestSignup } from '../actions/auth';

class RegisterScreen extends React.Component {
  componentDidUpdate = () => {
    if (this.props.error !== '') this.toastMsg(this.props.error);
  };
  toastMsg = msg => toast(msg, { autoClose: 2000 });
  handleUsername = (e) => {
    this.username = e.target.value;
  };
  handlePass = (e) => {
    this.password = e.target.value;
  };
  handleRePass = (e) => {
    this.repassword = e.target.value;
  };
  signUp = () => {
    if (!this.password || !this.username || !this.repassword) {
      this.toastMsg('Không được để trống');
    } else if (this.password === this.repassword) this.props.signup(this.username, this.password);
    else this.toastMsg('Mật khẩu không trùng khớp');
  };
  renderForm = () => (
    <form>
      <InputItem
        label="Email/Số điện thoại"
        type="text"
        handleChange={this.handleUsername}
        id="username"
      />
      <InputItem label="Mật khẩu" type="password" handleChange={this.handlePass} id="password" />
      <InputItem
        label="Xác nhận mật khẩu"
        type="password"
        handleChange={this.handleRePass}
        id="repassword"
      />
    </form>
  );
  renderBtnPart = () => (
    <div className="btnPart">
      <LongButton content="Tiếp tục" backgroundColor="rgb(63,81,181)" onClick={this.signUp} />

      <FBButton content="Đăng ký bằng Facebook" />
      <p className="haveAcc">
        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/registersuccess" />;
    } else if (this.props.isLoggingIn) {
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
      <div className="registerScreen">
        <Header
          title="Đăng ký tài khoản"
          backgroundColor="white"
          color="rgb(48, 49, 55)"
          align="center"
          back="dark"
        />
        <img src={registerImg} className="registerImg" alt="Register img" />
        <p className="warn">
          Hệ thống đang trong giai đoạn thử nghiệm, vui lòng sử dụng số điện thoại Viettel để đăng
          ký.
        </p>
        {this.renderForm()}
        {this.renderBtnPart()}
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
  signup: (username, password) => dispatch(requestSignup(username, password)),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(RegisterScreen);
