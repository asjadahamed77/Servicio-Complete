import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Reviews = () => {
    const {reviews} = useContext(AppContext)
  return (
    <div className="border-t border-mainColor min-h-[90vh] flex flex-col items-center w-full">
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full   gap-4 mt-6 '>
        {
            reviews.map((item,index)=>(
                <div key={index} className='p-2 border border-gray-200 bg-white'>
                    <div className='flex items-center gap-4'>
                        <div>
                            <img className='w-16 h-16 rounded-full' src={item.reviewerImage} alt="" />
                        </div>
                        <div>
                            <p className='font-medium'>{item.reviewerName}</p>
                            <p className='text-secondaryColor text-sm'>{item.reviewerCity}</p>
                        </div>
                    </div>
                    <div className='mt-2 p-2'>
                        <p className='text-sm italic'>{item.reviewAbout}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Reviews
