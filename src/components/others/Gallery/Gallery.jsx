import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import "./gallery.css"
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from "../../Assets/arrow.png"
import { Navigation, Pagination } from 'swiper/modules';
import { gallery ,celebration } from './galleryData';
import Scroll from './Celebration';

const Gallery = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, [])
    // const swiper = useSwiper();
    const [contentToRender,setContentToRender]=useState(<Scroll title='celebration' data={celebration}/>)
    const SlideRef = useRef()
    const handleNext = () => {
        console.log(SlideRef.current.swiper.slideNext())
    }

    const handlePrev = () => {
        console.log(SlideRef.current.swiper.slidePrev())
    }

    const changeRender =(change) =>{
        console.log(change)
        if(change=="CELEBRATIONS")
        {
            setContentToRender(<Scroll title='celebration' data={celebration} />)
        }
        if(change=="MOTORS")
        {
            
            setContentToRender(<Scroll title='motors' data={celebration}/>)
        }
        if(change=="TEAMS")
        {
            
            setContentToRender(<Scroll title='TEAMS' data={[]}/>)
        }
        if(change=="EVENTS")
        {
            
            setContentToRender(<Scroll title='EVENTS' data={celebration}/>)
        }

    }
    return (
        <div className='gallery'>

            <div className='gallery-wrapper'>
                <div className='nav-cont'>
                    <img src={Arrow} onClick={handlePrev}></img>
                    <img src={Arrow} onClick={handleNext}></img>
                </div>
                <h1>GALLERY</h1>
                <p>Journey through the visual tapestry of our Axial Flux Motors and Controllers, where cutting-edge technology meets unparalleled craftsmanship. In our gallery, we invite you to witness the intricate details and revolutionary design that define our commitment to excellence.  Embark on a visual journey through our gallery, where innovation comes to life. Our Axial Flux Motors and Controllers redefine industry standards, and we invite you to be a part of the evolution. Witness the power, precision, and passion that shape the future of electric propulsion.</p>

                <Swiper
                    slidesPerView={4}
                    ref={SlideRef}
                    spaceBetween={20}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            //   spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >

                    {
                        gallery.map((item, index) => {
                            return (
                                <SwiperSlide onClick={()=>{changeRender(item.name)}} style={{ backgroundImage: `url(${item.img})` }} key={index} >
                                    <div className='shorts-overlay'>
                                        {item.name}
                                    </div>
                                </SwiperSlide >
                            )
                        })
                    }
                </Swiper>

            </div>
            <div>
                {contentToRender}
            </div>

        </div>

    )
}

export default Gallery