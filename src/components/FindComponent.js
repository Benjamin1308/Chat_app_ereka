import React from "react";
import search from "../assets/search.png";
import "../scss/FindComponent.scss";

const FindComponent = props => {
  return (
    <div className="findComponent">
      <img src={search} alt="glass icon" />
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default FindComponent;
