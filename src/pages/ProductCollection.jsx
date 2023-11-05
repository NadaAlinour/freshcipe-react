import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/Pagination";
import { fetchVendorCatsProducts, fetchAllProducts } from "../utils/http";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProductCollection() {
  const location = useLocation();
 

  const { userToken, userId } = useSelector((state) => state.auth);
  //console.log('user token is: ', userToken)
  //console.log('user id is: ', userId)

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  const idFromUrl = pathArray[pathArray.length - 2];

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPageSize, setMaxPageSize] = useState(5);
  const [pageSize, setpageSize] = useState(0);
  const [totalProducts, setTotalProducts] = useState();
  const [pageCount, setPageCount] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const updatePage = () => {
    if (page < pageCount) {
      let pageNum = page + 1;
      setPage(pageNum);
    }
  };

  /*useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchVendorCatsProducts(idFromUrl, page, maxPageSize);
        setProducts((prevProducts) => [...prevProducts, ...data.data]);
        setTotalProducts(data.meta.pagination.total);
        setPageCount(data.meta.pagination.pageCount);
        setpageSize(data.data.length);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (idFromUrl) getProducts();
  }, [])*/


  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await fetchAllProducts(page, maxPageSize);
        console.log(data.data);

        //console.log(data.data);
       
        setProducts((prevProducts) => [...prevProducts, ...data.data]);
        
        setTotalProducts(data.meta.pagination.total);
        setPageCount(data.meta.pagination.pageCount);
        setpageSize((prevPageSize) => prevPageSize + data.data.length)

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if(!idFromUrl) getAllProducts();
    //console.log(products);
  }, [page]);

 

  return (
    <>
      <Breadcrumbs />
      <div className="product-collection-page">
        <div className="product-filter-container">
          <ProductFilter />
        </div>
        <div>
          <div className="product-list-container">
            <ul>
              {!isLoading &&
                products.map((product) => (
                  <li key={product.id}>
                    <ProductCard
                      id={product.id}
                      title={product.attributes.title}
                      price={product.attributes.price}
                      quantity={product.attributes.weight}
                      imageUrl={
                        product.attributes.image.data
                          ? product.attributes.image.data.attributes.url
                          : null
                      }
                    />
                  </li>
                ))}
            </ul>
          </div>
          <div className="product-pagination-container">
            <Pagination
              newPage={updatePage}
              currentNum={pageSize}
              totalNum={totalProducts}
            />
          </div>
        </div>
      </div>
    </>
  );
}
