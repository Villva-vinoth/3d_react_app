import React, { useState } from 'react'
import './testimonialsCard.css'
import { HiDotsVertical } from "react-icons/hi";
import axios from 'axios';
import { DELETE_TESTIMONAILS, UPDATE_TESTIMONIALS } from '../../../../apiServices';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import Modal from 'react-modal';
const TestimonialCard = ({ setDeleteFlag, setRefreshFlag, testimonialName, testimonialImage, testimonialDate, testimonialId, testimonialDesc }) => {

    // console.log()

    const [isOpen, setIsOpen] = useState(false)
    const [imageIsOpen, setImageIsOpen] = useState(false)
    const [imageIsSet, setImageIsSet] = useState("")

    const [updateTestimonials, setUpdateTestimonials] = useState(
        {
            user_id: 1,
            testimonials_name: testimonialName,
            testimonials_image: testimonialImage,
            testimonials_description: testimonialDesc,
        }
    )


    const getDate = () => {
        const utcTimeDate = new Date(testimonialDate);
        const istTime = utcTimeDate.toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
        });
        return istTime;

    }
    const deleteTestimonials = async () => {
        setDeleteFlag(false);
        const accessToken = localStorage.getItem("Token")
        console.log(`${DELETE_TESTIMONAILS}/${testimonialId}`)
        await axios.patch(`${DELETE_TESTIMONAILS}/${testimonialId}`, null,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        ).then(
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
        ).catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    const updateTestimonial =()=>{
        const accessToken = localStorage.getItem("Token")
        console.log(`${UPDATE_TESTIMONIALS}`)
    }

    const editTestimonials= async () => {
        setIsOpen(true);
        console.log("true", updateTestimonials)
        document.body.style.overflow = 'hidden';
        setRefreshFlag(true);
        setUpdateTestimonials(
            {
                user_id: 1,
                testimonials_name: testimonialName,
                testimonials_image: testimonialImage,
                testimonials_description: testimonialDesc,
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
        console.log("Cancel", updateTestimonials)


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

    return (
        <div className='prod-card'>
            <div className='prod-image-cont'>
                <img src={testimonialImage} alt="" />
            </div>
            <div className='prod-info'>
                <h3>{testimonialName}</h3>
                <h3>{getDate()}</h3>
            </div>
            <div className='admin-options'><span className='edit-dots'>{<HiDotsVertical />}
                <div className='admin-drop-menu'>
                    <span onClick={editTestimonials}>Edit</span>
                    <span onClick={deleteTestimonials}>Delete</span>
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
                        {imageIsOpen ? <input type="file"
                            accept='image/*'
                            onChange={(e) => { handleUploadImage(e) }} /> :
                            <div className='edit-image-cont'>
                                <img src={imageIsSet ? imageIsSet : testimonialImage} />
                                <span onClick={closeImage}><IoMdCloseCircleOutline /></span>
                            </div>
                        }
                        <div className='testimonials-card-data'>
                            <span className='edit-tit'>Name</span>

                            <input
                                type='text'
                                value={updateTestimonials.testimonials_name}
                                name='testimonials_name'
                                onChange={(e) => { setUpdateTestimonials({ ...updateTestimonials, [e.target.name]: e.target.value }) }}
                                placeholder='name' />
                        </div>

                        <div className='testimonials-card-data'>
                            <span className='edit-tit'>Review</span>

                            <textarea
                                className='edit-textarea'
                                rows={8}
                                type='text'
                                value={updateTestimonials.testimonials_description}
                                name='testimonials_description'
                                placeholder='Reviews'
                                onChange={(e) => { setUpdateTestimonials({ ...updateTestimonials, [e.target.name]: e.target.value }) }} />
                        </div>


                    </div>

                    {/* <div className='input-field container'>
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

          </div> */}
                </div>
                <div className='edit-btn-cont'>
                    <button onClick={updateTestimonial}>Save Changes</button>
                    <button onClick={closeModel}> Cancel</button>
                </div>

            </Modal>
        </div>
    )
}

export default TestimonialCard