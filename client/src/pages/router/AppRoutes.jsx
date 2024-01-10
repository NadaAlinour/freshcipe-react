import { Routes, Route } from "react-router-dom";
import Home from "..//Home";
import ProductCategories from "../ProductCategories";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import Favourites from "../Favourites";
import AccountNav from "../../components/AccountNav";
import PageNotFound from "../PageNotFound";
import LoginProtected from "./LoginProtected";
import Protected from "./Protected";
import PersonalDetails from "../Account/PersonalDetails";
import DeliveryAddresses from "../Account/DeliveryAddresses";
import PaymentDetails from "../Account/PaymentDetails";
import MyOrders from "../Account/MyOrders";
import Subscriptions from "../Account/Subscriptions";
import Reviews from "../Account/Reviews";
import Settings from "../Account/Settings";

import Recipes from "../Recipes";
import RecipeDetails from "../RecipeDetails";
import ProductCollection from "../ProductCollection";

import ProductDetails from "../ProductDetails";
import ResetPassword from "../ResetPassword";
import ResetPasswordAfter from "../ResetPasswordAfter";

import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { userToken } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="account/personal-details" element={<AccountNav />}></Route>
      <Route path="personalDetails" exact element={<PersonalDetails />}></Route>
      <Route path="deliveryAddresses" element={<DeliveryAddresses />}></Route>
      <Route path="paymentDetails" element={<PaymentDetails />}></Route>
      <Route path="Reviews" element={<Reviews />}></Route>
      <Route path="subscriptions" element={<Subscriptions />}></Route>
      <Route path="settings" element={<Settings />}></Route>
      <Route
        path="login/reset-password-link"
        element={<ResetPassword />}
      ></Route>
      <Route path="reset-password" element={<ResetPasswordAfter />}></Route>


      <Route path="/:productId/:product" element={<ProductDetails />} />

      <Route
        path="products/:categoryId/:category/:productId/:product"
        element={<ProductDetails />}
      />

      <Route
        path="/products/:categoryId/:category"
        element={<ProductCollection />}
      />

      <Route path="products" element={<ProductCategories />} />


      <Route
        path="products/search"
        element={<ProductCollection />}
        queryParam="text"
      />

      <Route
        path="/products/:categoryId/:title/search"
        element={<ProductCollection />}
        queryParam="text"
      />

      <Route path="recipes" element={<Recipes />}></Route>
      <Route
        path="recipes/:recipeId/:title"
        element={<RecipeDetails />}
      ></Route>

      <Route
        path="login"
        element={
          <LoginProtected isAuth={userToken}>
            <Login />
          </LoginProtected>
        }
      ></Route>

      <Route
        path="signup"
        element={
          <LoginProtected isAuth={userToken}>
            <Signup />
          </LoginProtected>
        }
      ></Route>

      <Route
        path="favourites"
        element={
          <Protected isAuth={localStorage.getItem("token")}>
            <Favourites />
          </Protected>
        }
      ></Route>

      <Route
        path="MyOrders"
        element={
          <Protected isAuth={localStorage.getItem("token")}>
            <MyOrders />
          </Protected>
        }
      ></Route>

      <Route path="cart" element={<Cart />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default AppRoutes;
