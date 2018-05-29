import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FindComponent from '../components/FindComponent';
import { mockDataContact } from '../constants/mockData';
import VerticalList from '../components/VerticalList';

const propTypes = {};

const defaultProps = {};

export default class CreateNewChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
    };
  }

  render() {
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
        <VerticalList list={mockDataContact} type="contact" />
      </div>
    );
  }
}

CreateNewChat.propTypes = propTypes;
CreateNewChat.defaultProps = defaultProps;
