import React from 'react';
import fblogo from '../assets/fblogo.png';
import '../scss/FBButton.scss';

const FBButton = props => (
  <button className="fbBtn">
    <img className="fblogo" src={fblogo} alt="fb logo" />
    {props.content}
  </button>
);
export default FBButton;
