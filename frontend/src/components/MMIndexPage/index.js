import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import sushiImage from "../../assets/Sushi.jpg";
import Navigation from "../Navigation";

function MMIndexPage() {
  //   const history = useHistory();
  //   const dispatch = useDispatch();

  return (
    <>
      <div className="header-container">
        <Navigation />
        <img className="header-image" src={sushiImage} />
      </div>
    </>
  );
}

export default MMIndexPage;
