import { useLocation, Link, useNavigate } from "react-router-dom";
import "boxicons";

export default function Breadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();
  const decodedUri = decodeURI(location.pathname);
  let pathArray = decodedUri.substring(1).split("/");

  const oldPathArray = [...pathArray];
  const id = pathArray.splice(pathArray.length - 2)[0];
  pathArray = [...pathArray, oldPathArray[oldPathArray.length - 1]];

  let lastItem = "";

  lastItem = pathArray.pop();
  console.log(lastItem);

  const getPath = (index) => {
    /*console.log("hi it's path " + index)
    console.log("/"+pathArray[index-1]+"/"+pathArray[index])*/
    let path = "";
    for (var i = 0; i <= index; i++) {
      path += `/${pathArray[i]}`;
    }
    console.log(path);

    return path;
  };

  return (
    <div className="breadcrumbs">
      <div className="link-text back-link-container">
        <box-icon name="chevron-left" color="#ed8453" />
        <p onClick={() => navigate(-1)}>Back</p>
      </div>
      <div className="breadcrumbs-link-container">
        <Link to="/" className="breadcrumb-link">
          <p>Home</p>
        </Link>
        <box-icon name="chevron-right" color="rgba(0, 0, 0, .65)" />
      </div>

      {pathArray.length > 0
        ? pathArray.map((item, index) => (
            <div key={index} className="breadcrumbs-link-container">
              <Link to={getPath(index)} className="breadcrumb-link">
                <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
              </Link>

              <box-icon name="chevron-right" color="rgba(0, 0, 0, .65)" />
              {lastItem && <p className="breadcrumb-last-item1">{lastItem}</p>}
            </div>
          ))
        : lastItem && <p className="breadcrumb-last-item2">{lastItem.charAt(0).toUpperCase() + lastItem.slice(1)}</p>}
    </div>
  );
}
