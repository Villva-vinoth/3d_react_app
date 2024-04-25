import React, { useEffect, useState } from 'react'
import './testimonialCarosel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from '../../../Assets/prevArrow.png'
import testmonialPerson from '../../../Assets/Testimonial/image.png'
import testmonialPerson2 from '../../../Assets/home/productCaroselimg/Rectangle 61.png'
import quoteRight from '../../../Assets/Testimonial/quoteRight.png'
import quoteLeft from '../../../Assets/Testimonial/quoteLeft.png'
import axios from 'axios'
import { GET_ALL_TESTIMONIALS } from '../../../../apiServices';
const PrevButton = ({ currentSlide, slideCount, ...props }) => {
    return (
        <img src={prev} {...props} className={
            "slick-prev slick-arrow next-btn" 
          } aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false} />
    )

}

const NextButton = ({ currentSlide, slideCount, ...props }) => {
    
    return (
        <img src={prev} {...props} className={
            "slick-next slick-arrow next-btn" 
            // (currentSlide === slideCount - 1 ? "slick-disabled" : "")
          } aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false} />
    )
}
const TestimonialCarosel = () => {

    let data = [{
        img: testmonialPerson2, comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem 
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    ook a galley of type dummy text of the printing and typesetting industry`, name: "Steve McCurry"
    },
    {
        img: testmonialPerson, comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem 
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    ook a galley of type dummy text of the printing and typesetting industry`, name: "Steve McCurry"
    },
    {
        img: testmonialPerson, comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem 
    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
    ook a galley of type dummy text of the printing and typesetting industry`, name: "Steve McCurry"
    }
    ]

    const [testimonialsItems,setTestimonialsItems] =useState([])

    useEffect( ()=>{
        const getAllTestimonials = async ()=>{
            await axios.get(GET_ALL_TESTIMONIALS).then((res)=>{
                console.log(res.data.data)
                setTestimonialsItems(res.data.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
        getAllTestimonials()
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />
    };

    return (
        <div className='Test-carosel-main'>
            <div className='testimonial-h2'>
                <h2>Hear from Happy Clients</h2>
            </div>
            <div className='Test-carosel-container'>
                <Slider {...settings}>
                    {
                        testimonialsItems.map((item, index) => {
                            return (
                                <div className='carosel-testimonial-container'>
                                   <picture className='carosel-testimonial-container-pic'>
                                    <img src={quoteLeft} alt='' className='quote-icons' />
                                        <img src={item.testimonials_image} alt='' className='testimonials-img' />
                                        <img src={quoteRight} alt='' className='quote-icons'/>
                                    </picture>
                                    <div className='carosel-testimonial-para'>{item.testimonials_description}</div>
                                    <h4>{item.testimonials_name}</h4>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default TestimonialCarosel