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
        <form>
          <label htmlFor="login-email">E-mail: </label>
          <input type="text" id="login-email" />
          <label htmlFor="login-password">Password: </label>
          <input type="password" id="login-password" />
          <label htmlFor="persist-login-checkbox">Keep me logged in</label>
          <input type="checkbox" id="persist-login-checkbox" />
          <Link>
            <span>forgot password?</span> {/* dont forget to actually implement this again */}
          </Link>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
