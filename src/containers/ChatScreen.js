import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import newChat from '../assets/newChat.png';
import '../scss/ChatScreen.scss';
import { mockDataBlock } from '../constants/mockData';
import VerticalList from '../components/VerticalList';
import FindComponent from '../components/FindComponent';
import { requestUsers, stopRequestUsers } from '../actions/users';
import {
  requestActiveChats,
  stopRequestActiveChats,
  requestPendingChats,
  stopRequestPendingChats,
} from '../actions/chats';

class ChatScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      active: 'activeChat',
      find: '',
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
  tabActivate = (e, active) => {
    e.preventDefault();
    this.setState({
      active,
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
          color: active === 'activeChat' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={e => this.tabActivate(e, 'activeChat')}
      >
        ĐANG CHAT
      </a>
      <a
        href="/#"
        style={{
          color: active === 'chatRequest' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={e => this.tabActivate(e, 'chatRequest')}
      >
        YÊU CẦU CHAT
      </a>
      <a
        href="/#"
        style={{
          color: active === 'blockList' ? 'rgb(63,81,181)' : 'rgb(162,170,176)',
        }}
        onClick={e => this.tabActivate(e, 'blockList')}
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
    if (active === 'activeChat') {
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
    } else if (active === 'chatRequest') {
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

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  stopRequestUsers: () => dispatch(stopRequestUsers()),
  requestActiveChats: () => dispatch(requestActiveChats()),
  stopRequestActiveChats: () => dispatch(stopRequestActiveChats()),
  requestPendingChats: () => dispatch(requestPendingChats()),
  stopRequestPendingChats: () => dispatch(stopRequestPendingChats()),
});

export default connect(mapStateToProps,
  mapDispatchToProps)(ChatScreen);
