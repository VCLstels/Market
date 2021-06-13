import React from "react";

import Product from "../product";

const BodyContainer = ({
  isCase,
  marketCase,
  products,
  handleCheckProduct,
}) => {
  return (
    <div className="siteBody">
      {isCase && <p>Корзина: {marketCase}</p>}

      {!isCase &&
        products.map((item, index) => (
          <Product
            key={index}
            id={item.id}
            isChecked={item.isChecked}
            name={item.name}
            price={item.price}
            imgLink={item.image}
            handleUpdateData={handleCheckProduct}
          />
        ))}
    </div>
  );
};

export default BodyContainer;
