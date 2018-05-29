import React from 'react';
import PropTypes from 'prop-types';
import '../scss/InputItem.scss';

const InputItem = props => (
  <div className="form-item">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      value={props.value}
      onChange={props.handleChange}
      id={props.id}
      placeholder={props.label}
      className="input-item"
      type={props.type}
    />
  </div>
);
export default InputItem;
