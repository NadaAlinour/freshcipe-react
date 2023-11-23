import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { deleteCartItem, updateCartItem } from "../utils/http";
import "../assets/stylesheets/cart.css";

function CartItem({ id, name, image, basePrice, quantity, updatePrice }) {
  const totalPrice = quantity * basePrice;
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = async () => {
    console.log(id);

    try {
      const response = await deleteCartItem(cartId, id, userToken);
      console.log(response);
      dispatch(removeFromCart({ id: id }));
    } catch (error) {
      console.log(error);
    }

    /*deleteCartItem(cartItemId)
        .then((data) => {
          const updatedCart = cartItems.filter((item) => item.id !== cartItemId);
          setCartItems(updatedCart);
          fetchCartWithItems(data);
        })
        .catch((error) => {
          console.error("Error deleting cart item:", error);
        });*/
  };

  const decreaseQuantity = async () => {
    if (quantity > 1) {
      // updatePrice(id, quantity - 1);
      const data = {
        data: {
          quantity: quantity - 1,
        },
      };
      try {
        const response = await updateCartItem(id, userToken, data);
        dispatch(updateQuantity({ cartItemId: id, quantity: quantity - 1 }));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      // removeItem(id);
      console.log("deleting item");
      await handleRemove();
    }
  };

  const increaseQuantity = async () => {
    // updatePrice(id, quantity + 1);
    console.log("current quantity: ", quantity);
    console.log("current cart: ", cartItems);
    const data = {
      data: {
        quantity: quantity + 1,
      },
    };
    try {
      const response = await updateCartItem(id, userToken, data);
      dispatch(updateQuantity({ cartItemId: id, quantity: quantity + 1 }));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="item_row">
      <img src={image} alt={name} height={70} />
      <div className="product_info">
        <h3>{name}</h3>
        <p className="price">EGP {basePrice.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <div className="remove-button" onClick={handleRemove}>
          <box-icon
            name="trash"
            color="#7D7B78"
            size="28px"
          ></box-icon>
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
