import { RECIPES } from "../data/recipeData";

import Placeholder from "/src/assets/images/placeholder-recipe.jpg";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
export default function RecipeDetails({ route }) {
  //const recipeId = "r1";
  const location = useLocation();
  const id = location.state.recipeId;
  const recipeDetails = RECIPES.find((recipe) => recipe.id === id);
  console.log(recipeDetails);

  let stepCount = 1;

  return (
    <div className="recipe-info-parent">
      {/* recipe info */}
      <div className="recipe-info-container">
        <div className="recipe-info">
          <h1>{recipeDetails.title}</h1>
          <p>{recipeDetails.description}</p>
          <p>
            <b>Time to prepare:</b> {recipeDetails.duration} minutes
          </p>

          <p>
            <b>Diet:</b> {recipeDetails.dietCategories}
          </p>

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
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>

          <div className="ingredients-btn-container">
            <button>Shop ingredients</button>
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
            <span>
              <p>
                <b>{nutrition.component}</b>
              </p>
              <p>{nutrition.value}</p>
            </span>
          ))}

          {/*<span>
                <p>
                  <b>{key}</b>
                </p>
                <p>{ingredient[key]}</p>
              </span>
            ));
          })}
           <span>
            <p>
              <b>Energy</b>
            </p>
            <p>425 kcal</p>
          </span>

          <span>
            <p>
              <b>Total Fat</b>
            </p>
            <p>15g</p>
          </span>

          <span>
            <p>
              <b>Saturated Fat</b>
            </p>
            <p>0g</p>
          </span>

          <span>
            <p>
              <b>Dietary Fiber</b>
            </p>
            <p>5g</p>
          </span>

          <span>
            <p>
              <b>Carbohydrates</b>
            </p>
            <p>65g</p>
          </span>

          <span>
            <p>
              <b>Sugars</b>
            </p>
            <p>12g</p>
          </span>

          <span>
            <p>
              <b>Protein</b>
            </p>
            <p>3g</p>
            </span>*/}
        </div>

        <div className="recipe-tags"></div>
      </div>
    </div>
  );
}
