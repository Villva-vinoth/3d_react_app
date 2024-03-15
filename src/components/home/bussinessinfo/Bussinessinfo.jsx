import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Bussinessinfo.css'
const Bussinessinfo = () => {

    const [percentage, setPercentage] = useState(0);
    const [Apercentage, setAPercentage] = useState(0);

    const [Bpercentage, setBPercentage] = useState(0);
    const [Cpercentage, setCPercentage] = useState(0);


    useEffect(() => {
        const targetPercentage = 66;
        const interval = setInterval(() => {
            setPercentage((prevPercentage) => {
                const diff = targetPercentage - prevPercentage;
                const step = diff > 0 ? 1 : -1;
                return prevPercentage + step;
            });
        }, 20);
        if (percentage === targetPercentage) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [percentage]);

    useEffect(() => {
        const targetPercentage = 65;
        const interval = setInterval(() => {
            setAPercentage((prevPercentage) => {
                const diff = targetPercentage - prevPercentage;
                const step = diff > 0 ? 1 : -1;
                return prevPercentage + step;
            });
        }, 20);
        if (Apercentage === targetPercentage) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [Apercentage]);

    useEffect(() => {
        const targetPercentage = 77;
        const interval = setInterval(() => {
            setBPercentage((prevPercentage) => {
                const diff = targetPercentage - prevPercentage;
                const step = diff > 0 ? 1 : -1;
                return prevPercentage + step;
            });
        }, 20);
        if (Bpercentage === targetPercentage) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [Bpercentage]);

    useEffect(() => {
        const targetPercentage = 84;
        const interval = setInterval(() => {
            setCPercentage((prevPercentage) => {
                const diff = targetPercentage - prevPercentage;
                const step = diff > 0 ? 1 : -1;
                return prevPercentage + step;
            });
        }, 20);
        if (Cpercentage === targetPercentage) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [Cpercentage]);

    return (
        <div className='Bussiness-display'>
            <div className='Bussiness-header'><h2>Advantages by choosing us
            </h2></div>
            <div className='Bussiness-upper'>
                <div className='Bussiness-inner'>
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                            root: {
                                width: '150px',
                                height: '150px',
                                filter: 'drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))'
                            },
                            path: {
                                stroke: 'blueviolet',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset .1s ease ',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e1e1e1',
                            },
                            text: {
                                fill: 'black',
                                fontSize: '16px',
                            },
                            background: {
                                fill: 'white',
                            },
                        }}
                    />
                    <div>
                        <div className='bussiness-head'>More Efficient range
                        </div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors achieves 15% higher range because of the minimal energy 
losses incurred during the operation, setting new standards in electric motor 
technology.
 </pre></div>
                    </div>
                </div>

                <div className='Bussiness-inner'>
                    <CircularProgressbar
                        value={Apercentage}
                        text={`${Apercentage}%`}
                        styles={{
                            root: {
                                width: '150px',
                                height: '150px',
                                filter: 'drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))'
                            },
                            path: {
                                stroke: 'blueviolet',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset .1s ease ',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e1e1e1',
                            },
                            text: {
                                fill: 'black',
                                fontSize: '16px',
                            },
                            background: {
                                fill: 'white',
                            },
                        }}
                    />
                    <div>
                        <div className='bussiness-head'>Cost efficiency</div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors are cost efficient because of the utilization of unique materials
                            and manufacturing processes, coupled with a reduction in overall material usage,
                            resulting in lowered production costs without compromising quality or performance,
                            thus ensuring affordability and sustainability.</pre></div>
                    </div>
                </div>
                <div className='Bussiness-inner'>
                    <CircularProgressbar
                        value={Bpercentage}
                        text={`${Bpercentage}%`}
                        styles={{
                            root: {
                                width: '150px',
                                height: '150px',
                                filter: 'drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))'
                            },
                            path: {
                                stroke: 'blueviolet',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset .1s ease ',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e1e1e1',
                            },
                            text: {
                                fill: 'black',
                                fontSize: '16px',
                            },
                            background: {
                                fill: 'white',
                            },
                        }}
                    />
                    <div>
                        <div className='bussiness-head'>Compact and lightweight motors
</div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors offer a remarkable advantage with their 50% reduction in 
weight and compact size is attributed to its parallel magnetic flux path design, which 
optimizes magnetic field distribution, enabling significant weight and size reduction 
without compromising performance.</pre></div>
                    </div>
                </div>
                <div className='Bussiness-inner'>
                    <CircularProgressbar
                        value={Cpercentage}
                        text={`${Cpercentage}%`}
                        styles={{
                            root: {
                                width: '150px',
                                height: '150px',
                                filter: 'drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3))'
                            },
                            path: {
                                stroke: 'blueviolet',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset .1s ease ',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                            },
                            trail: {
                                stroke: '#e1e1e1',
                            },
                            text: {
                                fill: 'black',
                                fontSize: '16px',
                            },
                            background: {
                                fill: 'white',
                            },
                        }}
                    />
                    <div>
                        <div className='bussiness-head'>Quick plug and play
</div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors boasts up to 95% regenerative capability, allowing it to 
efficiently recover and convert kinetic energy during braking or deceleration into usable 
electrical energy, significantly enhancing overall energy efficiency and extending vehicle 
range.</pre></div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Bussinessinfo