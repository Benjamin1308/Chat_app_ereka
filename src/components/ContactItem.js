import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { firestore } from '../constants/firebase';
import '../scss/ContactItem.scss';
import defaultAvatar from '../assets/avatar.png';

const ContactItem = (props) => {
  const { id, name, avatar } = props.user;
  const { uid } = firebase.auth().currentUser;
  const id1 = uid < id ? uid : id;
  const id2 = uid > id ? uid : id;
  const createNewChat = () => {
    firestore
      .collection('chats')
      .doc(`${id1}-${id2}`)
      .set({
        participants: {
          [uid]: true,
        },
      });
  };
  return (
    <Link to={`/message/${id}`} onClick={createNewChat}>
      <div className="contactItem">
        <img src={props.user.avatar || defaultAvatar} alt="avatar" />
        <span className="name">{props.user.name}</span>
        <span className="description">{props.user.position}</span>
      </div>
    </Link>
  );
};

export default ContactItem;
