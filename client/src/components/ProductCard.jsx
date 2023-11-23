import "boxicons";
import { useNavigate } from "react-router-dom";
import { addItemToCart, updateCartItem } from "../utils/http";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateQuantity } from "../store/cartSlice";

export default function ProductCard({ id, imageUrl, title, price, quantity }) {
  const { userToken, userId, cartId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCart = async (productId, quantity) => {
    // console.log(data);

    // check if item already exists in cart to update it accordingly if so
    console.log(cartItems);
    const isExists = cartItems.find(
      (item) => item.attributes.product.data.id == id
    );

    // update item quantity in cart
    if (userToken && isExists != undefined) {
      const data1 = {
        data: {
          quantity: isExists.attributes.quantity + 1,
        },
      };
      try {
        const response = await updateCartItem(isExists.id, userToken, data1);
        dispatch(updateQuantity({ cartItemId: isExists.id, quantity: isExists.attributes.quantity + 1 }));
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      console.log(cartItems);
    } else if (userToken && isExists == undefined) {
      // add to cart as a new cart item
      try {
        const data2 = {
          data: {
            product: productId,
            quantity: quantity,
            cart: cartId,
          },
        };
        const response = await addItemToCart(data2, userToken);
        console.log("test: ", response.data);
        console.log(response.data);
        dispatch(updateCart({ cart: response.data }));
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("not logged in, cant add items to cart for now");
    }
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
            <p className="product-card-price-whole">{priceSplit[0]}</p>
            <div className="product-card-fraction-currency-container">
              <p className="product-card-price-fraction">.{priceSplit[1]}</p>
              <p className="currency-text">EGP</p>
            </div>
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
