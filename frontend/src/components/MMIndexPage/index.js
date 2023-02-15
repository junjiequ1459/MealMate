import React, { useEffect, useState } from "react";
import sushiImage from "../../assets/Sushi.png";
import pizzaImage from "../../assets/Pizza.png";
import HamburgerImage from "../../assets/Hamburger.png";
import Navigation from "../Navigation";
import "./MMIndexPage.css";
import HomeIcon from "../HomePageIcon";
import CategoryIcon from "../CategoryIcon";
import { useHistory } from "react-router-dom";

function MMIndexPage() {
  const history = useHistory();
  const foodArray = ["Sushi", "Pizza", "Burgers"];
  const sushiText = "Sushi?";
  const pizzaText = "Pizza?";
  const HamburgerText = "Burgers?";

  const handleDescriptionClick = () => {
    history.push({
      pathname: "/business",
      state: {
        data: { category: foodArray[currentImageIndex] },
      },
    });
  };

  const sushiButton = (
    <button className="description-button" onClick={handleDescriptionClick}>
      <i className="fa-solid fa-magnifying-glass index-mag-glass"></i>
      Sushi
    </button>
  );
  const pizzaButton = (
    <button className="description-button" onClick={handleDescriptionClick}>
      <i className="fa-solid fa-magnifying-glass index-mag-glass"></i>Pizza
    </button>
  );
  const HamburgerButton = (
    <button className="description-button" onClick={handleDescriptionClick}>
      <i className="fa-solid fa-magnifying-glass index-mag-glass"></i>Hamburger
    </button>
  );

  let buttonArray = [sushiButton, pizzaButton, HamburgerButton];
  let imagesArray = [sushiImage, pizzaImage, HamburgerImage];
  let textArray = [sushiText, pizzaText, HamburgerText];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    };

    const ImageintervalId = setInterval(changeImage, 5000);
    return () => {
      clearInterval(ImageintervalId);
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

      <div className="description-container">
        <h1 className="description-text">{textArray[currentImageIndex]}</h1>

        {buttonArray[currentImageIndex]}
      </div>

      <div className="categories-container">
        <div className="categories">
          <div id="categories-row1">
            <CategoryIcon
              category={"Pizza"}
              image={<i className="fa-solid fa-pizza-slice"></i>}
            />
            <CategoryIcon
              category={"Sushi"}
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
              category={"Breakfast"}
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
