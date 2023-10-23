import { PRODUCTS, PRODUCT_CATEGORIES } from "../data/productData";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import "boxicons";

import Tag from "../components/Tag";
import Breadcrumbs from "../components/Breadcrumbs";

export default function ProductDetails(){
    /*const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath);
    const pathArray = currentPath.split("/");
    const idFromUrl = pathArray[pathArray.length - 2];
    console.log(idFromUrl);

    const productDetails = PRODUCTS.find((product) => product.id == idFromUrl);
    const categories = productDetails.productCategories.map((cat) =>
     PRODUCT_CATEGORIES.find((item) => item.id == cat)
     );

     console.log(productDetails);

     let stepCount =1;

     const [isHeartHover, setIsHeartHover] = useState(false);
     const [isFavourite, setIsFavourite] = useState(false);*/

    return(
        <>
        <Breadcrumbs/>
        <div className="product-info-parent">
            <div className="product-info-container">
                <div className="product-info-img-container">
                    <img src="src\assets\images\products\apple-golden.png"/>
                </div>
                <div className="product-info">
                    <h2>Golden Crisp Apples</h2>
                    <p>Price: 3.55$</p>
                    <p>Description: </p>
                    <p>this is product description</p>

                    {/*
                    <div 
                    className="add-product-to-favorite-container" 
                    onMouseEnter={ () => setIsHeartHover(true)}
                    onMouseLeave={ () => setIsHeartHover(false)}
                    >
                        <p>Save</p>

                        <div className="product-info-heart-icon-container">
                            <box-icon name="heart" color="white" size="25px"/>
                        </div>
                        <h1>{productDetails.title}</h1>
                        <p>{productDetails.price}</p>
                        <p>Description: {productDetails.description}</p>
                        <p>{productDetails}</p>
                        
                        <div>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <Tag isPlain={true}>{category.title}</Tag>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="product-image-container">
                            <img src={productDetails.imageUrl}></img>
                        </div>
                        
                                </div>*/}
                </div>
            </div>
        </div>
        <div className="product-info-suggested-products-container">
                <div className="product-info-suggested-product">
                    <h2>People also buy with this product</h2>
                    <p>placeholder for suggested products</p>
                </div>
                 </div>
        </>
        /*<div>
            <h1> Product Details Page</h1>
            <div className="product-info-parent">

            </div>
        </div>*/
    )
}