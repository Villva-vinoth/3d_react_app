import React, { useState } from 'react'

import "./report.css"
import ContactForm1 from './ContactForm1'
import ContactForm2 from './ContactForm2'
import ContactForm3 from './ContactForm3'

const ReportTable = ({formValue}) => {

  

  return (
    <div className='report-table-container'>
      {formValue==1?<ContactForm1 />:formValue==2?<ContactForm2/>:<ContactForm3/>}
    </div>
  )
}

export default ReportTable