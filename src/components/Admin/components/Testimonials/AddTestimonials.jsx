import React, { useRef, useState } from 'react'
import "./addTestimonials.css"
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { IMAGE_UPLOAD } from '../../../../apiServices';
import 'react-toastify/dist/ReactToastify.css';


const AddTestimonials = () => {

    const [testimonials, setTestimonials] = useState({
        testimonials_image: "",
        testimonials_name: "",
        testimonials_description: "",
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
            setTestimonials({ ...testimonials, [e.target.name]: file });
            e.target.value = ""
        }

    }
    const handleImageClose = (e) => {
        // Stop event propagation
        e.stopPropagation();
        setImage("")
        testimonials.testimonials_image = ""


    }

    const handleValidation = () => {
        const { testimonials_image, testimonials_name, testimonials_description } = testimonials
        if (testimonials_image == "") {
            toast.error("please upload Image")
            return false;
        }
        if (testimonials_name == "") {
            toast.error("please Enter name")
            return false;
        }
        if (testimonials_description == "") {

            toast.error("Please Enter Review")
            return false;
        }
        return true;
    }

    const resetTestimonials = () => {
        setTestimonials({
            testimonials_image: "",
            testimonials_name: "",
            testimonials_description: ""
        })
        console.log(testimonials)
        setImage("")
        if (imageRef) {
            imageRef.current.value = null
        }
    }

    const addTestimonials = async () => {
        console.log("tesimonials",testimonials)
        const accessToken = localStorage.getItem('Token');
        // const formData = new FormData();
        // formData.append('image', testimonials.testimonials_image);
        if (handleValidation()) {
            // await axios.post(IMAGE_UPLOAD, formData, {
            //     headers: {
            //         Authorization: `Bearer ${accessToken}`
            //     }
            // }).then((res) => {
            //     if (res) {
            //         testimonials.testimonials_image = res.data.image
            //         // axios.post(CREATE_BLOG,blog, {
            //         //     headers: {
            //         //         Authorization: `Bearer ${accessToken}`
            //         //     }
            //         // }).then((res) => {
            //         //     if (res) {
            //         //         console.log(res.data)
            //         //         console.log("submitted !", blog)
            //         //         toast.success(' Added Succefully  !');
            //         //         resetPost()
            //         //     }
            //         // }).catch((err) => {
            //         //     toast.error(err.response.data.message)
            //         // })
            //     }
            // }).catch((err) => {
            //     toast.error(err.response.data.message)
            // })

        }
    }
    return (
        <div className='blog-cont'>
            <div className='wrapper-container'>
                <div className='blog-form'>
                    <h2> Add Testimonials</h2>
                    {/* <div className='upload-image-testimonials' onClick={handlechangeImageUpload}>
                            {Image === "" ? <div className='upload-image-icon'>
                                <span><FaCloudUploadAlt /></span>
                                <span>Upload</span>
                            </div> : <div className='image-container-blog'><img src={Image} /> <span onClick={(e) => { handleImageClose(e) }}><ImCross /></span> </div>}
                            <input type='file' name='blog_image' ref={imageRef} accept='image/*' onChange={(e) => { handlechangeImage(e) }} style={{ display: "none" }} />
                        </div> */}
                    <div className='testimonials-container'>
                        <div className='upload-image-testimonials' onClick={handlechangeImageUpload}>
                            {Image === "" ? <div className='upload-image-icon'>
                                <span><FaCloudUploadAlt /></span>
                                <span>Upload</span>
                            </div> : <div className='image-container-testimonials'><img src={Image} /> <span onClick={(e) => { handleImageClose(e) }}><ImCross /></span> </div>}
                            <input type='file' name='testimonials_image' ref={imageRef} accept='image/*' onChange={(e) => { handlechangeImage(e) }} style={{ display: "none" }} />
                        </div>
                        <div className='blog-input-container testimonials-input-container'>

                            <input
                                name='testimonials_name'
                                placeholder='name'
                                value={testimonials.testimonials_name}
                                onChange={(e) => { setTestimonials({ ...testimonials, [e.target.name]: e.target.value }) }} />

                            <textarea
                                rows="5"
                                placeholder='Reviews'
                                name='testimonials_description'
                                value={testimonials.testimonials_description}
                                onChange={(e) => { setTestimonials({ ...testimonials, [e.target.name]: e.target.value }) }} />
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
        </div>
    )
}

export default AddTestimonials