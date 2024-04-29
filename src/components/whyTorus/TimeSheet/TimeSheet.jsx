import React, { useEffect, useState } from 'react'
import './TimeSheet.css'
import { TestData } from './testData'
import Aos from 'aos'
import 'aos/dist/aos.css'
const TimeSheet = () => {

  const [active, setActive] = useState(0)
  const [select, setSelect] = useState([])
  const [datas, setDatas] = useState(TestData)

  useEffect(() => {
    if (select.length == 0) {
      setDatas(TestData)
      setActive('')
      console.log("---data",select)
    }
    else {
      console.log("----> data", select)
      setDatas(select)
      setActive(select[0].date)
    }
  }, [select])


 

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease",
      delay: 100
    })
  })

  const handleClick = (id) => {
    // console.log("id", id)
    // const filter = TestData.filter((itm) => itm.date == id)
    // console.log("filter --- data", filter)
    setSelect([{...id}])
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
            {/* {
              datas.ul && datas.ul.map((itm) => {
                return (
                  <div className={itm.even == 0 ? 'timeSheet-timeLine-cont animation-timesheet' : 'timeSheet-timeLine-cont-rev'}
                    // data-aos="fade-right"
                    // data-aos-offset="300"
                    // data-aos-duration="2000"
                    // data-aos-easing="ease-in-sine"
                  >
                    <div className='timeSheet-img'>
                      <img src={itm.img} alt='' />
                    </div>
                    <div className='timesheet-content-2'>
                      <h3 style={{padding:"0.5rem 0",margin:"0%"}}>{itm.h1}</h3>
                      <p className='timeSheet-para'>
                        {itm.description}
                      </p>
                      <div className='timesheet-date'>{datas.date}</div>
                    </div>

                  </div>
                )
              })
            } */}{
              datas.map((item,index) => {
                
                return (
                  <div>
                    {
                      item.ul.map((itm) => {
                        console.log(itm.ar )
                        return (
                          <div className={ ( (itm.ar) % 2 == 0) ? 'timeSheet-timeLine-cont animation-timesheet' : 'timeSheet-timeLine-cont-rev'}
                          // data-aos="fade-right"
                          // data-aos-offset="300"
                          // data-aos-duration="2000"
                          // data-aos-easing="ease-in-sine"
                          >
                            <div className='timeSheet-img'>
                              <img src={itm.img} alt='' />
                            </div>
                            <div className='timesheet-content-2'>
                              <h3 style={{ padding: "0.5rem 0", margin: "0%" }}>{itm.h1}</h3>
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