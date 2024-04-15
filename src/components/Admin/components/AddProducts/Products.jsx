import React, { useEffect, useState } from 'react'
import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
import  axios  from 'axios'
import { GET_ALL_PRODUCTS } from '../../../../apiServices'
import ProductCard from './ProductCard'
const Products = () => {
  const [productItems,setProductItems]=useState([]);
  const [deleteFlag,setDeleteFlag] =useState(false)
  useEffect(() => {
    const getAllProducts = async () => {
      await axios.get(GET_ALL_PRODUCTS).then((res) => { console.log(res.data.data)
         setProductItems(res.data.data) }).catch((err) => { console.log(err) });
    }
    getAllProducts()
  }, [deleteFlag])

  const nav = useNavigate()
  return (
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>
          <h2>Products</h2>
          <button onClick={() => { nav("/admin/add-products") }}>Add products</button>
        </div>
        <div className='Admin-product-container'>
          {
            productItems && productItems.map(product =>{
              return(<ProductCard key={product.product_id} 
                 productTitle={product.product_title} 
                 productImage={product.product_image}
                 productDate={product.createAt} 
                 productId={product.product_id}
                 productDesc={product.product_description}
                 voltageRange={product.voltage_range}
                 nominalVoltage={product.nominal_voltage}
                 ratedVoltage={product.rated_voltage}
                 ratedPower={product.rated_power}
                 absoluteMaxVoltage={product.absolute_max_voltage}
                 maxCurrent={product.max_current}
                 peakPower={product.peak_power}
                 maxRPM={product.max_RPM}
                 peakTorque={product.peak_torque}
                 overLoadedTorque={product.overload_torque}
                 dutyCycle={product.duty_cycle}
                 peakCurrent={product.peak_current}
                 weight={product.weight}
                 continousCurrent={product.continous_current}
                 support={product.support}
                 operatingMode={product.operating_mode}
                 setDeleteFlag={setDeleteFlag} />)
            })
          }
           
        </div>

      </div>
    </div>
  )
}

export default Products