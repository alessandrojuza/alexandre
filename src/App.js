import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import About from "./components/About";
import Footer from "./components/Footer";
import Bot from "./components/ChatBot";
import ModalProduct from "./components/ModalProduct";

function App() {
  const [productArray, setProductArray] = useState([]);
  const [cartArray, setCartArray] = useState([]);
  const [favoriteArray, setFavoriteArray] = useState([]);
  const [totalCart, setTotalCart] = useState("");

  const [navBarClass, setNavBarClass] = useState("hidden");

  const showNavBar = () => {
    setNavBarClass("visible");
  };

  return (
    <div className="App">
      <Header
        cartArray={cartArray}
        setCartArray={setCartArray}
        favoriteArray={favoriteArray}
        setFavoriteArray={setFavoriteArray}
        totalCart={totalCart}
        setTotalCart={setTotalCart}
      />
      <ProductContainer
        productArray={productArray}
        setProductArray={setProductArray}
        showNavBar={showNavBar}
        cartArray={cartArray}
        setCartArray={setCartArray}
        favoriteArray={favoriteArray}
        setFavoriteArray={setFavoriteArray}
        totalCart={totalCart}
        setTotalCart={setTotalCart}
      />
      <About />
      <Footer />
      {/* <NavBar navBarClass={navBarClass} /> */}
      <Bot />
    </div>
  );
}

export default App;
