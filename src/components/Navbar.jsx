import "boxicons";
import "../assets/stylesheets/navbar.css";

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
                <box-icon
                  name="image-alt"
                  size="70px"
                  color="rgba(0, 0, 0, .45)"
                ></box-icon>
                <p>Freshcipe</p>
              </div>
            </Link>
          </li>
          <div className="nav-links-container">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
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
          </div>
          <li className="searchbar-li">
            <Searchbar />
          </li>

          <li
            className="dropdown-li"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Link to="/login">
              <box-icon name="user" size="30px"></box-icon>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <box-icon name="cart" size="30px" title="View cart"></box-icon>
            </Link>
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
        <Link to="/">
          <box-icon
            name="image-alt"
            size="70px"
            color="rgba(0, 0, 0, .45)"
          ></box-icon>
        </Link>
      </div>
    );
  }

  return <nav>{navbar}</nav>;
}
