import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import "boxicons";
export default function Carousel({ items, cardType }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? items.length / 4 - 1 : currentIndex - 1
    );
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === items.length / 4 - 1 ? 0 : currentIndex + 1
    );
    console.log(currentIndex);
  };

  const currentTransform = -currentIndex * 100;

  return (
    <div className="carousel-parent">
      <button onClick={prevSlide} className="small-carousel-button-left">
        <box-icon name="chevron-left" color="#FAF6F1" size="40px"></box-icon>
      </button>

      <button onClick={nextSlide} className="small-carousel-button-right">
        <box-icon name="chevron-right" color="#FAF6F1" size="40px"></box-icon>
      </button>
      <div className="carousel-container">
        <div
          className="carousel-items"
          style={{ transform: `translateX(${currentTransform}%)` }}
        >
          {items.map((item, index) => (
            <div className="carousel-item" key={index}>
              {/*<CategoryCard {...item} />*/}
              {cardType === "category" ? (
                <CategoryCard
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                />
              ) : (
                <RecipeCard {...item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
