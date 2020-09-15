import React from "react";

import CollapsibleList from "./CollapsibleList.js";
import "../../App.css";

const GroceryList = ({
  filteredGroceries,
  openPopup,
  closePopup,
  handleItemClick,
}) => {
  return (
    <div className="groceryList">
      <CollapsibleList
        label={"Not bought yet"}
        collapsedProp={false}
        filteredGroceries={filteredGroceries.filter(
          (item) => item.isBought === false
        )}
        openPopup={openPopup}
        handleItemClick={handleItemClick}
      />
      <CollapsibleList
        label={"Bought items"}
        collapsedProp={true}
        filteredGroceries={filteredGroceries.filter(
          (item) => item.isBought === true
        )}
        openPopup={openPopup}
        handleItemClick={handleItemClick}
      />
    </div>
  );
};

export default GroceryList;
