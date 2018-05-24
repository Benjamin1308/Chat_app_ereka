import React from "react";
import homeActive from "../assets/homeActive.png";
import postActive from "../assets/postActive.png";
import profileActive from "../assets/profileActive.png";
import topicActive from "../assets/topicActive.png";
import chatActive from "../assets/chatActive.png";
import PlaceHolder from "./PlaceHolder";
import ChatScreen from "./ChatScreen";
import "../scss/MainScreen.scss";

export default class MainScreen extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      tab: "chat"
    };
  }
  homeClick = () => {
    this.setState({
      tab: "home"
    });
  };
  topicClick = () => {
    this.setState({
      tab: "topic"
    });
  };
  profileClick = () => {
    this.setState({
      tab: "profile"
    });
  };
  chatClick = () => {
    this.setState({
      tab: "chat"
    });
  };
  postClick = () => {
    this.setState({
      tab: "post"
    });
  };
  render() {
    const { tab } = this.state;
    const renderScreen = tab === "chat" ? <ChatScreen /> : <PlaceHolder />;
    return (
      <div>
        {renderScreen}
        <ul className="navi-bar">
          <li>
            <img
              className="nav-item"
              style={{ opacity: tab !== "home" ? "0.2" : "1" }}
              src={homeActive}
              alt="home"
              onClick={this.homeClick}
            />
          </li>
          <li>
            <img
              className="nav-item"
              style={{ opacity: tab !== "topic" ? "0.2" : "1" }}
              src={topicActive}
              alt="topic"
              onClick={this.topicClick}
            />
          </li>
          <li>
            <img
              className="post-item"
              src={postActive}
              alt="post"
              onClick={this.postClick}
            />
          </li>
          <li>
            <img
              className="nav-item"
              style={{ opacity: tab !== "chat" ? "0.2" : "1" }}
              src={chatActive}
              alt="chat"
              onClick={this.chatClick}
            />
          </li>
          <li>
            <img
              className="nav-item"
              style={{ opacity: tab !== "profile" ? "0.2" : "1" }}
              src={profileActive}
              alt="profile"
              onClick={this.profileClick}
            />
          </li>
        </ul>
      </div>
    );
  }
}
