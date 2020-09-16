import React, { useState } from "react";

import "../../App.css";

const RecipeDisplay = ({ recipe }) => {
  const [clicked, setClicked] = useState(false);
  const [linkClicked, setLinkClicked] = useState(null);

  const handleClick = () => {
    //// handle linkClicked en fonction de clicked state
    setClicked(!clicked);
  };

  const handleLinkClick = () => {
    const fetchRecipeUrl = async (id) => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id.toString()}/information?apiKey=657f32e62bda4107b995812b8b98dd29`
      );
      if (res.status !== 200) {
        setLinkClicked(
          "Unable to redirect to recipe: error " + res.status.toString()
        );
      } else {
        window.location.href = (await res.json()).sourceUrl;
      }
    };
    setLinkClicked("Redirecting you to recipe...");
    fetchRecipeUrl(recipe.id);
    return null;
  };

  return (
    <div
      className={"recipeDisplay" + (clicked ? " clickedRecipe" : "")}
      onClick={handleClick}
    >
      <div
        className={"recipeImage" + (clicked ? " clickedRecipeImage" : "")}
        style={{ backgroundImage: `url(${recipe.image})` }}
      />
      <div>
        <div className="recipeTitle">{recipe.title}</div>
        {clicked && (
          <div className="recipeButton">
            <button onClick={handleLinkClick}>View recipe</button>
          </div>
        )}
        {linkClicked && (
          <div className="recipeButton">
            <button>{linkClicked}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDisplay;
