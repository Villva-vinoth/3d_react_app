import React, { useEffect, useState } from 'react'
import './contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { CREATE_HOME_FORM, SEND_MAIL_ADMIN } from '../../../apiServices'
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

    const [error,setError] = useState('')

    const [visi,setVisi]=useState(false)

    const handleSubmit = async () => {
        const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-z]{2,}$/
        // console.log("data",contactDetails)
        if (contactDetails.name != "" && contactDetails.email != "" && contactDetails.comments != "") {
            if(contactDetails.name.length <4){
                // toast.warn("name atleast have 5 characters !") 
                setError('name atleast have 5 characters !')
                setTimeout(()=>{
                    setError('')
                },2000)
            }
            else if(EmailRegex.test(contactDetails.email)==false){
                // toast.warn("please enter the valid email !")
                setError('please enter the valid email !')
                setTimeout(()=>{
                    setError('')
                },2000)
            }
            else if(contactDetails.comments.length<10){
                // toast.warn("comments atleast have 10 characters !")
                setError('comments atleast have 10 characters !')
                setTimeout(()=>{
                    setError('')
                },2000)
            }
            else{
                // console.log("submitted !")
                // await axios.post(CREATE_HOME_FORM,contactDetails).then((res)=>{
                    // setContactDetails({
                    //     name: "",
                    //     email: "",
                    //     comments: ""
                    // })
                //     toast.success("submitted !");
                // }).catch((err)=>{
                //     toast.error(err.response.data.message)
                // })
                setVisi(true)
                await axios.post(SEND_MAIL_ADMIN, contactDetails).then((res) => {
                    if (res.data.success) {
                        setContactDetails({
                            name: "",
                            email: "",
                            comments: ""
                        })

                        console.log("mail sent")
                        setVisi(false)

                        toast.success("submitted")
                       
                    }
                    else {
                        toast.error("mail not sent")
                    }
                }).catch((err) => {
                    toast.error(err.response.data.message)
                })

            }
            
        }
        else {
            // toast.error("All Fields are Required !")
            setError('All Fields are Required !')
            setTimeout(()=>{
                setError('')
            },2000)
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
                <label className='home-contact-container-three-label' id='error' >{error}</label>
                <button className='home-contact-submit-btn' disabled={visi} onClick={()=>{handleSubmit()}}>submit</button>
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
                limit={1}

            />
        </div>
    )
}

export default Contact