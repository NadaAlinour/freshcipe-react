import "boxicons";
import "../assets/stylesheets/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  // navbar for login/signup screens
  let navbar = (
    <div className="simple-navbar">
      <Link className="back-link link-text">
        <box-icon name="chevron-left" color="#549ec9" size="20px"></box-icon><p>Back</p>
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

  //navbar otherwise

  return <nav>{navbar}</nav>;
}
