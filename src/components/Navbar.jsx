import { Link, NavLink } from "react-router-dom";
import Searchbar from "./Searchbar";
import Logo from "/src/assets/images/logoipsum.svg";
import UserIcon from "/src/assets/images/user-icon.png";
import "/src/assets/stylesheets/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link to="/"><img src={Logo} alt="logo"></img></Link>
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
                <NavLink to="/login"><img src={UserIcon}></img></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
