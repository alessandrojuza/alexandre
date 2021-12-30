import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Product = ({ imgUrl, nameUrl, priceUrl }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={imgUrl} alt="" />
      </div>
      <div className="product-description">
        <p>{nameUrl}</p>
        <p>€ {priceUrl}</p>
      </div>
      <div className="button-container">
        <AddShoppingCartIcon className="btn" />
        <FavoriteBorderIcon className="btn" />
        <ZoomInIcon className="btn" />
      </div>
    </div>
  );
};

export default Product;
