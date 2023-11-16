import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser } from "../store/authSlice";
import { clearCart } from "../store/cartSlice";
import { clearFavourites } from "../store/favouritesSlice";

export default function NavbarDropdown() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.auth);

  const handleLogout = () => {
    console.log("logging out");
    dispatch(clearFavourites());
    dispatch(clearCart());
    dispatch(logoutUser());
    //window.location.reload();
  };

  let option = <li onClick={() => navigate("/login")}>Login</li>;

  if (userToken !== "") option = <li onClick={handleLogout}>Logout</li>;

  return (
    <div className="navbar-dropdown-outer">
      <div className="navbar-dropdown">
        <ul>
          <li
            className={userToken ? "" : "item-disable"}
            onClick={() => {
              if (userToken) navigate("/account/personal-details");
            }}
          >
            My Account
          </li>
          <li onClick={() => navigate("/cart")}>My Cart</li>
          <li
            className={userToken ? "" : "item-disable"}
            onClick={() => {
              userToken && navigate("/favourites");
              //window.location.reload();
            }}
          >
            My Favourites
          </li>
          <li className={userToken ? "" : "item-disable"}>My Orders</li>
          <li className={userToken ? "" : "item-disable"}>
            Delivery Addresses
          </li>
          <li className={userToken ? "" : "item-disable"}>My Discounts</li>
          <li>Settings</li>
          {option}
        </ul>
      </div>
    </div>
  );
}
