import "boxicons";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../store/cartSlice";

export default function ProductCard({ id, imageUrl, title, price, quantity }) {
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCart = async (productId, quantity) => {
    // check if product already exists in cart
    /*const items = cartItems.filter(
      (item) => item.attributes.product.data.id == productId
    );
    if(items.length > 0) {
      console.log('this item already exists in cart, just increase quantity');

    } else {
      console.log('this item does not exist in cart, add item')
    }*/

    const data = {
      data: {
        product: productId,
        quantity: quantity,
        cart: cartId,
      },
    };
   // console.log(data);
    try {
      const response = await addItemToCart(data, userToken);
      console.log(response.data.attributes.product.data);
      dispatch(
        updateCart({ cart: response.data.attributes.product.data })
      );
    } catch (error) {
      console.log(error);
    }
    console.log(cartItems)
  };

  const stringPrice = price.toString();
  let priceSplit = stringPrice.split(".");
  //console.log(priceSplit);
  const navigate = useNavigate();
  const handleClick = (id, title) => {
    navigate(id + "/" + title);
  };

  return (
    <div className="product-card-container">
      {/*id === "p1" && (
        <div className="product-card-discount-tag">
          <p>30% Off</p>
        </div>
      )}
      {id === "p7" && (
        <div className="product-card-discount-tag">
          <p>30% Off</p>
        </div>
      )}{" "}
      {id === "p9" && (
        <div className="product-card-discount-tag">
          <p>30% Off</p>
        </div>
      )*/}
      <div
        className="product-card-image-container"
        onClick={handleClick.bind(this, id, title)}
      >
        <img src={imageUrl} />

        <div className="product-card-price-quantity-container">
          <div className="product-card-price-container">
            <p className="product-card-price-whole">{priceSplit[0]}.</p>
            <p className="product-card-price-fraction">{priceSplit[1]}</p>
          </div>
          <p className="product-card-quantity">{quantity}</p>
        </div>
      </div>
      <div className="product-card-title-add-container">
        <h3 onClick={handleClick.bind(this, id, title)}>{title}</h3>
        <div
          className="product-card-add-icon-container"
          onClick={addToCart.bind(this, id, 1)}
        >
          <box-icon name="plus" color="white" />
        </div>
      </div>
    </div>
  );
}
