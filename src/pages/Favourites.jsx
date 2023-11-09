import "../assets/stylesheets/favourites.css";
import "boxicons";

import RecipeCard from "../components/RecipeCard";
import { useSelector, useDispatch } from "react-redux";
import { updateFavourites } from "../utils/http";

import { addFavourites } from "../store/favouritesSlice";

export default function Favourites() {
  const { favourites } = useSelector((state) => state.favourites);
  const { userToken, favouritesId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    console.log(id);

    let newData = favourites;
    newData = newData.filter((item) => item.id != id);
    dispatch(addFavourites({ newFavourites: newData }));

    try {
      const data = await updateFavourites(favouritesId, userToken, newData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="favourites-page-container">
      <div className="favourites-header">
        <p>Your Favourite Recipes</p>
      </div>
      <ul className="favourites-list">
        {favourites.map((favourite) => (
          <li key={favourite.id}>
            <RecipeCard
              id={favourite.id}
              imageUrl={favourite.attributes.image.data.attributes.url}
              title={favourite.attributes.title}
              duration={favourite.attributes.timeToPrepareInMinutes}
              recipeData={favourite.attributes.recipeData}
              alt={true}
            />
            <div
              className="recipe-card-alt-trash-container"
              onClick={handleDelete.bind(this, favourite.id)}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
