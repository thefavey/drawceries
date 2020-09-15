import React, { useState, useEffect } from "react";

import MoneySpentChart from "../statsViewComponents/MoneySpentChart.js";
import "../../App.css";

const StatsView = ({ groceriesDb }) => {
  const [groceriesDict, setGroceriesDict] = useState(null);

  useEffect(() => {
    //simulate fetching data from db
    setGroceriesDict(groceriesDb);
  }, [groceriesDb]);

  return groceriesDict ? (
    <div className="view">
      <div className="viewContent">
        <div className="viewTitle">Stats</div>
        <MoneySpentChart groceriesDb={groceriesDb} />
      </div>
    </div>
  ) : (
    <div className="view">
      <div className="viewContent">
        <div className="viewTitle">Stats</div>
        Loading stats...
      </div>
    </div>
  );
};

export default StatsView;
