import React from "react";
import "../scss/MessageItem.scss";
import avatar from "../assets/avatar.png";
import doubleTick from "../assets/doubletick.png";
import tick from "../assets/tick.png";
import error from "../assets/error.png";

const MessageItem = props => {
  const { message, type, id, time } = props.message;
  if (type === "receive") {
    return (
      <div className="messageItem" onClick={props.handle}>
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="msgInfo">
          <div className="msg">{message}</div>
          <div className="time">{time}</div>
        </div>
      </div>
    );
  } else {
    const statusRender =
      props.message.status === "seen" ? (
        <div className="seen">
          <img src={doubleTick} alt="seen" className="seenImg" />
          <span>Đã xem</span>
        </div>
      ) : props.message.status === "sent" ? (
        <div className="sent">
          <img src={tick} alt="sent" className="sentImg" />
          <span>Đã nhận</span>
        </div>
      ) : (
        <div className="error">
          <img src={error} alt="error" className="errorImg" />
          <span>Gửi lỗi</span>
          <span className="retry">Thử lại</span>
        </div>
      );

    return (
      <div className="sendMessageItem" onClick={props.handle}>
        <div
          className="msg"
          style={{
            backgroundColor:
              props.message.status === "error"
                ? "rgb(214,218,223"
                : "rgb(63,81,181)"
          }}
        >
          {message}
        </div>
        {statusRender}
      </div>
    );
  }
};
export default MessageItem;
