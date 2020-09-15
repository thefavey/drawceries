import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "../../App.css";

const ConfirmButton = ({ label, buttonClass, question, handleConfirm }) => {
  const [clicked, setClicked] = useState(false);

  if (!clicked) {
    return (
      <div
        className={"confirmation " + buttonClass}
        onClick={() => setClicked(true)}
      >
        <div>{label}</div>
      </div>
    );
  } else {
    return (
      <div className={"confirmationPrompt " + buttonClass}>
        <div>Are you sure?</div>
        <div>
          <AiOutlineCloseCircle
            className="sureIcon"
            onClick={() => setClicked(false)}
          />
          <AiOutlineCheckCircle className="sureIcon" onClick={handleConfirm} />
        </div>
      </div>
    );
  }
};

export default ConfirmButton;
