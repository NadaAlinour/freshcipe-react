import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { validateLogin } from "../features/validateForm";
import Overlay from "../components/Overlay";
import "../assets/stylesheets/form.css";
import LoginIcon from "../assets/images/icons/log-in-regular-24.png";
import AddCart from "../assets/images/addcart.png";

import "boxicons";
import {
  login,
  getCartWithItems,
  createCart,
  createFavourites,
  fetchFavourites,
  addItemToCart
} from "../utils/http";

import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    identifier: "",
    password: "",
  });

  const [isOverlayShowing, setIsOverlayShowing] = useState(false);

  // for fields red borders
  const [identifierErr, setIdentifierErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const handleOverlayStyle = () => {
      if (isOverlayShowing) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // Call the function when the component mounts or when isOverlayActive changes
    handleOverlayStyle();

    // Cleanup function to remove the style when the component is unmounted
    return () => {
      document.body.style.overflow = ""; // Remove the style to enable scrolling
    };
  }, [isOverlayShowing]); // Run the effect when isOverlayActive changes

  const handleOverlay = () => {
    setIsOverlayShowing(!isOverlayShowing);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    console.log("submit clicked");
    setErrMsg("");
    setIdentifierErr(false);
    setPasswordErr(false);

    const { identifier, password } = loginForm;
    // client side validation
    const { identifierError, passwordError } = validateLogin(
      identifier,
      password
    );

    console.log(identifierError, passwordError);

    if (identifierError) {
      setIdentifierErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (passwordError) {
      setPasswordErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    let cartId = "";
    let favouritesId = "";
    let products = [];
    let userId = '';

    if (identifierError || passwordError) {
      console.log("cannot proceed, client side validation errors exist");
    } else {
      try {
        console.log(loginForm)
        const response = await login(loginForm);
        userId = response.user.id;
        if (localStorage.getItem("localcart")) {
          // merge carts
          let localCartItems = JSON.parse(localStorage.getItem("localcart"));
          console.log(localCartItems);
          products = localCartItems.map((item) => {
            return {
              id: item.attributes.product.data.id,
              quantity: item.attributes.quantity,
            };
          });
          console.log(products);
        }
        //console.log(response);
        // check if cart exists
           const response2 = await getCartWithItems(
            response.user.id,
            response.jwt
          );


          if (response2.data.length === 0) {
            // create cart
            const response3 = await createCart(response.user.id, response.jwt);
            cartId = response3.data.id;
          } else {
            // get cart id
            console.log("cart id: ", response2.data[0].id);
            cartId = response2.data[0].id;
          }

          products.forEach(async product => {
            try {
              const data2 = {
                data: {
                  product: product.id,
                  quantity: product.quantity,
                  cart: cartId,
                },
              };

              const response5 = await addItemToCart(data2, response.jwt);
              console.log("test: ", response5.data);
            } catch (error) {
              console.log(error);
            }
          })
          


        const response4 = await fetchFavourites(
            userId,
            response.jwt
          );
          console.log(response4);
          if (response4.data.length === 0) {
            // create favourites
            const response5 = await createFavourites(
              response.user.id,
              response.jwt
            );
            console.log('RESPONSE 5: ', response5);
            favouritesId = response5.data.id;
            console.log(response5);
          } else {
            console.log("user already has favourites");
            favouritesId = response4.data[0].id;
          }
          dispatch(
            loginUser({
              token: response.jwt,
              userId: response.user.id,
              username: response.user.username,
              cartId: cartId,
              favouritesId: favouritesId,
            })
          );  

          
        
      } catch (error) {
        console.log(error);
        setErrMsg(error.response);
        return;
      }

      // console.log('user id is: ', userId)
      // console.log('user token is: ', userToken)
    }
  };

  return (
    <div className="form-page-container">
      {isOverlayShowing && (
        <Overlay
          onClose={handleOverlay}
          title="Merge Carts"
          description="Would you like to merge local cart with your remote cart?"
          icon={AddCart}
        />
      )}
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-header-container">
          <p>Login</p>
        </div>
        {errMsg && <div className="err-box">{errMsg}</div>}
        <div
          className={
            identifierErr ? "input-container err-field" : "input-container"
          }
        >
          <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            placeholder="Email or username"
            name="identifier"
            value={loginForm.email}
            onChange={changeHandler}
            className="form-input"
          />
        </div>
        <div
          className={
            passwordErr ? "input-container err-field" : "input-container"
          }
        >
          <box-icon name="lock-alt" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={changeHandler}
            className="form-input"
          />
        </div>

        <div className="forgot-password-container">
          <Link className="link-text" to="reset-password-link">
            Forgot your password?
          </Link>
        </div>
        <button type="submit" className="form-btn">
          <p>Login</p>
          <img src={LoginIcon}></img>
        </button>

        <div>
          Don't have an account?{" "}
          <Link to="/signup" className="link-text">
            Create one now.
          </Link>
        </div>
      </form>
    </div>
  );
}
