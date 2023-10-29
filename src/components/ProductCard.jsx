import "boxicons";
import { useNavigate } from "react-router-dom";
export default function ProductCard({ id, imageUrl, title, price, quantity }) {
  const stringPrice = price.toString();
  let priceSplit = stringPrice.split(".");
  //console.log(priceSplit);
  const navigate = useNavigate();
  const handleClick = (id, title) => {
    navigate(id + '/' + title);
  };

  return (
    <div className="product-card-container" onClick={handleClick.bind(this, id, title)}>
      {id === "p1" && (
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
      )}
      <div className="product-card-image-container">
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
        <h3>{title}</h3>
        <div className="product-card-add-icon-container">
          <box-icon name="plus" color="white" />
        </div>
      </div>
    </div>
  );
}
