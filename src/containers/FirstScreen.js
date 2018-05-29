import React from 'react';
import { Link } from 'react-router-dom';
import ereka from '../assets/ereka.png';
import background from '../assets/firstScreenBackgroundObj.png';
import LongButton from '../components/LongButton';
import FBButton from '../components/FBButton';
import '../scss/FirstScreen.scss';

const FirstScreen = props => (
  <div className="firstScreen">
    <img className="ereka" src={ereka} alt="ereka logo" />
    <img className="backgroundObj" src={background} alt="Background Img" />
    <p className="title">Mở ra kho tri thức</p>
    <p className="first">Hỏi. Chia sẻ. Bàn luận.</p>
    <p className="second">Nhận giải đáp từ chuyên gia</p>
    <div className="btnPart">
      <Link to="/login">
        <LongButton content="Đăng nhập" backgroundColor="rgb(32,150,255)" />
      </Link>
      <FBButton content="Đăng nhập bằng Facebook" />
      <p className="or">hoặc</p>
      <Link to="./register">
        <p className="sign">Đăng ký tài khoản mới</p>
      </Link>
    </div>
  </div>
);
export default FirstScreen;
