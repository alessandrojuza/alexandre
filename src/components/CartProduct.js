import React from "react";
import "../styles/CartProduct.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const CartProduct = ({
  cartArray,
  setCartArray,
  imgUrl,
  nameUrl,
  priceUrl,
  id,
}) => {
  return (
    <div className="cart-product">
      <p></p>
      <img src={imgUrl} alt="product image" />
      <div className="name-price-container">
        <p>{nameUrl.slice(0, 40)}</p>
        {/* <p>{nameUrl.slice(0, ) + "..."}</p> */}
        <h4>€ {priceUrl}</h4>
      </div>
      <DeleteIcon />
    </div>
  );
};

export default CartProduct;
