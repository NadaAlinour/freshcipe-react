import MarketCard from "../components/MarketCard";
import { useEffect, useState } from "react";
import { fetchVendors } from "../utils/http";

export default function Home() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const getVendors = async () => {
      try {
        const data = await fetchVendors();
        setVendors(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVendors();
  }, []);

  return (
    <div className="home-page-container">
      <div className="home-page-promo-container">
        <h2>Promos</h2>
      </div>
      <div className="market-card-list-container">
        <ul>
          {vendors.map((vendor) => {
            return (
              <li key={vendor.id}>
                <MarketCard
                  id={vendor.id}
                  title={vendor.username}
                  image={vendor.image.formats.small.url}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="home-page-products-container">some products here</div>

      <div className="home-page-recipes-container">some recipes here</div>
    </div>
  );
}
