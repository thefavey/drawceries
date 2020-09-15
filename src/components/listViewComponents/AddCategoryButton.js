import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "../../App.css";

const AddCategoryButton = ({ openPopup }) => {
  return (
    <AiOutlinePlusCircle className="addCategoryButton" onClick={openPopup} />
  );
};

export default AddCategoryButton;
