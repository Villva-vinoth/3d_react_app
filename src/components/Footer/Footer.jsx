import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaSquareWhatsapp, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-display'>
            <picture className='footer-image'>
                <img src='https://www.torusrobotics.com/images/logo-white.png' alt='' className='Footer-logo' />
            </picture>
            <div className='footer-content'>
                <div ><label className='footer-po'> Home </label></div>
                <div> <label className='footer-po'>Products</label></div>
                <div><label className='footer-po'>Why Torus?</label></div>
                <div><label className='footer-po'>Gallery</label></div>
                <div><label className='footer-po'>Blogs</label></div>
                <div><label className='footer-po'>Testimonials</label></div>
            </div>
            <div className='footer-content-2'>
                <div className='footer-inner'>
                    <div className='footer-inner-header'><FontAwesomeIcon icon={faAddressCard} /> &nbsp; contact us</div>
                    <div className='footer-inside-div'>
                        New No.28, 2nd Main Rd, Kalaimagal Nagar,
                        Ekkatuthangal, Chennai, Tamil Nadu 600032
                    </div>
                </div>
                <div className='footer-inner'>
                    <div> <FontAwesomeIcon icon={faEnvelope} /> &nbsp; Email Address :</div>
                    <div>
                        info@torusrobotics.com

                    </div>
                </div>
                <div className='footer-inner'>
                    <div> <FontAwesomeIcon icon={faPhone} /> &nbsp; Phone :</div>
                    <div>
                        089395 65425
                    </div>
                </div>

                <div className='footer-social'>
                    <br />
                    <div className='footer-whatsapp footer-po'><FaSquareWhatsapp size={"30px"} /></div>
                    <FaInstagramSquare className='footer-insta footer-po' size={"30px"}/>
                    <FaLinkedin  className='footer-linkedin footer-po'size={"30px"} />
                    <FaFacebookSquare className='footer-facebook footer-po' size={"30px"}/>
                    {/* <div><img src='https://static.vecteezy.com/system/resources/thumbnails/018/930/746/small/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png' className='footer-icons' /></div>
                    <div><img src='https://static.vecteezy.com/system/resources/previews/023/741/223/non_2x/facebook-logo-icon-social-media-icon-free-png.png' className='footer-icons' /></div>
                    <div><img src='https://static.vecteezy.com/system/resources/previews/018/930/584/original/linkedin-logo-linkedin-icon-transparent-free-png.png' className='footer-icons' /></div>
                    <div><img src='https://static.vecteezy.com/system/resources/previews/017/743/717/original/instagram-icon-logo-free-png.png' className='footer-icons' /></div> */}
                </div>


            </div>
        </div>
    )
}

export default Footer