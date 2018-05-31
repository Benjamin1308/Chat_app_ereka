import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import newChat from '../assets/newChat.png';
import '../scss/ChatScreen.scss';
import { mockDataBlock } from '../constants/mockData';
import VerticalList from '../components/VerticalList';
import FindComponent from '../components/FindComponent';

class ChatScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      active: 'dang_chat',
      find: '',
    };
  }
  chattingClick = (e) => {
    e.preventDefault();
    this.setState({
      active: 'dang_chat',
    });
  };
  requestClick = (e) => {
    e.preventDefault();
    this.setState({
      active: 'yeu_cau_chat',
    });
  };
  blockClick = (e) => {
    e.preventDefault();
    this.setState({
      active: 'ds_chan',
    });
  };
  handleChange = (e) => {
    this.setState({
      find: e.target.value,
    });
  };
  renderTabBar = active => (
    <div className="tabBar">
      <a
        href="/#"
        style={{
          color: active === 'dang_chat' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={this.chattingClick}
      >
        ĐANG CHAT
      </a>
      <a
        href="/#"
        style={{
          color: active === 'yeu_cau_chat' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={this.requestClick}
      >
        YÊU CẦU CHAT
      </a>
      <a
        href="/#"
        style={{
          color: active === 'ds_chan' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={this.blockClick}
      >
        DS. CHẶN
      </a>
    </div>
  );
  renderChatHeader = () => (
    <div className="chatHeader">
      <p>Chat</p>
      <Link to="/new-chat">
        <img src={newChat} alt="new chat" />
      </Link>
    </div>
  );
  render() {
    const { active, find } = this.state;
    let contentRender = (
      <div className="contentRender">
        <div className="blockHeader">
          <p className="add">THÊM</p>
          <p className="addMsg">Bạn có thể thêm người bạn không muốn chat vào danh sách này</p>
        </div>
        <div className="divider" style={{ height: '4px' }} />
        <FindComponent value={find} placeholder="tìm kiếm hồ sơ" handleChange={this.handleChange} />
        <VerticalList type="block" list={mockDataBlock} />
      </div>
    );
    if (active === 'dang_chat') {
      if (this.props.pendingChats.length > 0) {
        contentRender = (
          <div className="contentRender">
            <div className="chatReqHeader">
              <div>Yêu cầu chat</div>
              <div className="numberOfReq">{this.props.pendingChats.length}</div>
            </div>
            <VerticalList type="request" list={[this.props.pendingChats[0]]} />
            <div className="chattingHeader">
              <div>Đang chat</div>
            </div>
            <VerticalList type="chat" list={this.props.activeChats} />
          </div>
        );
      } else contentRender = <VerticalList type="chat" list={this.props.activeChats} />;
    } else if (active === 'yeu_cau_chat') {
      contentRender = (
        <div className="contentRender">
          <div className="noOfReq">
            <div className="noOfReqMsg">
              Bạn nhận được {this.props.pendingChats.length} yêu cầu chat
            </div>
          </div>
          <VerticalList type="request" list={this.props.pendingChats} />
        </div>
      );
    }
    return (
      <div className="chatScreen">
        {this.renderChatHeader()}
        {this.renderTabBar(active)}
        <div className="divider" />
        {contentRender}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeChats: state.chats.activeChats,
  pendingChats: state.chats.pendingChats,
});

export default connect(mapStateToProps,
  null)(ChatScreen);
