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

class MainScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      tab: 'chat',
    };
  }
  componentDidMount = () => {
    this.props.requestUsers();
    this.props.requestActiveChats();
    this.props.requestPendingChats();
  };
  componentWillUnmount = () => {
    this.props.stopRequestUsers();
    this.props.stopRequestActiveChats();
    this.props.stopRequestPendingChats();
  };
  homeClick = (e) => {
    e.preventDefault();
    this.setState({
      tab: 'home',
    });
  };
  topicClick = (e) => {
    e.preventDefault();
    this.setState({
      tab: 'topic',
    });
  };
  profileClick = (e) => {
    e.preventDefault();
    this.setState({
      tab: 'profile',
    });
  };
  chatClick = (e) => {
    e.preventDefault();
    this.setState({
      tab: 'chat',
    });
  };
  postClick = (e) => {
    e.preventDefault();
    this.setState({
      tab: 'post',
    });
  };
  renderNavbar = tab => (
    <ul className="navi-bar">
      <li>
        <a href="/#" onClick={this.homeClick}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'home' ? '0.2' : '1' }}
            src={homeActive}
            alt="home"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={this.topicClick}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'topic' ? '0.2' : '1' }}
            src={topicActive}
            alt="topic"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={this.postClick}>
          <img className="post-item" src={postActive} alt="post" />
        </a>
      </li>
      <li>
        <a href="/#" onClick={this.chatClick}>
          <img
            className="nav-item"
            style={{ opacity: tab !== 'chat' ? '0.2' : '1' }}
            src={chatActive}
            alt="chat"
          />
        </a>
      </li>
      <li>
        <a href="/#" onClick={this.profileClick}>
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
    if (!this.props.isLoggedIn) {
      return <Redirect to="login" />;
    }

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

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token !== '',
});
const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  stopRequestUsers: () => dispatch(stopRequestUsers()),
  requestActiveChats: () => dispatch(requestActiveChats()),
  stopRequestActiveChats: () => dispatch(stopRequestActiveChats()),
  requestPendingChats: () => dispatch(requestPendingChats()),
  stopRequestPendingChats: () => dispatch(stopRequestPendingChats()),
  loginSuccess: id => dispatch(loginSuccess(id)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(MainScreen);
