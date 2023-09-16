import RecipeSidebar from "../components/RecipeSidebar";
import RecipeCard from "../components/RecipeCard";
import Tag from "../components/Tag";
import { RECIPES, RECIPE_CATEGORIES } from "../data/recipeData";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTagId, setSelectedTagId] = useState(null);
  const [requestedRecipes, setRequestedRecipes] = useState(RECIPES);

  // add deselect tag

  /*const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });*/

  let displayedRecipes = RECIPES;

  useEffect(() => {
    if (selectedTagId) {
      displayedRecipes = RECIPES.filter((recipeItem) => {
        return recipeItem.dietCategories.indexOf(selectedTagId) >= 0;
      });

      setRequestedRecipes(displayedRecipes)
    }
  }, [selectedTagId]);

  console.log(displayedRecipes);

  const handleTagClick = (id, title) => {
    //console.log("tag with id " + id + " clicked");
    setSelectedTag(title);
    setSelectedTagId(id);
  };

  const navigate = useNavigate();

  const handleRecipeClick = (id) => {
    //console.log("recipe with id " + id + " is clicked");
    navigate("/recipe-details/" + id, { state: { recipeId: id } });
  };

  return (
    <div className="recipe-page-container">
      <RecipeSidebar />
      <div className="recipes-list-container">
        <ul className="recipe-categories-list">
          {RECIPE_CATEGORIES.map((category) => (
            <li
              key={category.id}
              onClick={handleTagClick.bind(this, category.id, category.title)}
            >
              <Tag selectedTag={selectedTag}>{category.title}</Tag>
            </li>
          ))}
        </ul>
        <div>
          <ul className="recipes-list">
            {requestedRecipes.map((recipe) => (
              <li
                key={recipe.id}
                onClick={handleRecipeClick.bind(this, recipe.id)}
              >
                <RecipeCard {...recipe} isSimple={false} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
