import React, { useState } from "react";

import PopupBase from "../PopupBase.js";
import { currentDate } from "../../utils.js";
import "../../App.css";

const AddGroceryPopup = ({
  groceryCategories,
  closePopup,
  addGrocery,
  groceriesDict,
  currentUser,
}) => {
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const quantity = e.target.quantity.value;
    const category = e.target.category.value;
    const groceryNames = groceriesDict.map((item) => item.name.toLowerCase());
    if (groceryNames.indexOf(name.toLowerCase()) > -1) {
      setErrMsg("item already in list");
    } else {
      addGrocery({
        name: name,
        quantity: quantity ? quantity : null,
        category: category !== "Category" ? category : null,
        addedBy: currentUser,
        addedOn: currentDate(),
        isBought: false,
      });
      closePopup();
    }
  };

  return (
    <PopupBase
      title="Add grocery to list"
      closePopup={closePopup}
      anim="liftAnim"
    >
      <form className="popupForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <input name="name" type="text" placeholder="Name" required />
        </div>
        <div className="formItem">
          <input name="quantity" type="text" placeholder="Quantity" />
        </div>
        <div className="formItem">
          <select name="category">
            {["Category", ...groceryCategories].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {errMsg && <p>{errMsg}</p>}
        <div className="popupButton">
          <button className="green fullButton" type="submit">
            Add grocery
          </button>
        </div>
      </form>
    </PopupBase>
  );
};

export default AddGroceryPopup;
