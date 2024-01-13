import "../assets/stylesheets/form.css";
import "boxicons";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateSignup } from "../features/validateForm";

import { signup } from "../utils/http";

export default function Signup() {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [usernameErr, setUsernameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");


  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setUsernameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
    setPasswordErr(false);

    // client-side form validation
    const { username, email, phone, password } = signupForm;

    const {
      usernameError,
      emailError,
      phoneError,
      passwordError,
      isNotValidEmail,
    } = validateSignup(username, email, phone, password);

    if (usernameError) {
      setUsernameErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (emailError) {
      setEmailErr(true);
      setErrMsg("Please fill in all the required fields.");
    } else {
      if (isNotValidEmail) {
        setEmailErr(true);
        setErrMsg("Please enter a valid email format.");
      }
    }

    if (phoneError) {
      setPhoneErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (passwordError) {
      setPasswordErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (
      usernameError ||
      emailError ||
      phoneError ||
      passwordError ||
      isNotValidEmail
    ) {
    } else {
      try {
        const response = await signup(signupForm);
        navigate("/login");
      } catch (error) {
        console.log(error.response.data.error.message);
        setErrMsg(error.response.data.error.message);
        return;
      }
    }
  };

  return (
    <div className="form-page-container">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-header-container">
          <p>Signup</p>
        </div>

        {errMsg && <div className="err-box">{errMsg}</div>}

        <div
          className={
            usernameErr ? "input-container err-field" : "input-container"
          }
        >
          <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={signupForm.username}
            onChange={changeHandler}
            className="form-input"
          />
        </div>

        <div
          className={emailErr ? "input-container err-field" : "input-container"}
        >
          <box-icon name="envelope" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            value={signupForm.emailName}
            onChange={changeHandler}
            placeholder="Email"
            name="email"
            className="form-input"
          />
        </div>

        <div
          className={phoneErr ? "input-container err-field" : "input-container"}
        >
          <box-icon name="phone" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={signupForm.phone}
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
            value={signupForm.password}
            onChange={changeHandler}
            placeholder="Password"
            className="form-input"
          />
        </div>

        <button
          type="submit"
          className="form-btn"
          style={{ justifyContent: "center", marginTop: "15px" }}
        >
          <p>Signup</p>
        </button>

        <div>
          Already have an account?{" "}
          <Link to="/login" className="link-text">
            Login now.
          </Link>
        </div>
      </form>
    </div>
  );
}
