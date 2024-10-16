import React from 'react'
import verified from '../assets/verify.png'
import tracking from '../assets/eye-tracking.png'
import customer_support from '../assets/24-7.png'
const HomeValues = () => {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2  mt-12 gap-4 items-center '>
      <div className='flex flex-col items-center justify-center bg-white border border-gray-200 text-center lg:p-8 md:p-4 p-12 '>
        <img className='w-16' src={verified} alt="Verified" />
        <p className='font-semibold mt-4 '>Verified Service Providers</p>
      </div>
      <div className='flex flex-col items-center justify-center bg-white border border-gray-200  text-center lg:p-8 md:p-4 p-12'>
        <img className='w-16' src={tracking} alt="" />
        <p className='font-semibold mt-4 '>Real Time Tracking</p>
      </div>
      <div className='flex flex-col items-center justify-center bg-white border border-gray-200  text-center lg:p-8 md:p-4 p-12'>
        <img  className='w-16'src={customer_support} alt="" />
        <p className='font-semibold mt-4'>24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default HomeValues
