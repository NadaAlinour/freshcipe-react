import RecipeCard from "../components/RecipeCard";
import Tag from "../components/Tag";
import { RECIPES, RECIPE_CATEGORIES } from "../data/recipeData";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Recipes() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedTagId, setSelectedTagId] = useState(0);
  const [requestedRecipes, setRequestedRecipes] = useState(RECIPES);

  // add deselect tag

  /*const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });*/

  let displayedRecipes = RECIPES;

  useEffect(() => {
    if (selectedTag === "All") {
      setRequestedRecipes(RECIPES);
    }

    if (selectedTagId !== 0) {
      displayedRecipes = RECIPES.filter((recipeItem) => {
        return recipeItem.dietCategories.indexOf(selectedTagId) >= 0;
      });

      setRequestedRecipes(displayedRecipes);
    }
  }, [selectedTagId]);

  console.log(displayedRecipes);

  const handleTagClick = (id, title) => {
    //console.log("tag with id " + id + " clicked");
    setSelectedTag(title);
    setSelectedTagId(id);
  };

  const navigate = useNavigate();

  const handleRecipeClick = (id, title) => {
    //console.log("recipe with id " + id + " is clicked");
    navigate("/recipes/" + title, { state: { recipeId: id } });
  };

  return (
    <div className="recipe-page-container">
      {/*<RecipeSidebar />*/}
      <ul className="recipe-categories-list">
        <li onClick={handleTagClick.bind(this, 0, "All")}>
          <Tag selectedTag={selectedTag}>All</Tag>
        </li>
        {RECIPE_CATEGORIES.map((category) => (
          <li
            key={category.id}
            onClick={handleTagClick.bind(this, category.id, category.title)}
          >
            <Tag selectedTag={selectedTag}>{category.title}</Tag>
          </li>
        ))}
      </ul>
      <div className="recipes-list-container">
        <ul className="recipes-list">
          {requestedRecipes.map((recipe) => (
            <li
              key={recipe.id}
              onClick={handleRecipeClick.bind(this, recipe.id, recipe.title)}
            >
              <RecipeCard {...recipe} isSimple={false} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
