import React from "react";
import "../styles/NavBar.scss";

const NavBar = ({ navBarClass }) => {
  return (
    <div className={`navbar ${navBarClass}`}>
      <h1>Ciao</h1>
    </div>
  );
};

export default NavBar;
