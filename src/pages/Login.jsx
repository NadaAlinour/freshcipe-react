import { Link } from "react-router-dom";
import { useState } from "react";
import { validateLogin, mockValidate } from "../features/validateForm";
import "../assets/stylesheets/form.css";
import LoginIcon from "../assets/images/icons/log-in-regular-24.png";
import "boxicons";
import userData from "../data/userData";
import { login, getCartWithItems, createCart } from "../utils/http";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, setCartId } from "../store/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const { userToken,  userId} = useSelector((state) => state.auth);

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

    if (identifierError || passwordError) {
      console.log("cannot proceed, client side validation errors exist");
    } else {
      // mock server validation
      /*const mockEmail = "user@gmail.com";
      const mockPassword = "userpass";

      if (email !== mockEmail || password !== mockPassword) {
        console.log("Email or password is incorrect.");
        setErrMsg("Email or password is incorrect.");
        return;
      }*/

      try {
        const response = await login(loginForm);
        console.log(response);
        dispatch(loginUser({ token: response.jwt, id:response.user.id }));
      } catch (error) {
        console.log(error);
        setErrMsg(error.response.data.error.message);
        return;
      }

      console.log(userId);

      try {
        const response = await getCartWithItems(userId, userToken);
        console.log(response);
       /* if (response.data.length == 0) {
          try {
            const response = await createCart(userId, userToken);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }
        else {
          dispatch(setCartId({id: response.data[0].id }));
        }*/
      } catch (error) {
        console.log(error);
      }
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
          <Link className="link-text">Forgot your password?</Link>
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
