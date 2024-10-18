import React, { useContext, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import { IoSearch } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AllServices = () => {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
  const { posts , search , setSearch } = useContext(AppContext);  
  const [filterPosts, setFilterPosts] = useState([]); 
  const applyFilter = () => {
    setLoading(true);
    let postsCopy = posts.slice();
    if (search) {
      postsCopy = postsCopy.filter(item => 
        (item.providerData.providerName && item.providerData.providerName.toLowerCase().includes(search.toLowerCase())) ||
        (item.providerData.category && item.providerData.category.toLowerCase().includes(search.toLowerCase()))
      );
    }
    setFilterPosts(postsCopy);
    setLoading(false)
  };
  

  useEffect(() => {
    applyFilter();  
  }, [search, posts]);

  return loading? <div className="flex justify-center items-center min-h-screen">
  <BeatLoader color="#212121" size={25} />
</div>:(
    <div className='border-t border-mainColor min-h-[90vh]'>
      {/* ------ Search Container ------ */}
      <div className='flex flex-col items-center mt-6'>
        <div className='flex justify-between items-center w-[90%] sm:w-[80%] border rounded-full'>
          <input 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            type="search" 
            placeholder='Search' 
            className='bg-transparent outline-none border-none w-full p-2 ml-4' 
          />
          <IoSearch className='mr-4 text-lg' />
        </div>
      </div>
      {/* ------ Display All Services ------ */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-8">
        {filterPosts.reverse().map((item, index) => (
          <div key={index} className="p-4 border">
            <div onClick={()=>{window.scrollTo(0,0); navigate(`/${item.providerData._id}`)}} className="flex gap-2 items-center cursor-pointer">
              <img className="w-16 h-16 rounded-full" src={item.providerData.providerImage} alt="user" />
              <div>
                <p className="font-semibold">{item.providerData.providerName}</p>
                <p className="text-sm text-secondaryColor">{item.providerData.category}</p>
              </div>
            </div>
            <div>
              <p className="text-gray-600 italic mt-1">{item.postDescription}</p>
             <div className='flex items-center justify-center'>
                <div>
                <FaAngleLeft className='bg-slate-100 text-2xl cursor-pointer hover:text-white hover:bg-mainColor transition-all duration-150 p-1 rounded-full border mr-1' />
                </div>
             {item.postImages  && <img className="mt-2 w-[90%] " src={item.postImages[0]} alt="" />} 
             <div>
             <FaAngleRight className='bg-slate-100 text-2xl cursor-pointer hover:text-white hover:bg-mainColor transition-all duration-150 p-1 rounded-full border ml-1'  />
             </div>
             </div>
            </div>
            <div className="flex gap-2 mt-2 text-gray-600 text-sm">
            <p>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                |
                                <p>{new Date(item.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllServices;
