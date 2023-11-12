import { PRODUCTS } from "../data/productData";
import { useNavigate, useLocation } from "react-router-dom";

export default function CategoryCard({ id, imageUrl, title, prevPath }) {
  const navigate = useNavigate();

  const handleClick = (id, title) => {
    console.log("market card clicked");
    navigate(id + '/' + title, { state: { categoryId: id } });
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