import React from 'react';
import PropTypes from 'prop-types';
import ChatItem from './ChatItem';
import RequestItem from './RequestItem';
import BlockItem from './BlockItem';
import MessageItem from './MessageItem';
import ContactItem from './ContactItem';

export default class VerticalList extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  chooseRenderList = (type, list) => {
    switch (type) {
      case 'chat':
        return list.map(item => <ChatItem chat={item} key={item.id} />);
      case 'request':
        return list.map(item => <RequestItem request={item} key={item.id} />);
      case 'block':
        return list.map(item => <BlockItem block={item} key={item.id} />);
      case 'message':
        return list.map(item => (
          <MessageItem message={item} key={item.id} handle={this.props.handle} />
        ));
      case 'contact':
        return list.map(item => <ContactItem user={item} key={item.id} />);
      default:
        return null;
    }
  };
  render() {
    const { type, list } = this.props;
    const renderList = this.chooseRenderList(type, list);
    return <div>{renderList}</div>;
  }
}
