import React, { useState } from 'react'
import './journey.css'
import img from '../../Assets/careers/Rectangle 57 (1).png'
import img2 from '../../Assets/Vector 4.png'
const Journey = () => {
    const [select, setSelect] = useState(0)
    const data = ['2012', '2019', '2020', '2022', '2023', '2024']
    const [selectedYear, setSelectedYear] = useState(null);

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const startIndex = selectedYear ? data.indexOf(selectedYear) : 0;
    return (
        <div className='jorney-display'>
            <div className='journey-header'><h1>Journey</h1>
                <div className='journey-header-opacity'>Journey</div>
            </div>
            <div className='journey-container-content'>
                <div className='journey-content'>
                    <ul>
                      
                        <li className={select === 0 ? 'isSelect' : 'isNotSelect'} onClick={() => { setSelect(0) }}>2012</li>
                        <li className={select === 1 ? 'isSelect' : 'isNotSelect'} onClick={() => { setSelect(1) }}>2019</li>
                        <li className={select === 2 ? 'isSelect' : 'isNotSelect'} onClick={() => { setSelect(2) }}>2020</li>
                        <li className={select === 3 ? 'isSelect' : 'isNotSelect'} onClick={() => { setSelect(3) }}>2022</li>
                    </ul>
                </div>
                <div className='journey-second'>
                    <div className='journey-part'>
                        <div className='journey-pic'>
                            <img src={img} alt='' />
                        </div>
                        <div className='journey-description-part'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel quas corporis nobis, eveniet a consequatur incidunt in, nesciunt, nam molestiae hic omnis autem aperiam facere tenetur amet aliquid ratione.
                            <div>2012</div>
                        </div>
                    </div>
                    <div className='journey-map'>
                        <img src={img2} alt='' />
                    </div>
                    <div className='journey-part-1'>
                        <div className='journey-pic-1'>
                            <img src={img} alt='' />
                        </div>
                        <div className='journey-description-part-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel quas corporis nobis, eveniet a consequatur incidunt in, nesciunt, nam molestiae hic omnis autem aperiam facere tenetur amet aliquid ratione.
                            <div>2012</div>
                        </div>
                    </div>
                </div>
                <div className='moblie-jorney-second'>
                    <div className='moblie'>
                        <div className='mobile-pic'>
                            <img src={img} alt='' />
                        </div>
                        <div className='mobile-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, modi et commodi dolorum sit eos, autem quo ab, totam dignissimos quis ut molestiae. Libero facilis eos quidem in assumenda dicta.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Journey