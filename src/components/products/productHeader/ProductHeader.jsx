import React from "react";
import './ProductHeader.css'
const ProductHeader = () => {
  return (
    <div className="product-header-display">
      <div className="product-header-topic">
       <h2> Products</h2>
      </div>
      <div className="product-header-description">
        <p className="poppins">
        At Torus, we revolutionize the world of power
         trains with our cutting-edge motor and controller systems.
          Our products are designed where power, precision, and sustainability
         converge to deliver unparalleled performance.</p>
      </div>
    </div>
  );
};

export default ProductHeader;
