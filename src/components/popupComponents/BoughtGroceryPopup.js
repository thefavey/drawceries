import React from "react";

import PopupBase from "./PopupBase.js";
import ConfirmButton from "./ConfirmButton.js";
import { dateToString } from "../../utils.js";
import "../../App.css";

const BoughtGroceryPopup = ({ grocery, unbuyGrocery, closePopup }) => {
  const handleUnbuy = () => {
    unbuyGrocery(grocery);
    closePopup();
  };

  return (
    <PopupBase title={grocery.name} closePopup={closePopup} anim="scaleAnim">
      <span className="popupInfo">
        {"Bought by " +
          grocery.boughtBy +
          " on " +
          dateToString(grocery.boughtOn) +
          " for " +
          grocery.price +
          "€."}
      </span>
      <div className="popupButton">
        <ConfirmButton
          label="Unbuy"
          buttonClass="red fullButton"
          handleConfirm={handleUnbuy}
        />
      </div>
    </PopupBase>
  );
};

export default BoughtGroceryPopup;
