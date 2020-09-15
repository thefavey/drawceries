import React from "react";

import "../../App.css";

const GroceryItem = ({ item, openPopup, closePopup, handleItemClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (item.isBought) {
      handleItemClick(item);
      openPopup("boughtItem");
    } else {
      handleItemClick(item);
      openPopup("unboughtItem");
    }
  };

  return (
    <div
      className={"groceryItem" + (item.isBought ? " greyed" : "")}
      onClick={handleClick}
    >
      <span>{item.name + " (" + item.quantity + ")"}</span>
    </div>
  );
};

export default GroceryItem;
