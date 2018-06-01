import React from 'react';
import firebase from 'firebase';
import '../scss/MessageItem.scss';
import avatar from '../assets/avatar.png';
import doubleTick from '../assets/doubletick.png';
import tick from '../assets/tick.png';
import error from '../assets/error.png';

const MessageItem = (props) => {
  const { uid } = firebase.auth().currentUser;
  console.log(props.message);
  const {
    body, timestamp, senderId, seen,
  } = props.message;
  const type = uid === senderId ? 'send' : 'receive';
  if (type === 'receive') {
    const time = timestamp.toDate().toLocaleString();
    return (
      <a href="/#" onClick={props.handle}>
        <div className="messageItem">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="msgInfo">
            <div className="msg">{body}</div>
            <div className="time">{time}</div>
          </div>
        </div>
      </a>
    );
  }
  // let statusRender = (
  //   <div className="error">
  //     <img src={error} alt="error" className="errorImg" />
  //     <span>Gửi lỗi</span>
  //     <span className="retry">Thử lại</span>
  //   </div>
  // );
  let statusRender = <div />;
  if (seen) {
    statusRender = (
      <div className="seen">
        <img src={doubleTick} alt="seen" className="seenImg" />
        <span>Đã xem</span>
      </div>
    );
  } else {
    statusRender = (
      <div className="sent">
        <img src={tick} alt="sent" className="sentImg" />
        <span>Đã nhận</span>
      </div>
    );
  }

  return (
    <a onClick={props.handle} href="/#">
      <div className="sendMessageItem">
        <div
          className="msg"
          style={{
            backgroundColor:
              /* props.message.status === 'error' ? 'rgb(214,218,223' : */ 'rgb(63,81,181)',
          }}
        >
          {body}
        </div>
        {statusRender}
      </div>
    </a>
  );
};
export default MessageItem;
