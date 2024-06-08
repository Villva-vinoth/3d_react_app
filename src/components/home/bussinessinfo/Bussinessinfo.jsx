import React, { useEffect, useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Bussinessinfo.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Bussinessinfo = () => {

    useEffect(() => {
        Aos.init({
            duration: 600,
            // easing:"ease",
            delay: 100
        })
    })

    const bussinessRef = useRef(null)

    const [percentage, setPercentage] = useState(0);
    const [Apercentage, setAPercentage] = useState(0);

    const [Bpercentage, setBPercentage] = useState(0);
    const [Cpercentage, setCPercentage] = useState(0);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPercentage(0);
                    setAPercentage(0);
                    setBPercentage(0);
                    setCPercentage(0);
                }
            },
            {
                threshold: 0.5
            }
        );

        if (bussinessRef.current) {
            observer.observe(bussinessRef.current);
        }

        return () => {
            if (bussinessRef.current) {
                observer.unobserve(bussinessRef.current);
            }
        };
    }, []);


    useEffect(() => {
        const targetPercentage = 15;
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
        const targetPercentage = 80;
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
        const targetPercentage = 50;
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


    // useEffect(() => {
    //     let interval;
    //     if (Cpercentage < 95) {
    //         interval = setInterval(() => {
    //             setCPercentage(prevPercentage => prevPercentage + 1);
    //         }, 20);
    //     }
    //     return () => clearInterval(interval);
    // }, [Cpercentage]);

    useEffect(() => {
        const targetPercentage = 95;
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
        <div className='Bussiness-display' ref={bussinessRef}>
            <div className='Bussiness-header' data-aos='fade-in'><h2>Advantages by choosing us
            </h2></div>
            <div className='Bussiness-upper' >
                <div className='Bussiness-inner' data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="1500"
                >
                    <CircularProgressbar
                        value={Bpercentage}
                        text={`${Bpercentage}%`}
                        styles={{
                            root: {
                                // maxWidth: '100%',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '130px',
                                maxHeight: '130px',
                            },
                            path: {
                                stroke: 'black',
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
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors (TAFM) offer a remarkable advantage with their 50% reduction in weight and compact
                             size is attributed to its parallel magnetic flux path design, which optimizes magnetic field distribution, enabling significant weight and size
                             reduction without compromising performance.</pre></div>
                    </div>
                </div>
                <div className='Bussiness-inner' data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="1500"
                >
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={{
                            root: {
                                // maxWidth: '100%',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '130px',
                                maxHeight: '130px',
                            },
                            path: {
                                stroke: 'black',
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
                        <div className='bussiness-head' >More Efficient 
                        </div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors & controller achieves 95% combined efficiency range
                             because of the
                             minimal energy losses incurred during the operation,
                             setting new standards in electric motor technology.
                        </pre></div>
                    </div>
                </div>

                <div className='Bussiness-inner' data-aos="fade-up"
                // data-aos-anchor-placement="center-center"
                >
                    <CircularProgressbar
                        value={Apercentage}
                        text={`${Apercentage}%`}
                        styles={{
                            root: {
                                // maxWidth: '100%',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '130px',
                                maxHeight: '130px',
                            },
                            path: {
                                stroke: 'black',
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
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors (TAFM) are cost-efficient due to the utilization of unique materials and manufacturing processes, coupled with a reduction in overall material usage. This results in lowered production costs without compromising quality or
                             performance, ensuring affordability and sustainability.
                              Additionally, they are 10% more cost-effective compared to radial
                               flux motors.</pre></div>
                    </div>
                </div>
                {/* <div className='Bussiness-inner' data-aos="fade-up"
          
                >
                    <CircularProgressbar
                        value={Cpercentage}
                        text={`${Cpercentage}%`}
                        styles={{
                            root: {
                                width: '100%',
                                height: 'auto',
                                maxWidth: '130px',
                                maxHeight: '130px',
                            },
                            path: {
                                stroke: 'black',
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
                        <div className='bussiness-head'>Higher Regenerative Braking
                        </div>
                        <div><pre className='bussiness-para'>Torus Axial Flux Motors boasts up to 95% regenerative capability, allowing it to
                            efficiently recover and convert kinetic energy during braking or deceleration into usable
                            electrical energy, significantly enhancing overall energy efficiency and extending vehicle
                            range.</pre></div>
                    </div>
                </div> */}



            </div>
        </div>
    )
}

export default Bussinessinfo







