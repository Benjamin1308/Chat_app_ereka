import React from "react";
import { Redirect, Link } from "react-router-dom";
import LongButton from "../components/LongButton";
import FBButton from "../components/FBButton";
import registerImg from "../assets/register.jpg";
import "../scss/FirstScreen.scss";
import Header from "../components/Header";
import "../scss/RegisterScreen.scss";
import InputItem from "../components/InputItem";

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword: ""
    };
  }
  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  handlePass = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleRePass = e => {
    this.setState({
      repassword: e.target.value
    });
  };
  signUp = () => {
    //sign up logic
    return <Redirect to="/acv" />;
  };
  render() {
    return (
      <div className="registerScreen">
        <Header
          title="Đăng ký tài khoản"
          backgroundColor="white"
          color="rgb(48, 49, 55)"
        />
        <img src={registerImg} className="registerImg" alt="Register img" />
        <p className="warn">
          Hệ thống đang trong giai đoạn thử nghiệm, vui lòng sử dụng số điện
          thoại Viettel để đăng ký.
        </p>
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
          <InputItem
            label="Xác nhận mật khẩu"
            type="password"
            handleChange={this.handleRePass}
            id="repassword"
          />
        </form>
        <div className="btnPart">
          <Link to="/registersuccess">
            <LongButton
              content="Tiếp tục"
              backgroundColor="rgb(63,81,181)"
              onClick={this.signUp}
            />
          </Link>
          <FBButton content="Đăng ký bằng Facebook" />
          <p className="haveAcc">
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </div>
      </div>
    );
  }
}
