import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/router/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store/authSlice";
import { setFavourites } from "./store/favouritesSlice";
import { setCart} from "./store/cartSlice";
import { fetchFavourites, getCartWithItems } from "./utils/http";
import "./App.css";
import "./assets/stylesheets/print-styles.css";
import "/src/assets/stylesheets/home.css";
import "/src/assets/stylesheets/recipe.css";
import "/src/assets/stylesheets/product.css";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

function App() {
  const { userToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const savedToken = localStorage.getItem("token");
  const savedUserId = localStorage.getItem("userId");
  const savedUsername = localStorage.getItem("username");
  const savedCartId = localStorage.getItem("cartId");
  const savedFavouritesId = localStorage.getItem("favouritesId");
  useEffect(() => {
    if (savedToken) {
      dispatch(
        loginUser({
          token: savedToken,
          userId: savedUserId,
          username: savedUsername,
          cartId: savedCartId,
          favouritesId: savedFavouritesId,
        })
      );
    }
  }, []);
  

  useEffect(() => {
    const fetchCartWithItems = async () => {
      try {
        const data = await getCartWithItems(savedUserId, savedToken);
        //console.log(data.data[0].attributes.cart_items.data)
        dispatch(setCart({ cart: data.data[0].attributes.cart_items.data }));
      } catch (error) {
        console.log(error);
      }
    };

    /*const setLocalCartItems = () => {
      const localCart = localStorage.getItem('localCart');
      dispatch(setLocalCart({localCart: localCart}));
      console.log('local cart has been set in state')
    }*/

    if (savedToken) fetchCartWithItems();
    //else setLocalCartItems();
  }, [userToken]);

  useEffect(() => {
    // set state with localcart
    if (!userToken) {

      let localCartItems;
      if (JSON.parse(localStorage.getItem('localcart'))) {
        localCartItems = JSON.parse(localStorage.getItem('localcart'));
        dispatch(setCart({ cart: localCartItems }));
      } else localCartItems = []
     
    }
   
  }, [userToken])

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
  }, [userToken]);

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
