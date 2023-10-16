import { RECIPES, RECIPE_CATEGORIES } from "../data/recipeData";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "boxicons";

import Tag from "../components/Tag";
import Breadcrumbs from "../components/Breadcrumbs";

export default function RecipeDetails({ route }) {
  //const recipeId = "r1";
  const location = useLocation();
  const id = location.state.recipeId;
  const recipeDetails = RECIPES.find((recipe) => recipe.id === id);
  const categories = recipeDetails.dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );

  console.log(recipeDetails);

  let stepCount = 1;

  const [isHeartHover, setIsHeartHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false); // how hmmm

  return (
    <>
      <Breadcrumbs />
      <div className="recipe-info-parent">
        {/* recipe info */}
        <div className="recipe-info-container">
          <div className="recipe-info">
            <div
              className="add-recipe-to-favourites-container"
              onMouseEnter={() => setIsHeartHover(true)}
              onMouseLeave={() => setIsHeartHover(false)}
            >
              <p>Save</p>

              <div className="recipe-info-heart-icon-container">
                <box-icon name="heart" color="white" size="25px" />
              </div>

            </div>
            <h1>{recipeDetails.title}</h1>
            <p>{recipeDetails.description}</p>
            <p>{recipeDetails.duration} minutes to prepare</p>

            <div>
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Tag isPlain={true}>{category.title}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <span>
              <Link to="recipe-steps" smooth={true} duration={750}>
                Recipe
              </Link>
              <Link to="recipe-nutrition" smooth={true} duration={750}>
                Nutritional Values
              </Link>
            </span>
          </div>

          <div className="recipe-image-container">
            <img src={recipeDetails.imageUrl}></img>
          </div>
        </div>

        <div className="ingredients-steps-container">
          {/* recipe ingredients */}
          <div id="recipe-steps" className="recipe-ingredients-container">
            <h1>Ingredients</h1>
            <ul>
              {recipeDetails.ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <div className="ingredient-checkbox-label">
                    <div className="checkbox-container-ing">
                      <div className="recipe-checkbox-container"></div>
                    </div>
                    <label>{ingredient}</label>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ingredients-btn-container">
              <button>Add to Cart</button>
            </div>
          </div>

          {/* recipe steps */}
          <div className="recipe-steps-container">
            <h1>Steps</h1>
            <ul>
              {recipeDetails.steps.map((step) => (
                <li key={step}>
                  <p>
                    <b>{stepCount++} </b>
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* recipe nutritional info */}
        <div id="recipe-nutrition" className="recipe-nutrition-container">
          <div className="nutrition-recipe-image">
            <img src={recipeDetails.imageUrl}></img>
          </div>
          <div className="nutrition-values-container">
            <div className="nutrition-header">
              <h1>Nutritional Values</h1>(Per portion)
            </div>

            {recipeDetails.nutritionalInfo.map((nutrition) => (
              <span key={nutrition.component}>
                <p>
                  <b>{nutrition.component}</b>
                </p>
                <p>{nutrition.value}</p>
              </span>
            ))}
          </div>
        </div>
        <div className="recipe-tags"></div>
      </div>
    </>
  );
}
