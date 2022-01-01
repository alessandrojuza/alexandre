import React from "react";
import "../styles/CartProduct.scss";

const CartProduct = ({ cartArray, setCartArray, img }) => {
  return (
    <div className="cart-product">
      <p></p>
      <img src={img} alt="" />
      {/* <p>{cartArray.nameUrl}</p> */}
      <p>Prezzo</p>
    </div>
  );
};

export default CartProduct;
