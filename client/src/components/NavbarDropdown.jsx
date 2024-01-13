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
    dispatch(clearFavourites());
    dispatch(clearCart());
    dispatch(logoutUser());
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
              if (userToken) navigate("/personalDetails");
            }}
          >
            My Account
          </li>

          <li
            className={userToken ? "" : "item-disable"}
            onClick={() => {
              userToken && navigate("/favourites");
            }}
          >
            My Favourites
          </li>
          <li
            className={userToken ? "" : "item-disable"}
            onClick={() => {
              if (userToken) navigate("/MyOrders");
            }}
          >
            My Orders
          </li>
          {option}
        </ul>
      </div>
    </div>
  );
}
