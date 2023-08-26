import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products";
import Recipes from "../Recipes";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import AccountNav from "../../components/AccountNav";
import PageNotFound from "../PageNotFound";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Protected from "./Protected";
import LoginProtected from "./LoginProtected";
import PersonalDetails from "../Account/PersonalDetails";
import DeliveryAddresses from "../Account/DeliveryAddresses";
import PaymentDetails from "../Account/PaymentDetails";
import MyOrders from "../Account/MyOrders";
import Subscriptions from "../Account/Subscriptions";
import Reviews from "../Account/Reviews";
import Settings from "../Account/Settings";
import Recipe from "../Recipe";

const AppRoutes = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="products" element={<Products />}></Route>
      <Route path="recipes" element={<Recipes />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="account/personal-details" element={<AccountNav />}></Route>
      <Route path='personalDetails' exact element={<PersonalDetails />}></Route>
      <Route path="deliveryAddresses" element={<DeliveryAddresses />}></Route>
      <Route path="paymentDetails" element={<PaymentDetails />}></Route>
      <Route path="myOrders" element={<MyOrders />}></Route>
      <Route path="subscriptions" element={<Subscriptions />}></Route>
      <Route path="reviews" element={<Reviews />}></Route>
      <Route path="settings" element={<Settings />}></Route>
      <Route path="recipe" element={<Recipe />}></Route>

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
