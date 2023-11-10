import "boxicons";
import { useState, useEffect } from "react";
import { fetchVendors, fetchVendorCats } from "../utils/http";

export default function ProductFilter() {
  const [isStoreHidden, setIsStoreHidden] = useState(false);
  const [isCategoryHidden, setIsCategoryHidden] = useState(false);

  const [vendors, setVendors] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleFilterClick = async () => {
    // add query i guess
  }

  useEffect(() => {
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
  }, []);

  return (
    <div className="product-filter-contents">
      <h2>Filter by</h2>

      <div className="filter-block-container">
        <div className="filter-block-header">
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
        </ul>
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
        <ul className={isCategoryHidden ? "hidden" : ""}>
          <li>
            <input type="checkbox" />
            <p>Fruits and vegetables (25)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Meat, chicken, and fish (15)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Baked goods and pastries (12)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Drinks, coffee and tea (5)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Snacks (21)</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Spices, oil and sauces (18)</p>
          </li>
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
