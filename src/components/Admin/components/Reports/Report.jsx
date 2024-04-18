import React, { useState } from 'react'
import ReportTable from './ReportTable'
import "./report.css"

const Report = () => {
  const [formValue,setFormValue] =useState(1);
  return (
    <div className='admin-products'>
    <div className='wrapper-container'>
      <div className='admin-product-header'>
        <h2>Reports</h2>
         <select className='form-drop-down' onChange={(e)=>setFormValue(e.target.value)}>
            <option value={1}>Contact Form 1</option>
            <option value={2}>Contact Form 2</option>
            <option value={3}>Contact Form 3</option>
         </select>
         
      </div>
      <ReportTable formValue={formValue}/>
      </div>

      </div>
  )
}

export default Report