import React, { useState } from "react";
import "../styles/Sidebar.scss";

const Sidebar = () => {
  const [sideBarClass, setSideBarClass] = useState("hidden");

  return (
    <div className={`sidebar`}>
      {/* <div className={`sidebar ${sideBarClass}`}> */}
      <div className="upper-container">
        <a>X</a>
      </div>
      <div className="section-container">
        <h1>Home</h1>
        <h1>Shop</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className="bottom-container">
        {/* <img src="../img/logo.png" alt="logo" className="logo" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
