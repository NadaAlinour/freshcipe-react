export default function Contact() {
  return (
    <>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form className="contact-container">
          <div>
            <label htmlFor="">Name: </label>
            <input type="text" id="contact-name" />
          </div>
          <div>
            <label htmlFor="">E-mail: </label>
            <input type="text" id="contact-email" />
          </div>
          <div>
            <label htmlFor="">Phone: </label>
            <input type="tel" id="contact-phone" />
          </div>
          <div>
            <label htmlFor="">Message: </label>
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
