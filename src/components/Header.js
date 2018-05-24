import React from "react";
import "../scss/Header.scss";
import backDark from "../assets/backDark.png";
import history from "../constants/history";

const Header = props => {
  const option = props.option ? (
    <img className="placeholder" />
  ) : (
    <div className="placeholder" />
  );
  return (
    <div
      className="header"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      <img className="back" src={backDark} alt="<" onClick={history.goBack} />

      <p className="title" style={{ textAlign: props.align }}>
        {props.title}
      </p>
      {option}
    </div>
  );
};
export default Header;
