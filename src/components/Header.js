import React, { useState } from "react";
import "../styles/Header.scss";
import "../queries/HeaderQueries.scss";
import logo from "../img/logo.png";
import FadeIn from "react-fade-in";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
  const [sideBarClass, setSideBarClass] = useState("hidden");

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

  const openSideBar = () => {
    setSideBarClass("visible");
  };

  return (
    <div className="header" id="home">
      <div className="header-sub">
        <Sidebar
          sideBarClass={sideBarClass}
          setSideBarClass={setSideBarClass}
        />

        <div className="div-1">
          <div className="logo-button-container">
            <img src={logo} alt="logo" className="logo" />
            <MenuIcon className="sidebar-btn" onClick={openSideBar} />
            <img src={logo} alt="logo" className="logo-responsive" />
          </div>
          <div className="menu">
            <a href="#home" className="menu-item">
              Home
            </a>
            <a href="#shop" className="menu-item">
              Shop
            </a>
            <a href="#about" className="menu-item">
              About
            </a>
            <a
              href="mailto:mascia.alessandro89@gmail.com"
              className="menu-item"
            >
              Contact
            </a>
            <FavoriteIcon
              className="btn btn-favorite menu-item"
              onClick={showModalFavorite}
            />
            <ShoppingCartIcon
              className="btn btn-cart menu-item"
              onClick={showModalCart}
            />

            <p></p>
          </div>
        </div>
        <div className="div-2">
          <FadeIn transitionDuration="2500" className="fadein">
            <h1 className="motto">AS UNIQUE AS YOU ARE.</h1>
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
