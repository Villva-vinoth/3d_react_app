import React, { useRef, useState } from 'react'
import "./blog.css"
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { ToastContainer,toast } from 'react-toastify';
import axios from 'axios';
import { CREATE_BLOG, IMAGE_UPLOAD } from '../../../../apiServices';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AddBlog = () => {

    const nav =useNavigate()
    const [blog, setBlog] = useState({
        blog_image: "",
        blog_title: "",
        blog_description: "",
        blog_description1: "",
    });

    const [Image, setImage] = useState("")
    const imageRef = useRef()



    const handlechangeImageUpload = () => {
        imageRef.current.click()
    }

    const handlechangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setBlog({ ...blog, [e.target.name]: file });
            e.target.value = ""
        }

    }
    const handleImageClose = (e) => {
        // Stop event propagation
        e.stopPropagation();
        setImage("")
        blog.blog_image = ""


    }

    const handleValidation = () => {
        const { blog_image, blog_title, blog_description } = blog
        if (blog_image == "") {
            toast.error("please upload Image")
            return false;
        }
        if (blog_title == "") {
            toast.error("please Enter Title")
            return false;
        }
        if (blog_description == "") {

            toast.error("Please Enter Description")
            return false;
        }
        return true;
    }

    const resetPost = () => {
        setBlog({
            blog_image: "",
            blog_title: "",
            blog_description: "",
            blog_description1: "",
        })
        console.log(blog)
        setImage("")
        if (imageRef) {
            imageRef.current.value = null
        }
        nav("/admin/blogs")
    }
    
    console.log(blog)
    const addPost = async () => {
       
        const accessToken = localStorage.getItem('Token');
        const formData = new FormData();
        formData.append('image', blog.blog_image);
        if (handleValidation()) {
            await axios.post(IMAGE_UPLOAD, formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then((res) => {
                if (res) {
                    // resetPost()
                    blog.blog_image = res.data.image
                    axios.post(CREATE_BLOG,blog, {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }).then((res) => {
                        if (res) {
                            console.log(res.data)
                            console.log("submitted !", blog)
                            toast.success(' Added Succefully  !');
                            resetPost()
                            nav("/admin/blogs")
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
                    <h2> Add Blog Post</h2>
                    <div className='upload-image' onClick={handlechangeImageUpload}>
                        {Image === "" ? <div className='upload-image-icon'>
                            <span><FaCloudUploadAlt /></span>
                            <span>Upload</span>
                        </div> : <div className='image-container-blog'><img src={Image} /> <span onClick={(e) => { handleImageClose(e) }}><ImCross /></span> </div>}
                        <input type='file' name='blog_image' ref={imageRef} accept='image/*' onChange={(e) => { handlechangeImage(e) }} style={{ display: "none" }} />
                    </div>
                    <div className='blog-input-container'>

                        <input
                            name='blog_title'
                            placeholder='Blog Title'
                            value={blog.blog_title}
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />

                        <textarea
                            rows="8"
                            placeholder='Blog Description'
                            name='blog_description'
                            value={blog.blog_description}
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div>

                    <h2>Blog Page Content</h2>

                    <div className='blog-input-container'>
                      

                        
                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description1'
                            value={blog.blog_description1}
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                          
                  
                    </div>

                    {/* <div className='blog-input-container'>
                        <input
                            placeholder='Title -2'
                            name='blog_title2'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description2'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div> */}

                    {/* <div className='blog-input-container'>
                        <input
                            placeholder='Title -3'
                            name='blog_title3'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description3'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div> */}

                    <div className='blog-btn-cont'>
                        <button onClick={addPost}>Add Post</button>
                        <button onClick={resetPost}>Cancel</button>
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
                limit={1}

            />
        </div>
    )
}

export default AddBlog