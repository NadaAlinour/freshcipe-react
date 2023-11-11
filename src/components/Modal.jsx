export default function Modal({children}) {
  return (
    <div className="modal-container">
      <p>{children}</p>
      <button>cancel</button>
      <button>login</button>
    </div>
  )
}