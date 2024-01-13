import "boxicons";
import { useNavigate } from "react-router-dom";
import { addItemToCart, fetchProduct, updateCartItem } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateQuantity } from "../store/cartSlice";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ProductCard({
  id,
  imageUrl,
  title,
  price,
  quantity,
  color,
  isDiscount,
}) {
  const { userToken, cartId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [isAddEnabled, setIsAddEnabled] = useState(true);

  const addToCart = async (productId, quantity) => {
    setIsAddEnabled(false);

    if (userToken) {
      // check if item already exists in cart to update it accordingly if so
      const isExists = cartItems.find(
        (item) => item.attributes.product.data.id == id
      );

      // update item quantity in cart
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
        } catch (error) {
          console.log(error);
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
         
          dispatch(updateCart({ cart: response.data }));
        } catch (error) {
          console.log(error);
        }
      } else {
       // console.log("not logged in, cant add items to cart for now");
      }
    } else if (!userToken) {
      //console.log("user not logged in");
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
          dispatch(updateCart({ cart: newItem }));

          let myjson = JSON.stringify(localCartItems);
          localStorage.setItem("localcart", myjson);
        } catch (error) {
          console.log(error);
        }
      } else {
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
       // console.log(newTempItems);
        localStorage.setItem("localcart", JSON.stringify(newTempItems));
      }
    }
    setIsAddEnabled(true);
  };


  // this part demonstrates how everything will look and behave when a product is discounted
  // the values are the same in the database though but ofc they ought to be updated.
  let newPrice = price;
  if (isDiscount) {
    var oldPrice = price;
    newPrice = (newPrice - newPrice * 0.25).toFixed(2);
    var newStringPrice = newPrice.toString();
    var newPriceSplit = newStringPrice.split(".");
    var oldStringPrice = oldPrice.toString();
    var oldPriceSplit = oldStringPrice.split(".");
  } else {
    const stringPrice = newPrice.toString();
    var priceSplit = stringPrice.split(".");
  }

  //console.log(priceSplit);
  const navigate = useNavigate();
  const handleClick = (id, title) => {
    navigate("/" + id + "/" + title);
  };

  return (
    <div
      className={
        !color
          ? "product-card-container"
          : "product-card-container popular-product-card-search"
      }
      style={color && { backgroundColor: "#f4e7da", boxShadow: "none" }}
    >
      <div
        className={
          !color
            ? "product-card-image-container"
            : "product-card-image-container popular-product-card-search"
        }
        style={color && { backgroundColor: "#f4e7da" }}
        onClick={!color ? handleClick.bind(this, id, title) : undefined}
      >
        <img src={imageUrl} />

        <div
          className={
            !color
              ? "product-card-price-quantity-container"
              : "product-card-price-quantity-container popular-product-card-search"
          }
        >
          <div className="product-card-price-container">
            <div className="product-card-price-whole">
              {isDiscount ? (
                <div className="discounted-price-container">
                  <div className="discounted-price">
                    <div className="old-price">
                      {oldPriceSplit[0]}.{oldPriceSplit[1]}
                    </div>{" "}
                    <div>
                      {newPriceSplit[0]}.{newPriceSplit[1]}
                    </div>
                  </div>
                  <p className="currency-text">EGP</p>
                </div>
              ) : (
                priceSplit[0]
              )}
            </div>
            <div className="product-card-fraction-currency-container">
              {!isDiscount && <p>.{priceSplit[1]}</p>}
              {!isDiscount && <p className="currency-text">EGP</p>}
            </div>
          </div>
          <p className="product-card-quantity">{quantity}</p>
        </div>
      </div>
      <div
        className={
          !color
            ? "product-card-title-add-container"
            : "product-card-title-add-container popular-product-card-search"
        }
        style={color && { backgroundColor: "#f4e7da", border: "none" }}
      >
        <h3
          onClick={!color ? handleClick.bind(this, id, title) : undefined}
          className="popular-product-card-search"
        >
          {title}
        </h3>
        <div
          className={
            isAddEnabled
              ? "product-card-add-icon-container"
              : "product-card-add-icon-container product-card-add-icon-container-disabled"
          }
          onClick={isAddEnabled ? addToCart.bind(this, id, 1) : undefined}
        >
          <box-icon name="plus" color="white" />
        </div>
      </div>
      {isDiscount && <div className="product-card-discount-tag">25% Off</div>}
    </div>
  );
}
