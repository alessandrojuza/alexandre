import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [productArray, setProductArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <ProductContainer
        productArray={productArray}
        setProductArray={setProductArray}
      />
      <About />
      <Footer />
    </div>
  );
}

export default App;
