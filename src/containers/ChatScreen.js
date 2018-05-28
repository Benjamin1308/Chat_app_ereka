import React from "react";
import newChat from "../assets/newChat.png";
import "../scss/ChatScreen.scss";
import {
  mockDataChatMessage,
  mockDataChatRequest,
  mockDataBlock
} from "../constants/mockData";
import VerticalList from "../components/VerticalList";
import FindComponent from "../components/FindComponent";

export default class ChatScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      active: "dang_chat",
      find: ""
    };
  }
  chattingClick = () => {
    this.setState({
      active: "dang_chat"
    });
  };
  requestClick = () => {
    this.setState({
      active: "yeu_cau_chat"
    });
  };
  blockClick = () => {
    this.setState({
      active: "ds_chan"
    });
  };
  handleChange = e => {
    this.setState({
      find: e.target.value
    });
  };
  render() {
    const { active, find } = this.state;
    const contentRender =
      active === "dang_chat" ? (
        <VerticalList type="chat" list={mockDataChatMessage} />
      ) : active === "yeu_cau_chat" ? (
        <div>
          <div className="noOfReq">
            <div className="noOfReqMsg">
              Bạn nhận được {mockDataChatRequest.length} yêu cầu chat
            </div>
          </div>
          <VerticalList type="request" list={mockDataChatRequest} />
        </div>
      ) : (
        <div>
          <div className="blockHeader">
            <p className="add">THÊM</p>
            <p className="addMsg">
              Bạn có thể thêm người bạn không muốn chat vào danh sách này
            </p>
          </div>
          <div className="divider" style={{ height: "4px" }} />
          <FindComponent
            value={find}
            placeholder="tìm kiếm hồ sơ"
            handleChange={this.handleChange}
          />
          <VerticalList type="block" list={mockDataBlock} />
        </div>
      );
    return (
      <div className="chatScreen">
        <div className="chatHeader">
          <p>Chat</p>
          <img src={newChat} alt="new chat" />
        </div>
        <div className="tabBar">
          <p
            style={{
              color:
                active === "dang_chat" ? "rgb(63,81,181)" : "rgb(162,170,176)"
            }}
            onClick={this.chattingClick}
          >
            ĐANG CHAT
          </p>
          <p
            style={{
              color:
                active === "yeu_cau_chat"
                  ? "rgb(63,81,181)"
                  : "rgb(162,170,176)"
            }}
            onClick={this.requestClick}
          >
            YÊU CẦU CHAT
          </p>
          <p
            style={{
              color:
                active === "ds_chan" ? "rgb(63,81,181)" : "rgb(162,170,176)"
            }}
            onClick={this.blockClick}
          >
            DS. CHẶN
          </p>
        </div>
        <div className="divider" />
        {contentRender}
      </div>
    );
  }
}
