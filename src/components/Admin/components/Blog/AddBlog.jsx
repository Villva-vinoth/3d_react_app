import React, { useRef, useState } from 'react'
import "./blog.css"
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { toast } from 'react-toastify';



const AddBlog = () => {

    const [blog, setBlog] = useState({
        blog_image: "",
        blog_title: "",
        blog_description: "",
        blog_title1: "",
        blog_description1: "",
        blog_title2: "",
        blog_description2: "",
        blog_title3: "",
        blog_description3: "",
    });
    console.log(blog)

    const [Image, setImage] = useState("")
    const imageRef = useRef()

    const handlechangeImageUpload = () => {
        imageRef.current.click()
    }

    const handlechangeImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setBlog({ ...blog, [e.target.name]:file });
            e.target.value =""
        }
       
    }
    const handleImageClose = (e) => {
        // Stop event propagation
         e.stopPropagation();
        setImage("")
        blog.blog_image=""
      
     
    }

    const handleValidation=()=>{
        const {blog_image,blog_title,blog_description} = blog
        if(blog_image==""){
                toast.error("please upload Image")
                 return false;
        }
        if(blog_title==""){
                 toast.error("please Enter Title")
            return false;
        }
        if(blog_description==""){

            toast.error("Please Enter Description")
            return false;
        }
        return true;
    }

    const addPost = () => {

       if(handleValidation())
       {
        
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
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />

                        <textarea
                            rows="8"
                            placeholder='Blog Description'
                            name='blog_description'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div>

                    <h2>Blog Page Content</h2>

                    <div className='blog-input-container'>
                        <input
                            placeholder='Title -1'
                            name='blog-title1'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />

                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description1'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div>

                    <div className='blog-input-container'>
                        <input
                            placeholder='Title -2'
                            name='blog_title2'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description2'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div>

                    <div className='blog-input-container'>
                        <input
                            placeholder='Title -3'
                            name='blog_title3'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                        <textarea
                            rows={10}
                            placeholder=' Description'
                            name='blog_description3'
                            onChange={(e) => { setBlog({ ...blog, [e.target.name]: e.target.value }) }} />
                    </div>

                    <div className='blog-btn-cont'>
                        <button onClick={addPost}>Add Post</button>
                        <button>Cancel</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddBlog