import React from "react";
import { AiOutlineUser } from "react-icons/ai";

import "../App.css";

const Header = ({ handleLoginClick, currentUser, loginPopupState }) => {
  return (
    <div className="header">
      <div className="title">
        <span className="draw">DRAW</span>
        <span className="ceries">CERIES</span>
      </div>
      <div
        className="loginButton"
        onClick={() => {
          handleLoginClick();
        }}
      >
        <AiOutlineUser
          className={"loginIcon" + (loginPopupState ? "Highlighted" : "")}
        />
      </div>
    </div>
  );
};

export default Header;
