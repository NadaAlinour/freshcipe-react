import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProduct, addItemToCart } from "../utils/http";
import "boxicons";

import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductDetails({ route }) {
  const location = useLocation();
  const { userToken, userId, cartId } = useSelector((state) => state.auth); // cart id not saved in state for some reason

  // temporarily
  const cartTemp = localStorage.getItem("cartId");

  const[product, setProduct] = useState();
  const[isLoading, setIsLoading] = useState(true); 

  const currentPath = location.pathname;
  console.log(currentPath);
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  const addToCart = async (productId, quantity) => {
    const data = {
      data: {
        product: productId,
        quantity: quantity,
        cart: cartTemp,
      },
    };
    console.log(data);
    try {
      const response = await addItemToCart(data, userToken);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
      {/*<Breadcrumbs />*/}
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
            <button className="product-info-add-to-cart-button" onClick={addToCart.bind(this, idFromUrl, 1)}>
              Add To Cart 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
