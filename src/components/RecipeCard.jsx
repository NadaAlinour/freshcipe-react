import "boxicons";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ id, imageUrl, title, duration, recipeData }) {
  /*const categories = dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );*/

  const categories = ["vegan"];

  const navigate = useNavigate();

  const handleRecipeClick = (id, title) => {
    navigate("/recipes/" + id + "/" + title, { state: { recipeId: id } });
  };

  
  return (
    <div
      className="recipe-card-container"
      onClick={handleRecipeClick.bind(this, id, title)}
    >
      <div className="recipe-card-image-container">
        <img src={imageUrl} className="recipe-card-container-img"></img>
      </div>

      <div className="recipe-card-header">
        <h4>{title}</h4>
      </div>
      <div className="recipe-card-header-p">
        <p>{recipeData.nutritionalValues[0].value}</p>
      </div>

      <div className="recipe-card-time-diet-container">
        <div className="recipe-card-detail-container recipe-detail-left">
          <p className="recipe-card-detail-label">Time</p>
          <p className="recipe-card-detail-value">{duration} mins</p>
        </div>

        <div className="recipe-card-detail-container recipe-detail-right">
          <p className="recipe-card-detail-label">Diet</p>
          <p className="recipe-card-detail-value">{categories[0]}</p>
        </div>
    </div>
    </div>
  );
}
