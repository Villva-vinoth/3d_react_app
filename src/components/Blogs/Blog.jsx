import React from "react";
import './Blog.css'
import BlogView from "./BlogView/BlogView";
import BlogHeader from "./BlogHeader/BlogHeader";
import image1 from '../Assets/blogs/Rectangle 38.png'
import image2 from '../Assets/blogs/Rectangle 38 (1).png'
import image3 from '../Assets/blogs/Rectangle 38 (2).png'
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./BlogView/Blogdetail/BlogDetail";
const Blogs = () => {

    const data = [
        {   
            id:1,
            img: image1,
            month: "jan",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."

        },
        {
            id:2,
            img: image2,
            month: "jan",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."
        },
        {
            id:3,
            img: image3,
            month: "jan",
            day: "08",
            topic: "Lorem Ipsum is simply dummy text of the printing.",
            describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook a galley of type dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ook...."
        }
    ]

    return (
        <div className="blogs-content-parent">

            <Routes>
                <Route path="/" element={
                    <div>
                        <BlogHeader />
                        <h1>RECENT</h1>
                        {
                            data.map((item, index) => {
                                return (
                                    <BlogView img={item.img} month={item.month} day={item.day} topic={item.topic} describe={item.describe} id={item.id} />
                                )
                            })
                        }
                    </div>
                } />
                <Route path="/blogid" element={<BlogDetail />} />
            </Routes>

        </div>
    );
}
export default Blogs;