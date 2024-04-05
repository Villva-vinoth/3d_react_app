import React, { useEffect } from 'react'
import './whyTorus.css'
import TorusHeader from './torusHeader/TorusHeader'
import TorusVideo from './torusVideo/TorusVideo'
import TorusContent from './torusContents/TorusContent'
import TorusAward from './Award/TorusAward'
import Journey from './journey/Journey'
import TimeLine from './timeLine/TimeLine'
const WhyTorus = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=''>
        <TorusHeader />
        <TorusVideo />
        <TorusContent />
        {/* <Journey /> */}
        {/* <TimeLine /> */}
        
        <TorusAward />
    </div>
  )
}

export default WhyTorus