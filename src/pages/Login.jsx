import { Link } from "react-router-dom";
import { useState } from "react";
import { validateLogin } from "../features/validateForm";
import * as userMock from "../data/userMock.json";
import "../assets/stylesheets/form.css";
export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isChecked: false,
  });

  //console.log(loginForm);
  //error state
  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setLoginForm({
          ...loginForm,
          [name]: checked,
        })
      : setLoginForm({
          ...loginForm,
          [name]: value,
        });
  };

  // server validation mock (NOT client-side)
  const mockValidate = () => {
    return (
      loginForm.email === userMock.email &&
      loginForm.password === userMock.password
    );
  };

  /* api calls will be functions imported from /services
    validation functions will be imported from features/validateForm.js
    handling user context change will be done via login function in /features */
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    //call client-side validator
    const errorMessages = validateLogin(email, password);
    //set error messages
    setError({
      //overwrite them all it doesn't matter
      emailErr: errorMessages.emailError,
      passwordErr: errorMessages.passwordError
    })



    

    /*if (isInputValid) {
      //send request to server
      const isUserValid = mockValidate();
      if (isUserValid) {
        console.log("correct data, user is logged in");
      } else {
        console.log("Invalid login or password. Please try again."); //display this later
      }
    } else console.log("field is empty/wrong email format etc..")*/
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-container" onSubmit={submitHandler}>
          <div>
            <label htmlFor="login-email">Email: </label>
            <br></br>
            <input
              type="text"
              id="login-email"
              name="email"
              value={loginForm.email}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>{error.emailErr}</span>
          </div>
          <div>
            <label htmlFor="login-password">Password: </label>
            <br></br>
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginForm.password}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>{error.passwordErr}</span>
          </div>
          <div className="label-checkbox-container">
            <label htmlFor="persist-login-checkbox">Keep me logged in</label>
            <input
              type="checkbox"
              id="persist-login-checkbox"
              name="isChecked"
              checked={loginForm.isChecked}
              onChange={changeHandler}
            />
          </div>
          <div>
            <Link>
              <span>Forgot password?</span>{" "}
              {/* dont forget to actually implement this again */}
            </Link>
          </div>
          <div>
            <button type="submit">Log In</button>
          </div>
          <div>
            Don't have an account? <Link to="Signup">Create one now.</Link>
          </div>
        </form>
      </div>
    </>
  );
}
