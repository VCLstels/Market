import React from "react";
import "./style.css";

const ModalCaseComponent = ({ handleClick, marketCase }) => {
  return (
    <div className="modalMarketCase">
      <div className="caseContainer">
        <div className="caseContainer-header">
          <span>Корзина</span>

          <span onClick={handleClick}>X</span>
        </div>

        <div className="caseContainer-body">
          {marketCase.map((item, index) => (
            <div key={index}>{item.name} </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalCaseComponent;
