import "../assets/stylesheets/form.css";

export default function Contact() {
  return (
    <>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form className="contact-container">
          <div>
            <label htmlFor="">Name: </label><br></br>
            <input type="text" id="contact-name" />
          </div>
          <div>
            <label htmlFor="">E-mail: </label><br></br>
            <input type="text" id="contact-email" />
          </div>
          <div>
            <label htmlFor="">Phone: </label><br></br>
            <input type="tel" id="contact-phone" />
          </div>
          <div>
            <label htmlFor="">Message: </label><br></br>
            <textarea rows="4" id="contact-message" />
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
