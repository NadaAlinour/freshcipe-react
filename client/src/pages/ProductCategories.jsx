import CategoryCard from "../components/CategoryCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { fetchVendor } from "../utils/http";
import { useEffect, useState } from "react";

export default function ProductCategories() {
  const [cats, setCats] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const getVendorWithCats = async () => {
      try {
        const data = await fetchVendor();
        //console.log('vendor: ', data[0].tags);
        setCats(data[0].tags);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getVendorWithCats();
    //console.log(cats);
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
                    title={cat.title}
                    imageUrl={cat.image.url}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
