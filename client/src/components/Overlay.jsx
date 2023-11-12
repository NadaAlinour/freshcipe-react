export default function Overlay({ children, onClose }) {
  return (
    <div className="overlay-container">
      <div className="overlay-content">
        <p>{children}</p>
        <button onClick={onClose}>cancel</button>
        <button>login</button>
      </div>
    </div>
  );
}
