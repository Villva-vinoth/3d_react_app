import React from 'react'
import './careerHeader.css'
import userline from '../../Assets/underLine.png'

const CareerHeader = () => {
    return (
        <div className="career-header-display">
            <div className="career-header-topic">
                <h2> Careers  </h2>
                {/* <img src={userline} alt="loading" />     */}
            </div>
            <div className="career-header-description">
                <p>
                    At Torus, we are more than just a workplace; we are a community of passionate individuals dedicated to pushing the boundaries of innovation in Research and Development (R&D)
                    and Motor Manufacturing. As a leading player in the industry, we take pride in fostering a dynamic and collaborative environment that encourages creativity and excellence. </p>
            </div>
        </div>
    )
}

export default CareerHeader