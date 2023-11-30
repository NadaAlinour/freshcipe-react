import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/cart.css";
import CartItem from "../components/CartItem";
import { deleteCartItem } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setCart } from "../store/cartSlice.js";
import EmptyCartImage from "../assets/images/empty-cart.png";
import TestCart from "../assets/images/test-cart.png";
export default function CartPage() {
  // check whether user is logged in or now
  // if logged in, get user stuff
  // else, get localStorage stuff (not added yet)

  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  // bill stuff
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    
    // subTotal
    var calculatedSubTotal = 0;
    cartItems.forEach(item => {
      calculatedSubTotal += item.attributes.quantity * item.attributes.product.data.attributes.price;
    });

    setSubTotal(calculatedSubTotal.toFixed(2));

    // total amount
    var calculatedTotal = 0;
    calculatedTotal = calculatedSubTotal;
    setTotal(calculatedTotal.toFixed(2));

  }, [cartItems]);

  const dispatch = useDispatch();

  const clearCart = async () => {
    //setCartItems([]);
    console.log(cartItems);
    console.log("clearing cart");

    cartItems.forEach(async (item) => {
      try {
        const response = await deleteCartItem(cartId, item.id, userToken);
        console.log(response);
        dispatch(removeFromCart({ id: item.id }));
      } catch (error) {
        console.log(error);
      }
    });
  };



  const calculateTaxFee = () => {
    /* return cartItems.reduce((total, item) => {
      return total + item.basePrice * 0.14 * item.quantity;
    }, 0);*/
  };

  const calculateTotalAmount = () => {
    /* const subTotal = calculateSubTotal();
    const deliveryFees = 10.0;
    const productDiscount = 0.0;
    const taxFee = calculateTaxFee();

    return subTotal + deliveryFees + taxFee - productDiscount;*/
  };

  /*const subTotal = calculateSubTotal();
  const totalAmount = calculateTotalAmount();*/

  const updatePrice = (itemId, newQuantity) => {
    /*const updatedCart = cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setCartItems(updatedCart);*/
  };

  return (
    <div className="cart_page">
      <div className="cart_products_container">
        <div className="cart_items">
          <h2>My Cart</h2>
          <ul className="cart-products-list">
            {cartItems.length > 0 &&
              cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    <CartItem
                      id={item.id}
                      name={
                        item.attributes.product
                          ? item.attributes.product.data.attributes.title
                          : item.attributes.title
                      }
                      image={
                        item.attributes.product
                          ? item.attributes.product.data.attributes.image.data
                              .attributes.url
                          : item.attributes
                      }
                      basePrice={
                        item.attributes.product
                          ? item.attributes.product.data.attributes.price
                          : item.attributes.price
                      }
                      quantity={item.attributes.quantity}
                      updatePrice={(newQuantity) =>
                        updatePrice(item.id, newQuantity)
                      }
                    />
                  </li>
                );
              })}
          </ul>
          {cartItems.length > 0 ? (
            <div className="clear-cart-button">
              <button
                className="cart_button clear_cart_button"
                type="button"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              {/*<button className="cart_button" type="button">
              Add More Items
            </button>*/}
            </div>
          ) : (
            <div className="empty-cart-placeholder">
              <img
                src={TestCart}
                style={{ width: "330px", marginBottom: "15px" }}
              ></img>
              <p className="empty-cart-text">Your cart is currently empty.</p>
              <p className="empty-cart-text-2">
                Click here to{" "}
                <Link to="/products" className="link-text">
                  start shopping.
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="bill">
          <h2>Order Details</h2>

          <div className="bill_details">
            <div className="bill_item">
              <span>ETA</span>
              <span>30 minutes</span>
            </div>

            <div className="bill_item">
              <span>SubTotal</span>
              <span>EGP {subTotal}</span>
            </div>

            <div className="bill_item">
              <span>Delivery Fees</span>
              <span>EGP 10.00</span>
            </div>

            <div className="bill_item">
              <span>Tax Fees</span>
              <span>EGP {/*calculateTaxFee().toFixed(2)*/}</span>
            </div>

            <div className="bill_item">
              <span>Product Discount</span>
              <span>-EGP 7.00</span>
            </div>

            <div className="bill_item total">
              <span>Total Amount</span>
              <span>EGP {total}</span>
            </div>
          </div>

          <div className="note">
            <h2>Special Request</h2>
            <div className="special-request-note-container">
              <textarea
                name="enter_request"
                id="note_text"
                cols="30"
                rows="3"
                placeholder="Add a Note..."
              ></textarea>
            </div>
          </div>

          <div className="checkout_button_div">
            <button className="checkout-button">Go To Checkout</button>
          </div>
          {/*(cartItems.length === 0 || totalAmount < 40.0) && (
            <p className="no-items-message">Minimum Charge is EGP 40.00</p>
          )*/}
        </div>
      </div>

    
    </div>
  );
}
