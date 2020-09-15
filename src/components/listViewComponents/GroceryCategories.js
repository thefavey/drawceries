import React from "react";

import CategoriesDropDown from "./CategoriesDropdown.js";
import AddCategoryButton from "./AddCategoryButton.js";
import "../../App.css";

const GroceryCategories = ({ groceryCategories, handleChange, openPopup }) => {
  return (
    <div className="groceryCategories">
      <CategoriesDropDown
        groceryCategories={groceryCategories}
        handleChange={handleChange}
      />
      <AddCategoryButton openPopup={openPopup} />
    </div>
  );
};

export default GroceryCategories;
