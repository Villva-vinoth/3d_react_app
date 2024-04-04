import React from 'react'
import './inputBox.css '
const InputBox = ({title,type,placeholder}) => {
  return (
    <div className='input-box-container'>
            <label>{title}</label>
            <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default InputBox