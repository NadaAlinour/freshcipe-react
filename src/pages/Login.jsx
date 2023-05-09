import { Link } from "react-router-dom";
import { useState } from "react";
import { validateLogin, mockValidate } from "../features/validateForm";
import "../assets/stylesheets/form.css";
export default function Login() {
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
      //send request to server
      const mockMessage = mockValidate(loginForm.email, loginForm.password);

      if (mockMessage.isValid) {
        console.log("correct data, user is logged in");
        //received user's id, name
        //set authContext stuff
        //const { id, email, name, password } = userMock;
      } else {
        console.log("Invalid login or password. Please try again."); //display this later
        setServerErr(mockMessage.message);
      }
    } else console.log("field is empty/wrong email format etc..");
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2><br></br>
        <form className="login-container" onSubmit={submitHandler}>
          {serverErr && <div className="server-err">{serverErr}</div>}
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
