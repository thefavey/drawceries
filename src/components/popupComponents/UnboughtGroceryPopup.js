import React from "react";

import PopupBase from "./PopupBase.js";
import ConfirmButton from "./ConfirmButton.js";
import { dateToString } from "../../utils.js";
import "../../App.css";

const UnboughtGroceryPopup = ({
  grocery,
  buyGrocery,
  removeGrocery,
  closePopup,
  currentUser,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const price = parseInt(e.target.price.value);
    buyGrocery(grocery, price, currentUser);
    closePopup();
  };

  const handleRemove = () => {
    removeGrocery(grocery);
    closePopup();
  };

  return (
    <PopupBase
      title={
        grocery.name + (grocery.quantity ? " (" + grocery.quantity + ")" : "")
      }
      closePopup={closePopup}
      anim="scaleAnim"
    >
      <span className="popupInfo">
        {"Added by " +
          grocery.addedBy +
          " on " +
          dateToString(grocery.addedOn) +
          "."}
      </span>
      <form className="popupForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <input
            aria-label="price"
            name="price"
            type="number"
            step="0.01"
            placeholder="Price (in €)"
            required
          />
        </div>
        <div className="popupButtons">
          <ConfirmButton
            label="Remove"
            buttonClass="halfButton red"
            handleConfirm={handleRemove}
          />
          <div className="verticalBorder" />
          <button className="halfButton green" type="submit">
            Buy
          </button>
        </div>
      </form>
    </PopupBase>
  );
};

export default UnboughtGroceryPopup;
