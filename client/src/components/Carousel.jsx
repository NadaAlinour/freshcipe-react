import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import "boxicons";
export default function Carousel({ items, cardType }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? (items.length/4) - 1 : currentIndex - 1);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === (items.length/4) - 1 ? 0 : currentIndex + 1);
    console.log(currentIndex);
  };

  const currentTransform = -currentIndex * 100;

  return (
    <div className="carousel-parent">
      <button onClick={prevSlide} className="carousel-button">
        <box-icon name="chevron-left" color="rgba(0, 0, 0, .5)" size="40px"></box-icon>
      </button>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{ transform: `translateX(${currentTransform}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              {/*<CategoryCard {...item} />*/}
              {cardType === "category" ? <CategoryCard {...item} /> : <RecipeCard {...item}/>}
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="carousel-button">
        <box-icon name="chevron-right" color="rgba(0, 0, 0, .5)" size="40px"></box-icon>
      </button>
    </div>
  );
}
