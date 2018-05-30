import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import VerticalList from '../components/VerticalList';
import { mockDataMessage } from '../constants/mockData';
import chatSend from '../assets/chatSend.png';
import '../scss/MessageScreen.scss';
import MessageOption from '../components/MessageOption';
import MessageSetting from '../components/MessageSetting';

const propTypes = {};

const defaultProps = {};

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOption: false,
      messageSetting: false,
    };
  }
  handleOption = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      messageSetting: false,
      messageOption: !prevState.messageOption,
    }));
  };
  handleSetting = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      messageOption: false,
      messageSetting: !prevState.messageSetting,
    }));
  };
  render() {
    const input = (
      <div className="inputContainer">
        <input className="chat" placeholder="Nhập nội dung chat" />
        <img src={chatSend} alt="Send" className="send" />
      </div>
    );
    let footer = input;
    if (this.state.messageOption) {
      footer = <MessageOption />;
    } else if (this.state.messageSetting) footer = <MessageSetting />;

    return (
      <div className="messageScreen">
        <Header
          title="Nguyễn Tuấn Anh"
          backgroundColor="rgb(63, 81, 181)"
          color="white"
          align="left"
          back="white"
          option={this.handleSetting}
        />
        <div className="messageContainer">
          <VerticalList type="message" list={mockDataMessage} handle={this.handleOption} />
        </div>
        {footer}
      </div>
    );
  }
}

MessageScreen.propTypes = propTypes;
MessageScreen.defaultProps = defaultProps;
