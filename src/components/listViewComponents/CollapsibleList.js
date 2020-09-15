import React, { useState } from "react";

import GroceryItem from "./GroceryItem.js";
import "../../App.css";

const CollapsibleList = ({
  label,
  filteredGroceries,
  collapsedProp,
  openPopup,
  handleItemClick,
}) => {
  const [collapsed, setCollapsed] = useState(collapsedProp);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="collapsibleList">
      <div className="collapsibleLabel" onClick={handleClick}>
        {(collapsed ? "▶ " : "▼ ") + label}
      </div>
      {!collapsed && (
        <div className="itemList">
          {filteredGroceries.map((item) => (
            <GroceryItem
              key={item.name}
              item={item}
              openPopup={openPopup}
              handleItemClick={handleItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleList;
