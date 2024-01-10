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
}) {
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const [isAddEnabled, setIsAddEnabled] = useState(true);

  const addToCart = async (productId, quantity) => {
    setIsAddEnabled(false);
    // console.log(data);

    if (userToken) {
      // check if item already exists in cart to update it accordingly if so
      console.log(cartItems);
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
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        console.log(cartItems);
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
          console.log("test: ", response.data);
          console.log(response.data);
          dispatch(updateCart({ cart: response.data }));
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("not logged in, cant add items to cart for now");
      }
    } else if (!userToken) {
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
    setIsAddEnabled(true);
  };

  const stringPrice = price.toString();
  let priceSplit = stringPrice.split(".");
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
            <p className="product-card-price-whole">{priceSplit[0]}</p>
            <div className="product-card-fraction-currency-container">
              <p className="product-card-price-fraction">.{priceSplit[1]}</p>
              <p className="currency-text">EGP</p>
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
    </div>
  );
}
