import React from "react";
import "../scss/MessageSetting.scss";
import close from "../assets/close.png";
import noti from "../assets/noti.png";
import profile from "../assets/profile.png";
import deleteAll from "../assets/deleteAll.png";
import block from "../assets/blockMessage.png";

const MessageSetting = props => {
  return (
    <div className="messageSetting">
      <div>
        <img src={profile} alt="delete" />
        <span>Xem hồ sơ</span>
      </div>
      <div>
        <img src={noti} alt="copy" />
        <span>Thông báo</span>
      </div>
      <div>
        <img src={block} alt="delete" />
        <span>Chặn tin nhắn</span>
      </div>
      <div>
        <img src={deleteAll} alt="delete" />
        <span>Xóa toàn bộ nội dung</span>
      </div>
      <div>
        <img src={close} alt="delete" />
        <span>thôi</span>
      </div>
    </div>
  );
};

export default MessageSetting;
