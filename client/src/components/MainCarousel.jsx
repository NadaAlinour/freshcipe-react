import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import "boxicons";
export default function MainCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            color="rgba(0, 0, 0, .5)"
            size="30px"
          ></box-icon>
        </button>
        <button onClick={nextSlide} className="carousel-button">
          <box-icon
            name="chevron-right"
            color="rgba(0, 0, 0, .5)"
            size="30px"
          ></box-icon>
        </button>
      </div>
      <div
        className="carousel-items"
        style={{ transform: `translateX(${currentTransform}%)` }}
      >
        {items.map((item, index) => (
          <div
            className="main-carousel-item"
            style={{ backgroundColor: item.color }}
            key={index}
          >
            <h2>{item.username.toUpperCase()}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
