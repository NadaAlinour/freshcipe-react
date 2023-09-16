import Placeholder from "../assets/images/category-images/fruitsVeggies.jpg";
import Flame from "../assets/images/icons/flame-solid-24.png"
import "boxicons";
import { RECIPE_CATEGORIES } from "../data/recipeData";

export default function RecipeCard({
  isSimple,
  imageUrl,
  title,
  duration,
  nutritionalInfo,
  dietCategories,
}) {
  
  const categories = dietCategories.map(cat => RECIPE_CATEGORIES.find(item => item.id == cat))
  //console.log(categories)
  let content = (
    <div className="recipe-card-container">
      <img src={imageUrl}></img>
      <span>
        <box-icon name="timer"></box-icon>
        <p>{duration} mins</p>
      </span>
      <div className="recipe-card-title">
        <h4>{title}</h4>
      </div>
    </div>
  );

  if (!isSimple) {
    content = (
      <div className="recipe-card-container">
        <img src={imageUrl}></img>
        <div className="recipe-card-summary">
          <span>
            <box-icon name="timer" color="rgba(0, 0, 0, .5)"></box-icon>
            <p>{duration} mins</p>
          </span>
          <span>
            <img src={Flame}></img>
            <p>{nutritionalInfo[0].value}</p>
          </span>
          <p>{categories[0].title}</p>
        </div>
        <div className="recipe-card-title">
          <h4>{title}</h4>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}
