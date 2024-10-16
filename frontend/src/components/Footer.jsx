import React from 'react'
import logo from '../assets/Servicio_logo.png'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='border-t-2 px-4 sm:px-[10%] flex flex-col gap-12'>
      {/* -----Top------ */}
      <div className='flex flex-col md:flex-row mt-4 gap-12'>
        {/* --- Top Left ---- */}
        <div className='flex-1'>
        <div>
            <img className='w-52' src={logo} alt="Logo" />
        </div>
        <p className='text-sm text-secondaryColor w-4/5 font-medium'>Servicio connects users with reliable service providers across various categories like plumbing, carpentry, cleaning, and more. With verified reviews, instant quotes, and seamless booking, you can quickly get the job done by trusted professionals in your area.</p>
        </div>
        {/* --- Top Right ---- */}
        <div className='flex-1'> 
        <p className='font-semibold text-lg'>Quick Links</p>
        <div className='grid grid-cols-2 mt-2'>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Plumbers')}}>Plumbers</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Carpenters')}}>Carpenters</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Cleaners')}}>Cleaners</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Dentists')}}>Dentists</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Doctors')}}>Doctors</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Painters')}}>Painters</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Roofers')}}>Roofers</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Tutors')}}>Tutors</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Web Developers')}}>Web Developers</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Photographers')}}>Photographers</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Physical Therapists')}}>Physical Therapists</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Electricians')}}>Electricians</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Graphic Designers')}}>Graphic Designers</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/HVAC Technicians')}}>HVAC Technicians</p>
            <p className='text-base text-secondaryColor hover:pl-2 duration-300 transition-all cursor-pointer font-medium' onClick={()=>{window.scrollTo(0,0); navigate('/browse-services/Event Planners')}}>Event Planners</p>
        </div>
        </div>
      </div>
      {/* ---- Bottom ------ */}
      <div className='flex flex-col md:flex-row mt-4 gap-12 '>
        {/* --- Bottom Left ------ */}
        <div className='flex-1'>
            <p className='font-semibold text-lg'>Get in Touch</p>
            <div className='mt-2'>
                <p className='text-mainColor font-medium'>Email: <span className='text-secondaryColor'>servicio@gmail.com</span></p>
                <p className='text-mainColor font-medium'>Phone: <span className='text-secondaryColor'>+94 76 125 7751</span></p>
                <div className='flex gap-4 text-2xl text-secondaryColor mt-2'>
                    <FaFacebook className='cursor-pointer hover:border-2 rounded-full hover:p-0.5 transition-all duration-300 hover:border-mainColor' />
                    <AiFillInstagram className='cursor-pointer hover:border-2 rounded-full hover:p-0.5 transition-all duration-300 hover:border-mainColor'  />
                    <IoLogoWhatsapp className='cursor-pointer hover:border-2 rounded-full hover:p-0.5 transition-all duration-300 hover:border-mainColor'  />
                </div>
            </div>
        </div>
        {/* -----  Bottom Right ----- */}
        <div className='flex-1 flex flex-col items-center'> 
        <p className='font-semibold text-lg text-center'>Stay Updated</p>
        <p className='font-medium text-secondaryColor text-center w-4/5 mt-2'>Subscribe to our newsletter for the latest news, offers, and services near you.</p>
        <form className='flex justify-center border rounded-full  mt-2 box-border'>
            <input type="email" placeholder='Your Email' className='w-full outline-none px-4 py-2 rounded-full' />
            <button className='border py-2 px-4 rounded-full bg-mainColor text-white hover:bg-secondaryColor'>Subscribe</button>
        </form>
        </div>
      </div>
      {/*  ---- Copyright ------ */}
      <div className='py-2 border-t border-mainColor flex  flex-col sm:flex-row items-center justify-between'>
        <div>
        © 2024@ Servicio - All Rights Reserved 
        </div>
        <div className='flex gap-2'>
            <p onClick={()=>{navigate('/privacy-policy'); window.scrollTo(0,0)}} >Privacy Policy</p>
            |
            <p onClick={()=>{navigate('/terms-of-service');window.scrollTo(0,0)}}>Terms of Service</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
