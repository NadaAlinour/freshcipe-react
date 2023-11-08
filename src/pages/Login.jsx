import { Link } from "react-router-dom";
import { useState } from "react";
import { validateLogin } from "../features/validateForm";
import "../assets/stylesheets/form.css";
import LoginIcon from "../assets/images/icons/log-in-regular-24.png";
import "boxicons";
import {
  login,
  getCartWithItems,
  createCart,
  createFavourites,
  fetchFavourites,
} from "../utils/http";

import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [loginForm, setLoginForm] = useState({
    identifier: "",
    password: "",
  });

  // for fields red borders
  const [identifierErr, setIdentifierErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

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

    if (identifierError || passwordError) {
      console.log("cannot proceed, client side validation errors exist");
    } else {
      try {
        const response = await login(loginForm);
        //console.log(response);

        // check if cart exists
        const response2 = await getCartWithItems(
          response.user.id,
          response.jwt
        );

        console.log(response2);
        cartId = response2.data.id;

        if (response2.data.length === 0) {
          // create cart
          const response3 = await createCart(response.user.id, response.jwt);
          cartId = response3.data.id;
        } else {
          // get cart id
          console.log("cart id: ", response2.data[0].id);
          cartId = response2.data[0].id;
        }

        const response4 = await fetchFavourites(response.user.id, response.jwt);
        console.log(response4);
        if (response4.data.length === 0) {
          // create favourites
          const response5 = await createFavourites(
            response.user.id,
            response.jwt
          );
          favouritesId = response5.data[0].id;
          console.log(response5);
        } else {
          console.log("user already has favourites");
          favouritesId = response4.data[0].id;
        }
        dispatch(
          loginUser({
            token: response.jwt,
            userId: response.user.id,
            cartId: cartId,
            favouritesId: favouritesId,
          })
        );
      } catch (error) {
        console.log(error);
        setErrMsg(error.response.data.error.message);
        return;
      }

      // console.log('user id is: ', userId)
      // console.log('user token is: ', userToken)
    }
  };

  return (
    <div className="form-page-container">
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
