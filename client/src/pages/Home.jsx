import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bowl from "../assets/bowl.png";
import OfferOne from "../assets/offerone.jpg";
import OfferTwo from "../assets/offertwo.jpg";

import "boxicons";
import {
  fetchVendor,
  fetchRecipes,
  fetchBestsellers,
} from "../utils/http";
import RecipeCard from "../components/RecipeCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const navigate = useNavigate();

  const [isCatsLoading, setIsCatsLoading] = useState(true);
  const [cats, setCats] = useState();
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);
  const [recipes, setRecipes] = useState();
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [products, setProducts] = useState();


  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchVendor();
        setCats(data[0].tags);
        setIsCatsLoading(false);
        //console.log(data[0].tags);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes(1, 4);
        //console.log(data.data);
        setRecipes(data.data);
        setIsRecipesLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchBestsellers();
        //console.log(data.data);
        setProducts(data.data);
        setIsProductsLoading(false);
    
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="home-page-container">
      <div className="home-page-hero-container">
        <div className="hero-left">
          <h1>Fresh Groceries. Delicious Recipes.</h1>
          <p>
            Browse through different products and recipes and get the freshest
            ingredients delivered to your doorstep.
          </p>
          <div className="hero-buttons">
            <button
              className="hero-btn solid"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
            <button className="hero-btn" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-container">
            <img src={Bowl} />
          </div>
        </div>
      </div>
      <div className="home-categories-section">
        <div className="home-section-header">
          <h2>Our categories</h2>
        </div>
        {!isCatsLoading && <Carousel items={cats} cardType="category" />}
        <div className="home-link-chevron-container">
          <Link to="/products" className="link-text">
            View all categories
          </Link>
          <box-icon name="chevron-right" size="30px" color="#ce6332" />
        </div>
      </div>
      <div className="home-deals-section">
        <div className="home-deal-card left-offer">
          <div className="offer-one-text-container">
            <p className="offer-one-header">
              Sale <span className="offer-one-percentage">25%</span>
            </p>
            <p className="offer-one-subheader">Vegetable & Fruit</p>
            <button
              className="hero-btn offer-btn"
              onClick={() => navigate("/products/24/Fruits%20and%20vegetables")}
            >
              Shop Now <box-icon name="right-arrow-alt"></box-icon>
            </button>
          </div>
          <img src={OfferOne}></img>
        </div>
        <div className="home-deal-card right-offer">
          <div className="offer-one-text-container right">
            <p className="offer-one-header">
              Eat Healthy & Live Well
            </p>
            <button
              className="hero-btn offer-btn solid"
              style={{border: '1.5px solid white'}}
              onClick={() => navigate("/recipes")}
            >
              Recipes <box-icon name="right-arrow-alt" color="white"></box-icon>
            </button>
          </div>
          <img src={OfferTwo}></img>
        </div>
      </div>

      <div className="home-recipes-section">
        <div className="home-recipes-intro">
          <h2>Our recipes</h2>
          <p>
            Browse through our recipes and conviently shop for each ingredient.
          </p>
        </div>
        <ul className="home-recipes-list">
          {!isRecipesLoading &&
            recipes.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  imageUrl={recipe.attributes.image.data.attributes.url}
                  title={recipe.attributes.title}
                  duration={recipe.attributes.timeToPrepareInMinutes}
                  recipeData={recipe.attributes.recipeData}
                  category={recipe.attributes.recipe_tags.data[0].attributes.title}

                />
              );
            })}
        </ul>
        <div className="home-link-recipe-chevron-container">
          <Link to="/recipes" className="link-text">
            View all recipes
          </Link>
          <box-icon name="chevron-right" size="30px" color="#ce6332" />
        </div>
      </div>

      <div className="home-products-section">
        <div className="home-section-header">
          <h2>Our bestsellers</h2>
        </div>
        <ul className="home-products-list">
          {!isProductsLoading &&
            products.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard
                    id={product.id}
                    imageUrl={product.attributes.image.data.attributes.url}
                    title={product.attributes.title}
                    price={product.attributes.price}
                    quantity={product.attributes.weight}
                  />
                </li>
              );
            })}
        </ul>
        <div className="home-link-recipe-chevron-container">
          <Link to="/products" className="link-text">
            View more products
          </Link>
          <box-icon name="chevron-right" size="30px" color="#ce6332" />
        </div>
      </div>
    </div>
  );
}
