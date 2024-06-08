import React, { useState } from 'react'
// import './addProducts.css'
import { HiDotsVertical } from "react-icons/hi";
import axios from 'axios';
import { DELETE_BLOG, IMAGE_UPLOAD, UPDATE_BLOG, UPDATE_PRODUCT, UPDATE_PRODUCT_URL2 } from '../../../../apiServices';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdCloseCircleOutline } from "react-icons/io";
import loader from "../../../Assets/loader/Gear@1.25x-0.2s-200px-200px.svg"
import Modal from 'react-modal';
const BlogCard = ({ blogTitle, blogImage, blogDate, blogId, setDeleteFlag,
  blogDesc, blogDescription1, setRefreshFlag }) => {

  // console.log()

  const [isOpen, setIsOpen] = useState(false)
  const [imageIsOpen, setImageIsOpen] = useState(false)
  const [imageIsSet, setImageIsSet] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState({
    error_image: ""
  })
  const [updateProduct, setUpdateProduct] = useState(
    {
      user_id: 1,
      blog_id: blogId,
      blog_title: blogTitle,
      blog_image: blogImage,
      blog_description: blogDesc,
      // blog_title1: blogTitle1,
      blog_description1: blogDescription1,
      // blog_title2: blogTitle2,
      // blog_description2: blogDescription2,
      // blog_title3: blogTitle3,
      // blog_description3: blogDescription3,

    }
  )


  const getDate = () => {
    const utcTimeDate = new Date(blogDate);
    const istTime = utcTimeDate.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata'
    });
    return istTime;

  }
  const deleteProduct = async () => {
    setDeleteFlag(false);
    const accessToken = localStorage.getItem('Token');
    await axios.patch(`${DELETE_BLOG}/${blogId}`, null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(
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
        blog_id: blogId,
        blog_title: blogTitle,
        blog_image: blogImage,
        blog_description: blogDesc,
        // blog_title1: blogTitle1,
        blog_description1: blogDescription1,
        // blog_title2: blogTitle2,
        // blog_description2: blogDescription2,
        // blog_title3: blogTitle3,
        // blog_description3: blogDescription3,
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
    setErrors({
      error_image: "",
    })

  }

  const closeImage = () => {
    setImageIsOpen(true); //
    setImageIsSet("")
    updateProduct.blog_image = "";
  }
  console.log(updateProduct)
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageIsSet(URL.createObjectURL(file))
      setImageIsOpen(false)
      setUpdateProduct({ ...updateProduct, [e.target.name]: file })
      setErrors({
        error_image: "",
      })
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
    if (updateProduct.blog_image == "") {
      setErrors({ ...errors, error_image: 'please upload Image' })
      return false;
    }
    return true;
  }
  const saveChanges = async () => {
    const accessToken = localStorage.getItem('Token');

    if (handleValidation()) {
      setIsLoading(false)
      if (imageIsSet != "") {
        console.log("url 1")
        const formData = new FormData();
        formData.append('image', updateProduct.blog_image);
        await axios.post(IMAGE_UPLOAD, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then((res) => {
          if (res) {
            console.log("url 1")
            updateProduct.blog_image = res.data.image
            axios.patch(UPDATE_BLOG, updateProduct, {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }).then((res) => {
              if (res) {
                console.log("update without image", res.data)
                toast.success(' Updated  Succefully  !')
                setRefreshFlag(true)
                setIsLoading(true)
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
        axios.patch(UPDATE_BLOG, updateProduct, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }).then((res) => {
          if (res) {
            console.log("update with image", res.data)
            toast.success(' Updated  Succefully  !')
            setRefreshFlag(true)
            setIsLoading(true)
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
        <img src={blogImage} alt="" />
      </div>
      <div className='prod-info'>
        <h3>{blogTitle}</h3>
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
        ariaHideApp={false}
      >

        {isLoading ? (<div>
          <h2>Edit Blog Post</h2>
          <div className='edit-form'>

            <div className='main-field-container'>
              <div>
                <span className='edit-tit'>Blog Title</span>

                <input
                  type='text'
                  value={updateProduct.blog_title}
                  name='blog_title'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                  placeholder='blog title' />
              </div>

              <div>
                <span className='edit-tit'> Blog Description</span>

                <textarea
                  className='edit-textarea'
                  rows={8}
                  type='text'
                  value={updateProduct.blog_description}
                  name='blog_description'
                  placeholder='Blog description'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }} />
              </div>

              {imageIsOpen ? <input type="file"
                name='blog_image'
                accept='image/*'
                onChange={(e) => { handleUploadImage(e) }} /> :
                <div className='edit-image-cont'>
                  <img src={imageIsSet ? imageIsSet : blogImage} />
                  <span onClick={closeImage}><IoMdCloseCircleOutline /></span>
                </div>
              }
              <div className='error-box'>{errors.error_image != " " ? errors.error_image : ''}</div>
            </div>

            <div className='input-field container'>
              {/* <div className='edit-input-field-row'>
              <div>
                <span className='edit-tit'>Blog Title 1</span>
                <input
                  type='text'
                  value={updateProduct.blog_title1}
                  name='blog_title1'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                  placeholder='blog title1' />
              </div>
            </div> */}

              <div className='edit-input-field-row'>
                <div>
                  <span className='edit-tit'> Blog Description 1</span>

                  <textarea
                    className='edit-textarea-blog'
                    rows={8}
                    type='text'
                    value={updateProduct.blog_description1}
                    name='blog_description1'
                    placeholder='Blog description1'
                    onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }} />
                </div>
              </div>



              {/* <div className='edit-input-field-row'>
              <div>
                <span className='edit-tit'>Blog Title 2</span>

                <input
                  type='text'
                  value={updateProduct.blog_title2}
                  name='blog_title2'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                  placeholder='blog title 2' />
              </div>
            </div> */}

              {/* <div className='edit-input-field-row'>
              <div>
                <span className='edit-tit'> Blog Description 2</span>

                <textarea
                  className='edit-textarea-blog'
                  rows={8}
                  type='text'
                  value={updateProduct.blog_description2}
                  name='blog_description2'
                  placeholder='Blog description2'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }} />
              </div>
            </div> */}

              {/* <div className='edit-input-field-row'>
              <div>
              <span className='edit-tit'>Blog Title 3</span>

              <input
                type='text'
                value={updateProduct.blog_title3}
                name='blog_title3'
                onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }}
                placeholder='blog title 3' />
            </div>
            </div> */}

              {/* <div className='edit-input-field-row'>
              <div>
                <span className='edit-tit'> Blog Description 3</span>

                <textarea
                  className='edit-textarea-blog'
                  rows={8}
                  type='text'
                  value={updateProduct.blog_description3}
                  name='blog_description3'
                  placeholder='Blog description3'
                  onChange={(e) => { setUpdateProduct({ ...updateProduct, [e.target.name]: e.target.value }) }} />
              </div>
            </div> */}

            </div>
          </div>
          <div className='edit-btn-cont'>
            <button onClick={saveChanges}>Save Changes</button>
            <button onClick={closeModel}> Cancel</button>
          </div>
        </div>) : (<div className='loader-component'>
          <img src={loader} />
        </div>)}

        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          limit={1}
        />

      </Modal>
    </div>
  )
}

export default BlogCard