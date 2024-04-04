import React, { useState } from 'react'
import './addProducts.css'
const AddProducts = () => {
    const [image,setImage]=useState(0)
    const handleUploadImage = (e) =>{
        const file = e.target.files[0];
        setImage(URL.createObjectURL(file));
    }
  return (

    <div className='add-pro'>
        <div className='wrapper-container'>
            <div className='product-form'>
                <h2>Add Products</h2>
                 <input type='text' placeholder='Product name'/>
                 {image?<img src={image}/>:""}
                 <input type='file' accept="image/*" onChange={(e)=>handleUploadImage(e)}/>
                 <textarea  rows={5} placeholder='Product description'/>
                
            </div>
        </div>
    </div>
  )
}

export default AddProducts