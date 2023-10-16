import Flame from "../assets/images/icons/flame-solid-24.png";
import "boxicons";
import { RECIPE_CATEGORIES } from "../data/recipeData";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({
  id,
  isSimple,
  imageUrl,
  title,
  duration,
  nutritionalInfo,
  dietCategories,
}) {
  const categories = dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );

  const navigate = useNavigate();

  const handleRecipeClick = (id, title) => {
    navigate("/recipes/" + title, { state: { recipeId: id } });
  };

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
      <div
        className="recipe-card-container"
        onClick={handleRecipeClick.bind(this, id, title)}
      >
        <div className="recipe-card-image-container">
          <img src={imageUrl} className="recipe-card-container-img"></img>
        </div>

          <div className="recipe-card-header"><h4>{title}</h4></div>
          <div className="recipe-card-header-p"><p>{nutritionalInfo[0].value}</p></div>
      
          <div className="recipe-card-time-diet-container">
            <div className="recipe-card-detail-container recipe-detail-left">
              <p className="recipe-card-detail-label">Time</p>
              <p className="recipe-card-detail-value">{duration} mins</p>
            </div>

            <div className="recipe-card-detail-container recipe-detail-right">
              <p className="recipe-card-detail-label">Diet</p>
              <p className="recipe-card-detail-value">{categories[0].title}</p>
            </div>
          </div>
        {/*<div className="recipe-card-summary">
          <span>
            <box-icon name="timer" color="rgba(0, 0, 0, .5)"></box-icon>
            <p>{duration} mins</p>
          </span>
          <span>
            <img src={Flame}></img>
            <p>{nutritionalInfo[0].value}</p>
          </span>
          <span>
            <p>{categories[0].title}</p>
          </span>
    </div>*/}
      
      </div>
    );
  }

  return <div>{content}</div>;
}
