import "boxicons";
import "../assets/stylesheets/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import FreshcipeLogo from "./FreshcipeLogo";
import Searchbar from "./Searchbar";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const [isThemeHover, setIsThemeHover] = useState(false);
  const [isCartHover, setIsCartHover] = useState(false);

  // navbar for login/signup screens
  let navbar = (
    <div className="main-navbar">
      <ul>
        <li>
          <Link to="/" className="logo-header-link">
            <div className="logo-header-container">
              <FreshcipeLogo />
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
          <div className="theme-icon" onMouseEnter={() => setIsThemeHover(true)} onMouseLeave={() => setIsThemeHover(false)}>
            {!isThemeHover ? (
              <box-icon name="moon" color="#474643" size="27px"/>
            ) : (
              <box-icon name="moon" color="#ffd000" size="27px"/>
            )}
          </div>
        </li>

        <li>
          <Link to="/cart">
            <div className="cart-icon" title="View cart" onMouseEnter={() => setIsCartHover(true)} onMouseLeave={() => setIsCartHover(false)}>
              {!isCartHover ? (
                <box-icon name="cart" color="#474643" size="30px"/>
              ) : (
                <box-icon name="cart" color="#ed8453" size="30px"/>
              )}
            </div>
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
                    color="#474643"
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
          <box-icon name="chevron-left" color="#ed8453" size="20px"></box-icon>
          <p>Back</p>
        </Link>
        <Link to="/" className="logo-header-link">
          <div className="logo-header-container">
            <FreshcipeLogo />
          </div>
        </Link>
      </div>
    );
  }

  return <nav>{navbar}</nav>;
}
