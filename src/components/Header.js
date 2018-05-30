import React from 'react';
import '../scss/Header.scss';
import backDark from '../assets/backDark.png';
import backWhite from '../assets/backWhite.png';
import history from '../constants/history';
import optionImg from '../assets/option.png';

const Header = (props) => {
  const option = props.option ? (
    <a href="/#" onClick={props.option}>
      {' '}
      <img src={optionImg} className="placeholder" alt="option" />
    </a>
  ) : (
    <div className="placeholder" />
  );
  return (
    <div className="header" style={{ backgroundColor: props.backgroundColor, color: props.color }}>
      <a onKeyDown={() => null} role="button" tabIndex={0} onClick={history.goBack}>
        <img className="back" src={props.back === 'dark' ? backDark : backWhite} alt="<" />
      </a>

      <p className="title" style={{ textAlign: props.align }}>
        {props.title}
      </p>
      {option}
    </div>
  );
};
export default Header;
