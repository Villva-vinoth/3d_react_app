import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlogCard from './BlogCard';
import { GET_ALL_BLOG } from '../../../../apiServices';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";



const Blogs = () => {
  const [blogItems, setBlogItems] = useState([]);
  const [deleteFlag, setDeleteFlag] = useState(false)
  const [refreshFlag, setRefreshFlag] = useState(false)
  useEffect(() => {
    const getAllBlog = async () => {
      await axios.get(GET_ALL_BLOG).then((res) => {
        console.log(res.data.data)
        setBlogItems(res.data.data)
      }).catch((err) => { console.log(err) });

    }
    console.log("refresh", refreshFlag)
    getAllBlog()
  }, [deleteFlag, refreshFlag])


  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = blogItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogItems.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogItems.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  const nav = useNavigate();
  return (
    <div className='admin-products'>
      <div className='wrapper-container'>
        <div className='admin-product-header'>
          <h2>Blogs</h2>
          <button onClick={() => { nav("/admin/add-blog") }}>Create New</button>
        </div>
        <div className='Admin-product-container'>
          {
            blogItems && blogItems.map(blog => {
              console.log("mapped times ")
              return (<BlogCard key={blog.blog_id}
                blogTitle={blog.blog_title}
                blogImage={blog.blog_image}
                blogDate={blog.create_At}
                blogId={blog.blog_id}
                blogDesc={blog.blog_description}
                blogTitle1={blog.blog_title1}
                blogTitle2={blog.blog_title2}
                blogTitle3={blog.blog_title3}
                blogDescription1={blog.blog_description1}
                blogDescription2={blog.blog_description2}
                blogDescription3={blog.blog_description3}
                setDeleteFlag={setDeleteFlag}
                setRefreshFlag={setRefreshFlag} />)
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

export default Blogs