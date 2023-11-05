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
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  const dispatch = useDispatch();
  const savedToken = localStorage.getItem("token");
  if (savedToken) dispatch(loginUser({ token: savedToken }));

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
