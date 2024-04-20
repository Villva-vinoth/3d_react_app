import React, { useState } from 'react'
import './addProducts.css'
import { HiDotsVertical } from "react-icons/hi";
import axios from 'axios';
import { DELETE_PRODUCT, IMAGE_UPLOAD, UPDATE_PRODUCT, UPDATE_PRODUCT_URL2 } from '../../../../apiServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Modal from 'react-modal';
const ProductCard = ({ productTitle, productImage, productDate, productId, setDeleteFlag,
  productDesc, voltageRange, nominalVoltage, ratedVoltage, ratedPower, absoluteMaxVoltage, maxCurrent,
  peakPower, maxRPM, peakTorque, overLoadedTorque, dutyCycle, weight, continousCurrent, peakCurrent, support,
  operatingMode, setRefreshFlag }) => {

  // console.log()

  const [isOpen, setIsOpen] = useState(false)
  const [imageIsOpen, setImageIsOpen] = useState(false)
  const [imageIsSet, setImageIsSet] = useState("")

  const [updateProduct, setUpdateProduct] = useState(
    {
      user_id: 1,
      product_id: productId,
      product_title: productTitle,
      product_image: productImage,
      product_description: productDesc,
      voltage_range: voltageRange,
      rated_power: ratedPower,
      peak_power: peakPower,
      max_RPM: maxRPM,
      peak_torque: peakTorque,
      overload_torque: overLoadedTorque,
      duty_cycle: dutyCycle,
      weight: weight,
      nominal_voltage: nominalVoltage,
      max_current: maxCurrent,
      rated_voltage: ratedVoltage,
      absolute_max_voltage: absoluteMaxVoltage,
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
          toast.success(' Deleted Succefully  !');
        }
      }
    )
  }

  const editProduct = () => {
    setIsOpen(true);
    console.log("true", updateProduct)
    document.body.style.overflow = 'hidden';
    setRefreshFlag(true);
    setUpdateProduct(
      {
        user_id: 1,
        product_id: productId,
        product_title: productTitle,
        product_image: productImage,
        product_description: productDesc,
        voltage_range: voltageRange,
        rated_power: ratedPower,
        peak_power: peakPower,
        max_RPM: maxRPM,
        peak_torque: peakTorque,
        overload_torque: overLoadedTorque,
        duty_cycle: dutyCycle,
        weight: weight,
        nominal_voltage: nominalVoltage,
        max_current: maxCurrent,
        rated_voltage: ratedVoltage,
        absolute_max_voltage: absoluteMaxVoltage,
        continous_current: continousCurrent,
        peak_current: peakCurrent,
        support: support,
        operating_mode: operatingMode,
      }
    )

  }
  const closeModel = () => {
    setIsOpen(false);
    setImageIsSet("")
    document.body.style.overflow = 'hidden';
    setImageIsOpen(false);
    // setDeleteFlag(false);
    setRefreshFlag(false);
    console.log("Cancel", updateProduct)


  }

  const closeImage = () => {
    setImageIsOpen(true); //
    setImageIsSet("")
    updateProduct.product_image = "";
  }
  console.log(updateProduct)
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageIsSet(URL.createObjectURL(file))
      setImageIsOpen(false)
      setUpdateProduct({ ...updateProduct, [e.target.name]: file })

    }
  }


  const customStyles = {
    content: {
      // top: '50%',
      left: '50%',
      right: 'auto',
      // bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%,0%)',
      width: '90%', // Adjust the width as needed
      maxWidth: '1000px', // Set a max width if desired
      padding: '2rem 2rem',

    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the color and transparency
      zIndex: 9999, // Adjust the z-index value as needed
    },
  };

  const handleValidation = () => {
    if (updateProduct.product_image == "") {
      toast.error("please upload Image!")
      return false;
    }
    return true;
  }

  const saveChanges = async () => {
    const accessToken = localStorage.getItem('Token');
    if (handleValidation()) {
      if (imageIsSet != "") {
        console.log("url 1")
        const formData = new FormData();
        formData.append('image', updateProduct.product_image);
        await axios.post(IMAGE_UPLOAD, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then((res) => {
          if (res) {
            console.log("url 1")
            updateProduct.product_image = res.data.image
            axios.patch(UPDATE_PRODUCT, updateProduct, {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }).then((res) => {
              if (res) {
                console.log("update without image", res.data)
                toast.success(' Updated  Succefully  !')
                setRefreshFlag(true)
                closeModel()
              }
            }).catch((err) => {
              toast.error(err.response.data.message)
            })
          }
        }).catch((err) => {
          toast.error(err.response.data.message)
        })
      }
      else {
        console.log("url 2")
        axios.patch(UPDATE_PRODUCT, updateProduct, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then((res) => {
          if (res) {
            console.log("update with image", res.data)
            toast.success(' Updated  Succefully  !')
            setRefreshFlag(true)
            closeModel()
          }
        }).catch((err) => {
          toast.error(err.response.data.message)
        })
      }
    }
  }
  return (
    <div className='prod-card'>
      <div className='prod-image-cont'>
        <img src={productImage} alt="" />
      </div>
      <div className='prod-info'>
        <h3>{productTitle}</h3>
        <h3>{getDate()}</h3>
      </div>
      <div className='admin-options'>
        <span className='edit-dots'>{<HiDotsVertical />}
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
            <div>
              <span className='edit-tit'>   Product Name</span>

              <input
                type='text'
                value={updateProduct.product_title}
                name='product_title'
                onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                placeholder='Product name' />
            </div>

            <div>
              <span className='edit-tit'>   Product Description</span>

              <textarea
                className='edit-textarea'
                rows={8}
                type='text'
                value={updateProduct.product_description}
                name='product_description'
                placeholder='Product description'
                onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }} />
            </div>

            {imageIsOpen ? <input type="file"
              name='product_image'
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
              <div >
                <span className='edit-tit'>Voltage Range</span>

                <input
                  type='text'
                  placeholder='Voltage Range'
                  value={updateProduct.voltage_range}
                  name='voltage_range'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                />
              </div>

              <div >
                <span className='edit-tit'>Nominal voltage</span>
                <input
                  type='text'
                  value={updateProduct.nominal_voltage}
                  name='nominal_voltage'
                  placeholder='Nominal voltage'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}

                />
              </div>
            </div>

            <div className='edit-input-field-row'>

              <div >
                <span className='edit-tit'>Rated Voltage</span>
                <input
                  type='text'
                  value={updateProduct.rated_voltage}
                  name='rated_voltage'
                  placeholder='Rated Voltage'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
              <div >
                <span className='edit-tit'>Absolute Max Voltage</span>
                <input
                  type='text'
                  value={updateProduct.absolute_max_voltage}
                  name='absolute_max_voltage'
                  placeholder='Absolute Max Voltage'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

            <div className='edit-input-field-row'>
              <div >
                <span className='edit-tit'>Rated Power</span>
                <input
                  type='text'
                  value={updateProduct.rated_power}
                  placeholder='Rated Power'
                  name='rated_power'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>

              <div >
                <span className='edit-tit'>Peak Power</span>
                <input
                  type='text'
                  value={updateProduct.peak_power}
                  name='peak_power'
                  placeholder='Peak power'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

            <div className='edit-input-field-row'>

              <div >
                <span className='edit-tit'>Max RPM</span>
                <input
                  type='text'
                  value={updateProduct.max_RPM}
                  name='max_RPM'
                  placeholder='Max RPM'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>

              <div >
                <span className='edit-tit'>Duty Cycle</span>
                <input
                  type='text'
                  value={updateProduct.duty_cycle}
                  name='duty_cycle'
                  placeholder='Duty Cycle'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

            <div className='edit-input-field-row'>

              <div >
                <span className='edit-tit'>Peak Torque</span>
                <input
                  type='text'
                  value={updateProduct.peak_torque}
                  name='peak_torque'
                  placeholder='Peak Torque'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                />
              </div>

              <div >
                <span className='edit-tit'>OverLoad Torque</span>
                <input
                  type='text'
                  value={updateProduct.overload_torque}
                  name='overload_torque'
                  placeholder='Over loaded Torque'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

            <div className='edit-input-field-row'>
              <div >
                <span className='edit-tit'>Continous Currrent </span>
                <input
                  type='text'
                  value={updateProduct.continous_current}
                  name='continous_current'
                  placeholder='Continous Current'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>

              <div >
                <span className='edit-tit'>Max Current</span>
                <input
                  type='text'
                  value={updateProduct.max_current}
                  name='max_current'
                  placeholder='Max Current'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>


            <div className='edit-input-field-row '>
              <div >
                <span className='edit-tit'>Peak Current</span>
                <input
                  type='text'
                  value={updateProduct.peak_current}
                  name='peak_current'
                  placeholder='Peak Curent'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>

              <div >
                <span className='edit-tit'>Weight</span>
                <input
                  type='text'
                  value={updateProduct.weight}
                  placeholder='Weight'
                  name='weight'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

            <div className='edit-input-field-row '>
              <div >
                <span className='edit-tit'>Support</span>
                <input
                  type='text'
                  value={updateProduct.support}
                  name='support'
                  placeholder='Support'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>

              <div >
                <span className='edit-tit'>Operating Mode</span>
                <input
                  type='text'
                  value={updateProduct.operating_mode}
                  name='operating_mode'
                  placeholder='Operating Modes'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                /></div>
            </div>

          </div>
        </div>
        <div className='edit-btn-cont'>
          <button onClick={saveChanges}>Save Changes</button>
          <button onClick={closeModel}> Cancel</button>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </Modal>
    </div>
  )
}

export default ProductCard