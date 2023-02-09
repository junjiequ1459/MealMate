import React, { useEffect, useState } from "react";
import sushiImage from "../../assets/Sushi.jpg";
import pizzaImage from "../../assets/Pizza.jpg";
import HamburgerImage from "../../assets/Hamburger.jpg";
import Navigation from "../Navigation";
import "./MMIndexPage.css";
import HomeIcon from "../HomePageIcon";
import CategoryIcon from "../CategoryIcon";

function MMIndexPage() {
  let imagesArray = [sushiImage, pizzaImage, HamburgerImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    };

    const intervalId = setInterval(changeImage, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [imagesArray]);

  return (
    <>
      <div className="dark-header"></div>
      <div className="header-container">
        <img
          className="header-image"
          src={imagesArray[currentImageIndex]}
          alt="noimg"
        />
        <HomeIcon page={"white"} />
        <Navigation page={"white"} />
      </div>
      <div className="categories-container">
        <div className="categories">
          <div id="categories-row1">
            <CategoryIcon
              category={"Pizza"}
              image={<i className="fa-solid fa-pizza-slice"></i>}
            />
            <CategoryIcon
              category={"SeaFood"}
              image={<i className="fa-solid fa-fish-fins"></i>}
            />
            <CategoryIcon
              category={"Burgers"}
              image={<i className="fa-solid fa-burger"></i>}
            />
            <CategoryIcon
              category={"Vegan"}
              image={<i className="fa-solid fa-carrot"></i>}
            />
          </div>
          <div id="categories-row2">
            <CategoryIcon
              category={"Bakery"}
              image={<i className="fa-solid fa-bread-slice"></i>}
            />
            <CategoryIcon
              category={"Cafes"}
              image={<i className="fa-solid fa-mug-saucer"></i>}
            />
            <CategoryIcon
              category={"Chicken"}
              image={<i className="fa-solid fa-drumstick-bite"></i>}
            />
            <CategoryIcon
              category={"Bars"}
              image={<i className="fa-solid fa-martini-glass-citrus"></i>}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MMIndexPage;
