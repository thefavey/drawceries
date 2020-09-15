import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../../App.css";

const RecipeDisplay = ({ recipe }) => {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLinkClick = () => {
    const fetchRecipeUrl = async (id) => {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${id.toString()}/information?apiKey=657f32e62bda4107b995812b8b98dd29`
      );
      if (res.status !== 200) {
        console.log("error " + res.status.toString());
      } else {
        return (await res.json()).sourceUrl;
      }
    };
    console.log("link click")
    history.push(fetchRecipeUrl(recipe.id));
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
      </div>
    </div>
  );
};

export default RecipeDisplay;
