import { Link } from "react-router-dom";
export default function Login() {
  //state stuff

  //handle change stuff

  //handle submit stuff
  /* api calls will be functions imported from /services
    validation functions will be imported from features/validateForm.js
    handling user context change will be done via login function in /features */

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-container">
          <div>
            <label htmlFor="login-email">E-mail: </label>
            <input type="text" id="login-email" />
          </div>
          <div>
            <label htmlFor="login-password">Password: </label>
            <input type="password" id="login-password" />
          </div>
          <div>
            <label htmlFor="persist-login-checkbox">Keep me logged in</label>
            <input type="checkbox" id="persist-login-checkbox" />
          </div>
          <div>
            <Link>
              <span>forgot password?</span>{" "}
              {/* dont forget to actually implement this again */}
            </Link>
          </div>
          <button type="submit">Login</button>
          {/*<span>don't have an account yet?<Link to="signup">sign up now</Link></span>*/}
        </form>
      </div>
    </>
  );
}
