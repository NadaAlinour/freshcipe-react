import { useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";

export default function NavbarDropdown() {
  const { authUser } = useContext(AuthContext);
  const { logout } = useAuth();


  let option = <li><Link to='/login'>Login</Link></li>;
  if (authUser !== null) option = <li onClick={logout}>Logout</li>
  return (
    <div className="navbar-dropdown">
      <ul>
        <li>placeholder</li>
        <li>placeholder</li>
        <li>placeholder</li>
        <li>placeholder</li>
        <li>placeholder</li>
        {option}
      </ul>
    </div>
  );
}
