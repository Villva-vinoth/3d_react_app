import React, { useEffect, useState } from 'react';
import './Benefits.css';
import img from '../../Assets/home/Benefit/Mask group.png'
import motor from '../../Assets/home/Benefit/image.png'
import CaroselBenefit from './CaroselBenefit';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Benefits = () => {

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: "ease",
            delay: 100
        })
    })

    // const [sta]


    return (
        <div className='Benefits-display'>


            <picture className='Benefit-img' data-aos='fade-in'>
                <h1 className='Benefit-TAFM'>
                    <span className='color-white'>T</span>
                    <span className='color-white'>A</span>
                    <span className='color-grey'>F</span>
                    <span className='color-grey'>M</span>
                </h1>
                <img src={img} alt='' className='Benefit-logo' />
                <img src={motor} alt='' className='Benefit-product-img' />
            </picture>
            <div className='Benefits-outer-display' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <CaroselBenefit />
            </div>

        </div>
    );
}

export default Benefits;
