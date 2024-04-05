import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar } from "react-icons/fa6";
import './timeLine.css'
import { TimeLineData } from './TimeLineData';

const TimeLine = () => {
    return (
        <div className='TimeLine'>
            <div className='TimeLine-header'>
                <h2>Journey</h2>
                <div className='Time-line-opacity'>Journey</div>
            </div>
            <VerticalTimeline lineColor="black">

                {
                    TimeLineData.map((item) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(230, 230, 230)', color: 'black',  boxShadow: "10px 10px 10px grey" }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(230, 230, 230)' }}
                                date={item.date}
                                iconStyle={{ background: 'rgb(230, 230, 230)', color: 'black' }}
                                icon={<FaStar />}
                            >
                                <div className='TimeLine-container-cont'>
                                    <div className='TimeLine-pic'>
                                        <img src={item.img} alt='' />
                                    </div>
                                    <div className='TimeLine-para'>
                                       {item.describe}
                                    </div>
                                    <div className='TimeLine-Date'>
                                    <span className='TimeLine-span'>{item.date}</span>
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        )
                    })
                }

               
            </VerticalTimeline>
    
        </div>
    )
}

export default TimeLine