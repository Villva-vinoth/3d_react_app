import React, { useEffect, useState } from 'react'
// import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
import  axios  from 'axios'
import { GET_ALL_TESTIMONIALS } from '../../../../apiServices'
import TestimonialCard from './TestimonialCard'
// import ProductCard from './ProductCard'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ReactPaginate from 'react-paginate'

const Testimonials = () => {
  const [testimonialItems,setTestimonialItems]=useState([]);
  const [deleteFlag,setDeleteFlag] =useState(false)
  const [refreshFlag,setRefreshFlag] =useState(false)
  useEffect(() => {
    const getAllTestimonials = async () => {
      await axios.get(GET_ALL_TESTIMONIALS).then((res) => { console.log(res.data.data)
        setTestimonialItems(res.data.data) }).catch((err) => { console.log(err) });
      
    }
    console.log("refresh",refreshFlag)
    getAllTestimonials()
  }, [deleteFlag,refreshFlag])

  // console.log("refresh",refreshFlag)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = testimonialItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(testimonialItems.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % testimonialItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  const nav = useNavigate()
  return (
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>
          <h2>Testimonials</h2>
          <button onClick={() => { nav("/admin/add-testimonials") }}>Add Testimonial</button>
        </div>
        <div className='Admin-product-container'>
          {
            currentItems && currentItems.map(item =>{
              console.log("mapped times ")
              return(
                <TestimonialCard
                 key={item.testimonials_id} 
                 
                 testimonialName={item.testimonials_name} 
                 testimonialImage={item.testimonials_image}
                 testimonialDate={item.create_At} 
                 testimonialId={item.testimonials_id}
                 testimonialDesc={item.testimonials_description}
                 setDeleteFlag={setDeleteFlag} 
                 setRefreshFlag={setRefreshFlag}
                 />)
            })
          }
           
        </div>
        
        <ReactPaginate
          breakLabel="..."
          nextLabel={<MdKeyboardDoubleArrowRight/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<MdKeyboardDoubleArrowLeft/>}
          renderOnZeroPageCount={null}
          containerClassName='pagination-container-admin'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </div>
    </div>
  )
}

export default Testimonials