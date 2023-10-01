import Carousel from "../components/Carousel";
import MainCarousel from "../components/MainCarousel";
import { PRODUCT_CATEGORIES } from "../data/productData";
import { RECIPES } from "../data/recipeData";
import { Link } from "react-router-dom";

export default function Home() {
  const slides = [
    {
      title: "item one",
      color: "blue",
    },
    {
      title: "item two",
      color: "black",
    },
    {
      title: "item three",
      color: "red",
    },
  ];
  return (
    <div className="home-page-container">
      <MainCarousel items={slides}/>
      <div className="header-carousel-container">
        <div className="carousel-headers">
          <h2>Shop by Category</h2>
          <Link to="/products" className="link-text">
            <h4>View All Categories</h4>
          </Link>
        </div>
        <Carousel
          items={PRODUCT_CATEGORIES}
          cardType="category"
          activeSlidesNumber="4"
        />
      </div>

      <div className="header-carousel-container">
        <div className="carousel-headers">
          <h2>Shop by Recipe</h2>
          <Link to="/recipes" className="link-text">
            <h4>View All Recipes</h4>
          </Link>
        </div>
        <Carousel items={RECIPES} cardType="recipe" activeSlidesNumber="4" />
      </div>
    </div>
  );
}
