import React from 'react';
import videoBg from '../../../imgs/bg.mp4';
import './Landing.css'; // Ensure you link the CSS file

const Landing = () => {
  return (
    <div className='main'>
      <video className="videoBg" autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="content">
      
        <h1>Are you open for success?</h1>
        <p>As Asia’s leading e-commerce hub, we have the experience and  expertise that will allow you and your global trading partners to continue to excel even as new industry models emerge.

</p>

      </div>
    </div>
  );
};

export default Landing;
