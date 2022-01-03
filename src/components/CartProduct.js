import React from "react";
import "../styles/CartProduct.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const CartProduct = ({
  topMessage,
  setTopMessage,
  getTopMessage,
  modalCartClass,
  setModalCartClass,
  cartArray,
  setCartArray,
  imgUrl,
  nameUrl,
  priceUrl,
  id,
  totalCart,
  setTotalCart,
}) => {
  const shortenProductName = (name) => {
    if (name.length > 40) return name.slice(0, 40) + "...";
    else return name;
  };

  const deleteItem = () => {
    setCartArray(cartArray.filter((e) => e.id !== id));
    setTotalCart(Number(totalCart) - Number(priceUrl));
  };

  return (
    <div className="cart-product">
      <p></p>
      <img src={imgUrl} alt="product image" />
      <div className="name-price-container">
        <p>{shortenProductName(nameUrl)}</p>
        <h4>€ {priceUrl}</h4>
      </div>
      <DeleteIcon onClick={deleteItem} className="delete-icon" />
    </div>
  );
};

export default CartProduct;
