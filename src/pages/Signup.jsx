import "../assets/stylesheets/form.css";

export default function Signup() {
  return (
    <>
      {/*<div className="sign-up-form">*/}
      <div className="form-container">
        <h2>Sign Up</h2>
        <form>
          <h3>Create your account</h3>
          <div className="group-input">
            <i className="user"></i>
            <p>User Name:</p>
            <input type="text" placeholder="Name" />
          </div>
          <div className="group-input">
            <i className="envelope"></i>
            <p>Email:</p>
            <input type="Email" placeholder="Email" />
          </div>
          <div className="group-input">
            <i className="Lock"></i>
            <p>Password:</p>
            <input type="Password" placeholder="Password" />
          </div>
          <div className="group-input">
            <i className="Lock"></i>
            <p>Confirm Password:</p>
            <input type="Password" placeholder="Password" />
          </div>
          <div>
          <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
  );
}
