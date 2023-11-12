export default function Pagination({newPage, currentNum, totalNum}) {
  const handleShowMore = () => {
    console.log('updating page count')
    newPage()
  }
  return (
    <div className="pagination-container">
      <p>Showing {currentNum} of {totalNum} results</p>
      <button onClick={handleShowMore}>Show more</button>
    </div>
  );
}
