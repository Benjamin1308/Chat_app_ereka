import React from "react";
import { Link } from "react-router-dom";
import LongButton from "../components/LongButton";
import "../scss/RegisterSuccess.scss";
import success from "../assets/success.png";

const RegisterSuccess = props => {
  return (
    <div className="registerSuccess">
      <div className="successHeader">
        <p className="congrat">Đăng ký thành công!</p>
        <p className="congratDetail">
          Dòng thông tin chúc mừng người dùng đã đăng ký tài khoản thành công.
        </p>
      </div>
      <img className="successImg" src={success} alt="success" />
      <Link to=" ">
        <LongButton content="Bắt đầu" backgroundColor="rgb(63,81,181)" />
      </Link>
    </div>
  );
};
export default RegisterSuccess;
