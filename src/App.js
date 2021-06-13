import React, { useState } from "react";
import "./App.css";

import { productsArray } from "./constants";
import BodyContainer from "./components/body/container";
import ModalCaseContainer from "./components/modalCase/container";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [products, setProducts] = useState(productsArray);
  const [marketCase, setCase] = useState([]);

  console.log(marketCase);

  const handleCheckProduct = (id) => {
    const newProducts = products.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    const newCase = [
      ...marketCase,
      newProducts.filter((item) => item.id === id)[0],
    ];

    setProducts(newProducts);
    setCase(newCase);
  };

  const handleShow = () => setIsShow(!isShow);

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <p>Ivan Chernioglo</p>

          <button onClick={handleShow}>Market Case</button>
        </header>

        <BodyContainer
          products={products}
          marketCase={marketCase}
          handleCheckProduct={handleCheckProduct}
        />
      </div>

      {isShow && (
        <ModalCaseContainer handleClick={handleShow} marketCase={marketCase} />
      )}
    </div>
  );
}

export default App;
