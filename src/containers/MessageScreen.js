import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import VerticalList from '../components/VerticalList';
import { mockDataMessage } from '../constants/mockData';
import chatSend from '../assets/chatSend.png';
import '../scss/MessageScreen.scss';
import MessageOption from '../components/MessageOption';
import MessageSetting from '../components/MessageSetting';
import { requestMsg, stopRequestMsg } from '../actions/chats';

const propTypes = {};

const defaultProps = {};

class MessageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOption: false,
      messageSetting: false,
    };
  }
  componentDidMount() {
    this.props.requestMsg(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.stopRequestMsg();
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
    const { id } = this.props.match.params;
    const user = this.props.users.filter(item => item.id === id);

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
          title={user.name}
          backgroundColor="rgb(63, 81, 181)"
          color="white"
          align="left"
          back="white"
          option={this.handleSetting}
        />
        <div className="messageContainer">
          <VerticalList type="message" list={this.props.chats} handle={this.handleOption} />
        </div>
        {footer}
      </div>
    );
  }
}

MessageScreen.propTypes = propTypes;
MessageScreen.defaultProps = defaultProps;

const mapStateToProps = state => ({
  users: state.users,
  chats: state.chats.chats,
});
const mapDispatchToProps = dispatch => ({
  requestMsg: id => dispatch(requestMsg(id)),
  stopRequestMsg: () => dispatch(stopRequestMsg()),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(MessageScreen);
