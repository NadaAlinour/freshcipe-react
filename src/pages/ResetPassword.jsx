import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { sendPasswordResetLink } from "../utils/http";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [changeContent, setChangeContent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await sendPasswordResetLink(email);
      console.log(data);
      setChangeContent(true);
    } catch (error) {
      console.log(error);
    }
  };

  let content = (
    <form className="form-container reset-password-form">
      <div className="form-header-container">
        <p>Reset Password</p>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Your email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="reset-password-buttons-container">
        <button className="solid-button" onClick={handleSubmit}>
          Send me link
        </button>
        <button className="border-button" onClick={() => navigate("/login")}>
          Back to login
        </button>
      </div>
    </form>
  );

  return (
    <div className="form-page-container reset-password-page">
      {changeContent ? (
        <form className="form-container reset-password-form">
          <div className="form-header-container">
            <p>Reset Password</p>
            <p className="reset-password-text">
              If the provided email is a registered email on Freshcipe, you will
              receive an email with further instructions on how to reset your
              password.
            </p>
          </div>
          <button className="border-button" onClick={() => navigate("/login")}>
            Back to login
          </button>
        </form>
      ) : (
        content
      )}
    </div>
  );
}
