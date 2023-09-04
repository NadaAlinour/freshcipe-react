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

  // for fields red borders
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

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

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("submit clicked");
    setErrMsg("");
    setEmailErr(false);
    setPasswordErr(false);

    const { email, password, isChecked } = loginForm;
    // client side validation
    const { emailError, passwordError, isNotValidEmail } = validateLogin(
      email,
      password
    );

    // console.log(emailError, passwordError, isNotValidEmail);

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

    if (emailErr || passwordErr) {
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
      login(email, password, isChecked);
    }

    /* if (errorsMessages.anyErr === false) {
      //call login from useAuth here
      const mockResult = login(loginForm.email, loginForm.password, loginForm.isChecked);
      setErrMsg(mockResult.message);
    } else console.log("field is empty/wrong email format etc..");*/
  };

  return (
    <>
      <div className="form-container">
        <div className="login-header-container">
          <h3>Login</h3>
        </div>
        <form className="login-container" onSubmit={submitHandler}>
          {errMsg && <div className="err-box">{errMsg}</div>}
          <div>
            <input
              type="text"
              id="login-email"
              placeholder="Email"
              name="email"
              value={loginForm.email}
              onChange={changeHandler}
              className={emailErr ? "err-field" : "login-input"}
            />
          </div>
          <div>
            <input
              type="password"
              id="login-password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={changeHandler}
              className={passwordErr ? "err-field" : "login-input"}
            />
          </div>
          <div className="label-checkbox-container">
            <label
              htmlFor="persist-login-checkbox"
              className="keep-me-loggedin"
            >
              Keep me logged in
            </label>
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
            <button type="submit">Login</button>
          </div>
          <div>
            Don't have an account? <Link to="Signup">Create one now.</Link>
          </div>
        </form>
      </div>
    </>
  );
}
