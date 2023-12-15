import "boxicons";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Searchbar() {
  //handle search stuff (validate, api call from /services, render result of query(?))
  //same thing upon hitting enter or clicking the search icon
  const location = useLocation();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");

  const isQuery = pathArray.includes("search");

  useEffect(() => {
    if (!isQuery) {
      setSearchText("");
    }
  }, [isQuery]);

  const handleClear = () => {
    console.log("clear input");
    setSearchText("");
  };

  const handleSearch = () => {
    console.log(searchText);
    navigate(`products/search?query=${searchText}`);
  };

  const handleKeyDown = (event) => {
    console.log("key pressed: ", event.key)
    if (event.key == "Enter") {
      handleSearch();
    }
  };

  // console.log(searchText);
  return (
    <div className="searchbar">
      <div className="search-icon-container" onClick={handleSearch}>
        <box-icon name="search" size="32px" color="rgba(0,0,0,.35)"></box-icon>
      </div>
      <input
        type="search"
        placeholder="What are you looking for?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
      {searchText !== "" && (
        <div className="search-clear-icon-container" onClick={handleClear}>
          <box-icon name="x"></box-icon>
        </div>
      )}
    </div>
  );
}
