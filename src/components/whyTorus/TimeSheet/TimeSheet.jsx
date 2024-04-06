import React, { useEffect, useState } from 'react'
import './TimeSheet.css'
import { TestData } from './testData'
const TimeSheet = () => {

  const [active, setActive] = useState(0)
  const [select,setSelect] =useState(TestData[0])
  const [datas, setDatas] = useState([])
  useEffect(() => {
    console.log(select)
    setDatas(select)
    setActive(select.date)
  }, [select])
  const handleClick = (id) => {
    
 
    setSelect(id)
  }
  return (
    <div className='TimeSheet-cont'>
      <div className='TimeSheet-header'>
        <h2>Journey</h2>
        <div className='Timesheet-op'>Journey</div>
      </div>
      <div className='Timesheet-display'>
        <div className='TimeSheet-time-Cont'>
          {
            TestData.map((item) => {
              return (
                <div className={active === item.date ? 'time-cont Time_active' : "time-cont"} onClick={() => { handleClick(item) }} id={item.date}>
                  {item.date}
                </div>
              )
            })
          }
        </div>
        <div className='TimeSheet-cont-2'>
          {/* <div>
            {datas.date}
          </div> */}
          <div className='time-sheet-container'>
            {
              datas.ul  && datas.ul.map((itm) => {
                return (
                  <div className={itm.even == 0 ? 'timeSheet-timeLine-cont' :'timeSheet-timeLine-cont-rev'}>
                    <div className='timeSheet-img'>
                      <img src={itm.img} alt='' />
                    </div>
                   <div className='timesheet-content-2'>
                   <p className='timeSheet-para'>
                      {itm.description}
                    </p>
                    <div className='timesheet-date'>{datas.date}</div>
                    </div>
                    
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default TimeSheet