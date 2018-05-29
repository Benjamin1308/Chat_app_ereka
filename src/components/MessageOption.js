import React from "react";
import "../scss/MessageOption.scss";
import close from "../assets/close.png";
import chatDelete from "../assets/chatDelete.png";
import chatCopy from "../assets/chatCopy.png";

const MessageOption = props => {
  return (
    <div className="messageOption">
      <div>
        <img src={chatDelete} alt="delete" />
        <span>Xóa tin nhắn</span>
      </div>
      <div>
        <img src={chatCopy} alt="copy" />
        <span>Copy</span>
      </div>
      <div>
        <img src={close} alt="delete" />
        <span>Thôi</span>
      </div>
    </div>
  );
};
export default MessageOption;
