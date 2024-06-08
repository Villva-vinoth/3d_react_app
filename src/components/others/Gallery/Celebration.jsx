import React, { useEffect, useState } from 'react'
import { ReactSmartScroller } from 'react-smart-scroller'
import './scroll.css'
import Loading from '../../loader/Loading'
const Scroll = ({ data, title }) => {

  const [refreshState, setRefreshState] = useState(false)

  useEffect(() => {
    setRefreshState(true)
    setTimeout(() => {
      setRefreshState(false)
    }, 5000)
  }, [title])

  return (
    <>
    {
      refreshState ==true ? (<Loading />) : (<div className='scroll-content'>
        <h1 className='scroll-title'>{title}</h1>
        <ReactSmartScroller thumb={
          <div
            className='scroll-thumb'
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: 'black',
  
            }}
          />
        }>
          {
            data.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  className='scroll-pic'
                />
              )
            })
          }
        </ReactSmartScroller>
      </div>)
    }
    </>
    
  )
}

export default Scroll