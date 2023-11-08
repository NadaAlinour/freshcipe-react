import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/router/AppRoutes";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/authSlice";
import { setFavourites } from "./store/favouritesSlice";
import { fetchFavourites } from "./utils/http";
import "./App.css";
import "/src/assets/stylesheets/home.css";
import "/src/assets/stylesheets/recipe.css";
import "/src/assets/stylesheets/product.css";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const savedToken = localStorage.getItem("token");
  const savedUserId = localStorage.getItem("userId");
  const savedCartId = localStorage.getItem("cartId");
  const savedFavouritesId = localStorage.getItem("favouritesId");
  if (savedToken) {
    dispatch(
      loginUser({
        token: savedToken,
        userId: savedUserId,
        cartId: savedCartId,
        favouritesId: savedFavouritesId,
      })
    );
  }

  useEffect(() => {
    const getFavourites = async () => {
      try {
        const data = await fetchFavourites(savedUserId, savedToken);
        dispatch(
          setFavourites({ newFavourites: data.data[0].attributes.recipes.data })
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (savedToken) getFavourites();
  }, []);

  return (
    <>
      <div className="content-container">
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
