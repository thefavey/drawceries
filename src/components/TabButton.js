import React from "react";
import { BsList } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { GiKnifeFork } from "react-icons/gi";

import "../App.css";

const TabButton = ({ tabName, currentTab, handleTabClick }) => {
  return (
    <button className="tabButton" onClick={handleTabClick(tabName)}>
      {tabName === "list" ? (
        <BsList
          className={"tabIcon" + (currentTab === "list" ? "Highlighted" : "")}
        />
      ) : tabName === "stats" ? (
        <IoIosStats
          className={"tabIcon" + (currentTab === "stats" ? "Highlighted" : "")}
        />
      ) : tabName === "recipes" ? (
        <GiKnifeFork
          className={
            "tabIcon" + (currentTab === "recipes" ? "Highlighted" : "")
          }
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default TabButton;
