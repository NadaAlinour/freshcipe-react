import SearchIcon from "../assets/images/search-regular-24 (1).png";
export default function Searchbar() {
  //handle search stuff (validate, api call from /services, render result of query(?))
  //same thing upon hitting enter or clicking the search icon

  return (
    <>
      <div className="searchbar-container">
   
              <input type="search" placeholder="What are you looking for?"></input>
              <div className="search-icon-container">
                  <img src={SearchIcon} title="Search"></img>
              </div>

      </div>
    </>
  );
}
