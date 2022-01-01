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
  const [navBarClass, setNavBarClass] = useState("hidden");

  const showNavBar = () => {
    setNavBarClass("visible");
  };

  return (
    <div className="App">
      <Header />
      <ProductContainer
        productArray={productArray}
        setProductArray={setProductArray}
        showNavBar={showNavBar}
      />
      <About />
      <Footer />
      {/* <NavBar navBarClass={navBarClass} /> */}
      <Bot />
    </div>
  );
}

export default App;
