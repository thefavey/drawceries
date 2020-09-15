import React, { useState, useEffect } from "react";

import GroceryCategories from "./listViewComponents/GroceryCategories.js";
import AddGroceryButton from "./listViewComponents/AddGroceryButton.js";
import GroceryList from "./listViewComponents/GroceryList.js";
import PopupLogic from "./PopupLogic.js";
import "../App.css";

const ListView = ({
  groceryCategoriesDb,
  groceriesDb,
  addGrocery,
  buyGrocery,
  unbuyGrocery,
  removeGrocery,
  addCategory,
  currentUser,
  handleUserChange,
}) => {
  const [currentCategory, setCurrentCategory] = useState("Select category");
  const [groceryCategories, setGroceryCategories] = useState(null);
  const [groceriesDict, setGroceriesDict] = useState(null);
  const [popupType, setPopupType] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    // simulate fetching data from db
    setGroceriesDict(groceriesDb);
    setGroceryCategories(groceryCategoriesDb);
  }, [groceriesDb, groceryCategoriesDb]);

  const handleCategoryChange = (e) => {
    setCurrentCategory(e.target.value);
  };

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  const openPopup = (popupType) => {
    setPopupType(popupType);
  };

  const closePopup = () => {
    setClickedItem(null);
    setPopupType(null);
  };

  return groceriesDict && groceryCategories ? (
    <div>
      <PopupLogic
        popupType={popupType}
        groceryCategories={groceryCategories}
        closePopup={closePopup}
        addGrocery={addGrocery}
        buyGrocery={buyGrocery}
        unbuyGrocery={unbuyGrocery}
        removeGrocery={removeGrocery}
        addCategory={addCategory}
        groceriesDict={groceriesDict}
        clickedItem={clickedItem}
        currentUser={currentUser}
        handleUserChange={handleUserChange}
      />
      <div className={"view" + (popupType ? " blur" : "")}>
        <div className="viewContent">
          <div className="viewTitle">Grocery list</div>
          <GroceryCategories
            groceryCategories={groceryCategories}
            handleChange={handleCategoryChange}
            openPopup={() => openPopup("newCategory")}
          />
          <AddGroceryButton openPopup={() => openPopup("newGrocery")} />
          <GroceryList
            filteredGroceries={groceriesDict.filter(
              (item) =>
                currentCategory === "Select category" ||
                item.category === currentCategory
            )}
            openPopup={openPopup}
            handleItemClick={handleItemClick}
            closePopup={closePopup}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="view">
      <div className="viewContent">
        <div className="viewTitle">Grocery list</div>
        Loading grocery list...
      </div>
    </div>
  );
};

export default ListView;
