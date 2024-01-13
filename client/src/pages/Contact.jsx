import "../assets/stylesheets/form.css";
import { useState } from "react";
import { contact } from "../utils/http";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    message: "",
    mobile: "", //change to number i guess? mobile format idk
  });

 // console.log(contactForm);

  const changeHandler = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
    const response = await contact(contactForm);
    //console.log(response);
    } catch (error) {
      console.log(error.response.data.error.message)
    }
  };
  return (
    <div className="form-page-container" id="contact-form-page-el">
      <div className="contact-form-text-container" id="contact-form-text-el">
        <p className="contact-form-text-header">Anything on your mind?</p>
        <p className="contact-form-text-content">
          {" "}
          Contact us now and get a response from our team within 72 hours.
        </p>
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
            value={contactForm.email}
            onChange={changeHandler}
          />
        </div>
        <div className="input-container">
          <box-icon name="user" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-input"
            value={contactForm.name}
            onChange={changeHandler}
          />
        </div>

        <div className="input-container">
          <box-icon name="mobile" color="rgba(0,0,0,.45)"></box-icon>
          <input
            type="text"
            name="mobile"
            placeholder="mobile"
            className="form-input"
            value={contactForm.mobile}
            onChange={changeHandler}
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message..."
            rows="4"
            className="form-input"
            value={contactForm.message}
            onChange={changeHandler}
          ></textarea>
        </div>

        <button type="submit" className="form-btn contact-submit-btn">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
