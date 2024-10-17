import React, { useContext, useEffect, useState } from 'react';
import { categories } from '../assets/assets'; 
import { BeatLoader } from 'react-spinners';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { ProviderContext } from '../context/ProviderContext';

const BrowseServices = () => {
  const {category} = useParams()
  const [loading,setLoading] = useState(true)
    const {providers} = useContext(ProviderContext)
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [viewCategories, setViewCategories] = useState(false); 
  const [filteredCategory,setFilteredCategory] = useState([])
  const navigate = useNavigate()

  const handleSelectedCategory = (category) => {
    setLoading(true)
    setSelectedCategory(prev => prev === category ? null : category);
    setLoading(false)
  };

  const applyFilteredCategory = ()=>{
    setLoading(true)
    if(category){
      setFilteredCategory(providers.filter(provider => provider.category === category))
    }else{
      setFilteredCategory(providers)
    }
    setLoading(false)
  }

  useEffect(()=>{
    applyFilteredCategory()

  },[providers,category])



  return loading?
  <div className="flex justify-center items-center min-h-screen">
  <BeatLoader color="#212121" size={25} />
</div>
  : (
    <div className='border-t border-mainColor min-h-[90vh]'>
      {/* ---- For Mobile ----- */}
      <div 
        className='px-2 py-1 sm:hidden border mt-4 flex items-center gap-2 max-w-[200px] cursor-pointer' 
        onClick={() => setViewCategories(prev => !prev)} 
      >
        <p>Select for Categories</p>
        <MdOutlineKeyboardDoubleArrowRight className={`${viewCategories? 'rotate-90 duration-300 transition-all': ''} text-lg`} />
      </div>

      {/* ----- Browse Categories */} 
      <div className={`${viewCategories ? 'grid grid-cols-2' : 'hidden'} sm:flex sm:flex-wrap overflow-x-scroll gap-2 mt-2 sm:mt-8`}>
        {categories.map((item, index) => (
          <div 
            key={index} 
            className={`py-1 px-4 border rounded bg-white text-sm text-center cursor-pointer ${
              selectedCategory === item.category ? 'border border-mainColor shadow-md' : ''
            }`}
            onClick={() => {
                handleSelectedCategory(item.category);
                navigate(selectedCategory === item.category ? `/browse-services` : `/browse-services/${item.category}`);
              }}
          >
            <p className='w-full font-medium'>{item.category}</p>
          </div>
        ))}
      </div>
      {/* ----- Display All Providers */}
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4  mt-8 pb-6'>
        {
            filteredCategory.reverse().map((item,index)=>(
            <div onClick={()=>{window.scrollTo(0,0); navigate(`/${item._id}`)}} key={index} className='bg-white cursor-pointer border sm:p-4 p-8 overflow-hidden flex flex-col'>
            <div className='flex gap-2 items-center'>
            <img className='w-16 h-16 sm:w-20 sm:h-20 rounded-full' src={item.providerImage} alt="" />
            <div className='flex flex-col items-start'>
              <p className='font-medium sm:text-xl text-lg '>{item.providerName}</p>
              <p className='px-2 py-0.5 bg-blue-50 border text-center rounded-full text-xs sm:text-sm w-auto'>{item.category}</p>
            </div>
            </div>
            <div className='mt-4 sm:mt-2'>
              <p className='font-medium text-sm sm:text-lg'>Phone: <span className='font-mono'>{item.providerPhone}</span></p>
              <p className='font-medium overflow-scroll h-24 text-sm sm:text-lg'>Bio: <span className=' font-normal text-sm text-gray-600 '>{item.providerBio}</span></p>
            </div>
            <button className='mt-4 sm:mt-2 w-full bg-mainColor text-white text-sm py-2 hover:bg-secondaryColor'>View Provider</button>
            </div>
            ))
        }
      </div>
    </div>
  );
};

export default BrowseServices;
