import React, { useState } from 'react';
import "../assets/stylesheets/cart.css";
import ProductCard from "../components/ProductCard.jsx";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Jasmine Rice 1KG',
      image: 'src/assets/images/rice.png',
      basePrice: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Nesquik Cereal 750gm',
      image: 'src/assets/images/cereal.png',
      basePrice: 10.99,
      quantity: 5,
    },
    {
      id: 3,
      name: 'Tomatoes 1KG',
      image: 'src/assets/images/tomatoes.jpg',
      basePrice: 10.99,
      quantity: 3,
    }
    // Add more items to the cart as needed
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart_page">
      <div className="cart_products_container">
        <div className="cart_items">
          <h2>Cart Items</h2>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              image={item.image}
              basePrice={item.basePrice}
              quantity={item.quantity}
              removeItem={() => removeFromCart(item.id)}
            />
          ))}

          <div className="clearCart_button">
          <button className="cart_button clear_cart_button" type="reset">Clear Cart</button>
          <button className="cart_button" type="button">Add More Items</button>
          </div>
        </div>

        <div className="bill">
          <h2>Bill & ETA</h2>

          <div className="bill_details">
            <h4>ETA</h4>
            <h4>SubTotal</h4>
            <h4>Delivery Fees</h4>
            <h4>Service Fee</h4>
            <h4>Offer Discount</h4>
            <h4>Total Amount</h4>
          </div>

          <div className="promo_code">
            <textarea name="enter_promo" id="promo_text" cols="30" rows="2">Promo Code</textarea>
            <button type="submit">Submit Promo Code</button>
          </div>
        </div>
      </div>

      <div className="suggested_products_container">
        <div className="suggested_products">
          <h2>Suggested Products</h2>
          <div className="suggested_images">
            <ProductCard id="p9" imageUrl="https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a" title="Grapes" price="3.55" quantity="200" />
            <ProductCard id="p9" imageUrl="https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a" title="Grapes" price="3.55" quantity="200" />
          </div>
        </div>

        <div className="note">
          <h2>Special Request</h2>
          <textarea name="enter_request" id="note_text" cols="30" rows="3">Add a Note..</textarea><br />
          <button>Go To Checkout</button>
        </div>
      </div>
    </div>
  );
}
