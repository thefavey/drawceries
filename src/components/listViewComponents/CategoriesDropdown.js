import React from "react";

import "../../App.css";

const CategoriesDropDown = ({ groceryCategories, handleChange }) => {
  return (
    <select
      className="categoriesDropdown"
      name="categories"
      onChange={handleChange}
      aria-label="select category"
    >
      {["Select category", ...groceryCategories].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default CategoriesDropDown;
