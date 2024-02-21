import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const data = [
    { name: "sddsgf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { name: "sadf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { name: "gdsf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { name: "fete", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
  ];

  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    updateDisplayData();
  }, []); 
  const updateDisplayData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newDisplayData = data.slice(startIndex, endIndex);
   setDisplayData(newDisplayData);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
    updateDisplayData();
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    updateDisplayData();
  };

  return (
    <div>
      <div>
        <h3>Products</h3>
        <div className='hm-product-upper'>
          {displayData.map((item, index) => (
            <div className='hm-product-inner' key={index}>
              <picture>
                <img src='' alt='' />
              </picture>
              <div>
                <div>{item.name}</div>
                {item.describe}
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>{`<`}</button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>{`>`}</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
