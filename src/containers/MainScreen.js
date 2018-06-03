import React from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import homeActive from '../assets/homeActive.png';
import postActive from '../assets/postActive.png';
import profileActive from '../assets/profileActive.png';
import topicActive from '../assets/topicActive.png';
import chatActive from '../assets/chatActive.png';
import PlaceHolder from './PlaceHolder';
import ChatScreen from './ChatScreen';
import '../scss/MainScreen.scss';
import LogoutScreen from './LogoutScreen';
import { requestUsers, stopRequestUsers } from '../actions/users';
import {
  requestActiveChats,
  stopRequestActiveChats,
  requestPendingChats,
  stopRequestPendingChats,
} from '../actions/chats';
import { loginSuccess, logout } from '../actions/auth';

export default class MainScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      tab: 'chat',
    };
  }

  tabClick = (e, tab) => {
    e.preventDefault();
    this.setState({
      tab,
    });
  };
  renderNavbar = tab => (
    <ul className="navi-bar">
      <li>
        <a href="/#" onClick={e => this.tabClick(e, 'home')}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'home' ? '0.2' : '1' }}
            src={homeActive}
            alt="home"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={e => this.tabClick(e, 'topic')}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'topic' ? '0.2' : '1' }}
            src={topicActive}
            alt="topic"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={e => this.tabClick(e, 'post')}>
          <img className="post-item" src={postActive} alt="post" />
        </a>
      </li>
      <li>
        <a href="/#" onClick={e => this.tabClick(e, 'chat')}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'chat' ? '0.2' : '1' }}
            src={chatActive}
            alt="chat"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={e => this.tabClick(e, 'profile')}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'profile' ? '0.2' : '1' }}
            src={profileActive}
            alt="profile"
          />
        </a>
      </li>
    </ul>
  );
  render() {
    const { tab } = this.state;
    let renderScreen = tab === 'chat' ? <ChatScreen /> : <PlaceHolder />;
    if (tab === 'profile') renderScreen = <LogoutScreen />;
    return (
      <div>
        {renderScreen}
        {this.renderNavbar(tab)}
      </div>
    );
  }
}
