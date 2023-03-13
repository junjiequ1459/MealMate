import React from "react";

function BusinessFilter(props) {
  const { onFilterButtonClick, resetFilter } = props;

  return (
    <div className="business-filter">
      <div>
        <div className="filter-buttons-container">
          <div className="business-filter-list">
            <h2 className="filter-h2">Filters</h2>
            <button className="reset-filter-button" onClick={resetFilter}>
              Reset Filters
            </button>
            <div className="filter-button-list">
              <button
                className="filter-first-button filter-button"
                onClick={() => onFilterButtonClick("1")}
              >
                $
              </button>
              <button
                className="filter-second-button filter-button"
                onClick={() => onFilterButtonClick("2")}
              >
                $$
              </button>
              <button
                className="filter-third-button filter-button"
                onClick={() => onFilterButtonClick("3")}
              >
                $$$
              </button>
              <button
                className="filter-fourth-button filter-button"
                onClick={() => onFilterButtonClick("4")}
              >
                $$$$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessFilter;
