import React, { useEffect, useState } from 'react'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { CREATE_HOME_FORM } from '../../../apiServices'
const Contact = () => {
    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: "ease",
            delay: 100
        })
    })

    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        comments: ""

    })


    const handleSubmit = async () => {
        const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/
        // console.log("data",contactDetails)
        if (contactDetails.name != "" && contactDetails.email != "" && contactDetails.comments != "") {
            if(contactDetails.name.length <4){
                toast.warn("name atleast have 5 characters !")
            }
            else if(EmailRegex.test(contactDetails.email)==false){
                toast.warn("please enter the valid email !")
            }
            else if(contactDetails.comments.length<10){
                toast.warn("comments atleast have 10 characters !")
            }
            else{
                // console.log("submitted !")
                await axios.post(CREATE_HOME_FORM,contactDetails).then((res)=>{
                    setContactDetails({
                        name: "",
                        email: "",
                        comments: ""
                    })
                    toast.success("submitted !");
                }).catch((err)=>{
                    toast.error(err.response.data.message)
                })
            }
            
        }
        else {
            toast.error("All Fields are Required !")
        }   
    }

    return (
        <div className='home-contact-us-display-form'>
            <div className='home-contact-container-one' >
                <div className='home-contact-content'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name'value={contactDetails.name} name='name' onChange={(e)=>setContactDetails({...contactDetails,[e.target.name]:e.target.value})} />
                </div>
                <div className='home-contact-content'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email' value={contactDetails.email} name='email'  onChange={(e)=>setContactDetails({...contactDetails,[e.target.name]:e.target.value})} />
                </div>
            </div>
            <div>
                <div className='home-contact-container-two' >
                    <label>Message</label>
                    <textarea placeholder='Enter your message' name='comments' value={contactDetails.comments} onChange={(e)=>setContactDetails({...contactDetails,[e.target.name]:e.target.value})}  />
                </div>
            </div>
            <div className='home-contact-container-three' >
                <label className='home-contact-container-three-label' style={{ visibility: "hidden" }} >All fields are required <sup className='color-red'>*</sup></label>
                <div className='home-contact-submit-btn' onClick={()=>{handleSubmit()}}>submit</div>
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