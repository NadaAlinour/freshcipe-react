import { useState, useEffect } from "react";
import "../assets/stylesheets/cart.css";
import ProductCard from "../components/ProductCard.jsx";
import CartItem from "../components/CartItem";
import { deleteCartItem, deleteAllCartItems } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/cartSlice.js";

export default function CartPage() {
  // check whether user is logged in or now
  // if logged in, get user stuff
  // else, get localStorage stuff (not added yet)

  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearCart = async () => {
    //setCartItems([]);
    console.log("clearing cart");
    try {
      const response = await deleteAllCartItems(cartId, userToken);
      console.log(response.data);
      dispatch(setCart({ cart: [] }));
    } catch (error) {
      console.log(error);
    }
  };

  const calculateSubTotal = () => {
    /*return cartItems.reduce((total, item) => {
      return total + item.quantity * item.basePrice;
    }, 0);*/
  };

  const calculateTaxFee = () => {
    /* return cartItems.reduce((total, item) => {
      return total + item.basePrice * 0.14 * item.quantity;
    }, 0);*/
  };

  const calculateTotalAmount = () => {
    /* const subTotal = calculateSubTotal();
    const deliveryFees = 10.0;
    const productDiscount = 7.0;
    const taxFee = calculateTaxFee();

    return subTotal + deliveryFees + taxFee - productDiscount;*/
  };

  const subTotal = calculateSubTotal();
  const totalAmount = calculateTotalAmount();

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
          <h2>Cart Items</h2>
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

          {(cartItems.length === 0 || totalAmount < 40.0) && (
            <p className="no-items-message">Minimum Charge is EGP 40.00</p>
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
              <span>EGP {/*subTotal.toFixed(2)*/}</span>
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
              <span>EGP {/*totalAmount.toFixed(2)*/}</span>
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
        </div>
      </div>

      {/* <div className="suggested_products_container">
        <div className="suggested_products_title">
          <h2>Discover more products</h2>
          <div className="suggested_products">
            <div className="suggested_images">
              <ProductCard
                className="product_card"
                id="p9"
                imageUrl="https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a"
                title="Grapes"
                price="3.55"
                quantity="200"
              />
              <ProductCard
                className="product_card"
                id="p10"
                imageUrl="https://img.freepik.com/free-photo/red-apple-with-green-leaf-white-background_1232-3290.jpg?2&w=2000&t=st=1695864963~exp=1695865563~hmac=bc3dcf4882ad5e8a9fc0e7116cc05ef8c6451ceb7ecc911dbca386bdf93fff77"
                title="Apples"
                price="3.55"
                quantity="200"
              />
              <ProductCard
                className="product_card"
                id="p11"
                imageUrl="https://img.freepik.com/free-photo/single-banana-isolated-white-background_839833-17794.jpg?w=2000&t=st=1695927637~exp=1695928237~hmac=7842355a2d062382efcd2c35101f80650572a7e15ca0d7dae9be2613096199b1"
                title="Bananas"
                price="3.55"
                quantity="200"
              />
              <ProductCard
                className="product_card"
                id="p12"
                imageUrl="https://img.freepik.com/free-photo/green-cucumber_144627-21625.jpg?w=2000&t=st=1695927673~exp=1695928273~hmac=113b5255409c2570934d4de88a10753e117ccf4a61e8557b22172efdb37b4e0e"
                title="Cucumber"
                price="3.55"
                quantity="200"
              />
              <ProductCard
                className="product_card"
                id="p14"
                imageUrl="https://img.freepik.com/free-photo/bell-pepper_1339-1594.jpg?w=2000&t=st=1695927825~exp=1695928425~hmac=2ba78653f1ad589d23a381803516f66fc188553782b9e78bcbcaa60940a103e5"
                title="Bell Pepper"
                price="3.55"
                quantity="200"
              />
              <ProductCard
                className="product_card"
                id="p2"
                imageUrl="https://img.freepik.com/free-photo/raw-salmon_144627-33848.jpg?w=2000&t=st=1695865095~exp=1695865695~hmac=f2ff4a7472bb3cccc83997c784b1bc0cd6f63ca8bdd0d2ae78d11b96fe11fdd8"
                title="Salmon"
                price="20.99"
                quantity="200"
              />
            </div>
          </div>
          </div>
          </div>*/}
    </div>
  );
}
