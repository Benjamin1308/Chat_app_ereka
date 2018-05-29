import React from "react";
import "../scss/ContactItem.scss";
import avatar from "../assets/avatar.png";

const ContactItem = props => {
  return (
    <div className="contactItem">
      <img src={avatar} alt="avatar" />
      <span className="name">{props.user.name}</span>
      <span className="description">{props.user.description}</span>
    </div>
  );
};

export default ContactItem;
