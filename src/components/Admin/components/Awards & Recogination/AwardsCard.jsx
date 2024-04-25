import React, { useState } from 'react'
import "./awards.css"
import { HiDotsVertical } from "react-icons/hi";
import axios from 'axios';
import { DELETE_AWARDS, DELETE_TESTIMONAILS, IMAGE_UPLOAD, UPDATE_AWARDS, UPDATE_TESTIMONIALS } from '../../../../apiServices';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import loader from "../../../Assets/loader/Gear@1.25x-0.2s-200px-200px.svg"
import Modal from 'react-modal';
const AwardsCard = ({ setDeleteFlag, setRefreshFlag, awardsName, awardsImage, awardsDate, awardsId}) => {

    // console.log()

    const [isOpen, setIsOpen] = useState(false)
    const [imageIsOpen, setImageIsOpen] = useState(false)
    const [imageIsSet, setImageIsSet] = useState("")
    const [isLoading,setIsLoading] =useState(true)

    const [updateAwards, setUpdateAwards] = useState(
        {
            
            awards_id:awardsId,
            awards_name: awardsName,
            awards_image: awardsImage,
            
        }
    )


    const getDate = () => {
        const utcTimeDate = new Date(awardsDate);
        const istTime = utcTimeDate.toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
        });
        return istTime;

    }
    const deleteTestimonials = async () => {
        setDeleteFlag(false);
        const accessToken = localStorage.getItem("Token")
        console.log(`${DELETE_AWARDS}/${awardsId}`)
        await axios.patch(`${DELETE_AWARDS}/${awardsId}`, null,
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

    const handleValidation = () => {
      if (updateAwards.awards_image == "") {
        toast.error("please upload Image!")
        return false;
      }
      return true;
    }

    const updateTestimonial = async ()=>{
      const accessToken = localStorage.getItem('Token');
  
      if (handleValidation()) {
        setIsLoading(false)
        if (imageIsSet != "") {
          console.log("url 1")
          const formData = new FormData();
          formData.append('image', updateAwards.awards_image);
          console.log("orm data ", formData)
          await axios.post(IMAGE_UPLOAD, formData, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }).then((res) => {
            if (res) {
              console.log("url 1")
              updateAwards.awards_image = res.data.image
              axios.patch(UPDATE_AWARDS, updateAwards, {
                headers: {
                  Authorization: `Bearer ${accessToken}`
                }
              }).then((res) => {
                if (res) {
                  console.log("update without image", res.data)
                  toast.success(' Updated  Succefully  !')
                  setRefreshFlag(true)
                  closeModel()
                  setIsLoading(true)
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
          axios.patch(UPDATE_AWARDS, updateAwards, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }).then((res) => {
            if (res) {
              console.log("update with image", res.data)
              toast.success(' Updated  Succefully  !')
              setRefreshFlag(true)
              closeModel()
              setIsLoading(true)
            }
          }).catch((err) => {
            toast.error(err.response.data.message)
          })
        }
      }
    }

    const editTestimonials= async () => {
        setIsOpen(true);
        console.log("true", updateAwards)
        document.body.style.overflow = 'hidden';
        setRefreshFlag(true);
        setUpdateAwards(
            {
            
                awards_id:awardsId,
                awards_name: awardsName,
                awards_image: awardsImage,
                
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
        console.log("Cancel", updateAwards)


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
            setUpdateAwards({ ...updateAwards, [e.target.name]: file })

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
            <div className='prod-image-cont '>
                <img src={awardsImage} alt="" className='image-contain'/>
            </div>
            <div className='prod-info'>
                <h3>{awardsName}</h3>
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

              {isLoading?( <div>
               <h2>Edit Awards</h2>
                <div className='edit-form'>

                    <div className='main-field-container'>
                        {imageIsOpen ? <input type="file"
                            accept='image/*'
                            name="awards_image"
                            onChange={(e) => { handleUploadImage(e) }} /> :
                            <div className='edit-image-cont'>
                                <img src={imageIsSet ? imageIsSet : awardsImage} />
                                <span onClick={closeImage}><IoMdCloseCircleOutline /></span>
                            </div>
                        }
                        <div className='testimonials-card-data'>
                            <span className='edit-tit'>Name</span>

                            <input
                                type='text'
                                value={updateAwards.awards_name}
                                name='awards_name'
                                onChange={(e) => { setUpdateAwards({ ...updateAwards, [e.target.name]: e.target.value }) }}
                                placeholder='name' />
                        </div>

                    </div>
                </div>
                <div className='edit-btn-cont'>
                    <button onClick={updateTestimonial}>Save Changes</button>
                    <button onClick={closeModel}> Cancel</button>
                </div>

                </div>):(<div className='loader-component'>
                  <img src={loader}/>
                </div>)}
            </Modal>
        </div>
    )
}

export default AwardsCard