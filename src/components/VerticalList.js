import React from "react";
import PropTypes from "prop-types";
import ChatItem from "./ChatItem";
import RequestItem from "./RequestItem";
import BlockItem from "./BlockItem";
import MessageItem from "./MessageItem";

export default class VerticalList extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  chooseRenderList = (type, list) => {
    switch (type) {
      case "chat":
        return list.map(item => {
          return <ChatItem chat={item} key={item.id} />;
        });
      case "request":
        return list.map(item => {
          return <RequestItem request={item} key={item.id} />;
        });
      case "block":
        return list.map(item => {
          return <BlockItem block={item} key={item.id} />;
        });
      case "message":
        return list.map(item => {
          return <MessageItem message={item} key={item.id} />;
        });
      default:
        break;
    }
  };
  render() {
    const { type, list } = this.props;
    console.log(list);
    const renderList = this.chooseRenderList(type, list);
    return <div>{renderList}</div>;
  }
}
