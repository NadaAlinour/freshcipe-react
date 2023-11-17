import "boxicons";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchSubCats, fetchVendor } from "../utils/http";
//import { fetchVendors, fetchVendorCats } from "../utils/http";

export default function ProductFilter() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  const [isStoreHidden, setIsStoreHidden] = useState(false);
  const [isCategoryHidden, setIsCategoryHidden] = useState(false);

  const [vendors, setVendors] = useState();
  const [categories, setCategories] = useState(); // all cats
  const [subCats, setSubCats] = useState(); // subcats of current category
  const [isLoading, setIsLoading] = useState(true);
  const [isSubCatsLoading, setIsSubCatsLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState();

  useEffect(() => {}, [idFromUrl]);

  const handleFilterClick = async () => {
    // add query i guess
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
          <h3>Type</h3>
        </div>
        <ul className="filter-cats-list">
          {!isSubCatsLoading &&
            subCats.map((cat) => {
              return (
                <li key={cat.id}>
                  <div className="ingredient-checkbox-container">
                    <box-icon name="checkbox" size="28px" color="#474643" />
                  </div>
                  <div className="ingredient-label-container">
                    <label>{cat.attributes.title}</label>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>

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
                <label>Under 10E£</label>
              </div>
            </li>
            <li>
              <div className="ingredient-checkbox-container">
                <box-icon name="checkbox" size="28px" color="#474643" />
              </div>
              <div className="ingredient-label-container">
                <label>10E£ to 50E£</label>
              </div>
            </li>
            <li>
              <div className="ingredient-checkbox-container">
                <box-icon name="checkbox" size="28px" color="#474643" />
              </div>
              <div className="ingredient-label-container">
                <label>50E£ to 100E£</label>
              </div>
            </li>
            <li>
              <div className="ingredient-checkbox-container">
                <box-icon name="checkbox" size="28px" color="#474643" />
              </div>
              <div className="ingredient-label-container">
                <label>100E£ to 200E£</label>
              </div>
            </li>
            <li>
              <div className="ingredient-checkbox-container">
                <box-icon name="checkbox" size="28px" color="#474643" />
              </div>
              <div className="ingredient-label-container">
                <label>200E£ and Above</label>
              </div>
            </li>
          </ul>
        </div>

    </div>
  );
}
