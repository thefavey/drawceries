import React, { useState } from "react";

import PopupBase from "./PopupBase.js";
import "../../App.css";

const AddCategoryPopup = ({ groceryCategories, addCategory, closePopup }) => {
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (
      groceryCategories
        .map((g) => g.toLowerCase())
        .indexOf(name.toLowerCase()) > -1
    ) {
      setErrMsg("category exists");
    } else {
      addCategory(name);
      closePopup();
    }
  };

  return (
    <PopupBase title="" closePopup={closePopup} anim="dropAnim">
      <form className="popupForm" onSubmit={handleSubmit}>
        <div>
          <input
            aria-label="category name"
            name="name"
            type="text"
            placeholder="Category name"
            required
          />
        </div>
        {errMsg && <p>{errMsg}</p>}
        <div className="popupButton">
          <button className="green fullButton" type="submit">
            Add category
          </button>
        </div>
      </form>
    </PopupBase>
  );
};

export default AddCategoryPopup;
