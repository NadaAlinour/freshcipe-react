import "boxicons";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../utils/http";
import { useSelector } from "react-redux";

export default function ProductCard({ id, imageUrl, title, price, quantity }) {
  const { userToken, userId, cartId } = useSelector((state) => state.auth); // cart id not saved in state for some reason

  // temporarily
  const cartTemp = localStorage.getItem("cartId");
  console.log(userToken, userId, cartTemp);

  const addToCart = async (productId, quantity) => {
    const data = {
      data: {
        product: productId,
        quantity: quantity,
        cart: cartTemp,
      },
    };
    console.log(data);
    try {
      const response = await addItemToCart(data, userToken);
      console.log(response);
    } catch (error) {
      console.log(error);
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
