import CategoryCard from "../components/CategoryCard";
import Breadcrumbs from "../components/Breadcrumbs";
import { fetchCategories } from "../utils/http";
import { useEffect, useState } from "react";

export default function ProductCategories() {
  const [cats, setCats] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const getCats = async () => {
      try {
        const data = await fetchCategories();
        console.log(data.categories);
        setCats(data.categories);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getCats();
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
                    imageUrl={cat.imageUrl}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
