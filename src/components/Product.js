import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Anime, { anime } from "react-anime";

const Product = ({
  imgUrl,
  nameUrl,
  priceUrl,
  id,
  description,
  cartArray,
  setCartArray,
  productArray,
  play,
  favoriteArray,
  setFavoriteArray,
}) => {
  const [title, setTitle] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [modalClassName, setModalClassName] = useState("hidden");

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
        <h3>€ {priceUrl}</h3>
      </div>
      <div className="button-container">
        <Anime
          delay={(el, index) => index * 240}
          scale={[1, 0.5, 1]}
          color={("rgb(43, 43, 43)", "rgb(170, 0, 0);")}
          autoplay={playCartAnimation}
          easing="linear"
          duration={300}
          className="animation"
        >
          <AddShoppingCartIcon
            className="btn btn-add-to-cart"
            onClick={(toggleCartAnimation, addToCart)}
            // onClick={addToCart}
          />
        </Anime>

        <Anime
          delay={(el, index) => index * 240}
          scale={[1, 0.5, 1]}
          color={("rgb(43, 43, 43)", "rgb(170, 0, 0);")}
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
