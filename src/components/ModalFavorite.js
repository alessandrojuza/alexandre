import React, { useState } from "react";
import "../styles/ModalFavorite.scss";
import FavoriteProduct from "./FavoriteProduct";

const ModalFavorite = ({
  modalCartClass,
  cartArray,
  setCartArray,
  modalFavoriteClass,
  favoriteArray,
}) => {
  const [buttonClass, setButtonClass] = useState("hidden");

  return (
    <div className={`main-container ${buttonClass}`}>
      <div className={`modal-favorite ${modalFavoriteClass}`}>
        <h3>Your favorite items:</h3>
        {favoriteArray.map((e, index) => {
          return (
            <FavoriteProduct
              cartArray={cartArray}
              imgUrl={e.imgUrl}
              priceUrl={e.priceUrl}
              nameUrl={e.nameUrl}
              id={e.id}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModalFavorite;
