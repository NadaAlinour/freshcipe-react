import "boxicons";
import { Link, useNavigate } from "react-router-dom";
import HeartAdd from "../assets/images/heartadd.png";
export default function Overlay({ onClose, title, description, icon}) {

  const navigate = useNavigate();
  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <div className="overlay-exit" onClick={onClose}>
          <box-icon name="x" color="#3c3b37"></box-icon>
        </div>
        <h3 className="overlay-title">{title}</h3>
        <img src={icon}></img>
        <p className="overlay-description">{description}</p>
        <div className="overlay-buttons-container">
          <button className="solid-button" onClick={() => navigate('/signup')}>Signup</button>
          <Link to="/login" className="link-text" style={{fontSize:"18px"}}>Have an account? Login.</Link>
        </div>
      </div>
    </div>
  );
}
