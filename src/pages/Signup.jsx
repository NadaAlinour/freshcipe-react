import "../assets/stylesheets/form.css";
import { useState } from "react";
import { validateLogin, validateSignup } from "../features/validateForm";

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
    cpasswordErr: "",
  });

  const [serverError, setServerErr] = useState("");

  //console.log(signupForm)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setServerErr("");
    const {
      firstnameError,
      lastnameError,
      emailError,
      passwordError,
      cpasswordError,
      anyErr,
    } = validateSignup(signupForm);

    setError({
      firstNameErr: firstnameError,
      lastNameErr: lastnameError,
      emailErr: emailError,
      passwordErr: passwordError,
      cpasswordErr: cpasswordError,
    });

    if (anyErr == false) {
      console.log("sending request to server");
      // success or server error
      //assume failure for now
      setServerErr("An account is already associated with this email.");
    } else console.log("smthn invalid in the form");
  };

  return (
    <>
      {/*<div className="sign-up-form">*/}
      <div className="signup-form-container">
        <h2>Create your account</h2>
        <br></br>
        <form onSubmit={submitHandler}>
          {serverError && <div className="server-err">{serverError}</div>}

          <div className="group-input1">
            <i className="user"></i>
            <p>First Name:</p>
            <input
              type="text"
              placeholder="Your first name"
              name="firstName"
              value={signupForm.firstName}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.firstNameErr}
            </span>

            <i className="user"></i>
            <p>Last Name:</p>
            <input
              type="text"
              placeholder="Your last name"
              name="lastName"
              value={signupForm.lastName}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.lastNameErr}
            </span>

            <i className="envelope"></i>
            <p>Email:</p>
            <input
              type="Email"
              placeholder="Your email"
              name="email"
              value={signupForm.email}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.emailErr}
            </span>
          </div>
          <div className="group-input2">
            <i className="Lock"></i>
            <p>Password:</p>
            <input
              type="Password"
              placeholder="Your password"
              name="password"
              value={signupForm.password}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.passwordErr}
            </span>

            <i className="Lock"></i>
            <p>Confirm Password:</p>
            <input
              type="Password"
              placeholder="Re-enter password"
              name="cpassword"
              value={signupForm.cpassword}
              onChange={changeHandler}
            />
            <br></br>
            <span style={{ color: "red", fontSize: "13px" }}>
              {error.cpasswordErr}
            </span>

            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
