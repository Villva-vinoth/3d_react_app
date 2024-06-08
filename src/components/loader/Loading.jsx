import React from 'react'
import './loading.css'
import Lottie from 'lottie-react'
import lottie_loader from './lottieLoader.json'
const Loading = () => {
  return (
    <div className='loading'>
        <Lottie  animationData={lottie_loader} />
    </div>
  )
}


export default Loading