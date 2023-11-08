import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe, addItemToCart, updateFavourites } from "../utils/http";
import "boxicons";

import Breadcrumbs from "../components/Breadcrumbs";
import { addFavourites } from "../store/favouritesSlice";

export default function RecipeDetails({ route }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userToken, userId, cartId, favouritesId } = useSelector(
    (state) => state.auth
  ); // cart id not saved in state for some reason
  const { favourites } = useSelector((state) => state.favourites);
  // temporarily
  const cartTemp = localStorage.getItem("cartId");

  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  //console.log(typeof idFromUrl)

  const handleIngredientClick = (productId) => {
    console.log(productId);
    if (selectedIngredients.includes(productId)) {
      // remove ingredients cuz unclicked
      setSelectedIngredients((prevSelectedIngredients) =>
        prevSelectedIngredients.filter((ingredient) => ingredient !== productId)
      );
    } else {
      // add ingredient
      setSelectedIngredients((prevSelectedIngredients) => [
        ...prevSelectedIngredients,
        productId,
      ]);
    }

    // console.log(selectedIngredients);
  };

  const addToCart = async () => {
    let data = "";

    selectedIngredients.forEach(async (selectedIngredient) => {
      data = {
        data: {
          product: selectedIngredient,
          quantity: 1,
          cart: cartTemp,
        },
      };

      try {
        const response = await addItemToCart(data, userToken);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleSaveRecipe = async () => {
    let newData = favourites;
    // console.log("new Data first: ", newData);
    // check if selected recipe already exists in favourites
    let exists = false;
    newData.forEach((item) => {
      if (item.id == idFromUrl) {
        console.log("recipe already in favourites");
        exists = true;
      }
    });

    console.log("exists: ", exists);

    if (!exists) {
      try {
        const data = await fetchRecipe(idFromUrl);
        console.log("data dot data: ", data.data[0]);

        newData = [...newData, data.data[0]];

        //console.log("newdata", newData);
      } catch (error) {
        console.log(error);
      }
    } else {
      // remove from favourites
      newData = newData.filter((item) => item.id != idFromUrl);
    }

    dispatch(addFavourites({ newFavourites: newData }));

    try {
      console.log("fave states new: ", favourites);
      const data = await updateFavourites(favouritesId, userToken, newData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // console.log("newData: ", newData);
  };

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipe(idFromUrl);
        setRecipe(data.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getRecipe();
    console.log(recipe);
  }, [isLoading]);

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
            {!isLoading && (
              <p className="recipe-info-title">
                {recipe.attributes ? recipe.attributes.title : ""}
              </p>
            )}
            {!isLoading && (
              <p className="recipe-info-description">
                {recipe.attributes
                  ? recipe.attributes.recipeData.description
                  : ""}
              </p>
            )}
            <div className="recipe-info-time-container">
              <box-icon name="timer" />
              {!isLoading && (
                <p>
                  {recipe.attributes
                    ? recipe.attributes.timeToPrepareInMinutes
                    : ""}{" "}
                  minutes to prepare
                </p>
              )}
            </div>

            <div>
              {/*} <ul>
                {categories.map((category, index) => (
                  <li key={category.id}>
                    <div className="recipe-info-category-item-container">
                      <p>{category.title}</p>
                      {index < categories.length - 1 && <p>,</p>}
                    </div>
                  </li>
                ))}
                </ul>*/}
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
            {!isLoading && (
              <img
                src={
                  recipe.attributes
                    ? recipe.attributes.image.data.attributes.url
                    : ""
                }
              ></img>
            )}
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

            <div
              className="add-recipe-button-container"
              onClick={handleSaveRecipe}
            >
              <p>Save</p>

              <div className="recipe-info-heart-icon-container">
                {favourites.some((favourite) => favourite['id'] == idFromUrl) ? (
                  <box-icon
                    name="heart"
                    type="solid"
                    color="#fa635c"
                    size="25px"
                  />
                ) : (
                  <box-icon name="heart" color="white" size="25px" />
                )}
              </div>
            </div>
          </div>

          {/* recipe ingredients */}
          <div id="recipe-steps" className="recipe-ingredients-container">
            <h1>Ingredients</h1>
            {!isLoading && (
              <ul>
                {recipe.attributes &&
                  recipe.attributes.recipeData.ingredients.map((ingredient) => (
                    <li key={ingredient.productId}>
                      <div
                        className="ingredient-checkbox-container"
                        onClick={handleIngredientClick.bind(
                          this,
                          ingredient.productId
                        )}
                      >
                        <box-icon
                          name={
                            selectedIngredients.includes(ingredient.productId)
                              ? "checkbox-checked"
                              : "checkbox"
                          }
                          size="28px"
                          color="#3c3b37"
                        />
                      </div>
                      <div className="ingredient-label-container">
                        <label>{ingredient.ingredient}</label>
                      </div>
                    </li>
                  ))}
              </ul>
            )}

            <div className="ingredients-btn-container">
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>

          {/* recipe steps */}
          <div className="recipe-steps-container">
            <h1>Steps</h1>
            {!isLoading && (
              <ul>
                {recipe.attributes &&
                  recipe.attributes.recipeData.steps.map((step) => (
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
            )}
          </div>
        </div>

        {/* recipe nutritional info */}
        <div id="recipe-nutrition" className="recipe-nutrition-container">
          <div className="nutrition-recipe-image">
            {!isLoading && (
              <img
                src={
                  recipe.attributes
                    ? recipe.attributes.image.data.attributes.url
                    : ""
                }
              ></img>
            )}
          </div>
          <div className="nutrition-values-container">
            <div className="nutrition-header">
              <h1>Nutritional Values</h1>(Per portion)
            </div>

            {!isLoading &&
              recipe.attributes &&
              recipe.attributes.recipeData.nutritionalValues.map(
                (nutrition) => (
                  <span key={nutrition.component}>
                    <p>
                      <b>{nutrition.component}</b>
                    </p>
                    <p>{nutrition.value}</p>
                  </span>
                )
              )}
          </div>
        </div>
        <div className="recipe-tags"></div>
      </div>
    </>
  );
}
