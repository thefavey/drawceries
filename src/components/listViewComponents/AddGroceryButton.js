import React from "react";

import "../../App.css";

const AddGroceryButton = ({ openPopup }) => {
  return (
    <button className="addGroceryButton" onClick={openPopup}>
      Add grocery
    </button>
  );
};

export default AddGroceryButton;
