import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const data = [
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tIosOHGmVV3R1nCQdPmYqz7y6cc_Gkn_oQ&usqp=CAU",name: "sddsgf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tIosOHGmVV3R1nCQdPmYqz7y6cc_Gkn_oQ&usqp=CAU",name: "sadf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tIosOHGmVV3R1nCQdPmYqz7y6cc_Gkn_oQ&usqp=CAU",name: "gdsf", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tIosOHGmVV3R1nCQdPmYqz7y6cc_Gkn_oQ&usqp=CAU",name: "fete", describe: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus pariatur provident libero voluptates quaerat vitae maxime? Aspernatur eum itaque voluptatem soluta iste cum explicabo perspiciatis rerum tenetur, nemo quam." },
  ];

  const itemsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = data.slice(startIndex, endIndex);
    setDisplayData(slicedData);
  }, [currentPage, data]);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };


  return (
    <div className='home-product-display'>
      <h3>Products</h3>
      <div className='hm-product-upper'>
        {displayData.map((item, index) => (
          <div className='hm-product-inner' key={index}>
            <picture>
              <img src={item.img} alt={item.name} />
            </picture>
            <div>
              <div>{item.name}</div>
              {item.describe}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>{'←'}</button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>{'→'}</button>
      </div>
    </div>
  );
};

export default Products;