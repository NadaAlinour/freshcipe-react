import { PRODUCTS } from "../data/productData";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ id, imageUrl, title }) {
  const navigate = useNavigate();
  const handleClick = (id, title) => {
    const productCollection = PRODUCTS.filter(
      (product) => product.productCategory === id
    );
    navigate("/products/" + id + '/' + title, { state: { products: productCollection } });
  };

  return (
    <div
      className="category-card-container"
      onClick={handleClick.bind(this, id, title)}
    >
      <img src={imageUrl}></img>
      <div className="category-card-header-container">
        <h3>{title}</h3>
      </div>
    </div>
  );
}
