import React, { useEffect, use, useState } from "react";
import sushiImage from "../../assets/Sushi.jpg";
import pizzaImage from "../../assets/Pizza.jpg";
import HamburgerImage from "../../assets/Hamburger.jpg";
import Navigation from "../Navigation";
import "./MMIndexPage.css";
import { CSSTransition } from "react-transition-group";

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
    <div className="header-container">
      <CSSTransition in={true} timeout={500} classNames="my-node-">
        <div>
          <img
            className="header-image"
            src={imagesArray[currentImageIndex]}
            alt="noimg"
          />
        </div>
      </CSSTransition>

      <Navigation />
    </div>
  );
}

export default MMIndexPage;
