import React, { useEffect, useState } from "react";
import './Blog.css'
import BlogView from "./BlogView/BlogView";
import BlogHeader from "./BlogHeader/BlogHeader";
import image1 from '../Assets/blogs/Rectangle 38.png'
import image2 from '../Assets/blogs/Rectangle 38 (1).png'
import image3 from '../Assets/blogs/Rectangle 38 (2).png'
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./BlogView/Blogdetail/BlogDetail";
import axios from 'axios'
import { GET_ALL_BLOG } from '../../apiServices'
const Blogs = ({btshow}) => {

console.log("bt",btshow)
    const data = [
        {   
            id:1,
            img: image1,
            month: "JAN",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."

        },
        {
            id:2,
            img: image2,
            month: "JAN",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."
        },
        {
            id:3,
            img: image3,
            month: "JAN",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."
        }
    ]

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, [])
      
      const [blogItem,setBlogItem]= useState([])

      useEffect(()=>{
        const getAllBlog = async()=>{
            await axios.get(GET_ALL_BLOG).then((res)=>{
                console.log(res.data.data)
                setBlogItem(res.data.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getAllBlog()
      },[])

    return (
    //  { btshow[0].showcase_value==1 ? 
         <div className="blogs-content-parent">

            <Routes>
                <Route path="/" element={
                    <div>
                        <BlogHeader />
                        <h1>RECENT</h1>
                        {
                            blogItem.map((item, index) => {
                                return (
                                    <BlogView img={item.blog_image} month={new Date(item.create_At).toLocaleString('en-US', { month: 'short' })} day={new Date(item.create_At).getDate()} topic={item.blog_title} describe={item.blog_description} id={item.blog_id} />
                                )
                            })
                        }
                    </div>
                } />
                <Route path="/blogid" element={<BlogDetail />} />
            </Routes>

        </div>
        //  :('')}
    );
}
export default Blogs;