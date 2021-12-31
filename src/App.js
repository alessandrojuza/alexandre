import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Bot from "./components/ChatBot";

function App() {
  const [productArray, setProductArray] = useState([]);
  const [navBarClass, setNavBarClass] = useState("hidden");

  return (
    <div className="App">
      <Header />
      <ProductContainer
        productArray={productArray}
        setProductArray={setProductArray}
      />
      <About />
      <Footer />
      {/* <NavBar className={navBarClass} /> */}
      <Bot />
    </div>
  );
}

export default App;
