import { useNavigate } from "react-router-dom";

export default function MarketCard({ id, title, image }) {
  const navigate = useNavigate();

  const handleClick = (id, title) => {
    console.log("market card clicked");
    navigate('/' + id + '/' + title, { state: { vendorId: id } });
  };


  return (
    <div className="market-card-container" onClick={handleClick.bind(this, id, title)}>
      <div className="market-card-image-container">
        <img src={image}></img>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
