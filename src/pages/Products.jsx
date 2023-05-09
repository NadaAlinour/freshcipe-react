import ProductCard from "../components/ProductCard";
import Rice from "../assets/images/rice.png";
import Cereal from "../assets/images/cereal.png";
import Tomato from "../assets/images/tomatoes.jpg";

export default function Products() {
  // use array.map in the future to render the products
  return (
    <>
      <h1 className="placeholder-text">this is products</h1>
      {/* <ul className="products-list">
        <li>
          <ProductCard image={Rice} title="rice" price="50.0" />
        </li>
        <li>
          <ProductCard image={Tomato} title="tomato" price="15.0" />
        </li>
        <li>
          <ProductCard image={Cereal} title="cereal" price="45.0" />
        </li>
  </ul> */}
    </>
  );
}
