export default function Pagination({currentNum, totalNum}) {
  return (
    <div className="pagination-container">
      <p>Showing {currentNum} of {totalNum} results</p>
      <button>Show more</button>
    </div>
  );
}
