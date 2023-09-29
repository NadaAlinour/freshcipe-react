import CategoryCard from "../components/CategoryCard";
import { PRODUCT_CATEGORIES } from "../data/productData";
import { PRODUCTS } from "../data/productData";
import { useNavigate } from "react-router-dom";

export default function ProductCategories() {
  //this page is for showing the different categories
  const navigate = useNavigate();
  const handleClick = (id, title) => {
    const productCollection = PRODUCTS.filter(
      (product) => product.productCategory === id
    );
    navigate("/products/" + title, { state: { products: productCollection } });
  };
  return (
    <div className="product-categories-page-container">
      <div className="product-categories-list-container">
        <ul className="product-categories-list">
          {PRODUCT_CATEGORIES.map((cat) => (
            <li
              key={cat.id}
              onClick={handleClick.bind(this, cat.id, cat.title)}
            >
              <CategoryCard imageUrl={cat.imageUrl} title={cat.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
