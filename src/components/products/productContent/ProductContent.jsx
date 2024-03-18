import React from 'react'
import motor1 from '../../Assets/mainpageMotor.png'
import './productContent.css'
const ProductContent = () => {
  return (
    <div className='product-content'>

      <picture className='Product-content-picture'>
        <img src={motor1} alt='' />
      </picture>
      <div className='product-content-container'>
        <h1>1KW MOTOR</h1>
        <p>Discover our cutting-edge 1kW axial flux motor, engineered for efficiency and
          performance. Ideal for EV & Robotics, this compact and powerful motor delivers
          reliable operation and optimal energy utilization.</p>
        <div className='product-content-grid'>
          <div className='product-content-container-one'>
            <h5>Voltage Range(V)</h5>
            <h4>48/60/72</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Rated Power(kW)</h5>
            <h4>2.5kW - 3.5kW</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Peak Power(kW)</h5>
            <h4>4kW - 7.5kW</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Max RPM</h5>
            <h4>5100 RPM</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Peak Torque(Nm)</h5>
            <h4>25Nm</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Overload Torque(Nm)</h5>
            <h4>40Nm</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Duty Cycle</h5>
            <h4>S9</h4>
          </div>
          <div className='product-content-container-one'>
            <h5>Weight(kg)</h5>
            <h4>7 kgs</h4>
          </div>
        </div>
        <div className='product-content-btn-div'>
          <button className='prouct-content-btn'>get</button>
        </div>
      </div>
    </div>

  )
}

export default ProductContent