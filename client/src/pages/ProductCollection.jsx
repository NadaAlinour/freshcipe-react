import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/Pagination";
import {
  fetchVendorCatsProducts,
  fetchAllProducts,
  searchProducts,
  filterProducts,
} from "../utils/http";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProductCollection() {
  const location = useLocation();

  const { userToken, userId } = useSelector((state) => state.auth);
  //console.log('user token is: ', userToken)
  //console.log('user id is: ', userId)

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [path, setPath] = useState();
  const [allUnselected, setAllUnselected] = useState(null);

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");
  // check if search query
  //console.log(pathArray);

  const isQuery = pathArray.includes("search");
  console.log(isQuery);

  // idk how to make this re-render
  // maybe a list of selected filters as state?
  // but this is a productFilter kind thang
  useEffect(() => {
    if (isQuery) {
      setSearchText(searchParams.get("query"));
      console.log("hi ", searchText);
      console.log("sisdfsad", searchText);
    }
  }, [path]);

  const idFromUrl = pathArray[pathArray.length - 2];

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPageSize, setMaxPageSize] = useState(8);
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

  // this is not re-rending when the query changes help meeee
  /*useEffect(() => {
    const getSearchedProducts = async () => {
      try {
        const data = await filterProducts(searchText);
        console.log('response ', data.data[0].attributes.products.data);
        setProducts(data.data[0].attributes.products.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedProducts();
    console.log("are we even doing this")
  }, [searchText]);*/

  const updateProducts = async (selectedFilters) => {
    console.log(
      "temp but update products in ProductCollection from ProductFilter"
    );
    console.log("SELECTEDFILTERS FROM PRODUCT COLLECTION: ", selectedFilters);

    if (selectedFilters.length > 0) {
      setAllUnselected("false");
      try {
        const data = await filterProducts(selectedFilters);
        console.log(data);
        let filteredProducts = [];
        for (let i = 0; i < data.data.length; i++) {
          console.log("filtered products loop, ", filteredProducts);
          filteredProducts = [
            ...filteredProducts,
            ...data.data[i].attributes.products.data,
          ];
        }
        console.log("FILTERED PRODUCTS ", filteredProducts);
        setProducts(filteredProducts);

        // bit of a eeeeeeh
      } catch (error) {
        console.log(error);
      }
    } else {
      setAllUnselected("true");
    }
  };

  // separate get products and load more products
  useEffect(() => {
    const getProducts = async () => {
      setPage((prevPage) => 1);
      setProducts([]);
      setTotalProducts();
      setPageCount();
      setpageSize(0);

      try {
        const data = await fetchVendorCatsProducts(idFromUrl, "1", maxPageSize);
        setProducts(data.data);
        setTotalProducts(data.meta.pagination.total);
        setPageCount(data.meta.pagination.pageCount);
        setpageSize((prevPageSize) => prevPageSize + data.data.length);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (allUnselected === "true") {
      getProducts();
    }
    if (!isQuery) getProducts();
    console.log("from get products using id: ", page);
  }, [idFromUrl]);

  useEffect(() => {
    const getProducts = async () => {
      setPage((prevPage) => 1);
      setProducts([]);
      setTotalProducts();
      setPageCount();
      setpageSize(0);

      try {
        const data = await fetchVendorCatsProducts(idFromUrl, "1", maxPageSize);
        setProducts(data.data);
        setTotalProducts(data.meta.pagination.total);
        setPageCount(data.meta.pagination.pageCount);
        setpageSize((prevPageSize) => prevPageSize + data.data.length);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (allUnselected === "true") getProducts();
  }, [allUnselected]);

  // load more products
  useEffect(() => {
    const loadMoreProducts = async () => {
      try {
        const data = await fetchVendorCatsProducts(
          idFromUrl,
          page,
          maxPageSize
        );
        setProducts((prevProducts) => [...prevProducts, ...data.data]);
        setTotalProducts(data.meta.pagination.total);
        setPageCount(data.meta.pagination.pageCount);
        setpageSize((prevPageSize) => prevPageSize + data.data.length);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (page > 1) loadMoreProducts();
    console.log("from load more: ", page);
  }, [page]);

  return (
    <>
      {!searchText && <Breadcrumbs />}
      <div className="product-collection-page">
        <div className="product-filter-container">
          <ProductFilter updateCollection={updateProducts} />
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
            {allUnselected !== "false" && (
              <Pagination
                newPage={updatePage}
                currentNum={pageSize}
                totalNum={totalProducts}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
