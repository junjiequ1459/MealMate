import Navigation from "../Navigation";
import "./BusinessIndexPage.css";
import GoogleMap from "../GoogleMap";
import React, { useState, useEffect } from "react";
import HomeIcon from "../HomePageIcon";
import { useLocation, useHistory } from "react-router-dom";
import BusinessList from "../Business";

function BusinessIndexPage() {
  const history = useHistory();
  const location = useLocation();
  const data = (location.state && location.state.data) || {};
  const [businesses, setBusinesses] = useState([]);
  const searchInput = data.category;
  const [priceFilter, setPriceFilter] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          return (categoriesArray.some((category) =>
            category.includes(searchInput)
          )) || business.name.includes(searchInput)
        });
        setBusinesses(filteredData);
      })
      .catch((error) => console.error(error));
  }, [searchInput, priceFilter]);

  function onFilterButtonClick1() {
    setPriceFilter("1");
  }
  function onFilterButtonClick2() {
    setPriceFilter("2");
  }
  function onFilterButtonClick3() {
    setPriceFilter("3");
  }
  function onFilterButtonClick4() {
    setPriceFilter("4");
  }

  function resetFilter() {
    setPriceFilter(null);
  }

  return (
    <>
      <div className="main-page">
        <div className="business-background-color"></div>
        <HomeIcon />
        <hr></hr>
        <Navigation />
      </div>
      <div className="map-container">
        <GoogleMap businesses={businesses.slice(0, 10)} />
      </div>
      <div class="business-filter">
        <div className="filter-buttons-container">
          <div className="business-filter-list">
            <h2 className="filter-h2">Filters</h2>
            <button className="reset-filter-button" onClick={resetFilter}>
              Reset Filters
            </button>
            <div className="filter-button-list">
              <button
                className="filter-first-button filter-button"
                onClick={onFilterButtonClick1}
              >
                $
              </button>
              <button
                className="filter-second-button filter-button"
                onClick={onFilterButtonClick2}
              >
                $$
              </button>
              <button
                className="filter-third-button filter-button"
                onClick={onFilterButtonClick3}
              >
                $$$
              </button>
              <button
                className="filter-fourth-button filter-button"
                onClick={onFilterButtonClick4}
              >
                $$$$
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="business-list-container">
        <h1 className="business-header">Browsing Stata Barbara, CA business</h1>
        <BusinessList businesses={businesses} />
      </div>
    </>
  );
}

export default BusinessIndexPage;
