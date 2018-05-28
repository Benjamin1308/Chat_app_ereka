import React from "react";
import { Link } from "react-router-dom";
import "../scss/BlockItem.scss";

const BlockItem = props => {
  return (
    <div className="blockItem">
      <div className="blockMain">
        <span className="name">{props.block.name}</span>
        <Link to={`/stop-block/${props.block.name}`}>
          <span className="unblock">BỎ CHẶN</span>
        </Link>
      </div>
      <div className="time">Chặn từ ngày {props.block.from}</div>
    </div>
  );
};
export default BlockItem;
