import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
import Popup from 'reactjs-popup'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import handshake from '../Assets/contact/handshake.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import email from '../Assets/contact/email.png'
import phone from '../Assets/contact/phone.png'
import location from '../Assets/contact/loca.png'
import axios from 'axios';
import { CREATE_CONTACT_FORM } from '../../apiServices'
const Contact = () => {

    const [contactDetails, setContactDetails] = useState({
        name: "",
        company_name: "",
        bussiness_email: "",
        comments: ""

    })

    const contactRef = useRef(null)


    const handleSubmit =  async () => {
        // console.log("datas", contactDetails)
        // console.log("submitted")
        if (contactDetails.name != "" && contactDetails.company_name != "" && contactDetails.bussiness_email != "" &&
            contactDetails.comments != ""
        ) {
            const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/

            if (contactDetails.name.length < 4) {
                toast.warn("name atleast have 5 characters !")
            }
            else if (contactDetails.company_name.length < 4) {
                toast.warn("Please enter valid Company Name !")
            }
            else if (EmailRegex.test(contactDetails.bussiness_email) == false) {
                toast.warn("Please enter valid Email !")
            }
            else if (contactDetails.comments.length < 10) {
                toast.warn("comments atleast have 10 characters !")
            }
            else {

                const send = await axios.post(CREATE_CONTACT_FORM, contactDetails ).then((res) => {
                    setContactDetails({
                        name: "",
                        company_name: "",
                        bussiness_email: "",
                        comments: ""
                    })
                    toast.success("submitted")

                    contactRef.current.close();

                }).catch((err)=>{
                    toast.error(err.response.data.message)
                })



            }
        }
        else {
            toast.error("All Fields are Required !")
        }

    }

    useEffect(
        () => {
            Aos.init({
                duration: 600,
                easing: "ease",
                delay: 100
            })
        }
    )
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='contact-display'>

            <div className='contact-main-header'>

                <div className='contact-header'>

                </div>
                <div className='contact-header-address-bar'>
                    <div className='contact-address' data-aos='flip-in'>
                        <picture>
                            <img src={location} alt='' className='contact-icons' />
                        </picture>
                        <h4>ADDRESS</h4>
                        <div>New No.28, 2nd Main Rd,
                            Kalaimagal Nagar, Ekkatuthangal,
                            Chennai, Tamil Nadu-600032.</div>
                    </div>
                    <div className='contact-address' data-aos='flip-out'>
                        <picture>
                            <img src={email} alt='' className='contact-icons' />
                        </picture>
                        <h4>EMAIL</h4>
                        <div>info@torusrobotics.com</div>
                    </div>
                    <div className='contact-address' data-aos='flip-in'>
                        <picture>
                            <img src={phone} alt='' className='contact-icons' />
                        </picture>
                        <h4>PHONE</h4>
                        <div>+91 6438293810</div>
                    </div>
                </div>
            </div>

            <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7774.4517982934385!2d80.19843628655018!3d13.021281652198951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e03c7c8de8d%3A0x56035da5d9283262!2sTorus%20Robotics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1710766417621!5m2!1sen!2sin" width={'80%'} height={"400px"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map-google'></iframe>
            </div>
            <div className='contact-form'>
                <picture>
                    <img src={handshake} alt="" />
                </picture>
                <div className='contact-form-content'>
                    <h2>Wanna become a partner !</h2>
                    <div className='contact-form-content-2'>
                        Join us in our mission to revolutionize the way we
                        power our world. Whether you're in the EV space or
                        exploring new markets, Torus Robotics is your trusted
                        partner for pioneering solutions in axial flux motors
                        and controllers. Together, let's shape a brighter,
                        cleaner future for generations to come.
                    </div>
                    <Popup
                        trigger={<div className='contact-get-in-touch'> GET IN TOUCH</div>}
                        modal
                        closeOnDocumentClick={false}
                        ref={contactRef}
                    >
                        {close => (
                            <div className="popup">
                                <div className='popup-header'>
                                    <div> <h2>get in touch</h2>
                                        <div className="contact-cancel-btn" onClick={close}>X</div></div>

                                    <div className='popup-header-cont color-grey'>fill out the form below. we will reach out to you.</div>

                                </div>
                                <div className='popup-form'>
                                    <label>Name <span><sup>*</sup></span></label>
                                    <input type='text' name='name' placeholder='Enter Your Name' onChange={(e) => setContactDetails({
                                        ...contactDetails, [e.target.name]: e.target.value
                                    })} />
                                    <label>Company Name <span><sup>*</sup></span></label>
                                    <input type='text' placeholder='Enter Company Name' name='company_name' onChange={(e) => setContactDetails({
                                        ...contactDetails, [e.target.name]: e.target.value
                                    })} />
                                    <label>Bussiness Email <span><sup>*</sup></span></label>
                                    <input type='text' placeholder='Enter Your Bussiness Email' name='bussiness_email' onChange={(e) => setContactDetails({
                                        ...contactDetails, [e.target.name]: e.target.value
                                    })} />
                                    <label>comment ( If Any )<span><sup>*</sup></span></label>
                                    <textarea type='text' placeholder='Write Your message' className='popup-comments' name='comments' onChange={(e) => setContactDetails({
                                        ...contactDetails, [e.target.name]: e.target.value
                                    })} />
                                    {/* <span className='color-red'> All fields are required*</span> */}

                                </div>
                                <div className="actions">
                                    <button className="contact-btn" onClick={() => { handleSubmit() }}>Submit</button>
                                </div>
                            </div>
                        )}

                    </Popup>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
        </div>
    )
}

export default Contact