import React, { useState } from 'react'
import './addProducts.css'
import { HiDotsVertical } from "react-icons/hi";
import axios from 'axios';
import { DELETE_PRODUCT } from '../../../../apiServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Modal from 'react-modal';
const ProductCard = ({ productTitle, productImage, productDate, productId, setDeleteFlag ,
productDesc,voltageRange,nominalVoltage ,ratedVoltage,ratedPower,absoluteMaxVoltage,maxCurrent,
peakPower,maxRPM,peakTorque,overLoadedTorque,dutyCycle,weight,continousCurrent,peakCurrent,support,
operatingMode}) => {

  // console.log()

  const [isOpen, setIsOpen] = useState(false)
  const [imageIsOpen, setImageIsOpen] = useState(false)
  const [imageIsSet, setImageIsSet] = useState("")

  const [updateProduct, setUpdateProduct] = useState(
    { 
      user_id:1,
      product_title: productTitle,
      product_image: productImage,
      product_description:productDesc,
      voltage_range: voltageRange,
      rated_power: ratedPower,
      peak_power: peakPower,
      max_RPM: maxRPM,
      peak_torque: peakTorque,
      overload_torque: overLoadedTorque,
      duty_cycle: dutyCycle,
      weight: weight,
      nominal_voltage:nominalVoltage,
      max_current: maxCurrent,
      rated_voltage: ratedVoltage,
      absolute_max_voltage:absoluteMaxVoltage,
      continous_current: continousCurrent,
      peak_current: peakCurrent,
      support: support,
      operating_mode: operatingMode,
    }
  )

  const getDate = () => {
    const utcTimeDate = new Date(productDate);
    const istTime = utcTimeDate.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });
    return istTime;

  }
  const deleteProduct = async () => {
    setDeleteFlag(false);
    await axios.patch(`${DELETE_PRODUCT}/${productId}`, null).then(
      (res) => {
        if (res) {
          setDeleteFlag(true);
          toast.success(' Deleted Succefully  !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

          });
        }
      }
    )
  }

  const editProduct = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  
  }
  const closeModel = () => {
    setIsOpen(false);
    setImageIsSet("")
    document.body.style.overflow = 'hidden';
    setImageIsOpen(false);
    setDeleteFlag(true)
  }

  const closeImage = () => {
    setImageIsOpen(true); //
    setImageIsSet("")
  }

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageIsSet(URL.createObjectURL(file))
      setImageIsOpen(false)
  
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '90%', // Adjust the width as needed
      maxWidth: '1000px', // Set a max width if desired
      padding: '1.5rem 2rem',

    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and transparency
      zIndex: 9999, // Adjust the z-index value as needed
    },
  };

  return (
    <div className='prod-card'>
      <div className='prod-image-cont'>
        <img src={productImage} alt="" />
      </div>
      <div className='prod-info'>
        <h3>{productTitle}</h3>
        <h3>{getDate()}</h3>
      </div>
      <div className='admin-options'><span className='edit-dots'>{<HiDotsVertical />}
        <div className='admin-drop-menu'>
          <span onClick={editProduct}>Edit</span>
          <span onClick={deleteProduct}>Delete</span>
        </div>
      </span>

      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModel}
        contentLabel="Edit Modal"
        style={customStyles}
      >

        <h2>Edit Product</h2>
        <div className='edit-form'>

          <div className='main-field-container'>
            <input
              type='text'
              value={updateProduct.product_title} 
              name='product_title'
              onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              placeholder='Product name' />

            <textarea
              rows={6}
              type='text'
              value={updateProduct.product_description}
              name='product_description'
              placeholder='Product description'
              onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}} />

            {imageIsOpen ? <input type="file"
              accept='image/*'
              onChange={(e) => { handleUploadImage(e) }} /> :
              <div className='edit-image-cont'>
                <img src={imageIsSet ? imageIsSet : productImage} />
                <span onClick={closeImage}><IoMdCloseCircleOutline /></span>
              </div>
            }
          </div>

          <div className='input-field container'>
            <div className='edit-input-field-row'>
              <input
                type='text'
                placeholder='Voltage Range'
                value={updateProduct.voltage_range}
                name='voltage_range'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.nominal_voltage}
                name='nominal_voltage'
                placeholder='Nominal voltage'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row'>
              <input
                type='text'
                value={updateProduct.rated_voltage}
                name='rated_voltage'
                placeholder='Rated Voltage' 
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.absolute_max_voltage}
                name='absolute_max_voltage'
                placeholder='Absolute Max Voltage'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row'>
              <input
                type='text'
                value={updateProduct.rated_power}
                placeholder='Rated Power'
                name='rated_power'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.peak_power}
                name='peak_power'
                placeholder='Peak power'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row'>
              <input
                type='text'
                value={updateProduct.max_RPM}
                name='max_RPM'
                placeholder='Max RPM'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.duty_cycle}
                name='duty_cycle'
                placeholder='Duty Cycle'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row'>
              <input
                type='text'
                value={updateProduct.peak_torque}
                name='peak_torque'
                placeholder='Peak Torque'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.overload_torque}
                name='overload_torque'
                placeholder='Over loaded Torque'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row'>
              <input
                type='text'
                value={updateProduct.continous_current}
                name='continous_current'
                placeholder='Continous Current'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input 
                type='text'
                value={updateProduct.max_current}
                name='max_current'
                placeholder='Max Current'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row '>
              <input
                type='text'
                value={updateProduct.peak_current}
                name='peak_current'
                placeholder='Peak Curent'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.weight}
                placeholder='Weight'
                name='weight'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

            <div className='edit-input-field-row '>
              <input
                type='text'
                value={updateProduct.support}
                name='support'
                placeholder='Support'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
              <input
                type='text'
                value={updateProduct.operating_mode}
                name='operating_mode'
                placeholder='Operating Modes'
                onChange={(e)=>{setUpdateProduct({...updateProduct,[e.target.name]:e.target.value})}}
              />
            </div>

          </div>
        </div>
        <div className='edit-btn-cont'>
          <button>Save Changes</button>
          <button onClick={closeModel}> Cancel</button>
        </div>
        
      </Modal>
    </div>
  )
}

export default ProductCard