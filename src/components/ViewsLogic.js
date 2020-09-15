import React from "react";

import LoginPopup from "./popupComponents/LoginPopup.js";
import ListView from "./views/ListView.js";
import StatsView from "./views/StatsView.js";
import RecipesView from "./views/RecipesView.js";
import "../App.css";

const ViewsLogic = ({
  currentTab,
  loginPopupState,
  currentUser,
  handleUserChange,
  closeLogin,
  groceryCategoriesDb,
  groceriesDb,
  addGrocery,
  buyGrocery,
  unbuyGrocery,
  removeGrocery,
  addCategory,
}) => {
  if (loginPopupState) {
    return (
      <div className="view">
        <LoginPopup
          currentUser={currentUser}
          handleUserChange={handleUserChange}
          closeLogin={closeLogin}
        />
      </div>
    );
  } else {
    switch (currentTab) {
      case "list":
        return (
          <ListView
            groceryCategoriesDb={groceryCategoriesDb}
            groceriesDb={groceriesDb}
            addGrocery={addGrocery}
            buyGrocery={buyGrocery}
            unbuyGrocery={unbuyGrocery}
            removeGrocery={removeGrocery}
            addCategory={addCategory}
            currentUser={currentUser}
            handleUserChange={handleUserChange}
          />
        );
      case "stats":
        return (
          <StatsView
            groceriesDb={groceriesDb}
            groceryCategoriesDb={groceryCategoriesDb}
          />
        );
      case "recipes":
        return (
          <RecipesView
            groceriesDb={groceriesDb}
            groceryCategoriesDb={groceryCategoriesDb}
          />
        );
      default:
        return <div className="view">{currentTab}</div>;
    }
  }
};

export default ViewsLogic;
