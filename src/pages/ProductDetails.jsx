import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/productData";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../utils/http";
import "boxicons";

import Tag from "../components/Tag";
import Breadcrumbs from "../components/Breadcrumbs";
import Product from "../../models/product";

export default function ProductDetails({ route }) {
  const location = useLocation();

  const[product, setProduct] = useState();
  const[isLoading, setIsLoading] = useState(true); 

  const currentPath = location.pathname;
  console.log(currentPath);
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(idFromUrl);
        setProduct(data.data[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
    console.log(product);
  }, [isLoading]);

  let stepCount = 1;



  return (
    <>
      <Breadcrumbs />
      <div className="product-info-parent">
        <div className="product-info-container">
          <div className="product-info-img-container">
            {!isLoading && (
            <img 
            src={product?.attributes?.image?.data?.attributes?.url || ""}
            />
            )}
          </div>
          <div className="product-info">
            {!isLoading && (
              <p className="product-info-title">
                {product?.attributes?.title || ""}
              </p>
            )}
            {isLoading && (
            <p className="product-info-quantity">
              {product?.attributes?.quantity || ""}
            </p>)}
            {isLoading && (
            <p className="product-info-price">
              {product?.attributes?.price || ""}
            </p>)}
            {isLoading && (
              <p className="product-info-description">
                {product?.attributes?.description || ""}
              </p>
            )}
            <button className="product-info-add-to-cart-button">
              Add To Cart 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
