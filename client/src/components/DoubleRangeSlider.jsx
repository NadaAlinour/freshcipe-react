export default function DoubleRangeSlider() {
  return (
    <>
      <div className="slider-container">
        <input type="range" className="slider slider-left" min="0" max="1000" />
        <input type="range" className="slide slider-right" min="0" max="1000" />
      </div>

    </>
  );
}
