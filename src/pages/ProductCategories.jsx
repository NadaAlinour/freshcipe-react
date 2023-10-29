import CategoryCard from "../components/CategoryCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { fetchVendorCats } from "../utils/http";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProductCategories() {
  const location = useLocation();
  const currentPath = location.pathname;
  //console.log(currentPath);
  // extract id from path hehehe
  const pathArray = currentPath.split("/");
  //console.log(pathArray)
  const idFromUrl = pathArray[pathArray.length - 2];
  //console.log(idFromUrl);

  const [cats, setCats] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVendorCats = async () => {
      try {
        const data = await fetchVendorCats(idFromUrl);
        setCats(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getVendorCats();
    console.log(cats);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <div className="product-categories-page-container">
        <div className="product-categories-list-container">
          <ul className="product-categories-list">
            {!isLoading &&
              cats.map((cat) => (
                <li key={cat.id}>
                  <CategoryCard
                    id={cat.id}
                    title={cat.attributes.title}
                    imageUrl={
                      cat.attributes.image.data.attributes.url
                    }
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
