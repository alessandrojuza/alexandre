import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";
import FadeIn from "react-fade-in";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModalCart from "./ModalCart";

const Header = ({ showNavBar, setNavBarClass, cartArray, setCartArray }) => {
  const [modalCartClass, setModalCartClass] = useState("hidden");
  const showModalCart = () =>
    modalCartClass === "hidden"
      ? setModalCartClass("visible")
      : setModalCartClass("hidden");

  return (
    <div className="header" id="home" onScroll={showNavBar}>
      <div className="header-sub">
        <div className="div-1">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#shop">Shop</a>
            <a href="mailto:mascia.alessandro89@gmail.com">Contact</a>
            <FavoriteIcon className="btn btn-favorite" />
            <ShoppingCartIcon
              className="btn btn-cart"
              onClick={showModalCart}
            />

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
      <ModalCart
        modalCartClass={modalCartClass}
        cartArray={cartArray}
        setCartArray={setCartArray}
      />
    </div>
  );
};

export default Header;
