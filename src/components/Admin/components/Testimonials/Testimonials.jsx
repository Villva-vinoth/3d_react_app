import React, { useEffect, useState } from 'react'
// import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
import  axios  from 'axios'
import { GET_ALL_PRODUCTS } from '../../../../apiServices'
// import ProductCard from './ProductCard'
const Testimonials = () => {
  const [testimonialItems,setTestimonialItems]=useState([]);
  const [deleteFlag,setDeleteFlag] =useState(false)
  const [refreshFlag,setRefreshFlag] =useState(false)
  useEffect(() => {
    const getAllTestimonials = async () => {
      await axios.get(GET_ALL_PRODUCTS).then((res) => { console.log(res.data.data)
        setTestimonialItems(res.data.data) }).catch((err) => { console.log(err) });
      
    }
    console.log("refresh",refreshFlag)
    getAllTestimonials()
  }, [deleteFlag,refreshFlag])

  // console.log("refresh",refreshFlag)

  const nav = useNavigate()
  return (
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>
          <h2>Testimonials</h2>
          <button onClick={() => { nav("/admin/add-testimonials") }}>Add Testimonial</button>
        </div>
        <div className='Admin-product-container'>
          {
            testimonialItems && testimonialItems.map(item =>{
              console.log("mapped times ")
              return(
                // <ProductCard key={product.product_id} 
                //  productTitle={product.product_title} 
                //  productImage={product.product_image}
                //  productDate={product.createAt} 
                //  productId={product.product_id}
                //  productDesc={product.product_description}
                //  voltageRange={product.voltage_range}
                //  nominalVoltage={product.nominal_voltage}
                //  ratedVoltage={product.rated_voltage}
                //  ratedPower={product.rated_power}
                //  absoluteMaxVoltage={product.absolute_max_voltage}
                //  maxCurrent={product.max_current}
                //  peakPower={product.peak_power}
                //  maxRPM={product.max_RPM}
                //  peakTorque={product.peak_torque}
                //  overLoadedTorque={product.overload_torque}
                //  dutyCycle={product.duty_cycle}
                //  peakCurrent={product.peak_current}
                //  weight={product.weight}
                //  continousCurrent={product.continous_current}
                //  support={product.support}
                //  operatingMode={product.operating_mode}
                //  setDeleteFlag={setDeleteFlag} 
                //  setRefreshFlag={setRefreshFlag}/>
                <div>hi</div>
                )
            })
          }
           
        </div>

      </div>
    </div>
  )
}

export default Testimonials