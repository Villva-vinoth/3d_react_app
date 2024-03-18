import React from "react";
import './ProductHeader.css'
import userline from '../../Assets/underLine.png'
const ProductHeader = () => {
  return (
    <div className="product-header-display">
      <div className="product-header-topic">
       <h2> Products</h2>
        <img src= {userline} alt="loading"/>
      </div>
      <div className="product-header-description">
        <p>
        At Torus, we stand at the forefront of innovation in the realm of Axial Flux Motors and Controllers. Our product and technology page is your gateway to understanding the 
transformative power and unmatched engineering excellence that define our offerings. At Torus, we don't just manufacture motors and controllers; we engineer possibilities. Explore 
our product and technology page to embark on a journey into the future of electric propulsion – where power, precision, and sustainability converge. Join us in redefining the 
dynamics of motion with Torus Robotics.</p>
      </div>
    </div>
  );
};

export default ProductHeader;
