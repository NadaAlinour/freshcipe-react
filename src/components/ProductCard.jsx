import 'boxicons';
export default function ProductCard({ id, imageUrl, title, price, quantity }) {
  return (
    <div className="product-card-container">
      <img src={imageUrl}></img>
      <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
      <span>
        <p>$ {price}</p>
        <p>{quantity}g</p>
        <div><box-icon name="plus" color="#549ec9"></box-icon></div>
      </span>
    </div>
  );
}
