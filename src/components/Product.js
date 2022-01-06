import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import "../queries/ProductQueries.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Anime, { anime } from "react-anime";

const Product = ({
  imgUrl,
  nameUrl,
  priceUrl,
  id,
  setCartArray,
  setFavoriteArray,
  totalCart,
  setTotalCart,
}) => {
  const [playCartAnimation, setPlayCartAnimation] = useState(false);
  const [playFavoriteAnimation, setFavoriteCartAnimation] = useState(false);

  const toggleCartAnimation = () => {
    setPlayCartAnimation(true);
  };
  const toggleFavoriteAnimation = () => {
    setFavoriteCartAnimation(true);
  };

  const addToCart = () => {
    toggleCartAnimation();
    setCartArray((prev) => [
      {
        imgUrl: imgUrl,
        nameUrl: nameUrl,
        priceUrl: priceUrl,
        id: id,
      },
      ...prev,
    ]);
    setTotalCart(Number(totalCart) + Number(priceUrl));
    console.log(totalCart);
  };
  const addToFavorite = () => {
    toggleFavoriteAnimation();
    setFavoriteArray((prev) => [
      {
        imgUrl: imgUrl,
        nameUrl: nameUrl,
        priceUrl: priceUrl,
        id: id,
      },
      ...prev,
    ]);
  };

  return (
    <div className="product">
      <div className="img-container">
        <img src={imgUrl} alt="product image" />
      </div>
      <div className="product-description">
        <p>{nameUrl}</p>
        <h3>€ {priceUrl.toFixed(2)}</h3>
      </div>
      <div className="button-container">
        <Anime
          delay={(el, index) => index * 240}
          scale={[1, 1.4, 1]}
          autoplay={playCartAnimation}
          easing="linear"
          duration={300}
          className="animation"
        >
          <AddShoppingCartIcon
            className="btn btn-add-to-cart"
            onClick={(toggleCartAnimation, addToCart)}
          />
        </Anime>

        <Anime
          delay={(el, index) => index * 240}
          scale={[1, 1.4, 1]}
          autoplay={playFavoriteAnimation}
          easing="linear"
          duration={300}
          className="animation"
        >
          <FavoriteBorderIcon
            className="btn btn-favorite"
            onClick={(toggleFavoriteAnimation, addToFavorite)}
          />
        </Anime>
      </div>
    </div>
  );
};

export default Product;
