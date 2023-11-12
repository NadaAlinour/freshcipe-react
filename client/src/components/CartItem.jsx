import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { deleteCartItem } from "../utils/http";
import "../assets/stylesheets/cart.css";

function CartItem({
  id,
  name,
  image,
  basePrice,
  quantity,
  updatePrice,
}) {

  const totalPrice = quantity * basePrice;
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
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

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updatePrice(id, quantity - 1);
    } else {
      removeItem(id);
    }
  };

  const increaseQuantity = () => {
    updatePrice(id, quantity + 1);
  };

  return (
    <div className="item_row">
      <img src={image} alt={name} height={70} />
      <div className="product_info">
        <h3>{name}</h3>
        <p>EGP {basePrice.toFixed(2)}</p>
        <div className="quantity_controls">
          <button onClick={decreaseQuantity}>
            <box-icon name="minus"></box-icon>
          </button>
          {quantity}
          <button onClick={increaseQuantity}>
            <box-icon name="plus"></box-icon>
          </button>
        </div>
      </div>
      <div className="price">EGP {totalPrice.toFixed(2)}</div>
      <div className="remove-button" onClick={handleRemove}>
        <box-icon name="trash" color="rgba(0, 0, 0, .8)" size="28px"></box-icon>
      </div>
    </div>
  );
}

export default CartItem;
