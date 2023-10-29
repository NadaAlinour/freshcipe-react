import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/Pagination";
import { fetchVendorCatsProducts, fetchAllProducts } from "../utils/http";
import { useState, useEffect } from "react";

export default function ProductCollection() {
  const location = useLocation();
  //const products = location.state.products;
  //console.log(products);

  const currentPath = location.pathname;
  //console.log(currentPath);
  // extract id from path hehehe
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchVendorCatsProducts(idFromUrl);
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const getAllProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (idFromUrl) getProducts();
    else getAllProducts();
    console.log(products);
  }, [isLoading, idFromUrl]);

  return (
    <>
      <Breadcrumbs />
      <div className="product-collection-page">
        <div className="product-filter-container">
          <ProductFilter />
        </div>
        <div>
          <div className="product-list-container">
            <ul>
              {!isLoading &&
                products.map((product) => (
                  <li key={product.id}>
                    <ProductCard
                      id={product.id}
                      title={product.attributes.title}
                      price={product.attributes.price}
                      quantity={product.attributes.weight}
                      imageUrl={product.attributes.image.data ? product.attributes.image.data.attributes.url : null}
                    />
                  </li>
                ))}
            </ul>
          </div>
          <div className="product-pagination-container">
            <Pagination currentNum="8" totalNum="65" />
          </div>
        </div>
      </div>
    </>
  );
}
