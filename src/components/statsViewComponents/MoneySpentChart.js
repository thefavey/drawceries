import React, { useState, useEffect } from "react";
import { Chart } from "react-charts";

import "../../App.css";

const groceriesDbToDaysData = (groceries) => {
  const boughtGroceries = groceries
    .filter((g) => g.isBought)
    .sort((a, b) => (a.boughtOn > b.boughtOn ? 1 : -1));

  let sortedGroupedDates = (boughtGroceries) => {
    // returns array of [date, money spent on that date]
    let returns = [];
    boughtGroceries.forEach((grocery) => {
      const alreadyIndex = returns
        .map((item) => (item ? item[0].toISOString() : null))
        .indexOf(grocery.boughtOn.toISOString());
      if (alreadyIndex > -1) {
        let newVal = [
          returns[alreadyIndex][0],
          returns[alreadyIndex][1] + grocery.price,
        ];
        returns[alreadyIndex] = newVal;
      } else {
        returns.push([grocery.boughtOn, grocery.price]);
      }
    });
    return returns;
  };

  const datesAndCumul = (datesAndPrices) => {
    // returns array of [date, money spent until that date]
    const cumulVal = (groceryList, index) => {
      let returns = 0;
      for (let i = 0; i <= index; i++) {
        returns += groceryList[i][1];
      }
      return returns;
    };

    return datesAndPrices.map((arr, i) => [
      arr[0],
      cumulVal(datesAndPrices, i),
    ]);
  };

  const arrayToXandY = (array) => {
    // format data for chart
    let returns = [];
    array.forEach((item) => {
      returns.push({ x: item[0], y: item[1] });
    });

    return returns;
  };

  return arrayToXandY(datesAndCumul(sortedGroupedDates(boughtGroceries)));
};

const MoneySpentChart = ({ groceriesDb }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData([{ label: "spent", data: groceriesDbToDaysData(groceriesDb) }]);
  }, [groceriesDb]);

  const axes = [
    { primary: true, type: "time", position: "bottom" },
    { type: "linear", position: "left" },
  ];

  const series = {
    showPoints: false,
  };

  return (
    <div className="chartArea">
      <div className="chartTitle">Total money spent</div>
      <div className="chartBox">
        {data && <Chart data={data} axes={axes} series={series} tooltip />}
      </div>
    </div>
  );
};

export default MoneySpentChart;
