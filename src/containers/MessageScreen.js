import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import VerticalList from "../components/VerticalList";
import { mockDataMessage } from "../constants/mockData";
import chatSend from "../assets/chatSend.png";
import "../scss/MessageScreen.scss";

const propTypes = {};

const defaultProps = {};

export default class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="messageScreen">
        <Header
          title="Nguyễn Tuấn Anh"
          backgroundColor="rgb(63, 81, 181)"
          color="white"
          align="left"
          back="white"
          option={true}
        />
        <div className="messageContainer">
          <VerticalList type="message" list={mockDataMessage} />
        </div>
        <div className="inputContainer">
          <input className="chat" />
          <img src={chatSend} alt="Send" className="send" />
        </div>
      </div>
    );
  }
}

MessageScreen.propTypes = propTypes;
MessageScreen.defaultProps = defaultProps;
