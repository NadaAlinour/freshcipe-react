import { useLocation, Link, useNavigate } from "react-router-dom";
import { PRODUCT_CATEGORIES, PRODUCTS } from "../data/productData";
import { RECIPES } from "../data/recipeData";
import "boxicons";

export default function Breadcrumbs() {
  const navigate = useNavigate();
  const location = useLocation();
  const decodedUri = decodeURI(location.pathname);
  const pathArray = decodedUri.substring(1).split("/");
  console.log(pathArray);

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

      {pathArray.map((item, index) => (
        <div key={index} className="breadcrumbs-link-container">
          <Link to={getPath(index)} className="breadcrumb-link">
            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </Link>
          {index !== pathArray.length - 1 && (
            <box-icon name="chevron-right" color="rgba(0, 0, 0, .65)" />
          )}
        </div>
      ))}
    </div>
  );
}
