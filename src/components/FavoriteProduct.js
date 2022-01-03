import React from "react";
import "../styles/FavoriteProduct.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const FavoriteProduct = ({
  cartArray,
  setCartArray,
  imgUrl,
  nameUrl,
  priceUrl,
  id,
}) => {
  const shortenProductName = (name) => {
    if (name.length > 40) return name.slice(0, 40) + "...";
    else return name;
  };

  return (
    <div className="favorite-product">
      <p></p>
      <img src={imgUrl} alt="product image" />
      <div className="name-price-container">
        <p>{shortenProductName(nameUrl)}</p>
        <h4>€ {priceUrl}</h4>
      </div>
      <DeleteIcon />
    </div>
  );
};

export default FavoriteProduct;
