import React from "react";

import TabButton from "./TabButton.js";
import "../App.css";

const Nav = ({ tabList, currentTab, handleTabClick }) => {
  return (
    <div className="nav">
      {tabList.map((t) => (
        <TabButton
          key={t}
          tabName={t}
          currentTab={currentTab}
          handleTabClick={handleTabClick}
        />
      ))}
    </div>
  );
};

export default Nav;
