import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import Footer from "./components/Footer";
import ModalProduct from "./components/ModalProduct";

function App() {
  const [productArray, setProductArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <ProductContainer
        productArray={productArray}
        setProductArray={setProductArray}
      />
      <Footer />
      <ModalProduct
        productArray={productArray}
        setProductArray={setProductArray}
      />
    </div>
  );
}

export default App;
