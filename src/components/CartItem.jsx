import React from 'react';
import "../assets/stylesheets/cart.css";

function CartItem({ id, name, image, basePrice, quantity, updatePrice, removeItem }) {
  const totalPrice = quantity * basePrice;

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
            <box-icon name='minus'></box-icon>
          </button>
          {quantity}
          <button onClick={increaseQuantity}>
            <box-icon name='plus'></box-icon>
          </button>
        </div>
      </div>
      <div className="price">EGP {totalPrice.toFixed(2)}</div>
      <button className="remove_button" onClick={() => removeItem(id)}>
        <box-icon name='trash' ></box-icon>
      </button>
    </div>
  );
}

export default CartItem;
