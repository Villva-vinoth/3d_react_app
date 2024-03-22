import React from 'react'
import Mimagenew from '../../Assets/handshake.png'
import BlogDetail from './Blogdetail/BlogDetail'
import { useNavigate } from 'react-router-dom'

const BlogView = ({id,img,month,day,topic,describe}) => {
    const nav = useNavigate()
    const handleClick =(id)=>{
        nav('/blogs/blogid',{id:id})
    }

    return (
        <div className="blogs-content">
            <div className='blogs-content-picture'>
                <img src={img} alt='' />
            </div>
            <div className='blogs-content-container'>
                <h1 className="color-grey blogs-content-container-h1">{month}</h1>
                <h1 className="color-black blogs-content-container-h1">{day}</h1>
                <h3>{topic}</h3>

                <p>{describe}</p>
                <div className='blog-btn' onClick={()=>handleClick(id)}>Read More</div>
            </div>
        </div>
    )
}

export default BlogView