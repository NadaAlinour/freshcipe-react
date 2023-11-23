import "boxicons";
import "../assets/stylesheets/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
import FreshcipeLogo from "./FreshcipeLogo";
import Searchbar from "./Searchbar";
import NavbarDropdown from "./NavbarDropdown";
import ProfileImage from "./ProfileImage";

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [cartQuantity, setCartQuantity] = useState();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const [isFaveHover, setIsFaveHover] = useState(false);
  const [isCartHover, setIsCartHover] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);
  const { username } = useSelector((state) => state.auth);

  useEffect(() => {
    let count = 0;
    cartItems.forEach(item => {
      count += item.attributes.quantity;
    });
    console.log(count);
    setCartQuantity(count);
  }, [cartItems]);
  

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
          <Link to="/favourites">
            <div
              className="heart-icon"
              onMouseEnter={() => setIsFaveHover(true)}
              onMouseLeave={() => setIsFaveHover(false)}
            >
              {!isFaveHover ? (
                <box-icon name="heart" color="#474643" size="30px" />
              ) : (
                <box-icon name="heart" color="#fa635c" size="30px" />
              )}
            </div>
          </Link>
        </li>

        <li>
          <Link to="/cart">
            {cartItems.length > 0 && (
              <div className="navbar-cart-count">{cartQuantity}</div>
            )}
            <div
              className="cart-icon"
              title="View cart"
              onMouseEnter={() => setIsCartHover(true)}
              onMouseLeave={() => setIsCartHover(false)}
            >
              {!isCartHover ? (
                <box-icon name="cart" color="#474643" size="30px" />
              ) : (
                <box-icon name="cart" color="#ed8453" size="30px" />
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
            <Link to="/login" className="profile-image-link">
              <div className="dropdown-li">
                {!username ? (
                  <div className="user-circle-container">
                    <box-icon
                      name="user-circle"
                      type="solid"
                      size="49px"
                      color="#474643"
                    ></box-icon>
                  </div>
                ) : (
                  <ProfileImage>
                    {username.slice("")[0].toUpperCase()}
                  </ProfileImage>
                )}
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
