import { NavLink } from "react-router-dom";
export default function AccountNav() {
  return (
    <>
      <nav className="acc-navbar">
        <div className="acc-navbar-container">
          <div className="acc-nav-elements">
            <ul>
              <NavLink to="personal-details">
                <li>Personal Details</li>
              </NavLink>
              <NavLink>
                <li>Delivery Addresses</li>
              </NavLink>
              <NavLink>
                <li>Payment Details</li>
              </NavLink>
              <NavLink>
                <li>My Orders</li>
              </NavLink>
              <NavLink>
                <li>Subscriptions</li>
              </NavLink>
              <NavLink>
                <li>Reviews</li>
              </NavLink>
              <NavLink>
                <li>Settings</li>
              </NavLink>
              {/*not really a link or actually i guess calls function and redirects to homepage*/}
              <NavLink>
                <li>Log Out</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
