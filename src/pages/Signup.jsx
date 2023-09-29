import "../assets/stylesheets/form.css";
import "boxicons";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { validateSignup } from "../features/validateForm";

export default function Signup() {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

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
    setErrMsg("");
    setFirstNameErr(false);
    setLastNameErr(false);
    setEmailErr(false);
    setPhoneErr(false);
    setPasswordErr(false);

    // client-side form validation
    const { firstName, lastName, email, phone, password } = signupForm;

    const {
      firstNameError,
      lastNameError,
      emailError,
      phoneError,
      passwordError,
      isNotValidEmail,
    } = validateSignup(firstName, lastName, email, phone, password);

    if (firstNameError) {
      setFirstNameErr(true);
      setErrMsg("Please fill in all the required fields.");
    }

    if (lastNameError) {
      setLastNameErr(true);
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
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      passwordError ||
      isNotValidEmail
    ) {
      console.log("cannot proceed, client side validation errors exist");
    } else {
      // mock server validation
      console.log("sending request to server");
      // mock is checking for duplicate emails
      const pastEmail = "email@gmail.com";
      if (email === pastEmail) {
        setErrMsg("Email already in use.");
        return;
      }

      console.log("successful signup, navigate to login page i guess");
      navigate('/login')
    }
  };

  return (
    <div className="form-page-container">
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-header-container">
          <h1>Signup</h1>
        </div>

        {errMsg && <div className="err-box">{errMsg}</div>}

        <div className="signup-name-fields-container">
          <div className="input-container first-name-container">
            <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              value={signupForm.firstName}
              onChange={changeHandler}
              className="form-input"
            />
          </div>

          <div className="input-container last-name-container">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={signupForm.lastName}
              onChange={changeHandler}
              className="form-input"
            />
          </div>
        </div>

        <div className="input-container">
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

        <div className="input-container">
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

        <div className="input-container">
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
