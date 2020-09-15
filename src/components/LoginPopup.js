import React from "react";

import PopupBase from "./PopupBase.js";
import ConfirmButton from "./listViewComponents/ConfirmButton.js";
import "../App.css";

const LoginPopup = ({
  currentUser,
  handleUserChange,
  closeLogin,
  cancelLogin,
}) => {
  const handleSubmit = (e) => {
    handleUserChange(e.target.user.value);
    closeLogin();
  };

  return (
    <PopupBase
      title={
        cancelLogin
          ? "Please log in"
          : currentUser
          ? "Current user: " + currentUser
          : ""
      }
      closePopup={closeLogin}
      cancelPopup={cancelLogin}
      anim="dropAnim"
    >
      <form className="popupForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <input name="user" type="text" placeholder="User name" required />
        </div>
        <div className={"popupButton" + (currentUser ? "s" : "")}>
          {currentUser && (
            <ConfirmButton
              label="Log out"
              buttonClass="halfButton red"
              handleConfirm={() => {
                handleUserChange(null);
                closeLogin();
              }}
            />
          )}
          {currentUser && <div className="verticalBorder" />}
          <button
            className={"green " + (currentUser ? "halfButton" : "fullButton")}
            type="submit"
          >
            {currentUser ? "Switch user" : "Log in"}
          </button>
        </div>
      </form>
    </PopupBase>
  );
};

export default LoginPopup;
