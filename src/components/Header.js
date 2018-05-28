import React from "react";
import "../scss/Header.scss";
import backDark from "../assets/backDark.png";
import backWhite from "../assets/backWhite.png";
import history from "../constants/history";
import optionImg from "../assets/option.png";

const Header = props => {
  const option = props.option ? (
    <img src={optionImg} className="placeholder" alt="option" />
  ) : (
    <div className="placeholder" />
  );
  return (
    <div
      className="header"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <img
        className="back"
        src={props.back === "dark" ? backDark : backWhite}
        alt="<"
        onClick={history.goBack}
      />

      <p className="title" style={{ textAlign: props.align }}>
        {props.title}
      </p>
      {option}
    </div>
  );
};
export default Header;
