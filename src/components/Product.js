import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import ModalProduct from "./ModalProduct";
import ModalBackground from "./ModalBackground";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ReactTooltip from "react-tooltip";

const Product = ({
  imgUrl,
  nameUrl,
  priceUrl,
  id,
  description,
  cartArray,
  setCartArray,
}) => {
  const [title, setTitle] = useState("");
  const [productId, setProductId] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [modalClassName, setModalClassName] = useState("hidden");

  const renderModalProduct = () => {
    setTitle(nameUrl);
    setPrice(priceUrl);
    setImg(imgUrl);
    setModalClassName("visible");
  };

  const hideModalProduct = () => {
    setModalClassName("hidden");
  };

  const addToCart = () => {
    setCartArray((prev) => [
      {
        cartPrice: priceUrl,
        cartImg: imgUrl,
        cartTitle: nameUrl,
        cartId: id,
      },
      ...prev,
    ]);
    console.log(cartArray);
    console.log(imgUrl, nameUrl, priceUrl);
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
        <AddShoppingCartIcon
          className="btn btn-add-to-cart"
          onClick={addToCart}
        />
        <FavoriteBorderIcon className="btn btn-favorite" />
      </div>
    </div>
  );
};

export default Product;
