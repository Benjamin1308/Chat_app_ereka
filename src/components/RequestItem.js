import React from "react";
import avatar from "../assets/avatar.png";
import tick from "../assets/thintick.png";
import error from "../assets/checkNo.png";
import "../scss/RequestItem.scss";

const RequestItem = props => {
  const { name, id, requestTime } = props.request;
  return (
    <div className="requestItem">
      <div className="reqInfo">
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="reqDetail">
          <div>
            <span className="name">{name + " "}</span>
            <span className="saying">muốn được chat với bạn</span>
          </div>
          <div className="time">{requestTime}</div>
        </div>
      </div>
      <div className="option">
        <button className="button l-btn">
          <img
            src={tick}
            style={{ width: "16px", marginLeft: "8px", marginRight: "8px" }}
          />Chấp nhận
        </button>
        <button className="button">
          <img
            src={error}
            style={{ width: "16px", marginLeft: "8px", marginRight: "8px" }}
          />Từ chối
        </button>
        <span>Bỏ qua</span>
      </div>
    </div>
  );
};

export default RequestItem;