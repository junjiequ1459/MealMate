import React, { useEffect, useState } from "react";
import sushiImage from "../../assets/Sushi.jpg";
import pizzaImage from "../../assets/Pizza.jpg";
import HamburgerImage from "../../assets/Hamburger.jpg";
import Navigation from "../Navigation";
import "./MMIndexPage.css";

function MMIndexPage() {
  let imagesArray = [sushiImage, pizzaImage, HamburgerImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    };

    const intervalId = setInterval(changeImage, 2000);
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
        <Navigation />
      </div>
    </>
  );
}

export default MMIndexPage;
