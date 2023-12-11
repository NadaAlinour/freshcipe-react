import "boxicons";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchSubCats, fetchVendor } from "../utils/http";
//import { fetchVendors, fetchVendorCats } from "../utils/http";

export default function ProductFilter({ updateCollection }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const idFromUrl = pathArray[2];
  const categoryFromUrl = decodeURI(pathArray[3]);
  console.log(categoryFromUrl);
  const [isCategoryHidden, setIsCategoryHidden] = useState(false);

  const [categories, setCategories] = useState(); // all cats
  const [subCats, setSubCats] = useState(); // subcats of current category
  const [isLoading, setIsLoading] = useState(true);
  const [isSubCatsLoading, setIsSubCatsLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    console.log("ID FROM URL: ", idFromUrl);
    console.log("CAT FROM URL: ", categoryFromUrl);
  }, [idFromUrl, pathArray]);

  /*useEffect(() => {
    setSelectedFilters([]);
  }, [idFromUrl])*/

  const handleFilterClick = (catId) => {
 
    // check if id already exists in selectedFilters
    const exists = selectedFilters.find((id) => id == catId);
    if (exists) {
      console.log("id already selected");
      // remove it
      if (selectedFilters.length > 1) {
        setSelectedFilters((prevSelectedFilters) => {
          const newArray = prevSelectedFilters.filter((id) => id != catId);
          updateCollection(newArray);
          return newArray;
        });
      } else {
        setSelectedFilters((prevSelectedFilters) => {
          const newArray = [];
          updateCollection(newArray);
          return newArray;
        });
      
      }
     
    } else {
      // push id to selectedFilters
      //selectedFilters.push(catId);
      setSelectedFilters((prevSelectedFilters) => {
        const newArray = [...prevSelectedFilters, catId];
        updateCollection(newArray);
        return newArray;
      });
    }
    // console.log(selectedFilters);
    //updateCollection(selectedFilters);
  };

  useEffect(() => {
    const getCats = async () => {
      try {
        const data = await fetchVendor();
        console.log(data[0]);
        setCategories(data[0].tags);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCats();
  }, []);

  useEffect(() => {
    const getSubCats = async () => {
      try {
        const data = await fetchSubCats(idFromUrl);
        console.log(data.data);
        setSubCats(data.data);
        setIsSubCatsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSubCats();
  }, [idFromUrl]);

  return (
    <div className="product-filter-contents">
      <div className="filter-block-container">
        <div className="filter-block-header">
          <h3>Category</h3>
          <div
            className="filter-header-chevron"
            onClick={() => setIsCategoryHidden(!isCategoryHidden)}
          >
            {isCategoryHidden ? (
              <box-icon name="chevron-down" />
            ) : (
              <box-icon name="chevron-up" />
            )}
          </div>
        </div>
        <ul className={isCategoryHidden ? "hidden" : "filter-cats-list"}>
          {!isLoading &&
            categories.map((cat) => {
              return (
                <li
                  key={cat.id}
                  onClick={() =>
                    navigate("/products" + "/" + cat.id + "/" + cat.title, {
                      state: { categoryId: cat.id },
                      replace: true,
                    })
                  }
                >
                  <p
                    className={
                      cat.id == idFromUrl ? "filter-selected-category-p" : ""
                    }
                  >
                    {cat.title} - {cat.products.length}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>

      {!isLoading && subCats && subCats.length > 0 && (
        <div className="filter-block-container">
          <div className="filter-block-header">
            <h3>Type</h3>
          </div>
          <ul className="filter-cats-list">
            {!isSubCatsLoading &&
              subCats.map((cat) => {
                return (
                  <li
                    key={cat.id}
                    onClick={handleFilterClick.bind(this, cat.id)}
                  >
                    <div className="ingredient-checkbox-container">
                      <box-icon
                        name={
                          selectedFilters.find((id) => id == cat.id)
                            ? "checkbox-checked"
                            : "checkbox"
                        }
                        size="28px"
                        color="#474643"
                      />
                    </div>
                    <div className="ingredient-label-container">
                      <label>{cat.attributes.title}</label>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      <div className="filter-block-container">
        <div className="filter-block-header">
          <h3>Price</h3>
        </div>
        <ul>
          <li>
            <div className="ingredient-checkbox-container">
              <box-icon name="checkbox" size="28px" color="#474643" />
            </div>
            <div className="ingredient-label-container">
              <label>Under 50E£</label>
            </div>
          </li>
          <li>
            <div className="ingredient-checkbox-container">
              <box-icon name="checkbox" size="28px" color="#474643" />
            </div>
            <div className="ingredient-label-container">
              <label>50E£ to 200E£</label>
            </div>
          </li>
          <li>
            <div className="ingredient-checkbox-container">
              <box-icon name="checkbox" size="28px" color="#474643" />
            </div>
            <div className="ingredient-label-container">
              <label>200E£ and above</label>
            </div>
          </li>
         
        </ul>
      </div>
    </div>
  );
}
