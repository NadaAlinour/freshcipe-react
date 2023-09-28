export default function CategoryCard({imageUrl, title}) {
  return (
    <div className="category-card-container">
      <img src={imageUrl}></img>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
