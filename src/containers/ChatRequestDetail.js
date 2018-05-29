import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { mockDataUser, mockDataChatRequest } from '../constants/mockData';
import bigAvatar from '../assets/bigAvatar.png';

import follow from '../assets/follow.png';
import tick from '../assets/thintick.png';
import error from '../assets/checkNo.png';
import '../scss/ChatRequestDetail.scss';
import MessageItem from '../components/MessageItem';

export default class ChatRequestDetail extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const request = mockDataChatRequest.filter(req => req.id === this.props.match.params.id)[0];
    console.log(request);
    const user = mockDataUser.filter(userData => userData.id === request.userId)[0];
    console.log(user);
    return (
      <div className="chatRequestDetail">
        <Header
          title={user.name}
          backgroundColor="rgb(63, 81, 181)"
          color="white"
          align="center"
          back="white"
          option
        />
        <div className="userInfoContainer">
          <div className="ava-follow">
            <img src={bigAvatar} alt="avatar" className="bigAvatar" />
            <img src={follow} alt="follow" className="followImg" />
          </div>
          <div className="userInfo">
            <p className="name">{user.name} </p>
            <p className="description">{user.description}</p>
            <div className="followGroup">
              <div className="followerBox">
                <p className="follower">{user.follower}</p>
                <p>Follower</p>
              </div>
              <div className="followingBox">
                <p className="following">{user.following}</p>
                <p>Following</p>
              </div>
            </div>
          </div>
          <div className="reqInfo">
            <div className="reqDetail">
              <div className="request">
                <span className="name">{`${request.name} `}</span>
                <span className="saying">muốn được chat với bạn</span>
              </div>
              <MessageItem
                message={{
 message: 'lorem ipsum', type: 'receive', id: '1', time: '9.00 am',
}}
              />
            </div>
            <div className="option">
              <button className="button l-btn">
                <img
                  src={tick}
                  alt="accept"
                  style={{
                    width: '16px',
                    marginLeft: '8px',
                    marginRight: '8px',
                  }}
                />Chấp nhận
              </button>
              <button className="button">
                <img
                  src={error}
                  alt="no"
                  style={{
                    width: '16px',
                    marginLeft: '8px',
                    marginRight: '8px',
                  }}
                />Từ chối
              </button>
              <span>Bỏ qua</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
