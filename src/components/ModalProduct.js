import React, { useState } from "react";
import "../styles/ModalProduct.scss";

const ModalProduct = ({
  productArray,
  setProductArray,
  imgUrl,
  nameUrl,
  priceUrl,
}) => {
  return (
    <div className="modal-product">
      <p>CIAO CIAO CIAO CIAO</p>
      <img src="" alt="" />
      <p>{nameUrl}</p>
      <p>{priceUrl}</p>
    </div>
  );
};

export default ModalProduct;
