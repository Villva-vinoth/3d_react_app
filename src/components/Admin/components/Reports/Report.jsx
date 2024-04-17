import React from 'react'
// import ReportTable from './ReportTable'

const Report = () => {
  return (
    <div className='admin-products'>
    <div className='wrapper-container'>
      <div className='admin-product-header'>
        <h2>Reports</h2>
         <select>
            <option value={1}>Contact Form 1</option>
            <option value={2}>Contact Form 2</option>
            <option value={3}>Contact Form 3</option>
         </select>
         
      </div>
      {/* <ReportTable/> */}
      </div>

      </div>
  )
}

export default Report