import React from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";
import FadeIn from "react-fade-in";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header-sub">
        <div className="div-1">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a href="mailto:mascia.alessandro89@gmail.com">Contact</a>
            <ShoppingCartIcon className="btn" />

            <p></p>
          </div>
        </div>
        <div className="div-2">
          <FadeIn transitionDuration="2500">
            <h1>AS UNIQUE AS YOU ARE.</h1>
          </FadeIn>
        </div>
        <div className="div-3"></div>
      </div>
    </div>
  );
};

export default Header;
