import React, { useEffect, useState } from 'react'
// import './addProducts.css'
import { useNavigate } from 'react-router-dom/dist'
import  axios  from 'axios'
import { GET_ALL_AWARDS } from '../../../../apiServices'

// import ProductCard from './ProductCard'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ReactPaginate from 'react-paginate'
import AwardsCard from './AwardsCard';

const Awards = () => {

    const [awardsItems,setAwardsItems]=useState([]);
    const [deleteFlag,setDeleteFlag] =useState(false)
    const [refreshFlag,setRefreshFlag] =useState(false)
    useEffect(() => {
      const getAllAwards = async () => {
        await axios.get(GET_ALL_AWARDS).then((res) => { console.log(res.data.data)
          setAwardsItems(res.data.data) }).catch((err) => { console.log(err) });
        
      }
      console.log("refresh",refreshFlag)
      getAllAwards()
    }, [deleteFlag,refreshFlag])
  
    // console.log("refresh",refreshFlag)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = awardsItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(awardsItems.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % awardsItems.length;
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
          <h2>Awards & Recogination</h2>
          <button onClick={() => { nav("/admin/add-awards") }}>Add Awards</button>
        </div>
        <div className='Admin-product-container'>
          {
            currentItems && currentItems.map(item =>{
              console.log("mapped times ")
              return(
                <AwardsCard
                 key={item.awards_id} 
                 awardsName={item.awards_name} 
                 awardsImage={item.awards_image}
                 awardsDate={item.create_At} 
                 awardsId={item.awards_id}
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

export default Awards