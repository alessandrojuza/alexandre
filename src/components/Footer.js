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
        <FacebookIcon className="btn" />
        <InstagramIcon className="btn" />
        <LinkedInIcon className="btn" />
        <AlternateEmailIcon className="btn" />
      </div>
      <div className="footer-main"></div>
      <div className="footer-bottom"></div>
    </div>
  );
};

export default Footer;
