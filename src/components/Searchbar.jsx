import SearchIcon from "../assets/images/search-icon.png";
import { Link } from "react-router-dom";
export default function Searchbar() {
  //handle search stuff (validate, api call from /services, render result of query(?))
  //same thing upon hitting enter or clicking the search icon

  return (
    <>
      <div className="searchbar-container">
        <Link>
          <img src={SearchIcon} width="15px" title="Search"></img>
        </Link>
        <input type="search" placeholder="what are you looking for?"></input>
      </div>
    </>
  );
}
