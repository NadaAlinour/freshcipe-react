import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products";
import Recipes from "../Recipes";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import PageNotFound from "../PageNotFound";


const AppRoutes = () => {
  //i wanted to put them in an array of objects and use map :(
  //login and signup should not be accessed if user is logged in (protected routes)
  //will still do that
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="recipes" element={<Recipes />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="login/signup" element={<Signup />}></Route>
      <Route path="cart" element={<Cart />}></Route>




      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default AppRoutes;
