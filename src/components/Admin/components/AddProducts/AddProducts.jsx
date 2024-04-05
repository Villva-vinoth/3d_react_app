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
                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Voltage Range :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Nominal voltage :</label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label> Rated Voltage :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Absolute max voltage :</label>
                              <input type='text' />
                             </div>

                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Rated Power :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Peak Power :</label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Max RPM :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Duty Cycle :</label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Peak Torque : </label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Over loaded Torque :</label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Continous Current :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Max current : </label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Peak Current :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Weight :</label>
                              <input type='text' />
                             </div>
                 </div>

                 <div className='product-form-field'>
                             <div className='product-rows'>
                              <label>Support :</label>
                              <input type='text' />
                             </div>

                             <div className='product-rows'>
                              <label> Operating Mode :</label>
                              <input type='text' />
                             </div>
                 </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddProducts