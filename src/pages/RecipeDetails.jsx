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
  /*const id = location.state.recipeId;
  const recipeDetails = RECIPES.find((recipe) => recipe.id === id);
  const categories = recipeDetails.dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );*/

  const currentPath = location.pathname;
  console.log(currentPath);
  // extract id from path hehehe
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  const recipeDetails = RECIPES.find((recipe) => recipe.id === idFromUrl);
  const categories = recipeDetails.dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );

  console.log(recipeDetails);

  let stepCount = 1;

  const handlePrint = () => {
    console.log("print was clicked");
    window.print();
  };

  return (
    <>
      <Breadcrumbs />
      <div className="recipe-info-parent">
        {/* recipe info */}
        <div className="recipe-info-container">
          <div className="recipe-info">
            <p className="recipe-info-title">{recipeDetails.title}</p>
            <p className="recipe-info-description">
              {recipeDetails.description}
            </p>
            <div className="recipe-info-time-container">
              <box-icon name="timer" />
              <p>{recipeDetails.duration} minutes to prepare</p>
            </div>

            <div>
              <ul>
                {categories.map((category, index) => (
                  <li key={category.id}>
                    <div className="recipe-info-category-item-container">
                      <p>{category.title}</p>
                      {index < categories.length - 1 && <p>,</p>}
                    </div>
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
          <div className="recipe-buttons-container">
            <div className="print-recipe-button-container">
              <p>Print</p>

              <div
                className="recipe-info-printer-icon-container"
                onClick={handlePrint}
              >
                <box-icon name="printer" color="#758558" size="20px" />
              </div>
            </div>

            <div className="add-recipe-button-container">
              <p>Save</p>

              <div className="recipe-info-heart-icon-container">
                <box-icon name="heart" color="white" size="25px" />
              </div>
            </div>
          </div>

          {/* recipe ingredients */}
          <div id="recipe-steps" className="recipe-ingredients-container">
            <h1>Ingredients</h1>
            <ul>
              {recipeDetails.ingredients.map((ingredient) => (
                <li key={ingredient}>
                  <div className="ingredient-checkbox-container">
                    <box-icon name="checkbox" size="26" color="#3c3b37" />
                  </div>
                  <div className="ingredient-label-container">
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
                  <div className="recipe-steps-counter-container">
                    <b>{stepCount++} </b>
                  </div>
                  <div className="recipe-steps-p" id="recipe-steps-p-el">
                    <p>{step}</p>
                  </div>
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
