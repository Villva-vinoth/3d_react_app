import React from "react";
import './ProductHeader.css'
const ProductHeader = () => {
  return (
    <div className="product-header-display">
      <div className="product-header-topic">
        Products
        <span className="product-header-underlineGlow">
        <span className="crackle"></span>
        </span>
      </div>
      <div className="product-header-description">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eius labore delectus repellat, quia, fugit velit eveniet, rem quas eos. Harum eius voluptatem praesentium iste tenetur atque iure hic.
        </p>
      </div>
    </div>
  );
};

export default ProductHeader;
