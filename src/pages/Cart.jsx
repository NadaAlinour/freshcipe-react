import "../assets/stylesheets/cart.css"
import ProductCard from "../components/ProductCard.jsx"

export default function () {
  return (
    <div className="cart_page">

      <div className="cart_products_container">

        <div className="cart_items">
          <h2>Cart Items</h2>

          <div className="quantity">
            <div className="items_col">
            <h4>Items</h4>
            <h5>RICE</h5>
            </div>
            <h4>Quantity</h4>
            <h4>Price</h4>
          </div>
          
          <div className="quantity_button">
              <button type="reset">Clear Cart</button>
              <button>Add More Items</button>
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
            <img src="src\assets\images\rice.png" alt="Rice" height={100}/>
            <img src="src\assets\images\cereal.png" alt="Cereal" height={100} />
            <img src="src\assets\images\tomatoes.jpg" alt="Tomatos" height={100} />
            <ProductCard id="p9" imageUrl=    "https://img.freepik.com/free-photo/close-up-bunch-grapes_1149-761.jpg?w=1480&t=st=1695927945~exp=1695928545~hmac=8853a7a2b7df1c474dd2ef73623f369ccb693f14cdab9ae2406437a40e88752a" title="grapes" price="3.55" quantity="200" />
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
