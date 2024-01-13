import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import Breadcrumbs from "../components/Breadcrumbs";
import Pagination from "../components/Pagination";
import {
  fetchVendorCatsProducts,
  searchProducts,
  filterProducts,
  fetchBestsellers,
} from "../utils/http";
import { useState, useEffect } from "react";

export default function ProductCollection() {
  const location = useLocation();


  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");
  const [path, setPath] = useState();
  const [allUnselected, setAllUnselected] = useState(null);

  const [bestsellers, setBestsellers] = useState([]);
  const [isBestsellersLoading, setIsBestsellersLoading] = useState(true);

  const currentPath = location.pathname;
  const pathArray = currentPath.split("/");


  let isQuery = pathArray.includes("search");
  let tempSearchText;
  //console.log(isQuery);

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

  useEffect(() => {
    const getSearchedProducts = async (searchText) => {
      try {
        const data = await searchProducts(searchText);
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };


    if (isQuery) {
      setSearchText(searchParams.get("query"));
      tempSearchText = searchParams.get("query");
      setSearchText(searchParams.get("query"));
      getSearchedProducts(tempSearchText);
    }
  }, [isQuery, searchParams.get("query")]);


  const updateProducts = async (selectedFilters) => {
  
    if (selectedFilters.length > 0) {
      setAllUnselected("false");
      try {
        const data = await filterProducts(selectedFilters);
        let filteredProducts = [];
        for (let i = 0; i < data.data.length; i++) {
          filteredProducts = [
            ...filteredProducts,
            ...data.data[i].attributes.products.data,
          ];
        }
        setProducts(filteredProducts);

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

    let isQuery = pathArray.includes("search");
    if (!isQuery) getProducts();
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
  }, [page]);

  useEffect(() => {
    const getBestsellers = async () => {
      try {
        const data = await fetchBestsellers();
        setBestsellers(data.data);
        setIsBestsellersLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (products.length < 1 && isQuery) getBestsellers();
  }, [searchParams]);

  let noResults = (
    <>
      <div className="no-search-results-container">
        <div className="no-search-results-text">
          <h2>No results found for "{searchText}".</h2>
          <p> Please try a different query.</p>
        </div>
        <div className="no-search-results-products">
          <h3 className="no-search-results-products-header">
            Popular products
          </h3>
          <ul>
            {!isBestsellersLoading &&
              bestsellers.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    color={true}
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
      </div>
    </>
  );

  return (
    <>
      {!searchText && <Breadcrumbs />}
      {products.length < 1 && isQuery && noResults}
      <div className="product-collection-page">
        {products.length >= 1 || !isQuery ? (
          <div className="product-filter-container">
            <ProductFilter
              updateCollection={updateProducts}
            />
          </div>
        ) : (
          ""
        )}
        <div>
          {products.length >= 1 || !isQuery ? (
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
                        isDiscount={product.attributes.tags.data[0].id == 24 ? 'true' : ''}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {products.length >= 1 || !isQuery ? (
            <div className="product-pagination-container">
              {allUnselected !== "false" && (
                <Pagination
                  newPage={updatePage}
                  currentNum={pageSize}
                  totalNum={totalProducts}
                />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
