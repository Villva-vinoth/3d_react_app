import React, { useRef, useState } from 'react'
import './addProducts.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios  from 'axios';
import { ADD_PRODUCT } from '../../../../apiServices';

const AddProducts = () => {

  const fileInput = useRef(null)

  const [product, setProduct] = useState(
    { 
      user_id:1,
      product_title: "",
      product_image: "",
      product_description: "",
      voltage_range: "",
      rated_power: "",
      peak_power: "",
      max_RPM: "",
      peak_torque: "",
      overload_torque: "",
      duty_cycle: "",
      weight: "",
      nominal_voltage: "",
      max_current: "",
      rated_voltage: "",
      absolute_max_voltage: "",
      continous_current: "",
      peak_current: "",
      support: "",
      operating_mode: "",
    }
  )
  const [image, setImage] = useState(0)
  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setProduct({ ...product, [e.target.name]: file })
    
    }
  }
  

  const resetProduct = () => {
    setProduct({
      ...product,
      product_title: "",
      product_image: "",
      product_description: "",
      voltage_range: "",
      rated_power: "",
      peak_power: "",
      max_RPM: "",
      peak_torque: "",
      overload_torque: "",
      duty_cycle: "",
      weight: "",
      nominal_voltage: "",
      max_current: "",
      rated_voltage: "",
      absolute_max_voltage: "",
      continous_current: "",
      peak_current: "",
      support: "",
      operating_mode: "",
    })
    setImage("")
    if (fileInput) {
      fileInput.current.value = null
    }
  }
  const handleValidation = () => {

    const { product_title, product_image, product_description } = product;

    if (product_title == "") {

      toast.error(' Product Name Should Not be Empty!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
      return false
    }

    if (product_image == "") {

      toast.error(' Please upload Product Image!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
      return false
    }

    if (product_description == "") {
      toast.error(' Product Description Should Not be Empty!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
      return false
    }

    return true
  }

  const handleAddProduct = async () => {
   
    const formData = new FormData();
    // formData.append('product_image', product.product_image);
    // const { product_image , ...newproduct} = product
    for (let key in product) {
      formData.append(key, product[key]);
    }
    console.log(formData)

    // 
    // formData.append('product',JSON.stringify(newproduct))
    if (handleValidation()) {
      await axios.post(ADD_PRODUCT,formData).then((res) => {
        if (res) {
          toast.success(' Added Succefully  !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

          });
          resetProduct();
        }
      }).catch((err) => {
        console.log(err)
    })

    }
  }
  return (

    <div className='add-pro'>

      <div className='wrapper-container'>
        <div className='product-form'>
          <h2>Add Products</h2>
          <input type='text'
            value={product.product_title}
            name='product_title'
            placeholder='Product name'
            onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />

          {image ? <img src={image} /> : ""}


          <input type='file'
            accept="image/*"
            name="product_image"
            ref={fileInput}
            onChange={(e) => handleUploadImage(e)} />

          <textarea rows={5}
            name='product_description'
            placeholder='Product description'
            value={product.product_description}
            onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Voltage Range :</label>
              <input type='text'
                value={product.voltage_range}
                name='voltage_range'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Nominal voltage :</label>
              <input type='text'
                value={product.nominal_voltage}
                name='nominal_voltage'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label> Rated Voltage :</label>
              <input type='text'
                value={product.rated_voltage}
                name='rated_voltage'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Absolute max voltage :</label>
              <input type='text'
                value={product.absolute_max_voltage}
                name='absolute_max_voltage'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Rated Power :</label>
              <input type='text'
                value={product.rated_power}
                name='rated_power'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Peak Power :</label>
              <input type='text'
                value={product.peak_power}
                name='peak_power'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Max RPM :</label>
              <input type='text'
                value={product.max_RPM}
                name='max_RPM'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Duty Cycle :</label>
              <input type='text'
                value={product.duty_cycle}
                name='duty_cycle'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Peak Torque : </label>
              <input type='text'
                value={product.peak_torque}
                name='peak_torque'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Over loaded Torque :</label>
              <input type='text'
                value={product.overload_torque}
                name='overload_torque'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Continous Current :</label>
              <input type='text'
                value={product.continous_current}
                name='continous_current'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Max current : </label>
              <input type='text'
                value={product.max_current}
                name='max_current'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Peak Current :</label>
              <input type='text'
                name='peak_current'
                value={product.peak_current}
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Weight :</label>
              <input type='text'
                value={product.weight}
                name='weight'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>

          <div className='product-form-field'>
            <div className='product-rows'>
              <label>Support :</label>
              <input type='text'
                value={product.support}
                name='support'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>

            <div className='product-rows'>
              <label> Operating Mode :</label>
              <input type='text'
                value={product.operating_mode}
                name='operating_mode'
                onChange={(e) => { setProduct({ ...product, [e.target.name]: e.target.value }) }} />
            </div>
          </div>
          <div className='add-prod-btn'>
            <button onClick={handleAddProduct}> Add Product</button>
            <button onClick={resetProduct}> Reset</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default AddProducts