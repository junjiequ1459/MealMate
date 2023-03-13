import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useState, useEffect } from "react";
import HomeIcon from "../HomePageIcon";
import { useLocation } from "react-router-dom";
import BusinessList from "../Business";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import BusinessFilter from "./BusinessFilter";

function BusinessIndexPage() {
  const location = useLocation();
  const data = (location.state && location.state.data) || {};
  const [businesses, setBusinesses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const searchInput = data.category;
  const [priceFilter, setPriceFilter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetch("/api/businesses")
      .then((response) => {
        return response.json();
      })
      .then((datas) => {
        const filteredData = datas.filter((business) => {
          const categoriesArray = business.categories.split(",");
          if (priceFilter) {
            return (
              categoriesArray.some((category) =>
                category.includes(searchInput)
              ) && business.properties.RestaurantsPriceRange2 === priceFilter
            );
          }
          return (
            categoriesArray.some((category) =>
              category.includes(searchInput)
            ) || business.name.includes(searchInput)
          );
        });
        setBusinesses(filteredData);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [searchInput, priceFilter]);

  function onFilterButtonClick(priceFilter) {
    setPriceFilter(priceFilter);
  }

  function resetFilter() {
    setPriceFilter(null);
  }

  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 10);
    window.scrollTo(0, 0);
  }

  function prevPage() {
    if (currentPage !== 0) {
      setCurrentPage((prevPage) => prevPage - 10);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="main-page">
            <div className="business-background-color"></div>
            <HomeIcon />
            <hr></hr>
            <Navigation />
          </div>
          <div className="map-container">
            <GoogleMap
              businesses={businesses.slice(currentPage, currentPage + 10)}
            />
          </div>

          <div className="business-indexpage-flex">
            <BusinessFilter
              onFilterButtonClick={onFilterButtonClick}
              resetFilter={resetFilter}
            />

            <div className="business-list-container">
              <h1 className="business-header">
                Browsing Stata Barbara, CA business
              </h1>

              <BusinessList
                businesses={businesses.slice(currentPage, currentPage + 10)}
              />
              <div className="page-buttons">
                <div>
                  <button
                    className="next-page-button prev-button"
                    onClick={prevPage}
                  >
                    Prev Page
                  </button>
                </div>
                <div>
                  <button
                    className="next-page-button next-button"
                    onClick={nextPage}
                  >
                    Next Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BusinessIndexPage;
