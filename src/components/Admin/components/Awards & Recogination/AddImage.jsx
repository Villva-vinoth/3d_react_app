import React, { useRef, useState } from 'react'
// import "./addTestimonials.css"
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { CREATE_AWARDS,IMAGE_UPLOAD } from '../../../../apiServices';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AddImage = () => {
    const nav=useNavigate()
    const [awards, setAwards] = useState({
        awards_image: "",
        awards_name: "",
    });



    const [Image, setImage] = useState("")
    const imageRef = useRef()


    const handlechangeImageUpload = () => {
        imageRef.current.click()
    }

    const handlechangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log(file)
            setImage(URL.createObjectURL(file));
            setAwards({ ...awards, [e.target.name]: file });
            e.target.value = ""
        }

    }
    const handleImageClose = (e) => {
        // Stop event propagation
        e.stopPropagation();
        setImage("")
        awards.awards_image = ""


    }

    const handleValidation = () => {
        const { awards_image, awards_name} = awards
        if (awards_image == "") {
            toast.error("please upload Image")
            return false;
        }
        if (awards_name == "") {
            toast.error("please Enter name")
            return false;
        } 
        return true;
    }

    const resetTestimonials = () => {
        setAwards({
            awards_image: "",
            awards_name: "",
         
        })
        console.log(awards)
        setImage("")
        if (imageRef) {
            imageRef.current.value = null
        }
        nav("/admin/awards")
    }

    const addTestimonials = async () => {
        console.log("tesimonials",awards)
        const accessToken = localStorage.getItem('Token');
        const formData = new FormData();
        formData.append('image', awards.awards_image);
        if (handleValidation()) {
            await axios.post(IMAGE_UPLOAD, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((res) => {
                if (res) {
                    awards.awards_image = res.data.image
                    axios.post(CREATE_AWARDS,awards, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }).then((res) => {
                        if (res) {
                            console.log(res.data)
                            console.log("submitted !", awards)
                            toast.success(' Added Succefully  !');
                            resetTestimonials()
                            nav("/admin/awards")
                        }
                    }).catch((err) => {
                        toast.error(err.response.data.message)
                    })
                }
            }).catch((err) => {
                toast.error(err.response.data.message)
            })

        }
    }
  return (
    <div className='blog-cont'>
            <div className='wrapper-container'>
                <div className='blog-form'>
                    <h2> Add Awards</h2>
                    {/* <div className='upload-image-testimonials' onClick={handlechangeImageUpload}>
                            {Image === "" ? <div className='upload-image-icon'>
                                <span><FaCloudUploadAlt /></span>
                                <span>Upload</span>
                            </div> : <div className='image-container-blog'><img src={Image} /> <span onClick={(e) => { handleImageClose(e) }}><ImCross /></span> </div>}
                            <input type='file' name='blog_image' ref={imageRef} accept='image/*' onChange={(e) => { handlechangeImage(e) }} style={{ display: "none" }} />
                        </div> */}
                         <div className='upload-image' onClick={handlechangeImageUpload}>
                        {Image === "" ? <div className='upload-image-icon'>
                            <span><FaCloudUploadAlt /></span>
                            <span>Upload</span>
                        </div> : <div className='image-container-blog'><img src={Image} /> <span onClick={(e) => { handleImageClose(e) }}><ImCross /></span> </div>}
                        <input type='file' name='awards_image' ref={imageRef} accept='image/*' onChange={(e) => { handlechangeImage(e) }} style={{ display: "none" }} />
                    </div>

                    <div className='testimonials-container'>
                        
                        <div className='blog-input-container testimonials-input-container'>

                            <input
                                name='awards_name'
                                placeholder='name'
                                value={awards.awards_name}
                                onChange={(e) => { setAwards({ ...awards, [e.target.name]: e.target.value }) }} />

                   
                        </div>
                    </div>
                    {/* <div className='blog-input-container'>

                        <input
                            name='testimonials_name'
                            placeholder='name'
                            value={testimonials.testimonials_name}
                            onChange={(e) => { setTestimonials({ ...testimonials, [e.target.name]: e.target.value }) }} />

                        <textarea
                            rows="8"
                            placeholder='Testimonials Reviews'
                            name='testimonials_description'
                            value={testimonials.testimonials_description}
                            onChange={(e) => { setTestimonials({ ...testimonials, [e.target.name]: e.target.value }) }} />
                    </div> */}


                    <div className='blog-btn-cont'>
                        <button onClick={addTestimonials}>Add</button>
                        <button onClick={resetTestimonials}>Cancel</button>
                    </div>

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
        </div>)
}

export default AddImage