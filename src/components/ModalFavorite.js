import React, { useState, useEffect } from "react";
import "../styles/ModalFavorite.scss";
import FavoriteProduct from "./FavoriteProduct";

const ModalFavorite = ({
  modalFavoriteClass,
  setModalFavoriteClass,
  favoriteArray,
  setFavoriteArray,
}) => {
  const [buttonClass, setButtonClass] = useState("hidden");
  const [topMessage, setTopMessage] = useState("");

  const getTopMessage = () => {
    setTopMessage(
      favoriteArray.length === 0 ? "No favorite items" : "Your favorite items:"
    );
  };

  const hideIfEmpty = () => {
    if (favoriteArray.length === 0) {
      setModalFavoriteClass("hidden");
    }
  };

  useEffect(getTopMessage);
  useEffect(hideIfEmpty);

  return (
    <div className={`main-container ${buttonClass}`}>
      <div className={`modal-favorite ${modalFavoriteClass}`}>
        <h4>{topMessage}</h4>
        {favoriteArray.map((e, index) => {
          return (
            <FavoriteProduct
              favoriteArray={favoriteArray}
              setFavoriteArray={setFavoriteArray}
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
