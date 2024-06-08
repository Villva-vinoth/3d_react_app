import React from 'react'
import './blogHeader.css'
import userline from '../../Assets/underLine.png'
const BlogHeader = () => {
  return (
    <div className="blog-header-display">
            <div className="blog-header-topic">
                <h2> Blogs  </h2>
                {/* <img src={userline} alt="loading" /> */}
            </div>
            <div className="blog-header-description">
                <p className='poppins'>
                Embark on a visual journey through our Torus gallery, where cutting-edge technology and unparalleled craftsmanship converge in our Axial Flux Motors and Controllers. Explore the meticulous details and revolutionary designs that underscore Torus's commitment to excellence. Witness the innovation that redefines industry standards and shapes the future of electric propulsion. Experience the power, precision, and passion that drive Torus's advancements in sustainable mobility.
                </p>
            </div>
        </div>
  )
}

export default BlogHeader