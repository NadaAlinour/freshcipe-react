import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { deleteCartItem, updateCartItem } from "../utils/http";
import "../assets/stylesheets/cart.css";

function CartItem({ id, name, image, basePrice, quantity, isDiscount }) {
  if (isDiscount) {
    var oldPrice = basePrice;
    var newPrice = (oldPrice - oldPrice * 0.25).toFixed(2);
  }

  const { userToken, cartId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleRemove = async () => {
    if (userToken) {
      try {
        const response = await deleteCartItem(cartId, id, userToken);
        dispatch(removeFromCart({ id: id }));
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(removeFromCart({ id: id }));
      let tempItems = JSON.parse(localStorage.getItem("localcart"));
      let newTempItems = tempItems.filter((item) => item.id != id);
      localStorage.setItem("localcart", JSON.stringify(newTempItems));
    }
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      const data = {
        data: {
          quantity: quantity - 1,
        },
      };
      if (userToken) {
        try {
          const response = await updateCartItem(id, userToken, data);
          dispatch(updateQuantity({ cartItemId: id, quantity: quantity - 1 }));
        } catch (error) {
          console.log(error);
        }
      } else {
        dispatch(updateQuantity({ cartItemId: id, quantity: quantity - 1 }));
        let tempItems = JSON.parse(localStorage.getItem("localcart"));
        let newTempItems = tempItems.map((item) => {
          if (item.id == id) {
            item.attributes.quantity = item.attributes.quantity - 1;
          }
          return item;
        });
        localStorage.setItem("localcart", JSON.stringify(newTempItems));
      }
    } else {
      // removeItem(id);
      if (userToken) {
        await handleRemove();
      } else {
        handleRemove();
        let tempItems = JSON.parse(localStorage.getItem("localcart"));
        let newTempItems = tempItems.filter((item) => item.id != id);
        localStorage.setItem("localcart", JSON.stringify(newTempItems));
      }
    }
  };

  const increaseQuantity = async () => {
    const data = {
      data: {
        quantity: quantity + 1,
      },
    };
    if (userToken) {
      try {
        const response = await updateCartItem(id, userToken, data);
        dispatch(updateQuantity({ cartItemId: id, quantity: quantity + 1 }));
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(updateQuantity({ cartItemId: id, quantity: quantity + 1 }));
      let tempItems = JSON.parse(localStorage.getItem("localcart"));
      let newTempItems = tempItems.map((item) => {
        if (item.id == id) {
          item.attributes.quantity = item.attributes.quantity + 1;
        }
        return item;
      });
      localStorage.setItem("localcart", JSON.stringify(newTempItems));
    }
  };

  return (
    <div className="item_row">
      <img src={image} alt={name} height={70} />
      <div className="product_info">
        <h3>{name}</h3>
        {!isDiscount ? (
          <p className="price">EGP {basePrice.toFixed(2)}</p>
        ) : (
          <p>
            EGP <s>{oldPrice.toFixed(2)}</s> {newPrice}
          </p>
        )}
      </div>
      <div className="cart-item-controls">
        <div className="remove-button" onClick={handleRemove}>
          <box-icon name="trash" color="#7D7B78" size="28px"></box-icon>
        </div>
        <div className="quantity_controls">
          <button
            onClick={decreaseQuantity}
            className="cart-item-decrease-button"
          >
            <box-icon name="minus" color="#ed8453"></box-icon>
          </button>
          <div className="cart-item-quantity-container">{quantity}</div>
          <button
            onClick={increaseQuantity}
            className="cart-item-increase-button"
          >
            <box-icon name="plus" color="white"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
