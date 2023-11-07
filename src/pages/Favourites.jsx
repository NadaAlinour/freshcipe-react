import "../assets/stylesheets/favourites.css";
import { useEffect, useState } from "react";
import { fetchFavourites } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../components/RecipeCard";
import { setFavourites } from "../store/favouritesSlice";

export default function Favourites() {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.favourites);

  const { userToken, userId } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFavourites = async () => {
      try {
        const data = await fetchFavourites(userId, userToken);
        console.log(data.data[0].attributes.recipes.data);
        dispatch(
          setFavourites({ newFavourites: data.data[0].attributes.recipes.data })
        );
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFavourites();
  }, []);

  return (
    <div className="favourites-page-container">
      <ul className="favourites-list">
        {!isLoading &&
          favourites.map((favourite) => (
            <li key={favourite.id}>
              <RecipeCard
                id={favourite.id}
                imageUrl={favourite.attributes.image.data.attributes.url}
                title={favourite.attributes.title}
                duration={favourite.attributes.duration}
                recipeData={favourite.attributes.recipeData}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
