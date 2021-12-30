import React from "react";
import "../styles/Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-bar">
        <FacebookIcon className="btn btn-facebook" />
        <InstagramIcon className="btn btn-instagram" />
        <LinkedInIcon className="btn btn-linkedin" />
        <a href="mailto:mascia.alessandro89@gmail.com">
          <AlternateEmailIcon className="btn btn-email" />
        </a>
      </div>
      <div className="footer-main">
        <div className="footer-link-container">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#shop">Shop</a>
          <a href="mailto:mascia.alessandro89@gmail.com">Contact</a>
        </div>
        <div className="footer-address-container">
          <h4>Alexandre</h4>
          <p>Via Cagliari 117</p>
          <p>Domusnovas</p>
          <p>ITALY</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2021 Alexandre</p>
        <p>Cookies & Privacy</p>
      </div>
    </div>
  );
};

export default Footer;
