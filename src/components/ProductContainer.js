import axios from "axios";
import React, { useState, useEffect } from "react";
import "../styles/ProductContainer.scss";
import Product from "./Product";

const ProductContainer = ({ productArray, setProductArray }) => {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProductArray(res.data));

    console.log(productArray);
  }, []);

  return (
    <div className="product-container-parent" id="shop">
      <div className="product-container-header">
        <h1>New Arrivals</h1>
      </div>
      <div className="product-container">
        {productArray.map((e) => {
          return (
            <Product imgUrl={e.image} nameUrl={e.title} priceUrl={e.price} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductContainer;
