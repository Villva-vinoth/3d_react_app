import React, { useState } from 'react';
import './Benefits.css';
import img from './seal.png'

const Benefits = () => {
    const data = [
        { topic: "benefits", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "1" },
        { topic: "benefits1", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "2" },
        { topic: "benefits2", describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", logo: "3" },
    ];

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems);

    const [currentPage, setCurrentPage] = useState(1); // Start from the first page

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentData = data[currentPage - 1];

    return (
        <div className='Benefits-display'>

        

            <picture className='Benefit-img'>
                <h1 className='Benefit-TAFM'>
                    <span className='color-white'>T</span>
                    <span className='color-white'>A</span>
                    <span className='color-grey'>F</span>
                    <span className='color-grey'>M</span>
                </h1>
                <img src={img} alt=''  className='Benefit-logo'/>
                <img src='https://m.media-amazon.com/images/I/41KkTPn3dCL._AC_UF1000,1000_QL80_.jpg' alt=''  className='Benefit-product-img'/>
            </picture>
            <div className='Benefits-outer-display'>
                <div className='Benefits-inner-display'>
                    <div className='Benefit-title'>
                        <h2>{currentData.topic}</h2>
                    </div>
                    <div className='Benefit-icon'>{currentData.logo}</div>
                    <div>
                        <p>{currentData.describe}</p>
                    </div>
                </div>
                <div className="Benefits-pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'selected' : ''}>
                            {}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Benefits;
