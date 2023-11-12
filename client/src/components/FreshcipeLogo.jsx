export default function FreshcipeLogo({ color }) {
  return (
    <div
      className={
        color == "white"
          ? "logo-header-container logo-white"
          : "logo-header-container"
      }
    >
      <h4 id="freshcipe-logo-text">Freshcipe</h4>
      {color == "white" ? (
        <box-icon name="leaf" color="#879a66" size="35px" />
      ) : (
        <box-icon name="leaf" color="#879a66" size="29px" />
      )}
    </div>
  );
}
