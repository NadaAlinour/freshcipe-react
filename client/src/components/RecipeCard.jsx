import "boxicons";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({
  id,
  imageUrl,
  title,
  duration,
  recipeData,
  alt,
}) {
  /*const categories = dietCategories.map((cat) =>
    RECIPE_CATEGORIES.find((item) => item.id == cat)
  );*/

  // yo i didn't fix categories yet lol
  // get tags and use the first one
  const categories = ["vegan"];

  const navigate = useNavigate();

  const handleRecipeClick = (id, title) => {
    navigate("/recipes/" + id + "/" + title, { state: { recipeId: id } });
  };

  let card = (
    <>
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
    </>
  );

  let altCard = (
    <div
      className="recipe-card-container-alt"
      onClick={handleRecipeClick.bind(this, id, title)}
    >
      <div className="recipe-card-image-container-alt">
        <img src={imageUrl} className="recipe-card-container-img"></img>
      </div>

      <div className="recipe-card-details-alt">
        <div className="recipe-card-header-alt">
          <h4>{title}</h4>
        </div>
        <div className="recipe-card-header-p-alt">
          <p className="recipe-card-label-alt">Calories:</p>
          <p className="recipe-card-detail-value">
            {recipeData.nutritionalValues[0].value}
          </p>
        </div>

        <div className="recipe-card-duration-alt">
          <p className="recipe-card-label-alt">Time:</p>
          <p className="recipe-card-detail-value">{duration} mins</p>
        </div>

        <div className="recipe-card-diet-alt">
          <p className="recipe-card-label-alt">Diet:</p>
          <p className="recipe-card-detail-value">{categories[0]}</p>
        </div>
      </div>
    </div>
  );

  return <>{!alt ? card : altCard}</>;
}
