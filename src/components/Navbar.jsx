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
                Contact
              </Link>
            </li>
          </div>
          <li className="searchbar-li">
            <Searchbar />
          </li>

          <li>
            <Link>
              <div className="heart-icon" title="Favourites"></div>
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <div className="cart-icon" title="View cart"></div>
            </Link>
          </li>

          <li>
            <div
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => setIsHover(false)}
            >
              <Link to="/login">
                <div className="dropdown-li">
                  <div className="user-circle-container">
                    <box-icon
                      name="user-circle"
                      type="solid"
                      size="45px"
                    ></box-icon>
                  </div>
                </div>
              </Link>
              {isHover && <NavbarDropdown />}
            </div>
          </li>
        </ul>
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
