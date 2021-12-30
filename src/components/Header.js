import React from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";
// import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

const Header = () => {
  return (
    <div className="header">
      <div className="header-sub">
        <div className="div-1">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu">
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact</p>
            <p></p>
          </div>
        </div>
        <div className="div-2">
          <h1>AS UNIQUE AS YOU ARE.</h1>
        </div>
        <div className="div-3"></div>
      </div>
    </div>
  );
};

export default Header;
