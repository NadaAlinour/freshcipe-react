import { useContext, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

export default function NavbarDropdown() {
  const navigate = useNavigate();
  const { authUser } = useContext(AuthContext);
  const { logout } = useAuth();

  let option = <li onClick={() => navigate("/login")}>Login</li>;

  if (authUser !== null) option = <li onClick={logout}>Logout</li>;

  return (
    <div className="navbar-dropdown-outer">
      <div className="navbar-dropdown">
        <ul>
          <li
            className={authUser ? "" : "item-disable"}
            onClick={() => {
              if (authUser) navigate("/account/personal-details");
            }}
          >
            My Account
          </li>
          <li>My Cart</li>
          <li>Favourites</li>
          <li className={authUser ? "" : "item-disable"}>My Orders</li>
          <li className={authUser ? "" : "item-disable"}>My Discounts</li>
          <li>Settings</li>
          {option}
        </ul>
      </div>
    </div>
  );
}
