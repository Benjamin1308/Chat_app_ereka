import React from 'react';
import '../scss/LongButton.scss';

const LongButton = props => (
  <button
    className="longBtn"
    style={{ backgroundColor: props.backgroundColor }}
    onClick={props.onClick}
  >
    {props.content}
  </button>
);
export default LongButton;
