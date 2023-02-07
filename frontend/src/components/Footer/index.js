import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col">
          <h3>React</h3>
          <ul>
            <li>Redux</li>
            <li>Middleware</li>
            <li>Thunk</li>
          </ul>
        </div>
        <div className="col">
          <h3>Javascript</h3>
          <ul>
            <li>Html</li>
            <li>Css</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="col">
          <h3>Ruby</h3>
          <ul>
            <li>Ruby on Rails</li>
            <li>Posgresql</li>
            <li>Puma</li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright ©2023 MealMate</p>
    </footer>
  );
};

export default Footer;
