import MarketCard from "../components/MarketCard";
import { useEffect, useState } from "react";
import { fetchVendors } from "../utils/http";

export default function Home() {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVendors = async () => {
      try {
        const data = await fetchVendors();
        setVendors(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVendors();
  }, [isLoading]);

  return (
    <div className="home-page-container">
      <div className="market-card-list-container">
        <ul>
        {!isLoading &&
          vendors.map((vendor) => {
            return (
              <li key={vendor.id}>
                <MarketCard
                  id={vendor.id}
                  title={vendor.username}
                  image={vendor.image ?
                   vendor.image.url : ""
                   }
                />
              </li>
            );
          })}
        </ul>
      </div>


    </div>
  );
}
