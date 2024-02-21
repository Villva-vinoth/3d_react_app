import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaSquareWhatsapp, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import  img  from "../../imgs/sesami.png"


const Footer = () => {
    return (
        <div className='footer-display'>
            <picture className='footer-image'>
                <img src={img} alt='' className='Footer-logo' />
            </picture>
           
            <div className='footer-content-2'>
                <div className='footer-inner'>
                    <div className='footer-inner-header'><FontAwesomeIcon icon={faAddressCard} /> &nbsp; contact us</div>
                    <div className='footer-inside-div'>
                    1 Changi Business Park Crescent

#02-17 Plaza 8 @ CBP, Podium C

Singapore 486025
                    </div>
                </div>
                <div className='footer-inner'>
                    <div> <FontAwesomeIcon icon={faEnvelope} /> &nbsp; Email Address :</div>
                    <div>
                    customercare@sesami.com

                    </div>
                </div>
                <div className='footer-inner'>
                    <div> <FontAwesomeIcon icon={faPhone} /> &nbsp; Phone :</div>
                    <div>
                    General: +65 6302 5300

Hotline: +65 6302 5314


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