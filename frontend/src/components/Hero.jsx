import React from 'react'
import heroImg from '../assets/hero-img2.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col lg:flex-row  items-center bg-mainColor text-white xl:p-20 lg:p-16  lg:my-12 md:gap-12 md:my-4 md:py-12 px-4 py-16 gap-16 my-8 '>
      {/* ----- Hero Left Side */}
      <div className='flex-1 '>
        <p className='xl:text-6xl lg:text-4xl md:text-5xl text-4xl'>Find the Right <br />Professional Anytime</p>
        <p className='text-lg font-light text-slate-300 mt-2'>Find trusted service providers for all your needs in a just few clicks.</p>
        <div className='mt-8 flex xl:gap-8 lg:gap-6 gap-4'>
            <button onClick={()=>{navigate('/browse-services'); window.scrollTo(0,0)}} className='bg-white text-mainColor px-4 py-2 rounded-lg '>Find Services</button>
            <a href='#view-services' className='bg-transparent text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-mainColor transition-all duration-300'>View Services</a>
        </div>
      </div>
      {/* ----- Hero Right Side */}
      <div className='flex-1'>
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Hero
