import CategoryCard from "../components/CategoryCard";
import { PRODUCT_CATEGORIES } from "../data/productData";

export default function ProductCategories() {

  return (
    <div className="product-categories-page-container">
      <div className="product-categories-list-container">
        <ul className="product-categories-list">
          {PRODUCT_CATEGORIES.map((cat) => (
            <li key={cat.id}>
              <CategoryCard
                id={cat.id}
                imageUrl={cat.imageUrl}
                title={cat.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
