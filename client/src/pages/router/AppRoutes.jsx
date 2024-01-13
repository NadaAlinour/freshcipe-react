import { Routes, Route } from "react-router-dom";
import Home from "..//Home";
import ProductCategories from "../ProductCategories";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import Favourites from "../Favourites";
import PageNotFound from "../PageNotFound";
import LoginProtected from "./LoginProtected";
import Protected from "./Protected";
import PersonalDetails from "../Account/PersonalDetails";
import MyOrders from "../Account/MyOrders";
import Reviews from "../Account/Reviews";

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
      <Route path="Reviews" element={<Reviews />}></Route>
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
          <Protected isAuth={userToken}>
            <Favourites />
          </Protected>
        }
      ></Route>


      <Route
        path="personalDetails"
        element={
          <Protected isAuth={userToken}>
            <PersonalDetails />
          </Protected>
        }
      ></Route>

      <Route
        path="MyOrders"
        element={
          <Protected isAuth={userToken}>
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
