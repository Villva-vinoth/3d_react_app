import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import "./gallery.css"
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from "../../Assets/arrow.png"
import { Navigation, Pagination } from 'swiper/modules';
import { gallery ,Teams ,motor } from './galleryData';
import Scroll from './Celebration';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
   
    const [contentToRender,setContentToRender]=useState(<Scroll title='TEAMS' data={Teams}/>)
    const SlideRef = useRef()
    const handleNext = () => {
        console.log(SlideRef.current.swiper.slideNext())
    }

    const handlePrev = () => {
        console.log(SlideRef.current.swiper.slidePrev())
    }

    const changeRender =(change) =>{
        console.log(change)
        // if(change=="CELEBRATIONS")
        // {
        //     setContentToRender(<Scroll title='celebration' data={celebration} />)
        // }
        if(change=="MOTORS")
        {
            
            setContentToRender(<Scroll title='motors' data={motor}/>)
        }
        if(change=="TEAMS")
        {
            
            setContentToRender(<Scroll title='TEAMS' data={Teams}/>)
        }
        // if(change=="EVENTS")
        // {
            
        //     setContentToRender(<Scroll title='EVENTS' data={[]}/>)
        // }

    }
    return (
        <div className='gallery'>

            <div className='gallery-wrapper'>
                <div className='nav-cont'>
                    <img src={Arrow} onClick={handlePrev}></img>
                    <img src={Arrow} onClick={handleNext}></img>
                </div>
                <h1 className='gallery-header'>GALLERY</h1>
                <p className='gallery-content-p poppins'>Embark on a visual journey through our Torus gallery, where cutting-edge technology and unparalleled craftsmanship converge in our Axial Flux Motors and Controllers. Explore the meticulous details and revolutionary designs that underscore Torus's commitment to excellence. Witness the innovation that redefines industry standards and shapes the future of electric propulsion. Experience the power, precision, and passion that drive Torus's advancements in sustainable mobility.</p>

                <Swiper
                    slidesPerView={2}
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