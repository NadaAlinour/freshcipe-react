import FreshcipeLogo from "./FreshcipeLogo";
import FacebookLogo from "../assets/images/footer/facebook-logo-36.png";
import TwitterLogo from "../assets/images/footer/twitter-logo-36.png";
import InstagramLogo from "../assets/images/footer/instagram-logo-36.png";
import YoutubeLogo from "../assets/images/footer/youtube-logo-36.png";
import PinterestLogo from "../assets/images/footer/pinterest-alt-logo-36.png";
import { Link } from "react-router-dom";
import "boxicons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-main-content-container">
          <div className="footer-logo-container">
            <FreshcipeLogo color="white" />
            <p>Fresh groceries delivered on time.</p>
          </div>

          <div className="footer-list-container">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to='/products'>Products</Link>
              </li>
              <li>
                <Link to='/recipes'>Recipes</Link>
              </li>
              <li>
                <Link>placeholder</Link>
              </li>
              <li>
                <Link>placeholder</Link>
              </li>
            </ul>
          </div>

          <div className="footer-list-container">
            <h3>Services</h3>
            <ul>
              <li>
                <Link to='/contact'>Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-list-container">
            <h3>About Us</h3>
            <ul>
              <li>placeholder</li>
              <li>placeholder</li>
            </ul>
          </div>
        </div>
        <div className="footer-socials-container">
          <img src={FacebookLogo} />
          <img src={TwitterLogo} />
          <img src={InstagramLogo} />
          <img src={YoutubeLogo} />
          <img src={PinterestLogo} />
        </div>
        <div className="footer-copyright-container">
          <p>&copy; 2023 Freshcipe. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
