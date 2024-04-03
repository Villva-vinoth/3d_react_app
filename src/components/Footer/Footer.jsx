import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import footerLogo from '../Assets/torus logo/footer.png'
import wa from '../Assets/footer/image 1.png'
import li from '../Assets/footer/image 2.png'
import fb from '../Assets/footer/image 3.png'
import insta from '../Assets/footer/image 4.png'
import footerImage from '../Assets/footer/Group 92.png'

const Footer = () => {
    return (
        <div className='footer-display'>

            <div className='footer-content'>
                <picture className='footer-image'>
                    <img src={footerLogo} alt='' className='Footer-logo' />
                    {/* <img src={footerImage} alt='' className='' /> */}
                </picture>
                <div className='footer-menu'>
                <div ><label className='footer-po'> Home </label></div>
                <div> <label className='footer-po'>Products</label></div>
                <div><label className='footer-po'>WhyTorus?</label></div>
                <div><label className='footer-po'>Gallery</label></div>
                <div><label className='footer-po'>Blogs</label></div>
                <div><label className='footer-po'>Testimonials</label></div>
                </div>
            </div>
            <div className='footer-content-2'>
                <div className='footer-inner'>
                    <div className='footer-inner-header'>
                        {/* <FontAwesomeIcon icon={faAddressCard} /> &nbsp;  */}
                         contact us</div>
                    <div className='footer-inside-div'>
                        New No.28, 2nd Main Rd, Kalaimagal Nagar,
                        Ekkatuthangal, Chennai, Tamil Nadu 600032
                    </div>
                </div>
                <div className='footer-inner'>
                    <div className='footer-inner-header'> 
                        {/* <FontAwesomeIcon icon={faEnvelope} /> &nbsp;  */}
                         Email Address :</div>
                    <div className='footer-inside-div'>
                        info@torusrobotics.com
                    </div>
                </div>
                <div className='footer-inner'>
                    <div className='footer-inner-header'> 
                        {/* <FontAwesomeIcon icon={faPhone} />
                         &nbsp;  */}
                         Phone :</div>
                    <div className='footer-inside-div'>
                        089395 65425
                    </div>
                </div>
                <div className='footer-social'>
               
                    <div><img src={wa} className='footer-icons' /></div>
                    <div><img src={li} className='footer-icons' /></div>
                    <div><img src={fb} className='footer-icons' /></div>
                    <div><img src={insta} className='footer-icons' /></div>
                </div>


            </div>
        </div>
    )
}

export default Footer