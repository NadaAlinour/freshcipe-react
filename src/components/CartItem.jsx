import React, { useState } from 'react';
import "../assets/stylesheets/cart.css"

function CartItem({ name, image, basePrice, removeItem }) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = quantity * basePrice; // Calculate the total price

  return (
    <div className="item_row">
      <img src={image} alt={name} height={70} />
      <div>
        {name}
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
      <div className="price">EGP{totalPrice.toFixed(2)}</div>
      <button className="remove_button" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
