import RecipeSidebar from "../components/RecipeSidebar";
import RecipeCard from "../components/RecipeCard";
import { RECIPES } from "../data/recipeData";

import { useNavigate } from "react-router-dom";

export default function Recipes() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log("recipe with id " + id + " is clicked");
    navigate("/recipe-details/" + id, { state: { recipeId: id } });
  };

  return (
    <div className="recipe-page-container">
      <RecipeSidebar />
      <div className="recipes-list-container">
        <div>
          <ul className="recipes-list">
            {RECIPES.map((recipe) => (
              <li key={recipe.id} onClick={handleClick.bind(this, recipe.id)}>
                <RecipeCard {...recipe} isSimple={false} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
