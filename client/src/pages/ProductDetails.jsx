import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, addItemToCart, updateCartItem } from "../utils/http";
import { updateCart, updateQuantity } from "../store/cartSlice";
import { v4 as uuidv4 } from "uuid";
import "boxicons";

import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductDetails({ route }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [isAddEnabled, setIsAddEnabled] = useState(true);

  const currentPath = location.pathname;
  console.log(currentPath);
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];
  console.log(idFromUrl);

  const addToCart = async (productId, quantity) => {
    setIsAddEnabled(false);
    if (!userToken) {
      console.log("user not logged in");
      // localcart stuff
      // fetch the product using its id
      // change to json and store in localstorage array or sum idk
      //check if product already exists in cart
      if (
        !cartItems.find((item) => item.attributes.product.data.id == productId)
      ) {
        let localCartItems;
        if (JSON.parse(localStorage.getItem("localcart"))) {
          localCartItems = JSON.parse(localStorage.getItem("localcart"));
        } else localCartItems = [];
        try {
          const response2 = await fetchProduct(productId);
          console.log(response2.data[0]);
          let uniqueId = uuidv4();
          localCartItems = [
            ...localCartItems,
            {
              id: uniqueId,
              attributes: {
                quantity: 1,
                product: {
                  data: response2.data[0],
                },
              },
            },
          ];
          let newItem = {
            id: uniqueId,
            attributes: {
              quantity: 1,
              product: {
                data: response2.data[0],
              },
            },
          };
          console.log(localCartItems);
          dispatch(updateCart({ cart: newItem }));

          let myjson = JSON.stringify(localCartItems);
          localStorage.setItem("localcart", myjson);
          console.log("myjson, ", myjson);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("or elseee");
        // increase quantity
        let existingItem = cartItems.find(
          (item) => item.attributes.product.data.id == productId
        );
        dispatch(
          updateQuantity({
            cartItemId: existingItem.id,
            quantity: existingItem.attributes.quantity + 1,
          })
        );
        let tempItems = JSON.parse(localStorage.getItem("localcart"));
        let newTempItems = tempItems.map((item) => {
          if (item.id == productId) {
            item.attributes.quantity = item.attributes.quantity + 1;
          }
          return item;
        });
        console.log(newTempItems);
        localStorage.setItem("localcart", JSON.stringify(newTempItems));
      }
    }

    const isExists = cartItems.find(
      (item) => item.attributes.product.data.id == idFromUrl
    );

    if (userToken && isExists != undefined) {
      const data1 = {
        data: {
          quantity: isExists.attributes.quantity + 1,
        },
      };
      try {
        const response = await updateCartItem(isExists.id, userToken, data1);
        dispatch(
          updateQuantity({
            cartItemId: isExists.id,
            quantity: isExists.attributes.quantity + 1,
          })
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        if (error.response.status == 403) {
          handleOverlay();
          return;
        }
      }
    } else if (userToken && isExists == undefined) {
      // add to cart as a new cart item
      try {
        const data2 = {
          data: {
            product: productId,
            quantity: quantity,
            cart: cartId,
          },
        };
        const response = await addItemToCart(data2, userToken);
        console.log(response.data);
        dispatch(updateCart({ cart: response.data }));
      } catch (error) {
        console.log(error);
      }
    }
    setIsAddEnabled(true);
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
            <div className="product-info-title-quantity">
              {!isLoading && (
                <h1 className="product-info-title">
                  {product?.attributes?.title || ""}
                </h1>
              )}
              {!isLoading && (
                <p className="product-info-quantity">
                  {product?.attributes?.weight || ""}
                </p>
              )}

              {/*!isLoading && (
              <p className="product-info-price">
                {product?.attributes?.price || ""}
              </p>
            )*/}

              <div className="product-info-price-button">
                {!isLoading && (
                  <div className="product-info-price-container">
                    <p className="product-info-price-whole">
                      {product.attributes.price.toString().split(".")[0]}.
                    </p>
                    <p className="product-info-price-fraction">
                      {product.attributes.price.toString().split(".")[1]}
                    </p>
                  </div>
                )}

                <div className="product-info-button-container">
                  <button
                    className={
                      isAddEnabled
                        ? "solid-button"
                        : "solid-button button-disabled"
                    }
                    onClick={
                      isAddEnabled
                        ? addToCart.bind(this, idFromUrl, 1)
                        : () => console.log("cant add yet")
                    }
                  >
                    Add To Cart <box-icon name="plus" color="white"></box-icon>
                  </button>
                </div>
              </div>
            </div>

            {!isLoading && (
              <p className="product-info-description">
                {product?.attributes?.description || ""}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
