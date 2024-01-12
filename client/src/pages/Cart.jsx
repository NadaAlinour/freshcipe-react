import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/stylesheets/cart.css";
import CartItem from "../components/CartItem";
import { deleteCartItem, createOrder } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, setCart } from "../store/cartSlice.js";
import EmptyCartImage from "../assets/images/empty-cart.png";
import CartAdd from "../assets/images/addcart.png";
import Overlay from "../components/Overlay";

export default function CartPage() {
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const [isModalShowing, setIsModalShowing] = useState(false);

  // bill stuff
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [checkoutLink, setCheckoutLink] = useState();

  const [note, setNote] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  useEffect(() => {
    const handleOverlayStyle = () => {
      if (isModalShowing) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // Call the function when the component mounts or when isOverlayActive changes
    handleOverlayStyle();

    // Cleanup function to remove the style when the component is unmounted
    return () => {
      document.body.style.overflow = ""; // Remove the style to enable scrolling
    };
  }, [isModalShowing]); // Run the effect when isOverlayActive changes

  const handleOverlayClose = () => {
    setIsModalShowing(!isModalShowing);
  };

  useEffect(() => {
    console.log(cartItems);

    var calculatedDiscount = 0;
    cartItems.forEach((item) => {
      if (item.attributes.product.data.attributes.tags.data[0].id == 24) {
        calculatedDiscount +=
          item.attributes.product.data.attributes.price *
          0.25 *
          item.attributes.quantity;
      }
    });

    setDiscount(calculatedDiscount.toFixed(2));

    // subTotal
    var calculatedSubTotal = 0;
    cartItems.forEach((item) => {
      calculatedSubTotal +=
        item.attributes.quantity *
        item.attributes.product.data.attributes.price;

      item.attributes.quantity;
    });

    setSubTotal(calculatedSubTotal.toFixed(2));

    // total amount
    var calculatedTotal = 0;

    calculatedTotal += calculatedSubTotal;
    setTotal((calculatedTotal - calculatedDiscount).toFixed(2));
  }, [cartItems]);

  const dispatch = useDispatch();

  const clearCart = async () => {
    console.log(cartItems);
    console.log("clearing cart");

    if (userToken) {
      cartItems.forEach(async (item) => {
        try {
          const response = await deleteCartItem(cartId, item.id, userToken);
          console.log(response);
          dispatch(removeFromCart({ id: item.id }));
        } catch (error) {
          console.log(error);
        }
      });
    } else {
      cartItems.forEach((item) => {
        dispatch(removeFromCart({ id: item.id }));
        localStorage.removeItem("localcart");
      });
    }
  };

  const handleCheckout = async () => {
    if (!userToken) {
      console.log("pls log in to be able to checkout");
      setIsModalShowing(true);
    } else {
      setCheckoutLink("");
      console.log("creating order");
      // get items from cart
      let items = [];
      for (let i = 0; i < cartItems.length; i++) {
        items.push({
          product: cartItems[i].attributes.product.data.id,
          quantity: cartItems[i].attributes.quantity,
          price: Math.floor(
            cartItems[i].attributes.product.data.attributes.price
          ),
        });
      }

      let start;
      let end;

      if (startTime) {
        start = `${startTime}:00`;
      } else start = null;

      if (endTime) {
        end = `${endTime}:00`;
      } else end = null;

      const order = {
        data: {
          vendor: 25,
          customer: parseInt(userId),
          desiredFrom: start,
          desiredTo: end,
          items: items,
          note: note,
        },
      };

      console.log("my order", order);
      console.log(startTime, "  ", endTime);
      try {
        const data = await createOrder(userToken, order);
        console.log("RETURNED DATA ALO: ", data.data.attributes.checkoutLink);
        //setCheckoutLink(data.data.attributes.checkoutLink);
        window.location.assign(data.data.attributes.checkoutLink);

        // redirect to stripe page
        console.log("redirect to stripe using checkout link");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="cart_page">
      {isModalShowing && (
        <Overlay
          onClose={handleOverlayClose}
          title="Login to Checkout"
          description="Create an account or login no to proceed to checkout."
          icon={CartAdd}
        />
      )}
      <div className="cart_products_container">
        <div className="cart_items">
          {userToken ? <h2>My Cart</h2> : <h2>Local Cart</h2>}
          <ul
            className={
              cartItems.length > 0
                ? "cart-products-list"
                : "cart-products-list no-border"
            }
          >
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
                      isDiscount={
                        item.attributes.product.data.attributes.tags.data[0]
                          .id == 24
                          ? "true"
                          : ""
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
            </div>
          ) : (
            <div className="empty-cart-placeholder">
              <img
                src={EmptyCartImage}
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
              <span>SubTotal</span>
              <span>{subTotal}</span>
            </div>

            <div className="bill_item" style={{ color: "#ed8453" }}>
              <span>Discount</span>
              <span>{discount}</span>
            </div>

            <div className="bill_item total">
              <span>Total Amount</span>
              <span>{total}</span>
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
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="cart-delivery-window-container">
            <h2>Delivery Window</h2>
            <div className="cart-delivery-window">
              <input
                type="time"
                className="form-input"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              ></input>
              <h2 style={{ fontSize: "21px" }}>to</h2>
              <input
                type="time"
                className="form-input"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              ></input>
            </div>
          </div>

          <div className="checkout_button_div">
            <button className="checkout-button" onClick={handleCheckout}>
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
