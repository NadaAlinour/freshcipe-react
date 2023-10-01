import { Link } from "react-router-dom";
import { useState } from "react";
import { validateLogin, mockValidate } from "../features/validateForm";
import "../assets/stylesheets/form.css";
import LoginIcon from "../assets/images/icons/log-in-regular-24.png";
import "boxicons";
import userData from "../data/userData";


import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

export default function Login() {

  const dispatch = useDispatch();


  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  // for fields red borders
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit clicked");
    setErrMsg("");
    setEmailErr(false);
    setPasswordErr(false);

    const { email, password } = loginForm;
    // client side validation
    const { emailError, passwordError, isNotValidEmail } = validateLogin(
      email,
      password
    );

    console.log(emailError, passwordError, isNotValidEmail);

    if (emailError) {
      setEmailErr(true);
      setErrMsg("Please fill in all the required fields.");
    } else {
      if (isNotValidEmail) {
        setEmailErr(true);
        setErrMsg("Please enter a valid email format");
      }
    }

    if (passwordError) {
      setPasswordErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (emailError || passwordError || isNotValidEmail) {
      console.log("cannot proceed, client side validation errors exist");
    } else {
      // mock server validation
      const mockEmail = "user@gmail.com";
      const mockPassword = "userpass";

      if (email !== mockEmail || password !== mockPassword) {
        console.log("Email or password is incorrect.");
        setErrMsg("Email or password is incorrect.");
        return;
      }

      // actually login
      dispatch(loginUser({token: email}));
      
    }
  };

  return (
    <div className="form-page-container">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-header-container">
          <h1>Login</h1>
        </div>
        {errMsg && <div className="err-box">{errMsg}</div>}
        <div
          className={emailErr ? "input-container err-field" : "input-container"}
        >
          <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            placeholder="Email"
            name="email"
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
