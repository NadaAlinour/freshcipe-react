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
    let path = '';
    for(var i = 0; i <= index; i++) {
        path += `/${pathArray[i]}`;
    }
    console.log(path)
  
    return path;
  }

  return (
    <div className="current-path-navigation">
      <div className="link-text back-link-container">
        <box-icon name="chevron-left" color="#549ec9" />
        <p onClick={() => navigate(-1)}>Back</p>
      </div>
      <div className="current-path-navigation-link-container">
        <Link to="/">
          <p>Home</p>
        </Link>
        <box-icon name="chevron-right" color="rgba(0, 0, 0, .65)"/>

      </div>

      {pathArray.map((item, index) => (
        <div key={index} className="current-path-navigation-link-container">
          <Link to={getPath(index)}>
            <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
          </Link>
          {index !== pathArray.length - 1 && <box-icon name="chevron-right" color="rgba(0, 0, 0, .65)"/>}
        </div>
      ))}
    </div>
  );
}
