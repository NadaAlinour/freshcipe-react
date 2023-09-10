import "boxicons";
import { useState } from "react";
export default function Searchbar() {
  //handle search stuff (validate, api call from /services, render result of query(?))
  //same thing upon hitting enter or clicking the search icon

  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    console.log("clear input");
    setSearchText("");
  };

  // console.log(searchText);
  return (
    <div className="searchbar">
      <div className="search-icon-container">
        <box-icon name="search" size="32px" color="rgba(0,0,0,.35)"></box-icon>
      </div>
      <input
        type="search"
        placeholder="What are you looking for?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      {searchText !== "" && (
        <div className="search-clear-icon-container" onClick={handleClear}>
          <box-icon name="x"></box-icon>
        </div>
      )}
    </div>
  );
}
