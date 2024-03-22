import React, { useState } from 'react';
import './Benefits.css';
import img from '../../Assets/home/Benefit/Mask group.png'
import motor from '../../Assets/home/Benefit/image.png'
import CaroselBenefit from './CaroselBenefit';



const Benefits = () => {




    return (
        <div className='Benefits-display'>


            <picture className='Benefit-img'>
                <h1 className='Benefit-TAFM'>
                    <span className='color-white'>T</span>
                    <span className='color-white'>A</span>
                    <span className='color-grey'>F</span>
                    <span className='color-grey'>M</span>
                </h1>
                <img src={img} alt='' className='Benefit-logo' />
                <img src={motor} alt='' className='Benefit-product-img' />
            </picture>
            <div className='Benefits-outer-display'>
                <CaroselBenefit />
            </div>

        </div>
    );
}

export default Benefits;
