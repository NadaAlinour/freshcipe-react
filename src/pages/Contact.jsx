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

  const changeHandler = e => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = e => {
    e.preventDefault();
  }
  return (
    <>
      <div className="form-container">
        <h2>Contact Us</h2><br></br>
        <form className="contact-container" onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Name: </label>
            <br></br>
            <input type="text" id="contact-name"
            name="name"
            value={contactForm.name}
            onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="">E-mail: </label>
            <br></br>
            <input type="text" id="contact-email"
            name="email"
            value={contactForm.email}
            onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="">Phone: </label>
            <br></br>
            <input type="tel" id="contact-phone"
            name="phone"
            value={contactForm.phone}
            onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="">Message: </label>
            <br></br>
            <textarea rows="4" id="contact-message" 
            name="message"
            value={contactForm.message}
            onChange={changeHandler}/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
