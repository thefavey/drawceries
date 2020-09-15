import React, { useState, useEffect } from "react";

import CategoriesDropDown from "./listViewComponents/CategoriesDropdown.js";
import RecipeDisplay from "./recipesViewComponents/RecipeDisplay.js";
import "../App.css";

const RecipesView = ({ groceriesDb, groceryCategoriesDb }) => {
  const [groceryCategories, setGroceryCategories] = useState(null);
  const [groceriesDict, setGroceriesDict] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState(null);
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    setGroceriesDict(groceriesDb);
    setGroceryCategories(groceryCategoriesDb);
  }, [groceriesDb, groceryCategoriesDb]);

  useEffect(() => {
    if (groceriesDict) {
      setSelectedIngredients(groceriesDict.map((g) => g.name));
    }
  }, [groceriesDict]);

  useEffect(() => {
    if (selectedIngredients) {
      const fetchRecipes = async (ingredients) => {
        const query = ingredients.join(",+").toLowerCase();
        const res = await fetch(
          "https://api.spoonacular.com/recipes/findByIngredients?apiKey=657f32e62bda4107b995812b8b98dd29&ingredients=" +
            query
        );
        if (res.status !== 200) {
          setRecipes([
            { id: "err", image: "", title: "Error loading recipes." },
          ]);
        } else {
          setRecipes(await res.json());
        }
      };
      fetchRecipes(selectedIngredients);
    }
  }, [selectedIngredients]);

  const handleCategoryChange = (e) => {
    const currentCategory = e.target.value;
    setSelectedIngredients(
      groceriesDict
        .filter(
          (g) =>
            currentCategory === "Select category" ||
            g.category === currentCategory
        )
        .map((g) => g.name)
    );
  };

  return groceriesDict && groceryCategories && recipes ? (
    <div className="view">
      <div className="viewContent">
        <div className="viewTitle">Recipes</div>
        <div className="recipeDropdown">
          <CategoriesDropDown
            groceryCategories={groceryCategories}
            handleChange={handleCategoryChange}
          />
        </div>
        <div className="recipesIntro">
          From ingredients: {selectedIngredients.join(", ").toLowerCase()}.
        </div>
        <div className="recipesList">
          {recipes.map((r) => (
            <RecipeDisplay key={r.id.toString()} recipe={r} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="view">
      <div className="viewContent">
        <div className="viewTitle">Recipes</div>
        Loading recipes...
      </div>
    </div>
  );
};

export default RecipesView;
