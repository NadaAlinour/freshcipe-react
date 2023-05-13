import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { validateLogin, mockValidate } from "../features/validateForm";
import { useAuth } from "../hooks/useAuth";
import "../assets/stylesheets/form.css";
import userData from "../data/userData";
import { AuthContext } from "../context/AuthContext";
export default function Login() {
  const { user, login, logout } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    isChecked: false,
  });

  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const [serverErr, setServerErr] = useState("");

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

  /* api calls will be functions imported from /services
    validation functions will be imported from features/validateForm.js
    handling user context change will be done via login function in /features */
  const submitHandler = (e) => {
    e.preventDefault();
    setServerErr("");
    const { email, password } = loginForm;
    //call client-side validator
    const errorMessages = validateLogin(email, password);
    //set error messages
    setError({
      //overwrite them all it doesn't matter
      emailErr: errorMessages.emailError,
      passwordErr: errorMessages.passwordError,
    });

    if (errorMessages.anyErr === false) {
      //call login from useAuth here
      const mockResult = login(loginForm.email, loginForm.password, loginForm.isChecked);
      setServerErr(mockResult.message);
    } else console.log("field is empty/wrong email format etc..");
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <br></br>
        <form className="login-container" onSubmit={submitHandler}>
          {serverErr && <div className="server-err">{serverErr}</div>}
          <div>
            <label htmlFor="login-email">Email: </label>
            <br></br>
            <input
              type="text"
              id="login-email"
              placeholder="Email"
              name="email"
              value={loginForm.email}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.emailErr}
            </span>
          </div>
          <div>
            <label htmlFor="login-password">Password: </label>
            <br></br>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.passwordErr}
            </span>
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
