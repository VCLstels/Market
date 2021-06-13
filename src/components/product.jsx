import React from "react";

import "../App.css";

const Product = ({ imgLink, price, name, handleUpdateData, id, isChecked }) => {
  return (
    <div className="productCard">
      <img src={imgLink} alt="product" className="productImage" />

      <p>Купить {name}</p>

      <p>Цена: {price} гривен</p>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => handleUpdateData(id)}>
        {!isChecked ? "Купить" : "Убрать из корзины"}
      </button>
    </div>
  );
};

export default Product;
