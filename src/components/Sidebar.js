import React, { useState } from "react";
import "../styles/Sidebar.scss";
import ModalCart from "./ModalCart";
import ModalFavorite from "./ModalFavorite";

const Sidebar = ({ sideBarClass, setSideBarClass }) => {
  const closeSideBar = () => {
    setSideBarClass("hidden");
  };

  return (
    <div className={`sidebar ${sideBarClass}`}>
      <div className="upper-container">
        <a onClick={closeSideBar} className="exit-button">
          X
        </a>
      </div>
      <div className="section-container">
        <a href="#home" className="section-links" onClick={closeSideBar}>
          Home
        </a>
        <a href="#shop" className="section-links" onClick={closeSideBar}>
          Shop
        </a>
        <a href="#about" className="section-links" onClick={closeSideBar}>
          About
        </a>
        <a
          href="mailto:mascia.alessandro89@gmail.com"
          className="section-links"
        >
          Contact
        </a>
      </div>
      <div className="bottom-container"></div>
    </div>
  );
};

export default Sidebar;
