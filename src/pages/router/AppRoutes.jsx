import { Routes, Route } from "react-router-dom";
import Home from "..//Home";
import ProductCategories from "../ProductCategories";
import ProductDescription from "../ProductDetails";
import Contact from "../Contact";
import Login from "../Login";
import Signup from "../Signup";
import Cart from "../Cart";
import AccountNav from "../../components/AccountNav";
import PageNotFound from "../PageNotFound";
import LoginProtected from "./LoginProtected";
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

import { useSelector } from "react-redux";
import ProductDetails from "../ProductDetails";

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
      <Route path="myOrders" element={<MyOrders />}></Route>
      <Route path="subscriptions" element={<Subscriptions />}></Route>
      <Route path="reviews" element={<Reviews />}></Route>
      <Route path="settings" element={<Settings />}></Route>

      <Route path=":vendorId/:vendor" element={<ProductCategories />}></Route>
      <Route
        path=":vendorId/:vendor/:categoryId/:category"
        element={<ProductCollection />}
      ></Route>

      <Route path="products" element={<ProductCollection />}/>

      {/*<Route path="product-details" element={<ProductDetails/>}/>
      <Route path="productDetails/:product/:productId/:productCategory" element={<ProductDetails/>}></Route>*/}

      <Route
        path=":vendorId/:vendor/:categoryId/:category/:productId/:product"
        element={<ProductDetails />}
      />

      <Route path="products/:productId/:product" element={<ProductDetails />}/>

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

      <Route path="cart" element={<Cart />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
export default AppRoutes;
