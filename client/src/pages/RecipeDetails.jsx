import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe, addItemToCart, updateFavourites } from "../utils/http";
import HeartAdd from "../assets/images/heartadd.png";
import AddCart from "../assets/images/addcart.png";
import "boxicons";

import Breadcrumbs from "../components/Breadcrumbs";
import Overlay from "../components/Overlay";
import { addFavourites } from "../store/favouritesSlice";
import { updateCart } from "../store/cartSlice";


export default function RecipeDetails({ route }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { userToken, favouritesId } = useSelector((state) => state.auth);
  const { favourites } = useSelector((state) => state.favourites);

  const [recipe, setRecipe] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isIngredientsModalShowing, setIsIngredientsModalShowing] =
    useState(false);

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];

  useEffect(() => {
    const handleOverlayStyle = () => {
      if (isModalShowing || isIngredientsModalShowing) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // Call the function when the component mounts or when isOverlayActive changes
    handleOverlayStyle();

    // Cleanup function to remove the style when the component is unmounted
    return () => {
      document.body.style.overflow = ""; // Remove the style to enable scrolling
    };
  }, [isModalShowing, isIngredientsModalShowing]); // Run the effect when isOverlayActive changes

  const handleOverlay = () => {
    setIsModalShowing(!isModalShowing);
  };

  const handleIngOverlay = () => {
    setIsIngredientsModalShowing(!isIngredientsModalShowing);
  };

  const handleIngredientClick = (productId) => {
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
        dispatch(updateCart({ cart: response.data }));
        setIsIngredientsModalShowing(true);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleSaveRecipe = async () => {
    // check if user is logged in
    if (!userToken) {
      //  console.log("user needs to be logged in");
      handleOverlay();
      return;
    }
    let newData = favourites;
    // check if selected recipe already exists in favourites
    let exists = false;
    newData.forEach((item) => {
      if (item.id == idFromUrl) {
        //  console.log("recipe already in favourites");
        exists = true;
      }
    });

    if (!exists) {
      try {
        const data = await fetchRecipe(idFromUrl);
        // console.log("data dot data: ", data.data[0]);

        newData = [...newData, data.data[0]];
      } catch (error) {
        console.log(error.response);
      }
    } else {
      // remove from favourites
      newData = newData.filter((item) => item.id != idFromUrl);
    }

    dispatch(addFavourites({ newFavourites: newData }));

    try {
      // console.log("fave states new: ", favourites);
      const data = await updateFavourites(favouritesId, userToken, newData);
      //console.log(data);
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status == 405) {
        //  console.log("user not logged in although its not a 403 error idk");
        handleOverlay();
      }
    }
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
    // console.log(recipe);
  }, [isLoading, userToken]);

  let stepCount = 1;

  const handlePrint = () => {
    // console.log("print was clicked");
    window.print();
  };

  return (
    <>
      <div className="no-print">
        <Breadcrumbs />
      </div>
      {isIngredientsModalShowing && (
        <Overlay
          onClose={handleIngOverlay}
          title="Products added to cart"
          description="Products have been successfully added to your cart!"
          success={true}
          icon={AddCart}
        />
      )}
      {isModalShowing && (
        <Overlay
          onClose={handleOverlay}
          title="Save your favourite recipes"
          description="Always have access to your favourite recipes by logging in to your account."
          icon={HeartAdd}
        />
      )}
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
            <div className="no-print">
              <span>
                <Link to="recipe-steps" smooth={true} duration={750}>
                  Recipe
                </Link>
                <Link to="recipe-nutrition" smooth={true} duration={750}>
                  Nutritional Values
                </Link>
              </span>
            </div>
          </div>

          <div className="recipe-image-container no-print">
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
          <div className="recipe-buttons-container no-print">
            <div
              className="print-recipe-button-container"
              onClick={handlePrint}
            >
              <p>Print</p>

              <div className="recipe-info-printer-icon-container">
                <box-icon name="printer" color="#758558" size="20px" />
              </div>
            </div>

            <div
              className="add-recipe-button-container no-print"
              onClick={handleSaveRecipe}
            >
              <p>Save</p>

              <div className="recipe-info-heart-icon-container no-print">
                {favourites.some(
                  (favourite) => favourite["id"] == idFromUrl
                ) && (
                  <box-icon
                    name="heart"
                    type="solid"
                    color="#fa635c"
                    size="25px"
                  />
                )}
                {!favourites.some(
                  (favourite) => favourite["id"] == idFromUrl
                ) && <box-icon name="heart" color="white" size="25px" />}
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
                        <div className="no-print">
                          <box-icon
                            name={
                              selectedIngredients.includes(ingredient.productId)
                                ? "checkbox-checked"
                                : "checkbox"
                            }
                            size="28px"
                            color="#474643"
                          />
                        </div>
                      </div>
                      <div className="ingredient-label-container">
                        <label>{ingredient.ingredient}</label>
                      </div>
                    </li>
                  ))}
              </ul>
            )}

            <div className="ingredients-btn-container no-print">
              <button onClick={addToCart} style={{ fontSize: "1rem" }}>
                Add to Cart
              </button>
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
                      <div className="recipe-steps-counter-container no-print">
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
          <div className="nutrition-recipe-image no-print">
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
      </div>
    </>
  );
}
