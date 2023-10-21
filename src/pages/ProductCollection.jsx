import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Breadcrumbs from "../components/Breadcrumbs";

import { PRODUCTS } from "../data/productData";

export default function ProductCollection() {
  const location = useLocation();
  //const products = location.state.products;
  //console.log(products);

  const currentPath = location.pathname;
  console.log(currentPath);
  // extract id from path hehehe
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  const products = PRODUCTS.filter(
    (product) => product.productCategory === idFromUrl
  );

  return (
    <>
      <Breadcrumbs />
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
    </>
  );
}
