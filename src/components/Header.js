import React, { useState } from "react";
import "../styles/Header.scss";
import logo from "../img/logo.png";
import FadeIn from "react-fade-in";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import ModalCart from "./ModalCart";
import ModalFavorite from "./ModalFavorite";
import Sidebar from "./Sidebar";

const Header = ({
  showNavBar,
  setNavBarClass,
  cartArray,
  setCartArray,
  favoriteArray,
  setFavoriteArray,
  totalCart,
  setTotalCart,
}) => {
  const [modalCartClass, setModalCartClass] = useState("hidden");
  const [modalFavoriteClass, setModalFavoriteClass] = useState("hidden");
  const [favoriteAlertShow, setFavoriteAlertShow] = useState("hidden");
  const [cartAlertShow, setCartAlertShow] = useState("hidden");

  const showModalCart = () => {
    setModalFavoriteClass("hidden");
    if (cartArray.length > 0) {
      modalCartClass === "hidden"
        ? setModalCartClass("visible")
        : setModalCartClass("hidden");
    }
    showCartAlert();
  };
  const showModalFavorite = () => {
    setModalCartClass("hidden");
    if (favoriteArray.length > 0) {
      modalFavoriteClass === "hidden"
        ? setModalFavoriteClass("visible")
        : setModalFavoriteClass("hidden");
    }
    showFavoriteAlert();
  };

  const showFavoriteAlert = () => {
    if (favoriteArray.length === 0) {
      setFavoriteAlertShow("visible");
      setTimeout(() => {
        setFavoriteAlertShow("hidden");
      }, 2000);
    }
  };

  const showCartAlert = () => {
    if (cartArray.length === 0) {
      setCartAlertShow("visible");
      setTimeout(() => {
        setCartAlertShow("hidden");
      }, 2000);
    }
  };

  return (
    <div className="header" id="home" onScroll={showNavBar}>
      <div className="header-sub">
        <div className="div-1">
          <img src={logo} alt="logo" className="logo" />
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="mailto:mascia.alessandro89@gmail.com">Contact</a>
            <FavoriteIcon
              className="btn btn-favorite"
              onClick={showModalFavorite}
            />
            <ShoppingCartIcon
              className="btn btn-cart"
              onClick={showModalCart}
            />

            <p></p>
          </div>
          <div className="sidebar sidebar-hidden">
            <MenuIcon />
            <Sidebar />
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
        setModalCartClass={setModalCartClass}
        cartArray={cartArray}
        setCartArray={setCartArray}
        totalCart={totalCart}
        setTotalCart={setTotalCart}
      />
      <ModalFavorite
        modalFavoriteClass={modalFavoriteClass}
        setModalFavoriteClass={setModalFavoriteClass}
        favoriteArray={favoriteArray}
        setFavoriteArray={setFavoriteArray}
      />
      <div className={`favorite-is-empty ${favoriteAlertShow}`}>
        <p>You have no favorites!</p>
      </div>
      <div className={`cart-is-empty ${cartAlertShow}`}>
        <p>Your cart is empty!</p>
      </div>
    </div>
  );
};

export default Header;
