import React from "react";
import "../scss/BlockItem.scss";

const BlockItem = props => {
  return (
    <div className="blockItem">
      <div className="blockMain">
        <span className="name">{props.block.name}</span>
        <span className="unblock">BỎ CHẶN</span>
      </div>
      <div className="time">Chặn từ ngày {props.block.from}</div>
    </div>
  );
};
export default BlockItem;
