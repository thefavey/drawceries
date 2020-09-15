import React, { useState } from "react";

import groceryDb from "./db/groceryDb.js";
import categoriesDb from "./db/categoriesDb.js";

import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import ViewsLogic from "./components/ViewsLogic.js";
import { currentDate } from "./utils.js";
import "./App.css";

const App = () => {
  const tabList = ["list", "stats", "recipes"];

  // DB simulation
  const [groceryCategoriesDb, setGroceryCategoriesDb] = useState(categoriesDb);
  const [groceriesDb, setGroceriesDb] = useState(groceryDb);

  const addGrocery = (grocery) => {
    setGroceriesDb([...groceriesDb, grocery]);
  };

  const addCategory = (category) => {
    setGroceryCategoriesDb([...groceryCategoriesDb, category]);
  };

  const buyGrocery = (grocery, price, user) => {
    setGroceriesDb(
      groceriesDb.map((item) => {
        if (item === grocery) {
          item.isBought = true;
          item.price = price;
          item.boughtBy = user;
          item.boughtOn = currentDate();
        }
        return item;
      })
    );
  };

  const unbuyGrocery = (grocery) => {
    setGroceriesDb(
      groceriesDb.map((item) => {
        if (item === grocery) {
          item.isBought = false;
        }
        return item;
      })
    );
  };

  const removeGrocery = (grocery) => {
    setGroceriesDb(groceriesDb.filter((item) => item !== grocery));
  };
  // End DB simulation

  const [currentTab, setCurrentTab] = useState("list");
  const [loginPopupState, setLoginPopupState] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleTabClick = (tabName) => {
    return () => setCurrentTab(tabName);
  };

  const handleLoginClick = () => {
    setLoginPopupState(true);
  };

  const handleUserChange = (newUser) => {
    setCurrentUser(newUser);
  };

  const closeLogin = () => {
    setLoginPopupState(false);
  };

  return (
    <div className="app">
      <Header
        handleLoginClick={handleLoginClick}
        currentUser={currentUser}
        loginPopupState={loginPopupState}
      />
      <ViewsLogic
        currentTab={currentTab}
        loginPopupState={loginPopupState}
        currentUser={currentUser}
        handleUserChange={handleUserChange}
        closeLogin={closeLogin}
        groceryCategoriesDb={groceryCategoriesDb}
        groceriesDb={groceriesDb}
        addGrocery={addGrocery}
        buyGrocery={buyGrocery}
        unbuyGrocery={unbuyGrocery}
        removeGrocery={removeGrocery}
        addCategory={addCategory}
      />
      <Nav
        tabList={tabList}
        currentTab={currentTab}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default App;
