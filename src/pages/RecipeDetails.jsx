import { RECIPES, RECIPE_CATEGORIES } from "../data/recipeData";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

import Tag from "../components/Tag";

export default function RecipeDetails({ route }) {
  //const recipeId = "r1";
  const location = useLocation();
  const id = location.state.recipeId;
  const recipeDetails = RECIPES.find((recipe) => recipe.id === id);
  const categories = recipeDetails.dietCategories.map(cat => RECIPE_CATEGORIES.find(item => item.id == cat))
  
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

          <div>
            <p>
              <b>Tags:</b>
            </p>
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
            <span key={nutrition.component}>
              <p>
                <b>{nutrition.component}</b>
              </p>
              <p>{nutrition.value}</p>
            </span>
          ))}
        </div>

        <div className="recipe-tags"></div>
      </div>
    </div>
  );
}