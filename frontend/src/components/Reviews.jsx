import React from 'react'
import { reviews } from '../assets/assets'
import { FaArrowRight } from "react-icons/fa6";
const Reviews = () => {
  return (
    <div className='flex flex-col mt-8'>
      {/* ------ Headings ------- */}
      <div className="text-center">
        <p className="text-2xl sm:text-3xl font-semibold">
          Hire the Best, Verified by Real Users
        </p>
        <p className="text-secondaryColor">
          Read reviews from thousands of happy users.
        </p>
      </div>
      {/* ---- Reviews ------- */}
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2   gap-4 mt-6 '>
        {
            reviews.map((item,index)=>(
                <div key={index} className='p-2 border border-gray-200 bg-white'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={item.reviewer_image} alt="" />
                        </div>
                        <div>
                            <p className='font-medium'>{item.reviewer_name}</p>
                            <p className='text-secondaryColor text-sm'>{item.reviewer_city}</p>
                        </div>
                    </div>
                    <div className='mt-2 p-2'>
                        <p className='text-sm italic'>{item.review_about}</p>
                    </div>
                </div>
            ))
        }
      </div>
      <div className="flex justify-center mt-4">
      <button className="px-10 py-2 border rounded-full max-w-[250px] text-sm flex items-center gap-1 hover:gap-3 duration-300 transition-all">More Reviews
        <div className="text-mainColor text-sm">
            <FaArrowRight />
        </div>
      </button>
      </div>
    </div>
  )
}

export default Reviews
