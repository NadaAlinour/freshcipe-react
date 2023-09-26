import "../assets/stylesheets/form.css";
import { useState } from "react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "", //change to number i guess? phone format idk
    message: "",
  });

  console.log(contactForm);

  const changeHandler = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="form-container" onSubmit={submitHandler}>
        <div className="form-header-container">
          <h1>Contact</h1>
        </div>
        <div className="input-container">
          <box-icon name="envelope" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="form-input"
          />
        </div>
        <div className="input-container">
          <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
          />
        </div>

        <div className="input-container">
          <box-icon name="phone" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-input"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message..."
            rows="4"
            className="form-input"
          ></textarea>
        </div>
        
        <button type="submit" className="form-btn">
          <p>Submit</p>
        </button>
      </form>
    </>
  );
}
