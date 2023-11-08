import "../assets/stylesheets/favourites.css";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

export default function Favourites() {
  const { favourites } = useSelector((state) => state.favourites);

  return (
    <div className="favourites-page-container">
      <ul className="favourites-list">
        {favourites.map((favourite) => (
          <li key={favourite.id}>
            <RecipeCard
              id={favourite.id}
              imageUrl={favourite.attributes.image.data.attributes.url}
              title={favourite.attributes.title}
              duration={favourite.attributes.timeToPrepareInMinutes}
              recipeData={favourite.attributes.recipeData}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
