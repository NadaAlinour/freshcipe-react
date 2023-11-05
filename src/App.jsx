import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/router/AppRoutes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/authSlice";
import "./App.css";
import "/src/assets/stylesheets/home.css";
import "/src/assets/stylesheets/recipe.css";
import "/src/assets/stylesheets/product.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useDispatch();
  const savedToken = localStorage.getItem("token");
  const savedUserId = localStorage.getItem("userId");
  const savedCartId = localStorage.getItem("cartId");
  if (savedToken)
    dispatch(
      loginUser({ token: savedToken, id: savedUserId, cartId: savedCartId })
    );

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
