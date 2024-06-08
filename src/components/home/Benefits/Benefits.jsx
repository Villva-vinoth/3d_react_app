import React, { useEffect, useState } from 'react';
import './Benefits.css';
import img from '../../Assets/home/Benefit/Mask group.png'
import motor from '../../Assets/home/Benefit/image.png'
import CaroselBenefit from './CaroselBenefit';
import Aos from 'aos'
import 'aos/dist/aos.css'
import image1 from '../../Assets/home/motor.png'
const Benefits = () => {

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: "ease",
            delay: 100
        })
    })


    return (
        <div className='Benefits-display'>
            <picture className='Benefit-img' data-aos='fade-in'>
                <img src={img} alt='' className='Benefit-logo' />
                <img src={motor} alt='' className='Benefit-product-img' />
            </picture>
            <div className='Benefits-outer-display' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <CaroselBenefit />
            </div>
            <img src={image1} alt='' className='benefit-bg-pic' />

        </div>
    );
}

export default Benefits;
