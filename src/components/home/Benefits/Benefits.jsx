import React, { useState } from 'react';
import './Benefits.css';
import img from './seal.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from '../../Assets/prevArrow.png'

const PrevButton = ({ ...props }) => {
    const { onClick } = props
    return (
        <img src={prev} {...props} />
    )

}

const NextButton = ({ ...props }) => {
    const { onClick } = props
    return (
        <img src={prev} {...props} />
    )

}

const Benefits = () => {


    const data = [
        { topic: "benefits", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "1" },
        { topic: "benefits1", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "2" },
        { topic: "benefits2", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "3" },
    ];




    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    };



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
                <img src='https://m.media-amazon.com/images/I/41KkTPn3dCL._AC_UF1000,1000_QL80_.jpg' alt='' className='Benefit-product-img' />
            </picture>
            <div className='Benefits-outer-display'>
                <Slider {...settings}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='Benefits-carosel-container'>
                                    <div>{item.topic}</div>
                                    <picture className='Benefit-carosel-l'></picture>
                                    <div className='Benefit-carosel-d'></div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    );
}

export default Benefits;
