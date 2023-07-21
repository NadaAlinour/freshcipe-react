import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import Searchbar from "./Searchbar";
//import Logo from "/src/assets/images/freshcipe-logo.png";
import UserIcon from "/src/assets/images/user.png";
import CartIcon from "/src/assets/images/cart-logo.png";
import "/src/assets/stylesheets/navbar.css";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  //just temporary for testing enabling and disabling stuff based on login
  //realistically it's based on authContext isLoggedIn
  //protect routes later
  const loggedIn = false;
  const { logout } = useAuth();
  const { authUser, setAuthUser } = useContext(AuthContext);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          {authUser && (
            <button type="button" onClick={logout}>
              logout
            </button>
          )}
          <div className="logo">
            <Link to="/">
              {/*<img src={Logo} alt="logo" title="Go to home page"></img>*/}
            </Link>

          </div>
          <div>
            <Searchbar />
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                {/* make hamburger menu for smaller screens */}
                {/* make dropdown menu (what's the difference) for more options */}
                <div className="user-dropdown">
                  <Link to="/login">
                    <img className="user-icon" src={UserIcon}></img>
                  </Link>
                  <div className="user-dropdown-list">
                    <Link to="account/personal-details">My Account</Link>
                    <Link>My Orders</Link>
                    <Link>Settings</Link>
                    {loggedIn ? (
                      <Link to="login">Log In</Link>
                    ) : (
                      <Link to="signup">Sign Up</Link>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <Link to="cart">
                  <img
                    className="cart-icon"
                    src={CartIcon}
                    title="View cart"
                    width="25px"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
