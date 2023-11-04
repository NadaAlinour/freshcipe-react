import "../assets/stylesheets/favourites.css";
import { useEffect } from "react";
import { fetchFavourites } from "../utils/http";
import { useSelector } from "react-redux";

export default function Favourites() {
  const { userToken,  userId} = useSelector((state) => state.auth);

  /*useEffect(() => {

  }, []);*/

  return (
    <div className="favourites-page-container">
      <h2>this is favourites</h2>
    </div>
  )
}