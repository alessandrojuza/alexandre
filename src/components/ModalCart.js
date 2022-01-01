import React, { useState } from "react";
import "../styles/ModalCart.scss";
import CartProduct from "./CartProduct";

const ModalCart = ({ modalCartClass, cartArray, setCartArray }) => {
  return (
    <div className={`modal-cart ${modalCartClass}`}>
      {cartArray.map((e) => {
        return (
          <CartProduct cartArray={cartArray} img={e.img} cartPrice={e.price} />
        );
      })}
    </div>
  );
};

export default ModalCart;
