import { useState } from "react";
import { useLocation } from "react-router-dom";
import { resetPassword } from "../utils/http";

export default function ResetPasswordAfter() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // get code from url
  const url = window.location.href;
  const code = url.split("=")[1];
  console.log(code);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      code: code,
      password: password,
      passwordConfirmation: confirmPassword,
    };

    try {
      const data = await resetPassword(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-page-container reset-password-page">
      <form className="form-container reset-password-after-form">
        <div className="form-header-container">
          <p>Enter your new password</p>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="New password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Confirm password"
            className="form-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <button className="solid-button" onClick={submitHandler}>
          Reset Password
        </button>
      </form>
    </div>
  );
}
