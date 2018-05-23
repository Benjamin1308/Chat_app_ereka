import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import InputItem from "../components/InputItem";
import LongButton from "../components/LongButton";
import FBButton from "../components/FBButton";
import loginImg from "../assets/login.jpg";
import "../scss/LoginScreen.scss";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="loginScreen">
        <Header
          title="Đăng nhập"
          backgroundColor="white"
          color="rgb(48, 49, 55)"
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

          <Link to="/">
            <LongButton
              content="Đăng nhập"
              backgroundColor="rgb(63,81,181)"
              onClick={this.signUp}
            />
          </Link>
        </form>
        <Link to="#">
          <p className="forget">Quên mật khẩu</p>
        </Link>
        <FBButton content="Đăng nhập bằng Facebook" />
        <p className="noAcc">
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    );
  }
}
