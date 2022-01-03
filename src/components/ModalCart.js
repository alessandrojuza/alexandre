import React, { useState, useEffect } from "react";
import "../styles/ModalCart.scss";
import CartProduct from "./CartProduct";

const ModalCart = ({
  modalCartClass,
  setModalCartClass,
  cartArray,
  setCartArray,
  totalCart,
  setTotalCart,
}) => {
  const [buttonClass, setButtonClass] = useState("visible");
  const [topMessage, setTopMessage] = useState("");
  const [grandTotal, setGrandTotal] = useState("");

  const getTopMessage = () => {
    setTopMessage(cartArray.length === 0 ? "Your cart is empty" : "Your cart:");
  };

  const hideIfEmpty = () => {
    if (cartArray.length === 0) setModalCartClass("hidden");
    if (cartArray.length === 0) setButtonClass("");
  };

  const handleTotal = () => {
    if (cartArray.length > 0) setGrandTotal(totalCart.toFixed(2));
    else setGrandTotal("");
  };

  useEffect(getTopMessage);
  useEffect(hideIfEmpty);
  useEffect(handleTotal);

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
              totalCart={totalCart}
              setTotalCart={setTotalCart}
            />
          );
        })}
        <button
          className={`${buttonClass} btn`}
        >{`CHECKOUT € ${grandTotal}`}</button>
      </div>
    </div>
  );
};

export default ModalCart;
