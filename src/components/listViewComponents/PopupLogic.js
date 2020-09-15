import React, { useState } from "react";

import AddGroceryPopup from "../popupComponents/AddGroceryPopup.js";
import AddCategoryPopup from "../popupComponents/AddCategoryPopup.js";
import BoughtGroceryPopup from "../popupComponents/BoughtGroceryPopup.js";
import UnboughtGroceryPopup from "../popupComponents/UnboughtGroceryPopup.js";
import LoginPopup from "../popupComponents/LoginPopup.js";

import "../../App.css";

const PopupLogic = ({
  popupType,
  groceryCategories,
  closePopup,
  addGrocery,
  unbuyGrocery,
  buyGrocery,
  removeGrocery,
  addCategory,
  groceriesDict,
  clickedItem,
  currentUser,
  handleUserChange,
}) => {
  const [loggedIn, setLoggedIn] = useState(!!currentUser);

  if (!popupType) {
    return null;
  } else {
    if (loggedIn) {
      switch (popupType) {
        case "newGrocery":
          return (
            <AddGroceryPopup
              groceryCategories={groceryCategories}
              closePopup={closePopup}
              addGrocery={addGrocery}
              groceriesDict={groceriesDict}
              currentUser={currentUser}
            />
          );
        case "newCategory":
          return (
            <AddCategoryPopup
              closePopup={closePopup}
              addCategory={addCategory}
              groceriesDict={groceriesDict}
              groceryCategories={groceryCategories}
            />
          );
        case "boughtItem":
          return (
            <BoughtGroceryPopup
              grocery={clickedItem}
              unbuyGrocery={unbuyGrocery}
              closePopup={closePopup}
            />
          );
        case "unboughtItem":
          return (
            <UnboughtGroceryPopup
              grocery={clickedItem}
              buyGrocery={buyGrocery}
              removeGrocery={removeGrocery}
              closePopup={closePopup}
              currentUser={currentUser}
            />
          );
        default:
          return null;
      }
    } else {
      return (
        <LoginPopup
          currentUser={currentUser}
          handleUserChange={handleUserChange}
          closeLogin={() => setLoggedIn(true)}
          cancelLogin={closePopup}
        />
      );
    }
  }
};

export default PopupLogic;
