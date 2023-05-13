import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products";
import Recipes from "../Recipes";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import PageNotFound from "../PageNotFound";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Protected from "./Protected";
import LoginProtected from "./loginProtected";

const AppRoutes = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="recipes" element={<Recipes />}></Route>

      <Route path="contact" element={<Contact />}></Route>

      <Route
        path="login"
        element={
          <LoginProtected isAuth={authUser}>
            <Login />
          </LoginProtected>
        }
      ></Route>

      <Route
        path="signup"
        element={
          <LoginProtected isAuth={authUser}>
            <Signup />
          </LoginProtected>
        }
      ></Route>
      <Route
        path="login/signup"
        element={
          <LoginProtected isAuth={authUser}>
            <Signup />
          </LoginProtected>
        }
      ></Route>

      <Route path="cart" element={<Cart />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default AppRoutes;
