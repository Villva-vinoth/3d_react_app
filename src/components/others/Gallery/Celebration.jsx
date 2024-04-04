import React from 'react'
import { ReactSmartScroller } from 'react-smart-scroller'
import './scroll.css'
const Scroll = ({data ,title}) => {


  return (
    <div className='scroll-content'>
      <h1 className='scroll-title'>{title}</h1>
      <ReactSmartScroller  thumb={
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
          data.map((image,index) => {
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
    </div>
  )
}

export default Scroll