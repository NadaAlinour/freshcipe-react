import 'boxicons';

export default function Tag({ children, isPlain, selectedTag }) {
  let content = (
    <div className="tag-container-plain">
      <p>{children}</p>
    </div>
  );

  if (!isPlain) {
    content = (
      <div
        className={
          selectedTag === children ? "tag-container-selected" : "tag-container"
        }
      >
        <p>{children}</p>
        {selectedTag === children && <box-icon name="x" color="white"></box-icon>}
      </div>
    );
  }

  return <>{content}</>;
}
