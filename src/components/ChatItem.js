import React from "react";
import avatarDefault from "../assets/avatar.png";
import "../scss/ChatItem.scss";
import doubletick from "../assets/doubletick.png";
import tick from "../assets/tick.png";
import error from "../assets/error.png";

const ChatItem = props => {
  const { avatar, name, id, time, body, status } = props.chat;
  const statusSymbol =
    status === "MSG_SENT" ? (
      <img src={tick} alt="tick" style={{ width: "9px" }} />
    ) : status === "MSG_SEEN" ? (
      <img src={doubletick} alt="tick" style={{ width: "13.8px" }} />
    ) : (
      <img src={error} alt="tick" style={{ width: "8px" }} />
    );
  const statusRender = status === "MSG_PENDING" ? <span /> : statusSymbol;
  return (
    <div className="chatItem">
      <img className="avatar" src={avatar || avatarDefault} alt="avatar" />
      <div className="msgContainer">
        <div className="msgInfo">
          <p className="name">{name}</p>
          <p
            className="time"
            style={{
              color:
                status !== "MSG_PENDING"
                  ? "rgb(137,139,155)"
                  : "rgb(48, 49, 55)"
            }}
          >
            {time}
          </p>
        </div>
        <div
          className="body"
          style={{
            color:
              status !== "MSG_PENDING" ? "rgb(137,139,155)" : "rgb(48, 49, 55)"
          }}
        >
          {statusRender}
          {" " + body}
        </div>
      </div>
    </div>
  );
};
export default ChatItem;
