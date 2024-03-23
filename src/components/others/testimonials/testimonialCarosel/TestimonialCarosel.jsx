import React from 'react'
import './testimonialCarosel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import prev from '../../../Assets/prevArrow.png'
import testmonialPerson from '../../../Assets/Testimonial/image.png'
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { LiaQuoteRightSolid } from "react-icons/lia";
import quoteRight from '../../../Assets/Testimonial/quoteRight.png'
import quoteLeft from '../../../Assets/Testimonial/quoteLeft.png'

const PrevButton = ({ ...props }) => {
    const { onClick } = props
    return (
        <img src={prev} {...props} style={{backgroundColor:"white"}} />
    )

}

const NextButton = ({ ...props }) => {
    const { onClick } = props
    return (
        <img src={prev} {...props} />
    )
}
const TestimonialCarosel = () => {

    let data = [{
        img: testmonialPerson, comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem 
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
                <h2>Hear Form Happy Clients</h2>
            </div>
            <div className='Test-carosel-container'>
                <Slider {...settings}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='carosel-testimonial-container'>
                                   <picture className='carosel-testimonial-container-pic'>
                                    <img src={quoteLeft} alt='' className='quote-icons' />
                                        <img src={item.img} alt='' />
                                        <img src={quoteRight} alt='' className='quote-icons'/>
                                    </picture>
                                    <div className='carosel-testimonial-para'>{item.comment}</div>
                                    <h4>{item.name}</h4>
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