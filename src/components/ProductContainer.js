import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/ProductContainer.scss";
import Product from "./Product";
import uniqid from "uniqid";

const ProductContainer = ({
  productArray,
  setProductArray,
  showNavBar,
  cartArray,
  setCartArray,
  favoriteArray,
  setFavoriteArray,
}) => {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductArray(res.data));
  }, []);

  return (
    <div className="product-container-parent" id="shop" onScroll={showNavBar}>
      <div className="product-container-header">
        <h1>New Arrivals</h1>
      </div>
      <div className="product-container">
        {productArray.map((e, index) => {
          return (
            <Product
              imgUrl={e.image}
              nameUrl={e.title}
              priceUrl={e.price}
              id={e.id}
              description={e.description}
              cartArray={cartArray}
              setCartArray={setCartArray}
              productArray={productArray}
              favoriteArray={favoriteArray}
              setFavoriteArray={setFavoriteArray}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductContainer;
