import React from "react";
import { useHistory } from "react-router-dom";
import "./CategoryIcon.css";
function CategoryIcon({ category, image }) {
  const history = useHistory();
  const data = { category: category };

  const handleIconClick = () => {
    history.push({
      pathname: "/business",
      state: {
        data: data,
      },
    });
  };

  return (
    <>
      <div className="category-container" onClick={handleIconClick}>
        <div>
          <div className="image-icon-container">{image}</div>
          {category}
        </div>
      </div>
    </>
  );
}

export default CategoryIcon;
