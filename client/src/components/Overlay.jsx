import "boxicons";
import { Link, useNavigate } from "react-router-dom";
export default function Overlay({ onClose, title, description}) {

  const navigate = useNavigate();
  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <div className="overlay-exit" onClick={onClose}>
          <box-icon name="x" color="#3c3b37"></box-icon>
        </div>
        <h3 className="overlay-title">{title}</h3>
        <p className="overlay-description">{description}</p>
        <div className="overlay-buttons-container">
          <button className="solid-button" onClick={() => navigate('/signup')}>Signup</button>
          <Link to="/login" className="link-text">Have an account? Login.</Link>
        </div>
      </div>
    </div>
  );
}
