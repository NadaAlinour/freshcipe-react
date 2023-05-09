import "../assets/stylesheets/products.css";

export default function ProductCard(props) {
  const {image, title, price} = props;
  return (
    <>
      <div className="product-card">
        <img src={image} className="product-card--img" />
        <div className="product-card--info">
          <p className="product-card--title">{title}</p>
          <span className="product-card--price">${price}</span>
        </div>
        <div className="product-card--add">
          <button type="button" onClick={() => {console.log("im clicked add me to cart")}}>+</button>
        </div>
      </div>
    </>
  );
}
