import React, { useEffect, useState } from "react";
import "../styles/Product.scss";
import ModalProduct from "./ModalProduct";
import ModalBackground from "./ModalBackground";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ReactTooltip from "react-tooltip";

const Product = ({ imgUrl, nameUrl, priceUrl, id, description }) => {
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

  return (
    <div className="product">
      <div className="img-container">
        <img src={imgUrl} alt="product image" onClick={renderModalProduct} />
      </div>
      <div className="product-description">
        <p>{nameUrl}</p>
        <p>€ {priceUrl}</p>
      </div>
      <div className="button-container">
        <AddShoppingCartIcon className="btn" data-tip="Add to cart" />
        <FavoriteBorderIcon className="btn" data-tip="Add to Favorites" />
        {/* <ZoomInIcon className="btn" /> */}
      </div>
      <ReactTooltip type="light" border="true" borderColor="grey" />
      <ModalBackground modalClassName={modalClassName} />
      <ModalProduct
        imgUrl={imgUrl}
        nameUrl={nameUrl}
        priceUrl={priceUrl}
        id={id}
        description={description}
        modalClassName={modalClassName}
        hideModalProduct={hideModalProduct}
      />
    </div>
  );
};

export default Product;
