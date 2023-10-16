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
    <div className="form-page-container" id="contact-form-page-el">
      <div className="contact-form-text-container" id="contact-form-text-el">
        <p className="contact-form-text-header">Anything on your mind?</p>
        <p className="contact-form-text-content"> Contact us now and get a response from our team within 72 hours.</p>
      </div>
      <form
        className="form-container"
        onSubmit={submitHandler}
        id="contact-form-el"
      >
        <div className="form-header-container">
          <p>Contact</p>
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

        <button type="submit" className="form-btn contact-submit-btn">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
