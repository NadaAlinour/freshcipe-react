import "boxicons";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({
  id,
  imageUrl,
  title,
  duration,
  recipeData,
  alt,
  //category
}) {
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
          <p>{recipeData.calories} kcal</p>
        </div>

        <div className="recipe-card-time-diet-container">
          <div className="recipe-card-detail-container recipe-detail-left">
            <p className="recipe-card-detail-label">Time</p>
            <p className="recipe-card-detail-value">{duration} mins</p>
          </div>
          {/*
          <div className="recipe-card-detail-container recipe-detail-right">
            <p className="recipe-card-detail-label">Type</p>
            <p className="recipe-card-detail-value">{category}</p>
          </div>
          */}
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
          <p className="recipe-card-detail-value">{recipeData.calories}</p>
        </div>

        <div className="recipe-card-duration-alt">
          <p className="recipe-card-label-alt">Time:</p>
          <p className="recipe-card-detail-value">{duration} mins</p>
        </div>

        {/*  <div className="recipe-card-diet-alt">
          <p className="recipe-card-label-alt">Type:</p>
          <p className="recipe-card-detail-value">{category}</p>
        </div>
        */}
      </div>
    </div>
  );

  return <>{!alt ? card : altCard}</>;
}
