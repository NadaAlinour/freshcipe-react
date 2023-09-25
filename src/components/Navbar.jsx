import "boxicons";
import "../assets/stylesheets/navbar.css";
import Logo from "../assets/images/fresh-logo.png";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";

import Searchbar from "./Searchbar";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  // navbar for login/signup screens
  let navbar = (
    <div>
      <div className="main-navbar">
        <ul>
          <li>
            <Link to="/" className="logo-header-link">
              <div className="logo-header-container">
                <img src={Logo}></img>
              </div>
            </Link>
          </li>
          <div className="nav-links-container">
            <li>
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </div>
          <li className="searchbar-li">
            <Searchbar />
          </li>

          <li>
            <Link>
              <box-icon
                name="heart"
                size="30px"
                title="Favourited"
                animation="tada-hover"
              ></box-icon>
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <box-icon
                name="cart"
                size="30px"
                title="View cart"
                animation="tada-hover"
              ></box-icon>
            </Link>
          </li>

          <li>
            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <Link to="/login">
                <div className="dropdown-li">
                  <box-icon name="user" size="30px"></box-icon>
                </div>
              </Link>
              {isHover && <NavbarDropdown />}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  //navbar otherwise
  // if route is not login or login/signup (which i wanna change btw idk)
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/signup") {
    navbar = (
      <div className="simple-navbar">
        <Link className="back-link link-text" onClick={handleBackClick}>
          <box-icon name="chevron-left" color="#549ec9" size="20px"></box-icon>
          <p>Back</p>
        </Link>
        <Link to="/" className="logo-header-link">
          <div className="logo-header-container">
            <img src={Logo}></img>
          </div>
        </Link>
      </div>
    );
  }

  return <nav>{navbar}</nav>;
}
