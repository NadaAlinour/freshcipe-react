import CategoryCard from "../components/CategoryCard";
import categoryData from "../data/categoryData"

export default function Products() {
  // use array.map in the future to render the products
  //this page is for showing the different categories
  const categoryCards = categoryData.map(card => {
    return <li><CategoryCard title= {card.title}/></li>
  })
  return (
    <>
      <div className="product-category-container">
          <ul>
            {categoryCards}
          </ul>
      </div>
    </>
  );
}
