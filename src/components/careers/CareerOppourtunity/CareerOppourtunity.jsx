import React from 'react'
import './careerOppourtunity.css'
import rD from '../../Assets/careers/rd.png'
import engineering from '../../Assets/careers/engineering.png'
import fuelForFuture from '../../Assets/careers/fuel.png'
import motor from '../../Assets/careers/motor.png'
import marketing from '../../Assets/careers/marketing.png'
import operation from '../../Assets/careers/operation.png'
const CareerOppourtunity = () => {
    return (
        <div className='career-opportunity'>
            <div className='career-opportunity-header'>
                <h3>Explore Career Opportunities</h3>
                <div>Discover diverse career opportunities across various departments</div>
            </div>
            <div className='career-discussion-content'>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={rD} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Research and development</h3>
                    </div>
                    <div className='career-opt-card-para'>
                        Contribute to cutting-edge projects, drive innovation, and be a part of groundbreaking discoveries in our R&D department.
                    </div>
                </div>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={motor} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Motor Manufacturing</h3>
                    </div>
                    <div className='career-opt-card-para'>
                    Join our skilled team of engineers and technicians to be at the forefront of developing high-performance motors that power the future.                    </div>
                </div>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={engineering} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Engineering</h3>
                    </div>
                    <div className='career-opt-card-para'>
                    Bring your engineering expertise to the table and contribute to the design, development, and optimization of advanced technologies.                    </div>
                </div>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={operation} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Operations</h3>
                    </div>
                    <div className='career-opt-card-para'>
                    Play a crucial role in the smooth functioning of our manufacturing processes and ensure the quality and efficiency of our operations.                    </div>
                </div>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={marketing} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Marketing</h3>
                    </div>
                    <div className='career-opt-card-para'>
                    Drive growth and build relationships: Become a key player in our passionate Marketing and Business development team.                    </div>
                </div>
                <div className='career-opportunity-card'>
                    <div className='career-opt-card-pic'>
                        <img src={fuelForFuture} alt='' />
                    </div>
                    <div className='career-opt-card-header'>
                        <h3>Fuel your future</h3>
                    </div>
                    <div className='career-opt-card-para'>
                    Kickstart your career in a supportive environment with our exciting internship opportunities.                    </div>
                </div>

            </div>
        </div>
    )
}

export default CareerOppourtunity