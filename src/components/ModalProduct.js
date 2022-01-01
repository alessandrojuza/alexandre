import React, { useState } from "react";
import "../styles/ModalProduct.scss";
import CancelIcon from "@mui/icons-material/Cancel";

const ModalProduct = ({
  nameUrl,
  productId,
  priceUrl,
  imgUrl,
  description,
  modalClassName,
  hideModalProduct,
}) => {
  return (
    <div className="main-container">
      {/* <div className={`background ${modalClassName}`}></div> */}
      <div className={`background`}></div>
      <div className="modal-container">
        <div className={`${modalClassName} modal-product`}>
          <div className="div-1">
            <CancelIcon onClick={hideModalProduct} className="btn" />
          </div>
          <div className="div-2">
            <img src={imgUrl} alt="" />
          </div>
          <div className="div-3">
            <h3>{nameUrl}</h3>
            <p>{description}</p>
            <h3>€ {priceUrl}</h3>
            <div className="btn-container">
              <button className="add-to-cart">Add to cart</button>
              <button className="cancel" onClick={hideModalProduct}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
