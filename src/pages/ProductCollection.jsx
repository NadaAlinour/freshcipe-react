import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

export default function ProductCollection() {
  const location = useLocation();
  const products = location.state.products;
  console.log(products);
  return (
    <div className="product-collection-page">
      <div className="product-filter-container">
        <ProductFilter />
      </div>
      <div className="product-list-container">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
