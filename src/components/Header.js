import React from "react";
import { BiUserCircle } from "react-icons/bi";

import "../App.css";

const Header = ({ handleLoginClick, currentUser, loginPopupState }) => {
  return (
    <div className="header">
      <div className="title">Drawceries</div>
      <div
        className="loginButton"
        onClick={() => {
          handleLoginClick();
        }}
      >
        <BiUserCircle
          className={"loginIcon" + (loginPopupState ? "Highlighted" : "")}
        />
      </div>
    </div>
  );
};

export default Header;
