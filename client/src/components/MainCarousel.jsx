import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import RecipeBanner from "../assets/images/backgrounds/bannerRecipe.png";
import { useState, useEffect } from "react";
import "boxicons";
export default function MainCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(items);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    console.log(currentIndex);
  };

  const currentTransform = -currentIndex * 100;

  return (
    <div className="main-carousel-parent">
      <div className="main-carousel-buttons">
        <button onClick={prevSlide} className="carousel-button">
          <box-icon
            name="chevron-left"
            color="#3c3b37"
            size="30px"
          ></box-icon>
        </button>
        <button onClick={nextSlide} className="carousel-button">
          <box-icon
            name="chevron-right"
            color="#3c3b37"
            size="30px"
          ></box-icon>
        </button>
      </div>
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {items.map((item, index) => (
          <div className="main-carousel-item" key={index}>
            <img src={RecipeBanner} style={{width:"100%"}}/>
          </div>
        ))}
      </div>
    </div>
  );
}
