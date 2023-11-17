import MainCarousel from "../components/MainCarousel";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import { fetchVendor, fetchRecipes } from "../utils/http";
import RecipeCard from "../components/RecipeCard";


export default function Home() {
  /*const [vendors, setVendors] = useState([]);*/
  const [isCatsLoading, setIsCatsLoading] = useState(true);
  const [cats, setCats] = useState();
  const [isRecipesLoading, setIsRecipesLoading] = useState(true);
  const [recipes, setRecipes] = useState();

  const features = [
    {
      color: "cornflowerblue",
      title: "feature one",
      imageUrl: "/src/assets/images/backgrounds/mealimage.jpg"
    },
    {
      color: "green",
      title: "feature two",
      imageUrl: "/src/assets/images/backgrounds/mealimage.jpg"

    },
    {
      color: "palevioletred",
      title: "feature three",
      imageUrl: "/src/assets/images/backgrounds/mealimage.jpg"

    },
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchVendor();
        setCats(data[0].tags)
        setIsCatsLoading(false);
        console.log(data[0].tags);
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
        setRecipes(data.data);
        setIsRecipesLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipes();
  }, []);

  return (
    <div className="home-page-container">
      <MainCarousel items={features} />
      <div className="home-categories-section">
        <div className="home-section-header">
          <h2>Our categories</h2>
        </div>
        {!isCatsLoading && <Carousel items={cats} cardType="category"/>}
        <div className="home-link-chevron-container">
            <Link to="/products" className="link-text">View all categories</Link>
            <box-icon name="chevron-right" size="30px" color="#ce6332" />
          </div>
      </div>
      <div className="home-deals-section">
        <div className="home-deal-card">deal 1</div>
        <div className="home-deal-card">deal 2</div>
      </div>

      <div className="home-recipes-section">
        <div className="home-recipes-intro">
          <h2>Our recipes</h2>
          <p>Browse through our recipes and conviently shop for each ingredient.</p>
        </div>
        <ul className="home-recipes-list">
          {
            !isRecipesLoading && recipes.map((recipe) => {
             return (
                <RecipeCard key={recipe.id} id={recipe.id}
                imageUrl={recipe.attributes.image.data.attributes.url}
                title={recipe.attributes.title}
                duration={recipe.attributes.timeToPrepareInMinutes}
                recipeData={recipe.attributes.recipeData}/>
              )
            })
          }
        </ul>
        <div className="home-link-recipe-chevron-container">
            <Link to="/recipes" className="link-text">View all recipes</Link>
            <box-icon name="chevron-right" size="30px" color="#ce6332" />
          </div>
      </div>
    </div>
  );
}
