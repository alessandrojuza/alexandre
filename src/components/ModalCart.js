import React, { useState, useEffect } from "react";
import "../styles/ModalCart.scss";
import CartProduct from "./CartProduct";

const ModalCart = ({
  modalCartClass,
  setModalCartClass,
  cartArray,
  setCartArray,
}) => {
  const [buttonClass, setButtonClass] = useState("hidden");
  const [topMessage, setTopMessage] = useState("");

  const getTopMessage = () => {
    setTopMessage(cartArray.length === 0 ? "Your cart is empty" : "Your cart:");
  };

  const hideIfEmpty = () => {
    if (cartArray.length === 0) setModalCartClass("hidden");
  };

  useEffect(getTopMessage);
  useEffect(hideIfEmpty);

  return (
    <div className={`main-container ${buttonClass}`}>
      <div className={`modal-cart ${modalCartClass}`}>
        <h4>{topMessage}</h4>

        {cartArray.map((e, index) => {
          return (
            <CartProduct
              topMessage={topMessage}
              setTopMessage={setTopMessage}
              getTopMessage={getTopMessage}
              modalCartClass={modalCartClass}
              setModalCartClass={setModalCartClass}
              setCartArray={setCartArray}
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
