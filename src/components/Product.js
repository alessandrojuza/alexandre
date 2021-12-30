import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import ModalProduct from "./ModalProduct";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ReactTooltip from "react-tooltip";

const Product = ({ imgUrl, nameUrl, priceUrl }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={imgUrl} alt="product image" />
      </div>
      <div className="product-description">
        <p>{nameUrl}</p>
        <p>€ {priceUrl}</p>
      </div>
      <div className="button-container">
        <AddShoppingCartIcon className="btn" data-tip="Add to cart" />
        <FavoriteBorderIcon className="btn" data-tip="Add to Favorites" />
        {/* <ZoomInIcon className="btn" /> */}
      </div>
      <ReactTooltip type="light" border="true" borderColor="grey" />
    </div>
  );
};

export default Product;
