import "boxicons";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchVendor } from "../utils/http";
//import { fetchVendors, fetchVendorCats } from "../utils/http";

export default function ProductFilter() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  const [isStoreHidden, setIsStoreHidden] = useState(false);
  const [isCategoryHidden, setIsCategoryHidden] = useState(false);

  const [vendors, setVendors] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState();

  useEffect(() => {}, [idFromUrl]);

  const handleFilterClick = async () => {
    // add query i guess
  };

  useEffect(() => {
    const getCats = async () => {
      try {
        const data = await fetchVendor();
        setCategories(data[0].tags);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getCats();
  }, []);

  /*useEffect(() => {
    const getVendors = async () => {
      try {
        const data = await fetchVendors();
        console.log(data);
        setVendors(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getVendors();
  }, []);*/

  return (
    <div className="product-filter-contents">
      <div className="filter-block-container">
        {/*   <div className="filter-block-header">
          <h3>Store</h3>
          <div
            className="filter-header-chevron"
            onClick={() => setIsStoreHidden(!isStoreHidden)}
          >
            {isStoreHidden ? (
              <box-icon name="chevron-down" />
            ) : (
              <box-icon name="chevron-up" />
            )}
          </div>
        </div>
        <ul className={isStoreHidden ? "hidden" : ""}>
          {!isLoading &&
            vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="product-filter-checkbox-p-container"
              >
                <div className="product-filter-checkbox-container" onClick={handleFilterClick}>
                  <box-icon name="checkbox" size="28px" color="#3c3b37" />
                </div>
                <li>
                  <p>{vendor.username}</p>
                </li>
              </div>
            ))}
        </ul>*/}
      </div>

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
                  <p>
                    {cat.title} - {cat.products.length}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="filter-block-container">
        <div className="filter-block-header">
          <h3>Price</h3>
        </div>

        <p>slider</p>
      </div>
    </div>
  );
}
