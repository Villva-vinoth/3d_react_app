import React, { useEffect } from 'react'
import "./blogPage.css"
import { useNavigate } from 'react-router-dom'
const BlogPage = ({title,img,desc,desc2}) => {
   const nav = useNavigate()
   useEffect(()=>{
      if(title==""){
         nav('/blogs')
      }
   },[])
  return (
    <div className='blog-page'>
        <div className='blog-wrapper'>
            <div className='blog-container'>
                <h1>{title}</h1>
                 <div className='blog-img-cont'>
                    <img src={img}/>
                 </div>
                 <div className='para-cont'>
                    <p>{desc}</p>
                 </div>
                 <div className='para-cont'>
                    <p>{desc2}</p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default BlogPage