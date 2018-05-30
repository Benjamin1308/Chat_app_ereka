import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import FindComponent from '../components/FindComponent';
import VerticalList from '../components/VerticalList';

const propTypes = {};

const defaultProps = {};

class CreateNewChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
    };
  }

  render() {
    const sections = [];
    this.props.users.forEach((user) => {
      const insert = sections.find(section => section.title === user.name[0]);
      if (insert) {
        insert.data.push(user);
      } else sections.push({ title: user.name[0], data: [user] });
    });
    for (let i = 0; i < sections.length - 1; i += 1) {
      for (let j = 1; j < sections.length; j += 1) {
        if (sections[i].title > sections[j].title) {
          const tmp = sections[i];
          sections[i] = sections[j];
          sections[j] = tmp;
        }
      }
    }
    return (
      <div className="createNewChat">
        <Header
          title="Tạo trò chuyện mới"
          backgroundColor="rgb(63, 81, 181)"
          color="white"
          align="left"
          back="white"
        />
        <FindComponent value={this.state.find} placeholder="nhập tên người muốn chat" />
        <p style={{ margin: '15px', fontSize: '14px', color: 'rgb(48, 49, 55)' }}>A</p>
        <VerticalList list={this.props.users} type="contact" />
      </div>
    );
  }
}

CreateNewChat.propTypes = propTypes;
CreateNewChat.defaultProps = defaultProps;

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps,
  null)(CreateNewChat);
