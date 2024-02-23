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
            <div className='Bussiness-header'><h4>dsfsa</h4></div>
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
                        <div>sdgdsf</div>
                        <div><pre>dsrgerhdrg</pre></div>
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
                        <div>sdgdsf</div>
                        <div><pre>dsrgerhdrg</pre></div>
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
                        <div>sdgdsf</div>
                        <div><pre>dsrgerhdrg</pre></div>
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
                        <div>sdgdsf</div>
                        <div><pre>dsrgerhdrg</pre></div>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default Bussinessinfo