import React, { useState } from "react";
import "../styles/ModalCart.scss";
import CartProduct from "./CartProduct";

const ModalCart = ({ modalCartClass, cartArray, setCartArray }) => {
  const [buttonClass, setButtonClass] = useState("hidden");

  return (
    <div className={`main-container ${buttonClass}`}>
      <div className={`modal-cart ${modalCartClass}`}>
        <h3>Your cart:</h3>

        {cartArray.map((e, index) => {
          return (
            <CartProduct
              cartArray={cartArray}
              imgUrl={e.imgUrl}
              priceUrl={e.priceUrl}
              nameUrl={e.nameUrl}
              id={e.id}
              key={index}
            />
          );
        })}
        <button className={buttonClass}>CHECKOUT</button>
      </div>
    </div>
  );
};

export default ModalCart;
