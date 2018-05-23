import React from "react";
import "../scss/LongButton.scss";

const LongButton = props => {
  return (
    <button
      className="longBtn"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.content}
    </button>
  );
};
export default LongButton;
