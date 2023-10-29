import RecipeCard from "../components/RecipeCard";
import Breadcrumbs from "../components/Breadcrumbs";
import Tag from "../components/Tag";
import Pagination from "../components/Pagination";
import { RECIPE_CATEGORIES } from "../data/recipeData";
import { fetchRecipes, fetchRecipeTags, fetchRecipesByTag } from "../utils/http";

import { useState, useEffect } from "react";

export default function Recipes() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedTagId, setSelectedTagId] = useState(0);
  const [recipes, setRecipes] = useState();

  const [isLoading, setIsLoading] = useState(true);

  // add deselect tag

  /*const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(mealsItem => {
    return mealsItem.categoryIds.indexOf(catId) >= 0;
  });*/


  useEffect(() => {
    const getAllRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data.data);
        setIsLoading(false);
        console.log(recipes)
      } catch (error) {
        console.log(error);
      }
    };

    if (selectedTag === "All") {
      getAllRecipes();
    }

  /*  if (selectedTagId !== 0) {
      displayedRecipes = RECIPES.filter((recipeItem) => {
        return recipeItem.dietCategories.indexOf(selectedTagId) >= 0;
      });

      setRecipes(displayedRecipes);
    }*/
  }, [isLoading]);

  // console.log(displayedRecipes);

  const handleTagClick = (id, title) => {
    //console.log("tag with id " + id + " clicked");
   /* setSelectedTag(title);
    setSelectedTagId(id); */
  };

  return (
    <>
      <Breadcrumbs />
      <div className="recipe-page-container">
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
            {!isLoading && recipes.map((recipe) => (
              <li key={recipe.id}>
                <RecipeCard  id={recipe.id}
                title={recipe.attributes.title}
                duration={recipe.attributes.timeToPrepareInMinutes}
                imageUrl={recipe.attributes.image.data.attributes.url}
                recipeData={recipe.attributes.recipeData}/>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe-pagination-container">
          <Pagination currentNum="4" totalNum="50" />
        </div>
      </div>
    </>
  );
}
