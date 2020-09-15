import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "../App.css";

const PopupBase = ({ title, children, closePopup, cancelPopup, anim }) => {
  return (
    <div className={"popup " + (anim ? anim : "")}>
      <div className="popupTitle">
        <span>{title}</span>
        <AiOutlineClose
          className="closePopup"
          onClick={cancelPopup ? cancelPopup : closePopup}
        />
      </div>
      <div className="popupBody">{children}</div>
    </div>
  );
};

export default PopupBase;
