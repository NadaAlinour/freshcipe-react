import "boxicons";
import { Link, useNavigate } from "react-router-dom";
import HeartAdd from "../assets/images/heartadd.png";
export default function Overlay({
  onClose,
  title,
  description,
  icon,
  success,
}) {
  let content = (
    <>
      <button
        className="solid-button"
        style={{ width: "200px" }}
        onClick={() => navigate("/signup")}
      >
        Signup
      </button>
      <Link to="/login" className="link-text" style={{ fontSize: "18px" }}>
        Have an account? Login.
      </Link>
    </>
  );

  if(success) {
    content = (
      <>
        <button onClick={onClose} style={{width: "75%"}} className="border-button">Cancel</button>
      </>
    )
  }

  const navigate = useNavigate();
  return (
    <div className="overlay-container">
      <div className="overlay-content" style={success && {height: "300px"}}>
        <div className="overlay-exit" onClick={onClose}>
          <box-icon name="x" color="#3c3b37"></box-icon>
        </div>
        <h3 className="overlay-title">{title}</h3>
        <img src={icon}></img>
        <p className="overlay-description">{description}</p>
        <div className="overlay-buttons-container" style={success && {justifyContent: "center"}}>{content}</div>
      </div>
    </div>
  );
}
